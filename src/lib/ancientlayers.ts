import { GSIMapLayers } from '../lib/gsimaplayers';
import * as MaplibreCompondLayerUI from '../lib/maplibre-compound-layer-ui';
import ANCIENT_LAYERS_TXT_URL from '../../static/assets/layers_txt/layersAncient.txt?url';

const ANCIENTLAYERS: { url: string }[] = [
	{
		url: ANCIENT_LAYERS_TXT_URL
	}
];

export class AncientLayers extends GSIMapLayers {
	getGroup(title: string = '古地図'): MaplibreCompondLayerUI.LayerConfig.LayerGroup {
		return super.getGroup(title);
	}

	async load() {
		await super.load(ANCIENTLAYERS);
	}
}
