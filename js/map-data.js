/* Map extras: Turkmen-populated regions beyond Turkmenistan, statistics, and the new UI strings.
   Numbers are estimates collected from the sources listed in `stats.sources` (see README, Update 12).
   Hand-editable. Loaded after data-new.js. */
(function(){
  const EXTRA = {
 "fa": {
  "ui": {
   "layerLabel": "ترکمن‌های فرامرزی",
   "intro": "نقشهٔ تعاملی ترکمنستان و همسایگان بر پایهٔ داده‌های جغرافیایی واقعی (Natural Earth). روی نشان‌ها، محدودهٔ ایل‌ها و استان‌هایی که در آن‌ها ترکمن‌ها زندگی می‌کنند بزنید؛ با دکمه‌های + و − یا دو بار زدن بزرگ‌نمایی کنید.",
   "tapHint": "روی یک نشان، ایل یا استان بزنید",
   "base": {
    "title": "زمینه",
    "vector": "برداری",
    "osm": "خیابان",
    "topo": "ناهمواری",
    "light": "ساده"
   },
   "zoomIn": "بزرگ‌نمایی",
   "zoomOut": "کوچک‌نمایی",
   "zoomReset": "بازنشانی نما",
   "zoomHint": "Ctrl + چرخ ماوس هم کار می‌کند",
   "tileLoading": "در حال بارگذاری نقشهٔ زمینه…",
   "tileFail": "اتصال به سرور نقشهٔ زمینه برقرار نشد؛ نقشهٔ برداری نمایش داده می‌شود.",
   "tileNote": "نقشهٔ زمینه از سرورهای خارجی بارگذاری می‌شود و فقط با اتصال اینترنت کار می‌کند.",
   "diaNote": "نواحی هاشورخورده استان‌هایی‌اند که منابع در بخشی از آن‌ها از جمعیت ترکمن یاد کرده‌اند؛ کل استان ترکمن‌نشین نیست و هاشور مرز دقیق سکونت را نشان نمی‌دهد.",
   "credit": "مرزها، رودها و دریاچه‌ها: Natural Earth (مالکیت عمومی، نسخهٔ ۵٫۲ سال ۲۰۲۲). سایهٔ بیابان و کوهستان تقریبی است."
  },
  "regions": [
   {
    "id": "golestan",
    "title": "گلستان (ایران)",
    "text": "ترکمن‌ها در شمال استان، در دشتی به نام ترکمن‌صحرا، زندگی می‌کنند؛ شهرهای اصلی آن گنبد کاووس و بندر ترکمن‌اند و ترکمن‌ها سنی‌مذهب‌اند. برآورد شمار ترکمن‌های کل ایران بین منابع از ۰٫۵ تا ۲٫۴ میلیون متفاوت است.",
    "srcs": [
     "wikiIr",
     "zaIr"
    ]
   },
   {
    "id": "nkhorasan",
    "title": "خراسان شمالی (ایران)",
    "text": "بخشی از ترکمن‌های ایران در این استان ساکن‌اند؛ منابع آن را همراه با گلستان و خراسان رضوی یکی از سه استان اصلی سکونت ترکمن‌ها در ایران می‌شمارند.",
    "srcs": [
     "wikiIr",
     "zaIr"
    ]
   },
   {
    "id": "rkhorasan",
    "title": "خراسان رضوی (ایران)",
    "text": "ترکمن‌ها در بخش‌هایی از این استان، به‌ویژه نزدیک مرز ترکمنستان، ساکن‌اند و منابع آن را یکی از سه استان اصلی سکونت ترکمن‌ها در ایران می‌شمارند.",
    "srcs": [
     "wikiIr",
     "zaIr"
    ]
   },
   {
    "id": "faryab",
    "title": "فاریاب (افغانستان)",
    "text": "ترکمن‌ها در بخش‌هایی از این ولایت زندگی می‌کنند؛ سهم آن‌ها بسته به منبع حدود ۷٪ تا ۱۳٪ برآورد شده و منابع با هم ناهمخوان‌اند.",
    "srcs": [
     "jamestown",
     "wikiAf"
    ]
   },
   {
    "id": "jowzjan",
    "title": "جوزجان (افغانستان)",
    "text": "از ولایت‌هایی است که ترکمن‌ها در آن حضور پررنگ‌تری دارند. یک جدول جمعیتی حدود ۱۰٪ می‌آورد، اما منبع دیگر آنان را اکثریت محلی می‌داند؛ آمار دقیق در دست نیست.",
    "srcs": [
     "euaa",
     "jamestown",
     "wikiAf"
    ]
   },
   {
    "id": "badghis",
    "title": "بادغیس (افغانستان)",
    "text": "سهم ترکمن‌ها در این ولایت حدود ۳٪ برآورد شده است.",
    "srcs": [
     "jamestown",
     "wikiAf"
    ]
   },
   {
    "id": "balkh",
    "title": "بلخ (افغانستان)",
    "text": "از ولایت‌های شمال افغانستان که منابع برای آن‌ها از حضور ترکمن‌ها نام می‌برند؛ شمار دقیق در دست نیست.",
    "srcs": [
     "wikiAf"
    ]
   },
   {
    "id": "herat",
    "title": "هرات (افغانستان)",
    "text": "از ولایت‌های افغانستان که منابع از حضور ترکمن‌ها در بخش‌هایی از آن یاد می‌کنند؛ شمار دقیق در دست نیست.",
    "srcs": [
     "wikiAf"
    ]
   },
   {
    "id": "khorezm",
    "title": "خوارزم (ازبکستان)",
    "text": "ترکمن‌های سه منطقهٔ خوارزم، سورخان‌دریا و قره‌قالپاقستان روی هم دست‌کم ۱۵۰ هزار نفر گزارش شده‌اند؛ برآورد دیگری تا ۲۲۵ هزار هم می‌رسد.",
    "srcs": [
     "iwpr",
     "joshua"
    ]
   },
   {
    "id": "surkhandarya",
    "title": "سورخان‌دریا (ازبکستان)",
    "text": "یکی از سه منطقهٔ ازبکستان که ترکمن‌ها در آن گزارش شده‌اند؛ برای مجموع سه منطقه دست‌کم ۱۵۰ هزار نفر آمده است.",
    "srcs": [
     "iwpr",
     "joshua"
    ]
   },
   {
    "id": "karakalpakstan",
    "title": "قره‌قالپاقستان (ازبکستان)",
    "text": "یکی از سه منطقهٔ ازبکستان که ترکمن‌ها در آن گزارش شده‌اند؛ برای مجموع سه منطقه دست‌کم ۱۵۰ هزار نفر آمده است.",
    "srcs": [
     "iwpr",
     "joshua"
    ]
   }
  ],
  "stats": {
   "title": "آمار: ترکمن‌ها در جهان",
   "intro": "اعداد زیر برآوردهایی از منابع گوناگون‌اند. برای ایران، افغانستان و ازبکستان منبع رسمیِ روشنی برای قومیت وجود ندارد و منابع با هم فاصلهٔ زیادی دارند؛ پس هر ردیف بازه یا مقدار تقریبی است، نه رقم قطعی.",
   "worldTitle": "شمار ترکمن‌ها به تفکیک کشور (برآورد)",
   "velTitle": "جمعیت ولایت‌های ترکمنستان (سرشماری ۲۰۲۲)",
   "onMap": "روی نقشه",
   "total": "جمع جهانی: حدود ۹ میلیون (برآورد کلی؛ فاصلهٔ منابع زیاد است)",
   "velNote": "سهم هر ولایت از ۷٬۰۵۷٬۸۴۱ نفر؛ سهم عشق‌آباد از مابقی محاسبه شده و جمعیت‌ها تقریبی‌اند.",
   "caveat": "دربارهٔ دقت سرشماری ۲۰۲۲ ترکمنستان، رادیو آزادی (RFE/RL) و منابع مستقل تردید کرده‌اند و برآورد جمعیت واقعی را پایین‌تر از رقم رسمی نقل کرده‌اند. ترکمن‌های عراق و سوریه (ترکمان) گروه قومی دیگری هستند و در این فهرست نیامده‌اند.",
   "sourcesLabel": "منابع",
   "updated": "گردآوری: آبان ۱۴۰۵ (نوامبر ۲۰۲۶)",
   "world": [
    {
     "id": "tm",
     "name": "ترکمنستان",
     "val": "≈ ۶٫۱۲ میلیون",
     "v": 6120854,
     "note": "سرشماری ۲۰۲۲: ۷٬۰۵۷٬۸۴۱ نفر که ۸۶٫۷٪ آن ترکمن است",
     "onMap": true,
     "srcs": [
      "censusTm",
      "censusTmNat",
      "rferlCensus"
     ]
    },
    {
     "id": "ir",
     "name": "ایران",
     "val": "≈ ۱ میلیون (برآوردها: ۰٫۵ تا ۲٫۴)",
     "v": 1000000,
     "note": "گلستان، خراسان شمالی و خراسان رضوی",
     "onMap": true,
     "srcs": [
      "wikiIr",
      "zaIr",
      "rferlIr"
     ]
    },
    {
     "id": "af",
     "name": "افغانستان",
     "val": "≈ ۱ میلیون (۱ تا ۳٪ جمعیت)",
     "v": 1000000,
     "note": "بادغیس، بلخ، فاریاب، هرات و جوزجان؛ برآوردها ناهمخوان‌اند",
     "onMap": true,
     "srcs": [
      "wikiAf",
      "euaa"
     ]
    },
    {
     "id": "uz",
     "name": "ازبکستان",
     "val": "≈ ۱۵۰ تا ۲۲۵ هزار",
     "v": 190000,
     "note": "خوارزم، سورخان‌دریا و قره‌قالپاقستان؛ ثبت رسمی ازبکستان: ۱۹۴٬۰۷۶ (۲۰۲۶، به نقل ویکی‌پدیا)",
     "onMap": true,
     "srcs": [
      "iwpr",
      "joshua",
      "wikiTkm"
     ]
    },
    {
     "id": "pk",
     "name": "پاکستان",
     "val": "≈ ۱۷۱ هزار",
     "v": 171000,
     "note": "برآوردی کم‌اطمینان (گردآوری ثانویه)",
     "onMap": false,
     "srcs": [
      "wikiTkm"
     ]
    },
    {
     "id": "tr",
     "name": "ترکیه",
     "val": "۱۱۳٬۷۶۲ (۲۰۲۴)",
     "v": 113762,
     "note": "آمار ثبت نشانی ترکیه؛ ملاک شمارش ممکن است تابعیت باشد نه قومیت",
     "onMap": false,
     "srcs": [
      "wikiTkm",
      "tuik"
     ]
    },
    {
     "id": "ru",
     "name": "روسیه",
     "val": "۴۱٬۳۲۸ نفر",
     "v": 41328,
     "note": "سرشماری ۲۰۲۱",
     "onMap": false,
     "srcs": [
      "wikiTkm"
     ]
    },
    {
     "id": "tj",
     "name": "تاجیکستان",
     "val": "۱۵٬۱۷۱ نفر",
     "v": 15171,
     "note": "سرشماری ۲۰۱۰",
     "onMap": false,
     "srcs": [
      "wikiTkm"
     ]
    }
   ],
   "vel": [
    {
     "id": "mary",
     "name": "مری",
     "pct": 22.9,
     "val": "۲۲٫۹٪ (≈ ۱٫۶۲ میلیون)"
    },
    {
     "id": "dashoguz",
     "name": "داشوغوز",
     "pct": 22.0,
     "val": "۲۲٫۰٪ (≈ ۱٫۵۵ میلیون)"
    },
    {
     "id": "lebap",
     "name": "لبپ",
     "pct": 20.5,
     "val": "۲۰٫۵٪ (≈ ۱٫۴۵ میلیون)"
    },
    {
     "id": "ashgabat",
     "name": "شهر عشق‌آباد",
     "pct": 14.6,
     "val": "۱۴٫۶٪ (≈ ۱٫۰۳ میلیون)"
    },
    {
     "id": "ahal",
     "name": "آخال",
     "pct": 12.5,
     "val": "۱۲٫۵٪ (≈ ۰٫۸۸ میلیون)"
    },
    {
     "id": "balkan",
     "name": "بالکان",
     "pct": 7.5,
     "val": "۷٫۵٪ (≈ ۰٫۵۳ میلیون)"
    }
   ],
   "sources": [
    {
     "id": "censusTm",
     "t": "سرشماری ۲۰۲۲ ترکمنستان (stat.gov.tm)",
     "u": "https://stat.gov.tm/en/population-census"
    },
    {
     "id": "censusTmNat",
     "t": "ترکیب ملی (جدول ۴٫۱ سرشماری)",
     "u": "https://stat.gov.tm/population-census-pdfs/results/en/4.pdf"
    },
    {
     "id": "rferlCensus",
     "t": "رادیو آزادی: تردید دربارهٔ آمار سرشماری",
     "u": "https://www.rferl.org/a/turkmenistan-census-fake-numbers-population-decline/32516559.html"
    },
    {
     "id": "wikiTkm",
     "t": "ویکی‌پدیا: Turkmens (گردآوری ثانویه)",
     "u": "https://en.wikipedia.org/wiki/Turkmens"
    },
    {
     "id": "wikiIr",
     "t": "ویکی‌پدیا: Iranian Turkmens",
     "u": "https://en.wikipedia.org/wiki/Iranian_Turkmens"
    },
    {
     "id": "zaIr",
     "t": "Zentralasien-Analysen 160 (۲۰۲۳)",
     "u": "https://laender-analysen.de/zentralasien-analysen/160/ZentralasienAnalysen160.pdf"
    },
    {
     "id": "rferlIr",
     "t": "رادیو آزادی: ترکمن‌های ایران",
     "u": "https://www.rferl.org/a/iran-turkmen-minority-war-hope-trepidation/33700396.html"
    },
    {
     "id": "wikiAf",
     "t": "ویکی‌پدیا: Afghan Turkmens",
     "u": "https://en.wikipedia.org/wiki/Afghan_Turkmens"
    },
    {
     "id": "euaa",
     "t": "EUAA: گزارش اطلاعات کشوری افغانستان (ترکمن‌ها)",
     "u": "https://www.euaa.europa.eu/coi-report-afghanistan-country-focus/487-turkmen"
    },
    {
     "id": "jamestown",
     "t": "Jamestown: ترکمن‌های افغانستان",
     "u": "https://jamestown.org/afghanistans-ethnic-turkmens-enemies-or-allies-for-ashgabat/"
    },
    {
     "id": "iwpr",
     "t": "IWPR: ترکمن‌های ازبکستان",
     "u": "https://iwpr.net/ezwgy857"
    },
    {
     "id": "tuik",
     "t": "TÜİK: آمار ثبت نشانی ترکیه ۲۰۲۴",
     "u": "https://data.tuik.gov.tr/Bulten/Index?p=Adrese-Dayali-Nufus-Kayit-Sistemi-Sonuclari-2024-53783&dil=1"
    },
    {
     "id": "joshua",
     "t": "Joshua Project: ازبکستان",
     "u": "https://joshuaproject.net/people_groups/print/15654/UZ"
    }
   ]
  }
 },
 "tk": {
  "ui": {
   "layerLabel": "Serhetaşyr türkmenler",
   "intro": "Türkmenistanyň we goňşy ýurtlaryň hakyky geografiýa maglumatlaryna (Natural Earth) esaslanýan interaktiw karta. Nyşanlara, tire sebitlerine we türkmenleriň ýaşaýan welaýatlaryna basyň; ulaltmak üçin + we − düwmelerini ulanyň ýa-da iki gezek basyň.",
   "tapHint": "Nyşana, tire sebitine ýa-da welaýata basyň",
   "base": {
    "title": "Fon",
    "vector": "Wektor",
    "osm": "Köçeler",
    "topo": "Relýef",
    "light": "Ýönekeý"
   },
   "zoomIn": "Ulalt",
   "zoomOut": "Kiçelt",
   "zoomReset": "Görnüşi dikelt",
   "zoomHint": "Ctrl + syçan tigiri hem işleýär",
   "tileLoading": "Fon kartasy ýüklenýär…",
   "tileFail": "Fon kartasynyň serwerine birigip bolmady; wektor karta görkezilýär.",
   "tileNote": "Fon kartasy daşarky serwerlerden ýüklenýär we diňe internet bilen işleýär.",
   "diaNote": "Çyzgyly sebitler çeşmelerde bir böleginde türkmen ilaty bar diýlip görkezilen welaýatlardyr; bütin welaýat türkmen däl, çyzgy hem takyk ýaşaýyş serhedini görkezmeýär.",
   "credit": "Serhetler, derýalar we kölleri: Natural Earth (jemgyýetçilik eýeçiligi, 2022-nji ýyl 5.2 wersiýasy). Çöl we dag kölegesi takmynandyr."
  },
  "regions": [
   {
    "id": "golestan",
    "title": "Golestan (Eýran)",
    "text": "Türkmenler welaýatyň demirgazygynda, Türkmen sährasy diýilýän düzlükde ýaşaýarlar; onuň esasy şäherleri Gonbad-e Kawus we Bender Türkmendir, türkmenler sunny musulmandyrlar. Eýranyň ähli türkmenleriniň sany çeşmelere görä 0,5–2,4 million aralygynda çaklanylýar.",
    "srcs": [
     "wikiIr",
     "zaIr"
    ]
   },
   {
    "id": "nkhorasan",
    "title": "Demirgazyk Horasan (Eýran)",
    "text": "Eýranyň türkmenleriniň bir bölegi şu welaýatda ýaşaýar; çeşmeler ony Golestan we Räzewi Horasan bilen bilelikde türkmenleriň Eýrandaky üç esasy ýaşaýyş welaýatynyň biri hasaplaýar.",
    "srcs": [
     "wikiIr",
     "zaIr"
    ]
   },
   {
    "id": "rkhorasan",
    "title": "Räzewi Horasan (Eýran)",
    "text": "Türkmenler welaýatyň käbir böleginde, esasanam Türkmenistanyň serhedine ýakyn ýerlerde ýaşaýarlar; çeşmeler ony Eýrandaky üç esasy türkmen welaýatynyň biri hasaplaýar.",
    "srcs": [
     "wikiIr",
     "zaIr"
    ]
   },
   {
    "id": "faryab",
    "title": "Faryab (Owganystan)",
    "text": "Türkmenler welaýatyň käbir böleginde ýaşaýarlar; olaryň paýy çeşmä görä takmynan 7%–13% diýlip çaklanylýar we çeşmeler biri-birine gabat gelmeýär.",
    "srcs": [
     "jamestown",
     "wikiAf"
    ]
   },
   {
    "id": "jowzjan",
    "title": "Jowzjan (Owganystan)",
    "text": "Türkmenleriň has görnükli bolan welaýatlarynyň biri. Bir ilat tablisasy takmynan 10% görkezýär, başga bir çeşme bolsa olary ýerli köplük hasaplaýar; takyk san ýok.",
    "srcs": [
     "euaa",
     "jamestown",
     "wikiAf"
    ]
   },
   {
    "id": "badghis",
    "title": "Badgis (Owganystan)",
    "text": "Türkmenleriň şu welaýatdaky paýy takmynan 3% diýlip çaklanylýar.",
    "srcs": [
     "jamestown",
     "wikiAf"
    ]
   },
   {
    "id": "balkh",
    "title": "Balh (Owganystan)",
    "text": "Çeşmeleriň türkmenleriň bardygyny ýatlaýan Owganystanyň demirgazyk welaýatlarynyň biri; takyk san ýok.",
    "srcs": [
     "wikiAf"
    ]
   },
   {
    "id": "herat",
    "title": "Hyrat (Owganystan)",
    "text": "Çeşmeleriň türkmenleriň käbir böleginde ýaşaýandygyny ýatlaýan Owganystan welaýatlarynyň biri; takyk san ýok.",
    "srcs": [
     "wikiAf"
    ]
   },
   {
    "id": "khorezm",
    "title": "Horezm (Özbegistan)",
    "text": "Horezm, Surhandarýa we Garagalpagystan sebitleriniň türkmenleri jemi azyndan 150 müň adam diýlip habar berilýär; başga bir çaklama 225 müňe çenli ýetýär.",
    "srcs": [
     "iwpr",
     "joshua"
    ]
   },
   {
    "id": "surkhandarya",
    "title": "Surhandarýa (Özbegistan)",
    "text": "Türkmenleriň habar berilen Özbegistanyň üç sebitinden biri; üç sebit üçin jemi azyndan 150 müň adam görkezilýär.",
    "srcs": [
     "iwpr",
     "joshua"
    ]
   },
   {
    "id": "karakalpakstan",
    "title": "Garagalpagystan (Özbegistan)",
    "text": "Türkmenleriň habar berilen Özbegistanyň üç sebitinden biri; üç sebit üçin jemi azyndan 150 müň adam görkezilýär.",
    "srcs": [
     "iwpr",
     "joshua"
    ]
   }
  ],
  "stats": {
   "title": "Statistika: dünýädäki türkmenler",
   "intro": "Aşakdaky sanlar dürli çeşmelerden alnan çaklamalardyr. Eýran, Owganystan we Özbegistan üçin etniki düzüm boýunça anyk resmi çeşme ýok we çeşmeler biri-birinden köp tapawutlanýar; şonuň üçin her setir aralyk ýa-da takmynan baha, kesgitli san däl.",
   "worldTitle": "Türkmenleriň ýurtlar boýunça sany (çaklama)",
   "velTitle": "Türkmenistanyň welaýatlarynyň ilaty (2022 ýyl ilat ýazuwy)",
   "onMap": "kartada",
   "total": "Dünýä boýunça jemi: takmynan 9 million (umumy çaklama; çeşmeleriň aralygy uly)",
   "velNote": "Her welaýatyň 7 057 841 adamdan paýy; Aşgabadyň paýy galan bölekden hasaplanyldy, sanlar takmynandyr.",
   "caveat": "2022 ýyl ilat ýazuwynyň takyklygyna Azatlyk radiosy (RFE/RL) we garaşsyz çeşmeler şübhe bilen garaýarlar we hakyky ilaty resmi sandan pes diýip habar berýärler. Yrak we Siriýa türkmenleri (türkmenler/türkmenlar) başga etniki topardyr we bu sanawa girizilmedi.",
   "sourcesLabel": "Çeşmeler",
   "updated": "Ýygnalan: 2026-njy ýylyň noýabry",
   "world": [
    {
     "id": "tm",
     "name": "Türkmenistan",
     "val": "≈ 6,12 million",
     "v": 6120854,
     "note": "2022 ýyl ilat ýazuwy: 7 057 841 adam, onuň 86,7%-i türkmen",
     "onMap": true,
     "srcs": [
      "censusTm",
      "censusTmNat",
      "rferlCensus"
     ]
    },
    {
     "id": "ir",
     "name": "Eýran",
     "val": "≈ 1 million (çaklamalar: 0,5–2,4)",
     "v": 1000000,
     "note": "Golestan, Demirgazyk we Räzewi Horasan",
     "onMap": true,
     "srcs": [
      "wikiIr",
      "zaIr",
      "rferlIr"
     ]
    },
    {
     "id": "af",
     "name": "Owganystan",
     "val": "≈ 1 million (ilatyň 1–3%-i)",
     "v": 1000000,
     "note": "Badgis, Balh, Faryab, Hyrat we Jowzjan; çaklamalar biri-birine gabat gelmeýär",
     "onMap": true,
     "srcs": [
      "wikiAf",
      "euaa"
     ]
    },
    {
     "id": "uz",
     "name": "Özbegistan",
     "val": "≈ 150–225 müň",
     "v": 190000,
     "note": "Horezm, Surhandarýa we Garagalpagystan; Özbegistanyň resmi ýazuwy: 194 076 (2026, Wikipediýa boýunça)",
     "onMap": true,
     "srcs": [
      "iwpr",
      "joshua",
      "wikiTkm"
     ]
    },
    {
     "id": "pk",
     "name": "Pakistan",
     "val": "≈ 171 müň",
     "v": 171000,
     "note": "Ynamy pes çaklama (ikinji derejeli ýygyndy)",
     "onMap": false,
     "srcs": [
      "wikiTkm"
     ]
    },
    {
     "id": "tr",
     "name": "Türkiýe",
     "val": "113 762 (2024)",
     "v": 113762,
     "note": "Türkiýäniň adrese esaslanýan ýazuwy; sanamagyň ölçegi etniki däl-de raýatlyk bolmagy mümkin",
     "onMap": false,
     "srcs": [
      "wikiTkm",
      "tuik"
     ]
    },
    {
     "id": "ru",
     "name": "Russiýa",
     "val": "41 328 adam",
     "v": 41328,
     "note": "2021 ýyl ilat ýazuwy",
     "onMap": false,
     "srcs": [
      "wikiTkm"
     ]
    },
    {
     "id": "tj",
     "name": "Täjigistan",
     "val": "15 171 adam",
     "v": 15171,
     "note": "2010 ýyl ilat ýazuwy",
     "onMap": false,
     "srcs": [
      "wikiTkm"
     ]
    }
   ],
   "vel": [
    {
     "id": "mary",
     "name": "Mary",
     "pct": 22.9,
     "val": "22,9% (≈ 1,62 million)"
    },
    {
     "id": "dashoguz",
     "name": "Daşoguz",
     "pct": 22.0,
     "val": "22,0% (≈ 1,55 million)"
    },
    {
     "id": "lebap",
     "name": "Lebap",
     "pct": 20.5,
     "val": "20,5% (≈ 1,45 million)"
    },
    {
     "id": "ashgabat",
     "name": "Aşgabat şäheri",
     "pct": 14.6,
     "val": "14,6% (≈ 1,03 million)"
    },
    {
     "id": "ahal",
     "name": "Ahal",
     "pct": 12.5,
     "val": "12,5% (≈ 0,88 million)"
    },
    {
     "id": "balkan",
     "name": "Balkan",
     "pct": 7.5,
     "val": "7,5% (≈ 0,53 million)"
    }
   ],
   "sources": [
    {
     "id": "censusTm",
     "t": "Türkmenistanyň 2022 ýyl ilat ýazuwy (stat.gov.tm)",
     "u": "https://stat.gov.tm/en/population-census"
    },
    {
     "id": "censusTmNat",
     "t": "Milli düzüm (ilat ýazuwynyň 4.1 tablisasy)",
     "u": "https://stat.gov.tm/population-census-pdfs/results/en/4.pdf"
    },
    {
     "id": "rferlCensus",
     "t": "Azatlyk radiosy: ilat ýazuwynyň sanlaryna şübhe",
     "u": "https://www.rferl.org/a/turkmenistan-census-fake-numbers-population-decline/32516559.html"
    },
    {
     "id": "wikiTkm",
     "t": "Wikipedia: Turkmens (ikinji derejeli ýygyndy)",
     "u": "https://en.wikipedia.org/wiki/Turkmens"
    },
    {
     "id": "wikiIr",
     "t": "Wikipedia: Iranian Turkmens",
     "u": "https://en.wikipedia.org/wiki/Iranian_Turkmens"
    },
    {
     "id": "zaIr",
     "t": "Zentralasien-Analysen 160 (2023)",
     "u": "https://laender-analysen.de/zentralasien-analysen/160/ZentralasienAnalysen160.pdf"
    },
    {
     "id": "rferlIr",
     "t": "Azatlyk radiosy: Eýranyň türkmenleri",
     "u": "https://www.rferl.org/a/iran-turkmen-minority-war-hope-trepidation/33700396.html"
    },
    {
     "id": "wikiAf",
     "t": "Wikipedia: Afghan Turkmens",
     "u": "https://en.wikipedia.org/wiki/Afghan_Turkmens"
    },
    {
     "id": "euaa",
     "t": "EUAA: Owganystan boýunça maglumat (türkmenler)",
     "u": "https://www.euaa.europa.eu/coi-report-afghanistan-country-focus/487-turkmen"
    },
    {
     "id": "jamestown",
     "t": "Jamestown: Owganystanyň türkmenleri",
     "u": "https://jamestown.org/afghanistans-ethnic-turkmens-enemies-or-allies-for-ashgabat/"
    },
    {
     "id": "iwpr",
     "t": "IWPR: Özbegistanyň türkmenleri",
     "u": "https://iwpr.net/ezwgy857"
    },
    {
     "id": "tuik",
     "t": "TÜİK: Türkiýäniň adrese esaslanýan ilat ýazuwy 2024",
     "u": "https://data.tuik.gov.tr/Bulten/Index?p=Adrese-Dayali-Nufus-Kayit-Sistemi-Sonuclari-2024-53783&dil=1"
    },
    {
     "id": "joshua",
     "t": "Joshua Project: Özbegistan",
     "u": "https://joshuaproject.net/people_groups/print/15654/UZ"
    }
   ]
  }
 }
};
  ['fa', 'tk'].forEach(l => {
    const m = DATA[l].map, e = EXTRA[l];
    m.ui.layers.diaspora = e.ui.layerLabel;
    Object.keys(e.ui).forEach(k => { if(k !== 'layerLabel') m.ui[k] = e.ui[k]; });
    m.regions = e.regions;
    m.stats = e.stats;
  });
})();
