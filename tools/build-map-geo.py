#!/usr/bin/env python3
"""
Builds js/map-geo.js (window.TS_GEO) from Natural Earth vector data (public domain,
https://www.naturalearthdata.com).  Output is pre-projected SVG path data in Web Mercator
(the projection used by Google/OSM maps), so the browser only has to draw it.

Usage:
    pip install shapely
    # download these 1:10m GeoJSON files into ./ne/  (nvkelso/natural-earth-vector/geojson):
    #   ne_10m_admin_0_countries, ne_10m_admin_1_states_provinces,
    #   ne_10m_rivers_lake_centerlines, ne_10m_lakes, ne_10m_populated_places_simple
    python3 tools/build-map-geo.py ne/ js/map-geo.js
"""
import json, math, sys, os
from shapely.geometry import shape, box, Point, LineString, Polygon, MultiPolygon, MultiLineString
from shapely.ops import unary_union, polylabel

SRC = sys.argv[1] if len(sys.argv) > 1 else 'ne'
OUT = sys.argv[2] if len(sys.argv) > 2 else 'js/map-geo.js'

# ---- view & projection (must stay in sync with the runtime, which reads TS_GEO.vb) ----
W, LON0, LON1, LAT0, LAT1 = 800, 51.4, 68.2, 34.2, 43.4
my = lambda lat: math.log(math.tan(math.pi / 4 + math.radians(lat) / 2))
K = W / (LON1 - LON0)              # px per degree of longitude
S = K * 180 / math.pi              # px per radian of Mercator y
H = round((my(LAT1) - my(LAT0)) * S)
X = lambda lon: (lon - LON0) * K
Y = lambda lat: (my(LAT1) - my(lat)) * S
VIEW = box(LON0 - 0.4, LAT0 - 0.4, LON1 + 0.4, LAT1 + 0.4)

def load(n):
    with open(os.path.join(SRC, f'ne_10m_{n}.geojson'), encoding='utf8') as f:
        return json.load(f)

def fmt(v):
    s = f'{v:.1f}'
    return s[:-2] if s.endswith('.0') else s

def ring(coords):
    return 'M' + ' '.join(f'{fmt(X(x))} {fmt(Y(y))}' for x, y in coords) + 'Z'

def path(geom, tol):
    """Clip to the view, simplify, and emit compact SVG path data."""
    g = geom.intersection(VIEW)
    if g.is_empty: return ''
    g = g.simplify(tol, preserve_topology=True)
    out = []
    def poly(p):
        out.append(ring(list(p.exterior.coords)))
        for i in p.interiors: out.append(ring(list(i.coords)))
    def line(l): out.append('M' + ' '.join(f'{fmt(X(x))} {fmt(Y(y))}' for x, y in l.coords))
    for part in getattr(g, 'geoms', [g]):
        if isinstance(part, Polygon): poly(part)
        elif isinstance(part, (LineString,)): line(part)
        elif hasattr(part, 'geoms'):
            for q in part.geoms:
                (poly if isinstance(q, Polygon) else line)(q)
    return ''.join(out)

# ---- countries --------------------------------------------------------------------
countries = {f['properties']['ISO_A3']: shape(f['geometry']) for f in load('admin_0_countries')['features']
             if f['properties']['ISO_A3'] in ('TKM', 'IRN', 'AFG', 'UZB', 'KAZ', 'TJK', 'AZE')}
tkm, iran = countries['TKM'], countries['IRN']
geo = {'vb': {'w': W, 'h': H, 'lonMin': LON0, 'lonMax': LON1, 'latMin': LAT0, 'latMax': LAT1}}
geo['countries'] = {k: path(v, 0.012 if k == 'TKM' else 0.02) for k, v in countries.items() if v.intersects(VIEW)}

# ---- velayats (admin-1) -------------------------------------------------------------
VEL = {  # NE name -> (id, tk, fa)
    'Ahal': ('ahal', 'Ahal', 'آخال'), 'Balkan': ('balkan', 'Balkan', 'بالکان'), 'Mary': ('mary', 'Mary', 'مری'),
    'Chardzhou': ('lebap', 'Lebap', 'لبپ'), 'Tashauz': ('dashoguz', 'Daşoguz', 'داشوغوز'),
}
LABEL_AT = {'balkan': (55.2, 40.55), 'mary': (62.9, 37.0), 'lebap': (62.3, 40.25)}   # others: automatic
vel = []
for f in load('admin_1_states_provinces')['features']:
    p = f['properties']
    if p.get('adm0_a3') == 'TKM' and p['name'] in VEL:
        i, tk, fa = VEL[p['name']]
        g = shape(f['geometry'])
        big = max(getattr(g, 'geoms', [g]), key=lambda q: q.area)
        pl = polylabel(big, tolerance=0.02)
        lx, ly = LABEL_AT.get(i, (pl.x, pl.y))
        if not g.contains(Point(lx, ly)): lx, ly = pl.x, pl.y
        vel.append({'id': i, 'tk': tk, 'fa': fa, 'd': path(g, 0.012), 'lon': round(lx, 2), 'lat': round(ly, 2)})
