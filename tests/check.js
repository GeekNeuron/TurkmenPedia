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
const files = ['icons.js','data.js','data-extra.js','data-new.js','genealogy.js','names.js','dictionary.js','genealogy-extra.js','map-data.js','map-geo.js','map-tiles.js','world-extra.js','culture-extra.js','content-extra.js','quiz-extra.js','mature-extra.js','sections.js','bibliography.js'];
vm.runInContext(files.map(f => fs.readFileSync(root + f, 'utf8')).join('\n;\n') +
  '\n;globalThis.__E={DATA,NAV_ITEMS,ICONS,GEO:window.TS_GEO,GN:GENEALOGY};', sb);
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
(sb.WORLD_SRC || []).forEach(x => reg.add(x.id));   // sources registered by js/world-extra.js
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

// 3b. every navigation item has an icon, and no two sections share one
const navIcons = NAV_ITEMS.map(n => n.icon);
NAV_ITEMS.forEach(n => { if(!names.has(n.icon)) bad(`nav item ${n.id} uses unknown icon "${n.icon}"`); });
navIcons.filter((x, i) => navIcons.indexOf(x) !== i).forEach(x => bad(`two navigation items share the icon "${x}"`));


// 3c. the icon in the page header must match the icon in the navigation menu
(function(){
  const nav = Object.fromEntries(NAV_ITEMS.map(n => [n.id, n.icon]));
  ['app.js', 'sections.js'].forEach(f => {
    const code = fs.readFileSync(root + f, 'utf8');
    for(const m of code.matchAll(/(?:sectionHead|renderCardListSection)\(d,\s*'(\w+)',\s*'(\w+)'/g)){
      if(nav[m[1]] && nav[m[1]] !== m[2]) bad(`${f}: page header for "${m[1]}" uses icon "${m[2]}" but the menu uses "${nav[m[1]]}"`);
    }
  });
})();

// 3d. every 'srcs' id used by the world section resolves (SRC registry + WORLD_SRC)
(function(){
  const known = new Set([...reg, ...(sb.WORLD_SRC || []).map(x => x.id)]);
  ['fa', 'tk'].forEach(L => DATA[L].world.items.forEach(it => String(it.srcs || '').split(',').filter(Boolean).forEach(id => { if(!known.has(id)) bad(`${L}: world item ${it.id} cites unknown source ${id}`); })));
  (sb.WORLD_SRC || []).forEach(x => { if(!/^https:\/\//.test(x.u)) bad('world source not https: ' + x.id); });
})();


// 3e. regression guard: the storage helper must probe the real window.localStorage (a bad find/replace once broke persistence)
(function(){
  const code = fs.readFileSync(root + 'app.js', 'utf8');
  if(/window\.LS\b/.test(code)) bad('app.js: "window.LS" does not exist; the storage probe must use window.localStorage');
  if(!/window\.localStorage\.setItem\(t,/.test(code)) bad('app.js: storage probe not found');
})();

// 4. quiz
DATA.fa.quiz.questions.forEach((q, i) => {
  if(q.options.length < 2 || !(q.correct >= 0 && q.correct < q.options.length)) bad('quiz #' + (i + 1) + ' bad correct index');
  if(new Set(q.options).size !== q.options.length) bad('quiz #' + (i + 1) + ' duplicate options');
  if(!q.explain) bad('quiz #' + (i + 1) + ' no explanation');
});

// 4b. quiz bank: categories, uniqueness, sources
['fa', 'tk'].forEach(L => {
  const Q = DATA[L].quiz, cats = new Set((Q.cats || []).map(c => c.id)), seen = new Set(), per = {};
  if(Q.questions.length < 60) bad(`${L}: quiz bank has only ${Q.questions.length} questions (expected 60+)`);
  Q.questions.forEach((q, i) => {
    if(!cats.has(q.cat)) bad(`${L}: quiz #${i + 1} has unknown category "${q.cat}"`);
    per[q.cat] = (per[q.cat] || 0) + 1;
    if(seen.has(q.q)) bad(`${L}: duplicate quiz question #${i + 1}`); seen.add(q.q);
    if(q.src && !/^https:\/\//.test(q.src.u)) bad(`${L}: quiz #${i + 1} source is not https`);
  });
  cats.forEach(c => { if((per[c] || 0) < 3) bad(`${L}: quiz category "${c}" has fewer than 3 questions`); });
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


// 5b. map extras: regions / statistics / tile providers
(function(){
  const GEO = sb.__E.GEO, TL = sb.TS_TILES;
  const ids = new Set(GEO.regions.map(r => r.id));
  ['fa', 'tk'].forEach(L => {
    const m = DATA[L].map;
    if(!m.regions || !m.stats) return bad(L + ': map.regions / map.stats missing (js/map-data.js)');
    ids.forEach(id => { if(!m.regions.some(r => r.id === id)) bad(`${L}: region "${id}" has outline but no text`); });
    m.regions.forEach(r => { if(!ids.has(r.id)) bad(`${L}: region text "${r.id}" has no outline`); r.srcs.forEach(x => { if(!m.stats.sources.some(s => s.id === x)) bad(`${L}: region ${r.id} cites unknown source ${x}`); }); });
    const sum = m.stats.vel.reduce((a, r) => a + r.pct, 0);
    if(Math.abs(sum - 100) > 0.11) bad(`${L}: velayat shares sum to ${sum.toFixed(1)}, expected 100`);
    m.stats.world.forEach(r => { if(!(r.v > 0)) bad(`${L}: stats row ${r.id} has no numeric value`); r.srcs.forEach(x => { if(!m.stats.sources.some(s => s.id === x)) bad(`${L}: stats row ${r.id} cites unknown source ${x}`); }); });
    m.stats.sources.forEach(x => { if(!/^https:\/\//.test(x.u)) bad(`${L}: source ${x.id} is not https`); });
    ['osm', 'topo', 'light'].forEach(k => { if(!m.ui.base[k]) bad(`${L}: missing basemap label ${k}`); });
  });
  Object.entries(TL || {}).forEach(([k, t]) => {
    if(!/^https:\/\//.test(t.url) || !t.url.includes('{z}') || !t.url.includes('{x}') || !t.url.includes('{y}')) bad(`tile source ${k}: url must be https with {z}/{x}/{y}`);
    if(!t.attr || !t.attrUrl) bad(`tile source ${k}: attribution is required`);
  });
})();


// 5c. genealogy extras
(function(){
  const GN = sb.__E.GN;
  ['fa', 'tk'].forEach(L => GN.build(L).sons.forEach(s => s.tribes.forEach(tr => { if(!tr.meaning || tr.meaning.length < 2) bad(`${L}: tribe ${tr.id} has no meaning data`); })));
  ['fa', 'tk'].forEach(L => {
    const ex = DATA[L].genealogy.extra;
    if(!ex) return bad(L + ': genealogy.extra missing (js/genealogy-extra.js)');
    const ids = new Set(ex.sources.map(s => s.id));
    const all = [...ex.modern.flatMap(m => m.srcs), ...ex.ovlat.srcs, ...ex.structure.srcs, ...ex.compare.srcs, ...ex.dynasties.srcs];
    all.forEach(x => { if(!ids.has(x)) bad(`${L}: genealogy cites unknown source ${x}`); });
    ex.sources.forEach(s => { if(!/^https:\/\//.test(s.u)) bad(`${L}: genealogy source ${s.id} is not https`); });
    if(ex.modern.length < 7) bad(L + ': expected at least 7 modern tribes');
  });
})();


// 5d. per-section source footers
['clothing', 'cuisine', 'books', 'influences', 'people'].forEach(k => ['fa', 'tk'].forEach(L => {
  const fs = DATA[L][k].footSrc;
  if(!fs || fs.length < 2) return bad(`${L}.${k}: footSrc (section sources) missing`);
  fs.forEach(x => { if(!/^https:\/\//.test(x.u)) bad(`${L}.${k}: source not https: ${x.u}`); });
}));

// 6. text hygiene
const all = []; (function s(o, p){ if(typeof o === 'string') all.push([p, o]); else if(Array.isArray(o)) o.forEach((x, i) => s(x, p + '[' + i + ']')); else if(o && typeof o === 'object') for(const k in o) s(o[k], p + '.' + k); })(DATA, 'DATA');
all.forEach(([p, t]) => {
  if(/[\u0400-\u04FF]/.test(t)) bad('Cyrillic in ' + p);
  if(/[\u064A\u0643]/.test(t)) bad('Arabic ي/ك in ' + p);
  if(/undefined|\[object/.test(t)) bad('literal undefined in ' + p);
  if(/(دیدم|نیافتم|نخوانده‌ام|بررسی کردم|در اختیار من|elimdäki|Gören çeşmelerim|tapdym|tapmadym)/.test(t)) bad('first-person wording in ' + p + ' (UI text must not address the author)');
});

/* Regression guard: inside a section no two cards may share a title, and card ids must line up between languages
   (a bad bulk edit once overwrote the first card of a list with another language's text). */
for(const n of NAV_ITEMS){
  for(const L of ['fa', 'tk']){
    const b = DATA[L][n.id]; if(!b || !Array.isArray(b.items)) continue;
    const titles = b.items.map(x => x.title || x.name || x.era || x.label).filter(Boolean), seen = new Set();
    titles.forEach(tt => { if(seen.has(tt)) bad(`duplicate card title in ${L}.${n.id}: ${tt}`); seen.add(tt); });
  }
  const A = (DATA.fa[n.id] || {}).items, B = (DATA.tk[n.id] || {}).items;
  if(Array.isArray(A) && Array.isArray(B) && A.every(x => x.id) && B.every(x => x.id))
    A.forEach((x, i) => { if(B[i] && B[i].id !== x.id) bad(`card id order differs at ${n.id}[${i}]: ${x.id} vs ${B[i].id}`); });
}

console.log(fail ? `\n${fail} problem(s)` : 'All data checks passed ✔');
process.exit(fail ? 1 : 0);
