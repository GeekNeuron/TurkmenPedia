/* =========================================================
   TurkmenPedia — application logic
   Vanilla JS, no framework/build step needed — works directly
   from GitHub Pages or any static host.
   ========================================================= */
(function(){
  'use strict';

  const state = {
    lang: localStorage.getItem('ts-lang') || 'fa',
    theme: localStorage.getItem('ts-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    fontSize: localStorage.getItem('ts-font-size') || 'medium',
    contrast: localStorage.getItem('ts-contrast') === 'true',
    readerMode: localStorage.getItem('ts-reader-mode') === 'true',
    route: 'dashboard',
    query: '',
    dictView: 'topic',
    namesView: 'names',
    namesGender: 'all',
    gnOpen: null,
    namesCat: 'all',
    namesGen: false,
    gnTribe: null,
    quiz: { index:0, score:0, answered:false, selected:null, finished:false }
  };

  const el = {
    html: document.documentElement,
    app: document.getElementById('app'),
    sidebar: document.getElementById('sidebar'),
    overlay: document.getElementById('overlay'),
    nav: document.getElementById('nav'),
    content: document.getElementById('content'),
    pageTitle: document.getElementById('pageTitle'),
    pageSubtitle: document.getElementById('pageSubtitle'),
    breadcrumb: document.getElementById('breadcrumb'),
    readingProgress: document.getElementById('readingProgress'),
    brandTagline: document.getElementById('brandTagline'),
    sidebarNote: document.getElementById('sidebarNote'),
    menuBtn: document.getElementById('menuBtn'),
    themeBtn: document.getElementById('themeBtn'),
    langTrigger: document.getElementById('langTrigger'),
    langTriggerLabel: document.getElementById('langTriggerLabel'),
    langMenu: document.getElementById('langMenu'),
    langDropdown: document.getElementById('langDropdown'),
    searchInput: document.getElementById('searchInput'),
    searchClear: document.getElementById('searchClear'),
    globalResults: document.getElementById('globalResults'),
    backTop: document.getElementById('backTop'),
    settingsBtn: document.getElementById('settingsBtn'),
    settingsOverlay: document.getElementById('settingsOverlay'),
    settingsPanel: document.getElementById('settingsPanel'),
    settingsCloseBtn: document.getElementById('settingsCloseBtn'),
    settingsTitle: document.getElementById('settingsTitle'),
    fontSizeLabel: document.getElementById('fontSizeLabel'),
    contrastLabel: document.getElementById('contrastLabel'),
    readerModeLabel: document.getElementById('readerModeLabel'),
    fontSizeControl: document.getElementById('fontSizeControl'),
    contrastToggle: document.getElementById('contrastToggle'),
    readerModeToggle: document.getElementById('readerModeToggle')
  };

  const validRoutes = NAV_ITEMS.map(n => n.id);

  /* ---------------------------------------------------------
     Toast (tiny transient notification, used for copy/report)
     --------------------------------------------------------- */
  let toastEl = null, toastTimer = null;
  function showToast(msg){
    if(!toastEl){
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(()=> toastEl.classList.remove('show'), 2200);
  }

  function copyText(text){
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).catch(()=> fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }
  function fallbackCopy(text){
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.select();
    try{ document.execCommand('copy'); }catch(e){}
    document.body.removeChild(ta);
  }

  /* ---------------------------------------------------------
     Theme
     --------------------------------------------------------- */
  function applyTheme(){
    el.html.setAttribute('data-theme', state.theme);
    localStorage.setItem('ts-theme', state.theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if(meta) meta.setAttribute('content', state.theme === 'dark' ? '#181109' : '#F4EDE1');
  }
  el.themeBtn.addEventListener('click', ()=>{
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    el.html.classList.add('theme-anim');
    setTimeout(()=> el.html.classList.remove('theme-anim'), 650);
    applyTheme();
  });

  /* ---------------------------------------------------------
     Display settings: font size, high contrast, reader mode
     --------------------------------------------------------- */
  function applyFontSize(){
    el.html.setAttribute('data-font-size', state.fontSize);
    localStorage.setItem('ts-font-size', state.fontSize);
    [...el.fontSizeControl.children].forEach(btn=>{
      btn.classList.toggle('active', btn.dataset.size === state.fontSize);
    });
  }
  function applyContrast(){
    el.html.setAttribute('data-contrast', state.contrast ? 'true' : 'false');
    localStorage.setItem('ts-contrast', state.contrast ? 'true' : 'false');
    el.contrastToggle.setAttribute('aria-checked', state.contrast ? 'true' : 'false');
    el.contrastToggle.classList.toggle('on', state.contrast);
  }
  function applyReaderMode(){
    el.html.setAttribute('data-reader-mode', state.readerMode ? 'true' : 'false');
    localStorage.setItem('ts-reader-mode', state.readerMode ? 'true' : 'false');
    el.readerModeToggle.setAttribute('aria-checked', state.readerMode ? 'true' : 'false');
    el.readerModeToggle.classList.toggle('on', state.readerMode);
  }
  el.fontSizeControl.addEventListener('click', (e)=>{
    const btn = e.target.closest('button[data-size]');
    if(!btn) return;
    state.fontSize = btn.dataset.size;
    applyFontSize();
  });
  el.contrastToggle.addEventListener('click', ()=>{
    state.contrast = !state.contrast;
    applyContrast();
  });
  el.readerModeToggle.addEventListener('click', ()=>{
    state.readerMode = !state.readerMode;
    applyReaderMode();
  });
  function openSettings(){ el.settingsOverlay.classList.add('open'); }
  function closeSettings(){ el.settingsOverlay.classList.remove('open'); }
  el.settingsBtn.addEventListener('click', openSettings);
  el.settingsCloseBtn.addEventListener('click', closeSettings);
  el.settingsOverlay.addEventListener('click', (e)=>{ if(e.target === el.settingsOverlay) closeSettings(); });

  /* ---------------------------------------------------------
     Language
     --------------------------------------------------------- */
  function applyLangAttrs(){
    const d = DATA[state.lang];
    el.html.setAttribute('lang', state.lang === 'fa' ? 'fa' : 'tk');
    el.html.setAttribute('dir', d.dir);
    el.langTriggerLabel.textContent = state.lang === 'fa' ? 'فارسی' : 'Türkmençe';
    [...el.langMenu.children].forEach(li=>{
      li.setAttribute('aria-selected', li.dataset.lang === state.lang ? 'true' : 'false');
    });
  }

  function setLang(lang){
    state.lang = lang;
    localStorage.setItem('ts-lang', lang);
    applyLangAttrs();
    buildNav();
    applySettingsLabels();
    render();
    closeLangMenu();
  }

  function applySettingsLabels(){
    const d = DATA[state.lang];
    el.settingsTitle.textContent = d.ui.settingsTitle;
    el.fontSizeLabel.textContent = d.ui.fontSizeLabel;
    el.contrastLabel.textContent = d.ui.contrastLabel;
    el.readerModeLabel.textContent = d.ui.readerModeLabel;
    const [sBtn, mBtn, lBtn] = el.fontSizeControl.children;
    sBtn.setAttribute('aria-label', d.ui.fontSmall);
    mBtn.setAttribute('aria-label', d.ui.fontMedium);
    lBtn.setAttribute('aria-label', d.ui.fontLarge);
  }

  function openLangMenu(){
    el.langMenu.hidden = false;
    el.langDropdown.classList.add('open');
    el.langTrigger.setAttribute('aria-expanded','true');
  }
  function closeLangMenu(){
    el.langMenu.hidden = true;
    el.langDropdown.classList.remove('open');
    el.langTrigger.setAttribute('aria-expanded','false');
  }
  el.langTrigger.addEventListener('click', (e)=>{
    e.stopPropagation();
    el.langMenu.hidden ? openLangMenu() : closeLangMenu();
  });
  el.langMenu.addEventListener('click', (e)=>{
    const li = e.target.closest('li[data-lang]');
    if(li) setLang(li.dataset.lang);
  });
  el.langMenu.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      const li = e.target.closest('li[data-lang]');
      if(li) setLang(li.dataset.lang);
    }
  });
  document.addEventListener('click', (e)=>{
    if(!el.langDropdown.contains(e.target)) closeLangMenu();
    if(!document.getElementById('searchBox').contains(e.target)) hideGlobalResults();
    if(!document.getElementById('searchBox').contains(e.target) && !mobileSearchBtn.contains(e.target)) closeMobileSearch();
  });

  /* ---------------------------------------------------------
     Keyboard shortcuts: "/" focuses search, Escape closes overlays
     --------------------------------------------------------- */
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){ closeLangMenu(); closeSettings(); hideGlobalResults(); }
    const tag = (document.activeElement && document.activeElement.tagName) || '';
    const typing = tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement.isContentEditable;
    if(e.key === '/' && !typing){
      e.preventDefault();
      el.searchInput.focus();
    }
  });

  /* ---------------------------------------------------------
     Mobile sidebar
     --------------------------------------------------------- */
  function openSidebar(){ el.app.classList.add('sidebar-open'); el.menuBtn.setAttribute('aria-expanded','true'); }
  function closeSidebar(){ el.app.classList.remove('sidebar-open'); el.menuBtn.setAttribute('aria-expanded','false'); }
  el.menuBtn.addEventListener('click', ()=>{
    el.app.classList.contains('sidebar-open') ? closeSidebar() : openSidebar();
  });
  el.overlay.addEventListener('click', closeSidebar);

  /* ---------------------------------------------------------
     Mobile search toggle (search box is hidden inline on small
     screens; this reveals it as a floating bar under the topbar)
     --------------------------------------------------------- */
  const mobileSearchBtn = document.getElementById('mobileSearchBtn');
  function openMobileSearch(){
    el.app.classList.add('search-open');
    setTimeout(()=> el.searchInput.focus(), 50);
  }
  function closeMobileSearch(){
    el.app.classList.remove('search-open');
  }
  mobileSearchBtn.addEventListener('click', ()=>{
    el.app.classList.contains('search-open') ? closeMobileSearch() : openMobileSearch();
  });

  /* ---------------------------------------------------------
     Navigation + deep-link query ("#section?q=term")
     --------------------------------------------------------- */
  function buildNav(){
    const d = DATA[state.lang];
    el.nav.innerHTML = '';
    NAV_ITEMS.filter(item => !item.hidden).forEach(item=>{
      const a = document.createElement('a');
      a.href = '#' + item.id;
      a.className = 'nav-item' + (state.route === item.id ? ' active' : '');
      a.dataset.route = item.id;
      a.style.setProperty('--n', String(el.nav.children.length));
      a.innerHTML = `<span class="icon" data-icon="${item.icon}"></span><span>${d.nav[item.id]}</span>`;
      a.addEventListener('click', ()=> closeSidebar());
      el.nav.appendChild(a);
    });
    paintIcons(el.nav);
  }

  function setActiveNav(){
    [...el.nav.children].forEach(a=> a.classList.toggle('active', a.dataset.route === state.route));
  }

  function parseHash(){
    const raw = location.hash.replace('#','');
    const qIndex = raw.indexOf('?q=');
    if(qIndex === -1) return { route: raw, query: '' };
    return { route: raw.slice(0, qIndex), query: decodeURIComponent(raw.slice(qIndex + 3)) };
  }

  function navigateTo(route, query){
    const target = '#' + route + (query ? '?q=' + encodeURIComponent(query) : '');
    if(location.hash === target){
      applyHash();
    } else {
      location.hash = target;
    }
  }

  function applyHash(){
    const { route, query } = parseHash();
    state.route = validRoutes.includes(route) ? route : 'dashboard';
    state.query = (query || '').toLowerCase();
    el.searchInput.value = query || '';
    el.searchClear.hidden = !query;
    if(state.route === 'quiz') resetQuiz();
    state.gnTribe = null;
    render();
    el.content.classList.remove('page-enter'); void el.content.offsetWidth; el.content.classList.add('page-enter');
    const ph = document.querySelector('.page-heading'); ph.classList.remove('swap'); void ph.offsetWidth; ph.classList.add('swap');
    if (typeof el.content.scrollIntoView === 'function') {
      el.content.scrollIntoView({behavior:'instant', block:'start'});
    }
    window.scrollTo({top:0});
  }

  window.addEventListener('hashchange', ()=>{
    localStorage.setItem('ts-last-route', parseHash().route);
    applyHash();
    closeMobileSearch();
  });

  /* ---------------------------------------------------------
     Fuzzy-ish matching: exact substring first, then a light
     typo-tolerant token check for short titles/words.
     --------------------------------------------------------- */
  function levenshtein(a, b){
    if(a === b) return 0;
    if(!a.length) return b.length;
    if(!b.length) return a.length;
    const m = a.length, n = b.length;
    const dp = new Array(n+1);
    for(let j=0;j<=n;j++) dp[j] = j;
    for(let i=1;i<=m;i++){
      let prev = dp[0];
      dp[0] = i;
      for(let j=1;j<=n;j++){
        const tmp = dp[j];
        dp[j] = a[i-1] === b[j-1] ? prev : 1 + Math.min(prev, dp[j], dp[j-1]);
        prev = tmp;
      }
    }
    return dp[n];
  }

  function looseMatch(str, query){
    if(!query) return true;
    if(!str) return false;
    const s = str.toLowerCase();
    if(s.includes(query)) return true;
    if(query.length < 3 || s.length > 60) return false;
    const threshold = query.length >= 6 ? 2 : 1;
    return s.split(/[\s,،.()-]+/).some(tok => tok.length >= 3 && Math.abs(tok.length - query.length) <= threshold + 1 && levenshtein(tok, query) <= threshold);
  }

  function matches(str){
    return looseMatch((str || '').toLowerCase(), state.query);
  }

  /* ---------------------------------------------------------
     Search — filters the current section AND surfaces matches
     from every other section in a dropdown.
     --------------------------------------------------------- */
  const searchIndexCache = {};

  /* The 1.2 MB extended dictionary is loaded on demand (and at idle time),
     so the first paint never waits for it. */
  const extReady = () => typeof DICTIONARY_EXTENDED_FA !== 'undefined';
  let extLoading = null;
  function loadExt(){
    if(extReady()) return Promise.resolve();
    if(!extLoading){
      extLoading = new Promise((res, rej) => {
        const sc = document.createElement('script');
        sc.src = 'js/dictionary-extended-fa.js'; sc.onload = res; sc.onerror = () => { extLoading = null; rej(); };
        document.head.appendChild(sc);
      }).then(() => { Object.keys(searchIndexCache).forEach(k => delete searchIndexCache[k]); });
    }
    return extLoading;
  }
  function buildSearchIndex(d){
    if(searchIndexCache[state.lang]) return searchIndexCache[state.lang];
    const idx = [];
    const pushAll = (sectionId, arr, textFn) => {
      arr.forEach(it => idx.push({ section: sectionId, label: d.nav[sectionId], title: textFn(it), icon: it.icon || NAV_ITEMS.find(n=>n.id===sectionId).icon }));
    };
    pushAll('history', d.history.eras, it => it.title);
    pushAll('warpeace', d.warpeace.events, it => it.title);
    pushAll('places', d.places.items, it => it.title);
    pushAll('tribes', d.tribes.items, it => it.name);
    pushAll('clothing', d.clothing.men, it => it.name);
    pushAll('clothing', d.clothing.women, it => it.name);
    pushAll('cuisine', d.cuisine.dishes, it => it.name);
    pushAll('arts', d.arts.items, it => it.title);
    pushAll('people', d.people.items, it => it.name);
    pushAll('poets', d.poets.items, it => it.name);
    pushAll('books', d.books.items, it => it.title);
    pushAll('influences', d.influences.items, it => it.title);
    GENEALOGY.build(state.lang).sons.forEach(son => son.tribes.forEach(tr => idx.push({ section:'genealogy', label:d.nav.genealogy, title: tr.name + ' — ' + son.name, icon:'tree' })));
    if(window.TS_EXT) TS_EXT.search(state.lang).forEach(x => idx.push(x));
    TS_NAMES.build(state.lang).forEach(n=> idx.push({ section:'names', label: d.nav.names, title: n.tk + ' — ' + n.mean, icon:'tag' }));
    DICTIONARY.categories.forEach(cat=>{
      cat.words.forEach(w=> idx.push({ section:'dictionary', label: d.nav.dictionary, title: w.tk + ' — ' + w.fa, icon:'translate' }));
    });
    if(extReady()) DICTIONARY_EXTENDED_FA.forEach(e=>{
      idx.push({ section:'dictionary', label: d.nav.dictionary, title: e.tk + ' — ' + e.fa, icon:'translate' });
    });
    searchIndexCache[state.lang] = idx;
    return idx;
  }

  function hideGlobalResults(){ el.globalResults.hidden = true; el.globalResults.innerHTML = ''; }

  function renderGlobalResults(){
    const q = state.query;
    if(!q){ hideGlobalResults(); return; }
    const d = DATA[state.lang];
    const idx = buildSearchIndex(d);
    const results = idx.filter(it => it.section !== state.route && it.title.toLowerCase().includes(q)).slice(0, 8);
    if(!results.length){ hideGlobalResults(); return; }
    el.globalResults.innerHTML = `<div class="global-results-title">${d.ui.globalResultsTitle}</div>` +
      results.map((r, n) => `
        <div class="global-result-item" style="--n:${n}" data-route="${r.section}">
          <span class="icon" data-icon="${r.icon}"></span>
          <span class="gr-text"><span class="gr-title">${r.title}</span><span class="gr-section">${r.label}</span></span>
        </div>`).join('');
    paintIcons(el.globalResults);
    el.globalResults.hidden = false;
    el.globalResults.querySelectorAll('.global-result-item').forEach(node=>{
      node.addEventListener('click', ()=>{ const route = node.dataset.route; hideGlobalResults(); navigateTo(route, state.query); });
    });
  }

  let searchDebounce = null;
  el.searchInput.addEventListener('input', ()=>{
    const val = el.searchInput.value.trim().toLowerCase();
    el.searchClear.hidden = val.length === 0;
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(()=>{
      state.query = val;
      render();
      renderGlobalResults();
    }, 120);
  });
  el.searchInput.addEventListener('focus', renderGlobalResults);
  el.searchClear.addEventListener('click', ()=>{
    el.searchInput.value = ''; state.query = ''; el.searchClear.hidden = true;
    hideGlobalResults(); render();
  });

  /* ---------------------------------------------------------
     Reveal-on-scroll + reading progress + back-to-top
     --------------------------------------------------------- */
  let observer;
  function initReveal(){
    if(observer) observer.disconnect();
    observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){ entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
      });
    }, { threshold:.12 });
    el.content.querySelectorAll('.reveal').forEach((node, i)=>{
      node.style.setProperty('--i', String(i % 9));
      observer.observe(node);
    });
  }

  window.addEventListener('scroll', ()=>{
    el.backTop.classList.toggle('show', window.scrollY > 480);
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    const pct = scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0;
    if(el.readingProgress) el.readingProgress.style.width = pct + '%';
  });
  el.backTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

  /* ---------------------------------------------------------
     Copy-link (deep link to a single card) + report issue
     --------------------------------------------------------- */
  function buildDeepLink(section, title){
    return location.origin + location.pathname + '#' + section + '?q=' + encodeURIComponent(title);
  }
  function attachCardTools(root, section){
    const d = DATA[state.lang];
    root.querySelectorAll('[data-copy-title]').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        e.stopPropagation();
        copyText(buildDeepLink(section, btn.dataset.copyTitle));
        showToast(d.ui.linkCopied);
      });
    });
    root.querySelectorAll('[data-report-title]').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        e.stopPropagation();
        const report = `TurkmenPedia — ${d.ui.reportIssue}\n` + d.nav[section] + ' / ' + btn.dataset.reportTitle + '\n' + new Date().toISOString();
        copyText(report);
        showToast(d.ui.linkCopied);
      });
    });
    if(window.TS_EXT) TS_EXT.bindCardTools(root, section);
  }
  function cardTools(title){
    return `<span class="card-tools">
      <button class="ct-btn" data-copy-title="${title.replace(/"/g,'&quot;')}" title="link"><span class="icon" data-icon="copy"></span></button>
      <button class="ct-btn" data-report-title="${title.replace(/"/g,'&quot;')}" title="report"><span class="icon" data-icon="mail"></span></button>
      <button class="ct-btn" data-src title="sources"><span class="icon" data-icon="book"></span></button>
      <button class="ct-btn" data-share title="share image"><span class="icon" data-icon="image"></span></button>
    </span>`;
  }

  /* ---------------------------------------------------------
     Renderers per section
     --------------------------------------------------------- */
  function emptyState(text){
    return `<div class="empty-state reveal"><span class="icon" data-icon="search"></span><p>${text}</p></div>`;
  }

  function resultBadge(count, d){
    if(!state.query) return '';
    return `<span class="result-badge">${count} ${d.ui.resultsCount}</span>`;
  }

  function sectionHead(d, key, iconName, count){
    return `<div class="section-head reveal">
      <h2><span class="icon" data-icon="${iconName}"></span>${d.nav[key]}${typeof count === 'number' ? resultBadge(count, d) : ''}</h2>
      <p>${d[key].intro || d.ui[key + 'Intro'] || ''}</p>
    </div>`;
  }

  const RANDOM_POOL_SECTIONS = ['history','warpeace','places','tribes','clothing','cuisine','arts','people','poets','books','influences'];
  function pickRandomItem(d){
    const section = RANDOM_POOL_SECTIONS[Math.floor(Math.random() * RANDOM_POOL_SECTIONS.length)];
    let items, titleFn;
    if(section === 'history'){ items = d.history.eras; titleFn = it => it.title; }
    else if(section === 'warpeace'){ items = d.warpeace.events; titleFn = it => it.title; }
    else if(section === 'clothing'){ items = [...d.clothing.men, ...d.clothing.women]; titleFn = it => it.name; }
    else if(section === 'cuisine'){ items = d.cuisine.dishes; titleFn = it => it.name; }
    else if(section === 'people'){ items = d.people.items; titleFn = it => it.name; }
    else if(section === 'poets'){ items = d.poets.items; titleFn = it => it.name; }
    else if(section === 'books'){ items = d.books.items; titleFn = it => it.title; }
    else if(section === 'tribes'){ items = d.tribes.items; titleFn = it => it.name; }
    else { items = d[section].items; titleFn = it => it.title; }
    const item = items[Math.floor(Math.random() * items.length)];
    return { section, title: titleFn(item) };
  }

  function quoteOfDayPool(d){
    const pool = [];
    d.poets.items.forEach(p => pool.push({ title: p.name, text: p.text, section:'poets' }));
    d.people.items.slice(0,6).forEach(p => pool.push({ title: p.name, text: p.text, section:'people' }));
    d.places.items.slice(0,6).forEach(p => pool.push({ title: p.title, text: p.text, section:'places' }));
    return pool;
  }
  function dayOfYear(){
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    return Math.floor((now - start) / 86400000);
  }

  function renderDashboard(d){
    const stats = d.dashboard.stats.map(s => `
      <div class="stat-card reveal">
        <div class="stat-icon"><span class="icon" data-icon="${s.icon}"></span></div>
        <span class="stat-label">${s.label}</span>
        <span class="stat-value">${s.value}</span>
      </div>`).join('');

    const cards = NAV_ITEMS.filter(n=> !['dashboard','quiz','sources'].includes(n.id)).map(n=> `
      <div class="explore-card reveal" data-route="${n.id}">
        <span class="go icon" data-icon="chevronSide"></span>
        <div class="icon-wrap"><span class="icon" data-icon="${n.icon}"></span></div>
        <h3>${d.nav[n.id]}</h3>
        <p>${d.explore[n.id]}</p>
      </div>`).join('');

    const pool = quoteOfDayPool(d);
    const pick = pool[dayOfYear() % pool.length];

    return `
      <section class="hero reveal">
        ${window.TS_EXT ? TS_EXT.ornament('o-end') : ''}
        <span class="hero-eyebrow"><span class="icon" data-icon="compass"></span>${d.dashboard.heroEyebrow}</span>
        <h2>${d.dashboard.heroTitle}</h2>
        <p>${d.dashboard.heroText}</p>
        <div class="hero-actions">
          <a class="btn btn-solid" href="#history">${d.ui.heroCta1}</a>
          <button class="btn btn-ghost" id="randomBtn"><span class="icon" data-icon="shuffle"></span>${d.ui.randomBtn}</button>
          <button class="btn btn-ghost" id="aboutBtn">${d.ui.heroCta2}</button>
        </div>
      </section>

      <div class="quote-of-day reveal">
        <div class="qd-label"><span class="icon" data-icon="quote"></span>${d.ui.quoteOfDayLabel}</div>
        <p class="qd-text">${pick.text}</p>
        <a class="qd-source" href="#${pick.section}?q=${encodeURIComponent(pick.title)}">${pick.title} ←</a>
      </div>

      <div class="stat-grid">${stats}</div>

      <div class="section-head">
        <h2><span class="icon" data-icon="link"></span>${d.ui.exploreTitle}</h2>
      </div>
      <div class="explore-grid">${cards}</div>

      <div class="about-panel reveal" id="aboutPanel" hidden>
        <h3>${d.ui.aboutTitle}</h3>
        <p>${d.ui.aboutText}</p>
        <p><a class="gn-link" href="#sources"><span class="icon" data-icon="external"></span>${d.nav.sources}</a></p>
      </div>
    `;
  }

  function renderTimelineSection(d, key, iconName){
    const items = d[key].eras || d[key].events;
    const filtered = items.filter(it => matches(it.title) || matches(it.text) || matches(it.year));
    if(!filtered.length) return sectionHead(d, key, iconName, 0) + emptyState(d.ui.noResults);
    const rows = filtered.map(it => `
      <div class="timeline-item reveal">
        <span class="year">${it.year || ''}</span>
        ${cardTools(it.title)}
        ${it.icon ? `<div class="icon-wrap" style="width:34px;height:34px;border-radius:10px;background:var(--surface-2);color:var(--secondary);display:flex;align-items:center;justify-content:center;margin-bottom:8px;"><span class="icon" data-icon="${it.icon}"></span></div>` : ''}
        <h3>${it.title}</h3>
        <p>${it.text}</p>
      </div>`).join('');
    return sectionHead(d, key, iconName, filtered.length) + `<div class="timeline">${rows}</div>`;
  }

  function renderCardListSection(d, key, iconName){
    const items = d[key].items.filter(it => matches(it.title) || matches(it.text));
    if(!items.length) return sectionHead(d, key, iconName, 0) + emptyState(d.ui.noResults);
    const cards = items.map(it => `
      <div class="item-card reveal">
        ${cardTools(it.title)}
        <div class="icon-wrap"><span class="icon" data-icon="${it.icon}"></span></div>
        <h3>${it.title}</h3>
        <p>${it.text}</p>
      </div>`).join('');
    return sectionHead(d, key, iconName, items.length) + `<div class="card-grid">${cards}</div>`;
  }

  function renderTribes(d){
    const items = d.tribes.items.filter(it => matches(it.name) || matches(it.text) || matches(it.region));
    if(!items.length) return sectionHead(d, 'tribes', 'grid', 0) + emptyState(d.ui.noResults);
    const cards = items.map(it => `
      <div class="item-card reveal">
        ${cardTools(it.name)}
        <div class="icon-wrap"><span class="icon" data-icon="${it.icon}"></span></div>
        <div><span class="badge">${it.region}</span><h3>${it.name}</h3></div>
        <p>${it.text}</p>
      </div>`).join('');
    return sectionHead(d, 'tribes', 'grid', items.length) + `<div class="card-grid">${cards}</div>`;
  }

  /* ---------- Genealogy (interactive tree) ---------- */
  const GN_ART = `<svg viewBox="0 0 120 84" fill="none" aria-hidden="true">
    <path class="gn-art-bow" d="M34 6C8 28 8 56 34 78" stroke="var(--secondary)" stroke-width="5" stroke-linecap="round"/>
    <path d="M34 6V78" stroke="var(--ink-soft)" stroke-width="1.2" opacity=".55"/>
    <g stroke="var(--accent)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
      <path class="gn-art-arrow" style="--k:0" d="M24 30H108M108 30L100 25M108 30L100 35"/>
      <path class="gn-art-arrow" style="--k:1" d="M24 42H112M112 42L104 37M112 42L104 47"/>
      <path class="gn-art-arrow" style="--k:2" d="M24 54H108M108 54L100 49M108 54L100 59"/>
    </g></svg>`;

  function gnDetailHTML(t, tribe, sonName){
    const d = DATA[state.lang];
    const note = tribe.note || t.noteFallback;
    const link = tribe.link
      ? `<a class="gn-link" href="#${tribe.link.route}?q=${encodeURIComponent(tribe.link.q)}"><span class="icon" data-icon="link"></span>${t.related}: ${t.sections[tribe.link.route] || d.nav[tribe.link.route]}<span class="gn-link-q">${tribe.link.q}</span></a>`
      : '';
    return `<div class="gn-detail-body">
      <div class="gn-detail-head"><strong>${tribe.name}</strong><span class="gn-detail-son">${t.lineage}: ${sonName}</span></div>
      <p>${note}</p>${link}
    </div>`;
  }

  function renderGenealogy(d){
    const g = d.genealogy;
    const G = GENEALOGY.build(state.lang);
    const t = G.t;
    const q = state.query;
    if(!state.gnOpen){
      state.gnOpen = {};
      G.sons.forEach((s, i) => { state.gnOpen[s.id] = window.innerWidth > 700 || i === 0; });
    }
    const tm = tr => !q || looseMatch(tr.name, q) || (tr.note || '').toLowerCase().includes(q);

    const stats = t.stats.map(([n, l]) => `<div class="gn-stat"><b>${n}</b><span>${l}</span></div>`).join('');

    const wingsHtml = G.wings.map(w => `
      <section class="gn-wing gn-wing-${w.id} reveal">
        <header class="gn-wing-head">
          <span class="gn-wing-sym"><span class="icon" data-icon="${w.sym}"></span></span>
          <div><h3>${w.name}</h3><p>${w.alt}</p><small>${w.gift}</small></div>
        </header>
        <div class="gn-sons">
          ${w.sons.map(son => {
            const hit = son.tribes.some(tm);
            const open = q ? hit : state.gnOpen[son.id];
            return `
            <div class="gn-son${open ? ' open' : ''}${q && !hit ? ' dim' : ''}" data-son="${son.id}" style="--i:${son.index}">
              <button type="button" class="gn-son-btn" aria-expanded="${open}">
                <span class="gn-son-ic"><span class="icon" data-icon="${son.icon}"></span></span>
                <span class="gn-son-text"><strong>${son.name}</strong><small>${son.element} · ${son.tribes.length} ${t.tribeCount}</small></span>
                <span class="icon chev" data-icon="chevronDown"></span>
              </button>
              <div class="gn-collapse"><div class="gn-collapse-in">
                <div class="gn-tribes">
                  ${son.tribes.map((tr, k) => `<button type="button" class="gn-tribe${q && tm(tr) ? ' hit' : ''}${q && !tm(tr) ? ' dim' : ''}" data-tribe="${tr.id}" data-son="${son.id}" style="--k:${k}">${tr.name}</button>`).join('')}
                </div>
                <div class="gn-detail" data-detail="${son.id}"><div class="gn-detail-in"></div></div>
              </div></div>
            </div>`;
          }).join('')}
        </div>
      </section>`).join('');

    return sectionHead(d, 'genealogy', 'tree') + `
      <div class="gn">
        <div class="gn-stats reveal">${stats}</div>
        <div class="gn-story reveal">
          <div class="gn-story-art">${GN_ART}</div>
          <div><h3>${t.storyTitle}</h3><p>${t.story}</p></div>
        </div>
        <div class="gn-root reveal">
          <div class="gn-root-node"><span class="icon" data-icon="users"></span><strong>${g.root}</strong><small>${g.rootNote}</small></div>
        </div>
        <div class="gn-wings">${wingsHtml}</div>
        <div class="gn-tools reveal">
          <span class="gn-hint">${window.innerWidth > 700 ? t.hint : t.hintMobile}</span>
          <span class="gn-tools-btns">
            <button type="button" class="btn-mini" id="gnOpenAll">${t.openAll}</button>
            <button type="button" class="btn-mini" id="gnCloseAll">${t.closeAll}</button>
          </span>
        </div>
      </div>
      <div class="dict-note reveal" style="margin-top:22px;"><span class="icon" data-icon="info"></span><p>${g.note}</p></div>
    `;
  }

  function wireGenealogy(){
    const G = GENEALOGY.build(state.lang);
    const t = G.t;
    const root = el.content;
    const setOpen = (son, open) => {
      son.classList.toggle('open', open);
      const b = son.querySelector('.gn-son-btn'); if(b) b.setAttribute('aria-expanded', String(open));
      state.gnOpen[son.dataset.son] = open;
    };
    root.querySelectorAll('.gn-son-btn').forEach(btn => btn.addEventListener('click', () => {
      const son = btn.closest('.gn-son'); setOpen(son, !son.classList.contains('open'));
    }));
    const all = open => root.querySelectorAll('.gn-son').forEach(s => setOpen(s, open));
    const o = document.getElementById('gnOpenAll'), c = document.getElementById('gnCloseAll');
    if(o) o.addEventListener('click', () => all(true));
    if(c) c.addEventListener('click', () => all(false));
    root.querySelectorAll('.gn-tribe').forEach(btn => btn.addEventListener('click', () => {
      const sonEl = btn.closest('.gn-son');
      const panel = sonEl.querySelector('.gn-detail');
      const inner = panel.querySelector('.gn-detail-in');
      const wasActive = btn.classList.contains('active');
      root.querySelectorAll('.gn-tribe.active').forEach(b => b.classList.remove('active'));
      root.querySelectorAll('.gn-detail.show').forEach(p => { if(p !== panel) p.classList.remove('show'); });
      if(wasActive){ panel.classList.remove('show'); state.gnTribe = null; return; }
      const son = G.sons.find(x => x.id === btn.dataset.son);
      const tribe = son.tribes.find(x => x.id === btn.dataset.tribe);
      btn.classList.add('active');
      inner.innerHTML = gnDetailHTML(t, tribe, son.name);
      paintIcons(inner);
      panel.classList.add('show');
      state.gnTribe = tribe.id;
    }));
  }

  function renderClothing(d){
    const buildGroup = (arr) => arr.filter(it=> matches(it.name) || matches(it.text) || matches(it.badge))
      .map(it => `
      <div class="item-card reveal">
        ${cardTools(it.name)}
        <div class="icon-wrap"><span class="icon" data-icon="${it.icon}"></span></div>
        <div><span class="badge">${it.badge}</span><h3>${it.name}</h3></div>
        <p>${it.text}</p>
      </div>`).join('');

    const men = buildGroup(d.clothing.men);
    const women = buildGroup(d.clothing.women);
    const nothing = !men && !women;
    const count = d.clothing.men.filter(it=> matches(it.name)||matches(it.text)||matches(it.badge)).length +
                  d.clothing.women.filter(it=> matches(it.name)||matches(it.text)||matches(it.badge)).length;

    return sectionHead(d, 'clothing', 'shirt', count) +
      (nothing ? emptyState(d.ui.noResults) : `
      ${men ? `<h3 class="subheading"><span class="icon" data-icon="shirt"></span>${d.ui.menSection}</h3><div class="card-grid">${men}</div>` : ''}
      ${women ? `<h3 class="subheading"><span class="icon" data-icon="gem"></span>${d.ui.womenSection}</h3><div class="card-grid">${women}</div>` : ''}
    `);
  }

  function renderCuisine(d){
    const items = d.cuisine.dishes.filter(it => matches(it.name) || matches(it.text));
    if(!items.length) return sectionHead(d, 'cuisine', 'bowl', 0) + emptyState(d.ui.noResults);
    const cards = items.map(it => `
      <div class="item-card reveal">
        ${cardTools(it.name)}
        <div class="icon-wrap"><span class="icon" data-icon="${it.icon}"></span></div>
        <h3>${it.name}</h3>
        <p>${it.text}</p>
      </div>`).join('');
    return sectionHead(d, 'cuisine', 'bowl', items.length) + `<div class="card-grid">${cards}</div>`;
  }

  function renderLanguage(d){
    const facts = d.language.facts.filter(f => matches(f.text));
    const alpha = d.language.alphabet.filter(a => matches(a.letter) || matches(a.sound));
    if(!facts.length && !alpha.length) return sectionHead(d, 'language', 'letters', 0) + emptyState(d.ui.noResults);

    const factRows = facts.map(f => `
      <div class="fact-row reveal">
        <div class="icon-wrap"><span class="icon" data-icon="${f.icon}"></span></div>
        <p>${f.text}</p>
      </div>`).join('');

    const alphaChips = alpha.map(a => `
      <div class="alpha-chip reveal">
        <div class="letter">${a.letter}</div>
        <div class="sound">${a.sound}</div>
      </div>`).join('');

    return sectionHead(d, 'language', 'letters') +
      (facts.length ? `<h3 class="subheading"><span class="icon" data-icon="info"></span>${d.ui.factsTitle}</h3><div class="fact-list">${factRows}</div>` : '') +
      (alpha.length ? `<h3 class="subheading"><span class="icon" data-icon="letters"></span>${d.ui.alphabetTitle}</h3><div class="alpha-grid">${alphaChips}</div>` : '');
  }


  /* ---------- Names ---------- */
  function renderNames(d){
    const t = d.names;
    const q = state.query;
    const view = state.namesView;
    const tabs = `
      <div class="dict-toolbar reveal">
        <div class="view-toggle">
          <button class="view-toggle-btn ${view==='names'?'active':''}" data-nview="names">${t.tabNames}</button>
          <button class="view-toggle-btn ${view==='parts'?'active':''}" data-nview="parts">${t.tabParts}</button>
          <button class="view-toggle-btn ${view==='tradition'?'active':''}" data-nview="tradition">${t.tabTraditions}</button>
        </div>
        ${view==='names' ? `<div class="view-toggle">
          ${[['all',t.all],['m',t.boys],['f',t.girls]].map(([k,l])=>`<button class="view-toggle-btn ${state.namesGender===k?'active':''}" data-ngender="${k}">${l}</button>`).join('')}
        </div>` : ''}
      </div>
      ${view==='names' ? `<div class="map-chips reveal">
          ${['all', ...TS_NAMES.CAT_ORDER].map(k=>`<button type="button" class="map-chip${state.namesCat===k?' on':''}" data-ncat="${k}">${k==='all' ? t.all : TS_NAMES.CAT_LABELS[state.lang][k]}</button>`).join('')}
          <button type="button" class="map-chip gen-toggle${state.namesGen?' on':''}" data-ngen="1" title="${t.genHint}"><i></i>${t.genLabel}</button>
        </div>` : ''}`;

    if(view === 'tradition'){
      const cards = t.traditions.map(it => `
        <div class="item-card reveal">
          <div class="icon-wrap"><span class="icon" data-icon="${it.icon}"></span></div>
          <h3>${it.title}</h3>
          <p>${it.text}</p>
        </div>`).join('');
      return sectionHead(d, 'names', 'tag') + tabs + `<div class="card-grid">${cards}</div>` +
        `<div class="dict-note reveal" style="margin-top:22px;"><span class="icon" data-icon="info"></span><p>${t.note}</p></div>`;
    }

    if(view === 'parts'){
      const L = TS_NAMES.TYPE_LABELS[state.lang];
      const els = TS_NAMES.ELEMENTS.filter(e => !q || looseMatch(e.id, q) || e.script.includes(q) || e.fa.includes(q) || e.tk.toLowerCase().includes(q));
      if(!els.length) return sectionHead(d, 'names', 'tag', 0) + tabs + emptyState(d.ui.noResults);
      const order = ['birth','faith','virtue','nature','title','family','verb'];
      const blocks = order.map(type => {
        const rows = els.filter(e => e.type === type);
        if(!rows.length) return '';
        return `<h3 class="subheading dict-cat-heading">${L[type]}</h3><div class="dict-table">` +
          rows.map(e => `
          <div class="dict-row reveal">
            <span class="dict-tk">${e.id}</span>
            <span class="dict-fascript">${e.script}</span>
            <span class="dict-fa">${state.lang==='fa' ? e.fa : e.tk}</span>
          </div>`).join('') + `</div>`;
      }).join('');
      return sectionHead(d, 'names', 'tag', q ? els.length : undefined) +
        `<p class="dict-total">${TS_NAMES.ELEMENTS.length} ${t.partsCount}</p>` + tabs + blocks;
    }

    // names view
    const all = TS_NAMES.build(state.lang, { gen: state.namesGen });
    const list = all.filter(n => {
      if(state.namesCat !== 'all' && n.cat !== state.namesCat) return false;
      if(state.namesGender === 'm' && n.g === 'f') return false;
      if(state.namesGender === 'f' && n.g === 'm') return false;
      return !q || looseMatch(n.tk, q) || n.script.includes(q) || n.mean.toLowerCase().includes(q) || (n.known && n.known.toLowerCase().includes(q));
    });
    if(!list.length) return sectionHead(d, 'names', 'tag', 0) + tabs + emptyState(d.ui.noResults);
    const gLabel = { m:t.boys, f:t.girls, u:t.both };
    list.sort((a, b) => {
      const ra = tmLetterRank(a.tk[0]), rb = tmLetterRank(b.tk[0]);
      return ra !== rb ? ra - rb : a.tk.localeCompare(b.tk);
    });
    const groups = [];
    list.forEach(n => {
      const L = n.tk[0].toUpperCase();
      let grp = groups[groups.length - 1];
      if(!grp || grp.letter !== L){ grp = { letter:L, items:[] }; groups.push(grp); }
      grp.items.push(n);
    });
    const card = n => `
      <div class="name-card reveal g-${n.g}">
        <div class="name-head">
          <span class="name-tk">${n.tk}</span>
          <span class="name-script">${n.script}</span>
        </div>
        <span class="name-gender">${gLabel[n.g]}</span>${n.gen ? `<span class="name-gen" title="${t.genHint}">${t.genBadge}</span>` : ''}
        <p class="name-mean">${n.parts ? `<em>${t.literal}:</em> ` : ''}${n.mean}</p>
        ${n.known ? `<p class="name-known">${t.bearer}: ${n.known}</p>` : ''}
      </div>`;
    const jump = `<div class="alpha-jumpbar">${groups.map(g2 => `<button type="button" class="alpha-jump" data-jump="name-letter-${g2.letter}">${g2.letter}</button>`).join('')}</div>`;
    const body = groups.map(g2 => `
      <h3 class="subheading dict-cat-heading name-letter" id="name-letter-${g2.letter}">${g2.letter}<span>${g2.items.length}</span></h3>
      <div class="name-grid">${g2.items.map(card).join('')}</div>`).join('');
    return sectionHead(d, 'names', 'tag', q ? list.length : undefined) +
      `<p class="dict-total">${list.length} / ${all.length} ${t.count}${state.namesGen ? '' : ' — ' + t.genOff}</p>` + tabs + jump + body +
      `<div class="dict-note reveal" style="margin-top:22px;"><span class="icon" data-icon="info"></span><p>${t.note}</p></div>`;
  }

  /* ---------- Dictionary (curated + extended, with POS filter + export) ---------- */
  function toCSV(rows, headers){
    const esc = (v) => '"' + String(v).replace(/"/g,'""') + '"';
    return [headers.map(esc).join(','), ...rows.map(r => r.map(esc).join(','))].join('\r\n');
  }
  function downloadBlob(content, filename, mime){
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a);
    setTimeout(()=> URL.revokeObjectURL(url), 1000);
  }
  function exportDictionary(format){
    const rows = [];
    DICTIONARY.categories.forEach(cat => cat.words.forEach(w => rows.push([w.tk, w.faScript, w.fa, cat.id])));
    if(format === 'csv'){
      const csv = toCSV(rows, ['turkmen','persian_script','persian','category']);
      downloadBlob(csv, 'turkmenpedia-dictionary.csv', 'text/csv;charset=utf-8');
    } else {
      const json = rows.map(r => ({ turkmen:r[0], persian_script:r[1], persian:r[2], category:r[3] }));
      downloadBlob(JSON.stringify(json, null, 2), 'turkmenpedia-dictionary.json', 'application/json');
    }
  }

  // Official Turkmen Latin alphabet order, used to sort/group the A-Z view.
  const TM_ALPHABET = ['a','b','ç','d','e','ä','f','g','h','i','j','ž','k','l','m','n','ň','o','ö','p','r','s','ş','t','u','ü','w','y','ý','z'];
  function tmLetterRank(ch){ const i = TM_ALPHABET.indexOf((ch||'').toLowerCase()); return i === -1 ? 999 : i; }

  function flattenDictionary(){
    const all = [];
    DICTIONARY.categories.forEach(cat => cat.words.forEach(w => all.push(w)));
    return all;
  }

  function exportToolbar(d){
    return `<div class="dict-export">
      <button class="btn-mini" id="exportCsvBtn"><span class="icon" data-icon="download"></span>${d.ui.downloadCsv}</button>
      <button class="btn-mini" id="exportJsonBtn"><span class="icon" data-icon="download"></span>${d.ui.downloadJson}</button>
    </div>`;
  }

  function dictWordRow(d, w){
    return `
      <div class="dict-row reveal">
        <span class="dict-tk">${w.tk}</span>
        <span class="dict-fascript">${w.faScript}</span>
        <span class="dict-fa">${w.fa}</span>
      </div>`;
  }

  function renderDictionaryByTopic(d, q, matchWord){
    const blocks = DICTIONARY.categories.map(cat=>{
      const words = cat.words.filter(matchWord);
      if(!words.length) return '';
      const label = state.lang === 'fa' ? cat.fa : cat.tk;
      return `<h3 class="subheading dict-cat-heading">${label}</h3><div class="dict-table">${words.map(w => dictWordRow(d, w)).join('')}</div>`;
    }).filter(Boolean);
    return blocks.length ? blocks.join('') : emptyState(d.ui.noResults);
  }

  function renderDictionaryAlphabetical(d, q, matchWord){
    const words = flattenDictionary().filter(matchWord)
      .slice()
      .sort((a,b)=>{
        const ra = tmLetterRank(a.tk[0]), rb = tmLetterRank(b.tk[0]);
        if(ra !== rb) return ra - rb;
        return a.tk.localeCompare(b.tk);
      });
    if(!words.length) return emptyState(d.ui.noResults);

    const groups = [];
    words.forEach(w=>{
      const letter = w.tk[0].toUpperCase();
      let group = groups[groups.length-1];
      if(!group || group.letter !== letter){ group = { letter, words:[] }; groups.push(group); }
      group.words.push(w);
    });

    const jumpBar = `<div class="alpha-jumpbar">${groups.map(g => `<button type="button" class="alpha-jump" data-jump="dict-letter-${g.letter}">${g.letter}</button>`).join('')}</div>`;
    const body = groups.map(g => `
      <h3 class="subheading dict-cat-heading" id="dict-letter-${g.letter}">${g.letter}</h3>
      <div class="dict-table">${g.words.map(w => dictWordRow(d, w)).join('')}</div>
    `).join('');

    return jumpBar + body;
  }

  function renderExtendedDictionary(d, q){
    let html = `
      <div class="dict-ext-head reveal">
        <h3 class="subheading"><span class="icon" data-icon="link"></span>${d.ui.extTitle}</h3>
        <p class="dict-ext-intro">${d.ui.extIntro}</p>
      </div>`;
    if(!q){
      html += `<div class="empty-state reveal"><span class="icon" data-icon="search"></span><p>${d.ui.extPrompt}</p></div>`;
      return html;
    }
    if(!extReady()){
      loadExt().then(() => { if(state.route === 'dictionary') render(); }).catch(() => {});
      return html + `<div class="empty-state reveal"><span class="icon" data-icon="clock"></span><p>${state.lang === 'fa' ? 'در حال بارگذاری واژه‌نامهٔ گسترده…' : 'Giňeldilen sözlük ýüklenýär…'}</p></div>`;
    }
    const results = DICTIONARY_EXTENDED_FA.filter(e =>
      looseMatch(e.tk, q) || e.fa.includes(q) || (e.faScript && e.faScript.includes(q)) || (e.ex && (e.ex.tk.toLowerCase().includes(q) || e.ex.fa.includes(q)))
    );
    if(!results.length){
      html += `<div class="empty-state reveal"><span class="icon" data-icon="search"></span><p>${d.ui.extNoResults}</p></div>`;
      return html;
    }
    const EXT_LIMIT = 120;
    const shown = results.slice(0, EXT_LIMIT);
    if(results.length > EXT_LIMIT){
      html += `<p class="dict-total">${results.length} ${d.ui.dictTotalWords} — ${d.ui.extLimitNote.replace('{n}', EXT_LIMIT)}</p>`;
    }
    html += `<div class="ext-cards">` + shown.map(e => `
      <div class="ext-card reveal">
        <div class="ext-card-head">
          <span class="ext-tk">${e.tk}</span>
          ${e.faScript ? `<span class="ext-phon">[${e.faScript}]</span>` : (e.phon ? `<span class="ext-phon">[${e.phon}]</span>` : '')}
          <span class="ext-pos">${e.pos}</span>
        </div>
        <p class="ext-en">${e.fa}</p>
        ${e.ex ? `<p class="ext-example"><strong>${d.ui.extExampleLabel}</strong> <em>${e.ex.tk}</em> — ${e.ex.fa}</p>` : ''}
      </div>`).join('') + `</div>`;
    return html;
  }

  function renderDictionary(d){
    const q = state.query;
    const matchWord = (w) => !q || looseMatch(w.tk, q) || looseMatch(w.fa, q) || w.faScript.includes(q);
    const note = DICTIONARY.note[state.lang];
    const total = flattenDictionary().length;

    const toolbar = `
      <div class="dict-toolbar reveal">
        <div class="view-toggle">
          <button class="view-toggle-btn ${state.dictView === 'topic' ? 'active':''}" data-view="topic">${d.ui.viewByTopic}</button>
          <button class="view-toggle-btn ${state.dictView === 'alpha' ? 'active':''}" data-view="alpha">${d.ui.viewByAlphabet}</button>
        </div>
        ${exportToolbar(d)}
      </div>`;

    const body = state.dictView === 'alpha'
      ? renderDictionaryAlphabetical(d, q, matchWord)
      : renderDictionaryByTopic(d, q, matchWord);

    return sectionHead(d, 'dictionary', 'translate', q ? flattenDictionary().filter(matchWord).length : undefined) +
      `<p class="dict-total">${total} ${d.ui.dictTotalWords}</p>` +
      (q ? '' : `<div class="dict-note reveal"><span class="icon" data-icon="info"></span><p>${note}</p></div>`) +
      toolbar +
      body +
      `<div class="dict-divider"></div>` +
      renderExtendedDictionary(d, q);
  }

  function renderPeopleLike(d, key, iconName){
    const items = d[key].items.filter(it => matches(it.name) || matches(it.text) || matches(it.era) || matches(it.years));
    if(!items.length) return sectionHead(d, key, iconName, 0) + emptyState(d.ui.noResults);
    const cards = items.map(it => `
      <div class="item-card reveal">
        ${cardTools(it.name)}
        <div class="icon-wrap"><span class="icon" data-icon="${it.icon}"></span></div>
        <div><span class="badge">${it.era || it.years || ''}</span><h3>${it.name}</h3></div>
        <p>${it.text}</p>
      </div>`).join('');
    return sectionHead(d, key, iconName, items.length) + `<div class="card-grid">${cards}</div>`;
  }

  function renderBooks(d){
    const items = d.books.items.filter(it => matches(it.title) || matches(it.text) || matches(it.author));
    if(!items.length) return sectionHead(d, 'books', 'book', 0) + emptyState(d.ui.noResults);
    const cards = items.map(it => `
      <div class="item-card reveal">
        ${cardTools(it.title)}
        <div class="icon-wrap"><span class="icon" data-icon="${it.icon}"></span></div>
        <div><span class="badge">${it.author}${it.era ? ' · ' + it.era : ''}</span><h3>${it.title}</h3></div>
        <p>${it.text}</p>
      </div>`).join('');
    return sectionHead(d, 'books', 'book', items.length) + `<div class="card-grid">${cards}</div>`;
  }

  function renderSources(d){
    const cards = d.sources.categories.map(c => `
      <div class="item-card reveal">
        <div class="icon-wrap"><span class="icon" data-icon="${c.icon}"></span></div>
        <h3>${c.title}</h3>
        <p>${c.text}</p>
      </div>`).join('');
    return sectionHead(d, 'sources', 'external') + `<div class="card-grid">${cards}</div>` +
      `<div class="dict-note reveal" style="margin-top:26px;"><span class="icon" data-icon="info"></span><p>${d.sources.disclaimer}</p></div>`;
  }

  /* ---------- Quiz ---------- */
  function resetQuiz(){
    state.quiz = { index:0, score:0, answered:false, selected:null, finished:false };
  }
  function renderQuiz(d){
    const qz = state.quiz;
    const total = d.quiz.questions.length;
    const best = parseInt(localStorage.getItem('ts-quiz-best') || '0', 10);

    if(qz.finished){
      if(qz.score > best) localStorage.setItem('ts-quiz-best', String(qz.score));
      const finalBest = Math.max(qz.score, best);
      return sectionHead(d, 'quiz', 'trophy') + `
        <div class="quiz-card reveal quiz-result">
          <span class="icon quiz-trophy" data-icon="trophy"></span>
          <div class="quiz-score">${qz.score} ${d.ui.quizOutOf} ${total}</div>
          <div class="quiz-best">${d.ui.quizBestLabel}: ${finalBest} ${d.ui.quizOutOf} ${total}</div>
          <button class="btn btn-solid" id="quizRestartBtn">${d.ui.quizRestart}</button>
        </div>`;
    }

    const question = d.quiz.questions[qz.index];
    const optionsHtml = question.options.map((opt, i) => {
      let cls = 'quiz-option';
      if(qz.answered){
        if(i === question.correct) cls += ' correct';
        else if(i === qz.selected) cls += ' wrong';
      }
      return `<button class="${cls}" data-index="${i}" ${qz.answered ? 'disabled' : ''}>${opt}</button>`;
    }).join('');

    return sectionHead(d, 'quiz', 'trophy') + `
      <div class="quiz-card reveal">
        <div class="quiz-progress-label">${d.ui.quizQuestionLabel} ${qz.index+1}/${total} · ${d.ui.quizScoreLabel}: ${qz.score}</div>
        <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${(qz.index/total)*100}%"></div></div>
        <h3 class="quiz-question">${question.q}</h3>
        <div class="quiz-options">${optionsHtml}</div>
        ${qz.answered ? `
          <div class="quiz-feedback ${qz.selected === question.correct ? 'ok':'bad'}">
            <span class="icon" data-icon="${qz.selected === question.correct ? 'check':'x'}"></span>
            <span>${qz.selected === question.correct ? d.ui.quizCorrect : d.ui.quizWrong + ' ' + question.options[question.correct]}</span>
          </div>
          <p class="quiz-explain">${question.explain}</p>
          <button class="btn btn-solid" id="quizNextBtn">${qz.index+1 < total ? d.ui.quizNext : d.ui.quizFinish}</button>
        ` : ''}
      </div>`;
  }

  /* ---------------------------------------------------------
     Breadcrumb
     --------------------------------------------------------- */
  function renderBreadcrumb(d){
    if(state.route === 'dashboard'){ el.breadcrumb.innerHTML = ''; return; }
    el.breadcrumb.innerHTML = `<a href="#dashboard">${d.ui.breadcrumbHome}</a><span class="bc-sep">/</span><span>${d.nav[state.route]}</span>`;
  }

  /* ---------------------------------------------------------
     Main render
     --------------------------------------------------------- */
  function render(){
    if(window.TS_EXT) TS_EXT.cleanup();
    const d = DATA[state.lang];
    el.pageTitle.textContent = d.nav[state.route];
    el.pageSubtitle.textContent = d.subtitle[state.route] || '';
    el.brandTagline.textContent = d.tagline;
    el.sidebarNote.textContent = d.tagline;
    el.searchInput.placeholder = d.ui.searchPlaceholder;
    document.title = 'TurkmenPedia — ' + d.nav[state.route];
    renderBreadcrumb(d);

    let html = '';
    switch(state.route){
      case 'dashboard':  html = renderDashboard(d); break;
      case 'history':    html = renderTimelineSection(d, 'history', 'scroll'); break;
      case 'warpeace':   html = renderTimelineSection(d, 'warpeace', 'warpeace'); break;
      case 'places':     html = renderCardListSection(d, 'places', 'landmark'); break;
      case 'tribes':     html = renderTribes(d); break;
      case 'genealogy':  html = renderGenealogy(d); break;
      case 'clothing':   html = renderClothing(d); break;
      case 'cuisine':    html = renderCuisine(d); break;
      case 'arts':       html = renderCardListSection(d, 'arts', 'music'); break;
      case 'language':   html = renderLanguage(d); break;
      case 'names':      html = renderNames(d); break;
      case 'dictionary': html = renderDictionary(d); break;
      case 'people':     html = renderPeopleLike(d, 'people', 'users'); break;
      case 'poets':      html = renderPeopleLike(d, 'poets', 'feather'); break;
      case 'books':      html = renderBooks(d); break;
      case 'influences': html = renderCardListSection(d, 'influences', 'link'); break;
      case 'quiz':       html = renderQuiz(d); break;
      case 'sources':    html = renderSources(d); break;
      default:
        html = (window.TS_EXT && TS_EXT.routes[state.route]) ? TS_EXT.routes[state.route].render(d) : renderDashboard(d);
    }
    el.content.innerHTML = html;
    paintIcons(el.content);
    setActiveNav();
    initReveal();
    attachCardTools(el.content, state.route);

    const aboutBtn = document.getElementById('aboutBtn');
    if(aboutBtn){
      aboutBtn.addEventListener('click', ()=>{
        const panel = document.getElementById('aboutPanel');
        panel.hidden = !panel.hidden;
        if(!panel.hidden) panel.scrollIntoView({behavior:'smooth', block:'center'});
      });
    }
    const randomBtn = document.getElementById('randomBtn');
    if(randomBtn){
      randomBtn.addEventListener('click', ()=>{
        const pick = pickRandomItem(d);
        navigateTo(pick.section, pick.title);
      });
    }
    el.content.querySelectorAll('.explore-card[data-route]').forEach(card=>{
      card.addEventListener('click', ()=>{ location.hash = card.dataset.route; });
    });

    if(state.route === 'genealogy') wireGenealogy();
    if(window.TS_EXT){
      if(TS_EXT.routes[state.route] && TS_EXT.routes[state.route].wire) TS_EXT.routes[state.route].wire();
      TS_EXT.after(state.route);
    }

    // names-specific wiring
    if(state.route === 'names'){
      el.content.querySelectorAll('.alpha-jump[data-jump]').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          const target = document.getElementById(btn.dataset.jump);
          if(target) target.scrollIntoView({ behavior:'smooth', block:'start' });
        });
      });
      el.content.querySelectorAll('[data-nview]').forEach(btn=>{
        btn.addEventListener('click', ()=>{ state.namesView = btn.dataset.nview; render(); });
      });
      el.content.querySelectorAll('[data-ncat]').forEach(btn=>{
        btn.addEventListener('click', ()=>{ state.namesCat = btn.dataset.ncat; render(); });
      });
      const genBtn = el.content.querySelector('[data-ngen]');
      if(genBtn) genBtn.addEventListener('click', ()=>{ state.namesGen = !state.namesGen; render(); });
      el.content.querySelectorAll('[data-ngender]').forEach(btn=>{
        btn.addEventListener('click', ()=>{ state.namesGender = btn.dataset.ngender; render(); });
      });
    }

    // dictionary-specific wiring
    if(state.route === 'dictionary'){
      el.content.querySelectorAll('.view-toggle-btn').forEach(btn=>{
        btn.addEventListener('click', ()=>{ state.dictView = btn.dataset.view; render(); });
      });
      const csvBtn = document.getElementById('exportCsvBtn');
      const jsonBtn = document.getElementById('exportJsonBtn');
      if(csvBtn) csvBtn.addEventListener('click', ()=> exportDictionary('csv'));
      if(jsonBtn) jsonBtn.addEventListener('click', ()=> exportDictionary('json'));
      // Alphabet jump buttons scroll to the target heading in-page —
      // deliberately NOT real #hash links, so they never trigger the
      // SPA router (which would otherwise treat "dict-letter-A" as an
      // unknown route and bounce the user back to the dashboard).
      el.content.querySelectorAll('.alpha-jump[data-jump]').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          const target = document.getElementById(btn.dataset.jump);
          if(target) target.scrollIntoView({ behavior:'smooth', block:'start' });
        });
      });
    }

    // quiz-specific wiring
    if(state.route === 'quiz'){
      el.content.querySelectorAll('.quiz-option').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          if(state.quiz.answered) return;
          const idx = parseInt(btn.dataset.index, 10);
          state.quiz.selected = idx;
          state.quiz.answered = true;
          if(idx === d.quiz.questions[state.quiz.index].correct) state.quiz.score++;
          render();
        });
      });
      const nextBtn = document.getElementById('quizNextBtn');
      if(nextBtn) nextBtn.addEventListener('click', ()=>{
        if(state.quiz.index + 1 < d.quiz.questions.length){
          state.quiz.index++; state.quiz.answered = false; state.quiz.selected = null;
          render();
        } else {
          state.quiz.finished = true;
          render();
        }
      });
      const restartBtn = document.getElementById('quizRestartBtn');
      if(restartBtn) restartBtn.addEventListener('click', ()=>{ resetQuiz(); render(); });
    }
  }

  /* ---------------------------------------------------------
     Service worker (PWA) — best-effort, silently no-ops if the
     environment doesn't support it (e.g. file:// or old browser).
     --------------------------------------------------------- */
  function registerServiceWorker(){
    if('serviceWorker' in navigator && location.protocol.startsWith('http')){
      navigator.serviceWorker.register('sw.js').catch(()=>{});
    }
  }

  /* ---------------------------------------------------------
     Boot
     --------------------------------------------------------- */
  if(window.TS_EXT){
    TS_EXT.ctx = { state, el, sectionHead, cardTools, emptyState, looseMatch, matches, paintIcons, showToast, render, initReveal };
  }

  /* ---------- offline status + install ---------- */
  let installEvt = null;
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installEvt = e; refreshOffline(); });
  const OFF = {
    fa:{ label:'حالت آفلاین', ready:n => `آماده؛ ${n} فایل ذخیره شده`, notYet:'هنوز ذخیره نشده', install:'نصب برنامه', offline:'اینترنت قطع است؛ برنامه آفلاین کار می‌کند', online:'اینترنت وصل شد', unsupported:'پشتیبانی نمی‌شود', clear:'پاک‌کردن حافظهٔ آفلاین', cleared:'حافظهٔ آفلاین پاک شد' },
    tk:{ label:'Oflaýn tertip', ready:n => `Taýýar; ${n} faýl saklanyldy`, notYet:'Entek saklanylmady', install:'Programmany guruň', offline:'Internet ýok; programma oflaýn işleýär', online:'Internet birikdi', unsupported:'Goldanylmaýar', clear:'Oflaýn ýadyny arassala', cleared:'Oflaýn ýat arassalandy' }
  };
  async function cacheCount(){
    if(!('caches' in window)) return -1;
    try{ let n = 0; for(const k of await caches.keys()){ n += (await (await caches.open(k)).keys()).length; } return n; }catch(e){ return -1; }
  }
  function ensureOfflineRow(){
    const body = document.querySelector('.settings-body'); if(!body) return null;
    let row = document.getElementById('offlineRow');
    if(!row){
      row = document.createElement('div'); row.className = 'settings-row'; row.id = 'offlineRow';
      row.innerHTML = '<span class="settings-row-label"><span class="icon" data-icon="download"></span><span id="offLabel"></span></span><span class="off-status" id="offStatus"></span><span class="off-btns"><button type="button" class="btn-mini" id="offInstall" hidden></button><button type="button" class="btn-mini" id="offClear"></button></span>';
      body.appendChild(row); paintIcons(row);
      row.querySelector('#offInstall').addEventListener('click', async () => { if(installEvt){ installEvt.prompt(); await installEvt.userChoice; installEvt = null; refreshOffline(); } });
      row.querySelector('#offClear').addEventListener('click', async () => {
        if('caches' in window){ for(const k of await caches.keys()) await caches.delete(k); }
        showToast(OFF[state.lang].cleared); refreshOffline();
      });
    }
    return row;
  }
  async function refreshOffline(){
    const row = ensureOfflineRow(); if(!row) return;
    const t = OFF[state.lang], n = await cacheCount();
    row.querySelector('#offLabel').textContent = t.label;
    row.querySelector('#offStatus').textContent = n < 0 ? t.unsupported : (n > 0 ? t.ready(n) : t.notYet);
    row.querySelector('#offClear').textContent = t.clear;
    const ib = row.querySelector('#offInstall'); ib.textContent = t.install; ib.hidden = !installEvt;
  }
  window.addEventListener('offline', () => showToast(OFF[state.lang].offline));
  window.addEventListener('online', () => showToast(OFF[state.lang].online));
  document.addEventListener('click', e => { if(e.target.closest && e.target.closest('#settingsBtn')) refreshOffline(); });

  function boot(){
    let { route, query } = parseHash();
    if(!validRoutes.includes(route)){
      const remembered = localStorage.getItem('ts-last-route');
      route = validRoutes.includes(remembered) ? remembered : 'dashboard';
      query = '';
    }
    state.route = route;
    state.query = (query || '').toLowerCase();

    applyTheme();
    applyLangAttrs();
    applyFontSize();
    applyContrast();
    applyReaderMode();
    buildNav();
    applySettingsLabels();
    render();
    paintIcons(document);
    registerServiceWorker();
    (window.requestIdleCallback || (f => setTimeout(f, 2500)))(() => loadExt().catch(() => {}), { timeout:5000 });

    const target = '#' + route + (query ? '?q=' + encodeURIComponent(query) : '');
    if(location.hash !== target) location.hash = target;
  }

  boot();
})();
