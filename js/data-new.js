/* =========================================================
   TurkmenPedia — data for the five new sections (js/data-new.js)
   map · carpets · calendar · folklore · music

   Every entry is written as a [fa, tk] pair so the two languages
   can never drift apart. Coordinates are rounded and approximate:
   the map is a schematic, not a survey.
   ========================================================= */
(function(){
  'use strict';
  const T = (pair, i) => pair[i];

  /* ---------- navigation ---------- */
  const NAVS = [
    // id, after, icon, nav[fa,tk], subtitle[fa,tk], explore[fa,tk]
    ['map','places','pin',['نقشهٔ تعاملی','Interaktiw karta'],
      ['شهرها، میراث جهانی و سرزمین ایل‌ها','Şäherler, dünýä miras we tireleriň ýerleri'],
      ['شهرها، اماکن میراثی و گسترهٔ تاریخی ایل‌ها بر روی یک نقشهٔ شماتیک؛ لایه‌ها را روشن و خاموش کنید.','Şäherler, miras ýerleri we tireleriň taryhy ýaýramagy şematik kartada; gatlaklary açyp-ýapyp bilersiňiz.']],
    ['carpets','tribes','gem',['قالی و گل‌ها','Haly we gollar'],
      ['گل هر ایل، امضای هندسی او','Her tiräniň göli — onuň geometrik goly'],
      ['گالری گل‌های شش ایل، انواع بافته‌ها و دستگاه بافندهٔ تعاملی که قالی را ردیف‌به‌ردیف می‌بافد.','Alty tiräniň gölleri, dokma görnüşleri we halyny hatar-hatar dokaýan interaktiw gurluş.']],
    ['music','arts','music',['موسیقی و سازها','Saz we sazlar'],
      ['از دوتار تا گیجک','Dutardan gyjaga çenli'],
      ['سازهای ترکمن، سنت باغشی و ژانرهای آواز؛ هر ساز با ساختار و نقش‌اش.','Türkmen sazlary, bagşy däbi we aýdym žanrlary; her sazyň gurluşy we orny.']],
    ['calendar','music','calendar',['تقویم و جشن‌ها','Senenama we baýramlar'],
      ['شمارش معکوس تا جشن بعدی','Indiki baýrama çenli yzyna sanamak'],
      ['جشن‌های ملی و فرهنگی با شمارش معکوس زنده تا نوبت بعدی هر کدام.','Milli we medeni baýramlar; her biriniň indiki gezegine çenli göni yzyna sanama.']],
    ['folklore','calendar','quote',['فرهنگ شفاهی','Halk döredijiligi'],
      ['ضرب‌المثل، معما، لالایی و قصه','Atalar sözi, tapmaça, älle we erteki'],
      ['راهنمای ژانرهای ادبیات شفاهی ترکمن: ضرب‌المثل، معما، لالایی، قصه و دستان.','Türkmen şahyrana halk döredijiliginiň žanrlary: atalar sözi, tapmaça, älle, erteki we dessan.']]
  ];
  NAVS.forEach(([id, after, icon, nav, sub, exp]) => {
    const at = NAV_ITEMS.findIndex(n => n.id === after);
    NAV_ITEMS.splice(at + 1, 0, { id, icon });
    ['fa','tk'].forEach((l, i) => {
      DATA[l].nav[id] = nav[i];
      DATA[l].subtitle[id] = sub[i];
      DATA[l].explore[id] = exp[i];
    });
  });

  /* ---------- MAP ---------- */
  // id, kind, lat, lon, title, text, route, q
  const MAP = [
    ['ashgabat','city',37.95,58.38,['عشق‌آباد','Aşgabat'],
      ['پایتخت ترکمنستان، در دامنهٔ کپه‌داغ؛ زلزلهٔ ۶ اکتبر ۱۹۴۸ شهر را ویران کرد و امروز آن روز را «روز یادبود» می‌نامند.','Türkmenistanyň paýtagty, Köpetdagyň eteginde; 1948-nji ýylyň 6-njy oktýabryndaky ýertitreme şäheri weýran etdi, şol gün häzir «Ýatlama güni» diýlip bellenilýär.'],'history','زلزلهٔ عشق‌آباد','Aşgabat ýertitremesi'],
    ['nisa','heritage',37.98,58.20,['نیسا (دژهای پارتی)','Nusaý (Parfiýa galalary)'],
      ['بازماندهٔ پایتخت کهن پارت‌ها نزدیک عشق‌آباد؛ در فهرست میراث جهانی یونسکو.','Aşgabadyň golaýynda Parfiýalylaryň gadymy paýtagtynyň galyndysy; ÝUNESKO-nyň Bütindünýä mirasynda.'],'history','نیسا','Nusaý'],
    ['merv','heritage',37.66,62.19,['مرو باستان','Gadymy Merw'],
      ['از بزرگ‌ترین شهرهای جادهٔ ابریشم و پایتخت سلجوقیان در دوران سنجر؛ میراث جهانی یونسکو.','Ýüpek ýolunyň iň uly şäherleriniň biri, Sanjaryň döwründe seljuklaryň paýtagty; ÝUNESKO-nyň Bütindünýä mirasy.'],'history','مرو','Merw'],
    ['kunya','heritage',42.32,59.15,['کهنه‌گرگانج','Köneürgenç'],
      ['پایتخت خوارزم باستان در شمال کشور؛ آرامگاه‌ها و مناره‌ها، از جمله مناره قطلوغ‌تیمور، میراث جهانی یونسکو.','Gadymy Horezmiň demirgazykdaky paýtagty; aramgähler we minaralar, şol sanda Gutlug-Timur minarasy, ÝUNESKO-nyň Bütindünýä mirasy.'],'places','کهنه‌گرگانج','Köneürgenç'],
    ['gonur','heritage',38.19,62.04,['گنور دپه','Gonur depe'],
      ['از مراکز بزرگ تمدن برنزی مرغیانه در واحهٔ مرو.','Merw wahasyndaky Margiýana bürünç asyr siwilizasiýasynyň uly merkezlerinden biri.'],'history','تمدن برنزی مرغیانه','Margiýana'],
    ['altyn','heritage',37.95,59.35,['آلتین‌دپه','Altyndepe'],
      ['شهرک عصر مفرغ در ولایت آخال؛ مکان روی نقشه تقریبی است.','Ahal welaýatynda bürünç asyr şäherçesi; kartadaky ýeri takmynandyr.'],'places','آلتین‌دپه','Altyndepe'],
    ['gokdepe','history',38.17,57.95,['گؤک‌تپه','Gökdepe'],
      ['محل نبرد ۱۸۸۰ تا ۱۸۸۱ میان ترکمن‌ها و سپاه روسیه؛ سقوط آن راه را برای الحاق آخال هموار کرد.','1880–1881-nji ýyllarda türkmenler bilen rus goşunynyň arasyndaky söweş ýeri; onuň ýykylmagy Ahalyň birleşdirilmegine ýol açdy.'],'warpeace','گؤک‌تپه','Gökdepe'],
    ['darvaza','nature',40.25,58.44,['دروازهٔ جهنم (دروازه)','Dowzah (Derweze)'],
      ['دهانهٔ گازی همیشه‌سوزان در قره‌قوم؛ تاریخچهٔ دقیق آن به روایت‌های گوناگون بازمی‌گردد.','Garagumdaky hemişe ýanýan gaz kraterini; takyk taryhy dürli rowaýatlara daýanýar.'],'places','دروازه','Derweze'],
    ['yangykala','nature',39.9,54.6,['یانگی‌قلعه','Ýangykala'],
      ['دره‌ای صخره‌ای با دیواره‌های رنگین در غرب کشور؛ مکان تقریبی است.','Günbatarda reňkli diwarly gaýaly jülge; ýeri takmynandyr.'],'places','یانگی‌قلعه','Ýangykala'],
    ['repetek','nature',38.58,63.18,['ذخیره‌گاه رپتک','Repetek goraghanasy'],
      ['ذخیره‌گاه زیست‌کره در دل قره‌قوم و ولایت لبپ.','Garagumyň içinde, Lebap welaýatynda biosfera goraghanasy.'],'places','رپتک','Repetek'],
    ['badkhyz','nature',35.7,62.4,['ذخیره‌گاه بادخیز','Badhyz goraghanasy'],
      ['دشت‌های خشک و پستهٔ وحشی در جنوب‌شرق؛ مأمن گورخر آسیایی (کولان).','Günorta-gündogarda gurak düzlükler we ýabany pisse; Aziýa ýabany eşegi (kulan) üçin howpsuz ýer.'],'places','بادخیز','Badhyz'],
    ['dashoguz','city',41.84,59.97,['داشوغوز','Daşoguz'],
      ['مرکز ولایت شمالی، در سرزمین کهن خوارزم.','Demirgazyk welaýatyň merkezi, gadymy Horezm topragynda.'],'',''],
    ['turkmenabat','city',39.07,63.57,['ترکمن‌آباد (لبپ)','Türkmenabat (Lebap)'],
      ['شهر کنار آمودریا و مرکز ولایت لبپ، سرزمین سنتی ارساری‌ها.','Amyderýanyň kenaryndaky şäher, Lebap welaýatynyň merkezi, ersarylaryň däp bolan ýeri.'],'tribes','ارساری','Ärsary'],
    ['turkmenbashy','city',40.02,52.97,['ترکمنباشی','Türkmenbaşy'],
      ['بندر اصلی کشور بر ساحل دریای خزر.','Hazar deňziniň kenaryndaky ýurduň esasy porty.'],'',''],
    ['gonbad','iran',37.25,55.17,['گنبد کاووس (ایران)','Gonbadkawus (Eýran)'],
      ['شهر مرکزی ترکمن‌صحرا در استان گلستان؛ بخش بزرگی از جمعیت ترکمن ایران در این ناحیه‌اند.','Golestan welaýatynda Türkmen sährasynyň merkezi şäheri; Eýranyň türkmen ilatynyň uly bölegi şu töwerekde.'],'history','پیمان آخال','Ahal şertnamasy'],
    ['torkaman','iran',36.9,54.07,['بندر ترکمن (ایران)','Bandar Türkmen (Eýran)'],
      ['بندر ترکمن‌صحرا بر ساحل جنوب‌شرقی خزر.','Hazaryň günorta-gündogar kenaryndaky Türkmen sährasynyň porty.'],'',''],
    ['maraveh','iran',37.9,55.95,['مراوه‌تپه (ایران)','Maraweh-Tepe (Eýran)'],
      ['شهر مرزی ترکمن‌نشین در شمال استان گلستان.','Golestanyň demirgazygynda serhetýaka türkmen şäheri.'],'','']
  ];
  const AREAS = [
    ['teke',38.2,59.2,1.35,['تکه','Teke'],['واحهٔ آخال و مرو؛ بزرگ‌ترین ایل ترکمنستان امروز.','Ahal we Merw wahasy; häzirki Türkmenistanyň iň uly tiresi.']],
    ['yomut',38.6,54.7,1.1,['یموت','Ýomut'],['نواحی غربی و کرانهٔ خزر و بخش‌هایی از ترکمن‌صحرا.','Günbatar sebitler, Hazar kenary we Türkmen sährasynyň käbir bölekleri.']],
    ['ersari',38.9,63.8,1.2,['ارساری','Ärsary'],['کرانه‌های آمودریا و ولایت لبپ.','Amyderýanyň ýakalary we Lebap welaýaty.']],
    ['saryk',36.9,62.3,0.9,['ساریق','Saryk'],['جنوب مرو و پنده؛ گل‌شان روی پرچم است.','Merwiň günortasy we Pende; göli baýdakda.']],
    ['salor',36.5,60.9,0.5,['سالور','Salyr'],['حوالی سرخس؛ ایل کهن و پرنفوذ پیشین.','Sarahsyň töwereginde; öň gadymy we abraýly tire.']],
    ['chowdur',41.3,57.6,1.0,['چودور','Çowdur'],['تاریخاً مانقیشلاق و خوارزم، یعنی شمال‌غرب.','Taryhy taýdan Mangyşlak we Horezm, ýagny demirgazyk-günbatar.']]
  ];
  const MAPUI = [
    { layers:{city:'شهرها',heritage:'میراث جهانی و باستانی',history:'نبرد و رویداد',nature:'طبیعت',iran:'ترکمن‌صحرا (ایران)',tribe:'گستردهٔ ایل‌ها'},
      intro:'طرحی شماتیک از ترکمنستان و ترکمن‌صحرا. مرزها و مکان‌ها تقریبی‌اند و برای مطالعهٔ جغرافیایی دقیق نیستند؛ روی هر نشان بزنید.',
      tapHint:'روی یک نشان یا یک محدودهٔ ایل بزنید', more:'ببینید', caspian:'دریای خزر', tribeNote:'محدوده‌های ایل تاریخی و تقریبی‌اند و با مرز امروزی ایل‌ها یکی نیستند.', iranLabel:'ایران', afgLabel:'افغانستان', uzbLabel:'ازبکستان', kazLabel:'قزاقستان' },
    { layers:{city:'Şäherler',heritage:'Dünýä we gadymy miras',history:'Söweş we wakalar',nature:'Tebigat',iran:'Türkmen sährasy (Eýran)',tribe:'Tireleriň ýaýramagy'},
      intro:'Türkmenistanyň we Türkmen sährasynyň şematik çyzgysy. Serhetler we ýerler takmynandyr we takyk geografik öwrenmek üçin däl; her nyşana basyň.',
      tapHint:'Nyşana ýa-da tire sebitine basyň', more:'Gör', caspian:'Hazar deňzi', tribeNote:'Tire sebitleri taryhy we takmynandyr; olar tireleriň şu günki serhedi bilen birmeňzeş däl.', iranLabel:'Eýran', afgLabel:'Owganystan', uzbLabel:'Özbegistan', kazLabel:'Gazagystan' }
  ];

  /* ---------- CARPETS ---------- */
  // gul id, [name fa,tk], [text fa,tk]
  const GULS = [
    ['teke',['تکه','Teke'],['گل‌های ردیف‌شده در قالی‌های اصلی با یک گل کوچک‌تر ثانویه در میان؛ از همین ایل «آسمالیق» پنج‌ضلعی می‌آید که روی پهلوهای شتر عروس آویزان می‌شد.','Esasy halylarda hatar-hatar gollar we aralarynda kiçi ikinji göl; şol tiräniň bäşburç «asmalyk» zady gelin düýesiniň iki ýanyna asylypdyr.']],
    ['yomut',['یموت','Ýomut'],['نمونهٔ مشهور آن «انسی» یا فرش در یورت است که میدان آن مانند باغ به چهار بخش تقسیم می‌شود؛ گل‌های لوزی‌مانند در بافته‌های یموت رایج‌اند.','Meşhur görnüşi ýurt gapysyna asylýan «ensi»; onuň meýdany bag ýaly dört bölege bölünýär; ýomut dokmalarynda romb şekilli gollar ýaýrandyr.']],
    ['salor',['سالور','Salyr'],['بریتانیکا گل چهاربخشی سالور را با نقش حیوان کوچک در هر ربع توصیف می‌کند؛ سالورها ایل کهن و پرمنزلت بودند ولی قدرتشان رو به افول رفت.','Britannika salyr golunu her çärýekde kiçi haýwan keşbi bar dört bölekli diýip suratlandyrýar; salyrlar gadymy, abraýly tire bolupdyrlar, ýöne güýçleri peselipdir.']],
    ['saryk',['ساریق','Saryk'],['به نوشتهٔ بریتانیکا، بسیاری از گل‌های کیسه‌های ساریق با تکه مشترک است؛ این ایل در پرچم نیز با گلی نمایندگی می‌شود.','Britannikanyň ýazmagyna görä, saryk haltalarynyň köp gölleri teke bilen umumydyr; tire baýdakda hem bir göl bilen görkezilýär.']],
    ['ersari',['ارساری','Ärsary'],['گل ارساری معمولاً بزرگ، هشت‌ضلعی و نزدیک به مربع است و در شبکه‌ای چهاربخشی تکرار می‌شود (منبع تجاری؛ توصیف کلی).','Ärsary goly adatça uly, sekizburç we kwadrata ýakyn, dört bölekli ýelekde gaýtalanýar (täjirçilik çeşme; umumy suratlandyryş).']],
    ['chowdur',['چودور','Çowdur'],['در منابع تخصصی از گل‌های «ایرتمن» (نوع پرنده‌ای و چرخی) برای چودور یاد می‌شود؛ گل‌های چودور گاه با یموت اشتباه گرفته می‌شود.','Hünärmen çeşmelerinde çowdura degişli «ertmen» gollary (guşly we tigirli görnüşli) agzalýar; çowdur gollary käwagt ýomut bilen garyşdyrylýar.']]
  ];
  const WEAVES = [
    ['ensi',['انسی','Ensi'],['فرش در ورودی یورت؛ ابعاد معمولاً حدود ۱٫۴ در ۱٫۵ متر.','Ýurt gapysyna asylýan haly; ölçegi adatça takmynan 1,4 × 1,5 metr.']],
    ['asmalyk',['آسمالیق','Asmalyk'],['زین‌پوش پنج‌ضلعی شتر عروس؛ معمولاً جفت بافته می‌شد.','Gelin düýesiniň bäşburç bezegi; adatça jübüt dokalýar.']],
    ['chuval',['چووال','Çuwal'],['کیسهٔ بزرگ نگه‌داری، از جهیزیه و بخشی از «کمد» داخل یورت.','Saklamak üçin uly halta, gelin eşiginiň we ýurduň içindäki «şkafyň» bir bölegi.']],
    ['torba',['تُربه','Torba'],['کیسهٔ بافتهٔ باریک‌تر؛ بعضی نمونه‌های سالور بسیار بلندند و ظاهراً برای تزئین بوده‌اند.','Has inçe dokalan halta; käbir salyr mysallary örän uzyn, görnüşi ýaly bezeg üçin bolupdyr.']],
    ['mafrash',['مفرش','Mafraş'],['کیسهٔ مکعبی برای رخت‌خواب و پوشاک.','Düşek we eşik üçin kub şekilli halta.']]
  ];
  const CARUI = [
    { guls:'گل ایل‌ها', weaves:'انواع بافته', loom:'دستگاه بافندهٔ تعاملی', loomHint:'ایل را انتخاب کنید و قالی را ردیف‌به‌ردیف ببافید.',
      weave:'ببافید', rewind:'از نو', rows:'ردیف', note:'نقش‌ها طرح‌های نمادین و الهام‌گرفته‌اند، نه بازتولید دقیق گل‌های اصلی. گل‌ها میان ایل‌ها مشترک هم بوده‌اند؛ نسبت‌دادن قطعی یک نقش به یک ایل آسان نیست.',
      proverb:'«آب زندگی است، اسب بال است و قالی روح»؛ ضرب‌المثلی که از زبان ترکمن‌ها نقل می‌شود (به‌نقل از سایت‌های گردشگری و بدون متن اصلی تأییدشده).',
      facts:['زمینهٔ قرمز روشن و عمیقِ روناس رنگ معمول قالی ترکمن است.','«قالی بخارا» نام بازاری نادرستی بود که به بافته‌های ایل‌های گوناگون می‌دادند، چون از بخارا صادر می‌شد.','موزهٔ قالی در عشق‌آباد یک موزهٔ کامل برای این هنر است.','قالی در پرچم ملی ترکمنستان نماد رسمی ملی است.'],
      howTitle:'چرا هر ایل یک گل دارد؟', how:'گل‌ها همچون نشان خانوادگی در قالی تکرار می‌شدند. پژوهشگران روسی و غربی از روی آن‌ها دربارهٔ تبار ایل‌ها بحث کرده‌اند، اما شکل گل‌ها در طول زمان تغییر کرده و پیوند آن‌ها با «توتم» یا «تمغا» همچنان فرضیه است.' },
    { guls:'Tireleriň gölleri', weaves:'Dokma görnüşleri', loom:'Interaktiw haly dokaýjy', loomHint:'Tire saýlaň we halyny hatar-hatar dokaň.',
      weave:'Dok', rewind:'Täzeden', rows:'hatar', note:'Nagyşlar nyşanly, ylham alnan çyzgylardyr, asyl gollaryň takyk göçürmesi däl. Gollar tireler arasynda umumy hem bolupdyr; bir nagşy bir tire bilen bütinleý baglamak aňsat däl.',
      proverb:'«Suw — durmuş, at — ganat, haly — ruh»; türkmenlerden getirilýän nakyl (syýahatçylyk saýtlaryndan alyndy, tassyklanan asyl teksti ýok).',
      facts:['Goýy ýagty gyzyl (gyzylyldym) türkmen halysynyň adaty meýdan reňkidir.','«Buhara halysy» dürli tirelere berlen ýalňyş bazar adydy, sebäbi Buhara arkaly satylypdyr.','Aşgabatdaky Haly muzeýi bu sungata bagyşlanan doly muzeýdir.','Haly milli baýdakda resmi milli nyşandyr.'],
      howTitle:'Näme üçin her tiräniň öz göli bar?', how:'Gollar halyda maşgala nyşany ýaly gaýtalanypdyr. Rus we günbatar alymlary olardan tireleriň gelip çykyşy barada pikir ýöredipdirler, ýöne gollaryň şekili wagt bilen üýtgändir we olaryň «totem» ýa-da «tamga» bilen baglanyşygy henizem çaklamadyr.' }
  ];

  /* ---------- CALENDAR ---------- */
  // id, rule, icon, [title], [text]
  // rule: 'f:M-D' fixed · 'n:M:weekday:nth' (nth=-1 last) · 'l:fitr' / 'l:adha' (lunar, approximate)
  const EVENTS = [
    ['newyear','f:1-1','star',['سال نو میلادی','Täze ýyl'],['نخستین روز سال میلادی؛ تعطیل رسمی.','Gregorian ýylyň ilkinji güni; resmi dynç güni.']],
    ['defenders','f:1-27','shield',['روز مدافعان میهن','Watan goragçylarynyň güni'],['مناسبت رسمی؛ روز تعطیل نیست.','Resmi ýatlama güni; dynç güni däl.']],
    ['diplomats','f:2-18','landmark',['روز کارکنان دیپلماتیک','Diplomatik işgärleriň güni'],['مناسبت رسمی؛ روز تعطیل نیست.','Resmi ýatlama güni; dynç güni däl.']],
    ['women','f:3-8','users',['روز جهانی زن','Halkara zenanlar güni'],['تعطیل رسمی؛ در برخی سال‌ها روز بعد هم تعطیل می‌شود (مثلاً ۲۰۲۶).','Resmi dynç güni; käbir ýyllarda indiki gün hem dynç berilýär (mysal üçin 2026).']],
    ['memorial','f:1-12','scroll',['روز یادبود (۱۲ ژانویه)','Ýatlama güni (12-nji ýanwar)'],['از دو روز سوگواری ترکمنستان؛ پرچم‌ها نیم‌افراشته می‌شود (به‌روایت ویکی‌پدیا).','Türkmenistanyň iki ýas gününiň biri; baýdaklar ýarym ýere düşürilýär (Wikipediýa boýunça).']],
    ['transport','f:3-7','compass',['روز کارکنان حمل‌ونقل و ارتباطات','Ulag we aragatnaşyk toplumy işgärleriniň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['chemical','f:3-31','gem',['روز کارکنان صنعت شیمی','Himiýa pudagynyň işgärleriniň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['health','f:4-7','shield',['روز جهانی بهداشت','Bütindünýä saglyk güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['migration','f:4-17','users',['روز کارکنان خدمات مهاجرت','Migrasiýa gullugy işgärleriniň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['interior','f:5-29','shield',['روز کارکنان وزارت کشور','Içeri işler gullugynyň işgärleriniň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['children','f:6-1','users',['روز جهانی کودک','Halkara çagalar güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['environment','f:6-5','compass',['روز جهانی محیط زیست','Bütindünýä daşky gurşaw güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['textile','n:6:0:1','shirt',['روز کارکنان صنعت نساجی (نخستین یکشنبهٔ ژوئن)','Dokma pudagynyň işgärleriniň güni (iýunyň ilkinji ýekşenbesi)'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['science','f:6-12','book',['روز علم','Ylym güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['judiciary','f:6-18','scroll',['روز کارکنان قضایی و مجری قانون','Kazyýet we hukuk goraýjy edaralar işgärleriniň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['prosecutor','f:6-26','scroll',['روز دادستانی','Prokuratura güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['judicial','f:7-5','scroll',['روز کارکنان قوهٔ قضائیه','Kazyýet häkimiýeti işgärleriniň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['healthcare','f:7-21','shield',['روز کارکنان بهداشت و درمان','Saglygy goraýyş we lukmançylyk pudagynyň işgärleriniň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['frontier','f:8-11','shield',['روز مرزبانان','Serhet goragçylarynyň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['knowledge','f:9-1','book',['روز دانش و دانشجو','Bilim we talyplar güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['power','n:9:6:2','sun',['روز کارکنان صنعت برق (دومین شنبهٔ سپتامبر)','Energetika pudagynyň işgärleriniň güni (sentýabryň ikinji şenbesi)'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['security','f:9-30','shield',['روز کارکنان امنیت ملی','Milli howpsuzlyk işgärleriniň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['older','f:10-1','users',['روز جهانی سالمندان','Halkara garrylar güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['navy','f:10-9','waves',['روز نیروی دریایی','Harby-deňiz güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['customs','f:11-4','compass',['روز کارکنان گمرک','Gümrük işgärleriniň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['harvest','n:11:0:2','bowl',['روز برداشت (دومین یکشنبهٔ نوامبر)','Hasyl güni (noýabryň ikinji ýekşenbesi)'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['oilgas','f:12-14','landmark',['روز کارکنان نفت، گاز و زمین‌شناسی','Nebit-gaz we geologiýa pudagynyň işgärleriniň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['niyazov','f:12-21','landmark',['روز یادبود نخستین رئیس‌جمهور (س. ا. نیازف)','Türkmenistanyň ilkinji Prezidenti S. A. Nyýazowyň ýatlama güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['galla','n:7:0:3','bowl',['جشن گله (برداشت گندم)','Gala baýramy (bugdaý ýygymy)'],['جشن برداشت گندم، سومین یکشنبهٔ ژوئیه (به‌روایت ویکی‌پدیا).','Bugdaý ýygymy baýramy, iýulyň üçünji ýekşenbesi (Wikipediýa boýunça).']],
    ['nowruz','f:3-21','sun',['نوروز','Nowruz'],['جشن آغاز بهار؛ از آیین‌های ثبت‌شده در فهرست یونسکو (به‌صورت مشترک با چند کشور). از ۲۱ مارس دست‌کم دو روز تعطیل است و در برخی سال‌ها روز بعد هم اضافه می‌شود.','Ýazyň başlanmagy baýramy; ÝUNESKO sanawyndaky ýörelgeleriň biri (birnäçe ýurt bilen bilelikde). 21-nji martdan başlap iň az iki gün dynç berilýär, käbir ýyllarda indiki gün hem goşulýar.']],
    ['horse','n:4:0:-1','horse',['روز اسب','At güni'],['جشن اسب آخال‌تکه با مسابقه، نمایش زیبایی و سوارکاری؛ پس از روز استقلال از مهم‌ترین جشن‌های کشور خوانده می‌شود (آخرین یکشنبهٔ آوریل).','Ahalteke atynyň baýramy; ýaryş, görkeziş we atçylyk bilen; Garaşsyzlyk gününden soň iň möhüm baýramlaryň biri diýilýär (aprelüň soňky ýekşenbesi).']],
    ['victory','f:5-9','flag',['روز پیروزی','Ýeňiş güni'],['یادبود پیروزی در جنگ جهانی دوم؛ مناسبت رسمی و نه تعطیل.','Ikinji jahan urşundaky ýeňşi ýatlamak güni; resmi ýatlama, dynç güni däl.']],
    ['revival','f:5-18','scroll',['روز قانون اساسی، احیا و شعر مختومقلی (۱۸ مه)','Konstitusiýa, Galkynyş we Magtymguly Pyragynyň poeziýa güni (18-nji maý)'],['۱۸ مه تعطیل رسمی است؛ در این روزها برنامه‌های ادبی و شعرخوانی هم برگزار می‌شود.','18-nji maý resmi dynç güni; şu günlerde edebi çäreler we şygyr okalyşy hem geçirilýär.']],
    ['ashgabatday','f:5-25','pin',['روز شهر عشق‌آباد','Aşgabat şäheriniň güni'],['مناسبت رسمی برای پایتخت؛ روز تعطیل نیست.','Paýtagt üçin resmi ýatlama güni; dynç güni däl.']],
    ['carpet','n:5:0:-1','gem',['روز قالی','Haly güni'],['از ۱۹۹۲ برگزار می‌شود؛ جوایزی به قالی‌بافان می‌دهند و کنسرت برگزار می‌شود (آخرین یکشنبهٔ مه).','1992-nji ýyldan bäri bellenilýär; haly dokaýjylara baýrak berilýär we konsertler geçirilýär (maýyň soňky ýekşenbesi).']],
    ['culture','f:6-27','feather',['روز کارکنان فرهنگ و هنر و روز شعر مختومقلی فراغی','Medeniýet we sungat işgärleriniň we Magtymguly Pyragynyň şygyr güni'],['طبق فرمان رسمی، ۲۷ ژوئن هم روز کارکنان فرهنگ و هنر و هم روز شعر مختومقلی است؛ تعطیل نیست.','Resmi karara görä, 27-nji iýun medeniýet we sungat işgärleriniň hem-de Magtymguly Pyragynyň şygyr güni; dynç güni däl.']],
    ['melon','n:8:0:2','bowl',['روز خربزه','Gawun güni'],['از ۱۹۹۴ جشنی برای خربزه، میوهٔ نمادین کشور، در دومین یکشنبهٔ اوت.','1994-nji ýyldan bäri ýurduň nyşanly miwesi gawuna bagyşlanan baýram, awgustyň ikinji ýekşenbesi.']],
    ['bakhshi','n:9:0:2','music',['روز باغشی','Bagşy güni'],['روز بزرگداشت خنیاگران و دوتارنوازان در دومین یکشنبهٔ سپتامبر.','Bagşylary we dutarçylary hormatlamak güni, sentýabryň ikinji ýekşenbesi.']],
    ['independence','f:9-27','flag',['روز استقلال','Garaşsyzlyk güni'],['جشن رسمی استقلال؛ خود استقلال در ۲۷ اکتبر ۱۹۹۱ اعلام شد.','Resmi Garaşsyzlyk baýramy; garaşsyzlygyň özi 1991-nji ýylyň 27-nji oktýabrynda yglan edildi.']],
    ['remembrance','f:10-6','landmark',['روز یادبود','Ýatlama güni'],['یادبود قربانیان زلزلهٔ ۱۹۴۸ عشق‌آباد.','1948-nji ýylda Aşgabat ýertitremesiniň pidalaryny ýatlamak.']],
    ['neighbor','n:12:0:1','link',['روز همسایگی نیک','Ýagşy goňşuçylyk güni'],['اولین یکشنبهٔ دسامبر، بر پایهٔ ارزش همسایه‌داری.','Dekabryň ilkinji ýekşenbesi, goňşuçylyk gymmatlygyna daýanýar.']],
    ['neutrality','f:12-12','shield',['روز بی‌طرفی','Bitaraplyk güni'],['۱۲ دسامبر ۱۹۹۵: مجمع عمومی سازمان ملل بی‌طرفی دائمی ترکمنستان را به رسمیت شناخت.','1995-nji ýylyň 12-nji dekabry: BMG Baş Assambleýasy Türkmenistanyň hemişelik bitaraplygyny ykrar etdi.']],
    ['fitr','l:fitr','moon',['اورازا بایرام (عید فطر)','Oraza baýramy (Fitr baýramy)'],['پایان ماه رمضان. تاریخ از تقویم قمری محاسبه می‌شود و ممکن است یک روز با اعلام رسمی فرق کند.','Ramazan aýynyň soňy. Sene aý senenamasyndan hasaplanýar we resmi yglandan bir gün tapawutly bolup biler.']],
    ['adha','l:adha','moon',['گوربان بایرام (عید قربان)','Gurban baýramy (Gurban baýramy)'],['ده ذی‌الحجه؛ تاریخ تقریبی است و ممکن است یک روز با اعلام رسمی فرق کند.','Zülhijjäniň onunjy güni; sene takmynandyr we resmi yglandan bir gün tapawutly bolup biler.']]
  ];
  const CALUI = [
    { next:'نوبت بعدی', in:'تا', days:'روز', hours:'ساعت', mins:'دقیقه', secs:'ثانیه', today:'امروز!', tomorrow:'فردا',
      intro:'شمارش معکوس بر پایهٔ ساعت دستگاه شما محاسبه می‌شود. تاریخ جشن‌های قمری تقریبی‌اند؛ برای برنامه‌ریزی رسمی به اعلام دولت مراجعه کنید.',
      upcoming:'نزدیک‌ترین جشن', all:'همهٔ جشن‌های سال', add:'افزودن به تقویم', ics:'دانلود فایل تقویم', lunarTag:'قمری، تقریبی',
      months:['ژانویه','فوریه','مارس','آوریل','مه','ژوئن','ژوئیه','اوت','سپتامبر','اکتبر','نوامبر','دسامبر'], locale:'fa',
      wd:['دوشنبه','سه‌شنبه','چهارشنبه','پنجشنبه','جمعه','شنبه','یکشنبه'], wdShort:['د','س','چ','پ','ج','ش','ی'],
      dlMonth:'تصویر ماه', dlYear:'تصویر سال', imgSource:'turkmenpedia · منبع تعطیلات: فرمان‌های رسمی ترکمنستان',
      todayBtn:'امروز', viewMonth:'ماه', viewYear:'سال', secLabel:'تقویم دوم', sec:{none:'هیچ', jalali:'شمسی', hijri:'قمری'},
      types:{public:'تعطیل رسمی', cultural:'مناسبت فرهنگی', observance:'مناسبت رسمی'}, lunar:'قمری (تقریبی)',
      none:'مناسبتی در این روز نیست', monthEvents:'مناسبت‌های این ماه', dayOf:(i,n)=>`روز ${i} از ${n}`,
      daysAway:n=>n===0?'امروز':n===1?'فردا':`${n} روز دیگر`, daysAgo:n=>n===1?'دیروز':`${n} روز پیش`,
      subTitle:'روز تعطیل جایگزین', subText:'وقتی تعطیل رسمی یکشنبه باشد، نخستین روز کاری بعد از آن تعطیل می‌شود (ماده ۸۱، بند ۲ قانون کار). هر سال با فرمان جداگانه تأیید می‌شود؛ نمونه‌ها: ۶ اکتبر ۲۰۲۴ به ۷ اکتبر، ۳۰ مارس ۲۰۲۵ به ۳۱ مارس و ۱۸ مه ۲۰۲۵ به ۱۹ مه.', subSrc:'فرمان‌های انتقال روز تعطیل',
      statsTitle:'خلاصهٔ این ماه', stats:{ days:'روز', weekend:'روز آخر هفته', public:'تعطیل رسمی', obs:'مناسبت', work:'روز کاری (تقریبی)' },
      sourcesTitle:'منابع رسمی', official:'فرمان رسمی', labour:'قانون کار / فرمان تعطیلات', sourceLabel:'منبع', allDay:'همهٔ مناسبت‌های ماه',
      src:{ decree:'فرمان رئیس‌جمهور: فهرست مناسبت‌هایی که بدون تعطیلی گرامی داشته می‌شوند (turkmenistan.gov.tm)', prod:'تقویم تولیدی ۲۰۲۶ وزارت کار و حمایت اجتماعی: تعطیلات رسمی (turkmenhemrasy.gov.tm)', oraza:'نمونهٔ فرمان رسمی اورازا بایرام (۲۰۲۵) با ارجاع به ماده ۸۱ قانون کار (metbugat.gov.tm)', sub1:'فرمان انتقال تعطیلی ۶ اکتبر ۲۰۲۴ (یکشنبه) به ۷ اکتبر (tngizt.gov.tm)', sub2:'فرمان انتقال تعطیلی ۱۸ مه ۲۰۲۵ به ۱۹ مه (turkmenhemrasy.gov.tm)', wiki:'تعطیلات ترکمنستان (ویکی‌پدیا)' },
      srcNote:'تعطیلات رسمی بر پایهٔ ماده ۸۱ قانون کار با فرمان رئیس‌جمهور اعلام می‌شود. تاریخ دو بایرام هر سال با فرمان مشخص می‌شود و تعطیلِ افتاده در یکشنبه به روز بعد منتقل می‌شود.',
      prev:'قبلی', next:'بعدی', weekNote:'هفته از دوشنبه آغاز می‌شود؛ شنبه و یکشنبه آخر هفته است.',
      holidaysNote:'فهرست تعطیلات رسمی از چند منبع تقویم عمومی گرد آمد و تعطیلات جایگزین سالانه (مثل روز بعد از ۸ مارس در برخی سال‌ها) ممکن است اضافه شود.' },
    { next:'Indiki gezek', in:'çenli', days:'gün', hours:'sagat', mins:'minut', secs:'sekunt', today:'Şu gün!', tomorrow:'Ertir',
      intro:'Yzyna sanama enjamyňyzyň sagadyna görä hasaplanýar. Aý baýramlarynyň senesi takmynandyr; resmi meýilnama üçin hökümetiň yglanyna serediň.',
      upcoming:'Iň ýakyn baýram', all:'Ýylyň ähli baýramlary', add:'Senenama goş', ics:'Senenama faýlyny ýükle', lunarTag:'aý, takmynan',
      months:['Ýanwar','Fewral','Mart','Aprel','Maý','Iýun','Iýul','Awgust','Sentýabr','Oktýabr','Noýabr','Dekabr'], locale:'tk',
      wd:['Duşenbe','Sişenbe','Çarşenbe','Penşenbe','Anna','Şenbe','Ýekşenbe'], wdShort:['Du','Si','Ça','Pe','An','Şe','Ýe'],
      dlMonth:'Aýyň suraty', dlYear:'Ýylyň suraty', imgSource:'turkmenpedia · baýramlaryň çeşmesi: Türkmenistanyň resmi kararlary',
      todayBtn:'Şu gün', viewMonth:'Aý', viewYear:'Ýyl', secLabel:'Ikinji senenama', sec:{none:'Ýok', jalali:'Şemsi', hijri:'Hijri'},
      types:{public:'Resmi dynç güni', cultural:'Medeni baýram', observance:'Resmi ýatlama'}, lunar:'aý, takmynan',
      none:'Bu günde baýram ýok', monthEvents:'Şu aýyň baýramlary', dayOf:(i,n)=>`${n} günüň ${i}-nji güni`,
      daysAway:n=>n===0?'Şu gün':n===1?'Ertir':`${n} gün galdy`, daysAgo:n=>n===1?'Düýn':`${n} gün öň`,
      subTitle:'Dynç güni ýerine geçirilen gün', subText:'Resmi dynç güni ýekşenbä düşse, ondan soňky ilkinji iş güni dynç güni bolýar (Zähmet kodeksiniň 81-nji maddasynyň 2-nji bölegi). Her ýyl aýry karar bilen tassyklanýar; mysallar: 2024-nji ýylyň 6-njy oktýabry 7-nji oktýabra, 2025-nji ýylyň 30-njy marty 31-nji marta we 18-nji maýy 19-njy maýa.', subSrc:'Dynç gününi geçirmek kararlary',
      statsTitle:'Şu aýyň gysgaça mazmuny', stats:{ days:'gün', weekend:'dynç güni', public:'resmi dynç güni', obs:'ýatlama', work:'iş güni (takmynan)' },
      sourcesTitle:'Resmi çeşmeler', official:'Resmi karar', labour:'Zähmet kodeksi / baýram karary', sourceLabel:'Çeşme', allDay:'Aýyň ähli baýramlary',
      src:{ decree:'Prezidentiň karary: dynç berilmän bellenilýän baýramlaryň we ýatlama günleriň sanawy (turkmenistan.gov.tm)', prod:'Zähmet we ilatyň durmuş goraglygy ministrliginiň 2026-njy ýyl öndürijilik senenamasy (turkmenhemrasy.gov.tm)', oraza:'Zähmet kodeksiniň 81-nji maddasyna salgylanýan Oraza baýramy karary — nusga (2025) (metbugat.gov.tm)', sub1:'2024-nji ýylyň 6-njy oktýabr (ýekşenbe) dynç gününi 7-nji oktýabra geçirmek karary (tngizt.gov.tm)', sub2:'2025-nji ýylyň 18-nji maý dynç gününi 19-njy maýa geçirmek karary (turkmenhemrasy.gov.tm)', wiki:'Türkmenistanyň baýramlary (Wikipediýa)' },
      srcNote:'Resmi dynç günleri Zähmet kodeksiniň 81-nji maddasyna esaslanyp Prezidentiň karary bilen yglan edilýär. Iki baýramyň senesi her ýyl karar bilen kesgitlenýär, ýekşenbä düşen dynç güni indiki güne geçirilýär.',
      prev:'Öňki', next:'Indiki', weekNote:'Hepde duşenbeden başlanýar; şenbe we ýekşenbe dynç günleri.',
      holidaysNote:'Resmi dynç günleriniň sanawy birnäçe köpçülikleýin senenama çeşmesinden ýygnaldy; ýyllyk geçirilýän dynç günleri (käbir ýyllarda 8-nji marttan soňky gün ýaly) goşulyp bilner.' }
  ];

  /* ---------- MUSIC ---------- */
  const INSTR = [
    ['dutar','music',['دوتار','Dutar'],'string',
      ['ساز اصلی ترکمن با دو سیم ابریشمی (امروز گاه نایلون یا فلز)؛ بدنه از چوب توت یک‌تکه کنده‌کاری می‌شود، دستهٔ آن از زردآلو است و نام آن از «دو» و «تار» فارسی می‌آید. باغشی با آن حماسه می‌خواند. میزان کوک آن چهارم است.','Türkmen sazynyň baş guraly: iki ýüpek simli (häzir käwagt neýlon ýa-da metal); korpusy bir bölek tut agajyndan oýulýar, ýeňsesi erik/öriki agajyndan; ady parsça «du» we «tar» sözlerinden gelýär. Bagşy onuň bilen dessan aýdýar. Sazy kwarta sazlanýar.']],
    ['gyjak','music',['گیجک','Gyjak'],'string',
      ['ساز زهی آرشه‌ای (نوعی کمانچهٔ میخی) که اغلب دوتار را همراهی می‌کند.','Ýaý bilen çalynýan ýaýly sim sazy; köplenç dutaryň ýanynda çalynýar.']],
    ['dilli','music',['دیللی تویدوک','Dilli tüýdük'],'wind',
      ['ساز بادی تک‌زبانه از خانوادهٔ کلارینت، با بدنهٔ ساخته‌شده از ساقهٔ نی؛ دو نوع دارد (انتهای زبانه بسته یا باز) و صدایی نافذ برای ملودی‌های آواز دارد.','Klarnet maşgalasyndan bir dilli üflenýän saz, korpusy gamyş sapagyndan; iki görnüşi bar (dilli ujy ýapyk ýa-da açyk) we aýdym heňleri üçin ýiti sesi bar.']],
    ['gargy','music',['گارگی تویدوک','Gargy tüýdük'],'wind',
      ['فلوت نی‌مانند از سازهای غیرآیینی؛ صدای نرم آن در موسیقی چوپانی و محافل خصوصی شنیده می‌شود.','Däp däl sazlaryň biri bolan gamyş şekilli fleýta; ýumşak sesi çopan heňlerinde we ýapyk ýygnaklarda eşidilýär.']],
    ['gopuz','music',['گوپوز','Gopuz'],'ritual',
      ['ساز زبانه‌دار کهن که میان لب‌ها نگه داشته می‌شود و صدا با زبان شکل می‌گیرد؛ در میان زنان محبوب بوده است. نام آن در کتاب دده قورقود هم آمده است.','Dodaklaryň arasynda saklanýan, sesi dil bilen şekillendirilýän gadymy dilli saz; aýallar arasynda meşhur bolupdyr. Ady «Dede Gorkut» kitabynda hem bar.']],
    ['percussion','music',['سازهای کوبه‌ای (دم، تبیل، دووول، نگاره)','Kakylýan sazlar (dem, tebil, dowul, nagara)'],'perc',
      ['منابع در این‌باره اختلاف دارند: برخی می‌گویند موسیقی سنتی ترکمن تقریباً فاقد ساز کوبه‌ای است و دایره‌زدن بیشتر در مناطق متأثر از ازبک دیده می‌شود، منابع دیگر از «دم» (دایره) و «نگاره» و «دووول» نام می‌برند.','Çeşmeler bu barada tapawutly aýdýarlar: käbirleri türkmen däp saz medeniýetinde kakylýan sazlar ýok diýýärler we tamburin köplenç özbek täsirli ýerlerde duş gelýär diýýärler, beýlekiler «dem» (tamburin), «nagara» we «dowul» ýaly atlary agzaýarlar.']]
  ];
  const MUSIC_GENRES = [
    ['dessan','scroll',['دستان','Dessan'],['روایت بلند حماسی یا عاشقانه که باغشی با دوتار می‌خواند؛ حماسهٔ گوروغلی و «شاسنم و غریب» از نمونه‌هاست. هنر حماسه‌خوانی گوروغلی در فهرست یونسکو ثبت شده است.','Bagşynyň dutar bilen aýdýan uzyn gahrymançylyk ýa-da söýgi hekaýasy; Görogly we «Şasenem-Garyp» mysallar. Göroglynyň dessan aýtmak sungaty ÝUNESKO sanawynda.']],
    ['tirme','feather',['تیرمه','Tirme'],['آوازی بر پایهٔ شعر شاعرانی مانند مختومقلی، کمینه یا سیدی.','Magtymguly, Kemine ýa-da Seýdi ýaly şahyrlaryň şygyrlaryna esaslanan aýdym.']],
    ['opera','landmark',['اپرای ترکمن','Türkmen operasy'],['«شاسنم و غریب» (۱۹۴۴) نخستین اپرای ترکمن است؛ اثر دانتر اووزوف و آدریان شاپوشنیکوف.','«Şasenem we Garyp» (1944) ilkinji türkmen operasydyr; Danatar Öwezow bilen Adrian Şaposhnikowyň eseri.']],
    ['orchestra','users',['ارکستر سازهای ملی','Milli sazlar orkestri'],['ساهی جپباروف در ۱۹۳۰ها نخستین ارکستر سازهای ملی را بنیان گذاشت (به‌روایت منابع دانشنامه‌ای).','Sähy Jepbarow 1930-njy ýyllarda ilkinji milli sazlar orkestrini esaslandyrdy (ensiklopedik çeşmelere görä).']],
    ['dance','sun',['آیین آواز و رقص کوشتدپدی','Kuştdepdi aýdym-tans däbi'],['از کهن‌ترین رقص‌های ترکمن شمرده می‌شود و با لباس‌های سرخ و قهوه‌ای اجرا می‌شود. این آیین آواز و رقص در ۲۰۱۷ در فهرست نمایندهٔ میراث ناملموس یونسکو ثبت شد؛ بعضی منابع می‌گویند سنت ترکمن رقص چندانی ندارد، که با ثبت یونسکو جور نیست و بیشتر به موسیقی غیرآیینی برمی‌گردد.','Iň gadymy türkmen tanslarynyň biri hasaplanýar we gyzyl-goňur eşikler bilen ýerine ýetirilýär. Bu aýdym-tans däbi 2017-nji ýylda ÝUNESKO-nyň ruhy miras sanawyna girizildi; käbir çeşmeler türkmen däbinde tans köp däl diýýärler, ýöne bu ÝUNESKO belligi bilen gabat gelmeýär.']]
  ];
  const MUSICUI = [
    { instruments:'سازها', genres:'ژانرها و سنت‌ها', types:{string:'زهی',wind:'بادی',ritual:'کهن و آیینی',perc:'کوبه‌ای'},
      bakhshi:'باغشی', bakhshiText:'باغشی خنیاگری است که با دوتار حماسه و غزل می‌خواند. شیوهٔ آواز ترکمن با صدای بلند و گلو شناخته می‌شود؛ یک منبع آن را به زندگی در دشت و صحرا و کوچ‌نشینی نسبت می‌دهد.',
      facts:'در منابع دانشنامه‌ای آمده است که با کمک رسالات قرون‌وسطایی می‌توان بیش از هفتاد ساز را که در دوره‌های مختلف میان ترکمن‌ها رایج بوده بازسازی کرد.',
      note:'منابع دربارهٔ ساز و موسیقی ترکمن کم‌شمار و گاه ناسازگارند؛ هر جا اختلاف بود در همان کارت نوشته شده است.' },
    { instruments:'Sazlar', genres:'Žanrlar we däpler', types:{string:'Simli',wind:'Üflenýän',ritual:'Gadymy we däp',perc:'Kakylýan'},
      bakhshi:'Bagşy', bakhshiText:'Bagşy dutar bilen dessan we gazal aýdýan sazandadyr. Türkmen aýdym usuly beýik we bokurdak sesi bilen tanalýar; bir çeşme muny düzlük we çöl durmuşyna, göçme ýaşaýyşa baglaýar.',
      facts:'Ensiklopedik çeşmelerde orta asyr traktatlaryna daýanyp, dürli döwürlerde türkmenler arasynda ýaýran ýetmişden gowrak sazyň keşbini dikeltmek mümkin diýilýär.',
      note:'Türkmen sazlary we aýdymlary barada çeşmeler az we käwagt biri-birine gabat gelmeýär; tapawut bolan ýerinde şol kartada ýazylan.' }
  ];

  /* ---------- FOLKLORE ---------- */
  const FOLK = [
    ['proverb','quote',['اتالار سوزی (ضرب‌المثل)','Atalar sözi'],['«سخن نیاکان» جمع‌بندی تجربهٔ چندنسل است. نمونهٔ نقل‌شده: «آب زندگی است، اسب بال است و قالی روح».','«Ata-babalaryň sözi» — nesilleriň tejribesiniň jemi. Getirilýän mysal: «Suw — durmuş, at — ganat, haly — ruh».']],
    ['nakyl','feather',['ناقیل','Nakyl'],['ضرب‌المثل‌های کوتاه و فشرده؛ اصطلاح «ناقیل» را ترک‌شناسان برای ترکمن به‌کار می‌برند.','Gysga, dykyz nakyllar; «nakyl» termini türkologlar tarapyndan türkmen üçin ulanylýar.']],
    ['riddle','search',['تاپماچا (معما)','Tapmaça'],['معماهای منظوم یا کوتاه که پاسخ را در پوشش استعاره پنهان می‌کنند؛ سرگرمی شبانه و آموزش کودکان.','Jogaby metafora bilen ýapýan şygyrly ýa-da gysga tapmaçalar; agşam güýmenjesi we çagalaryň terbiýesi.']],
    ['lullaby','moon',['آله (لالایی)','Älle'],['آوازهای کودک برای خواباندن در گهواره؛ از قدیمی‌ترین قالب‌های آواز زنانه.','Çagany bäşikde ýatyrmak üçin aýdymlar; aýal aýdymlarynyň iň gadymy görnüşlerinden.']],
    ['tale','scroll',['ارتکی (قصه)','Erteki'],['قصه‌های پریان، حیوان و قهرمان که شب‌ها برای کودکان گفته می‌شد؛ شخصیتی چون ملانصرالدین در نقل‌های ترکمن هم دیده می‌شود.','Çagalara agşamlary aýdylýan perişde, haýwan we gahryman ertekileri; Molla Nasreddin ýaly keşpler türkmen rowaýatlarynda hem duş gelýär.']],
    ['epic','swords',['حماسه (گوروغلی)','Eposlar (Görogly)'],['«گوروغلی» حماسه‌ای است که باغشی‌ها می‌خوانند؛ هنر حماسه‌خوانی گوروغلی در ۲۰۱۵ به نام ترکمنستان در فهرست نمایندهٔ یونسکو ثبت شد.','«Görogly» bagşylaryň aýdýan eposydyr; Görogly dessan aýtmak sungaty 2015-nji ýylda Türkmenistanyň adyndan ÝUNESKO-nyň wekilçilikli sanawyna girizildi.']],
    ['nasreddin','mask',['ملانصرالدین','Molla Nasreddin'],['شخصیت طنز مشترک میان ملل شرق؛ «قصه‌های ملا نصرالدین» در فهرست یونسکو به نام چند کشور ثبت شده است.','Gündogar halklaryň umumy gülküli keşbi; «Molla Nasreddin hekaýalary» ÝUNESKO sanawynda birnäçe ýurduň adyndan bellige alyndy.']]
  ];
  const FOLKUI = [
    { intro:'در این بخش عمداً متن اصلی ضرب‌المثل‌ها، معماها و لالایی‌های ترکمنی نیامده است: گردآوری معتبر آن‌ها نیازمند منبع چاپی یا گویشور بومی است و نقل از حافظه یا منابع مبهم خطر تحریف دارد. هر جا نمونه‌ای آمده منبعش مشخص است.',
      genres:'ژانرها', sources:'منبع نمونه', pending:'گردآوری متن‌های اصلی با منبع معتبر در دست انجام است.' },
    { intro:'Bu bölümde türkmen atalar sözleriniň, tapmaçalaryň we ällelleriň asyl teksti bilkastlaýyn berilmeýär: olaryň ygtybarly ýygyndysy çap çeşmesini ýa-da ene dilli gürleýjini talap edýär we ýatdan ýa-da düşnüksiz çeşmelerden getirmek ýalňyşlyk howpuny döredýär. Mysal berlen ýerinde çeşmesi görkezilen.',
      genres:'Žanrlar', sources:'Mysalyň çeşmesi', pending:'Asyl tekstleri ygtybarly çeşme bilen ýygnamak dowam edýär.' }
  ];

  // type: public (non-working) · cultural · observance ; span = number of days
  const EVMETA = { newyear:['public',1], defenders:['observance',1], diplomats:['observance',1], women:['public',1], nowruz:['public',2], horse:['cultural',1],
    victory:['observance',1], revival:['public',1], ashgabatday:['observance',1], carpet:['cultural',1], culture:['observance',1], melon:['cultural',1],
    memorial:['observance',1], transport:['observance',1], chemical:['observance',1], health:['observance',1], migration:['observance',1], interior:['observance',1], children:['observance',1], environment:['observance',1], science:['observance',1], judiciary:['observance',1], prosecutor:['observance',1], judicial:['observance',1], healthcare:['observance',1], frontier:['observance',1], knowledge:['observance',1], security:['observance',1], older:['observance',1], navy:['observance',1], customs:['observance',1], oilgas:['observance',1], niyazov:['observance',1], textile:['observance',1], power:['observance',1], harvest:['observance',1], galla:['cultural',1],
    bakhshi:['cultural',1], independence:['public',1], remembrance:['public',1], neighbor:['observance',1], neutrality:['public',1], fitr:['public',1], adha:['public',3] };

  // ids that appear in the presidential decree "holidays and memorial dates celebrated without time off"
  const DECREE = ['defenders','diplomats','transport','chemical','health','migration','horse','victory','ashgabatday','interior','carpet','children','environment','textile','science','judiciary','prosecutor','culture','judicial','healthcare','frontier','knowledge','power','security','older','navy','customs','harvest','oilgas','niyazov'];
  const OFFICIAL_PUBLIC = ['newyear','women','nowruz','revival','independence','remembrance','neutrality','fitr','adha'];

  /* ---------- expose to DATA ---------- */
  ['fa','tk'].forEach((l, i) => {
    DATA[l].map = { ui: MAPUI[i],
      points: MAP.map(m => ({ id:m[0], kind:m[1], lat:m[2], lon:m[3], title:T(m[4],i), text:T(m[5],i), route:m[6], q: m[6] ? (i === 0 ? m[7] : m[8]) : '' })),
      areas: AREAS.map(a => ({ id:a[0], lat:a[1], lon:a[2], r:a[3], title:T(a[4],i), text:T(a[5],i) })) };
    DATA[l].carpets = { ui: CARUI[i],
      guls: GULS.map(g => ({ id:g[0], title:T(g[1],i), text:T(g[2],i) })),
      weaves: WEAVES.map(w => ({ id:w[0], title:T(w[1],i), text:T(w[2],i) })) };
    DATA[l].calendar = { ui: CALUI[i], events: EVENTS.map(e => ({ id:e[0], rule:e[1], icon:e[2], title:T(e[3],i), text:T(e[4],i), type:(EVMETA[e[0]]||['cultural',1])[0], span:(EVMETA[e[0]]||['cultural',1])[1], official: DECREE.includes(e[0]) ? 'decree' : (OFFICIAL_PUBLIC.includes(e[0]) ? 'labour' : '') })) };
    DATA[l].music = { ui: MUSICUI[i],
      instruments: INSTR.map(x => ({ id:x[0], icon:x[1], title:T(x[2],i), type:x[3], text:T(x[4],i) })),
      genres: MUSIC_GENRES.map(x => ({ id:x[0], icon:x[1], title:T(x[2],i), text:T(x[3],i) })) };
    DATA[l].folklore = { ui: FOLKUI[i], items: FOLK.map(x => ({ id:x[0], icon:x[1], title:T(x[2],i), text:T(x[3],i) })) };
  });

  /* names: extra UI strings */
  Object.assign(DATA.fa.names, { genLabel:'شامل ترکیب‌های ساخته‌شده', genBadge:'ترکیبی', genOff:'ترکیب‌های ساخته‌شده خاموش‌اند',
    genHint:'ترکیب قاعده‌مند از اجزای اصیل؛ همه در عمل رایج نیستند و نیاز به تأیید گویشور دارند.' });
  Object.assign(DATA.tk.names, { genLabel:'Döredilen utgaşmalary goş', genBadge:'utgaşma', genOff:'döredilen utgaşmalar öçük',
    genHint:'Asyl bölekleri düzgün boýunça utgaşdyrylan atlar; hemmesi durmuşda ulanylmaýar we ene dilli gürleýjiniň tassyklamagyna mätäç.' });

  DATA.fa.sources.categories.push({ icon:'check', title:'دور سوم بازبینی (اکتبر ۲۰۲۶)', text:'تاریخ روز استقلال رسمی (۲۷ سپتامبر) و جشن‌های ملی با فهرست رسمی تعطیلات و ویکی‌پدیا تطبیق داده شد و تاریخ اعلام استقلال (۲۷ اکتبر ۱۹۹۱) جدا ذکر شد. توصیف گل‌ها از بریتانیکا و مقاله‌ای دربارهٔ گل ترکمن، و سازها از ویکی‌پدیا و منابع گردشگری گرفته شد. متن اصلی ضرب‌المثل‌ها، معماها و لالایی‌ها عمداً نیامده است. نام‌های «ترکیبی» ساخته‌شدهٔ قاعده‌مندند، نه فهرست رایج.' });
  DATA.tk.sources.categories.push({ icon:'check', title:'Üçünji barlag tapgyry (2026-njy ýylyň oktýabry)', text:'Resmi Garaşsyzlyk baýramynyň senesi (27-nji sentýabr) we milli baýramlar resmi baýramlar sanawy we Wikipediýa bilen deňeşdirildi; garaşsyzlygyň yglan edilen senesi (1991-nji ýylyň 27-nji oktýabry) aýry bellendi. Gollaryň beýany Britannika we türkmen göli barada makaladan, sazlar Wikipediýadan we syýahatçylyk çeşmelerinden alyndy. Atalar sözleriniň, tapmaçalaryň we ällelleriň asyl teksti bilkastlaýyn berilmeýär. «Utgaşma» atlary düzgün boýunça döredilendir, ýaýran atlar sanawy däl.' });

  DATA.fa.sources.categories.push({ icon:'check', title:'سند رسمی تعطیلات و نام‌ها (دور چهارم)', text:'فهرست مناسبت‌های بدون تعطیلی از فرمان رئیس‌جمهور (turkmenistan.gov.tm/en/post/9223)، تعطیلات رسمی ۲۰۲۶ از تقویم تولیدی وزارت کار (turkmenhemrasy.gov.tm/en/news/1700) و فرمان نمونهٔ اورازا بایرام با ارجاع به ماده ۸۱ قانون کار (metbugat.gov.tm/en/newsDetails/2447). نام‌های تازه از صفحات «نام‌های ترکمنی» در Behind the Name (نام‌های ارسالیِ کاربران، پس هنوز نیازمند بازبینی‌اند).' });
  DATA.tk.sources.categories.push({ icon:'check', title:'Resmi baýram resminamalary we atlar (dördünji tapgyr)', text:'Dynç berilmän bellenilýän günleriň sanawy Prezidentiň kararyndan (turkmenistan.gov.tm/en/post/9223), 2026-njy ýylyň resmi dynç günleri Zähmet ministrliginiň öndürijilik senenamasyndan (turkmenhemrasy.gov.tm/en/news/1700), Zähmet kodeksiniň 81-nji maddasyna salgylanýan Oraza baýramy karary nusgasy (metbugat.gov.tm/en/newsDetails/2447). Täze atlar Behind the Name saýtynyň «türkmen atlary» sahypalaryndan (ulanyjylar tarapyndan goşulan atlar, şonuň üçin barlag zerur).' });

  /* ---------- proverbs: Turkmen text copied from the compilations cited in sections.js ---------- */
  // [Turkmen text, Persian translation, source ids]
  const PROVERBS = [
    ['Agyzdan çykan sözi dolanyp alyp bolmaz.','سخنی که از دهان بیرون آمد دیگر پس گرفتنی نیست.','nakylA,nakylA2'],
    ['Agyz ýaraşygy diş, göz ýaraşygy gaş.','آرایش دهان دندان است و آرایش چشم ابرو.','nakylA,nakylA2'],
    ['Adam balasy – iliň lälesi.','فرزند آدم لالهٔ ایل است.','nakylA2'],
    ['Adam garrasa-da, köňül garramaz.','آدم هم پیر شود دل پیر نمی‌شود.','nakylA2'],
    ['Adam aýbyny ýer ýaşyrar.','عیب آدمی را خاک می‌پوشاند.','nakylA2'],
    ['Agaç iýmişinden belli, adam kylmyşyndan.','درخت از میوه‌اش پیداست و آدم از کردارش.','nakylA'],
    ['Aglamadyk oglana emjek ýok.','به کودکی که گریه نکند شیر نمی‌دهند.','nakylA'],
    ['Adam adama myhman, jan – göwrä.','آدم مهمان آدم است، جان مهمان تن.','nakylA2'],
    ['Adam alasy içinde, haýwan alasy daşynda.','ابلقیِ آدم درونش است و ابلقیِ جانور بیرونش.','nakylA2'],
    ['Agyr otur, ýeňil gop.','سنگین بنشین، سبک برخیز.','nakylA2'],
    ['Bal tutan barmagyny ýalar.','هر که عسل بردارد انگشتش را می‌لیسد.','dergi'],
    ['Dag başy dumansyz bolmaz.','سر کوه بی‌مه نمی‌شود.','dergi']
  ];
  DATA.fa.folklore.proverbs = PROVERBS.map(x => ({ text:x[0], trans:x[1], srcs:x[2] }));
  DATA.tk.folklore.proverbs = PROVERBS.map(x => ({ text:x[0], trans:'', srcs:x[2] }));
  Object.assign(DATA.fa.folklore.ui, {
    intro:'در این بخش فقط متنی آمده که در یک مجموعهٔ مکتوب یا مقالهٔ پژوهشی دیده‌ام و منبعش زیر هر کارت هست. ضرب‌المثل‌ها از دو گردآوری اینترنتی و یک مقالهٔ دانشگاهی آمده‌اند (که خود به کتاب «نقیل‌ها و اتالار سوزی» گلدی‌یف و آلتی‌یف، آنکارا ۲۰۰۲، ارجاع می‌دهد)؛ ترجمهٔ فارسی از من است. متن معماها و لالایی‌ها هنوز منبع قابل‌اتکایی نیافته و نیامده است.',
    proverbsTitle:'نمونه‌های ضرب‌المثل ترکمنی', random:'نمونهٔ تصادفی', pending:'معماها و لالایی‌ها: هنوز منبع مکتوب قابل‌اتکایی پیدا نشده است.' });
  Object.assign(DATA.tk.folklore.ui, {
    intro:'Bu bölümde diňe ýazuw ýygyndysynda ýa-da ylmy makalada görlen tekst berilýär we çeşmesi her kartyň aşagynda bar. Nakyllar iki internet ýygyndysyndan we bir uniwersitet makalasyndan alyndy (makala Geldiýew bilen Altyýewiň «Türkmen nakyllary we atalar sözi» kitabyna, Ankara 2002, salgylanýar). Tapmaçalaryň we ällelleriň teksti entek ygtybarly çeşme tapylmady we berilmeýär.',
    proverbsTitle:'Türkmen atalar sözünden mysallar', random:'Tötänleýin mysal', pending:'Tapmaçalar we älleller: entek ygtybarly ýazuw çeşmesi tapylmady.' });
})();