geo['velayats'] = vel

# ---- water ----------------------------------------------------------------------------
LAKES = {'South Aral Sea': ('aral', 'Aral deňzi', 'دریاچهٔ آرال'), 'Sarygamysh Köli': ('sarygamysh', 'Sarygamyş', 'ساری‌قمیش')}
lakes = []
for f in load('lakes')['features']:
    n = f['properties']['name']
    if n in LAKES:
        i, tk, fa = LAKES[n]; g = shape(f['geometry']); c = g.representative_point()
        lakes.append({'id': i, 'tk': tk, 'fa': fa, 'd': path(g, 0.01), 'lon': round(c.x, 2), 'lat': round(c.y, 2)})
geo['lakes'] = lakes

RIV = {'Amu  Darya': ('amu', 'Amyderýa', 'آمودریا'), 'Atrek': ('atrek', 'Etrek', 'اترک'), 'Harirud': ('hari', 'Tejen (Harirud)', 'تجن (هری‌رود)'),
       'Panj': ('panj', 'Panj', 'پنج')}
rivers = []
for f in load('rivers_lake_centerlines')['features']:
    n = (f['properties'].get('name') or '')
    if n in RIV:
        i, tk, fa = RIV[n]; g = shape(f['geometry'])
        d = path(g, 0.01)
        if not d: continue
        clipped = g.intersection(box(LON0 + 0.6, LAT0 + 0.4, LON1 - 0.6, LAT1 - 0.4))
        parts = [q for q in getattr(clipped, 'geoms', [clipped]) if not q.is_empty]
        longest = max(parts, key=lambda q: q.length) if parts else None
        r = {'id': i, 'tk': tk, 'fa': fa, 'd': d}
        if longest is not None:
            a, m, b = (longest.interpolate(t, normalized=True) for t in (0.44, 0.5, 0.56))
            ang = math.degrees(math.atan2(Y(b.y) - Y(a.y), X(b.x) - X(a.x)))
            if ang > 90: ang -= 180
            if ang < -90: ang += 180
            r.update({'lon': round(m.x, 3), 'lat': round(m.y, 3), 'rot': round(ang)})
        rivers.append(r)
geo['rivers'] = rivers

# ---- Turkmen-populated provinces beyond Turkmenistan (admin-1 outlines) -----------------------------
# Provinces named in the sources listed in js/map-data.js; whole provinces are drawn, so the UI says
# that Turkmens live in only part of each.
REG = {  # (adm0, NE name) -> (id, tk, fa)
    ('IRN', 'Golestan'): ('golestan', 'Golestan', 'گلستان'),
    ('IRN', 'North Khorasan'): ('nkhorasan', 'Demirgazyk Horasan', 'خراسان شمالی'),
    ('IRN', 'Razavi Khorasan'): ('rkhorasan', 'Räzewi Horasan', 'خراسان رضوی'),
    ('AFG', 'Faryab'): ('faryab', 'Faryab', 'فاریاب'),
    ('AFG', 'Jawzjan'): ('jowzjan', 'Jowzjan', 'جوزجان'),
    ('AFG', 'Badghis'): ('badghis', 'Badgis', 'بادغیس'),
    ('AFG', 'Balkh'): ('balkh', 'Balh', 'بلخ'),
    ('AFG', 'Hirat'): ('herat', 'Hyrat', 'هرات'),
    ('UZB', 'Khorezm'): ('khorezm', 'Horezm', 'خوارزم'),
    ('UZB', 'Surkhandarya'): ('surkhandarya', 'Surhandarýa', 'سرخان‌دریا'),
    ('UZB', 'Karakalpakstan'): ('karakalpakstan', 'Garagalpagystan', 'قره‌قالپاقستان'),
}
REG_LABEL_AT = {'khorezm': (60.95, 41.2), 'karakalpakstan': (60.3, 42.9)}   # others: automatic (pole of inaccessibility)
regions = []
for f in load('admin_1_states_provinces')['features']:
    p = f['properties']; k = (p.get('adm0_a3'), p.get('name'))
    if k in REG:
        i, tk, fa = REG[k]
        g = shape(f['geometry']).intersection(VIEW)
        big = max(getattr(g, 'geoms', [g]), key=lambda q: q.area)
        vis = big.intersection(box(LON0 + 0.5, LAT0 + 0.3, LON1 - 0.5, LAT1 - 0.3))
        pl = polylabel(vis if not vis.is_empty and vis.geom_type == 'Polygon' else big, tolerance=0.03)
        lx, ly = REG_LABEL_AT.get(i, (pl.x, pl.y))
        regions.append({'id': i, 'cc': k[0], 'tk': tk, 'fa': fa, 'd': path(g, 0.02), 'lon': round(lx, 2), 'lat': round(ly, 2)})
