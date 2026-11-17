/* Bibliography: collects every source used anywhere on the site (registry in sections.js, per-section source lists,
   sources attached to the new research blocks), de-duplicates by URL, classifies each by type and reliability tier,
   and records which sections use it.  Used by the "Sources" page.  window.TS_BIB.build(lang) -> { items, counts, ... }. */
(function(){
  /* ---- classification by host name. First match wins. ---- */
  const HOSTS = [
    ['official',   /(^|\.)(unesco\.org|europa\.eu|un\.org|ohchr\.org|stat\.gov\.tm|tuik\.gov\.tr|doi\.org)$/],
    ['academic',   /(^|\.)(dergipark\.org\.tr|cyberleninka\.ru|jstor\.org|nii\.ac\.jp|trc-leiden\.nl|laender-analysen\.de|inalco\.fr|bilkent\.edu\.tr|yale\.edu|sagepub\.com|webonary\.org|musicofcentralasia\.org|trakya\.edu\.tr|springer\.com|nature\.com|tandfonline\.com|sciencedirect\.com|researchgate\.net|mfah\.org|metmuseum\.org|muzeumazji\.pl|artsandculture\.google\.com)$/],
    ['reference',  /(^|\.)(archive\.aramcoworld\.com|aramcoworld\.com|iranicaonline\.org|islamansiklopedisi\.org\.tr|britannica\.com|countrystudies\.us|eki\.ee|everyculture\.com)$/],
    ['encyclopedia', /(^|\.)(wikipedia\.org|wikipedia\.com|wikiwand\.com)$/],
    ['media',      /(^|\.)(historytoday\.com|rferl\.org|azathabar\.com|iwpr\.net|jamestown\.org|tmhelsinki\.org|unpo\.org|caucasianknot\.org|joshuaproject\.net|worldmusiccentral\.org|minorityrights\.org|bbc\.com|eurasianet\.org|thediplomat\.com|aljazeera\.com|reuters\.com)$/],
    ['state',      /(^|\.)gov\.tm$/],
  ];
  const TIER = { official:'A', academic:'A', reference:'A', encyclopedia:'B', media:'C', state:'C', community:'D' };

  /* ---- which section a registry id belongs to (route id of the section) ---- */
  const AREA = [
    [/^(unesco|carpetU|whc|ichlist|emKusht|emCarpet|emCulture|musHist|musEtno|musArt|musVirt|wikiLib|tmCinema|wikiCine|wedding|wedding2|weddingSci|flag)$/, 'arts'],
    [/^(law|azaHol|sciNowruz|yashlar|yashlarH)$/, 'calendar'],
    [/^(nakylA|nakylA2|tkNakyl|tkRid|tkHuw|tkKusht|tkLale|tkMonj|tkDilek|tkYrym|tkYan|tkShorta|inash|orientHuw|orientRid|atavatanA|atavatanB|azaColl|miras|dergi|tasUc|tasAhmet|tasinHome)$/, 'folklore'],
    [/^(cuisine|ishlykly|eurFood)$/, 'cuisine'],
    [/^(carpet|gul)$/, 'carpets'],
    [/^(eurCloth|chyrpy)$/, 'clothing'],
    [/^(eurMusic|music|dutar|dilli|ovezov|tkDutar1|tkDutar5|wikiCons)$/, 'music'],
    [/^(tkLit19|tkMolla|tkKemine|tkMagtym|wikiTkLit|magt|toyo|kitapcy|oghuz)$/, 'poets'],
    [/^(tkTaryh|wikiAlty|wikiNarl)$/, 'people'],
    [/^(salor|ehraf|wikiTribe)$/, 'tribes'],
    [/^(iraqiTurkmen|unpo|mrg|persecIraq|iraqiGenocide|iranTurkmen|turkmenSahra|afghanTurkmen|turkmensWiki|turkmeneliWiki)$/, 'world'],
  ];
  const areaOfId = id => { for(const [re, a] of AREA) if(re.test(id)) return a; return 'dashboard'; };

  const host = u => { try{ return new URL(u).hostname.replace(/^www\./, ''); }catch(e){ return ''; } };
  const normUrl = u => { try{ const x = new URL(u); return (x.hostname.replace(/^www\./, '') + x.pathname.replace(/\/+$/, '') + x.search).toLowerCase(); }catch(e){ return String(u).toLowerCase(); } };
  const typeOf = u => { const h = host(u); for(const [t, re] of HOSTS) if(re.test(h)) return t; return 'community'; };

  function build(lang){
    const L = lang === 'fa' ? 0 : 1, byUrl = new Map();
    const add = (title, url, area, id) => {
      if(!url) return;
      const k = normUrl(url); let e = byUrl.get(k);
      if(!e){ e = { id: id || k, title, url, host: host(url), type: typeOf(url), areas: [] }; e.tier = TIER[e.type]; byUrl.set(k, e); }
      if(area && !e.areas.includes(area)) e.areas.push(area);
    };
    const D = DATA[lang], X = window.TS_EXT || {};
    // 1. registry used by the "sources" button on cards
    const reg = X.srcRegistry || {}, worldIds = new Set((window.WORLD_SRC || []).map(s => s.id));
    Object.keys(reg).forEach(id => add(reg[id].t[L], reg[id].u, worldIds.has(id) ? 'world' : areaOfId(id), id));
    // 2. sources attached to blocks
    const lists = [
      ['genealogy', (D.genealogy.extra || {}).sources], ['language', D.language.sources], ['carpets', D.carpets.sources],
      ['map', ((D.map || {}).stats || {}).sources],
    ];
    lists.forEach(([a, arr]) => (arr || []).forEach(s => add(s.t, s.u, a, s.id)));
    ['clothing', 'cuisine', 'books', 'influences', 'people'].forEach(a => (D[a].footSrc || []).forEach(s => add(s.t, s.u, a)));
    const items = [...byUrl.values()];
    const counts = { total: items.length, A: 0, B: 0, C: 0, D: 0, byType: {}, byArea: {} };
    items.forEach(i => { counts[i.tier]++; counts.byType[i.type] = (counts.byType[i.type] || 0) + 1; i.areas.forEach(a => { counts.byArea[a] = (counts.byArea[a] || 0) + 1; }); if(!i.areas.length) i.areas.push('dashboard'); });
    return { items, counts };
  }
  window.TS_BIB = { build, typeOf, areaOfId, TIER, host };
})();
