import { GSIMapLayers } from '$lib/gsimaplayers/gsimaplayers';
import { type LayerConfig } from '$lib/layer-config';
import ANCIENT_LAYERS_TXT_URL from '$lib/static/assets/layers_txt/layersAncient.txt?url';
import OTHERS_LAYERS_TXT_URL from '$lib/static/assets/layers_txt/layersOthers.txt?url';

export class AncientLayers extends GSIMapLayers {
	getGroup(title: string = '古地図'): LayerConfig.LayerGroup {
		return super.getGroup(title);
	}

	async load() {
		await super.load([
			{
				url: ANCIENT_LAYERS_TXT_URL
			}
		]);
	}
}

export class OthersLayers extends GSIMapLayers {
	getGroup(title: string = 'その他の外部地図'): LayerConfig.LayerGroup {
		return super.getGroup(title);
	}

	async load() {
		await super.load([
			{
				url: OTHERS_LAYERS_TXT_URL
			}
		]);
	}
}
