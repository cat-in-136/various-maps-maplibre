import type maplibregl from 'maplibre-gl';
import type { TerrainSource } from '$lib/layer-config';

export type TerrainSources = {
	[id: string]: TerrainSource;
};

export type NonfreeKeys = {
	maptiler?: string;
};

const FREE_TERRAIN_SOURCES: TerrainSources = {
	'terrain-aws': {
		title: 'Terrain Tiles on AWS',
		source: {
			type: 'raster-dem',
			tiles: ['https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'],
			encoding: 'terrarium',
			tileSize: 256,
			maxzoom: 15,
			minzoom: 1,
			attribution:
				'ArcticDEM terrain data DEM(s) were created from DigitalGlobe, Inc., imagery and funded under National Science Foundation awards 1043681, 1559691, and 1542736; / Australia terrain data © Commonwealth of Australia (Geoscience Australia) 2017; / Austria terrain data © offene Daten Österreichs – Digitales Geländemodell (DGM) Österreich; / Canada terrain data contains information licensed under the Open Government Licence – Canada; / Europe terrain data produced using Copernicus data and information funded by the European Union - EU-DEM layers; / Global ETOPO1 terrain data U.S. National Oceanic and Atmospheric Administration / Mexico terrain data source: INEGI, Continental relief, 2016; / New Zealand terrain data Copyright 2011 Crown copyright (c) Land Information New Zealand and the New Zealand Government (All rights reserved); / Norway terrain data © Kartverket; / United Kingdom terrain data © Environment Agency copyright and/or database right 2015. All rights reserved; / United States 3DEP (formerly NED) and global GMTED2010 and SRTM terrain data courtesy of the U.S. Geological Survey.'
		}
	},
	'terrain-gsi': {
		title: '地理院地図標高タイル',
		source: {
			type: 'raster-dem',
			tiles: ['gsidem://https://cyberjapandata.gsi.go.jp/xyz/dem_png/{z}/{x}/{y}.png'],
			tileSize: 256,
			minzoom: 1,
			maxzoom: 14,
			attribution:
				'<a href="https://maps.gsi.go.jp/development/ichiran.html#dem" target="_blank">地理院タイル(標高タイル)</a>'
		}
	},
	'terrain-gsj-land': {
		title: '産総研陸域統合DEM',
		source: {
			type: 'raster-dem',
			tiles: ['https://gbank.gsj.jp/seamless/elev/terrainRGB/land/{z}/{y}/{x}.png'],
			tileSize: 256,
			minzoom: 0,
			maxzoom: 19,
			attribution:
				'<a href="https://tiles.gsj.jp/tiles/elev/tiles.html" target="_blank">産業技術総合研究所 シームレス標高タイル(陸域統合DEM)</a>'
		}
	}
};

export function getTerrainSources(nonFreeKeys: NonfreeKeys): TerrainSources {
	const sources: TerrainSources = { ...FREE_TERRAIN_SOURCES };

	if (nonFreeKeys.maptiler) {
		const key = nonFreeKeys.maptiler;
		sources['terrain-maptiler-terrain-rgb'] = {
			title: 'Maptiler Terrain RGB',
			source: {
				type: 'raster-dem',
				url: `https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json?key=${key}`
			}
		};
		sources['terrain-maptiler-terrain-ocean'] = {
			title: 'Maptiler Terrain Ocean',
			source: {
				type: 'raster-dem',
				url: `https://api.maptiler.com/tiles/ocean-rgb/tiles.json?key=${key}`
			}
		};
	}

	return sources;
}
