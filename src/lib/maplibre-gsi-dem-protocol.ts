import * as maplibregl from 'maplibre-gl';

export function getGsiDemProtocolAction(protocol: string): maplibregl.AddProtocolAction {
	return async (params, abortController) => {
		if (!params.url.startsWith(`${protocol}://`)) {
			throw new Error(`Tile URL must be starts with ${protocol}://`);
		}
		const addr = params.url.substring(`${protocol}://`.length);

		const response = await fetch(addr, { mode: 'cors', signal: abortController.signal });
		if (!response.ok) {
			throw new Error(`Failed to load: ${response.statusText}: ${addr}`);
		}
		const blob = await response.blob();

		// Create an ImageBitmap from the convertion from blob
		const imageBitmap = await createImageBitmap(blob, {
			colorSpaceConversion: 'none',
			premultiplyAlpha: 'none'
		});
		const canvas = document.createElement('canvas');
		canvas.width = imageBitmap.width;
		canvas.height = imageBitmap.height;

		// Create 2D context.
		// On Linux, set willReadFrequently to true to avoid GPU rendering issues.
		const isLinux = navigator.userAgent.toLowerCase().includes('linux');
		const ctx = canvas.getContext('2d', isLinux ? { willReadFrequently: true } : {})!;

		ctx.drawImage(imageBitmap, 0, 0);

		const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
		for (let i = 0; i < imageData.data.length >> 2; i++) {
			const R = imageData.data[4 * i + 0];
			const G = imageData.data[4 * i + 1];
			const B = imageData.data[4 * i + 2];

			// 国土地理院標高タイル(PNG形式)
			// https://maps.gsi.go.jp/development/demtile.html
			// x = 2^16 R + 2^8 G + B
			// x < 2^23の場合　h = x u
			// x = 2^23の場合　h = NA
			// x > 2^23の場合　h = (x-2^24) u
			// uは標高分解能（0.01m）を表します。
			const x = (R << 16) + (G << 8) + (B << 0);
			const h = x < 1 << 23 ? x : x === 1 << 23 ? 0 /* NA */ : x - (1 << 24);

			// Mapbox Terrain-RGB v1 Elevation
			// https://docs.mapbox.com/data/tilesets/reference/mapbox-terrain-rgb-v1/
			// height = -10000 + ((R * 256 * 256 + G * 256 + B) * 0.1)

			const terrainRGB = (h + 1000000) / 10;

			imageData.data[4 * i + 0] = (terrainRGB >> 16) & 0xff; // R
			imageData.data[4 * i + 1] = (terrainRGB >> 8) & 0xff; // G
			imageData.data[4 * i + 2] = (terrainRGB >> 0) & 0xff; // B
		}
		ctx.putImageData(imageData, 0, 0);

		const newBlob = await new Promise<Blob | null>((resolve) =>
			canvas.toBlob(resolve, 'image/png')
		);
		if (newBlob) {
			const buffer = await newBlob.arrayBuffer();
			return { data: buffer };
		} else {
			throw new Error('Failed to create blob from canvas');
		}
	};
}