geo['regions'] = regions

# ---- soft relief washes (approximate; drawn blurred and clipped to the border) ------------
# Kopet Dag: a strip along the Iranian border; Karakum: the sandy interior (hand-placed, deliberately soft).
kd = tkm.union(iran).intersection(tkm.boundary.intersection(iran.buffer(0.02)).buffer(0.14)).intersection(box(54.3, 36.4, 60.5, 38.4))
geo['kopet'] = path(kd, 0.02)
karakum = Polygon([(53.8, 39.7), (54.3, 40.9), (56.6, 41.4), (58.3, 41.9), (60.0, 41.3), (61.5, 40.3), (62.4, 39.0), (63.3, 37.7),
                   (62.2, 37.3), (61.0, 37.1), (60.0, 37.9), (58.6, 38.3), (57.0, 38.6), (55.6, 38.9), (54.4, 39.2)])
geo['karakum'] = path(karakum.intersection(tkm), 0.02)
geo['karakumCore'] = path(karakum.intersection(tkm).buffer(-0.45), 0.03)

# ---- places (coordinates from Natural Earth; names are ours) ------------------------------------
NAMES = {  # NE name -> (id, tk, fa, own)   own=True: inside Turkmenistan
    'Mary': ('mary', 'Mary', 'مری', 1), 'Balkanabat': ('balkanabat', 'Balkanabat', 'بالکان‌آباد', 1), 'Serdar': ('serdar', 'Serdar', 'سردار', 1),
    'Tejen': ('tejen', 'Tejen', 'تجن', 1), 'Atamyrat': ('atamyrat', 'Atamyrat', 'آتامرات', 1),
    'Mashhad': ('mashhad', 'Meşhet', 'مشهد', 0), 'Gorgan': ('gorgan', 'Gürgen', 'گرگان', 0), 'Bukhara': ('bukhara', 'Buhara', 'بخارا', 0),
'Mazar-i-Sharif': ('mazar', 'Mazar-y Şerif', 'مزار شریف', 0), 'Samarkand': ('samarkand', 'Samarkant', 'سمرقند', 0),
    'Qarshi': ('qarshi', 'Garşy', 'قرشی', 0), 'Urgentch': ('urgench', 'Urgenç', 'اورگنچ', 0), 'Nukus': ('nukus', 'Nukus', 'نوکوس', 0),
    'Bojnurd': ('bojnurd', 'Bojnurt', 'بجنورد', 0),
}
places = []
for f in load('populated_places_simple')['features']:
    n = f['properties']['name']
    if n in NAMES and n not in [p.get('_n') for p in places]:
        i, tk, fa, own = NAMES[n]
        x, y = f['geometry']['coordinates']
        if LON0 < x < LON1 and LAT0 < y < LAT1:
            places.append({'_n': n, 'id': i, 'tk': tk, 'fa': fa, 'own': own, 'lon': round(x, 3), 'lat': round(y, 3)})
for p in places: p.pop('_n')
geo['places'] = places

# Region labels (placed by hand; rot = degrees, clockwise)
geo['labels'] = [
    {'id': 'karakum', 'tk': 'Garagum', 'fa': 'قره‌قوم', 'lon': 59.3, 'lat': 39.6, 'rot': 0, 'cls': 'desert'},
    {'id': 'kopet', 'tk': 'Köpetdag', 'fa': 'کپه‌داغ', 'lon': 58.9, 'lat': 37.05, 'rot': 12, 'cls': 'mount'},
    {'id': 'kbg', 'tk': 'Garabogazköl', 'fa': 'قره‌بغاز‌گل', 'lon': 53.2, 'lat': 41.2, 'rot': 0, 'cls': 'water'},
    {'id': 'ustyurt', 'tk': 'Üstýurt', 'fa': 'اوستیورت', 'lon': 55.3, 'lat': 42.3, 'rot': 0, 'cls': 'desert'},
]

body = json.dumps(geo, ensure_ascii=False, separators=(',', ':'))
with open(OUT, 'w', encoding='utf8') as f:
    f.write('/* Generated by tools/build-map-geo.py from Natural Earth (public domain). Do not edit by hand. */\n'
            'window.TS_GEO = ' + body + ';\n')
print(f'wrote {OUT}: {len(body)/1024:.0f} KB, view {W}x{H}')
print({k: (len(v) if isinstance(v, (list, dict, str)) else v) for k, v in geo.items()})
print('missing places:', [n for n in NAMES if n not in [p["_n"] if "_n" in p else '' for p in places] and NAMES[n][0] not in [p['id'] for p in places]])
