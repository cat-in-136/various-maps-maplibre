import { GSIMapLayers } from './gsimaplayers';
import * as MaplibreCompondLayerUI from '../../lib/maplibre-compound-layer-ui';
import ANCIENT_LAYERS_TXT_URL from '../../../static/assets/layers_txt/layersAncient.txt?url';
import OTHERS_LAYERS_TXT_URL from '../../../static/assets/layers_txt/layersOthers.txt?url';

export class AncientLayers extends GSIMapLayers {
	getGroup(title: string = '古地図'): MaplibreCompondLayerUI.LayerConfig.LayerGroup {
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
	getGroup(title: string = 'その他の外部地図'): MaplibreCompondLayerUI.LayerConfig.LayerGroup {
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
