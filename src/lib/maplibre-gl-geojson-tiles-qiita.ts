// https://qiita.com/mg_kudo/items/832ee30ed39b6c25df60
// https://github.com/mghs15/maplibre-geojson-tile/

import maplibregl from 'maplibre-gl';
//import Pbf from 'pbf';
import geojsonvt from 'geojson-vt';
import { fromGeojsonVt } from 'vt-pbf';

/*******************************************************
// MapLibre - addProtocol 関係設定
********************************************************/

async function processGeojsonTile(
	params: maplibregl.RequestParameters,
	abortController: AbortController
): Promise<Uint8Array> {
	//console.log(params);
	//const pbf = new Pbf();

	// URL は geojson-tile://maxNativeZoom=2;https://～～～/{z}/{x}/{y}.geojson を想定
	// 同じデータに何度もアクセスするため、ブラウザのキャッシュを頼ることになる
	const info = params.url.split('https://');
	const url = 'https://' + info[1];
	const add = info[0].replace('geojson-tile://', '');

	//console.log(url, add);

	const m = url.match(/\/(\d+)\/(\d+)\/(\d+)\.geojson/);
	if (!m || !m[1] || !m[2] || !m[3]) throw new Error(`wrong URL format: ${url}`);
	const [z, x, y] = [+m[1], +m[2], +m[3]];
	//console.log(x, y, z);

	// URL に組み込まれるパラメータは maxNativeZoom しかないことを想定
	// 他のパラメータを組み込む場合、取得方法の変更が必要
	const q = add.split(';')[0];
	const maxNativeZoom = q ? +q.split('=')[1] || z : z;

	const dz = maxNativeZoom < z ? z - maxNativeZoom : 0;
	const nativeZ = z - dz;
	const nativeX = x >> dz;
	const nativeY = y >> dz;
	const nativeUrl = url.replace(
		/\/(\d+)\/(\d+)\/(\d+)\.geojson/,
		`/${nativeZ}/${nativeX}/${nativeY}.geojson`
	);
	//console.log(dz, `/${nativeZ}/${nativeX}/${nativeY}`);
	//console.log(nativeUrl);

	const geoJSON = await fetch(nativeUrl, { signal: abortController.signal }).then((response) => {
		return response.json();
	});

	const tileIndex = geojsonvt(geoJSON, {
		generateId: true,
		indexMaxZoom: z,
		maxZoom: z
	});

	//console.log(tileIndex);
	const tile = tileIndex.getTile(z, x, y);
	//console.log(tile);

	const buffer = fromGeojsonVt({ v: tile });
	return buffer;
}

export function getGeoJsonProtocolAction(): maplibregl.AddProtocolAction {
	return async (
		params: maplibregl.RequestParameters,
		abortController: AbortController
	): ReturnType<maplibregl.AddProtocolAction> => {
		const data = await processGeojsonTile(params, abortController);
		return { data };
	};
}
