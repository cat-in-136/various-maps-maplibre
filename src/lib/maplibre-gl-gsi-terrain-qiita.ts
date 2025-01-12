// https://qiita.com/Kanahiro/items/1e9c1a4ad6be76b27f0f

import maplibregl from 'maplibre-gl';

// RGB値を元に地形の高さを計算し、その高さに対応する新たなRGB値を返す関数
function gsidem2terrainrgb(r: number, g: number, b: number): [number, number, number] {
	// まず、RGB値を元に地形の高さを計算
	let height = r * 655.36 + g * 2.56 + b * 0.01;

	// 特定のRGB値(128, 0, 0)は高さ0として扱う
	if (r === 128 && g === 0 && b === 0) {
		height = 0;
	} else if (r >= 128) {
		// Rが128以上の場合は、地形の高さから一定値を引く
		height -= 167772.16;
	}

	// 地形の高さに基準値を加算し、さらにスケーリング
	height += 10000;
	height *= 10;

	// 新たなRGB値を計算
	const tB = (height / 256 - Math.floor(height / 256)) * 256;
	const tG = (Math.floor(height / 256) / 256 - Math.floor(Math.floor(height / 256) / 256)) * 256;
	const tR =
		(Math.floor(Math.floor(height / 256) / 256) / 256 -
			Math.floor(Math.floor(Math.floor(height / 256) / 256) / 256)) *
		256;

	// 新たなRGB値を返す
	return [tR, tG, tB];
}

// 地形データを扱うためのプロトコル
export function getGsiDemProtocolAction(customProtocol: string): maplibregl.AddProtocolAction {
	return async (
		params,
		_abortController: AbortController
	): ReturnType<maplibregl.AddProtocolAction> => {
		// 新しい画像を作成
		const image = new Image();
		image.crossOrigin = 'anonymous';
		// 画像のURLを取得し、gsidemプロトコル部分を除去してからimage.srcに設定
		image.src = params.url.replace(`${customProtocol}://`, '');
		await image.decode();

		// キャンバスを作成し、画像のサイズに合わせる
		const canvas = document.createElement('canvas');
		canvas.width = image.width;
		canvas.height = image.height;

		// 2Dコンテキストを取得し、画像を描画
		const context = canvas.getContext('2d') as CanvasRenderingContext2D;
		context.drawImage(image, 0, 0);

		// 画像のピクセルデータを取得
		const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

		// すべてのピクセルについて、RGB値を変換
		for (let i = 0; i < imageData.data.length / 4; i++) {
			const tRGB = gsidem2terrainrgb(
				imageData.data[i * 4],
				imageData.data[i * 4 + 1],
				imageData.data[i * 4 + 2]
			);
			imageData.data[i * 4] = tRGB[0];
			imageData.data[i * 4 + 1] = tRGB[1];
			imageData.data[i * 4 + 2] = tRGB[2];
		}

		// 変換後の画像データをキャンバスに戻す
		context.putImageData(imageData, 0, 0);

		// キャンバスからblobを作成
		const blob = (await new Promise((resolve, reject) => {
			canvas.toBlob((blob) => {
				if (blob) {
					resolve(blob);
				} else {
					reject();
				}
			}, 'image/png');
		})) as Blob;

		// そのblobをArrayBufferとしてcallback関数に渡す
		const data = await blob.arrayBuffer();
		return { data };
	};
}
