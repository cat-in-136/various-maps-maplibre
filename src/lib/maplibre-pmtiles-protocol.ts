import { Protocol } from 'pmtiles';

export function getPmtilesProtocol() {
	const protocol = new Protocol();
	return protocol.tile;
}
