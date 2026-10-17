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
  NAVS.push(['world','tribes','compass',['ترکمن‌های جهان','Dünýä türkmenleri'],
    ['عراق، ایران، افغانستان و بیرون از مرز','Yrak, Eýran, Owganystan we serhetden daşda'],
    ['ترکمن‌های عراق، ایران و افغانستان به‌روایت منابع عمومی، با تفاوت اصطلاح‌ها و بی‌طرفی دربارهٔ اختلاف‌های سیاسی.','Yrak, Eýran we Owganystan türkmenleri umumy çeşmelere görä, adalgalaryň tapawudy we syýasy jedellerde bitarap.']]);
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
    ['diplomats','f:2-18','landmark',['روز کارکنان دیپلماتیک ترکمنستان','Türkmenistanyň diplomatik işgärleriniň güni'],['مناسبت رسمی؛ روز تعطیل نیست.','Resmi ýatlama güni; dynç güni däl.']],
    ['women','f:3-8','users',['روز جهانی زنان','Halkara zenanlar güni'],['تعطیل رسمی؛ در برخی سال‌ها روز بعد هم تعطیل می‌شود (مثلاً ۲۰۲۶).','Resmi dynç güni; käbir ýyllarda indiki gün hem dynç berilýär (mysal üçin 2026).']],
    ['memorial','f:1-12','scroll',['روز یادبود (۱۲ ژانویه)','Hatyra güni (12-nji ýanwar)'],['از دو روز سوگواری ترکمنستان؛ پرچم‌ها نیم‌افراشته می‌شود (به‌روایت ویکی‌پدیا).','Türkmenistanyň iki ýas gününiň biri; baýdaklar ýarym ýere düşürilýär (Wikipediýa boýunça).']],
    ['transport','f:3-7','compass',['روز کارکنان مجتمع حمل‌ونقل و ارتباطات','Ulaglar we aragatnaşyk toplumynyň işgärleriniň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['chemical','f:3-31','gem',['روز کارکنان صنعت شیمی','Himiýa senagatynyň işgärleriniň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['health','f:4-7','shield',['روز جهانی بهداشت','Bütindünýä saglyk güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['migration','f:4-17','users',['روز کارکنان نهادهای مهاجرت ترکمنستان','Türkmenistanyň Migrasiýa edaralarynyň işgärleriniň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['interior','f:5-29','shield',['روز کارکنان نهادهای کشور (داخلی) ترکمنستان','Türkmenistanyň içeri işler edaralarynyň işgärleriniň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['children','f:6-1','users',['روز جهانی حمایت از کودکان','Çagalary goramagyň halkara güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['environment','f:6-5','compass',['روز جهانی حفاظت از محیط زیست','Daşky gurşawy goramagyň bütindünýä güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['textile','n:6:0:1','shirt',['روز کارکنان صنعت نساجی (نخستین یکشنبهٔ ژوئن)','Dokma senagatynyň işgärleriniň güni (iýun aýynyň birinji ýekşenbesi)'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['science','f:6-12','book',['روز علوم','Ylymlar güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['judiciary','f:6-18','scroll',['روز کارکنان نهادهای دادگستری ترکمنستان','Türkmenistanyň Adalat edaralarynyň işgärleriniň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['prosecutor','f:6-26','scroll',['روز کارکنان نهادهای دادستانی ترکمنستان','Türkmenistanyň Prokuratura edaralarynyň işgärleriniň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['judicial','f:7-5','scroll',['روز کارکنان نهادهای قضایی (دادگاه‌ها)','Türkmenistanyň Kazyýet edaralarynyň işgärleriniň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['healthcare','f:7-21','shield',['روز کارکنان بهداشت و درمان و صنعت دارو','Saglygy goraýyş we derman senagaty işgärleriniň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['frontier','f:8-11','shield',['روز مرزبانان','Serhetçiler güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['knowledge','f:9-1','book',['روز دانش و جوانان دانشجو','Bilimler we talyp ýaşlar güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['power','n:9:6:2','sun',['روز کارکنان صنعت انرژی (دومین شنبهٔ سپتامبر)','Energetika senagatynyň işgärleriniň güni (sentýabr aýynyň ikinji şenbesi)'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['security','f:9-30','shield',['روز کارکنان نهادهای امنیت ملی ترکمنستان','Türkmenistanyň Milli howpsuzlyk edaralarynyň işgärleriniň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['older','f:10-1','users',['روز جهانی سالمندان','Ýaşulularyň halkara güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['navy','f:10-9','waves',['روز نیروی دریایی ترکمنستان','Türkmenistanyň Harby-Deňiz Güýçleriniň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['customs','f:11-4','compass',['روز کارکنان نهادهای گمرک ترکمنستان','Türkmenistanyň Gümrük edaralarynyň işgärleriniň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['harvest','n:11:0:2','bowl',['جشن برداشت (دومین یکشنبهٔ نوامبر)','Hasyl toýy (noýabr aýynyň ikinji ýekşenbesi)'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['oilgas','f:12-14','landmark',['روز کارکنان صنعت نفت و گاز و زمین‌شناسی','Nebitgaz senagaty we geologiýa işgärleriniň güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['niyazov','f:12-21','landmark',['روز یادبود نخستین رئیس‌جمهور ترکمنستان س. آ. نیازف (بزرگ صپرمراد ترکمن‌باشی)','Türkmenistanyň ilkinji Prezidenti S.A.Nyýazowy (Beýik Saparmyrat Türkmenbaşyny) ýatlama güni'],['مناسبت رسمی بدون تعطیلی؛ طبق فرمان رئیس‌جمهور، اگر در روز کاری باشد روز تعطیل نیست.','Resmi ýatlama güni; Prezidentiň karary boýunça iş güni bolsa dynç berilmeýär.']],
    ['galla','n:7:0:3','bowl',['جشن گله (برداشت گندم)','Galla baýramy'],['جشن برداشت گندم، سومین یکشنبهٔ ژوئیه (به‌روایت ویکی‌پدیا).','Bugdaý ýygymy baýramy, iýulyň üçünji ýekşenbesi (Wikipediýa boýunça).']],
    ['nowruz','f:3-21','sun',['جشن ملی بهار (نوروز)','Milli bahar baýramy'],['جشن آغاز بهار؛ از آیین‌های ثبت‌شده در فهرست یونسکو (به‌صورت مشترک با چند کشور). طبق ماده ۸۱ قانون کار ۲۱ و ۲۲ مارس تعطیل رسمی است و در برخی سال‌ها (وقتی ۲۲ مارس یکشنبه باشد) روز بعد هم تعطیل می‌شود.','Ýazyň başlanmagy baýramy; ÝUNESKO sanawyndaky ýörelgeleriň biri (birnäçe ýurt bilen bilelikde). 21-nji martdan başlap iň az iki gün dynç berilýär, käbir ýyllarda indiki gün hem goşulýar.']],
    ['horse','n:4:0:-1','horse',['جشن اسب ترکمن (بِدِو)','Türkmen bedewiniň baýramy'],['جشن اسب آخال‌تکه با مسابقه، نمایش زیبایی و سوارکاری؛ پس از روز استقلال از مهم‌ترین جشن‌های کشور خوانده می‌شود (آخرین یکشنبهٔ آوریل).','Ahalteke atynyň baýramy; ýaryş, görkeziş we atçylyk bilen; Garaşsyzlyk gününden soň iň möhüm baýramlaryň biri diýilýär (aprelüň soňky ýekşenbesi).']],
    ['victory','f:5-9','flag',['روز پیروزی در جنگ بزرگ میهنی ۱۹۴۱ تا ۱۹۴۵','1941–1945-nji ýyllaryň Beýik Watançylyk urşunda Ýeňiş güni'],['یادبود پیروزی در جنگ جهانی دوم؛ مناسبت رسمی و نه تعطیل.','Ikinji jahan urşundaky ýeňşi ýatlamak güni; resmi ýatlama, dynç güni däl.']],
    ['revival','f:5-18','scroll',['روز قانون اساسی و پرچم دولتی ترکمنستان (۱۸ مه)','Türkmenistanyň Konstitusiýasynyň we Türkmenistanyň Döwlet baýdagynyň güni (18-nji maý)'],['۱۸ مه تعطیل رسمی است و طبق ماده ۸۱ قانون کار «روز قانون اساسی و پرچم دولتی ترکمنستان» نام دارد.','18-nji maý resmi dynç güni we Zähmet kodeksiniň 81-nji maddasyna görä «Türkmenistanyň Konstitusiýasynyň we Türkmenistanyň Döwlet baýdagynyň güni» diýlip atlandyrylýar.']],
    ['ashgabatday','f:5-25','pin',['روز شهر عشق‌آباد','Aşgabat şäheriniň güni'],['مناسبت رسمی برای پایتخت؛ روز تعطیل نیست.','Paýtagt üçin resmi ýatlama güni; dynç güni däl.']],
    ['carpet','n:5:0:-1','gem',['جشن قالی ترکمن','Türkmen halysynyň baýramy'],['از ۱۹۹۲ برگزار می‌شود؛ جوایزی به قالی‌بافان می‌دهند و کنسرت برگزار می‌شود (آخرین یکشنبهٔ مه).','1992-nji ýyldan bäri bellenilýär; haly dokaýjylara baýrak berilýär we konsertler geçirilýär (maýyň soňky ýekşenbesi).']],
    ['culture','f:6-27','feather',['روز کارکنان فرهنگ و هنر و روز شعر مختومقلی فراغی','Medeniýet we sungat işgärleriniň hem-de Magtymguly Pyragynyň şygryýet güni'],['طبق فرمان رسمی، ۲۷ ژوئن هم روز کارکنان فرهنگ و هنر و هم روز شعر مختومقلی است؛ تعطیل نیست.','Resmi karara görä, 27-nji iýun medeniýet we sungat işgärleriniň hem-de Magtymguly Pyragynyň şygyr güni; dynç güni däl.']],
    ['melon','n:8:0:2','bowl',['روز خربزه','Gawun güni'],['از ۱۹۹۴ جشنی برای خربزه، میوهٔ نمادین کشور، در دومین یکشنبهٔ اوت.','1994-nji ýyldan bäri ýurduň nyşanly miwesi gawuna bagyşlanan baýram, awgustyň ikinji ýekşenbesi.']],
    ['bakhshi','n:9:0:2','music',['روز باغشی','Bagşy güni'],['روز بزرگداشت خنیاگران و دوتارنوازان در دومین یکشنبهٔ سپتامبر.','Bagşylary we dutarçylary hormatlamak güni, sentýabryň ikinji ýekşenbesi.']],
    ['independence','f:9-27','flag',['روز استقلال ترکمنستان','Türkmenistanyň Garaşsyzlyk güni'],['جشن رسمی استقلال؛ خود استقلال در ۲۷ اکتبر ۱۹۹۱ اعلام شد.','Resmi Garaşsyzlyk baýramy; garaşsyzlygyň özi 1991-nji ýylyň 27-nji oktýabrynda yglan edildi.']],
    ['remembrance','f:10-6','landmark',['روز یادبود (حاطیرا)','Hatyra güni'],['یادبود قربانیان زلزلهٔ ۱۹۴۸ عشق‌آباد.','1948-nji ýylda Aşgabat ýertitremesiniň pidalaryny ýatlamak.']],
    ['neighbor','n:12:0:1','link',['روز همسایگی نیک','Ýagşy goňşuçylyk güni'],['اولین یکشنبهٔ دسامبر، بر پایهٔ ارزش همسایه‌داری.','Dekabryň ilkinji ýekşenbesi, goňşuçylyk gymmatlygyna daýanýar.']],
    ['neutrality','f:12-12','shield',['روز بین‌المللی بی‌طرفی','Halkara Bitaraplyk güni'],['۱۲ دسامبر ۱۹۹۵: مجمع عمومی سازمان ملل بی‌طرفی دائمی ترکمنستان را به رسمیت شناخت.','1995-nji ýylyň 12-nji dekabry: BMG Baş Assambleýasy Türkmenistanyň hemişelik bitaraplygyny ykrar etdi.']],
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
    ['lullaby','moon',['هوودی (لالایی ترکمن)','Hüwdi'],['«هوودی» آوازی است که مادران برای خواباندن و پروراندن کودک می‌خوانند؛ بیشتر چهار سطری است و پایان سطرها با «هووا‌هوو، هیّا‌هی» همراه می‌شود و نام ژانر از همین «هو» می‌آید. منابع ترکمنی ریشهٔ آن را به ذکر (هو/هوو) می‌رسانند و به گمان از زمان اوغوزخان می‌دانند. مضمون‌ها: آرزوی بزرگ‌شدن، ازدواج، اسب و وطن و پند.','«Hüwdi» eneleriň çagany ýatyrmak we terbiýelemek üçin aýdýan aýdymydyr; köplenç dört setirli bolýar we setirleriň soňunda «hüwwa-hüw, heýýa-heý» hiňlenilýär; žanryň ady hem şu «hüw»-den gelýär. Türkmen çeşmeleri onuň kökünü zikire baglaýarlar we Oguz han döwründe dörän diýip çaklaýarlar. Mowzuklary: ulalmak, öýlenmek, at we watan arzuwy, pent-nesihat.']],
    ['collections','book',['گردآوری ضرب‌المثل‌ها','Nakyllary ýygnamagyň taryhy'],['۱۹۲۵: گردآوری محمد گلدی‌یف با ۵۰۷ نقیل و ۵۲ ماتال؛ ۱۹۴۳: مقالهٔ بایمحمد گاریف با نزدیک ۸۰۰ نقیل؛ ۲۰۰۲: کتاب «ترکمن نقیللاری وه آتالار سوزی» از قربان‌دردی گلدی‌یف و آمانمیرات آلتی‌یف؛ ۲۰۰۵: گردآوری «میراث». «آتالار سوزی» ساده‌تر و مستقیم‌تر از «نقیل» توصیف می‌شود.','1925: Muhammet Geldiýewiň ýygyndysy, 507 nakyl we 52 matal; 1943: Baýmuhammet Garryýewiň makalasy, 800-e golaý nakyl; 2002: Gurbandurdy Geldiýew bilen Amanmyrat Altyýewiň «Türkmen nakyllary we atalar sözi» kitaby; 2005: «Miras» ýygyndysy. «Atalar sözi» «nakyl»-dan ýönekeý we göni diýlip düşündirilýär.']],
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

  /* ---------- folklore, round 2: more proverbs, riddles, hüwdi stanzas (all sourced) ---------- */
  const MORE_PROVERBS = [
    ['Agyzdan çykan söz atylan ok.','سخنی که از دهان بیرون آمد تیری است که رها شده.','atavatanA'],
    ['Agzy gulply sandygy diş açmasa, dil açar.','صندوق قفل‌دار را اگر دندان نگشاید، زبان می‌گشاید.','atavatanA'],
    ['Bir garybyň köňlüni «Hoş geldiň!» awlar.','دل غریب را «خوش آمدی» شکار می‌کند.','atavatanA'],
    ['Gybat söz dag aşar.','سخن غیبت از کوه هم می‌گذرد.','atavatanA'],
    ['Halk öz nakyllarynyň hili bilen tanalar.','مردم با کیفیت ضرب‌المثل‌هایشان شناخته می‌شوند.','atavatanA'],
    ['Atalar sözi – akylyň gözi.','ضرب‌المثل چشمِ خرد است.','miras'],
    ['Agzybirlik – döwletiň ambary, hazynasydyr.','همدلی انبار و خزانهٔ دولت است.','miras'],
    ['Agzybirlik ojakdyr, agzybirlik saçakdyr.','همدلی کانون است، همدلی سفره است.','miras'],
    ['Maşgalada agzybirlik bolsa, hazyna gerek däl.','اگر در خانواده همدلی باشد خزانه نمی‌خواهد.','miras'],
    ['Türkmen düýe malyny – dünýe maly hasaplapdyr.','ترکمن شتر را مالِ دنیا شمرده است.','miras'],
    ['Işlemedik – dişlemez.','کار نکرده نمی‌خورد.','yashlar'],
    ['Söýenişen ýykylmaz.','کسانی که به هم تکیه کنند نمی‌افتند.','yashlar'],
    ['Müň gaýgy bir iş bitirmez.','هزار غصه یک کار را به پایان نمی‌رساند.','yashlar'],
    ['Tikensiz gül bolmaz, zähersiz bal.','گل بی‌خار نیست و عسل بی‌زهر.','atavatanB']
  ];
  DATA.fa.folklore.proverbs.push(...MORE_PROVERBS.map(x => ({ text:x[0], trans:x[1], srcs:x[2] })));
  DATA.tk.folklore.proverbs.push(...MORE_PROVERBS.map(x => ({ text:x[0], trans:'', srcs:x[2] })));

  const RIDDLES = [
    ['Gulagy eşegiňki ýaly, aýagy itiňki ýaly, özi hem geçi ýaly boker.','گوشش مثل الاغ است، پایش مثل سگ و مثل بز می‌جهد (می‌دود).','خرگوش','Towşan','orientRid'],
    ['Tomusda ýaldyrar – gyşda poslar.','تابستان می‌درخشد، زمستان زنگ می‌زند.','داس','Orak','orientRid']
  ];
  DATA.fa.folklore.riddles = RIDDLES.map(x => ({ text:x[0], trans:x[1], answer:x[2], srcs:x[4] }));
  DATA.tk.folklore.riddles = RIDDLES.map(x => ({ text:x[0], trans:'', answer:x[3], srcs:x[4] }));

  const HUWDI = [
    ['Aýlanar-a, aýlanar,\nÖkdelikde saýlanar,\nMeniň balam ulalyp,\nSöýenine öýlener.','«آیلانار‌آ، آیلانار» (تکیه‌کلام آوازی)؛ در ماهری برگزیده می‌شود؛ فرزندم که بزرگ شود، با آن که دوست دارد ازدواج می‌کند. (ترجمهٔ آزاد من)','inash'],
    ['Toýda tymar bagym sen,\nGünde gülüstanym sen.','در عروسی تعویذِ منی، هر روز گلستانِ منی. (ترجمهٔ فارسی بر پایهٔ برگردان روسی منبع)','orientHuw']
  ];
  DATA.fa.folklore.huwdi = HUWDI.map(x => ({ text:x[0], trans:x[1], srcs:x[2] }));
  DATA.tk.folklore.huwdi = HUWDI.map(x => ({ text:x[0], trans:'', srcs:x[2] }));

  Object.assign(DATA.fa.folklore.ui, {
    intro:'در این بخش فقط متنی آمده که در یک منبع مکتوب یا رسمی دیده‌ام و منبعش زیر هر کارت هست (دکمهٔ کتاب). ضرب‌المثل‌ها از مجموعه‌های ترکمنی، سایت‌های دولتی ترکمنستان و یک مقالهٔ دانشگاهی آمده‌اند؛ ترجمهٔ فارسی از من است. لالایی ترکمنی «هوودی» نام دارد، نه «آله» (اشتباه نسخه‌های پیشین).',
    riddlesTitle:'نمونه‌های تاپماچا (معما)', lullabyTitle:'نمونه‌هایی از هوودی (لالایی)', answer:'پاسخ', hide:'پنهان‌کردن پاسخ',
    pending:'معماها و هوودی‌ها: فقط همین چند نمونهٔ دارای منبع پیدا شد؛ مجموعهٔ کامل‌تر نیازمند کتاب چاپی است.' });
  Object.assign(DATA.tk.folklore.ui, {
    intro:'Bu bölümde diňe ýazuw ýa-da resmi çeşmede görlen tekst berilýär we çeşmesi her kartyň aşagynda bar (kitap düwmesi). Nakyllar türkmen ýygyndylaryndan, Türkmenistanyň döwlet saýtlaryndan we bir uniwersitet makalasyndan alyndy. Türkmen çaga aýdymynyň ady «hüwdi», «älle» däl (öňki neşirlerdäki ýalňyşlyk).',
    riddlesTitle:'Tapmaça mysallary', lullabyTitle:'Hüwdi mysallary', answer:'Jogaby', hide:'Jogaby ýap',
    pending:'Tapmaçalar we hüwdüler: diňe şu çeşmeli mysallar tapyldy; doly ýygyndy çap kitaby talap edýär.' });
  // nav subtitle / explore text: hüwdi instead of älle
  DATA.tk.nav.folklore = DATA.tk.nav.folklore;
  DATA.tk.subtitle.folklore = 'Atalar sözi, tapmaça, hüwdi we erteki';
  DATA.tk.explore.folklore = 'Türkmen şahyrana halk döredijiliginiň žanrlary: atalar sözi, tapmaça, hüwdi, erteki we dessan.';
  DATA.fa.subtitle.folklore = 'ضرب‌المثل، معما، هوودی و قصه';
  DATA.fa.explore.folklore = 'راهنمای ژانرهای ادبیات شفاهی ترکمن، همراه با نمونه‌هایی با منبع: ضرب‌المثل، معما، هوودی (لالایی)، قصه و دستان.';

  DATA.fa.calendar.ui.src.law = 'متن رسمی ترکمنی قانون کار (ماده ۸۱): فهرست تعطیلات و مناسبت‌ها، وزارت امور خارجه ترکمنستان';
  DATA.fa.calendar.ui.src.azaHol = 'ترکمنستان، سرزمین جشن‌ها: ۱۲ ژانویه و جشن گله (رادیو آزادلیق)';
  DATA.tk.calendar.ui.src.law = 'Zähmet kodeksiniň 81-nji maddasynyň resmi türkmen teksti: baýramlar we hatyra günleri sanawy, Türkmenistanyň DIM-i';
  DATA.tk.calendar.ui.src.azaHol = 'Türkmenistan – baýramçylyklar ýurdy: 12-nji ýanwar we Galla baýramy (Azatlyk radiosy)';

  // names: provenance note + source cards (update 1)
  DATA.fa.names.note = (DATA.fa.names.note || '') + ' بخشی از نام‌ها از فرهنگ «نام‌های ترکمن» در کتاب «ترکمن‌ها» (دکتر محمد قیلیچ، بورسا ۱۹۹۸) به‌نقل از turkmenkultur.com آمده؛ معناها خلاصهٔ توضیح ترکمنیِ آن منبع‌اند و مواردی که خلاصه‌کردنشان مطمئن نبود حذف شد.';
  DATA.tk.names.note = (DATA.tk.names.note || '') + ' Atlaryň bir bölegi turkmenkultur.com saýtynda getirilýän «Türkmenler» kitabyndaky (Dr. Mehmet Kılıç, Bursa 1998) türkmen at sözlüginden alyndy; manylar şol çeşmäniň düşündirişiniň gysgaldylan görnüşidir, ynamsyz gysgaldylanlary aýryldy.';
  DATA.fa.sources.categories.push({ icon:'check', title:'نام‌ها، مناسبت‌ها و هوودی (آپدیت ۱)', text:'نام‌های تازه از فرهنگ نام‌های ترکمن در turkmenkultur.com/menu/ml/adlar/turkmen (حروف A تا Y). نام ترکمنی رسمی همهٔ مناسبت‌های تقویم از متن ترکمنی ماده ۸۱ قانون کار در سایت سفارت ترکمنستان در بیشکک. نام لالایی ترکمنی «هوودی» از yashlar.gov.tm و ashgabat.in؛ نام «آله» اشتباه بود و اصلاح شد.' });
  DATA.tk.sources.categories.push({ icon:'check', title:'Atlar, baýramlar we hüwdi (täzelenme 1)', text:'Täze atlar turkmenkultur.com/menu/ml/adlar/turkmen sahypalaryndan (A-dan Y-a çenli). Senenamadaky baýramlaryň resmi türkmen atlary Bişkekdäki Türkmenistanyň ilçihanasynyň saýtyndaky Zähmet kodeksiniň 81-nji maddasynyň türkmen teksti boýunça. Türkmen çaga aýdymynyň ady «hüwdi» yashlar.gov.tm we ashgabat.in boýunça; «älle» ýalňyşlykdy we düzedildi.' });

  /* ---------- folklore sets (update 2): text copied from turkmenkultur.com/menu/ml/t3/*.html and other cited pages ---------- */
  // item: [Turkmen text, Persian translation, answer fa (riddles), answer tk (riddles), source id]
  const SETS = [
    { id:'riddles', kind:'riddle', src:'tkRid',
      title:['تاپماچا (ماتال): معماهای ترکمنی','Matal (tapmaça)'],
      intro:['در ترکمنی معما را «ماتال» هم می‌گویند: پرسشی استعاری دربارهٔ یک رویداد یا چیز که باید پاسخش را حدس زد. روی «پاسخ» بزنید.','Haýsy-da bolsa bir hadysa ýa-da zada degişli göçme manyda aýdylýan, jogabyny oýlap tapmaly soraga matal diýilýär.'],
      items:[
        ['Agzy gyzyl alamat, içi doly kyýamat, hassa girer sag çykar, bu nähili keramat.','دهانش سرخ نشانه، درونش پر از قیامت؛ بیمار وارد می‌شود، سالم بیرون می‌آید، این چه کرامتی است؟','تنور و نان','tamdyr bilen çörek'],
        ['Agyl doly akja guzy, ertir tursam ýokja guzy.','آغل پر از برّهٔ سفید، صبح که برخیزم برّه‌ای نیست.','ستاره','ýyldyz'],
        ['Atdan beýik, itden pes.','از اسب بلندتر، از سگ کوتاه‌تر.','زین','eýer'],
        ['Başy-darak, guýrugy-orak.','سرش شانه، دمش داس.','خروس','horaz'],
        ['Bir küýzede iki suw.','در یک کوزه دو آب.','تخم‌مرغ','ýumurtga'],
        ['Bir zadym bar, daşa ursam döwülmeýär, suwa ursam döwülýär.','چیزی دارم؛ به سنگ بزنم نمی‌شکند، به آب بزنم می‌شکند.','کاغذ','kagyz'],
        ['Daşy-oýunjak, içi-möjek.','بیرونش اسباب‌بازی، درونش حشره.','پیله','pile'],
        ['Dona bürenmez, göze görünmez.','لباس نمی‌پوشد و دیده نمی‌شود.','صدا','ses'],
        ['Gara güjük ýatyr-üýrmezek, öýe adam goýbermezek.','توله‌سگ سیاه خوابیده، پارس نمی‌کند، اما کسی را به خانه راه نمی‌دهد.','قفل','gulp'],
        ['Gider-geler, ýol almaz.','می‌رود و می‌آید اما راه نمی‌رود.','تاب (گهواره)','sallançak'],
        ['Eýesinden ýüz görmez, adam hatyryn bilmez.','از صاحبش رو نمی‌بیند و رودربایستی با آدم ندارد.','ترازو','terezi'],
        ['Enem-atam bir ýüzük berdi, ýere gömsem çüýremez, gora gömsem tütemez.','پدر و مادرم انگشتری دادند؛ در خاک بگذارم نمی‌پوسد، در آتش بگذارم دود نمی‌کند.','نام آدم','adam ady'],
        ['Iýmäge heserlije, on bir gat ak donluja.','خوردنش آرزوست، یازده لایه لباس سفید پوشیده.','پیاز','sogan'],
        ['Iki enäniň on ogly, hemmesiniň ady bar.','دو مادر ده پسر دارند و همه نام دارند.','ده انگشتِ دو دست','iki eliň on barmagy'],
        ['Iň güýçsüziň güýçlülerden hökmi zor.','ناتوان‌ترین، حکمش از زورمندان بیشتر است.','کودک','çaga'],
        ['Kuwwaty-ýel, ölümi-suw.','نیرویش باد است و مرگش آب.','آتش','ot'],
        ['Men gidýärin, ol galýar.','من می‌روم، او می‌ماند.','ردپا','yz'],
        ['Suwda biter, suwda ýiter.','در آب می‌روید، در آب گم می‌شود.','نمک','duz'],
        ['Ýaş gününde orak ýaly, orta ýaşda çörek ýaly.','در جوانی مثل داس، در میانسالی مثل نان.','ماه','aý'],
        ['Ýeri ak, tohumy gara; el bilen ekerler, dil bilen orarlar.','زمینش سفید، بذرش سیاه؛ با دست می‌کارند و با زبان درو می‌کنند.','نوشته (خط)','hat'],
        ['Gulagy eşegiňki ýaly, aýagy itiňki ýaly, özi hem geçi ýaly boker.','گوشش مثل الاغ است، پایش مثل سگ و مثل بز می‌جهد (می‌دود).','خرگوش','towşan','orientRid'],
        ['Tomusda ýaldyrar – gyşda poslar.','تابستان می‌درخشد، زمستان زنگ می‌زند.','داس','orak','orientRid']
      ]},
    { id:'huwdi', kind:'verse', src:'tkHuw',
      title:['هوودی: لالایی‌های کنار گهواره','Hüwdi'],
      intro:['هوودی‌ها بیشتر کنار گهواره (سالانچاک) برای خواباندن کودک خوانده می‌شوند. ترجمه‌های فارسی آزادِ من‌اند.','Hüwdüler çagany uklatmak üçin, esasan, sallançak ýanynda aýdylýan aýdymlardyr.'],
      items:[
        ['Aýlanaýyn adyňdan,\nSallançakda badyňdan,\nBezenip ata çyksaň,\nÇykarmagyn ýadyňdan.\nHuwwa-huw...','قربان نامت، قربان (تکان) گهواره‌ات؛ وقتی آراسته بر اسب سوار شوی، مرا از یاد مبر. هووا-هو… (ترجمهٔ آزاد)'],
        ['Allaý-allaý edeýin,\nBaga sallan edeýin,\nBagyň gyzyl gülüni,\nSaňa gurban edeýin.','الای‌الای می‌کنم، در باغ برایت تاب می‌اندازم؛ گلِ سرخِ باغ را قربانت می‌کنم. (ترجمهٔ آزاد)'],
        ['Allaý-allaý el biter,\nNar agaja gül biter,\nÜç ýaşyna baranda,\nSaýrap duran dil biter.','الای‌الای، دست درمی‌آید؛ بر درخت انار گل می‌روید؛ وقتی سه ساله شوی، زبانِ سخن‌گو درمی‌آید. (ترجمهٔ آزاد)'],
        ['Meniň gülüm näzikdir,\nUrmak, sökmek ýazykdyr,\nHer ýaňagyn ysgasaň,\nAlty aýlyk azykdyr.','گل من نازک است؛ زدن و دشنام‌دادن گناه است؛ اگر هر گونه‌اش را ببویی، توشهٔ شش ماه است. (ترجمهٔ آزاد)'],
        ['Meniň ballym ýatypdyr,\nGyzyl güle batypdyr,\nGyzyl gülüň tikeni\nGül aýagyna batypdyr.','عسلِ من خوابیده، در گل سرخ فرو رفته؛ خارِ گل سرخ به پای گل خلیده. (ترجمهٔ آزاد)'],
        ['Allalasam, aý seni,\nSöýsem, göwnüm jaý seni,\nGyş gyşlasam, ýaz seni\nGünde söýsem, az seni.','لالایی‌ات می‌کنم ای ماه؛ دوستت بدارم دلم آرام می‌گیرد؛ هر روز دوستت بدارم هم کم است. (ترجمهٔ آزاد، بخشی نامطمئن)'],
        ['Mergen bolup, guş ursaň,\nDagdan keýik düşürseň,\nDüýä ýükläp getirip,\nKebap edip bişirseň.','اگر تیرانداز شوی و پرنده بزنی، از کوه آهو شکار کنی، بر شتر بار کنی و بیاوری و کباب بپزی… (آرزو برای کودک؛ ترجمهٔ آزاد)'],
        ['Aýlanar-a, aýlanar,\nÖkdelikde saýlanar,\nMeniň balam ulalyp,\nSöýenine öýlener.','«آیلانار‌آ، آیلانار» (تکیه‌کلام آوازی)؛ در ماهری برگزیده می‌شود؛ فرزندم که بزرگ شود با آن که دوست دارد ازدواج می‌کند. (ترجمهٔ آزاد)','','','inash'],
        ['Toýda tymar bagym sen,\nGünde gülüstanym sen.','در عروسی تعویذِ منی، هر روز گلستانِ منی. (ترجمه بر پایهٔ برگردان روسی منبع)','','','orientHuw']
      ]},
    { id:'kusht', kind:'verse', src:'tkKusht',
      title:['کوشت‌دپمه: آواز و رقص عروسی (میراث یونسکو ۲۰۱۷)','Küştdepmele (Kuştdepdi)'],
      intro:['بندهایی که همراه با پاکوبی در عروسی خوانده می‌شود؛ آیین «کوشت‌دپدی» در ۲۰۱۷ در فهرست نمایندهٔ یونسکو ثبت شد.','Küştdepmeler tans hereketleri bilen utgaşdyrylyp aýdylýar; «Kuştdepdi» 2017-nji ýylda ÝUNESKO-nyň wekilçilikli sanawyna girizildi.'],
      items:[
        ['Başlalyň-a, başlalyň,\nKüşt depmäge başlalyň.\nGazal aýdyp, küşt depip,\nGöwünleri hoşlalyň.','شروع کنیم، شروع کنیم؛ پاکوبی را آغاز کنیم؛ غزل بخوانیم و پا بکوبیم و دل‌ها را شاد کنیم. (ترجمهٔ آزاد)'],
        ['Gapyňyzda atly bolsun,\nSaçagyňyz etli bolsun.\nTöý tutýan jemagatlar,\nToýuňyz gutly bolsun.','در خانه‌تان اسب باشد، سفره‌تان پرگوشت باد؛ ای جماعتِ جشن‌گیر، جشنتان مبارک. (ترجمهٔ آزاد)'],
        ['Daglara gar ýapylsyn,\nÇöllere nur sepilsin.\nÝaş ýigidiň toýunda,\nÝadaman küşt depilsin.','بر کوه‌ها برف بنشیند، بر صحراها نور بپاشد؛ در جشنِ جوان، بی‌خستگی پاکوبی شود. (ترجمهٔ آزاد)'],
        ['Haly bar-a, haly bar,\nHaly üstünde göli bar.\nGeliň, görüň obamyz\nZähmetsöýer ili bar.','قالی هست، قالی؛ روی قالی گل دارد؛ بیایید ببینید، دهکدهٔ ما مردمی زحمت‌دوست دارد. (ترجمهٔ آزاد)']
      ]},
    { id:'lale', kind:'verse', src:'tkLale',
      title:['لاله‌ها: آوازهای زنانه','Läleler'],
      intro:['لاله‌ها را عروس‌ها و دختران می‌سرایند و در آن‌ها رویداد، سرگذشت یا آرزویی بیان می‌شود.','Läleler gelin-gyzlar tarapyndan döredilip, olarda belli bir waka, aýratyn başdan geçirmeler, isleg-arzuwlar beýan edilýär.'],
      items:[
        ['Bu daglar bolmasaýdy,\nGeýenim solmasaýdy,\nDeň-duşlarym, aý gyzlar,\nAýralyk bolmasaýdy.','کاش این کوه‌ها نبود، لباسم رنگ نمی‌باخت؛ ای همسالانم، ای دختران، کاش جدایی نبود. (ترجمهٔ آزاد)'],
        ['Suw akar, kenar gider,\nŞu janym ýanar gider,\nDegmäň gyzyň göwnüne,\nMyhmandyr, gonar gider.','آب می‌رود، کنار می‌ماند؛ جانم می‌سوزد و می‌رود؛ دل دختر را نیازارید، مهمان است، شبی می‌ماند و می‌رود. (ترجمهٔ آزاد)'],
        ['Dutaryň perde-perde,\nHer perdesi bir ýerde,\nÝagşy gyz ýaman ýerde,\nMen ýanaýyn şol derde.','دوتارت پرده‌پرده است، هر پرده‌اش در جایی؛ دختر نیک در جای بد؛ من بسوزم از آن درد. (ترجمهٔ آزاد)'],
        ['Suwa gitdim tas bilen,\nSuw aldym höwes bilen,\nÝary ýardan aýranyň,\nGüni geçsin ýas bilen.','با کاسه به سراغ آب رفتم، با اشتیاق آب برداشتم؛ آن که یار را از یار جدا می‌کند، روزگارش به سوگ بگذرد. (ترجمهٔ آزاد)']
      ]},
    { id:'monj', kind:'verse', src:'tkMonj',
      title:['مونجوغاتدی: بندهای کوتاه بهاری و عاشقانه','Monjugatdylar'],
      intro:['چهارپاره‌های کوتاه؛ بخشی دربارهٔ نوروز و بهار.','Gysga dörtlükler; käbiri Nowruz we bahar barada.'],
      items:[
        ['Nowruz geldi, ýaz geldi,\nGarga geldi, gaz geldi,\nOturan adamlara\nBilbilden owaz geldi.','نوروز آمد، بهار آمد؛ زاغ آمد، غاز آمد؛ برای نشستگان آوازِ بلبل آمد. (ترجمهٔ آزاد)'],
        ['Çeşme-çeşme, çeşdim ýar,\nSalam berip geçdim, ýar!\nŞu salamym almasaň,\nMen hem senden geçdim, ýar!','چشمه‌چشمه، چشیدم ای یار؛ سلام کردم و گذشتم؛ اگر این سلامم را پاسخ ندهی، من هم از تو گذشتم، ای یار. (ترجمهٔ آزاد)']
      ]},
    { id:'dilek', kind:'line', src:'tkDilek',
      title:['آلقیش و دیلک: دعاهای خیر','Alkyşlar we dilegler'],
      intro:['جمله‌های دانایانه که به شنونده روحیه می‌دهند.','Adama ruhy duýgy berýän, onda hyruç, joşgun döredýän dana sözlemler.'],
      items:[
        ['Alnyň açyk bolsun!','پیشانی‌ات باز (بختت گشاده) باد!'],['Başyňyz dik bolsun!','سرتان بلند باد!'],['Biriň müň bolsun!','یکی‌ات هزار شود!'],['Gözüň aýdyň!','چشمت روشن!'],
        ['Ýoluň ak bolsun, ýodaşyň Hak!','راهت گشاده باد و همراهت حق!'],['Ýaşyň uzak bolsun!','عمرت دراز باد!'],['Dünýä dursun, Türkmenistan dursun!','دنیا بپاید، ترکمنستان بپاید!'],
        ['Giden ýerinden getirsin, eden işin bitirsin!','از هر جا که رفتی (برکت) بیاوری و هر کاری کنی به انجام برسد!'],['Jany sagyň maly tükel!','جانت سالم، مالت کامل!'],['Watanymyz abat dursun!','وطنمان آباد بماند!'],['Aýdanyň gelsin!','آنچه آرزو می‌کنی تحقق یابد!'],['Gadamyň batly bolsun!','گامت استوار باد!']
      ]},
    { id:'yrym', kind:'line', src:'tkYrym',
      title:['یریم و ینانچ: باورهای عامیانه','Yrym we ynançlar'],
      intro:['باورهای مردم؛ نه توصیهٔ علمی بلکه بخشی از فرهنگ.','Halk ynançlary; ylmy maslahat däl, medeniýetiň bir bölegi.'],
      items:[
        ['Çaýda dik duran boýçy görülse myhmana garaşylýar.','اگر در چای ساقهٔ ایستادهٔ چای دیده شود، باید منتظر مهمان بود.'],
        ['Iýip oturan nanyňy gutarman ýene-de bir bölek nan döwüp alsaň myhmana garaşylýar.','اگر نانِ در حال خوردن را تمام نکرده تکهٔ دیگری بشکنی، منتظر مهمان باش.'],
        ['Eliň aýasy gijese pul düşjekdir.','اگر کف دستت بخارد، پولی می‌رسد.'],
        ['Çaganyň dişi gaçanda, täze diş dogry çyksyn diýip, goýun agylda gömülýär.','وقتی دندان کودک می‌افتد، آن را در آغل گوسفند دفن می‌کنند تا دندان تازه درست درآید.'],
        ['Täze gelin gaýyn öýüne ilki gelende sag aýagy bilen girýär, onuň eli ýagdyr uny bulanylýar.','عروس تازه که نخستین بار به خانهٔ شوهر می‌آید با پای راست وارد می‌شود و دستش به روغن و آرد آغشته می‌شود.']
      ]},
    { id:'yan', kind:'verse', src:'tkYan',
      title:['یانیلتماچ: ورزش زبان','Ýaňyltmaçlar'],
      intro:['برای ورزش زبان کودکان و تمرین تلفظ واژه‌های دشوار.','Çagalaryň dilini ýençmäge, çylşyrymly sözleri dogry aýtmaga kömek edýär.'],
      items:[
        ['Birje çemçe şorja serçe çorbasy.','فقط یک قاشق از سوپ شورِ گنجشک. (تمرین ç/ş)'],
        ['Sary sygryň sag şahy çep şahyna,\nçep şahy sag şahyna.','شاخ راستِ گاو زرد به شاخ چپش، شاخ چپش به شاخ راستش.'],
        ['Ilerden bir goç gelýär,\nsag şahyn sol taşlap, sol şahyn sag taşlap.','از جلو قوچی می‌آید، شاخ راستش را به چپ می‌اندازد و شاخ چپش را به راست.']
      ]},
    { id:'ependi', kind:'verse', src:'tkShorta',
      title:['شورتا سوزلر: لطیفه‌های اپندی (ملانصرالدین)','Şorta sözler (Ependi)'],
      intro:['«اپندی» همان شخصیت مشهور ملانصرالدین در لطیفه‌های ترکمن است. در اینجا فقط نقطهٔ پایانیِ یکی از لطیفه‌ها آمده.','«Ependi» türkmen degişmelerinde Nasreddiniň ady.'],
      items:[
        ['Bu çorbanyň çorbasynyň çorbasy.','پایانِ لطیفهٔ «سوپِ سوپ»: دهقانی خرگوشی به اپندی هدیه می‌دهد؛ هفته‌ها بعد همسایه‌ها و همسایهٔ همسایه‌ها به‌نام او می‌آیند و اپندی هر بار سوپ را رقیق‌تر می‌کند تا در پایان کاسه‌ای آب می‌گذارد و می‌گوید: «این سوپِ سوپِ سوپ است!»']
      ]}
  ];
  ['fa','tk'].forEach((l, i) => {
    DATA[l].folklore.sets = SETS.map(st => ({ id:st.id, kind:st.kind, title:st.title[i], intro:st.intro[i],
      items: st.items.map(it => ({ text:it[0], trans: i === 0 ? it[1] : '', answer: i === 0 ? (it[2] || '') : (it[3] || ''), srcs: it[4] || st.src })) }));
  });
  delete DATA.fa.folklore.riddles; delete DATA.tk.folklore.riddles; delete DATA.fa.folklore.huwdi; delete DATA.tk.folklore.huwdi;
  Object.assign(DATA.fa.folklore.ui, { setsNote:'همهٔ بندها و معماها بدون تغییر از صفحه‌های بخش فولکلور سایت turkmenkultur.com (منبع زیر هر کارت) نقل شده‌اند؛ ترجمه‌های فارسی آزاد و از من‌اند.' });
  Object.assign(DATA.tk.folklore.ui, { setsNote:'Ähli setirler we matallar turkmenkultur.com saýtynyň folklor sahypalaryndan üýtgedilmän getirildi (çeşme her kartyň aşagynda).' });

  DATA.fa.sources.categories.push({ icon:'check', title:'فرهنگ شفاهی از turkmenkultur.com (آپدیت ۲)', text:'معماها (ماتال)، هوودی، کوشت‌دپمه، لاله، مونجوغاتدی، آلقیش و دیلک، یریم و ینانچ، یانیلتماچ و شورتا سوزلر از صفحه‌های بخش «folklor» همین سایت (turkmenkultur.com/menu/ml/t3/…) با ذکر منبع زیر هر کارت. ترجمه‌های فارسی آزاد و از من است و بازبینی بومی می‌خواهد.' });
  DATA.tk.sources.categories.push({ icon:'check', title:'turkmenkultur.com-dan halk döredijiligi (täzelenme 2)', text:'Matallar, hüwdiler, küştdepmeler, läleler, monjugatdylar, alkyşlar we dilegler, yrym we ynançlar, ýaňyltmaçlar we şorta sözler şu saýtyň «folklor» bölüminiň sahypalaryndan (turkmenkultur.com/menu/ml/t3/…) alyndy, çeşme her kartyň aşagynda görkezilýär. Parsça terjimeler erkin we meniňkidir, ene dilli gürleýjiniň barlagyny talap edýär.' });

  /* ---------- proverbs, update 3: from turkmenkultur.com/menu/ml/t3/nakyl.html ---------- */
  const NAKYL = [
    ['Agaç miwe berse, başy aşak.','درخت اگر میوه دهد، سرش پایین می‌آید.'],
    ['Ajysy bolmadygyň, süýjüsi bolmaz.','آنچه تلخی ندارد شیرینی هم ندارد.'],
    ['Az bolsun, uz bolsun.','کم باشد اما نیکو باشد.'],
    ['Akyl ýaşda bolmaz, başda bolar.','خرد در سن نیست، در سر است.'],
    ['Atylan ok daşdan gaýtmaz.','تیرِ رهاشده از سنگ برنمی‌گردد.'],
    ['Baryny beren uýalmaz.','آن‌که هرچه دارد می‌دهد شرمنده نمی‌شود.'],
    ['Başa bela iki barmak dilden geler.','بلا بر سر از دو انگشتِ زبان می‌آید.'],
    ['Bedew-jul içinde, göwher kül içinde.','اسب نژاده زیر جُل است و گوهر زیر خاکستر.'],
    ['Bir elde iki garpyz tutdurmaz.','در یک دست دو هندوانه نمی‌گنجد.'],
    ['Bir ýazykdan är ölmez, hiç ýazyksyz är bolmaz.','مرد از یک خطا نمی‌میرد و مرد بی‌خطا هم نیست.'],
    ['Dagy-daşy ýel pozar, adam arasyny söz pozar.','کوه و سنگ را باد خراب می‌کند و رابطهٔ آدم‌ها را سخن.'],
    ['Dil bilen orak orsaň, bil agyrmaz.','اگر با زبان درو کنی کمرت درد نمی‌گیرد.'],
    ['Düýe garrasa, köşegine eýerer.','شتر پیر شود از پی بچه‌اش می‌رود.'],
    ['Enesini gör-de gyzyny al, gyrasyny gör-de bizini al.','مادر را ببین و دخترش را بگیر؛ لبه را ببین و درفش را بخر.'],
    ['Är-aýalyň uruşy-ýaz gününiň ýagyşy.','دعوای زن و شوهر باران روز بهار است.'],
    ['Gamyşy gowşak tutsaň, el gyýar.','نی را سست بگیری دست را می‌برد.'],
    ['Geňeşli don gysga bolmaz.','جامهٔ با مشورت دوخته کوتاه نمی‌شود.'],
    ['Gorkana goşa görner.','ترسو همه‌چیز را دوتا می‌بیند.'],
    ['Göwni açygyň-ýoly açyk.','آن‌که دلش باز است راهش باز است.'],
    ['Göge tüýkürseň, ýüzüňe düşer.','به آسمان تف بیندازی به رویت می‌افتد.'],
    ['Gurt gören itiň agzy bir bolar.','دهانِ سگی که گرگ دیده یکی می‌شود (همه یک‌صدا می‌شوند).'],
    ['Gülme goňşyňa, geler başyňa.','به همسایه نخند، بر سر خودت می‌آید.'],
    ['Hasaply dost uzak gider.','دوستِ حساب‌شده دور می‌رود.'],
    ['Iki at depişer, arasynda eşek öler.','دو اسب لگد می‌پرانند و الاغِ میانشان می‌میرد.'],
    ['Ilim-günüm bolmasa, Aýym, Günüm dogmasyn.','اگر ایل و مردمم نباشند، ماهم و خورشیدم هم برنیاید.'],
    ['It üýrer, kerwen geçer.','سگ پارس می‌کند و کاروان می‌گذرد.'],
    ['Kesmeseň, ganamaz.','نبُری، خون نمی‌آید.'],
    ['Mert özünden görer, namart-ýoldaşyndan.','مرد (گناه را) از خود می‌بیند و نامرد از همراهش.'],
    ['Myhman-ataňdan uly.','مهمان از پدرت بزرگ‌تر است.'],
    ['Myhman birinji gün-gyzyl, ikinji gün-kümüş, üçünji gün-mis, dördünji gün-pis.','مهمان روز اول زر است، روز دوم نقره، روز سوم مس و روز چهارم بد.'],
    ['Serçeden gorkan-dary ekmez.','آن‌که از گنجشک بترسد ارزن نمی‌کارد.'],
    ['Süýtde agzy bişen-suwy üfläp içer.','آن‌که دهانش از شیر سوخته آب را فوت کرده می‌نوشد.'],
    ['Tyg ýarasy biter, söz ýarasy bitmez.','زخم شمشیر خوب می‌شود، زخم زبان خوب نمی‌شود.'],
    ['Ýekäniň çaňy çykmaz.','از یک نفر گرد و خاک بلند نمی‌شود.'],
    ['Ýorganyňa görä aýak uzat.','به اندازهٔ لحافت پا دراز کن.'],
    ['Ýigide müň dürli hünär hem az.','برای جوان‌مرد هزار هنر هم کم است.'],
    ['Ýagşy niýet-ýarym döwlet.','نیت نیک نیمی از دولت است.'],
    ['Ýalançy ýarymaz, ogry baýymaz.','دروغگو رونق نمی‌گیرد، دزد ثروتمند نمی‌شود.'],
    ['Zeleliň ýaryndan gaýtmak hem peýda.','برگشتن از نیمهٔ زیان هم سود است.'],
    ['Ýigidi dostundan tana.','جوان‌مرد را از دوستش بشناس.'],
    ['Il agzyny ýygyp bolmaz, çelek agzyny bogup bolmaz.','دهان مردم را نمی‌توان جمع کرد، دهان سطل را نمی‌توان بست.'],
    ['Gazana ýanaşsaň, garasy ýokar.','به دیگ نزدیک شوی سیاهی‌اش می‌چسبد.'],
    ['Ýatan öküze iým ýok.','برای گاو نرِ خوابیده علوفه نیست.'],
    ['Öli arslandan-diri syçan.','موشِ زنده از شیرِ مرده بهتر است.'],
    ['Pis pisi tapar, suw-pesi.','بد، بد را می‌یابد و آب، گودی را.'],
    ['Ogrulyk eden uýalmaz, üstüne gelen uýalar.','دزد شرم نمی‌کند، آن‌که سرش برسد شرم می‌کند.'],
    ['Haýwan ysgaşa-ysgaşa, adam soraşa-soraşa.','جانور با بوییدن و آدم با پرسیدن (به هم می‌رسند).'],
    ['Ata kesbi-ogla halal.','پیشهٔ پدر بر پسر حلال است.']
  ];
  ['fa','tk'].forEach((l, i) => {
    const have = new Set(DATA[l].folklore.proverbs.map(x => x.text));
    NAKYL.forEach(x => { if(!have.has(x[0])) DATA[l].folklore.proverbs.push({ text:x[0], trans: i === 0 ? x[1] : '', srcs:'tkNakyl' }); });
  });
  const NAKYL_UNTRANSLATED = ['Azapsyz ýeriň ady ýok.',
    'Aýrylmaz goňşyňa unutgysyz söz aýtma.',
    'Akylla-yşarat, akmaga-kötek.',
    'Arkaly köpek gurt alar.',
    'At alma, eýer al.',
    'At ürken ýerinden, är gorkan ýerinden.',
    'Bijeli oglan aglamaz.',
    'Bir okana bar, bir hem dokana.',
    'Bu günki serçe düýnki serçä “jik-jik” öwreder.',
    'Çagyrylan ýere irinme, çagyrylmadyk ýerde görünme.',
    'Çala eşiden çatma ýykar, öte eşiden-öý.',
    'Çekişmän, bekişmez.',
    'Dagdan arkasy bolanyň, daşdan ýüregi bolar.',
    'Don biçerler ýeňli-ýanly, dost tutarlar öňli-soňly.',
    'Duşmany saklama, syryň bilmesin.',
    'Duşmanyň peşeçe bolsa, pilçe gör.',
    'Düýä münüp, hataba bukma.',
    'Galpyň gazany gaýnamaz, gaýnasa-da baýnamaz.',
    'Göwün göwünden suw içer, gamyş-bogundan.',
    'Guýma gursak bolmasa, dürtme gursak neýlesin.',
    'Kör hasasyn bir aldyrar.',
    'Kötek güýçli bolsa, ýüň gazyk ýere gider.',
    'Maslahatly biçilen don gysga bolmaz.',
    'Mellekçä ýer berseň, ýer eýesini ýerden çykarar.',
    'Oglan howlugar, tudana wagtynda bişer.',
    'Ody özüňe bas, ötmese-kesekä.',
    'Öwrenişen ýagy-uruşmaga ýagşy.',
    'Öňüm bolandan, soňum bolsun.',
    'Soňky tüýkülik-sakgal ezmez.',
    'Sorap berenden-urup ber.',
    'Süýde siňe seretseň, gan görner.',
    'Sygryň şahyna ursaň, endamy syzlar.',
    'Tapan-begener, tanan-alar.',
    'Tomus depesi gaýnamadygyň-gyş gazany gaýnamaz.',
    'Uly başlar, kiçi işlär.',
    'Ýykylan göreşden goýmaz.',
    'Ýakma bişersiň, gazma düşersiň.',
    'Ýamandan boýuňy satyn al.'];
  // Persian translation deliberately left empty: a native speaker should decide the wording later.
  ['fa','tk'].forEach(l => {
    const have = new Set(DATA[l].folklore.proverbs.map(x => x.text));
    NAKYL_UNTRANSLATED.forEach(t => { if(!have.has(t)) DATA[l].folklore.proverbs.push({ text:t, trans:'', srcs:'tkNakyl' }); });
  });
  DATA.fa.sources.categories.push({ icon:'check', title:'ضرب‌المثل‌ها از turkmenkultur.com (آپدیت ۳)', text:'همهٔ نقیل‌های صفحهٔ «Nakyllar» همین سایت (turkmenkultur.com/menu/ml/t3/nakyl.html) افزوده شد. حدود ۴۸ مورد ترجمهٔ فارسی (از من) دارند؛ ۳۷ مورد دیگر عمداً بدون ترجمه مانده‌اند تا گویشور بومی تصمیم بگیرد.' });
  DATA.tk.sources.categories.push({ icon:'check', title:'turkmenkultur.com-dan nakyllar (täzelenme 3)', text:'Şu saýtyň «Nakyllar» sahypasyndaky ähli nakyllar (turkmenkultur.com/menu/ml/t3/nakyl.html) goşuldy. 48-iniň parsça terjimesi bar (meniňki), galan 37-si bilkastlaýyn terjimesiz galdy — ene dilli gürleýji karar bersin.' });

  /* ---------- music, update 4: dutar facts + legends of famous pieces (turkmenkultur.com/menu/mr/t1/dutar1.html, dutar5.html) ---------- */
  const DUTAR_FACTS = [
    ['دوتار (تامدیرا): ساختار و پرده‌ها','Tamdyra (dutar): gurluşy we perdeleri',
      'به نوشتهٔ سایت، «تامدیرا» و «دوتار» یک ساز با دو نام‌اند. سه بخش دارد: کدی (کاسه، از چوب توت)، ساپ (دسته، از چوب «erik») و گاپاک (سینه). دو سیم دارد و ۱۳ پرده که هر کدام نیم‌پرده فاصله دارند؛ نام سنتی پرده‌ها (Baş perde، Nowai perde، Ýokarky açyk perde، Ýokarky kyýamat perde، Bäşinji perde، Geňzu perde، Aşaky açyk perde، Türkmen perde، Ogurja perde، Göni perde، Aşaky perde، Kiçi şirwan perde، Uly şirwan perde). کوک رایج چهارم است (a–e).',
      'Saýtyň ýazmagyna görä, «tamdyra» we «dutar» bir sazyň iki ady. Üç bölegi bar: kädi (tut agajyndan), sap (erik agajyndan) we gapak. Iki kirşi we 13 perdesi bar, her perde ýarym ton aralykda; perdeleriň köne atlary: Baş perde, Nowai perde, Ýokarky açyk perde, Ýokarky kyýamat perde, Bäşinji perde, Geňzu perde, Aşaky açyk perde, Türkmen perde, Ogurja perde, Göni perde, Aşaky perde, Kiçi şirwan perde, Uly şirwan perde. Adaty sazlama kwarta (a–e).','tkDutar1'],
    ['استاد گولگلدی و شاگردانش','Gulgeldi ussa we şägirtleri',
      'گولگلدی استاد (۱۸۳۴ تا ۱۸۸۴) سازنده و آموزگار دوتار بود و به روایت منبع استاد آمانگلدی گونه‌بِگ (۱۸۳۳ تا ۱۸۷۹)، کِل باغشی (۱۸۵۰ تا ۱۹۲۳) و تاچمامد سوهانگولی (۱۸۶۵ تا ۱۹۴۲) بوده است. گفته می‌شود در گؤکدپه هفت مقام هر کدام را یک استاد ساخت؛ «سالتیک‌لار» از نمونه‌هاست.',
      'Gulgeldi ussa (1834–1884) tamdyra ýasaýjy we halypa bolup, çeşmä görä Amangeldi Göne begiň (1833–1879), Kel bagşynyň (1850–1923) we Täçmämed Suhangulynyň (1865–1942) halypasy bolupdyr. Gökdepede ýedi mukamyň her birini bir ussat döredipdir diýilýär; «Saltyklar» mysal.','tkDutar1']
  ];
  const LEGENDS = [
    ['Dilber','دیلبر','روایت می‌گوید جوانی به نام «آنناگیلیج» شعر «دیلبر» را برای دختری به نام آنناگل ساخت که پدرش او را پیشاپیش به ثروتمندی داده بود؛ هالی باغشی آن را به آواز درآورد و شاگردش ساهی جپباروف به روزگار ما رساند.','Rowaýata görä Annagylyç atly ýigit «Dilber» goşgusyny, kakasy baýa söz beren Annagül üçin döredipdir; Hally bagşy ony aýdyma öwrüpdir, şägirdi Sahy Jepbarow bolsa biziň günlerimize ýetiripdir.'],
    ['Ýandym (Gara däli Gökleň)','یاندیم (قره‌دالی گکلن)','به روایت سایت، این قطعه نخست «مقام سوگِ قره‌دالی گکلن» بوده است: سه بخش دارد (کوچ اجباری، سال‌های اسارت در خیوه، و آوارگی نوازنده) و به دههٔ ۱۸۲۰ برمی‌گردد که محمدرحیم‌خان خیوه مردم گاری‌قلعه و آرکاچ را به خیوه کوچاند. بعدها با نام «یاندیم» روی صفحه آمد.','Saýtyň ýazmagyna görä, bu saz ilki «Gara däli Gökleňiň ýas mukamy» bolupdyr; üç bölegi bar (sürgün, Hiwadaky ýesirlik, sazandanyň gapy gezişi) we 1820-nji ýyllardaky Muhammet Rahym hanyň Garrygala we Arkaç türkmenlerini Hiwa sürmegine degişli. Soň plastinkada «Ýandym» ady bilen çykypdyr.'],
    ['Ussadym','اوستادیم (استادم)','کِل باغشی که حدود هفت سال شاگرد آمانگلدی گونه‌بِگ بود، این قطعه را به استادش پیشکش کرد؛ ضرب آن را به تاب‌خوردن گهواره و صحنهٔ زن ترکمن که کودکان را «هوودی» می‌خواند مانند می‌کنند. سایت روایت امتحان شاگردی را هم می‌آورد که در آن الله‌بردی (کِل خان) استاد را راضی کرد و پاتا گرفت.','Kel bagşy Amangeldi Göne bege ýedi ýyla golaý şägirt bolup, bu sazy halypasyna bagyşlapdyr; sazyň kakuwy sallançagyň badyna meňzedilýär. Saýt şägirdiň synagdan geçip pata alan wakasyny hem getirýär.'],
    ['Goňurbaş','گونورباش','طبق روایت، شوکور باغشی پس از رهاندن برادرش از زندان مامت‌یارخان در راه بازگشت دید که گونورباش‌ها (گیاهی) در باد موج می‌زنند و از همین موج و شادی‌اش از آزادی برادر، قطعه‌ای ساخت؛ ماجرای او در فیلم «شوکور باغشی» آمده است.','Rowaýata görä, Şükür bagşy agasyny Mämmetýar hanyň zyndanyndan boşadyp gaýdanda, şemalda tolkunýan goňurbaşlardan we begenjinden bu sazy döredipdir; wakasy «Şükür bagşy» filminde bar.'],
    ['Hajygolak','حاجی‌گولاک','حاجی ساز از خدمت به دربار الله‌قلی‌خان خیوه سر باز زد؛ خان قوم او را اسیر کرد و حاجی با شرط هفت سال خدمت و تربیت یک شاگرد کوتاه آمد. خان بعدها خشمگین انگشتانش را برید؛ شاگرد قطعه را پراکند و به نام حاجی و ناتوانی‌اش «حاجی‌گولاک» نامیدند.','Hajy sazanda Allaguly hanyň köşk sazandasy bolmakdan ýüz öwrüpdir; han halkyny ýesir alypdyr, Hajy ýedi ýyl hyzmat we bir şägirt ýetişdirmegi wada beripdir. Han soň onuň barmaklaryny kesipdir; şägirdi sazy ýaýradypdyr we ol «Hajygolak» atlandyrylypdyr.'],
    ['Berkeli çokaý','بِرکلی چوقای','به روایت سایت، در نبرد ترکمنان به رهبری قوشوت‌خان با محمدامین‌خان خیوه در سرخس (حدود ۱۸۵۵) استادی به نام بِرکلی چوقای‌های چرمی بسیار دوخت؛ زنان هم در جنگ شرکت کردند. قطعه «بِرکلی چوقای» به یادش ساخته شد.','Saýtyň ýazmagyna görä, Gowşut han bilen Mädemin hanyň Sarahsdaky söweşinde (1855-nji ýyl töweregi) Berkeli çokaýçy köp çokaý tikipdir; zenanlar hem söweşe gatnaşypdyr. «Berkeli çokaý» sazy şoňa bagyşlanypdyr.'],
    ['Ybraýym şadilli','ابراهیم شادیلی','سال ۱۸۶۰ نوربردی‌خان آخال و ابراهیم‌خان بجنورد پیمان بستند؛ سردار دیکمه پیمان شکست و اسیر شد. شوکور باغشی با ساخت قطعه‌ای به نام «ابراهیم شادیلی» خان را راضی کرد و او اسیران را آزاد کرد.','1860-njy ýylda Ahal hany Nurberdi han bilen Bejnurt hany Ybraýym han ylalaşypdyr; Dykma serdar ylalaşygy bozup ýesir düşüpdir. Şükür bagşy «Ybraýym şadilli» sazyny döredip hany ynandyrypdyr we ýesirler boşadylypdyr.'],
    ['Atçapar','آتچاپار','کِل باغشی در جشنی (کازی‌اویون) غافلگیر حملهٔ شبانهٔ دشمنان شد و بسیاری کشته شدند. او بعد از آن شب قطعهٔ سوگوار «آتچاپار» را ساخت؛ بعدها از همین ملودی آواز «آغلارین» و آواز بر شعر زلیلی پدید آمد.','Kel bagşy toýda duýdansyz ýagy çozuşyna duçar bolupdyr we köp adam wepat bolupdyr; soň «Atçapar» atly gaýgyly sazy döredipdir. Soň şu sazdan «Aglaryn» aýdymlary dörändigi aýdylýar.'],
    ['Uzuklar','اوزوک‌لار','سه خان بی‌فرزند در صحرای پندی در یک روز صاحب دختر شدند: اوزوک، نازیک و لالیک. چوپانی به نام دوست‌محمد در دیدار با دختران با نی سه قطعه ساخت که با نام «اوزوک‌لار» به ما رسیده است.','Pendi çölünde üç çagasyz han bir günde gyzly bolupdyr: Uzuk, Näzik we Lälik. Çopan Dostmuhammet gyzlaryň şanyna tüýdükde üç saz döredipdir, olar «Uzuklar» ady bilen gelip ýetipdir.'],
    ['Ene (Gara Mergen)','انه (قره مرگن)','داستان عشق «انه» و «قره مرگن»: انه سرپرست روستا شد و گفت هر که روستا را از حمله نجات دهد او را خواهد گرفت؛ قره مرگن در «آک ایینیش» نزدیک گیزیلارباط پیروز شد. در پایان قره مرگن آوازی در ستایش انه خواند.','«Ene» we «Gara Mergen» baradaky söýgi rowaýaty: Ene obany çozuşdan halas edene özüni mynasyp görjekdigini aýdýar; Gara Mergen Ak Inişde ýeňýär we Enäni wasp edýän aýdymy aýdýar.']
  ];
  ['fa','tk'].forEach((l, i) => {
    DATA[l].music.dutar = DUTAR_FACTS.map(x => ({ title:x[i], text:x[2 + i], srcs:x[4] }));
    DATA[l].music.legends = LEGENDS.map(x => ({ title:x[0 + (i ? 0 : 0)], tkTitle:x[0], title2:x[1], text:x[2 + i], srcs:'tkDutar5' })).map(y => ({ title: i === 0 ? y.title + ' · ' + y.title2 : y.title, text:y.text, srcs:y.srcs }));
  });
  Object.assign(DATA.fa.music.ui, { dutarTitle:'ساخت دوتار و استادان', legendsTitle:'رِوایت آهنگ‌های مشهور دوتار', legendsNote:'این‌ها «رِوایت»اند، یعنی روایت‌های شفاهی که در منبع (به قلم الله‌بردی دوردی‌یف، یوسف بردی‌یف و دیگران) آمده‌اند؛ درستی تاریخی همه‌شان تأیید نشده است. خلاصه‌ها و ترجمه از من است.' });
  Object.assign(DATA.tk.music.ui, { dutarTitle:'Tamdyranyň gurluşy we ussatlar', legendsTitle:'Meşhur dutar sazlarynyň rowaýatlary', legendsNote:'Bular «rowaýat»dyr, ýagny çeşmede (Allaberdi Durdyýew, Ýusup Berdiýew we beýlekileriň ýazan) getirilen agzaky maglumatlar; hemmesiniň taryhy dogrulygy tassyklanmady. Gysgaça beýan we terjime meniňkidir.' });
  DATA.fa.sources.categories.push({ icon:'check', title:'موسیقی از turkmenkultur.com (آپدیت ۴)', text:'ساختار دوتار، نام ۱۳ پرده و استاد گولگلدی از «Tamdyra sapagy (1)» و رِوایت آهنگ‌های دوتار از «Türkmen aýdym-saz rowaýatlaryndan (5)» در turkmenkultur.com/menu/mr/t1. این منبع کتاب درسی و مجموعهٔ رِوایت است، نه سند تاریخی؛ برای صحت تاریخ‌ها و نام‌ها به متخصص رجوع شود. کتاب «Türkmenistanyň Taryhy» (۱۹۵۹، فرهنگستان علوم ترکمنستان شوروی) هم در همین سایت است و به‌خاطر نگاه و داده‌های قدیمی، فقط به‌عنوان مرجع مطالعه (نه منبع ادعا) برای بخش تاریخ پیوند خورد.' });
  DATA.tk.sources.categories.push({ icon:'check', title:'turkmenkultur.com-dan saz (täzelenme 4)', text:'Tamdyranyň gurluşy, 13 perdesiniň ady we Gulgeldi ussa «Tamdyra sapagy (1)» sahypasyndan, dutar sazlarynyň rowaýatlary «Türkmen aýdym-saz rowaýatlaryndan (5)» sahypasyndan (turkmenkultur.com/menu/mr/t1). Bu çeşme sapak kitaby we rowaýat ýygyndysy, taryhy resminama däl; seneleriň we atlaryň dogrulygy üçin hünärmene ýüz tutuň. «Türkmenistanyň Taryhy» (1959, Türkmenistan SSR Ylymlar akademiýasy) kitaby hem şol saýtda; köne garaýşy we maglumatlary sebäpli taryh bölümi üçin diňe okamak maslahaty hökmünde (ykrar edilýän çeşme hökmünde däl) baglanyşdyryldy.' });

  DATA.fa.sources.categories.push({ icon:'check', title:'سایت‌های رسمی و تخصصی (آپدیت ۵)', text:'پورتال رسمی مختومقلی (magtymgulypyragy.gov.tm/biography): اختلاف سال تولد و درگذشت. سایت‌های رسمی سفارت‌خانه‌ها و کنسولگری‌های ترکمنستان: تاریخ و محل نشست‌های ثبت یونسکو. پرتال دولتی turkmenistan.gov.tm (روسی) و turkmenportal.com: آیین‌های عروسی. سایت‌های medeniyet.gov.tm و turkmenkultur.de اجازهٔ خواندن خودکار ندادند. متن ترکمنیِ کارت‌های عروسی برگردان من از متن روسی است و بازبینی بومی می‌خواهد.' });
  DATA.tk.sources.categories.push({ icon:'check', title:'Resmi we hünär saýtlary (täzelenme 5)', text:'Magtymguly Pyragynyň resmi portaly (magtymgulypyragy.gov.tm/biography): doglan we aradan çykan ýyl baradaky tapawutlar. Türkmenistanyň ilçihanalarynyň we konsulhanalarynyň resmi saýtlary: ÝUNESKO belliklerinin senesi we ýeri. turkmenistan.gov.tm (rusça) we turkmenportal.com: toý däpleri. medeniyet.gov.tm we turkmenkultur.de awtomatik okamaga rugsat bermedi. Toý kartlarynyň türkmen teksti rus tekstinden meniň terjimämdir we ene dilli gürleýjiniň barlagyny talap edýär.' });

  /* ---------- update 6: folk tales (tasinhorjun.org), tale collections, Nowruz names ---------- */
  const TALES = [
    ['ÜÇ ÖKÜZ\nBir bar eken, bir ýok eken. Gadym zamanlarda bir daýhanyň üç sany gölesi bar eken.',
     'سه گاو نر (Üç öküz): سه گاوِ برادر (سیاه، زرد و ابلق) از دست صاحبشان به جنگل می‌گریزند. ببری دوستی می‌کند و برادر می‌شود، اما یکی‌یکی آن‌ها را می‌خورَد. این قصه از پرخوانده‌ترین قصه‌های سایت است. خلاصه از من.','tasUc'],
    ['AKYLLY AHMET\nBir watgda bir garyp bar eken. Ol garyp hemişe: “Meniň aklym kän-de pulum ýok…” diýip aýdar eken.',
     'احمدِ دانا (Akylly Ahmet): مرد فقیری که می‌گوید «عقلم زیاد است و پول ندارم». تاجری به او پول می‌دهد و او با پول خرت‌وپرت می‌خرد و کنار رودخانه می‌سوزاند؛ ماهی‌ها شب گوهرهایشان را بیرون می‌آورند تا بازی کنند، گوهرها در خاکستر گم می‌شوند و صبح احمد کیسه‌کیسه گوهر برمی‌دارد و آن‌ها را در ظاهرِ تپاله پنهان می‌کند. همراهان به او می‌خندند تا در مهمانی گوهرها را نشان می‌دهد. خلاصه از من.','tasAhmet'],
    ['Bedeneden aldanan tilki · Awçy · Almany göge zyň · Isgender patyşanyň şahy · Lökgijik · Iki mergen · Ýetim gyz',
     'عنوان چند قصهٔ دیگر از بخش «Halk Ertekileri» سایت tasinhorjun.org (بیش از ۴۰ قصه دارد): «شکارچی» (Awçy)، «دختر یتیم» (Ýetim gyz)، «دو تیرانداز» (Iki mergen)، «شاخِ شاه اسکندر» (Isgender patyşanyň şahy)، «سیب را به آسمان بینداز» (Almany göge zyň). ترجمهٔ بقیه عنوان‌ها را مطمئن نبودم و ننوشتم.','tasinHome']
  ];
  ['fa','tk'].forEach((l, i) => {
    DATA[l].folklore.sets.push({ id:'tales', kind:'verse', title: i === 0 ? 'ارتکی‌ها: قصه‌های ترکمنی از tasinhorjun.org' : 'Ertekiler (tasinhorjun.org)',
      intro: i === 0 ? 'سایت tasinhorjun.org مجموعهٔ الکترونیکی قصه‌های ترکمنی برای نسل جوان است (قصه‌های مردمی و قصه‌های نویسندگان، با تصویرگری). این‌جا فقط آغاز هر قصه و خلاصه‌اش آمده؛ متن کامل را در سایت بخوانید.' : 'tasinhorjun.org türkmen ertekileriniň elektron ýygyndysydyr (halk we ýazyjylaryň ertekileri, suratly). Bu ýerde diňe ertekileriň başlangyjy getirildi; doly teksti saýtda okaň.',
      items: TALES.map(t => ({ text:t[0], trans: i === 0 ? t[1] : '', answer:'', srcs:t[2] })) });
  });
  DATA.fa.folklore.items.push({ icon:'book', title:'گردآوری و انواع قصه‌های ترکمن', text:'پژوهشگران قصه‌های ترکمن را سه دسته می‌کنند: قصه‌های جانوران، جادویی و زندگی روزمره. گردآوری‌های مهم: «ترکمن خالک ارتکیلری» (۱۹۴۰) با مقدمهٔ ماریا ساکالی، گردآوری روسی‌زبانِ «قصه‌های ترکمنی» (Turkmenskie skazki، ۱۹۴۸) از ساکالی و گووشودوف، و مجموعهٔ سه‌جلدی «ترکمن خالک ارتکیلری» (۱۹۷۸ تا ۱۹۸۰) که هر جلدش یک نوع قصه را دارد.' });
  DATA.tk.folklore.items.push({ icon:'book', title:'Ertekileri ýygnamak we görnüşleri', text:'Alymlar türkmen ertekilerini üç topara bölýärler: haýwanlar hakyndaky, jadyly we durmuşy ertekiler. Möhüm ýygyndylar: «Türkmen halk ertekileri» (1940), Mariýa Sakalynyň sözbaşysy bilen; Sakali bilen A. Gowşudowyň rus dilindäki «Turkmenskie skazki» ýygyndysy (1948); we üç tomluk «Türkmen halk ertekileri» (1978–1980), her tomy bir erteki görnüşini öz içine alýar.' });
  DATA.fa.arts.items.push({ icon:'sun', title:'نام‌ها و افسانهٔ نوروز', text:'در پژوهش‌های ترکمنی از چند نام نوروز یاد می‌شود: نوروز کوچک (کیچی نوروز)، نوروز حسین، نوروز سلطان و نوروز راست (نوروز روشن). به روایتی که منبع نقل می‌کند، ترک‌های محاصره‌شده در کوهستان در چنین روزی کوه آهنین را ذوب کردند و آزاد شدند و برای همین نوروز با آزادی پیوند دارد (روایت اِرگنِکون). متن پژوهش تا اینجا بریده بود و فقط همین بخش را نقل کردم.' });
  DATA.tk.arts.items.push({ icon:'sun', title:'Nowruzyň atlary we rowaýaty', text:'Türkmen gözlegleriniň käbirinde Nowruzyň birnäçe ady agzalýar: Nowruz Küçek (Kiçi Nowruz), Nowruz Hüseýn, Nowruz Soltan we Nowruz Rast (Ýagty Nowruz). Çeşmäniň getirýän rowaýatyna görä, daglarda gabalyp galan türki halklar şol gün demir dagy eredip, erkinlige çykypdyrlar; şonuň üçin Nowruz erkinlik bilen baglanyşdyrylýar. Makalanyň teksti şu ýerde kesilen, diňe şu bölegi getirdim.' });
  DATA.fa.sources.categories.push({ icon:'check', title:'قصه‌ها و فرهنگ (آپدیت ۶)', text:'قصه‌ها از tasinhorjun.org (Üç öküz، Akylly Ahmet و عنوان چند قصهٔ دیگر)، گردآوری قصه‌ها از kitapcy.com، و نام‌های نوروز از ژورنال «Ýaşlaryň ylmy we tehnikasy» (فرهنگستان علوم ترکمنستان، science.gov.tm). خلاصه‌ها و ترجمه‌ها از من است و بازبینی بومی می‌خواهد.' });
  DATA.tk.sources.categories.push({ icon:'check', title:'Ertekiler we medeniýet (täzelenme 6)', text:'Ertekiler tasinhorjun.org saýtyndan (Üç öküz, Akylly Ahmet we birnäçe beýleki ertekiniň ady), ertekileri ýygnamak kitapcy.com saýtyndan, Nowruzyň atlary «Ýaşlaryň ylmy we tehnikasy» žurnalyndan (Türkmenistanyň Ylymlar akademiýasy, science.gov.tm). Gysgaça beýan we terjime meniňkidir, ene dilli gürleýjiniň barlagyny talap edýär.' });

  DATA.fa.sources.categories.push({ icon:'check', title:'سینما و ساختار ایلی (آپدیت ۸)', text:'تاریخ سینمای ترکمن از پرتال دولتی (turkmenistan.gov.tm) و ویکی‌پدیا؛ چاروا/چومور و زبان ادبی از eHRAF (دانشگاه ییل)، فهرست ایل‌ها از ویکی‌پدیا و CultureGrams. سایت‌های turkmeninstitute.org، turkmenkino.com و turkmenpop.com با جست‌وجو پیدا یا قابل‌خواندن نبودند و مطلبی از آن‌ها نیامده است.' });
  DATA.tk.sources.categories.push({ icon:'check', title:'Kino we tire gurluşy (täzelenme 8)', text:'Türkmen kinosynyň taryhy döwlet portalyndan (turkmenistan.gov.tm) we Wikipediýadan; çarwa/çomur we edebi dil eHRAF-dan (Ýel uniwersiteti), tireleriň sanawy Wikipediýadan we CultureGrams-dan. turkmeninstitute.org, turkmenkino.com we turkmenpop.com gözlegde tapylmady ýa-da okalmady, olardan maglumat alynmady.' });

  /* ---------- update 9: Turkmens of the world (from general public sources; no partisan news sites) ---------- */
  DATA.fa.world = { ui:{ intro:'این بخش خلاصهٔ بی‌طرفانهٔ منابع عمومی (ویکی‌پدیا، گروه حقوق اقلیت‌ها، UNPO، Refworld) دربارهٔ ترکمن‌های عراق، ایران و افغانستان است. سایت‌های خبری و انجمن‌های فهرست شما (مثل Bizturkmeniz، KerkukGazetesi و Tanis-Turkmen.nl) را نخوانده‌ام و مطلبی از آن‌ها نیامده. آمار گوناگون و ادعاهای سیاسی (مثل کرکوک) فقط به‌عنوان «گزارشِ منبع» آمده و داوری نشده است.' }, items:[
    { id:'iraq', icon:'compass', title:'ترکمن‌های عراق (ترکمن‌ایلی)', text:'ترکمن‌های عراق سومین گروه قومی بزرگ کشورند؛ شمار آن‌ها را حدود ۳ میلیون و ۹ تا ۱۳ درصد جمعیت برآورد می‌کنند و بیشتر در کمانی از تل‌عفر در غرب موصل تا اربیل، آلتون‌کوپری، کرکوک، توزخورماتو، کفری و مندلی زندگی می‌کنند. زبانشان گویشی ترکی نزدیک به ترکی آذربایجانی و ترکی آناتولی است و از سدهٔ ۱۱ سلجوقیان جمعیت‌های بزرگ ترکمن را در مسیرهای شمال عراق نشاندند؛ سنت دیگر هم می‌گوید بسیاری از آن‌ها از فرزندان سربازان و کارمندان عثمانی‌اند. قانون اساسی ۲۰۰۵ ترکمنی را در واحدهای اداری با تراکم ترکمن زبان رسمی اقلیت می‌داند و پارلمان در ۲۹ ژوئیهٔ ۲۰۱۲ آن‌ها را یکی از سه مؤلفهٔ اصلی عراق شناخت؛ اقلیم کردستان در نوامبر ۲۰۱۴ ترکمنی را در مناطق دارای بیش از ۲۰٪ ترکمن زبان رسمی کرد.', srcs:'iraqiTurkmen,unpo' },
    { id:'iraq2', icon:'compass', title:'ترکمن‌های عراق: تاریخ نزدیک و اختلاف‌ها', text:'ژانویهٔ ۱۹۷۰ دولت عراق حقوق زبانی و فرهنگی ترکمن‌ها را به رسمیت شناخت، اما در سال‌های بعد (به‌ویژه از ۱۹۷۹) به روایت منابع تحت فشار و تعریب کرکوک قرار گرفتند و نهادهای فرهنگی‌شان به دست مدیران عرب افتاد. «جبههٔ ترکمن عراق» در ۱۹۹۵ پدید آمد. در ژوئن ۲۰۱۴ داعش تل‌عفر را گرفت و تا سپتامبر ۲۰۱۴ دست‌کم ۳۵۰ هزار ترکمن آواره شدند؛ داده‌های ۲۰۲۱ می‌گوید ۴۰٪ ساکنان تل‌عفر هنوز بازنگشته بودند. کرکوک را چند گروه (ترکمن، کرد، عرب) شهر خود می‌دانند و هر طرف ادعاهایی دارد؛ این‌جا فقط گزارش می‌شود، نه داوری.', srcs:'persecIraq,mrg,iraqiGenocide' },
    { id:'iran', icon:'compass', title:'ترکمن‌های ایران (ترکمن‌صحرا)', text:'شمار ترکمن‌های ایران را از ۰٫۵ تا ۲٫۴ میلیون برآورد می‌کنند. ترکمن‌صحرا شامل بخش‌هایی از استان گلستان (شهرهای گنبد کاووس، آق‌قلا، کلاله، مراوه‌تپه، گمیشان و بندر ترکمن)، و ترکمن‌ها در خراسان شمالی و رضوی هم زندگی می‌کنند. ایل‌هایی مانند یموت، گکلن، ایگدیر، ساریق، سالار و تکه از سدهٔ ۱۶ در ایران بوده‌اند. گویششان «ترکمنی جنوبی» است که با ترکمنی ترکمنستان قابل‌فهم متقابل است. ترکمن‌ها در شمال استان گلستان (که اکثر جمعیتش شیعه است) زندگی می‌کنند؛ ویکی‌پدیا در مراوه‌تپه از «ترکمن‌های سنی» و کردهای شیعه یاد می‌کند.', srcs:'iranTurkmen,turkmenSahra' },
    { id:'afghan', icon:'compass', title:'ترکمن‌های افغانستان', text:'شمار ترکمن‌های افغانستان حدود یک میلیون (۲ تا ۳ درصد جمعیت) برآورد می‌شود و بیشتر در شمال: بادغیس، بلخ، فاریاب، هرات و جوزجان زندگی می‌کنند. بنا به ویکی‌پدیا دوازده گروه بزرگ ترکمن در افغانستان هست که ساختارشان بر نسب پدری استوار است؛ امروز بیشتر کشاورز-دامدارند و سنی‌اند.', srcs:'afghanTurkmen' },
    { id:'terms', icon:'book', title:'«ترکمن»، «ترکمان» و «ترکمن‌ایلی»', text:'امروز واژهٔ «ترکمن» یا «ترکمان» معمولاً دو گروه ترکی را می‌گوید: ترکمن‌های ترکمنستان و نواحی همجوار (و ایران)، و «تورکمان»های عراق و سوریه. منابع می‌گویند ایل‌های ترکمن در شکل‌گیری ترک‌های آناتولی، ترکمن‌های عراق و سوریه و جمعیت ترک‌زبان ایران و آذربایجان نقش مهمی داشتند. «ترکمن‌ایلی» اصطلاحی است که احزاب ترکمن عراق برای نواحی ترکمن‌نشین به کار می‌برند و جنجالی است (پیش از تأسیس جبههٔ ترکمن عراق در منابع منتشرشده تقریباً دیده نمی‌شد)؛ این‌جا فقط به‌عنوان اصطلاح گزارش شده است.', srcs:'turkmensWiki,turkmeneliWiki' }
  ] };
  DATA.tk.world = { ui:{ intro:'Bu bölüm Yrak, Eýran we Owganystan türkmenleri barada umumy çeşmeleriň (Wikipediýa, Azlyk hukuklary toparyň, UNPO, Refworld) bitarap gysgaça beýanydyr. Siziň sanawyňyzdaky habar saýtlaryny we birleşikleri (Bizturkmeniz, KerkukGazetesi, Tanis-Turkmen.nl we ş.m.) okamadym, olardan maglumat alynmady. Dürli sanlar we syýasy talaplar (Kerkük ýaly) diňe «çeşmäniň habary» hökmünde getirildi, bahalandyrylmady.' }, items:[
    { id:'iraq', icon:'compass', title:'Yrak türkmenleri (Türkmeneli)', text:'Yrak türkmenleri ýurtda üçünji uly etnik topar; sany 3 million töweregi we ilatyň 9–13%-i diýlip çaklanýar; olar esasan Mosulyň günbataryndaky Tal Afardan Erbile, Altun Köprä, Kerkük, Tuz Hurmatu, Kifri we Mandala çenli ýaýy emele getirýän ýerlerde ýaşaýarlar. Dili Azerbaýjan we Anadoly türkçesine ýakyn türki şiwe; XI asyrdan başlap seljuklar Yragyň demirgazygynda uly türkmen toparlaryny ýerleşdirdiler, başga bir garaýyş boýunça köpüsi osmanly esgerleriniň we işgärleriniň nesilleri. 2005-nji ýyl Konstitusiýasy türkmen dilini türkmen ilaty dykyz ýerlerde azlyk resmi dili hasaplaýar, parlament 2012-nji ýylyň 29-njy iýulynda olary ýurduň üç esasy düzüminiň biri hökmünde ykrar etdi; Kürdistan sebiti 2014-nji ýylyň noýabrynda türkmenleriň ýüzde 20-den köp ýaşaýan ýerlerinde türkmen dilini resmi etdi.', srcs:'iraqiTurkmen,unpo' },
    { id:'iraq2', icon:'compass', title:'Yrak türkmenleri: ýakyn taryh we jedeller', text:'1970-nji ýylyň ýanwarynda Yrak hökümeti türkmenleriň dil we medeni hukuklaryny ykrar etdi, ýöne soňky ýyllarda (aýratyn 1979-njy ýyldan) çeşmelere görä basyş astynda galdylar, Kerkük araplaşdyryldy we medeni edaralary arap müdirlere berildi. «Yrak türkmen frontu» 1995-nji ýylda döredi. 2014-nji ýylyň iýunynda DAIŞ Tal Afary aldy we sentýabra çenli azyndan 350 müň türkmen göçgün boldy; 2021-nji ýyl maglumatlary Tal Afar ilatynyň 40%-iniň henizem yzyna gaýdyp gelmändigini görkezýär. Kerkügi birnäçe topar (türkmen, kürt, arap) özüne degişli hasaplaýar we her tarapyň öz talaplary bar; bu ýerde diňe habar berilýär, bahalandyrylmaýar.', srcs:'persecIraq,mrg,iraqiGenocide' },
    { id:'iran', icon:'compass', title:'Eýran türkmenleri (Türkmen sährasy)', text:'Eýran türkmenleriniň sany 0,5–2,4 million diýlip çaklanýar. Türkmen sährasy Golestan welaýatynyň käbir böleklerini (Gonbad-e Kawus, Aqqala, Kalala, Maraweh-Tepe, Gomişan we Bandar Türkmen şäherleri) öz içine alýar; türkmenler Demirgazyk we Razawy Horasanda hem ýaşaýarlar. Ýomut, gökleň, igdir, saryk, salar we teke ýaly tireler Eýranda XVI asyrdan bäri ýaşaýarlar. Dili «Günorta türkmen» diýlip atlandyrylýar we Türkmenistanyň türkmen dili bilen biri-birine düşnüklidir. Türkmenler köp şygaly Golestan welaýatynyň demirgazygynda ýaşaýarlar; Wikipediýa Maraweh-Tepede «sünni türkmenler» bilen şygaly kürtleriň garyşyk ýaşaýandygyny ýazýar.', srcs:'iranTurkmen,turkmenSahra' },
    { id:'afghan', icon:'compass', title:'Owganystan türkmenleri', text:'Owganystan türkmenleriniň sany 1 million töweregi (ilatyň 2–3%-i) diýlip çaklanýar; olar esasan demirgazykda: Badgis, Balh, Faryýab, Herat we Jowzjanda ýaşaýarlar. Wikipediýa boýunça Owganystanda on iki uly türkmen topary bar; gurluşlary ata tarapdan nesil yzlamaga daýanýar; häzir köplenç daýhan-maldardyrlar we sünnidirler.', srcs:'afghanTurkmen' },
    { id:'terms', icon:'book', title:'«Türkmen», «Türkoman» we «Türkmeneli»', text:'Şu gün «Türkmen» ýa-da «Türkoman» sözi adatça iki türki topary aňladýar: Türkmenistanyň we goňşy ýerleriň (Eýranyň) türkmenleri, we Yragyň hem Siriýanyň «türkomanlary». Çeşmeler türkmen tireleriniň Anadoly türkleriniň, Yrak we Siriýa türkmenleriniň, Eýran we Azerbaýjanyň türki ilatynyň emele gelmeginde möhüm rol oýnandygyny aýdýarlar. «Türkmeneli» Yrak türkmen partiýalarynyň türkmen ýaşaýan ýerler üçin ulanýan adalgasy we jedelli (Yrak türkmen frontunyň döredilmeginden öň çap edilen eserlerde seýrek duş gelýär); bu ýerde diňe adalga hökmünde getirilýär.', srcs:'turkmensWiki,turkmeneliWiki' }
  ] };
  DATA.fa.sources.categories.push({ icon:'check', title:'ترکمن‌های جهان (آپدیت ۹)', text:'عراق: ویکی‌پدیا (Iraqi Turkmen، Iraqi Turkmen Front، Turkmeneli)، گروه حقوق اقلیت‌ها (minorityrights.org) و Refworld، UNPO، نشریهٔ Yale Review of International Studies. ایران: ویکی‌پدیا (Iranian Turkmens، Turkmen Sahra). افغانستان: ویکی‌پدیا (Afghan Turkmens). فقط منابع عمومی انگلیسی؛ سایت‌های حزبی و خبریِ فهرست کاربر خوانده نشد.' });
  DATA.tk.sources.categories.push({ icon:'check', title:'Dünýä türkmenleri (täzelenme 9)', text:'Yrak: Wikipediýa (Iraqi Turkmen, Iraqi Turkmen Front, Turkmeneli), Azlyk hukuklary topary (minorityrights.org) we Refworld, UNPO, Yale Review of International Studies. Eýran: Wikipediýa (Iranian Turkmens, Turkmen Sahra). Owganystan: Wikipediýa (Afghan Turkmens). Diňe umumy iňlis çeşmeleri; ulanyjynyň sanawyndaky partiýa we habar saýtlary okalmady.' });
})();
