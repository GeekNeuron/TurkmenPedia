/* =========================================================
   TurkmenPedia — extension sections (js/sections.js)
   Plugs into app.js through window.TS_EXT:
     routes[id] = { render(d), wire() }   new pages
     after(route)                          post-render hooks (timeline filter)
     search(lang)                          extra global-search entries
     bindCardTools(root, section)          source panel + share-as-image
     cleanup()                             called before every route change
   ========================================================= */
window.TS_EXT = (function(){
  'use strict';
  const X = { routes:{}, ctx:null, timers:[] };
  const C = () => X.ctx;
  const lang = () => C().state.lang;
  const D = () => DATA[lang()];
  const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
  const NS = 'http://www.w3.org/2000/svg';
  X.cleanup = () => { X.timers.forEach(clearInterval); X.timers = []; };

  const L = {
    fa:{ src:'منابع و مراجع', srcNote:'پیوندها به منابع عمومی‌اند. برای ادعاهای حساس، به متن اصلی مراجعه کنید.', wiki:'ویکی‌پدیا (جست‌وجو)', share:'ساخت تصویر برای اشتراک', saved:'تصویر ساخته شد', fail:'ساخت تصویر ممکن نشد',
         periods:{ all:'همه', ancient:'باستان', medieval:'سده‌های میانه', tribes:'ایل‌ها و روس‌ها', soviet:'دوران شوروی', modern:'استقلال' }, scrub:'نوار زمان', noItems:'موردی نیست' },
    tk:{ src:'Çeşmeler we salgylar', srcNote:'Baglanyşyklar umumy çeşmelere. Möhüm tassyklamalar üçin asyl tekste serediň.', wiki:'Wikipediýa (gözleg)', share:'Paýlaşmak üçin surat döret', saved:'Surat taýýar', fail:'Surat döredip bolmady',
         periods:{ all:'Hemmesi', ancient:'Gadym zaman', medieval:'Orta asyrlar', tribes:'Tireler we ruslar', soviet:'Sowet döwri', modern:'Garaşsyzlyk' }, scrub:'Wagt çyzygy', noItems:'Hiç zat ýok' }
  };

  /* =======================================================
     Sources registry
     Direct links are pages that were opened and read while
     preparing this release; everything else is a Wikipedia
     search link (always valid) with an English topic.
     ======================================================= */
  const SRC = {
    unesco:   { t:['فهرست یونسکو (میراث ناملموس) — ترکمنستان','ÝUNESKO sanawy (ruhy miras) — Türkmenistan'], u:'https://ich.unesco.org/en-state/turkmenistan-TM' },
    law:      { t:['متن رسمی ترکمنی: قانون کار، ماده ۸۱، تعطیلات و مناسبت‌ها (سفارت ترکمنستان، وزارت امور خارجه)','Resmi türkmen teksti: Zähmet kodeksi, 81-nji madda, baýramlar we hatyra günleri (TDM ilçihanasy)'], u:'https://kyrgyzstan.tmembassy.gov.tm/tk/the-list-of-holidays-and-memorial-dates' },
    azaHol:   { t:['ترکمنستان، سرزمین جشن‌ها (رادیو آزادلیق)','Türkmenistan – baýramçylyklar ýurdy (Azatlyk radiosy)'], u:'https://www.azathabar.com/a/1885989.html' },
    miras:    { t:['ترکمن خالک نقیللاری، «میراث» ۲۰۰۵ (اسکریبد)','Türkmen halk nakyllary, «Miras» 2005 (Scribd)'], u:'https://www.scribd.com/document/656625150/Turkmen-halk-nakyllary-2005-Miras' },
    yashlar:  { t:['نقیل‌ها و آتالار سوزی (پورتال جوانان ترکمنستان)','Nakyllar we atalar sözi (yashlar.gov.tm)'], u:'https://yashlar.gov.tm/item/2230' },
    yashlarH: { t:['هوودی‌ها (پورتال جوانان ترکمنستان)','Hüwdüler (yashlar.gov.tm)'], u:'https://yashlar.gov.tm/item/2198' },
    atavatanA:{ t:['ضرب‌المثل‌هایی دربارهٔ زبان و سخن، با ترجمهٔ انگلیسی (آتاواتان ترکمنستان)','Dil, söz hakynda nakyllar Iňlis dilinde (Atavatan Türkmenistan)'], u:'https://www.atavatan-turkmenistan.com/dil-soz-hakynda-nakyllar-inlis-dilinde/' },
    atavatanB:{ t:['«گل بی‌خار نیست»؛ درس آتالار سوزی (آتاواتان ترکمنستان)','Atalar sözi: Tikensiz gül bolmaz, zähersiz bal (Atavatan Türkmenistan)'], u:'https://atavatan-turkmenistan.com/atalar-sozi-tikensiz-gul-bolmaz-zahersiz-bal/' },
    orientRid:{ t:['معماهای ترکمن (Orient.tm)','Türkmen tapmaçalary (Orient.tm)'], u:'https://orient.tm/turkmenskie-zagadki-i-hitrye-voprosy-ot-nekotoryh-narodov-mira/' },
    orientHuw:{ t:['هوودی، لالایی-تعویذ (Orient.tm)','Hüwdi — aýdym-oberegi (Orient.tm)'], u:'https://orient.tm/pesni-oberegi-turkmenskaya-huvdi-v-animacionnoj-serii-kolybelnye-mira/' },
    inash:    { t:['هوودی چیست؟ (InAshgabat)','Hüwdi näme? (InAshgabat)'], u:'https://ashgabat.in/2021/11/20/huwdi-name/' },
    azaColl:  { t:['تاریخ گردآوری ضرب‌المثل‌های ترکمن (رادیو آزادلیق)','Nakyllary we atalar sözüni ýygnamagyň taryhy (Azatlyk radiosy)'], u:'https://www.azathabar.com/a/29706364.html' },
    carpetU:  { t:['قالی‌بافی سنتی ترکمن — پروندهٔ یونسکو (۲۰۱۹)','Türkmen halyçylyk sungaty — ÝUNESKO resminamasy (2019)'], u:'https://ich.unesco.org/en/RL/traditional-turkmen-carpet-making-art-in-turkmenistan-01486' },
    whc:      { t:['میراث جهانی یونسکو — ترکمنستان','ÝUNESKO Bütindünýä mirasy — Türkmenistan'], u:'https://whc.unesco.org/en/statesparties/tm' },
    ichlist:  { t:['فهرست عناصر میراث ناملموس ترکمنستان (ویکی‌پدیا)','Türkmenistanyň ruhy miras elementleri (Wikipediýa)'], u:'https://en.wikipedia.org/wiki/List_of_Intangible_Cultural_Heritage_elements_in_Turkmenistan' },
    cuisine:  { t:['آشپزی ترکمن (ویکی‌پدیا)','Türkmen aşhanasy (Wikipediýa)'], u:'https://en.wikipedia.org/wiki/Turkmen_cuisine' },
    ishlykly: { t:['ایچلکلی (ویکی‌پدیا)','Içlekli (Wikipediýa)'], u:'https://en.wikipedia.org/wiki/Ishlykly' },
    eurFood:  { t:['خوراک ترکمنستان (Eurasia Travel)','Türkmen tagamlary (Eurasia Travel)'], u:'https://eurasia.travel/turkmenistan/food/' },
    eurCloth: { t:['پوشاک و جواهر ترکمن (Eurasia Travel)','Türkmen eşigi we şaý-sepi (Eurasia Travel)'], u:'https://eurasia.travel/turkmenistan/culture/clothing-and-jewelry/' },
    eurMusic: { t:['موسیقی و رقص ترکمن (Eurasia Travel)','Türkmen sazy we tansy (Eurasia Travel)'], u:'https://eurasia.travel/turkmenistan/culture/music-and-dance/' },
    chyrpy:   { t:['ردای زنانهٔ ترکمن (TRC لایدن)','Türkmen aýal eşigi (TRC Leýden)'], u:'https://trc-leiden.nl/trc-needles/individual-textiles-and-textile-types/daily-and-general-garments-and-textiles/turkmen-womans-robe' },
    flag:     { t:['پرچم ترکمنستان (ویکی‌پدیا)','Türkmenistanyň baýdagy (Wikipediýa)'], u:'https://en.wikipedia.org/wiki/Flag_of_Turkmenistan' },
    oghuz:    { t:['اوغوزخان (ویکی‌پدیا)','Oguz han (Wikipediýa)'], u:'https://en.wikipedia.org/wiki/Oghuz_Khagan' },
    toyo:     { t:['شجرهٔ ترکمن، ابوالغازی (نسخهٔ دیجیتال توهو‌بونکو)','Abulgazy, Şejere-i Terakime (Toýo Bunko sanly neşir)'], u:'https://dsr.nii.ac.jp/toyobunko/VIII-1-B-17/V-1/page-hr/0204.html.en' },
    music:    { t:['موسیقی ترکمنستان (ویکی‌پدیا)','Türkmenistanyň sazy (Wikipediýa)'], u:'https://en.wikipedia.org/wiki/Music_of_Turkmenistan' },
    dutar:    { t:['دوتار (ویکی‌پدیا)','Dutar (Wikipediýa)'], u:'https://en.wikipedia.org/wiki/Dutar' },
    dilli:    { t:['دیللی تویدوک (ویکی‌پدیا)','Dilli tüýdük (Wikipediýa)'], u:'https://en.wikipedia.org/wiki/Dilli_tuiduk' },
    ovezov:   { t:['دانتر اووزوف (ویکی‌پدیا)','Danatar Öwezow (Wikipediýa)'], u:'https://en.wikipedia.org/wiki/Danatar_Ovezov' },
    gul:      { t:['گل (نقش قالی) — ویکی‌پدیا','Göl (haly nagşy) — Wikipediýa'], u:'https://en.wikipedia.org/wiki/Gul_(design)' },
    salor:    { t:['قالی سالور (بریتانیکا)','Salyr halysy (Britannika)'], u:'https://www.britannica.com/art/Salor-rug' },
    nakylA:   { t:['نقیل‌ها و اتالار سوزی، گردآوری (۱)','Türkmen nakyllary we atalar sözi (A)'], u:'http://turkmen-ca.blogspot.com/2007/08/trkmen-nakyllary-we-atalar-szi.html' },
    nakylA2:  { t:['نقیل‌ها و اتالار سوزی، گردآوری (۲)','Türkmen nakyllary we atalar sözi (A_2)'], u:'http://turkmen-ca.blogspot.com/2011/08/turkmen-nakyllary-we-atalar-sozi-2.html' },
    dergi:    { t:['مقالهٔ مقایسهٔ ضرب‌المثل‌های ترکمن و ترکی استانبولی (DergiPark)','Türkmen we Stambul türkçesindäki nakyllaryň deňeşdirilişi (DergiPark)'], u:'https://dergipark.org.tr/tr/download/article-file/2154127' },
    tkNakyl:  { t:['فولکلور: نقیل‌ها (ضرب‌المثل) — turkmenkultur.com','Folklor: nakyllar — turkmenkultur.com'], u:'https://www.turkmenkultur.com/menu/ml/t3/nakyl.html' },
    tkRid:    { t:['فولکلور: ماتال‌ها (معماها) — turkmenkultur.com','Folklor: matallar — turkmenkultur.com'], u:'https://www.turkmenkultur.com/menu/ml/t3/matal.html' },
    tkHuw:    { t:['فولکلور: هوودی‌ها — turkmenkultur.com','Folklor: hüwdiler — turkmenkultur.com'], u:'https://www.turkmenkultur.com/menu/ml/t3/huwdi.html' },
    tkKusht:  { t:['فولکلور: کوشت‌دپمه‌ها — turkmenkultur.com','Folklor: küştdepmeler — turkmenkultur.com'], u:'https://www.turkmenkultur.com/menu/ml/t3/kusht.html' },
    tkLale:   { t:['فولکلور: لاله‌ها — turkmenkultur.com','Folklor: läleler — turkmenkultur.com'], u:'https://www.turkmenkultur.com/menu/ml/t3/lale.html' },
    tkMonj:   { t:['فولکلور: مونجوغاتدی‌ها — turkmenkultur.com','Folklor: monjugatdylar — turkmenkultur.com'], u:'https://www.turkmenkultur.com/menu/ml/t3/monjuk.html' },
    tkDilek:  { t:['فولکلور: آلقیش و دیلک — turkmenkultur.com','Folklor: alkyşlar we dilegler — turkmenkultur.com'], u:'https://www.turkmenkultur.com/menu/ml/t3/dilek.html' },
    tkYrym:   { t:['فولکلور: یریم و ینانچ — turkmenkultur.com','Folklor: yrym we ynançlar — turkmenkultur.com'], u:'https://www.turkmenkultur.com/menu/ml/t3/yrym.html' },
    tkYan:    { t:['فولکلور: یانیلتماچ‌ها — turkmenkultur.com','Folklor: ýaňyltmaçlar — turkmenkultur.com'], u:'https://www.turkmenkultur.com/menu/ml/t3/yan.html' },
    tkShorta: { t:['فولکلور: شورتا سوزلر — turkmenkultur.com','Folklor: şorta sözler — turkmenkultur.com'], u:'https://www.turkmenkultur.com/menu/ml/t3/shorta.html' },
    inash:    { t:['«هوودی چیست؟» — ashgabat.in','Hüwdi näme? — ashgabat.in'], u:'https://ashgabat.in/2021/11/20/huwdi-name/' },
    orientHuw:{ t:['«پیام‌های نگهبان»: هوودی در «لالایی‌های جهان» — orient.tm','Hüwdi — orient.tm'], u:'https://orient.tm/pesni-oberegi-turkmenskaya-huvdi-v-animacionnoj-serii-kolybelnye-mira/' },
    orientRid:{ t:['معماهای ترکمن — orient.tm','Türkmen matallary — orient.tm'], u:'https://orient.tm/turkmenskie-zagadki-i-hitrye-voprosy-ot-nekotoryh-narodov-mira/' },
    carpet:   { t:['قالی ترکمن: گل و جهیزیه (Khinkhwab)','Türkmen halysy: göl we gelin eşigi (Khinkhwab)'], u:'https://khinkhwab.com/blogs/news/turkmen-carpet-gul-and-dowry' }
  };
  const wiki = topic => ({ t:null, topic, u:'https://en.wikipedia.org/wiki/Special:Search?search=' + encodeURIComponent(topic) });
  // [pattern tested on fa+tk title, direct source ids, wikipedia topics]
  const RULES = [
    [/آلابای|Alabaý|سگ/i, ['unesco'], ['Alabai']],
    [/آخال|Ahal|اسب|Atyň|At güni/i, ['unesco'], ['Akhal-Teke']],
    [/گوروغلی|Görogly|Gorogly|حماسه/i, ['ichlist'], ['Epic of Koroghlu']],
    [/ملانصرالدین|Nasreddin/i, ['ichlist'], ['Nasreddin']],
    [/نوروز|Nowruz/i, ['unesco'], ['Nowruz']],
    [/قالی|Haly|گل |göl|Göl|tire|ایل|Tireler|ensi|انسی|asmalyk|آسمالیق/i, ['carpetU','gul','carpet'], []],
    [/سالور|Salyr/i, ['salor'], []],
    [/چیرپی|Çyrpy|کتنی|Keteni|کشدی|Keşde|گینچ|Gyňaç|تاخیا|Tahýa|پوشاک|eşik/i, ['eurCloth','chyrpy'], []],
    [/هوودی|Hüwdi|لالایی/i, ['yashlarH','inash','orientHuw'], []],
    [/گردآوری ضرب|nakyllary ýygnamak|Nakyllary ýygnamagyň/i, ['azaColl'], []],
    [/ایچلکلی|Içlekli/i, ['ishlykly'], []],
    [/چکدیرمه|Çekdirme|پلو|palaw|کاقماچ|Kakmaç|تمدیر|Tamdyr|بوگلاما|Buglama|خربزه|Gawun|غذا|dish|Etli/i, ['cuisine','eurFood'], []],
    [/دوتار|Dutar/i, ['dutar'], []],
    [/دیللی|Dilli|تویدوک|tüýdük|گیجک|Gyjak|گوپوز|Gopuz|باغشی|Bagşy|دستان|Dessan|تیرمه|Tirme/i, ['music','eurMusic'], []],
    [/اپرا|opera|Şasenem|شاسنم/i, ['ovezov'], ['Shasenem and Garib']],
    [/اوغوز|Oguz|شجره|Şejere|بوزوق|Bozok|اوچوق|Üçok/i, ['oghuz','toyo'], []],
    [/پرچم|baýdak|Baýdak|flag/i, ['flag'], []],
    [/مرو|Merw|Merv/i, ['whc'], ['Merv']],
    [/نیسا|Nusaý|Nisa/i, ['whc'], ['Nisa, Turkmenistan']],
    [/کهنه‌گرگانج|Köneürgenç|گرگانج|Gürgenç/i, ['whc'], ['Kunya-Urgench']],
    [/یانگی‌قلعه|Ýangykala/i, [], ['Yangykala Canyon']],
    [/دروازه|Derweze|Darvaza|جهنم|Dowzah/i, [], ['Darvaza gas crater']],
    [/آلتین‌دپه|Altyndepe/i, [], ['Altyn-Depe']],
    [/گنور|Gonur|مرغیانه|Margiýana/i, [], ['Gonur Depe','Bactria–Margiana Archaeological Complex']],
    [/جیتون|Jeýtun/i, [], ['Jeitun culture']],
    [/دندانقان|Dandanakan|دندانقان/i, [], ['Battle of Dandanaqan']],
    [/ملازگرد|Malazgirt/i, [], ['Battle of Manzikert']],
    [/سنجر|Sanjar/i, [], ['Ahmad Sanjar']],
    [/سلجوق|Seljuk|Seljuk/i, [], ['Seljuk Empire']],
    [/خوارزم|Horezm/i, [], ['Khwarazmian dynasty']],
    [/مغول|Mongol/i, [], ['Mongol conquest of Central Asia']],
    [/قره‌قویونلو|Garagoýunly|آق‌قویونلو|Akgoýunly/i, [], ['Kara Koyunlu','Aq Qoyunlu']],
    [/نادرشاه|Nedir Şa|Nadyr/i, [], ['Nader Shah']],
    [/گؤک‌تپه|Gökdepe|گوک/i, [], ['Siege of Geok Tepe']],
    [/آخال|Ahal şert|پیمان/i, [], ['Treaty of Akhal']],
    [/راه‌آهن|demirýol|Zakaspi|Transcaspian/i, [], ['Trans-Caspian railway']],
    [/اوغوز|Oguz|ýabgu|یبغو/i, [], ['Oghuz Yabgu State']],
    [/ضرب‌المثل|Atalar sözi|nakyl|Nakyl/i, ['miras','yashlar'], []],
    [/زلزله|ýertitreme|Ýertitreme/i, [], ['1948 Ashgabat earthquake']],
    [/قره‌قوم|Garagum|کانال/i, [], ['Karakum Canal']],
    [/استقلال|Garaşsyzlyk/i, [], ['Independence of Turkmenistan']],
    [/بی‌طرفی|Bitaraplyk/i, [], ['Neutrality of Turkmenistan']],
    [/جنید|Junaýyt/i, [], ['Junaid Khan']],
    [/مختومقلی|Magtymguly|فراغی|Pyragy/i, [], ['Magtymguly Pyragy']],
    [/ابوالغازی|Abulgazy/i, ['toyo'], ['Abu al-Ghazi Bahadur']],
    [/بیرام خان|Baýram han/i, [], ['Bairam Khan']],
    [/نمد|Keçe/i, [], ['Felt']],
    [/ابریشم|ýüpek/i, [], ['Silk Road']],
    [/یورت|Ýurt|öý/i, [], ['Yurt']],
    [/تقویم|Senenama|baýram/i, [], ['Public holidays in Turkmenistan']],
    [/ساهی جپباروف|Sähy Jepbarow/i, [], ['Sähy Jepbarow']],
    [/زبان|dil|الفبا|elipbiý/i, [], ['Turkmen language','Turkmen alphabet']],
    [/کتاب|Kitap|دده قورقود|Dede Gorkut/i, [], ['Book of Dede Korkut']]
  ];
  const SECTION_DEFAULT = {
    history:[[], ['History of Turkmenistan']], warpeace:[[], ['Military history of Turkmenistan']], places:[['whc'], ['Tourism in Turkmenistan']],
    tribes:[[], ['Turkmen people']], clothing:[['eurCloth'], []], cuisine:[['cuisine'], []], arts:[['unesco'], ['Culture of Turkmenistan']],
    people:[[], ['List of Turkmen people']], poets:[[], ['Turkmen literature']], books:[[], ['Turkmen literature']], influences:[[], ['Turkmen people']],
    map:[['whc'], []], carpets:[['gul'], []], music:[['music'], []], calendar:[[], ['Public holidays in Turkmenistan']], folklore:[['ichlist'], []]
  };
  function sourcesFor(section, text){
    const direct = new Set(), topics = new Set();
    RULES.forEach(([re, ds, ts]) => { if(re.test(text)){ ds.forEach(x => direct.add(x)); ts.forEach(x => topics.add(x)); } });
    const def = SECTION_DEFAULT[section] || [[], []];
    if(!direct.size && !topics.size){ def[0].forEach(x => direct.add(x)); def[1].forEach(x => topics.add(x)); }
    const out = [...direct].map(id => SRC[id]);
    [...topics].slice(0, 2).forEach(tp => out.push(wiki(tp)));
    return out.slice(0, 4);
  }
  function sourcePanel(section, title, text, ids){
    const i = lang() === 'fa' ? 0 : 1, l = L[lang()];
    const list = ids ? ids.split(',').map(id => SRC[id]).filter(Boolean) : sourcesFor(section, title + ' ' + text);
    const items = list.length ? list.map(s => `<a class="src-chip" href="${s.u}" target="_blank" rel="noopener noreferrer"><span class="icon" data-icon="external"></span>${s.t ? s.t[i] : l.wiki + ': ' + s.topic}</a>`).join('') : '';
    return `<div class="src-panel-in"><strong>${l.src}</strong><div class="src-chips">${items}</div><small>${l.srcNote}</small></div>`;
  }

  /* =======================================================
     Card tools: sources + share-as-image
     ======================================================= */
  function cardOf(btn){ return btn.closest('.item-card, .timeline-item, .name-card, .ext-card, .tl-card, .x-card') || btn.closest('article, li, div'); }
  function readCard(card){
    const h = card.querySelector('h3, h4, strong, .item-title');
    const p = card.querySelector('p');
    return { title:(h ? h.textContent : '').trim(), text:(p ? p.textContent : '').trim() };
  }
  X.bindCardTools = function(root, section){
    root.querySelectorAll('[data-src]').forEach(btn => btn.addEventListener('click', e => {
      e.stopPropagation();
      const card = cardOf(btn); if(!card) return;
      let panel = card.querySelector(':scope > .src-panel');
      if(!panel){
        const { title, text } = readCard(card);
        panel = document.createElement('div'); panel.className = 'src-panel';
        panel.innerHTML = sourcePanel(section, title, text, card.dataset.srcs);
        card.appendChild(panel); C().paintIcons(panel);
        void panel.offsetHeight;
      }
      const open = !panel.classList.contains('open');
      panel.classList.toggle('open', open); btn.classList.toggle('on', open);
    }));
    root.querySelectorAll('[data-share]').forEach(btn => btn.addEventListener('click', async e => {
      e.stopPropagation();
      const card = cardOf(btn); if(!card) return;
      const { title, text } = readCard(card);
      btn.classList.add('busy');
      try{ await shareImage(title, text, section); }
      catch(err){ C().showToast(L[lang()].fail); }
      btn.classList.remove('busy');
    }));
  };

  /* ---- share image (canvas, no network) ---- */
  function wrap(ctx, text, maxW){
    const words = text.split(/\s+/), lines = []; let cur = '';
    words.forEach(w => { const t = cur ? cur + ' ' + w : w; if(ctx.measureText(t).width > maxW && cur){ lines.push(cur); cur = w; } else cur = t; });
    if(cur) lines.push(cur); return lines;
  }
  async function shareImage(title, text, section){
    const fa = lang() === 'fa', d = D();
    const W = 1080, H = 1350, M = 90;
    const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    const g = cv.getContext('2d');
    const css = getComputedStyle(document.documentElement);
    const fam = getComputedStyle(document.body).fontFamily;
    try{ await document.fonts.load('700 40px ' + fam); await document.fonts.load('400 30px ' + fam); }catch(e){}
    const dark = document.documentElement.dataset.theme === 'dark';
    const bg = dark ? '#1b1410' : '#f3ede1', ink = dark ? '#f1e8da' : '#241a12', primary = '#9a2b2b', gold = '#c18a2e';
    g.fillStyle = bg; g.fillRect(0, 0, W, H);
    // woven band
    g.fillStyle = primary; g.fillRect(0, 0, W, 150); g.fillRect(0, H - 130, W, 130);
    g.strokeStyle = gold; g.lineWidth = 3;
    for(let x = 40; x < W; x += 80){
      [[75, 150], [H - 65, H]].forEach(([cy]) => {
        g.beginPath(); g.moveTo(x, cy - 28); g.lineTo(x + 28, cy); g.lineTo(x, cy + 28); g.lineTo(x - 28, cy); g.closePath(); g.stroke();
      });
    }
    g.direction = fa ? 'rtl' : 'ltr'; g.textAlign = fa ? 'right' : 'left';
    const X0 = fa ? W - M : M;
    g.fillStyle = gold; g.font = '700 30px ' + fam;
    g.fillText(d.nav[section] || '', X0, 230);
    g.fillStyle = ink; g.font = '800 64px ' + fam;
    let y = 320; wrap(g, title, W - 2 * M).slice(0, 3).forEach(l => { g.fillText(l, X0, y); y += 88; });
    g.fillStyle = gold; g.fillRect(fa ? W - M - 120 : M, y - 40, 120, 6); y += 40;
    g.fillStyle = ink; g.font = '400 38px ' + fam;
    const lines = wrap(g, text, W - 2 * M), maxLines = Math.floor((H - 130 - 90 - y) / 64);
    lines.slice(0, maxLines).forEach((l, i, a) => { g.fillText(i === a.length - 1 && lines.length > maxLines ? l.replace(/\s+\S*$/, '') + '…' : l, X0, y); y += 64; });
    g.fillStyle = primary; g.fillRect(W / 2 - 190, H - 100, 380, 76);
    g.fillStyle = '#fff'; g.font = '800 40px ' + fam; g.textAlign = 'center'; g.direction = 'ltr';
    g.fillText('TurkmenPedia', W / 2, H - 52);
    const blob = await new Promise(r => cv.toBlob(r, 'image/png'));
    if(!blob) throw new Error('blob');
    const file = new File([blob], 'turkmenpedia-' + section + '.png', { type:'image/png' });
    if(navigator.canShare && navigator.canShare({ files:[file] })){
      try{ await navigator.share({ files:[file], title }); C().showToast(L[lang()].saved); return; }catch(e){ if(e && e.name === 'AbortError') return; }
    }
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = file.name;
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    C().showToast(L[lang()].saved);
  }

  /* =======================================================
     MAP
     ======================================================= */
  const VB = { w:800, lonMin:51.4, lonMax:68.2, latMin:34.2, latMax:43.4 };
  const KX = VB.w / (VB.lonMax - VB.lonMin), KY = KX / Math.cos(39 * Math.PI / 180);
  VB.h = Math.round((VB.latMax - VB.latMin) * KY);
  const px = lon => ((lon - VB.lonMin) * KX).toFixed(1), py = lat => ((VB.latMax - lat) * KY).toFixed(1);
  const poly = pts => pts.map(p => px(p[0]) + ',' + py(p[1])).join(' ');
  const TM_OUTLINE = [[52.9,42.0],[54.7,42.0],[56.0,41.3],[57.1,41.3],[58.5,42.0],[59.3,42.3],[60.0,41.4],[61.0,41.2],[62.2,39.9],[63.5,39.4],[64.2,38.9],[65.2,38.4],[66.0,37.4],[66.5,37.35],[65.5,37.2],[64.5,36.3],[63.1,35.85],[61.2,36.6],[60.4,36.5],[59.3,37.5],[58.4,37.7],[57.4,37.95],[56.5,38.2],[55.4,38.1],[54.7,37.5],[53.9,37.35],[53.7,38.5],[53.0,39.3],[53.1,40.3],[52.8,41.0],[53.0,41.4]];
  const CASPIAN = [[51.4,43.4],[52.9,42.0],[53.0,41.4],[52.8,41.0],[53.1,40.3],[53.0,39.3],[53.7,38.5],[53.9,37.35],[54.0,36.9],[53.0,36.8],[51.4,36.7]];
  const KIND_COLOR = { city:'var(--primary)', heritage:'var(--secondary)', history:'#7a4f9a', nature:'#3f8a5b', iran:'var(--accent)' };
  const AREA_COLOR = { teke:'#9a2b2b', yomut:'#2c6e8f', ersari:'#b8741a', saryk:'#4d8a4a', salor:'#7a4f9a', chowdur:'#8a5a44' };
  const mapState = { layers:{ city:true, heritage:true, history:true, nature:true, iran:true, tribe:true }, sel:null };

  X.routes.map = {
    render(d){
      const m = d.map, u = m.ui;
      const chips = Object.keys(u.layers).map(k => `<button type="button" class="map-chip${mapState.layers[k] ? ' on' : ''}" data-layer="${k}"><i style="background:${k === 'tribe' ? 'linear-gradient(90deg,#9a2b2b,#2c6e8f,#b8741a)' : KIND_COLOR[k]}"></i>${u.layers[k]}</button>`).join('');
      const areas = m.areas.map((a, i) => `<ellipse class="map-area" data-area="${a.id}" tabindex="0" role="button" aria-label="${esc(a.title)}" cx="${px(a.lon)}" cy="${py(a.lat)}" rx="${(a.r * KX).toFixed(1)}" ry="${(a.r * KY).toFixed(1)}" fill="${AREA_COLOR[a.id]}" style="--i:${i}"/>`).join('');
      const labels = m.areas.map(a => `<text class="map-area-label" x="${px(a.lon)}" y="${py(a.lat - a.r * 0.8)}" text-anchor="middle">${a.title}</text>`).join('');
      const pts = m.points.map((p, i) => `<g class="map-pin kind-${p.kind}" data-pt="${p.id}" tabindex="0" role="button" aria-label="${esc(p.title)}" transform="translate(${px(p.lon)} ${py(p.lat)})" style="--i:${i}"><circle r="15" class="hit"/><circle r="7" fill="${KIND_COLOR[p.kind]}" class="dot"/><circle r="7" class="pulse" fill="none" stroke="${KIND_COLOR[p.kind]}"/></g>`).join('');
      const NAME_POS = { gokdepe:[-11,-8,'end'], nisa:[-11,16,'end'], ashgabat:[11,-8,'start'], altyn:[11,16,'start'], torkaman:[-11,4,'end'], gonbad:[-11,4,'end'], turkmenbashy:[11,-6,'start'] };
      const names = m.points.map(p => { const o = NAME_POS[p.id] || [11, 4, 'start']; return `<text class="map-name kind-${p.kind}" x="${+px(p.lon) + o[0]}" y="${+py(p.lat) + o[1]}" text-anchor="${o[2]}">${p.title.replace(/\s*\(.*\)/, '')}</text>`; }).join('');
      return C().sectionHead(d, 'map', 'pin') + `
        <p class="x-intro reveal">${u.intro}</p>
        <div class="map-chips reveal">${chips}</div>
        <div class="map-wrap reveal">
          <svg id="tsMap" viewBox="0 0 ${VB.w} ${VB.h}" role="img" aria-label="${d.nav.map}">
            <rect width="${VB.w}" height="${VB.h}" class="map-land"/>
            <polygon points="${poly(CASPIAN)}" class="map-sea"/>
            <text class="map-geo" x="${px(52.15)}" y="${py(38.7)}" text-anchor="middle">${u.caspian}</text>
            <text class="map-geo" x="${px(56.5)}" y="${py(35.3)}" text-anchor="middle">${u.iranLabel}</text>
            <text class="map-geo" x="${px(64.2)}" y="${py(35.1)}" text-anchor="middle">${u.afgLabel}</text>
            <text class="map-geo" x="${px(65.3)}" y="${py(41.3)}" text-anchor="middle">${u.uzbLabel}</text>
            <text class="map-geo" x="${px(56.3)}" y="${py(43.0)}" text-anchor="middle">${u.kazLabel}</text>
            <polygon points="${poly(TM_OUTLINE)}" class="map-tm"/>
            <g class="layer-tribe${mapState.layers.tribe ? '' : ' off'}">${areas}${labels}</g>
            <g class="layer-pins">${pts}${names}</g>
          </svg>
        </div>
        <div class="map-detail" id="mapDetail"><p class="map-hint">${u.tapHint}</p></div>
        <p class="x-note reveal">${u.tribeNote}</p>`;
    },
    wire(){
      const d = D(), m = d.map, u = m.ui, root = C().el.content;
      const svg = root.querySelector('#tsMap'), detail = root.querySelector('#mapDetail');
      const applyLayers = () => {
        svg.querySelectorAll('.map-pin, .map-name').forEach(n => {
          const kind = [...n.classList].find(c => c.startsWith('kind-')).slice(5);
          n.classList.toggle('off', !mapState.layers[kind]);
        });
        svg.querySelector('.layer-tribe').classList.toggle('off', !mapState.layers.tribe);
      };
      applyLayers();
      root.querySelectorAll('[data-layer]').forEach(b => b.addEventListener('click', () => {
        const k = b.dataset.layer; mapState.layers[k] = !mapState.layers[k]; b.classList.toggle('on', mapState.layers[k]); applyLayers();
      }));
      const show = (title, text, route, q, color) => {
        detail.innerHTML = `<div class="map-card" style="--c:${color}"><h3>${title}</h3><p>${text}</p>${route ? `<a class="gn-link" href="#${route}?q=${encodeURIComponent(q)}"><span class="icon" data-icon="link"></span>${u.more}: ${d.nav[route]}<span class="gn-link-q">${q}</span></a>` : ''}</div>`;
        C().paintIcons(detail);
      };
      const clear = () => svg.querySelectorAll('.sel').forEach(n => n.classList.remove('sel'));
      svg.querySelectorAll('[data-pt]').forEach(n => {
        const go = () => { const p = m.points.find(x => x.id === n.dataset.pt); clear(); n.classList.add('sel'); show(p.title, p.text, p.route, p.q, KIND_COLOR[p.kind]); };
        n.addEventListener('click', go); n.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); go(); } });
      });
      svg.querySelectorAll('[data-area]').forEach(n => {
        const go = () => { const a = m.areas.find(x => x.id === n.dataset.area); clear(); n.classList.add('sel'); show(a.title, a.text, 'tribes', a.title, AREA_COLOR[a.id]); };
        n.addEventListener('click', go); n.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); go(); } });
      });
      const q = C().state.query;
      if(q) svg.querySelectorAll('[data-pt]').forEach(n => { const p = m.points.find(x => x.id === n.dataset.pt); if(C().looseMatch(p.title, q)) n.classList.add('hit'); });
    }
  };

  /* =======================================================
     CARPETS
     ======================================================= */
  const OCT = '30,6 70,6 94,30 94,70 70,94 30,94 6,70 6,30';
  function gulSVG(kind){
    const I = 'var(--gul-ivory)', N = 'var(--gul-navy)', R = 'var(--gul-red)';
    const quad = `<path d="M50 10V90M10 50H90" stroke="${I}" stroke-width="2.4"/>`;
    const dia = (x, y, s) => `<path d="M${x} ${y - s}L${x + s} ${y}L${x} ${y + s}L${x - s} ${y}Z" fill="${I}"/>`;
    let b = '';
    switch(kind){
      case 'teke':
        b = `<polygon points="${OCT}" fill="${N}" stroke="${I}" stroke-width="3"/>${quad}${dia(30,30,8)}${dia(70,30,8)}${dia(30,70,8)}${dia(70,70,8)}<polygon points="${OCT}" fill="none" stroke="${R}" stroke-width="1.5" transform="translate(50 50) scale(.78) translate(-50 -50)"/>`; break;
      case 'yomut':
        b = `<polygon points="50,4 96,50 50,96 4,50" fill="${N}" stroke="${I}" stroke-width="3"/><polygon points="50,18 82,50 50,82 18,50" fill="none" stroke="${I}" stroke-width="2"/>${quad}` +
            [[34,34],[66,34],[34,66],[66,66]].map(([x,y]) => `<rect x="${x-5}" y="${y-5}" width="10" height="10" fill="${I}"/><path d="M${x} ${y-9}V${y+9}M${x-6} ${y-3}L${x} ${y-9}L${x+6} ${y-3}" stroke="${R}" stroke-width="1.6" fill="none"/>`).join(''); break;
      case 'salor':
        b = `<polygon points="${OCT}" fill="${N}" stroke="${I}" stroke-width="3"/>${quad}` +
            [[30,30],[70,30],[30,70],[70,70]].map(([x,y]) => `<g fill="${I}"><ellipse cx="${x}" cy="${y}" rx="8" ry="4.2"/><circle cx="${x+8}" cy="${y-3}" r="3"/><path d="M${x-5} ${y+3}V${y+9}M${x+4} ${y+3}V${y+9}" stroke="${I}" stroke-width="2"/></g>`).join(''); break;
      case 'saryk':
        b = `<polygon points="${OCT}" fill="${N}" stroke="${I}" stroke-width="3"/><path d="M42 14H58V42H86V58H58V86H42V58H14V42H42Z" fill="${I}"/><path d="M42 14H58V42H86V58H58V86H42V58H14V42H42Z" fill="none" stroke="${R}" stroke-width="1.6" transform="translate(50 50) scale(.62) translate(-50 -50)"/>` +
            [[50,8],[92,50],[50,92],[8,50]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="3.2" fill="${R}"/>`).join(''); break;
      case 'ersari':
        b = `<polygon points="22,6 78,6 94,22 94,78 78,94 22,94 6,78 6,22" fill="${N}" stroke="${I}" stroke-width="3"/><polygon points="50,16 84,50 50,84 16,50" fill="none" stroke="${I}" stroke-width="2.6"/><polygon points="50,32 68,50 50,68 32,50" fill="${I}"/>` +
            [[20,20],[80,20],[20,80],[80,80]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="4" fill="${I}"/>`).join(''); break;
      default: // chowdur
        b = `<polygon points="${OCT}" fill="${N}" stroke="${I}" stroke-width="3"/>` +
            [0,90,180,270].map(a => `<path d="M50 50C50 30 62 22 76 26C70 34 66 42 60 50" fill="${I}" transform="rotate(${a} 50 50)"/>`).join('') + `<circle cx="50" cy="50" r="6" fill="${R}"/>`;
    }
    return `<svg class="gul-svg" viewBox="0 0 100 100" aria-hidden="true">${b}</svg>`;
  }
  const loomState = { gul:'teke', rows:7 };
  function loomSVG(kind){
    const cols = 5, rows = loomState.rows, cell = 56, pad = 34, w = cols * cell + pad * 2, h = rows * cell + pad * 2;
    let cells = '';
    for(let r = 0; r < rows; r++) for(let c = 0; c < cols; c++){
      const off = (r % 2) * (cell / 2) * 0; // aligned grid, as in main carpets
      cells += `<g class="loom-gul" style="--r:${r};--c:${c}" transform="translate(${pad + c * cell + off + 4} ${pad + r * cell + 4}) scale(${(cell - 8) / 100})">${gulSVG(kind).replace(/^<svg[^>]*>|<\/svg>$/g, '')}</g>`;
    }
    const stripes = [[0,'var(--gul-navy)'],[8,'var(--gul-ivory)'],[14,'var(--gul-navy)'],[22,'var(--gul-ivory)']].map(([o, col]) => `<rect x="${o}" y="${o}" width="${w - 2*o}" height="${h - 2*o}" fill="none" stroke="${col}" stroke-width="${o === 8 || o === 22 ? 2.5 : 6}"/>`).join('');
    return `<svg id="loomSvg" viewBox="0 0 ${w} ${h}" class="loom-svg" role="img"><rect width="${w}" height="${h}" fill="var(--gul-red)"/>${stripes}${cells}</svg>`;
  }
  X.routes.carpets = {
    render(d){
      const c = d.carpets, u = c.ui, G = D();
      const guls = c.guls.map((g, i) => `<article class="gul-card reveal" data-gul="${g.id}"><div class="gul-art">${gulSVG(g.id)}</div><div><h3>${g.title}</h3><p>${g.text}</p>${C().cardTools(g.title)}</div></article>`).join('');
      const weaves = c.weaves.map(w => `<article class="item-card reveal"><div class="item-head"><h3>${w.title}</h3></div><p>${w.text}</p>${C().cardTools(w.title)}</article>`).join('');
      const chips = c.guls.map(g => `<button type="button" class="map-chip${loomState.gul === g.id ? ' on' : ''}" data-loom="${g.id}">${g.title}</button>`).join('');
      return C().sectionHead(d, 'carpets', 'gem') + `
        <h3 class="subheading reveal">${u.guls}</h3><div class="gul-grid">${guls}</div>
        <h3 class="subheading reveal">${u.loom}</h3>
        <div class="loom reveal">
          <p class="x-intro">${u.loomHint}</p>
          <div class="map-chips">${chips}</div>
          <div class="loom-stage">${loomSVG(loomState.gul)}</div>
          <div class="loom-ctrl"><button type="button" class="btn-mini" id="loomPlay">${u.weave}</button><button type="button" class="btn-mini" id="loomReset">${u.rewind}</button>
            <label class="loom-rows">${u.rows} <input id="loomRows" type="range" min="3" max="9" value="${loomState.rows}"><b id="loomRowsV">${loomState.rows}</b></label></div>
        </div>
        <h3 class="subheading reveal">${u.weaves}</h3><div class="card-grid">${weaves}</div>
        <div class="x-box reveal"><h3>${u.howTitle}</h3><p>${u.how}</p></div>
        <ul class="x-facts reveal">${u.facts.map(f => `<li>${f}</li>`).join('')}</ul>
        <div class="dict-note reveal"><span class="icon" data-icon="quote"></span><p>${u.proverb}</p></div>
        <div class="dict-note reveal" style="margin-top:12px"><span class="icon" data-icon="info"></span><p>${u.note}</p></div>`;
    },
    wire(){
      const root = C().el.content, stage = root.querySelector('.loom-stage');
      const redraw = () => { stage.innerHTML = loomSVG(loomState.gul); play(); };
      const play = () => { const s = stage.querySelector('svg'); s.classList.remove('weaving'); void s.getBoundingClientRect(); s.classList.add('weaving'); };
      root.querySelectorAll('[data-loom]').forEach(b => b.addEventListener('click', () => { loomState.gul = b.dataset.loom; root.querySelectorAll('[data-loom]').forEach(x => x.classList.toggle('on', x === b)); redraw(); }));
      root.querySelector('#loomPlay').addEventListener('click', play);
      root.querySelector('#loomReset').addEventListener('click', () => { const s = stage.querySelector('svg'); s.classList.remove('weaving'); });
      const rows = root.querySelector('#loomRows');
      rows.addEventListener('input', () => { loomState.rows = +rows.value; root.querySelector('#loomRowsV').textContent = rows.value; redraw(); });
      root.querySelectorAll('.gul-card').forEach(c => c.addEventListener('click', () => { loomState.gul = c.dataset.gul; root.querySelectorAll('[data-loom]').forEach(x => x.classList.toggle('on', x.dataset.loom === loomState.gul)); redraw(); stage.scrollIntoView({ behavior:'smooth', block:'center' }); }));
      play();
    }
  };

  /* =======================================================
     CALENDAR (live countdown)
     ======================================================= */
  const dayStart = (y, m, d) => new Date(y, m, d, 0, 0, 0, 0);
  function nthWeekday(y, m, wd, n){
    if(n > 0){ const f = new Date(y, m, 1); return dayStart(y, m, 1 + ((wd - f.getDay() + 7) % 7) + 7 * (n - 1)); }
    const last = new Date(y, m + 1, 0); return dayStart(y, m, last.getDate() - ((last.getDay() - wd + 7) % 7));
  }
  const lunarCache = {};
  function lunarNext(kind, from){
    const key = kind + from.toDateString(); if(lunarCache[key] !== undefined) return lunarCache[key];
    let res = null;
    try{
      const f = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', { day:'numeric', month:'numeric' });
      const want = kind === 'fitr' ? [10, 1] : [12, 10];
      for(let i = 0; i < 400 && !res; i++){
        const dt = dayStart(from.getFullYear(), from.getMonth(), from.getDate() + i);
        const p = Object.fromEntries(f.formatToParts(dt).map(x => [x.type, +x.value]));
        if(p.month === want[0] && p.day === want[1]) res = dt;
      }
    }catch(e){}
    return (lunarCache[key] = res);
  }
  function nextOccurrence(rule, now){
    const today = dayStart(now.getFullYear(), now.getMonth(), now.getDate());
    const [t, a, b, c] = rule.split(/[:]/);
    const calc = y => {
      if(t === 'f'){ const [mm, dd] = a.split('-').map(Number); return dayStart(y, mm - 1, dd); }
      if(t === 'n') return nthWeekday(y, +a - 1, +b, +c);
      return null;
    };
    if(t === 'l') return lunarNext(a, today);
    let dt = calc(today.getFullYear()); if(dt < today) dt = calc(today.getFullYear() + 1); return dt;
  }
  function fmtDate(dt, u){ return dt.getDate() + ' ' + u.months[dt.getMonth()] + ' ' + dt.getFullYear(); }
  const pad2 = n => String(n).padStart(2, '0');
  function countdownHTML(dt, u){
    const now = new Date(), ms = dt - now;
    if(ms <= 0 && now < new Date(dt.getTime() + 864e5)) return `<span class="cd-today">${u.today}</span>`;
    const s = Math.max(0, Math.floor(ms / 1000)), dd = Math.floor(s / 86400), hh = Math.floor(s % 86400 / 3600), mm = Math.floor(s % 3600 / 60), ss = s % 60;
    return `<span class="cd-unit"><b>${dd}</b>${u.days}</span><span class="cd-unit"><b>${pad2(hh)}</b>${u.hours}</span><span class="cd-unit"><b>${pad2(mm)}</b>${u.mins}</span><span class="cd-unit"><b>${pad2(ss)}</b>${u.secs}</span>`;
  }
  function icsFor(ev, dt){
    const y = dt.getFullYear(), m = pad2(dt.getMonth() + 1), d = pad2(dt.getDate());
    const e2 = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + (ev.span || 1)), end = e2.getFullYear() + pad2(e2.getMonth() + 1) + pad2(e2.getDate());
    return ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//TurkmenPedia//EN','BEGIN:VEVENT','UID:' + ev.id + y + '@turkmenpedia','DTSTAMP:' + new Date().toISOString().replace(/[-:]|\.\d+/g, ''),
      'DTSTART;VALUE=DATE:' + y + m + d,'DTEND;VALUE=DATE:' + end,'SUMMARY:' + ev.title.replace(/[,;]/g, ' '),'END:VEVENT','END:VCALENDAR'].join('\r\n');
  }
  /* ---- full calendar: month + year views, event map, second calendar ---- */
  const calState = { y:null, m:null, sel:null, view:'month', sec:null };
  const CALSRC = { law:'https://kyrgyzstan.tmembassy.gov.tm/tk/the-list-of-holidays-and-memorial-dates', azaHol:'https://www.azathabar.com/a/1885989.html', decree:'https://turkmenistan.gov.tm/en/post/9223/the-list-of-holidays-and-memorial-dates-celebrated-without-time-off', prod:'https://turkmenhemrasy.gov.tm/en/news/1700', oraza:'https://metbugat.gov.tm/en/newsDetails/2447', sub1:'https://tngizt.gov.tm/en/news/hormatly-prezidentimiz-hatyra-guenuene-duesyaen-dync-guenueni-dusenbe-guenuene-gecirmek-hakynda-permana-gol-cekdi', sub2:'https://turkmenhemrasy.gov.tm/en/news/1393', wiki:'https://en.wikipedia.org/wiki/Public_holidays_in_Turkmenistan' };
  const dkey = dt => dt.getFullYear() + '-' + pad2(dt.getMonth() + 1) + '-' + pad2(dt.getDate());
  const fromKey = k => { const [y, m, d] = k.split('-').map(Number); return dayStart(y, m - 1, d); };
  const lunarYearCache = {};
  function lunarInYear(kind, y){
    const key = kind + y; if(lunarYearCache[key]) return lunarYearCache[key];
    const out = [];
    try{
      const f = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', { day:'numeric', month:'numeric' });
      const want = kind === 'fitr' ? [10, 1] : [12, 10];
      for(let i = 0; i < 366; i++){
        const dt = dayStart(y, 0, 1 + i); if(dt.getFullYear() !== y) break;
        const p = Object.fromEntries(f.formatToParts(dt).map(x => [x.type, +x.value]));
        if(p.month === want[0] && p.day === want[1]) out.push(dt);
      }
    }catch(e){}
    return (lunarYearCache[key] = out);
  }
  function startsInYear(rule, y){
    const [t, a, b, c] = rule.split(':');
    if(t === 'f'){ const [mm, dd] = a.split('-').map(Number); return [dayStart(y, mm - 1, dd)]; }
    if(t === 'n') return [nthWeekday(y, +a - 1, +b, +c)];
    return lunarInYear(a, y);
  }
  const yearMapCache = {};
  function yearMap(y){
    const key = lang() + y; if(yearMapCache[key]) return yearMapCache[key];
    const map = {};
    D().calendar.events.forEach(e => startsInYear(e.rule, y).forEach(st => {
      for(let i = 0; i < e.span; i++){
        const dt = dayStart(st.getFullYear(), st.getMonth(), st.getDate() + i);
        (map[dkey(dt)] = map[dkey(dt)] || []).push({ e, day:i + 1, start:st });
      }
    }));
    // Article 81 (part 2): a public holiday that falls on Sunday moves to the next working day.
    const u = D().calendar.ui, sub = { id:'substitute', rule:'x:0', icon:'calendar', title:u.subTitle, text:u.subText, type:'public', span:1, official:'rule' };
    Object.keys(map).forEach(k => {
      if(!map[k].some(x => x.e.type === 'public') || fromKey(k).getDay() !== 0) return;
      let dt = fromKey(k);
      for(let i = 0; i < 6; i++){
        dt = dayStart(dt.getFullYear(), dt.getMonth(), dt.getDate() + 1);
        const wk = dt.getDay() === 0 || dt.getDay() === 6, isPub = (map[dkey(dt)] || []).some(x => x.e.type === 'public');
        if(!wk && !isPub){ (map[dkey(dt)] = map[dkey(dt)] || []).push({ e:sub, day:1, start:dt }); break; }
      }
    });
    return (yearMapCache[key] = map);
  }
  const eventsOn = dt => yearMap(dt.getFullYear())[dkey(dt)] || [];
  const secLoc = () => (lang() === 'fa' ? 'fa' : 'en') + '-u-ca-' + (calState.sec === 'jalali' ? 'persian' : 'islamic-umalqura');
  const secDay = dt => { if(calState.sec === 'none') return ''; try{ return new Intl.DateTimeFormat(secLoc(), { day:'numeric' }).format(dt); }catch(e){ return ''; } };
  function secMonthLabel(first, last){
    if(calState.sec === 'none') return '';
    try{
      const f = new Intl.DateTimeFormat(secLoc(), { month:'long', year:'numeric' }), a = f.format(first).replace(/\s*(AP|AH)\b/g, ''), b = f.format(last).replace(/\s*(AP|AH)\b/g, '');
      return a === b ? a : a + ' – ' + b;
    }catch(e){ return ''; }
  }
  function secFull(dt){
    if(calState.sec === 'none') return '';
    try{ return new Intl.DateTimeFormat(secLoc(), { day:'numeric', month:'long', year:'numeric' }).format(dt).replace(/\s*(AP|AH)\b/g, ''); }catch(e){ return ''; }
  }
  const mondayIndex = dt => (dt.getDay() + 6) % 7;
  const TYPE_ORDER = { public:0, cultural:1, observance:2 };

  function calGrid(u){
    const y = calState.y, m = calState.m, first = new Date(y, m, 1), lead = mondayIndex(first);
    const dim = new Date(y, m + 1, 0).getDate(), total = Math.ceil((lead + dim) / 7) * 7;
    const today = dkey(new Date()), head = u.wdShort.map((w, i) => `<span class="cal-wd${i > 4 ? ' we' : ''}" title="${u.wd[i]}">${w}</span>`).join('');
    let cells = '';
    for(let i = 0; i < total; i++){
      const dt = dayStart(y, m, 1 - lead + i), k = dkey(dt), evs = eventsOn(dt).sort((a, b) => TYPE_ORDER[a.e.type] - TYPE_ORDER[b.e.type]);
      const out = dt.getMonth() !== m, isPub = evs.some(x => x.e.type === 'public'), wk = mondayIndex(dt) > 4;
      const chips = evs.slice(0, 4).map(x => `<i class="cal-dot t-${x.e.type}"></i>`).join('') + (evs.length > 4 ? '<i class="cal-more">+</i>' : '');
      cells += `<button type="button" class="cal-day${out ? ' out' : ''}${k === today ? ' today' : ''}${k === calState.sel ? ' sel' : ''}${wk ? ' we' : ''}${isPub ? ' pub' : ''}${evs.length ? ' has' : ''}" data-date="${k}" style="--i:${i}" aria-label="${dt.getDate()} ${u.months[dt.getMonth()]} ${dt.getFullYear()}${evs.length ? ': ' + evs.map(x => x.e.title).join(lang() === 'fa' ? '، ' : ', ') : ''}">
        <span class="cal-num">${dt.getDate()}</span>${secDay(dt) ? `<span class="cal-sec">${secDay(dt)}</span>` : ''}<span class="cal-dots">${chips}</span></button>`;
    }
    return `<div class="cal-weekdays">${head}</div><div class="cal-grid">${cells}</div>`;
  }
  function calYear(u){
    const y = calState.y, today = dkey(new Date());
    return `<div class="cal-year">` + Array.from({ length:12 }, (_, m) => {
      const first = new Date(y, m, 1), lead = mondayIndex(first), dim = new Date(y, m + 1, 0).getDate();
      let days = '';
      for(let i = 0; i < lead; i++) days += '<span></span>';
      for(let d = 1; d <= dim; d++){
        const dt = dayStart(y, m, d), k = dkey(dt), evs = eventsOn(dt), t = evs.length ? evs.slice().sort((a, b) => TYPE_ORDER[a.e.type] - TYPE_ORDER[b.e.type])[0].e.type : '';
        days += `<button type="button" class="cy-d${t ? ' t-' + t : ''}${k === today ? ' today' : ''}${mondayIndex(dt) > 4 ? ' we' : ''}" data-date="${k}" tabindex="-1">${d}</button>`;
      }
      return `<section class="cy-m reveal" style="--i:${m}"><button type="button" class="cy-title" data-goto="${m}">${u.months[m]}</button><div class="cy-w">${u.wdShort.map(w => `<i>${w}</i>`).join('')}</div><div class="cy-days">${days}</div></section>`;
    }).join('') + `</div>`;
  }
  function evSource(e, u){
    const url = (e.official === 'decree' || e.official === 'labour') ? CALSRC.law : e.official === 'rule' ? CALSRC.sub1 : (e.id === 'galla' || e.id === 'memorial') ? CALSRC.azaHol : CALSRC.wiki;
    const lab = e.official === 'decree' ? u.official : e.official === 'labour' ? u.labour : e.official === 'rule' ? u.subSrc : (e.id === 'galla' || e.id === 'memorial') ? 'Azatlyk' : 'Wikipedia';
    return `<a class="cal-src" href="${url}" target="_blank" rel="noopener noreferrer"><span class="icon" data-icon="external"></span>${u.sourceLabel}: ${lab}</a>`;
  }
  function calStats(u){
    const y = calState.y, m = calState.m, dim = new Date(y, m + 1, 0).getDate();
    let weekend = 0, pub = 0, work = 0; const obs = new Set();
    for(let d = 1; d <= dim; d++){
      const dt = dayStart(y, m, d), evs = eventsOn(dt), wk = mondayIndex(dt) > 4, isPub = evs.some(x => x.e.type === 'public');
      if(wk) weekend++; if(isPub) pub++; if(!wk && !isPub) work++;
      evs.forEach(x => { if(x.e.type !== 'public') obs.add(x.e.id); });
    }
    const cell = (n, l, c) => `<div class="cal-stat ${c || ''}"><b>${n}</b><span>${l}</span></div>`;
    return `<div class="cal-stats"><h3 class="subheading">${u.statsTitle}</h3><div class="cal-stats-grid">${cell(dim, u.stats.days)}${cell(weekend, u.stats.weekend)}${cell(pub, u.stats.public, 't-public')}${cell(obs.size, u.stats.obs, 't-observance')}${cell(work, u.stats.work, 'work')}</div></div>`;
  }
  function calDetail(u){
    const dt = fromKey(calState.sel), evs = eventsOn(dt).sort((a, b) => TYPE_ORDER[a.e.type] - TYPE_ORDER[b.e.type]);
    const diff = Math.round((dt - dayStart(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())) / 864e5);
    const rel = diff >= 0 ? u.daysAway(diff) : u.daysAgo(-diff), sec = secFull(dt);
    const list = evs.length ? evs.map(x => `<article class="cal-ev t-${x.e.type}"><span class="icon" data-icon="${x.e.icon}"></span><div><h4>${x.e.title}</h4>
      <span class="cal-tag t-${x.e.type}">${u.types[x.e.type]}</span>${x.e.rule.startsWith('l:') ? `<span class="cal-tag lunar">${u.lunar}</span>` : ''}${x.e.span > 1 ? `<span class="cal-tag">${u.dayOf(x.day, x.e.span)}</span>` : ''}
      <p>${x.e.text}</p>${evSource(x.e, u)}</div></article>`).join('') : `<p class="cal-none">${u.none}</p>`;
    return `<div class="cal-detail-head"><div><strong>${u.wd[mondayIndex(dt)]}${lang() === 'fa' ? '،' : ','} ${dt.getDate()} ${u.months[dt.getMonth()]} ${dt.getFullYear()}</strong>${sec ? `<span>${sec}</span>` : ''}</div><b>${rel}</b></div>${list}`;
  }
  function calMonthList(u){
    const y = calState.y, m = calState.m, dim = new Date(y, m + 1, 0).getDate(), rows = [], today = dayStart(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    for(let d = 1; d <= dim; d++){
      const dt = dayStart(y, m, d); eventsOn(dt).forEach(x => { if(x.day === 1 || d === 1) rows.push({ dt, x }); });
    }
    rows.sort((a, b) => a.dt - b.dt || TYPE_ORDER[a.x.e.type] - TYPE_ORDER[b.x.e.type]);
    if(!rows.length) return `<p class="cal-none">${u.none}</p>`;
    return rows.map(({ dt, x }) => {
      const e = x.e, end = e.span > 1 ? dayStart(x.start.getFullYear(), x.start.getMonth(), x.start.getDate() + e.span - 1) : null;
      const diff = Math.round((dt - today) / 864e5), rel = diff >= 0 ? u.daysAway(diff) : u.daysAgo(-diff);
      const range = end && end.getMonth() === dt.getMonth() ? `${x.start.getDate()}–${end.getDate()}` : dt.getDate();
      return `<button type="button" class="cal-row t-${e.type}${diff < 0 ? ' past' : ''}${diff === 0 ? ' now' : ''}" data-date="${dkey(dt)}">
        <span class="cal-rdate"><b>${range}</b><small>${u.wd[mondayIndex(dt)]}</small></span>
        <span class="cal-rbody"><strong>${e.title}</strong><span class="cal-tags"><span class="cal-tag t-${e.type}">${u.types[e.type]}</span>${e.official === 'decree' ? `<span class="cal-tag official">${u.official}</span>` : ''}${e.rule.startsWith('l:') ? `<span class="cal-tag lunar">${u.lunar}</span>` : ''}</span><small>${e.text}</small></span>
        <span class="cal-rrel">${rel}</span></button>`;
    }).join('');
  }
  function calMain(u, dir){
    const y = calState.y, m = calState.m, first = new Date(y, m, 1), last = new Date(y, m + 1, 0);
    const years = []; for(let yy = 2020; yy <= 2040; yy++) years.push(yy);
    const sm = calState.view === 'month' ? secMonthLabel(first, last) : '';
    const bar = `<div class="cal-bar">
      <div class="cal-nav"><button type="button" class="ct-btn cal-arrow" data-step="-1" aria-label="${u.prev}">${lang() === 'fa' ? '›' : '‹'}</button>
        <select id="calMonth" aria-label="${u.viewMonth}">${u.months.map((n, i) => `<option value="${i}"${i === m ? ' selected' : ''}>${n}</option>`).join('')}</select>
        <select id="calYear" aria-label="${u.viewYear}">${years.map(yy => `<option${yy === y ? ' selected' : ''}>${yy}</option>`).join('')}</select>
        <button type="button" class="ct-btn cal-arrow" data-step="1" aria-label="${u.next}">${lang() === 'fa' ? '‹' : '›'}</button></div>
      <div class="cal-opts"><button type="button" class="btn-mini" id="calToday">${u.todayBtn}</button>
        <span class="seg">${['month', 'year'].map(v => `<button type="button" class="map-chip${calState.view === v ? ' on' : ''}" data-view="${v}">${v === 'month' ? u.viewMonth : u.viewYear}</button>`).join('')}</span>
        <span class="seg"><button type="button" class="btn-mini dl" data-dl="month"><span class="icon" data-icon="download"></span>${u.dlMonth}</button><button type="button" class="btn-mini dl" data-dl="year"><span class="icon" data-icon="download"></span>${u.dlYear}</button></span>
        <span class="seg"><small>${u.secLabel}</small>${['none', 'jalali', 'hijri'].map(v => `<button type="button" class="map-chip${calState.sec === v ? ' on' : ''}" data-sec="${v}">${u.sec[v]}</button>`).join('')}</span></div></div>
      ${sm ? `<p class="cal-secmonth">${sm}</p>` : ''}`;
    const legend = `<div class="cal-legend">${['public', 'cultural', 'observance'].map(t => `<span><i class="t-${t}"></i>${u.types[t]}</span>`).join('')}</div>`;
    const body = calState.view === 'month'
      ? `<div class="cal-board ${dir || ''}">${calGrid(u)}</div>${legend}<div class="cal-below">${calStats(u)}<div class="cal-detail" id="calDetail">${calDetail(u)}</div><h3 class="subheading">${u.allDay}</h3><div class="cal-list">${calMonthList(u)}</div></div>`
      : `<div class="cal-board ${dir || ''}">${calYear(u)}</div>${legend}<div class="cal-detail" id="calDetail">${calDetail(u)}</div>`;
    return bar + body;
  }

  /* ---- downloadable calendar images (month / year) ----
     Always drawn on a light, print-friendly palette. Cells carry only the day number
     and coloured dots; the events are listed underneath in small type. */
  const IMG_COL = { public:'#9a2b2b', cultural:'#c18a2e', observance:'#2c7a6a' };
  const pnum = n => lang() === 'fa' ? String(n).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]) : String(n);
  function fitText(g, text, maxW){
    if(g.measureText(text).width <= maxW) return text;
    let t = text; while(t.length > 3 && g.measureText(t + '…').width > maxW) t = t.slice(0, -1);
    return t.trim() + '…';
  }
  function rrect(g, x, y, w, h, r){ g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
  function monthRows(y, m){
    const dim = new Date(y, m + 1, 0).getDate(), rows = [];
    for(let d = 1; d <= dim; d++) eventsOn(dayStart(y, m, d)).forEach(x => { if(x.day === 1 || d === 1) rows.push({ d, x }); });
    return rows.sort((a, b) => a.d - b.d || TYPE_ORDER[a.x.e.type] - TYPE_ORDER[b.x.e.type]);
  }
  function rowLabel(r, y, m, u){
    const e = r.x.e, end = e.span > 1 ? dayStart(r.x.start.getFullYear(), r.x.start.getMonth(), r.x.start.getDate() + e.span - 1) : null;
    const a = r.x.day === 1 ? r.d : r.d, b = end && end.getMonth() === m ? end.getDate() : null;
    return `${pnum(a)}${b && b !== a ? '–' + pnum(b) : ''} ${u.months[m]}`;
  }
  async function loadFonts(fam){ try{ await document.fonts.load('400 30px ' + fam); await document.fonts.load('700 30px ' + fam); await document.fonts.load('800 40px ' + fam); }catch(e){} }
  async function exportCanvas(cv, filename, title){
    const blob = await new Promise(r => cv.toBlob(r, 'image/png'));
    if(!blob) throw new Error('blob');
    const file = new File([blob], filename, { type:'image/png' });
    if(navigator.canShare && navigator.canShare({ files:[file] })){
      try{ await navigator.share({ files:[file], title }); C().showToast(L[lang()].saved); return; }catch(e){ if(e && e.name === 'AbortError') return; }
    }
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = filename;
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    C().showToast(L[lang()].saved);
  }
  function footerBand(g, W, H, fam, u){
    g.fillStyle = '#9a2b2b'; g.fillRect(0, H - 96, W, 96);
    g.textAlign = 'center'; g.direction = 'ltr'; g.fillStyle = '#fff'; g.font = '800 36px ' + fam; g.fillText('TurkmenPedia', W / 2, H - 52);
    g.font = '400 19px ' + fam; g.fillStyle = 'rgba(255,255,255,.82)'; g.fillText(u.imgSource, W / 2, H - 22);
  }
  async function calImage(kind){
    const u = D().calendar.ui, fa = lang() === 'fa', fam = getComputedStyle(document.body).fontFamily;
    await loadFonts(fam);
    const y = calState.y, m = calState.m;
    if(kind === 'month'){
      const first = new Date(y, m, 1), lead = mondayIndex(first), dim = new Date(y, m + 1, 0).getDate(), rows = Math.ceil((lead + dim) / 7);
      const W = 1080, pad = 52, cw = (W - 2 * pad) / 7, ch = 112, list = monthRows(y, m);
      const cols = list.length > 8 ? 2 : 1, per = Math.ceil(list.length / cols), lineH = 38;
      const headH = 214, wdH = 54, gridH = rows * ch, legH = 64, evTitleH = 62, evH = Math.max(1, per) * lineH, footH = 96;
      const H = headH + wdH + gridH + legH + evTitleH + evH + footH + 44;
      const cv = document.createElement('canvas'); cv.width = W; cv.height = H; const g = cv.getContext('2d');
      g.fillStyle = '#f3ede1'; g.fillRect(0, 0, W, H);
      g.fillStyle = '#9a2b2b'; g.fillRect(0, 0, W, headH);
      g.strokeStyle = '#c18a2e'; g.lineWidth = 2.5;
      for(let x = 40; x < W; x += 72){ g.beginPath(); g.moveTo(x, headH - 32); g.lineTo(x + 15, headH - 20); g.lineTo(x, headH - 8); g.lineTo(x - 15, headH - 20); g.closePath(); g.stroke(); }
      g.direction = fa ? 'rtl' : 'ltr'; g.textAlign = 'center'; g.fillStyle = '#fff'; g.font = '800 78px ' + fam; g.fillText(`${u.months[m]} ${pnum(y)}`, W / 2, 112);
      const sec = calState.sec !== 'none' ? secMonthLabel(first, new Date(y, m + 1, 0)) : '';
      g.font = '600 30px ' + fam; g.fillStyle = '#f3d9a4'; if(sec) g.fillText(sec, W / 2, 162);
      const X = c => fa ? W - pad - (c + 1) * cw : pad + c * cw;
      g.font = '800 27px ' + fam;
      for(let c = 0; c < 7; c++){ g.fillStyle = c > 4 ? '#9a2b2b' : '#5a4a38'; g.textAlign = 'center'; g.fillText(u.wd[c], X(c) + cw / 2, headH + 38); }
      const gy = headH + wdH, total = rows * 7, todayKey = dkey(new Date());
      for(let i = 0; i < total; i++){
        const c = i % 7, r = Math.floor(i / 7), dt = dayStart(y, m, 1 - lead + i), out = dt.getMonth() !== m, evs = eventsOn(dt);
        const x = X(c) + 3, yy = gy + r * ch + 3, w = cw - 6, h = ch - 6, isPub = evs.some(e => e.e.type === 'public');
        rrect(g, x, yy, w, h, 14); g.fillStyle = out ? '#f8f3e8' : isPub ? '#f0d7d2' : '#fffaf0'; g.fill();
        if(dkey(dt) === todayKey){ g.lineWidth = 3; g.strokeStyle = '#9a2b2b'; g.stroke(); }
        g.globalAlpha = out ? .38 : 1; g.textAlign = 'center'; g.direction = 'ltr';
        g.font = '800 34px ' + fam; g.fillStyle = mondayIndex(dt) > 4 ? '#9a2b2b' : '#2a2018'; g.fillText(pnum(dt.getDate()), x + w / 2, yy + 46);
        const sd = secDay(dt); if(sd){ g.font = '500 19px ' + fam; g.fillStyle = '#8a7a64'; g.fillText(sd, x + w / 2, yy + 72); }
        const dots = evs.slice(0, 4).sort((a, b) => TYPE_ORDER[a.e.type] - TYPE_ORDER[b.e.type]);
        dots.forEach((d, k) => { g.beginPath(); g.arc(x + w / 2 + (k - (dots.length - 1) / 2) * 18, yy + h - 16, 6, 0, 7); g.fillStyle = IMG_COL[d.e.type]; g.fill(); });
        g.globalAlpha = 1;
      }
      let ly = gy + gridH + 42; g.direction = fa ? 'rtl' : 'ltr'; g.font = '600 22px ' + fam; g.textAlign = fa ? 'right' : 'left';
      let lx = fa ? W - pad : pad;
      ['public', 'cultural', 'observance'].forEach(t => {
        const label = u.types[t], tw = g.measureText(label).width;
        g.beginPath(); g.arc(lx + (fa ? -8 : 8), ly - 8, 8, 0, 7); g.fillStyle = IMG_COL[t]; g.fill();
        g.fillStyle = '#5a4a38'; g.fillText(label, lx + (fa ? -26 : 26), ly); lx += (fa ? -1 : 1) * (tw + 62);
      });
      let ey = gy + gridH + legH + 40; g.font = '800 30px ' + fam; g.fillStyle = '#9a2b2b'; g.fillText(u.allDay, fa ? W - pad : pad, ey + 6); ey += 34;
      const colW = (W - 2 * pad) / cols;
      g.font = '400 23px ' + fam;
      list.forEach((r, i) => {
        const col = Math.floor(i / per), row = i % per, cx0 = fa ? W - pad - col * colW : pad + col * colW, yy = ey + row * lineH + 24;
        g.beginPath(); g.arc(cx0 + (fa ? -7 : 7), yy - 8, 6, 0, 7); g.fillStyle = IMG_COL[r.x.e.type]; g.fill();
        g.fillStyle = '#2a2018'; g.textAlign = fa ? 'right' : 'left';
        g.fillText(fitText(g, `${rowLabel(r, y, m, u)} — ${r.x.e.title}`, colW - 40), cx0 + (fa ? -22 : 22), yy);
      });
      footerBand(g, W, H, fam, u);
      return { cv, name:`turkmenpedia-calendar-${y}-${pad2(m + 1)}.png`, title:`${u.months[m]} ${y}` };
    }
    /* year */
    const W = 1600, pad = 56, colsN = 3, gap = 30, bw = (W - 2 * pad - gap * (colsN - 1)) / colsN, cell = bw / 7, mh = 48 + 22 + 6 * 34 + 14;
    const all = []; for(let mm = 0; mm < 12; mm++) monthRows(y, mm).forEach(r => all.push({ mm, r }));
    const ecols = 3, eper = Math.ceil(all.length / ecols), lineH = 30, headH = 150, legH = 62, evTitle = 64, footH = 96;
    const H = headH + 4 * (mh + 18) + legH + evTitle + eper * lineH + footH + 70;
    const cv = document.createElement('canvas'); cv.width = W; cv.height = H; const g = cv.getContext('2d');
    g.fillStyle = '#f3ede1'; g.fillRect(0, 0, W, H); g.fillStyle = '#9a2b2b'; g.fillRect(0, 0, W, headH);
    g.direction = fa ? 'rtl' : 'ltr'; g.textAlign = 'center'; g.fillStyle = '#fff'; g.font = '800 82px ' + fam; g.fillText(pnum(y), W / 2, 104);
    const today = dkey(new Date());
    for(let mm = 0; mm < 12; mm++){
      const col = mm % colsN, row = Math.floor(mm / colsN), x0 = fa ? W - pad - (col + 1) * bw - col * gap : pad + col * (bw + gap), y0 = headH + 26 + row * (mh + 18);
      rrect(g, x0, y0, bw, mh, 16); g.fillStyle = '#fffaf0'; g.fill();
      g.fillStyle = '#9a2b2b'; g.font = '800 28px ' + fam; g.textAlign = 'center'; g.direction = fa ? 'rtl' : 'ltr'; g.fillText(u.months[mm], x0 + bw / 2, y0 + 36);
      const first = new Date(y, mm, 1), lead = mondayIndex(first), dim = new Date(y, mm + 1, 0).getDate();
      g.font = '700 16px ' + fam;
      for(let c = 0; c < 7; c++){ g.fillStyle = c > 4 ? '#9a2b2b' : '#8a7a64'; g.fillText(u.wdShort[c], (fa ? x0 + bw - (c + .5) * cell : x0 + (c + .5) * cell), y0 + 64); }
      g.direction = 'ltr';
      for(let d = 1; d <= dim; d++){
        const dt = dayStart(y, mm, d), idx = lead + d - 1, c = idx % 7, r = Math.floor(idx / 7), cx = fa ? x0 + bw - (c + .5) * cell : x0 + (c + .5) * cell, cy = y0 + 92 + r * 34;
        const evs = eventsOn(dt), top = evs.length ? evs.slice().sort((a, b) => TYPE_ORDER[a.e.type] - TYPE_ORDER[b.e.type])[0].e.type : '';
        if(top){ g.beginPath(); g.arc(cx, cy - 6, 14, 0, 7); g.fillStyle = IMG_COL[top]; g.fill(); }
        if(dkey(dt) === today){ g.beginPath(); g.arc(cx, cy - 6, 16, 0, 7); g.lineWidth = 2.5; g.strokeStyle = '#2a2018'; g.stroke(); }
        g.font = '700 19px ' + fam; g.fillStyle = top ? '#fff' : (c > 4 ? '#9a2b2b' : '#2a2018'); g.fillText(pnum(d), cx, cy);
      }
    }
    let ly = headH + 26 + 4 * (mh + 18) + 20; g.direction = fa ? 'rtl' : 'ltr'; g.font = '600 22px ' + fam; g.textAlign = fa ? 'right' : 'left';
    let lx = fa ? W - pad : pad;
    ['public', 'cultural', 'observance'].forEach(t => { const label = u.types[t], tw = g.measureText(label).width; g.beginPath(); g.arc(lx + (fa ? -8 : 8), ly - 8, 8, 0, 7); g.fillStyle = IMG_COL[t]; g.fill(); g.fillStyle = '#5a4a38'; g.fillText(label, lx + (fa ? -26 : 26), ly); lx += (fa ? -1 : 1) * (tw + 62); });
    let ey = ly + 62; g.font = '800 28px ' + fam; g.fillStyle = '#9a2b2b'; g.fillText(`${u.allDay.replace(/ماه|aýyň|Aýyň/, '').trim() || u.allDay} ${pnum(y)}`, fa ? W - pad : pad, ey); ey += 12;
    const cw2 = (W - 2 * pad) / ecols; g.font = '400 19px ' + fam;
    all.forEach((it, i) => {
      const col = Math.floor(i / eper), row = i % eper, cx0 = fa ? W - pad - col * cw2 : pad + col * cw2, yy = ey + row * lineH + 24;
      g.beginPath(); g.arc(cx0 + (fa ? -6 : 6), yy - 6, 5, 0, 7); g.fillStyle = IMG_COL[it.r.x.e.type]; g.fill();
      g.fillStyle = '#2a2018'; g.textAlign = fa ? 'right' : 'left';
      g.fillText(fitText(g, `${rowLabel(it.r, y, it.mm, u)} — ${it.r.x.e.title}`, cw2 - 34), cx0 + (fa ? -20 : 20), yy);
    });
    footerBand(g, W, H, fam, u);
    return { cv, name:`turkmenpedia-calendar-${y}.png`, title:String(y) };
  }

  X.routes.calendar = {
    render(d){
      const cal = d.calendar, u = cal.ui, now = new Date();
      if(calState.y === null){ calState.y = now.getFullYear(); calState.m = now.getMonth(); calState.sel = dkey(now); }
      if(calState.sec === null) calState.sec = lang() === 'fa' ? 'jalali' : 'none';
      const list = cal.events.map(e => ({ e, dt: nextOccurrence(e.rule, now) })).filter(x => x.dt).sort((a, b) => a.dt - b.dt);
      const first = list[0];
      const hero = first ? `<div class="cal-hero reveal">${X.ornament("o-start")}${X.ornament("o-end")}<span class="cal-kicker">${u.upcoming}</span><h3>${first.e.title}</h3><div class="cd" data-cd="${first.dt.getTime()}">${countdownHTML(first.dt, u)}</div><p>${fmtDate(first.dt, u)}</p><p class="cal-text">${first.e.text}</p></div>` : '';
      const cards = list.map(({ e, dt }) => `<article class="item-card cal-card reveal">
        <div class="item-head"><span class="icon-wrap"><span class="icon" data-icon="${e.icon}"></span></span><div><h3>${e.title}</h3><span class="cal-date">${fmtDate(dt, u)}${e.rule.startsWith('l:') ? ` · ${u.lunarTag}` : ''}</span> <span class="cal-tag t-${e.type}">${u.types[e.type]}</span></div></div>
        <div class="cd cd-sm" data-cd="${dt.getTime()}">${countdownHTML(dt, u)}</div><p>${e.text}</p>
        <button type="button" class="btn-mini" data-ics="${e.id}">${u.ics}</button>${C().cardTools(e.title)}</article>`).join('');
      return C().sectionHead(d, 'calendar', 'calendar') + `<p class="x-intro reveal">${u.intro}</p>${hero}
        <div class="cal reveal" id="calApp">${calMain(u)}</div>
        <p class="x-note reveal">${u.weekNote} ${u.holidaysNote}</p>
        <div class="x-box reveal"><h3>${u.sourcesTitle}</h3><div class="src-chips">${['law', 'decree', 'prod', 'oraza', 'sub1', 'sub2', 'azaHol', 'wiki'].map(k => `<a class="src-chip" href="${CALSRC[k]}" target="_blank" rel="noopener noreferrer"><span class="icon" data-icon="external"></span>${u.src[k]}</a>`).join('')}</div><p>${u.srcNote}</p></div>
        <h3 class="subheading reveal">${u.all}</h3><div class="card-grid">${cards}</div>`;
    },
    wire(){
      const d = D(), u = d.calendar.ui, root = C().el.content, app = root.querySelector('#calApp');
      const redraw = dir => {
        app.innerHTML = calMain(u, dir); C().paintIcons(app); bind();
        app.querySelectorAll('.reveal').forEach(n => n.classList.add('in-view'));
      };
      const select = (k, dir) => { const dt = fromKey(k); calState.sel = k; if(dt.getFullYear() !== calState.y || dt.getMonth() !== calState.m){ calState.y = dt.getFullYear(); calState.m = dt.getMonth(); } calState.view = 'month'; redraw(dir); };
      const step = n => {
        if(calState.view === 'year'){ calState.y = Math.min(2040, Math.max(2020, calState.y + n)); }
        else { const dt = new Date(calState.y, calState.m + n, 1); calState.y = Math.min(2040, Math.max(2020, dt.getFullYear())); calState.m = dt.getMonth(); }
        const dts = fromKey(calState.sel);
        if(calState.view === 'month' && (dts.getFullYear() !== calState.y || dts.getMonth() !== calState.m)) calState.sel = dkey(new Date(calState.y, calState.m, 1));
        redraw(n > 0 ? 'to-next' : 'to-prev');
      };
      function bind(){
        app.querySelectorAll('[data-step]').forEach(b => b.addEventListener('click', () => step(+b.dataset.step)));
        app.querySelector('#calMonth').addEventListener('change', e => { calState.m = +e.target.value; calState.sel = dkey(new Date(calState.y, calState.m, 1)); redraw(); });
        app.querySelector('#calYear').addEventListener('change', e => { calState.y = +e.target.value; calState.sel = dkey(new Date(calState.y, calState.m, 1)); redraw(); });
        app.querySelector('#calToday').addEventListener('click', () => { const n = new Date(); calState.y = n.getFullYear(); calState.m = n.getMonth(); calState.sel = dkey(n); calState.view = 'month'; redraw(); });
        app.querySelectorAll('[data-view]').forEach(b => b.addEventListener('click', () => { calState.view = b.dataset.view; redraw(); }));
        app.querySelectorAll('[data-dl]').forEach(b => b.addEventListener('click', async () => {
          b.classList.add('busy');
          try{ const r = await calImage(b.dataset.dl); await exportCanvas(r.cv, r.name, r.title); }
          catch(err){ C().showToast(L[lang()].fail); }
          b.classList.remove('busy');
        }));
        app.querySelectorAll('[data-sec]').forEach(b => b.addEventListener('click', () => { calState.sec = b.dataset.sec; redraw(); }));
        app.querySelectorAll('.cal-day, .cy-d, .cal-row').forEach(b => b.addEventListener('click', () => {
          const k = b.dataset.date, was = calState.view; calState.sel = k;
          const dt = fromKey(k); if(dt.getMonth() !== calState.m || dt.getFullYear() !== calState.y || was === 'year'){ select(k); return; }
          app.querySelectorAll('.cal-day.sel').forEach(x => x.classList.remove('sel')); app.querySelectorAll(`.cal-day[data-date="${k}"]`).forEach(x => { if(!x.classList.contains('out')) x.classList.add('sel'); });
          const det = app.querySelector('#calDetail'); det.innerHTML = calDetail(u); C().paintIcons(det); det.classList.remove('flip'); void det.offsetWidth; det.classList.add('flip');
        }));
        app.querySelectorAll('[data-goto]').forEach(b => b.addEventListener('click', () => { calState.m = +b.dataset.goto; calState.sel = dkey(new Date(calState.y, calState.m, 1)); calState.view = 'month'; redraw(); }));
        C().paintIcons(app);
      }
      bind();
      const tick = () => root.querySelectorAll('[data-cd]').forEach(n => { n.innerHTML = countdownHTML(new Date(+n.dataset.cd), u); });
      X.timers.push(setInterval(tick, 1000));
      root.querySelectorAll('[data-ics]').forEach(b => b.addEventListener('click', () => {
        const ev = d.calendar.events.find(x => x.id === b.dataset.ics), dt = nextOccurrence(ev.rule, new Date()); if(!dt) return;
        const blob = new Blob([icsFor(ev, dt)], { type:'text/calendar' }), a = document.createElement('a');
        a.href = URL.createObjectURL(blob); a.download = ev.id + '.ics'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 3000);
      }));
    }
  };

  /* =======================================================
     MUSIC
     ======================================================= */
  const musicState = { type:'all' };
  const DUTAR_ART = `<svg viewBox="0 0 220 90" class="dutar-art" aria-hidden="true"><ellipse cx="46" cy="45" rx="38" ry="30" fill="var(--secondary)" opacity=".85"/><ellipse cx="46" cy="45" rx="14" ry="11" fill="var(--bg)" opacity=".75"/><rect x="82" y="40" width="130" height="10" rx="4" fill="var(--primary)"/><path class="str s1" d="M30 41H214" stroke="var(--ink)" stroke-width="1.4"/><path class="str s2" d="M30 49H214" stroke="var(--ink)" stroke-width="1.4"/>${[100,112,124,136,148,160,172,184].map(x => `<path d="M${x} 38V52" stroke="var(--bg)" stroke-width="2"/>`).join('')}</svg>`;
  X.routes.music = {
    render(d){
      const m = d.music, u = m.ui, types = ['all', ...Object.keys(u.types)];
      const lab = k => k === 'all' ? L[lang()].periods.all : u.types[k];
      const chips = types.map(k => `<button type="button" class="map-chip${musicState.type === k ? ' on' : ''}" data-mtype="${k}">${lab(k)}</button>`).join('');
      const ins = m.instruments.filter(x => musicState.type === 'all' || x.type === musicState.type).filter(x => !C().state.query || C().matches(x.title + ' ' + x.text));
      const cards = ins.map(x => `<article class="item-card reveal"><div class="item-head"><span class="icon-wrap"><span class="icon" data-icon="${x.icon}"></span></span><div><h3>${x.title}</h3><span class="badge">${u.types[x.type]}</span></div></div><p>${x.text}</p>${C().cardTools(x.title)}</article>`).join('');
      const gen = m.genres.filter(x => !C().state.query || C().matches(x.title + ' ' + x.text)).map(x => `<article class="item-card reveal"><div class="item-head"><span class="icon-wrap"><span class="icon" data-icon="${x.icon}"></span></span><h3>${x.title}</h3></div><p>${x.text}</p>${C().cardTools(x.title)}</article>`).join('');
      return C().sectionHead(d, 'music', 'music') + `
        <div class="x-box music-hero reveal">${DUTAR_ART}<div><h3>${u.bakhshi}</h3><p>${u.bakhshiText}</p></div></div>
        <h3 class="subheading reveal">${u.instruments}</h3><div class="map-chips reveal">${chips}</div>
        <div class="card-grid">${cards || C().emptyState(L[lang()].noItems)}</div>
        <h3 class="subheading reveal">${u.genres}</h3><div class="card-grid">${gen}</div>
        <div class="dict-note reveal"><span class="icon" data-icon="info"></span><p>${u.facts}</p></div>
        <div class="dict-note reveal" style="margin-top:12px"><span class="icon" data-icon="info"></span><p>${u.note}</p></div>`;
    },
    wire(){ C().el.content.querySelectorAll('[data-mtype]').forEach(b => b.addEventListener('click', () => { musicState.type = b.dataset.mtype; C().render(); })); }
  };

  /* =======================================================
     FOLKLORE
     ======================================================= */
  const proverbState = { n:-1 };
  function folkCard(set, x, i, u){
    const q = C().state.query;
    if(q && !C().matches(x.text + ' ' + x.trans + ' ' + x.answer)) return '';
    const body = set.kind === 'riddle'
      ? `<div class="riddle-box"><button type="button" class="btn-mini riddle-btn" data-riddle="1">${u.answer}</button><p class="riddle-ans" hidden>${x.answer}</p></div>${x.trans ? `<p class="riddle-tr">${x.trans}</p>` : ''}`
      : (x.trans ? `<p>${x.trans}</p>` : '');
    const cls = set.kind === 'line' ? ' line-card' : '';
    return `<article class="item-card proverb-card${cls} reveal" data-srcs="${x.srcs}"><div class="item-head"><span class="icon-wrap"><span class="icon" data-icon="${set.kind === 'riddle' ? 'search' : 'quote'}"></span></span><h3 lang="tk" dir="ltr" class="verse">${x.text}</h3></div>${body}${C().cardTools(x.text.split('\n')[0])}</article>`;
  }
  X.routes.folklore = {
    render(d){
      const f = d.folklore, u = f.ui;
      const cards = f.items.filter(x => !C().state.query || C().matches(x.title + ' ' + x.text)).map(x => `<article class="item-card reveal"><div class="item-head"><span class="icon-wrap"><span class="icon" data-icon="${x.icon}"></span></span><h3>${x.title}</h3></div><p>${x.text}</p>${C().cardTools(x.title)}</article>`).join('');
      const prov = f.proverbs.filter(x => !C().state.query || C().matches(x.text + ' ' + x.trans));
      const pcards = prov.map((x, i) => `<article class="item-card proverb-card reveal${i === proverbState.n ? ' picked' : ''}" data-srcs="${x.srcs}" data-pi="${i}"><div class="item-head"><span class="icon-wrap"><span class="icon" data-icon="quote"></span></span><h3 lang="tk" dir="ltr">${x.text}</h3></div>${x.trans ? `<p>${x.trans}</p>` : ''}${C().cardTools(x.text)}</article>`).join('');
      const sets = (f.sets || []).map(st => {
        const html = st.items.map((x, i) => folkCard(st, x, i, u)).join('');
        if(!html) return '';
        return `<h3 class="subheading reveal" id="fs-${st.id}">${st.title}</h3><p class="x-intro reveal">${st.intro}</p><div class="card-grid proverb-grid">${html}</div>`;
      }).join('');
      const jump = (f.sets || []).map(st => `<button type="button" class="map-chip" data-fjump="fs-${st.id}">${st.title.split(':')[0].split('(')[0].trim()}</button>`).join('');
      return C().sectionHead(d, 'folklore', 'quote') + `<div class="dict-note reveal"><span class="icon" data-icon="info"></span><p>${u.intro}</p></div>
        <p class="x-note reveal">${u.setsNote || ''}</p>
        <div class="map-chips reveal"><button type="button" class="map-chip" data-fjump="fs-prov">${u.proverbsTitle}</button>${jump}</div>
        <h3 class="subheading reveal" id="fs-prov">${u.proverbsTitle}</h3>
        <div class="map-chips reveal"><button type="button" class="map-chip" id="proverbRandom"><i></i>${u.random}</button></div>
        <div class="card-grid proverb-grid">${pcards || C().emptyState(L[lang()].noItems)}</div>
        ${sets}
        <h3 class="subheading reveal">${u.genres}</h3><div class="card-grid">${cards || C().emptyState(L[lang()].noItems)}</div>
        <div class="dict-note reveal" style="margin-top:14px"><span class="icon" data-icon="clock"></span><p>${u.pending}</p></div>`;
    },
    wire(){
      const root = C().el.content, btn = root.querySelector('#proverbRandom');
      if(btn) btn.addEventListener('click', () => {
        const cards = [...root.querySelectorAll('[data-pi]')]; if(!cards.length) return;
        let n; do { n = Math.floor(Math.random() * cards.length); } while(cards.length > 1 && n === proverbState.n);
        proverbState.n = n; cards.forEach((c, i) => c.classList.toggle('picked', i === n));
        cards[n].scrollIntoView({ behavior:'smooth', block:'center' });
      });
      root.querySelectorAll('[data-riddle]').forEach(b => b.addEventListener('click', () => {
        const ans = b.parentElement.querySelector('.riddle-ans'), show = ans.hidden; ans.hidden = !show; b.classList.toggle('on', show);
        const u = D().folklore.ui; b.textContent = show ? u.hide : u.answer;
      }));
      root.querySelectorAll('[data-fjump]').forEach(b => b.addEventListener('click', () => { const t = document.getElementById(b.dataset.fjump); if(t) t.scrollIntoView({ behavior:'smooth', block:'start' }); }));
    }
  };

  /* =======================================================
     Timeline period filter + scrubber (history)
     ======================================================= */
  const PERIOD_OF = [].concat(Array(4).fill('ancient'), Array(12).fill('medieval'), Array(7).fill('tribes'), Array(4).fill('soviet'), Array(6).fill('modern'));
  X.after = function(route){
    if(route !== 'history') return;
    const root = C().el.content, items = [...root.querySelectorAll('.timeline-item')];
    if(items.length !== PERIOD_OF.length || root.querySelector('.tl-filter')) return;
    const l = L[lang()], bar = document.createElement('div');
    bar.className = 'tl-filter reveal';
    bar.innerHTML = `<div class="map-chips">${Object.keys(l.periods).map(k => `<button type="button" class="map-chip${k === 'all' ? ' on' : ''}" data-period="${k}">${l.periods[k]}</button>`).join('')}</div>
      <label class="tl-scrub"><span>${l.scrub}</span><input type="range" min="0" max="${items.length - 1}" value="0" aria-label="${l.scrub}"><output>1/${items.length}</output></label>`;
    const tl = root.querySelector('.timeline'); tl.parentNode.insertBefore(bar, tl);
    items.forEach((it, i) => it.dataset.period = PERIOD_OF[i]);
    const range = bar.querySelector('input'), out = bar.querySelector('output');
    let ids = items;
    bar.querySelectorAll('[data-period]').forEach(b => b.addEventListener('click', () => {
      bar.querySelectorAll('[data-period]').forEach(x => x.classList.toggle('on', x === b));
      const p = b.dataset.period; let n = 0;
      items.forEach(it => {
        const show = p === 'all' || it.dataset.period === p; it.hidden = !show;
        if(show){ it.style.setProperty('--i', String(n++ % 9)); it.classList.remove('in-view'); void it.offsetWidth; it.classList.add('in-view'); }
      });
      ids = items.filter(it => !it.hidden); range.max = Math.max(0, ids.length - 1); range.value = 0; out.textContent = '1/' + ids.length;
    }));
    range.addEventListener('input', () => {
      const it = ids[+range.value]; if(!it) return; out.textContent = (+range.value + 1) + '/' + ids.length;
      it.scrollIntoView({ behavior:'smooth', block:'center' }); it.classList.remove('flash'); void it.offsetWidth; it.classList.add('flash');
    });
    C().initReveal();
  };


  /* =======================================================
     Ornament: a Turkmen-gul style medallion used on the dashboard
     hero and the calendar hero. It is sized from its container
     (not from fixed pixels) so it looks right on phones and desktops.
     ======================================================= */
  function ringPoints(r, rot, n){
    return Array.from({ length:n }, (_, k) => { const a = (rot + k * 360 / n) * Math.PI / 180; return (100 + r * Math.sin(a)).toFixed(1) + ',' + (100 - r * Math.cos(a)).toFixed(1); }).join(' ');
  }
  X.ornament = function(cls){
    const petals = Array.from({ length:8 }, (_, k) => `<path d="M100 26C113 43 113 61 100 80C87 61 87 43 100 26Z" transform="rotate(${k * 45} 100 100)"/>`).join('');
    const studs = Array.from({ length:16 }, (_, k) => { const a = k * 22.5 * Math.PI / 180, r = 90; return `<circle cx="${(100 + r * Math.sin(a)).toFixed(1)}" cy="${(100 - r * Math.cos(a)).toFixed(1)}" r="${k % 2 ? 1.4 : 2.4}" fill="currentColor" stroke="none"/>`; }).join('');
    return `<div class="orn-wrap ${cls || ''}" aria-hidden="true"><svg class="orn" viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.1">
      <g class="orn-a"><polygon points="${ringPoints(97, 22.5, 8)}"/><polygon points="${ringPoints(97, 0, 8)}"/><circle cx="100" cy="100" r="84"/>${studs}</g>
      <g class="orn-b">${petals}<circle cx="100" cy="100" r="36"/><circle cx="100" cy="100" r="25" stroke-dasharray="2 3.2"/></g>
      <polygon class="orn-c" points="${ringPoints(17, 0, 4)}" fill="currentColor" fill-opacity=".55"/>
    </svg></div>`;
  };

  /* =======================================================
     Global search entries
     ======================================================= */
  X.search = function(lg){
    const d = DATA[lg], out = [], push = (section, icon, title) => out.push({ section, label:d.nav[section], title, icon });
    d.map.points.forEach(p => push('map', 'pin', p.title)); d.map.areas.forEach(a => push('map', 'pin', a.title));
    d.carpets.guls.forEach(g => push('carpets', 'gem', g.title)); d.carpets.weaves.forEach(g => push('carpets', 'gem', g.title));
    d.calendar.events.forEach(e => push('calendar', e.icon, e.title));
    d.music.instruments.forEach(e => push('music', e.icon, e.title)); d.music.genres.forEach(e => push('music', e.icon, e.title));
    d.folklore.items.forEach(e => push('folklore', e.icon, e.title));
    return out;
  };
  return X;
})();
