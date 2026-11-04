/* Optional raster basemaps for the interactive map (loaded only when the visitor picks one).
 *
 * Tiles are standard Web Mercator "slippy map" tiles (256 px), so they line up exactly with the
 * vector layers, which use the same projection.
 *
 * IMPORTANT - usage terms: every provider below has a fair-use policy meant for light traffic and
 * requires visible attribution (shown on the map). Before a high-traffic launch, switch to a provider
 * with an API key / plan (MapTiler, Stadia, Thunderforest, ...) by editing the `url` fields here:
 *   OpenStreetMap : https://operations.osmfoundation.org/policies/tiles/
 *   OpenTopoMap   : https://opentopomap.org/about
 *   CARTO         : https://carto.com/attribution
 * Placeholders: {z} {x} {y}, {s} = one of `subdomains`, {theme} = "light" | "dark" (follows the site theme).
 */
window.TS_TILES = {
  osm: {
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    maxZoom: 12,
    attr: '© OpenStreetMap contributors',
    attrUrl: 'https://www.openstreetmap.org/copyright'
  },
  topo: {
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    subdomains: 'abc',
    maxZoom: 10,
    attr: '© OpenStreetMap contributors, SRTM | © OpenTopoMap (CC-BY-SA)',
    attrUrl: 'https://opentopomap.org/about'
  },
  light: {
    url: 'https://{s}.basemaps.cartocdn.com/{theme}_nolabels/{z}/{x}/{y}.png',
    subdomains: 'abcd',
    maxZoom: 12,
    themed: true,
    attr: '© OpenStreetMap contributors © CARTO',
    attrUrl: 'https://carto.com/attribution'
  }
};
