/* Smoke test in a browser-like environment.   npm i jsdom   &&   node tests/smoke.js
   - serves the project with a tiny built-in static server
   - opens every route in both languages and fails on runtime errors, "undefined"/"NaN" text or empty pages
   - checks that settings and the quiz best score really persist in localStorage
   - plays a quick quiz round, opens a genealogy card and the sources page filters                             */
const http = require('http'), fs = require('fs'), path = require('path');
let JSDOM, VirtualConsole;
try{ ({ JSDOM, VirtualConsole } = require('jsdom')); }catch(e){ console.error('jsdom is required: npm i jsdom'); process.exit(2); }
const root = path.join(__dirname, '..');
const MIME = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.json':'application/json', '.svg':'image/svg+xml', '.png':'image/png', '.woff2':'font/woff2' };
const server = http.createServer((req, res) => {
  const p = path.join(root, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+$/, '/index.html'));
  fs.readFile(p.startsWith(root) ? p : '', (err, buf) => { if(err){ res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' }); res.end(buf); });
});
const wait = ms => new Promise(r => setTimeout(r, ms));
let failures = 0; const bad = m => { failures++; console.error('FAIL ' + m); };

(async () => {
  await new Promise(r => server.listen(0, r));
  const url = `http://localhost:${server.address().port}/index.html`;
  const errs = [], vc = new VirtualConsole();
  vc.on('jsdomError', e => errs.push((e.detail && e.detail.message) || e.message));
  const dom = await JSDOM.fromURL(url + '#dashboard', { runScripts:'dangerously', resources:'usable', pretendToBeVisual:true, virtualConsole:vc,
    beforeParse(w){ w.IntersectionObserver = class{ observe(){} unobserve(){} disconnect(){} }; w.HTMLElement.prototype.scrollIntoView = function(){}; w.scrollTo = () => {}; w.requestIdleCallback = undefined; w.matchMedia = () => ({ matches:false, addEventListener(){}, removeListener(){} }); } });
  await wait(1500);
  const w = dom.window, d = w.document, $ = s => d.querySelector(s), $$ = s => [...d.querySelectorAll(s)];
  const routes = $$('#nav a[href^="#"], nav a[href^="#"]').map(a => a.getAttribute('href').slice(1)).filter((x, i, a) => x && a.indexOf(x) === i);
  const ids = routes.length > 8 ? routes : ['dashboard','history','warpeace','places','map','tribes','world','carpets','genealogy','clothing','cuisine','arts','music','calendar','folklore','language','names','dictionary','people','poets','books','influences','quiz','sources'];
  for(const lang of ['fa', 'tk']){
    $(`#langMenu li[data-lang="${lang}"]`).click(); await wait(250);
    for(const r of ids){
      w.location.hash = '#' + r; await wait(60);
      const html = $('#content').innerHTML, text = $('#content').textContent;
      if(html.length < 300) bad(`${lang}/${r}: page is (almost) empty`);
      if(/undefined|NaN|\[object/.test(text)) bad(`${lang}/${r}: contains "undefined"/"NaN"`);
    }
  }
  if(errs.length) bad('runtime errors: ' + errs.slice(0, 3).join(' | '));
  // persistence
  if(w.localStorage.getItem('ts-lang') !== 'tk') bad('language is not persisted in localStorage');
  // quiz
  w.location.hash = '#quiz'; await wait(150);
  $('[data-qmode="quick"]').click(); await wait(30);
  for(let i = 0; i < 10; i++){ const o = $('.quiz-option'); if(!o){ bad('quiz stopped early at question ' + (i + 1)); break; } o.click(); await wait(10); $('#quizNextBtn').click(); await wait(10); }
  if(!$('.quiz-score')) bad('quiz did not reach the result screen');
  if(!w.localStorage.getItem('ts-quiz-best2')) bad('quiz best score is not persisted');
  // genealogy tribe card shows meaning lines
  w.location.hash = '#genealogy'; await wait(200);
  const b = $('.gn-tribe[data-tribe="salur"]'); if(b){ b.click(); if(($$('.gn-detail.show .gn-mean li').length) < 2) bad('genealogy: tribe card has no name meanings'); } else bad('genealogy: Salur button missing');
  // sources page
  w.location.hash = '#sources'; await wait(200);
  if($$('.bib-row').length < 100) bad('sources page lists fewer than 100 sources');
  $('[data-bib-type="community"]').click(); await wait(80);
  if(!$$('.bib-row').every(r => r.classList.contains('t-D'))) bad('sources filter "community" shows non-D rows');
  await wait(50);
  console.log(failures ? `\n${failures} problem(s)` : `Smoke test passed ✔  (${ids.length} routes × 2 languages, quiz, storage, genealogy, sources)`);
  server.close(); process.exit(failures ? 1 : 0);
})();
