/* Dependency-free integrity checks:  node tests/check.js
   - fa/tk data have identical structure
   - every nav item has labels in both languages
   - every srcs id / icon name resolves
   - quiz is well-formed; map points sit inside the outline
   - no Cyrillic or Arabic ي/ك slipped into text                                           */
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = path.join(__dirname, '..', 'js') + path.sep;
const sb = { console, window: {}, document: {}, localStorage: { getItem(){ return null; }, setItem(){} }, navigator: {} };
sb.window = sb; vm.createContext(sb);
const files = ['icons.js','data.js','data-extra.js','data-new.js','genealogy.js','names.js','dictionary.js','map-geo.js','sections.js'];
vm.runInContext(files.map(f => fs.readFileSync(root + f, 'utf8')).join('\n;\n') +
  '\n;globalThis.__E={DATA,NAV_ITEMS,ICONS,GEO:window.TS_GEO};', sb);
const { DATA, NAV_ITEMS, ICONS } = sb.__E;
const src = fs.readFileSync(root + 'sections.js', 'utf8');
let fail = 0; const bad = (m) => { fail++; console.error('FAIL ' + m); };

// 1. fa/tk parity
(function walk(a, b, p){
  if(Array.isArray(a) !== Array.isArray(b)) return bad(p + ' array mismatch');
  if(Array.isArray(a)){ if(a.length !== b.length) bad(`${p} length fa=${a.length} tk=${b.length}`); a.forEach((x, i) => b[i] !== undefined && walk(x, b[i], p + '[' + i + ']')); return; }
  if(a && typeof a === 'object'){ for(const k in a){ if(!(k in (b || {}))) bad(p + '.' + k + ' missing in tk'); else walk(a[k], b[k], p + '.' + k); } for(const k in b) if(!(k in a)) bad(p + '.' + k + ' missing in fa'); }
})(DATA.fa, DATA.tk, 'DATA');

// 2. nav labels
for(const L of ['fa', 'tk']) for(const n of NAV_ITEMS){
  for(const k of ['nav', 'subtitle']) if(!DATA[L][k][n.id]) bad(`${L}.${k}.${n.id} missing`);
  if(n.id !== 'dashboard' && !DATA[L][n.id]) bad(`${L}.${n.id} block missing`);
}

// 3. icons and source ids
const names = new Set(Object.keys(ICONS || {}));
const reg = new Set([...src.matchAll(/^\s{4}(\w+):\s*\{ t:\[/gm)].map(m => m[1]));
const keys = [...src.matchAll(/^\s{4}(\w+):\s*\{ t:\[/gm)].map(m => m[1]);
keys.filter((k, i) => keys.indexOf(k) !== i).forEach(k => bad('duplicate SRC key ' + k));
(function rx(o, p){
  if(Array.isArray(o)) o.forEach((x, i) => rx(x, p + '[' + i + ']'));
  else if(o && typeof o === 'object') for(const k in o){
    if(k === 'icon' && typeof o[k] === 'string' && !names.has(o[k])) bad(`unknown icon "${o[k]}" at ${p}`);
    else if(k === 'srcs' && typeof o[k] === 'string') o[k].split(',').filter(Boolean).forEach(id => { if(!reg.has(id)) bad(`unknown source "${id}" at ${p}`); });
    else rx(o[k], p + '.' + k);
  }
})(DATA.fa, 'fa');

// 4. quiz
DATA.fa.quiz.questions.forEach((q, i) => {
  if(q.options.length < 2 || !(q.correct >= 0 && q.correct < q.options.length)) bad('quiz #' + (i + 1) + ' bad correct index');
  if(new Set(q.options).size !== q.options.length) bad('quiz #' + (i + 1) + ' duplicate options');
  if(!q.explain) bad('quiz #' + (i + 1) + ' no explanation');
});

// 5. map: pre-projected geography must exist, and every Turkmen point must sit inside the real border
const GEO = sb.__E.GEO;
if(!GEO || !GEO.countries || !GEO.countries.TKM) bad('TS_GEO missing (run tools/build-map-geo.py)');
else {
  const vb = GEO.vb, KX = vb.w / (vb.lonMax - vb.lonMin), SY = KX * 180 / Math.PI;
  const my = lat => Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
  const toPx = (lon, lat) => [(lon - vb.lonMin) * KX, (my(vb.latMax) - my(lat)) * SY];
  const rings = GEO.countries.TKM.split('M').filter(Boolean).map(r => { const n = r.replace('Z', '').trim().split(/\s+/).map(Number); const pts = []; for(let i = 0; i < n.length; i += 2) pts.push([n[i], n[i + 1]]); return pts; });
  const inside = (x, y) => { let c = false; for(const T of rings) for(let i = 0, j = T.length - 1; i < T.length; j = i++){ const [xi, yi] = T[i], [xj, yj] = T[j]; if(((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) c = !c; } return c; };
  DATA.fa.map.points.forEach(p => { if(p.kind !== 'iran' && !inside(...toPx(p.lon, p.lat))) bad(`map point ${p.id} (${p.lon},${p.lat}) is outside the Turkmenistan border`); });
  DATA.fa.map.areas.forEach(a => { if(!inside(...toPx(a.lon, a.lat))) bad(`map area ${a.id} centre is outside the Turkmenistan border`); });
  if(GEO.velayats.length !== 5) bad('expected 5 velayats, got ' + GEO.velayats.length);
  ['fa', 'tk'].forEach(L => [...GEO.velayats, ...GEO.lakes, ...GEO.rivers, ...GEO.places, ...GEO.labels].forEach(o => { if(!o[L]) bad(`geo object ${o.id} has no ${L} name`); }));
}

// 6. text hygiene
const all = []; (function s(o, p){ if(typeof o === 'string') all.push([p, o]); else if(Array.isArray(o)) o.forEach((x, i) => s(x, p + '[' + i + ']')); else if(o && typeof o === 'object') for(const k in o) s(o[k], p + '.' + k); })(DATA, 'DATA');
all.forEach(([p, t]) => {
  if(/[\u0400-\u04FF]/.test(t)) bad('Cyrillic in ' + p);
  if(/[\u064A\u0643]/.test(t)) bad('Arabic ي/ك in ' + p);
  if(/undefined|\[object/.test(t)) bad('literal undefined in ' + p);
});

console.log(fail ? `\n${fail} problem(s)` : 'All data checks passed ✔');
process.exit(fail ? 1 : 0);
