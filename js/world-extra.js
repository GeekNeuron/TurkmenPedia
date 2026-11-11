/* "Turkmens of the world": overview, Iran, Afghanistan, Uzbekistan, Russia, Pakistan/Turkey, China (Salars),
   plus the existing Iraq and terminology cards. Sources are registered in js/sections.js (SRC) via WORLD_SRC below.
   Hand-editable. Loaded after data-new.js. */
(function(){
  const W = {
 "fa": {
  "items": [
   {
    "id": "overview",
    "icon": "globe",
    "title": "ترکمن‌ها در جهان: نگاه کلی",
    "text": "حدود ۹ میلیون ترکمن در جهان زندگی می‌کنند (برآورد کلی؛ منابع فاصلهٔ زیادی دارند). هستهٔ اصلی در ترکمنستان است (سرشماری ۲۰۲۲: ۸۶٫۷٪ از ۷٬۰۵۷٬۸۴۱ نفر). بیرون از آن، بزرگ‌ترین جمعیت‌ها در ایران و افغانستان (هرکدام حدود یک میلیون، با برآوردهای ناهمخوان) و ازبکستان (۱۵۰ تا ۲۲۵ هزار) هستند؛ پس از آن‌ها پاکستان، ترکیه، روسیه (۴۱٬۳۲۸ نفر در ۲۰۲۱) و تاجیکستان (۱۵٬۱۷۱ نفر در ۲۰۱۰). «سالارهای» چین (۱۶۵٬۱۵۹ نفر در ۲۰۲۰) خود را از ایل اوغوزی سالور می‌دانند. ترکمن‌های عراق و سوریه («ترکمان») گروه قومی دیگری‌اند و جدا آمده‌اند. جدول آمار و نقشهٔ «ترکمن‌های فرامرزی» در بخش «نقشه» است.",
    "srcs": "wikiTurkmens,censusTm"
   },
   {
    "id": "iran",
    "icon": "compass",
    "title": "ترکمن‌های ایران (ترکمن‌صحرا)",
    "text": "شمار ترکمن‌های ایران را از ۰٫۵ تا ۲٫۴ میلیون برآورد می‌کنند (چند منبع حدود یک میلیون می‌گویند)؛ منبع رسمی روشنی برای شمار قومی نیست. بیشترشان در ترکمن‌صحرا، یعنی شمال استان گلستان، زندگی می‌کنند (شهرهای اصلی: گنبد کاووس و بندر ترکمن؛ و آق‌قلا، کلاله، مراوه‌تپه، گمیشان) و بخشی هم در خراسان شمالی و رضوی. ترکمن‌های ایران سنی‌مذهب‌اند. ایل‌های یموت، گوکلن و تکه از سدهٔ ۱۶ در ایران بوده‌اند (ایگدیر، ساریق و سالار هم). بنا به برآورد دایرةالمعارف TDV حدود ۹۰ هزار گوکلن در ترکمن‌صحرا هست؛ مختومقلی از تیرهٔ «گرکز» گوکلن بود. گویش «ترکمنی جنوبی» با ترکمنی ترکمنستان قابل‌فهم متقابل است.",
    "srcs": "iranTurkmen,turkmenSahra,tdvGoklen"
   },
   {
    "id": "afghan",
    "icon": "compass",
    "title": "ترکمن‌های افغانستان",
    "text": "شمار ترکمن‌های افغانستان حدود یک میلیون (۱ تا ۳ درصد جمعیت) برآورد می‌شود و بیشتر در شمال زندگی می‌کنند: بادغیس، بلخ، فاریاب، هرات و جوزجان. منابع دربارهٔ سهم آنان در هر ولایت ناهمخوان‌اند (مثلاً در جوزجان از حدود ۱۰٪ تا «اکثریت محلی»). ساختارشان بر نسب پدری استوار است؛ بیشتر کشاورز-دامدارند و سنی‌اند. بخشی از آنان نوادگان ارساری‌هایی‌اند که پس از انقلاب ۱۹۱۷ و در اوایل دههٔ ۱۹۲۰ از ترکمنستان به افغانستان گریختند؛ جنگ ۱۹۷۹ بسیاری را به پاکستان و از آنجا به ترکیه کشاند (بخش بعد).",
    "srcs": "afghanTurkmen,euaaTurkmen,jamestownAf,rferlPak"
   },
   {
    "id": "uzbek",
    "icon": "compass",
    "title": "ترکمن‌های ازبکستان",
    "text": "شمار ترکمن‌های ازبکستان را دست‌کم ۱۵۰ هزار (IWPR) تا ۲۲۵ هزار (Joshua Project) گفته‌اند؛ در ثبت رسمی ازبکستان ۱۹۴٬۰۷۶ نفر (۲۰۲۶، به نقل ویکی‌پدیا) آمده. بیشتر در خوارزم، سورخان‌دریا و قره‌قالپاقستان زندگی می‌کنند. در ناحیهٔ خیوه ایل‌های گوکلن (ایلیالی تا تورتکول) و چودور ساکن‌اند. ترکمن‌ها از قدیم با خانات خیوه پیوند داشتند: به گفتهٔ TDV در زمان سفیان‌خان (۱۵۲۹–۱۵۳۵) گوکلن‌ها سالی ۱۲ هزار گوسفند به خانات می‌دادند، در حالی که تکه و یموت و ساریق روی هم ۸ هزار.",
    "srcs": "iwprUz,joshuaUz,wikiTurkmens,tdvGoklen"
   },
   {
    "id": "russia",
    "icon": "compass",
    "title": "ترکمن‌های روسیه: «تروخمن‌ها» در استاوروپول",
    "text": "در سرشماری ۲۰۲۱ روسیه ۴۱٬۳۲۸ ترکمن ثبت شد. گروه تاریخی آنان «تروخمن‌ها»ی کرای استاوروپول‌اند که طبق پژوهش توکارف در سدهٔ ۱۷ به قفقاز شمالی کوچیدند؛ در سدهٔ ۱۹ منابع روسی گاه همهٔ ترکمن‌ها را «تروخمن» می‌نامیدند. گویش تروخمنی در ۲۰۲۱ حدود ۹٬۳۵۷ گویشور در استاوروپول داشت و از ناگایی‌ها، تاتارها و قلموق‌ها اثر پذیرفته. ناحیهٔ «ترکمنسکی» (مرکز: لتنایا استاوکا، تأسیس ۱۹۲۵) در سرشماری ۲۰۱۰ از ۲۵٬۹۴۸ نفر، ۵٬۰۴۳ ترکمن (حدود ۱۹٫۴٪) داشت؛ یعنی ترکمن‌ها در آن اکثریت نیستند.",
    "srcs": "eki,wikiTurkmens"
   },
   {
    "id": "diaspora",
    "icon": "compass",
    "title": "پاکستان و ترکیه: ترکمن‌های آواره",
    "text": "پاکستان: بنا به ویکی‌پدیا بیش از ۶۰ هزار ترکمن (برآورد UN و ملی) در پاکستان هست، هرچند منبع دیگری ۱۷۱ هزار می‌گوید؛ بیشترشان نوادگان پناهندگانی‌اند که پس از ۱۹۱۷ از ترکمنستان به افغانستان و پس از جنگ ۱۹۷۹ از آنجا به پاکستان آمدند. قالی‌بافی روزی اصلی آنان است. ترکیه: بخش بزرگی از ترکمن‌های افغان‌تبار از پاکستان به ترکیه رفتند و در ۱۹۸۲ دسته‌جمعی در استانبول جا گرفتند. افزون بر آن، تا مارس ۲۰۲۳ دست‌کم ۱۱۳٬۴۴۹ تبعهٔ ترکمنستان اجازهٔ اقامت در ترکیه داشتند و برخی گزارش‌ها شمار واقعی را بیشتر می‌دانند. آمار قومی دقیقی وجود ندارد.",
    "srcs": "wikiPak,rferlPak,iwprIst,tmhelsinkiTr"
   },
   {
    "id": "china",
    "icon": "compass",
    "title": "سالارهای چین: نوادگان سالور؟",
    "text": "سالارها اقلیتی ترک‌زبان در چین‌اند (۱۶۵٬۱۵۹ نفر در سرشماری ۲۰۲۰؛ ۱۳۰٬۶۰۷ در ۲۰۱۰) که در شهرستان خودمختار سالار شونهوا در چینگهای، و در گانسو و ایلی (سین‌کیانگ) زندگی می‌کنند. زبانشان به شاخهٔ اوغوزی ترکی تعلق دارد و سنت آن‌ها را از ایل سالور می‌داند. روایت رایج می‌گوید دو برادر به نام‌های «هارامان» و «آهمان» در سده‌های ۱۳–۱۴ از سمرقند گریختند و با یک قرآن بر شتر به شونهوا رسیدند (آن قرآن در مسجد جیه‌زی نگه داشته می‌شود). پژوهشگران خاستگاه دقیق را «نامطمئن» می‌دانند و زبانشان بسیار از چینی و تبتی وام گرفته (حدود ۲۰٪ و ۱۰٪ واژگان در گویش آمدو).",
    "srcs": "wikiSalar,inalcoSalar"
   }
  ],
  "ui": {
   "intro": "این بخش خلاصه‌ای از منابع عمومی و پژوهشی دربارهٔ ترکمن‌ها بیرون از ترکمنستان است: ایران، افغانستان، ازبکستان، روسیه، پاکستان، ترکیه، چین، و ترکمن‌های عراق. شمار و درصدها برآورد و گاه ناهمخوان‌اند و ادعاهای سیاسی (مثل کرکوک) فقط «گزارش منبع» هستند، نه داوری. منبع هر کارت با دکمهٔ «منابع» دیده می‌شود."
  },
  "subtitle": "از ایران و افغانستان تا ازبکستان، روسیه، ترکیه، چین و عراق",
  "explore": "ترکمن‌ها بیرون از ترکمنستان: ایران، افغانستان، ازبکستان، روسیه، پاکستان، ترکیه، چین و عراق؛ با آمار برآوردی، منبع هر ادعا و بی‌طرفی دربارهٔ اختلاف‌های سیاسی."
 },
 "tk": {
  "items": [
   {
    "id": "overview",
    "icon": "globe",
    "title": "Dünýädäki türkmenler: umumy syn",
    "text": "Dünýäde takmynan 9 million türkmen ýaşaýar (umumy çaklama; çeşmeleriň aralygy uly). Esasy topary Türkmenistanda (2022-nji ýyl ilat ýazuwy: 7 057 841 adamyň 86,7%-i). Ondan daşarda iň uly ilat Eýranda we Owganystanda (ikisinde hem takmynan bir million, çaklamalar biri-birine gabat gelmeýär) we Özbegistanda (150–225 müň); soňra Pakistan, Türkiýe, Russiýa (2021-nji ýylda 41 328 adam) we Täjigistan (2010-njy ýylda 15 171 adam). Hytaýyň «Salarlary» (2020-nji ýylda 165 159 adam) özlerini oguzyň Salur tiresinden hasaplaýarlar. Yrak we Siriýa türkmenleri («türkmenler») başga etniki topardyr we aýratyn berilýär. Statistika tablisasy we «Serhetaşyr türkmenler» kartasy «Karta» bölüminde.",
    "srcs": "wikiTurkmens,censusTm"
   },
   {
    "id": "iran",
    "icon": "compass",
    "title": "Eýran türkmenleri (Türkmen sährasy)",
    "text": "Eýranyň türkmenleriniň sany çeşmelerde 0,5–2,4 million aralygynda çaklanylýar (birnäçe çeşme takmynan bir million diýýär); etniki san üçin aç-açan resmi çeşme ýok. Köpüsi Türkmen sährasynda, ýagny Golestanyň demirgazygynda ýaşaýar (esasy şäherler: Gonbad-e Kawus we Bender Türkmen; ýene Akgala, Kalala, Maraweh-Tepe, Gomişan) we bir bölegi Demirgazyk we Räzewi Horasanda. Eýranyň türkmenleri sunny musulmandyrlar. Ýomut, Göklen we Teke tireleri XVI asyrdan bäri Eýranda bolupdyr (Ygdyr, Saryk we Salyr hem). TDV ensiklopediýasynyň çaklamasyna görä Türkmen sährasynda takmynan 90 müň Göklen bar; Magtymguly Göklenleriň «Gerkez» tiresindendi. «Günorta türkmen» şiwesi Türkmenistanyň türkmen dili bilen özara düşnükli.",
    "srcs": "iranTurkmen,turkmenSahra,tdvGoklen"
   },
   {
    "id": "afghan",
    "icon": "compass",
    "title": "Owganystan türkmenleri",
    "text": "Owganystanyň türkmenleriniň sany takmynan bir million (ilatyň 1–3%-i) diýlip çaklanylýar we köpüsi demirgazykda ýaşaýar: Badgis, Balh, Faryab, Hyrat we Jowzjan. Çeşmeler olaryň welaýatlardaky paýy barada biri-birine gabat gelmeýär (meselem, Jowzjanda takmynan 10%-den «ýerli köplüge» çenli). Gurluşy kaka tarapyň nesline daýanýar; köpüsi daýhan-maldar we sunnydyr. Bir bölegi 1917-nji ýyl öwrülişiginden soň we 1920-nji ýyllaryň başynda Türkmenistandan Owganystana gaçan ärsarylaryň nesilleri; 1979-njy ýyl uruşy köpüsini Pakistana we ol ýerden Türkiýä sürüpdir (indiki bölüm).",
    "srcs": "afghanTurkmen,euaaTurkmen,jamestownAf,rferlPak"
   },
   {
    "id": "uzbek",
    "icon": "compass",
    "title": "Özbegistan türkmenleri",
    "text": "Özbegistanyň türkmenleriniň sanyny azyndan 150 müň (IWPR) we 225 müňe çenli (Joshua Project) diýýärler; Özbegistanyň resmi ýazuwynda 194 076 adam (2026, Wikipediýa boýunça) görkezilýär. Köpüsi Horezmde, Surhandarýada we Garagalpagystanda ýaşaýar. Hywa töwereginde Göklen (Ilýaly–Türtgül) we Çowdur tireleri ýaşaýar. Türkmenler gadymdan Hywa hanlygy bilen baglanyşykly: TDV-ä görä Sufýan hanyň döwründe (1529–1535) Göklenler hanlyga ýylda 12 müň goýun berýärdi, Teke, Ýomut we Saryk bolsa jemi 8 müň.",
    "srcs": "iwprUz,joshuaUz,wikiTurkmens,tdvGoklen"
   },
   {
    "id": "russia",
    "icon": "compass",
    "title": "Russiýanyň türkmenleri: Stawropoldaky «Truhmenler»",
    "text": "2021-nji ýyl Russiýanyň ilat ýazuwynda 41 328 türkmen hasaba alyndy. Taryhy topary Stawropol krainyň «Truhmenleri»; Tokarewiň barlagyna görä XVII asyrda Demirgazyk Kawkaza göçüpdirler; XIX asyrda rus çeşmeleri käwagt ähli türkmenlere «Truhmen» diýipdir. Truhmen şiwesinde 2021-nji ýylda Stawropolda takmynan 9 357 gürleýji bardy we ol nogaý, tatar we galmyk dilleriniň täsirini alypdyr. «Türkmen» etraby (merkezi Letniýa Stawka, 1925-nji ýylda döredilen) 2010-njy ýyl ilat ýazuwynda 25 948 adamdan 5 043 türkmen (takmynan 19,4%) saklaýardy; ýagny olar onda köplük däl.",
    "srcs": "eki,wikiTurkmens"
   },
   {
    "id": "diaspora",
    "icon": "compass",
    "title": "Pakistan we Türkiýe: göçüp ýören türkmenler",
    "text": "Pakistan: Wikipediýa boýunça Pakistanda 60 mingden gowrak türkmen (BMG we milli çaklamalar) bar, ýöne başga bir çeşme 171 müň diýýär; köpüsi 1917-nji ýyldan soň Türkmenistandan Owganystana we 1979-njy ýyl uruşundan soň şol ýerden Pakistana gelen gaçgaklaryň nesilleri. Haly dokamak olaryň esasy gazanjy. Türkiýe: owgan gelip çykyşly türkmenleriň uly bölegi Pakistandan Türkiýä göçüp, 1982-nji ýylda toplumlaýyn Stambulda ornaşypdyr. Mundan başga, 2023-nji ýylyň martyna çenli azyndan 113 449 Türkmenistan raýatynyň Türkiýede ýaşamak rugsady bardy we käbir habarlar hakyky sany has köp hasaplaýar. Takyk etniki statistika ýok.",
    "srcs": "wikiPak,rferlPak,iwprIst,tmhelsinkiTr"
   },
   {
    "id": "china",
    "icon": "compass",
    "title": "Hytaýyň Salarlary: Salyryň nesilleri?",
    "text": "Salarlar Hytaýda türki dilli azlyk (2020-nji ýyl ilat ýazuwynda 165 159 adam; 2010-njy ýylda 130 607), Çinhaýdaky Sunhua Salar awtonom etrabynda, Gansuda we Ilide (Sinszýan) ýaşaýarlar. Dili türki dilleriň oguz şahasyna degişli we däp olary Salur tiresinden hasaplaýar. Ýaýran rowaýata görä «Haraman» we «Ahman» atly iki dogan XIII–XIV asyrlarda Samarkantdan gaçyp, düýe üstünde Gurhan bilen Sunhuýa gelipdirler (ol Gurhan Jiezi metjidinde saklanýar). Alymlar takyk gelip çykyşyny «anyk däl» hasaplaýarlar we dili hytaý we tibet dillerinden köp söz alypdyr (Amdo şiwesinde sözleriň takmynan 20% we 10%-i).",
    "srcs": "wikiSalar,inalcoSalar"
   }
  ],
  "ui": {
   "intro": "Bu bölüm Türkmenistanyň daşyndaky türkmenler barada umumy we ylmy çeşmeleriň gysgaça mazmuny: Eýran, Owganystan, Özbegistan, Russiýa, Pakistan, Türkiýe, Hytaý we Yrak türkmenleri. San we göterimler çaklamadyr we käwagt biri-birine gabat gelmeýär; syýasy talaplar (Kerkük ýaly) diňe «çeşmäniň habary», bahalandyrma däl. Her kartyň çeşmesi «Çeşmeler» düwmesi bilen görünýär."
  },
  "subtitle": "Eýrandan we Owganystandan Özbegistana, Russiýa, Türkiýä, Hytaýa we Yraga çenli",
  "explore": "Türkmenistanyň daşyndaky türkmenler: Eýran, Owganystan, Özbegistan, Russiýa, Pakistan, Türkiýe, Hytaý we Yrak; çaklama sanlar, her talabyň çeşmesi we syýasy jedellerde bitarap."
 }
};
  ['fa', 'tk'].forEach(l => {
    const w = DATA[l].world, old = w.items, keep = id => old.find(x => x.id === id);
    w.items = [...W[l].items.slice(0, 1), ...W[l].items.slice(1, 7), keep('iraq'), keep('iraq2'), keep('terms')].filter(Boolean);
    w.ui.intro = W[l].ui.intro;
    DATA[l].subtitle.world = W[l].subtitle;
    DATA[l].explore.world = W[l].explore;
  });
  window.WORLD_SRC = [
 {
  "id": "wikiTurkmens",
  "t": [
   "ویکی‌پدیا: Turkmens",
   "Wikipedia: Turkmens"
  ],
  "u": "https://en.wikipedia.org/wiki/Turkmens"
 },
 {
  "id": "censusTm",
  "t": [
   "سرشماری ۲۰۲۲ ترکمنستان (stat.gov.tm)",
   "Türkmenistanyň 2022 ýyl ilat ýazuwy (stat.gov.tm)"
  ],
  "u": "https://stat.gov.tm/en/population-census"
 },
 {
  "id": "tdvGoklen",
  "t": [
   "TDV İslâm Ansiklopedisi: Göklen",
   "TDV İslâm Ansiklopedisi: Göklen"
  ],
  "u": "https://islamansiklopedisi.org.tr/goklen"
 },
 {
  "id": "euaaTurkmen",
  "t": [
   "EUAA: ترکمن‌های افغانستان",
   "EUAA: Owganystanyň türkmenleri"
  ],
  "u": "https://www.euaa.europa.eu/coi-report-afghanistan-country-focus/487-turkmen"
 },
 {
  "id": "jamestownAf",
  "t": [
   "Jamestown: ترکمن‌های افغانستان",
   "Jamestown: Owganystanyň türkmenleri"
  ],
  "u": "https://jamestown.org/afghanistans-ethnic-turkmens-enemies-or-allies-for-ashgabat/"
 },
 {
  "id": "iwprUz",
  "t": [
   "IWPR: ترکمن‌های ازبکستان",
   "IWPR: Özbegistanyň türkmenleri"
  ],
  "u": "https://iwpr.net/ezwgy857"
 },
 {
  "id": "joshuaUz",
  "t": [
   "Joshua Project: ازبکستان",
   "Joshua Project: Özbegistan"
  ],
  "u": "https://joshuaproject.net/people_groups/print/15654/UZ"
 },
 {
  "id": "eki",
  "t": [
   "کتاب سرخ EKI: Trukhmens",
   "EKI Gyzyl kitaby: Trukhmens"
  ],
  "u": "https://www.eki.ee/books/redbook/trukhmens.shtml"
 },
 {
  "id": "wikiPak",
  "t": [
   "ویکی‌پدیا: Turkmen in Pakistan",
   "Wikipedia: Turkmen in Pakistan"
  ],
  "u": "https://en.wikipedia.org/wiki/Turkmen_in_Pakistan"
 },
 {
  "id": "rferlPak",
  "t": [
   "رادیو آزادی: ترکمن‌های افغان‌تبار",
   "Azatlyk radiosy: owgan türkmenleri"
  ],
  "u": "https://www.rferl.org/a/1096306.html"
 },
 {
  "id": "iwprIst",
  "t": [
   "IWPR: ترکمن‌های افغان‌تبار در استانبول",
   "IWPR: Stambuldaky owgan türkmenleri"
  ],
  "u": "https://iwpr.net/tysbemd3"
 },
 {
  "id": "tmhelsinkiTr",
  "t": [
   "بنیاد هلسینکی ترکمنستان: اقامت در ترکیه (۲۰۲۳)",
   "Türkmenistan Helsinki Gaznasy: Türkiýede ýaşamak rugsady (2023)"
  ],
  "u": "https://tmhelsinki.org/en/article/7c68626f-8d7d-4d2c-b7c1-8caf69aaf474"
 },
 {
  "id": "wikiSalar",
  "t": [
   "ویکی‌پدیا: Salar people",
   "Wikipedia: Salar people"
  ],
  "u": "https://en.wikipedia.org/wiki/Salar_people"
 },
 {
  "id": "inalcoSalar",
  "t": [
   "INALCO: Salar",
   "INALCO: Salar"
  ],
  "u": "https://inalco.fr/en/salar"
 }
];
})();
