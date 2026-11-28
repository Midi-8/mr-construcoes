import { geoMercator } from 'd3-geo';

export type CityId = 'hamburg' | 'berlin' | 'munich' | 'dusseldorf' | 'dortmund' | 'bremen';
export type LangCode = 'pt' | 'en' | 'de';

export interface CityDef {
  id: CityId;
  lon: number;
  lat: number;
  coordsLabel: string;
  names: Record<LangCode, string>;
  /** Exact projected SVG coordinates in 600x680 viewBox */
  x: number;
  y: number;
  /** Label placement direction relative to pin */
  align: 'left' | 'right';
  /** Offset [dx, dy] in SVG units from city pin to pill anchor */
  offset: [number, number];
}

export const MAP_W = 600;
export const MAP_H = 680;

/** Simplified, faithful GeoJSON polygon ring of Germany ([longitude, latitude]), North up. */
const GERMANY_BORDER_LONLAT: [number, number][] = [
  [8.42, 54.92], [8.96, 54.90], [9.48, 54.83], [9.98, 54.56], [10.16, 54.36],
  [10.72, 54.38], [11.16, 54.44], [10.92, 54.02], [11.46, 53.96], [11.98, 54.18],
  [12.56, 54.44], [13.12, 54.46], [13.68, 54.56], [13.86, 54.18], [14.24, 53.92],
  [14.42, 53.28], [14.14, 52.86], [14.62, 52.42], [14.74, 51.92], [15.03, 51.28],
  [14.82, 50.87], [14.24, 50.88], [13.78, 50.74], [13.32, 50.58], [12.96, 50.42],
  [12.38, 50.28], [12.11, 50.32], [12.48, 49.76], [12.86, 49.38], [13.22, 49.08],
  [13.84, 48.77], [13.48, 48.54], [13.12, 48.24], [12.86, 48.02], [13.02, 47.62],
  [12.54, 47.72], [12.14, 47.68], [11.62, 47.52], [11.12, 47.42], [10.58, 47.54],
  [10.22, 47.27], [9.82, 47.52], [9.46, 47.64], [8.94, 47.68], [8.42, 47.58],
  [7.86, 47.56], [7.59, 47.59], [7.55, 48.12], [7.84, 48.58], [8.22, 48.98],
  [7.66, 49.05], [7.18, 49.14], [6.68, 49.18], [6.36, 49.47], [6.48, 49.84],
  [6.14, 50.14], [6.22, 50.56], [5.95, 50.94], [6.18, 51.42], [6.02, 51.84],
  [6.48, 51.88], [6.74, 51.96], [6.68, 52.32], [7.06, 52.66], [7.18, 53.22],
  [7.22, 53.52], [7.88, 53.68], [8.38, 53.62], [8.64, 53.86], [8.94, 53.94],
  [8.66, 54.36], [8.42, 54.92]
];

const PROJECTION = geoMercator().fitExtent(
  [
    [82, 52],
    [MAP_W - 82, MAP_H - 52]
  ],
  {
    type: 'Feature' as const,
    properties: {},
    geometry: {
      type: 'Polygon' as const,
      coordinates: [GERMANY_BORDER_LONLAT]
    }
  }
);

function projectToSVG(lon: number, lat: number): [number, number] {
  const pt = PROJECTION([lon, lat]);
  return pt ? [pt[0], pt[1]] : [MAP_W / 2, MAP_H / 2];
}

export const GERMANY_SVG_PATH =
  GERMANY_BORDER_LONLAT.map(([lon, lat], i) => {
    const [x, y] = projectToSVG(lon, lat);
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(' ') + ' Z';

const RAW_CITIES: Omit<CityDef, 'x' | 'y'>[] = [
  {
    id: 'hamburg',
    lon: 9.9937,
    lat: 53.5511,
    coordsLabel: '53.55° N · 9.99° E',
    names: { pt: 'Hamburgo', en: 'Hamburg', de: 'Hamburg' },
    align: 'right',
    offset: [18, -14]
  },
  {
    id: 'berlin',
    lon: 13.4050,
    lat: 52.5200,
    coordsLabel: '52.52° N · 13.40° E',
    names: { pt: 'Berlim', en: 'Berlin', de: 'Berlin' },
    align: 'left',
    offset: [-18, -14]
  },
  {
    id: 'munich',
    lon: 11.5820,
    lat: 48.1351,
    coordsLabel: '48.14° N · 11.58° E',
    names: { pt: 'Munique', en: 'Munich', de: 'München' },
    align: 'right',
    offset: [18, -8]
  },
  {
    id: 'dusseldorf',
    lon: 6.7735,
    lat: 51.2277,
    coordsLabel: '51.23° N · 6.77° E',
    names: { pt: 'Düsseldorf', en: 'Düsseldorf', de: 'Düsseldorf' },
    align: 'left',
    offset: [-18, 22]
  },
  {
    id: 'dortmund',
    lon: 7.4653,
    lat: 51.5136,
    coordsLabel: '51.51° N · 7.47° E',
    names: { pt: 'Dortmund', en: 'Dortmund', de: 'Dortmund' },
    align: 'right',
    offset: [20, -10]
  },
  {
    id: 'bremen',
    lon: 8.8017,
    lat: 53.0793,
    coordsLabel: '53.08° N · 8.80° E',
    names: { pt: 'Brémen', en: 'Bremen', de: 'Bremen' },
    align: 'left',
    offset: [-18, -8]
  }
];

export const CITIES: CityDef[] = RAW_CITIES.map((c) => {
  const [x, y] = projectToSVG(c.lon, c.lat);
  return { ...c, x, y };
});

export const CITY_BY_ID: Record<CityId, CityDef> = CITIES.reduce((acc, c) => {
  acc[c.id] = c;
  return acc;
}, {} as Record<CityId, CityDef>);

/** Builds a gentle curved geodesic SVG arc between two projected cities */
export function buildGeodesicArc(from: CityDef, to: CityDef): string {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.hypot(dx, dy) || 1;
  const bow = Math.min(48, len * 0.16);
  const cx = (from.x + to.x) * 0.5 - (dy / len) * bow;
  const cy = (from.y + to.y) * 0.5 + (dx / len) * bow;
  return `M ${from.x.toFixed(1)} ${from.y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${to.x.toFixed(1)} ${to.y.toFixed(1)}`;
}

export const UI_STRINGS: Record<LangCode, { legend: string; aria: string }> = {
  pt: {
    legend: 'ALEMANHA · 6 ZONAS DE ATUAÇÃO',
    aria: 'Mapa cartográfico da Alemanha com 6 zonas de atuação da MR Construções'
  },
  en: {
    legend: 'GERMANY · 6 OPERATING ZONES',
    aria: 'Cartographic map of Germany showing 6 operating zones of MR Construções'
  },
  de: {
    legend: 'DEUTSCHLAND · 6 EINSATZREGIONEN',
    aria: 'Kartografische Deutschlandkarte mit 6 Einsatzregionen von MR Construções'
  }
};
