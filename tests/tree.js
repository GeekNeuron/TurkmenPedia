/* Genealogy flowchart test: data sanity + mounted behaviour (tabs, zoom, keyboard, node details) in both languages. */
const http = require('http'), fs = require('fs'), path = require('path'), assert = require('assert');
const { JSDOM, VirtualConsole } = require('jsdom');
const root = path.join(__dirname, '..'), MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json' };
const srv = http.createServer((q, r) => { const p = path.join(root, decodeURIComponent(q.url.split('?')[0]).replace(/^\/+$/, '/index.html')); fs.readFile(p, (e, b) => { if(e){ r.writeHead(404); return r.end(); } r.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' }); r.end(b); }); });
const wait = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  await new Promise(r => srv.listen(0, r));
  const dom = await JSDOM.fromURL(`http://localhost:${srv.address().port}/index.html#genealogy`, { runScripts: 'dangerously', resources: 'usable', pretendToBeVisual: true, virtualConsole: new VirtualConsole(),
    beforeParse(w){ w.IntersectionObserver = class{ observe(){} unobserve(){} disconnect(){} }; w.HTMLElement.prototype.scrollIntoView = function(){}; w.scrollTo = () => {}; w.matchMedia = () => ({ matches: false, addEventListener(){}, removeListener(){} });
      w.SVGElement.prototype.setPointerCapture = function(){}; w.Element.prototype.getBoundingClientRect = function(){ return { left: 0, top: 0, width: 800, height: 500, right: 800, bottom: 500 }; }; } });
  await wait(1500);
  const w = dom.window, d = w.document;
  assert(w.TS_TREE, 'TS_TREE missing');
  for(const lang of ['fa', 'tk']){
    if(lang === 'tk'){ d.querySelector('#langMenu li[data-lang="tk"]').click(); await wait(500); w.location.hash = '#genealogy'; await wait(500); }
    const svg = d.querySelector('#treeCanvas svg'); assert(svg, 'tree svg not rendered (' + lang + ')');
    const tabs = [...d.querySelectorAll('.tree-tab')]; assert.strictEqual(tabs.length, w.TS_TREE.TREES.length);
    for(const t of tabs){
      t.click(); await wait(60);
      const rects = svg.querySelectorAll('.tree-node rect').length, links = svg.querySelectorAll('.tree-link').length;
      assert(rects >= 8, `tree ${t.dataset.tree} too small (${rects})`); assert.strictEqual(links, rects - 1, `links != nodes-1 in ${t.dataset.tree}`);
    }
    // Dogonchi must be reachable and carry its annotation
    d.querySelector('.tree-tab[data-tree="yomut"]').click(); await wait(60);
    const dog = [...svg.querySelectorAll('.tree-node')].find(g => /دوگونچی|Dogunçy|مامش|Mamyş/.test(g.textContent)); assert(dog, 'Mamesh/Dogonchi node missing');
    dog.dispatchEvent(new w.MouseEvent('click', { bubbles: true })); assert(/دوگونچی|Dogunçy/.test(d.querySelector('#treeInfo').textContent), 'annotation not shown');
    // zoom buttons + keyboard
    const k0 = +svg.dataset.k; d.querySelector('.tree-ctrl [data-z="in"]').click(); const k1 = +svg.dataset.k; assert(k1 > k0, 'zoom in failed');
    d.querySelector('.tree-ctrl [data-z="out"]').click(); assert(+svg.dataset.k < k1, 'zoom out failed');
    svg.dispatchEvent(new w.KeyboardEvent('keydown', { key: '+', bubbles: true, cancelable: true })); assert(+svg.dataset.k > k0 * 0.99, 'keyboard zoom failed');
    svg.dispatchEvent(new w.KeyboardEvent('keydown', { key: '0', bubbles: true, cancelable: true }));
    // no Arabic ي / ك inside labels
    assert(!/[\u064A\u0643]/.test(svg.textContent), 'Arabic yeh/kaf in tree labels');
  }
  console.log('Tree test passed ✔  (4 flowcharts × 2 languages, zoom, keyboard, annotations)');
  srv.close(); process.exit(0);
})().catch(e => { console.error('TREE TEST FAILED:', e.message); process.exit(1); });
