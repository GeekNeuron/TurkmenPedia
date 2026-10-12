/* =========================================================
   TurkmenPedia — Turkmen names (js/names.js)

   Structure
   - ELEMENTS: building blocks that Turkmen compound names are made of
               (birth day/event, faith, nature, virtue, verbs, titles…).
   - SIMPLE:   single-element names with a short gloss.
   - COMPOUNDS: names formed by joining ELEMENTS (glossed automatically,
               word-for-word, so the gloss is always consistent with the
               element table).
   - KNOWN:    verified notable bearers (poets, writers, composers) that
               appear elsewhere in this encyclopedia.

   NOTE: meanings are literal / approximate glosses compiled for
   education. Folk etymology of names is often uncertain — have a native
   speaker review before publishing.
   ========================================================= */
const TS_NAMES = (function(){

  /* id | Persian-script approximation | fa gloss | tk gloss | type */
  const ELEMENTS_RAW = `
anna|آننا|جمعه (روز هفته)|Anna güni (juma)|birth
juma|جمعه|روز جمعه|juma güni|birth
oraz|اوراز|روزه، ماه روزه|oraza, oraza aýy|birth
baýram|بایرام|عید، جشن|baýram|birth
gurban|قربان|قربانی، عید قربان|gurban, gurban baýramy|birth
toý|توی|عروسی، جشن|toý|birth
sapar|ساپار|صفر (ماه قمری)|Sapar aýy|birth
hudaý|خودای|خدا|hudaý|faith
alla|آلله|الله، خدا|Alla|faith
hoja|خوجه|خواجه، فرد مقدس|hoja|faith
seýit|سئیت|سید (از نسل پیامبر)|seýit|faith
weli|ولی|ولی، دوست خدا|weli|faith
muhammet|محمد|محمد (پیامبر اسلام)|Muhammet|faith
mämmet|مهمت|گونهٔ ترکمنیِ «محمد»|«Muhammet» adynyň türkmen görnüşi|faith
myrat|میرات|آرزو، مراد|arzuw, myrat|virtue
bagt|باغت|بخت، خوشبختی|bagt, bagtlylyk|virtue
nazar|نظر|نگاه، نظر لطف|nazar|virtue
döwlet|دؤولت|دولت، اقبال|döwlet, bagt|virtue
ýagşy|یاغشی|خوب|ýagşy|virtue
mähir|مهر|مهربانی، محبت|mähir|virtue
şat|شات|شاد، خوشحال|şat|virtue
öwez|اؤوز|جبران، عوض|öwez|virtue
dost|دوست|دوست|dost|virtue
gözel|گوزل|زیبا|gözel|virtue
senem|سنم|معشوق، محبوب|senem|virtue
nur|نور|نور، روشنایی|nur|nature
aý|آی|ماه (آسمان)|aý|nature
gün|گون|خورشید، روز|gün|nature
ýyldyz|ییلدیز|ستاره|ýyldyz|nature
gül|گول|گل|gül|nature
bahar|بهار|بهار|bahar|nature
ýaz|یاز|بهار (فصل)|ýaz|nature
nar|نار|انار|nar|nature
nabat|نبات|نبات، قند بلوری|nabat|nature
altyn|آلتین|طلا|altyn|nature
kümüş|کومش|نقره|kümüş|nature
ak|آق|سفید، پاک|ak|nature
maral|مارال|آهو، غزال|maral|nature
arslan|آرسلان|شیر|arslan|nature
bürgüt|بورگوت|عقاب|bürgüt|nature
laçyn|لاچین|شاهین|laçyn|nature
jemal|جمال|زیبایی|jemal|virtue
batyr|باتیر|دلیر، قهرمان|batyr|title
mert|مرت|شجاع، جوانمرد|mert|title
gylyç|گیلیچ|شمشیر|gylyç|title
şa|شا|شاه|şa|title
soltan|سلطان|سلطان|soltan|title
han|خان|خان، فرمانروا|han|title
beg|بگ|بیگ، فرمانروا|beg|title
serdar|سردار|سردار، فرمانده|serdar|title
bibi|بی‌بی|بانوی محترم|bibi|title
hanym|خانیم|بانو|hanym|title
ata|آتا|پدر، نیا|ata|family
ogul|اوغول|پسر|ogul|family
gyz|گیز|دختر|gyz|family
guly|گولی|بنده، غلام|guly|family
berdi|بردی|داد، بخشید|berdi (bermek işliginden)|verb
geldi|گلدی|آمد|geldi (gelmek işliginden)|verb
durdy|دوردی|ایستاد، ماند|durdy (durmak işliginden)|verb
dogdy|دوغدی|زاده شد، طلوع کرد|dogdy (dogmak işliginden)|verb
gerek|گرک|لازم است|gerek|verb
döwran|دؤوران|روزگار، دوران|döwran|virtue
ayna|آینا|آینه|ayna|nature
daýanç|دایانچ|تکیه‌گاه، پشتیبان|daýanç|virtue
esen|اسن|سالم، تندرست (در یک منبع: نسیم)|esen|virtue
tirkiş|تیرکش|ترکش، تیردان|tirkiş|title
wezir|وزیر|وزیر، یاور|wezir|title
yklym|یکلیم|اقلیم، سرزمین|yklym|nature
rüstem|رستم|رستم (پهلوان)|rüstem|title
tagan|تاگان|سه‌پایه (ابزار آشپزی)|tagan|nature
jelil|جلیل|بزرگوار|jelil|virtue
kasym|قاسم|قاسم (بخش‌کننده)|kasym|faith
mälik|مالیک|فرمانروا، پادشاه|mälik|title
tylla|تیلا|طلا|tylla|nature
zyba|زیبا|زیبا|zyba|virtue
badam|بادام|بادام|badam|nature
şirin|شیرین|شیرین|şirin|virtue
kaka|کاکا|پدر، برادر بزرگ|kaka|family
eziz|عزیز|گرامی، عزیز|eziz|virtue
rejep|رجب|رجب (ماه)؛ در منبع: احترام|rejep|birth
sona|سونا|مرغابی ماده؛ زیبا|sona|nature
alty|آلتی|شش (عدد؛ نام‌گذاری بر پایهٔ عدد)|alty|virtue
çary|چاری|شاه، تزار|çary|title
güýç|گویچ|نیرو، توان|güýç|virtue
begenç|بگنچ|شادی، خرسندی|begenç|virtue
täç|تاچ|تاج|täç|title
derýa|دریا|رود، دریا|derýa|nature
didar|دیدار|دیدار، چهره|didar|virtue
kerim|کریم|بخشنده|kerim|virtue
dünýä|دونیا|جهان، زمین|dünýä|nature
mähri|مهری|ماه یا مهر (احتمالاً از فارسی)|mähri|virtue
aman|امان|سلامت، ایمنی|aman|virtue
aga|آغا|آقا، برادر بزرگ|aga|family
jan|جان|جان، عزیز|jan|virtue
ýar|یار|یار، دوست|ýar|virtue
baý|بای|ثروتمند|baý|virtue
jahan|جهان|جهان|jahan|nature
çemen|چمن|چمن، سبزه‌زار|çemen|nature
`;

  const ELEMENTS = ELEMENTS_RAW.trim().split('\n').map(l=>{
    const [id,script,fa,tk,type] = l.split('|');
    return { id, script, fa, tk, type };
  });
  const EL = {}; ELEMENTS.forEach(e => EL[e.id] = e);

  /* tk | script | fa | tk-gloss | gender (m, f, u = both) */
  const SIMPLE_RAW = `
Alp|آلپ|دلاور، پهلوان|Batyr, pälwan|m
Berdi|بردی|«داد/بخشید»؛ جزء پایانیِ بسیاری از نام‌های ترکیبی|«berdi» — birnäçe goşma adyň ikinji bölegi|m
Arslan|آرسلان|شیر|Arslan (şir)|m
Batyr|باتیر|دلیر، قهرمان|Gaýduwsyz, gahryman|m
Bürgüt|بورگوت|عقاب|Bürgüt guşy|m
Laçyn|لاچین|شاهین|Laçyn guşy|m
Mert|مرت|شجاع، جوانمرد|Gaýduw, mert|m
Serdar|سردار|فرمانده، رهبر|Serkerde, ýolbaşçy|m
Han|خان|فرمانروا|Hökümdar|m
Beg|بگ|بیگ، فرمانروا|Beg, hökümdar|m
Gylyç|گیلیچ|شمشیر|Gylyç|m
Aman|امان|ایمن، سالم|Aman, sagdyn|m
Eziz|عزیز|گرامی|Eziz, gadyrly|m
Täze|تازه|نو، تازه|Täze|m
Maksat|مقصد|هدف، مقصود|Maksat|m
Myrat|میرات|آرزو، مراد|Arzuw, myrat|m
Bagtyýar|باغتیار|خوشبخت|Bagtly|m
Dost|دوست|دوست|Dost|m
Ýoldaş|یولداش|همراه، دوست|Ýoldaş|m
Kemal|کمال|کمال، پختگی|Kemal|m
Gara|قارا|سیاه (نامی مردانه)|Gara|m
Juma|جمعه|جمعه (روز تولد)|Juma güni|m
Oraz|اوراز|ماه روزه|Oraza aýy|m
Baýram|بایرام|عید، جشن|Baýram|m
Gurban|قربان|عید قربان، قربانی|Gurban|m
Nury|نوری|روشن، نورانی|Nury, nurly|m
Sahy|ساحی|بخشنده، سخی|Sahy|m
Kerim|کریم|بخشنده، بزرگوار|Kerim|m
Hydyr|خیدیر|خضر (از نام‌های اسلامی)|Hydyr|m
Rejep|رجب|رجب (ماه قمری)|Rejep|m
Ramazan|رمضان|رمضان (ماه روزه)|Ramazan|m
Sapar|ساپار|صفر (ماه قمری)|Sapar aýy|m
Ýusup|یوسوپ|یوسف|Ýusup|m
Ýunus|یونس|یونس|Ýunus|m
Muhammet|محمد|محمد|Muhammet|m
Mämmet|مهمت|گونهٔ ترکمنیِ محمد|Muhammediň türkmen görnüşi|m
Nazar|نظر|نگاه، نظر لطف|Nazar|m
Tahyr|طاهیر|پاک، طاهر (قهرمان دستان زهره و طاهر)|Tahyr (Zöhre-Tahyr dessanynyň gahrymany)|m
Aşyr|آشیر|عاشورا|Aşura|m
Hemra|همرا|همراه، هم‌سفر|Hemra, ýoldaş|u
Begenç|بگنچ|شادی، خوشحالی|Begenç, şatlyk|u
Nur|نور|نور|Nur|u
Jemal|جمال|زیبایی|Jemal, gözellik|u
Abadan|آبادان|آباد، سرسبز|Abadan, gür|f
Aýna|آینه|آینه، شیشه|Aýna|f
Bahar|بهار|بهار|Bahar|f
Gözel|گوزل|زیبا|Gözel|f
Gunça|گونچا|غنچه|Gunça|f
Gülistan|گلستان|گلزار، باغ گل|Gülistan|f
Gülzar|گلزار|گلزار|Gülzar|f
Jennet|جنت|بهشت|Jennet|f
Jeýran|جیران|آهو (غزال)|Jeýran|f
Maral|مارال|آهو، غزال|Maral|f
Mähri|مهری|مهر، مهربانی|Mähri (mähirden)|f
Mähriban|مهربان|مهربان، دوست‌داشتنی|Mähriban|f
Merjen|مرجان|مرجان|Merjen|f
Meňli|منگلی|نامی دخترانه در ترانه‌های ترکمن (ترانهٔ «آق‌منگلی» با شعر کمینه)|Türkmen aýdymlarynda gyz ady (Kemineniň «Akmeňli» goşgusy)|f
Senem|سنم|معشوق، محبوب|Senem|f
Şasenem|شاسنم|«معشوق شاه»؛ قهرمان دستان «شاسنم و غریب»|«Şasenem-Garyp» dessanynyň gahrymany|f
Zöhre|زهره|ستارهٔ زهره (ناهید)؛ قهرمان «زهره و طاهر»|Zöhre (Çolpan ýyldyzy); «Zöhre-Tahyr» dessanynyň gahrymany|f
Leýli|لیلی|لیلی (قهرمان «لیلی و مجنون»)|Leýli («Leýli we Mejnun»)|f
Zeliha|زلیخا|زلیخا (داستان یوسف و زلیخا)|Zeliha («Ýusup we Zeliha»)|f
Kümüş|کومش|نقره|Kümüş|f
Altyn|آلتین|طلا|Altyn|f
Läle|لاله|لاله|Läle|f
Ýasemin|یاسمن|یاسمن|Ýasemin|f
Hanym|خانیم|بانو|Hanym|f
Bibi|بی‌بی|بانوی محترم (عنوان)|Bibi|f
Aýşa|عایشه|عایشه|Aýşa|f
Patma|فاطمه|گونهٔ ترکمنیِ فاطمه|Patma|f
Hajar|هاجر|هاجر|Hajar|f
Zeýnep|زینب|زینب|Zeýnep|f
Akmyrat|آق‌میرات|آرزوی پاک|Päk arzuw|m
Aýdyň|آیدین|روشن، آشکار|Aýdyň, açyk|m
Aýbek|آی‌بک|بیگِ ماه|Aý beg|m
Berkarar|برقرار|پایدار، استوار|Berkarar, pugta|m
Bäşir|بشیر|مژده‌دهنده|Buşlaýjy|m
Dowran|دوران|روزگار، زمانه|Dowran, zaman|m
Gaýgysyz|قایغی‌سیز|بی‌غم|Gaýgysyz|m
Hajy|حاجی|حاجی، زائر مکه|Hajy|m
Işan|ایشان|پیر طریقت، بزرگ دینی|Işan|m
Merdan|مردان|مردان، دلیران|Merdan|m
Rustam|رستم|رستم (پهلوان شاهنامه)|Rustam|m
Şükür|شکور|شکر، سپاس|Şükür|m
Gaplaň|قاپلان|ببر|Gaplaň|m
Börü|بوری|گرگ|Börü|m
Gyrat|قیرات|نام اسب گوروغلی در حماسه|Görogly dessanyndaky at|m
Ýolbars|یولبارس|پلنگ|Ýolbars|m
Hasan|حسن|حسن (نام اسلامی)|Hasan|m
Hüseýin|حسین|حسین (نام اسلامی)|Hüseýin|m
Ali|علی|علی (نام اسلامی)|Ali|m
Ömer|عمر|عمر (نام اسلامی)|Ömer|m
Osman|عثمان|عثمان (نام اسلامی)|Osman|m
Abdylla|عبدالله|بندهٔ خدا|Allanyň guly|m
Ybraýym|ابراهیم|ابراهیم (نام پیامبر)|Ybraýym|m
Ysmaýyl|اسماعیل|اسماعیل (نام پیامبر)|Ysmaýyl|m
Musa|موسی|موسی (نام پیامبر)|Musa|m
Ýakyp|یعقوب|یعقوب (نام پیامبر)|Ýakyp|m
Süleýman|سلیمان|سلیمان (نام پیامبر)|Süleýman|m
Dawut|داود|داوود (نام پیامبر)|Dawut|m
Idris|ادریس|ادریس (نام پیامبر)|Idris|m
Rahym|رحیم|مهربان|Rehimli|m
Rahman|رحمان|بخشنده|Rahman|m
Nepes|نپس|نَفَس، دم|Nepes|m
Magtymguly|مختومقلی|«بندهٔ مخدوم»؛ نام شاعر ملی|Magtymguly, milli şahyr|m
Kemine|کمینه|فروتن، کوچک (تخلص شاعر)|Kemine, ýönekeý|m
Azady|آزادی|آزاد، آزادگی (تخلص شاعر)|Azady, erkin|m
Andalyp|آندلیب|بلبل (تخلص شاعر)|Andalyp (bilbil)|m
Jeýhun|جیحون|رود آمودریا|Jeýhun (Amyderýa)|m
Murgap|مرغاب|رود مرغاب (مرو)|Murgap derýasy|u
Arzuw|آرزو|آرزو|Arzuw|u
Röwşen|روشن|روشن، تابان|Röwşen, ýagty|u
Dilbär|دلبر|دلبر، دلربا|Dilbär|f
Dilşat|دلشاد|دل‌شاد|Dilşat|f
Gülnaz|گل‌ناز|گل ناز، دلربا|Gül + naz|f
Gülşen|گلشن|گلزار|Gülşen|f
Gülýaz|گل‌یاز|گلِ بهار|Gül + ýaz|f
Hurma|خورما|خرما|Hurma|f
Jahan|جهان|جهان|Jahan|f
Jemile|جمیله|زیبا|Jemile|f
Kämile|کامله|کامل|Kämile|f
Nigär|نگار|نگار، محبوب|Nigär|f
Perizat|پری‌زاد|پری‌زاده|Perizat|f
Selbi|سلبی|سرو (درخت)|Selbi (serw)|f
Sona|سونا|مرغابی ماده؛ زیبا|Sona|f
Şirin|شیرین|شیرین|Şirin|f
Täzegül|تازه‌گل|گل تازه|Täze + gül|f
Zarina|زرینه|زرین|Zarina|f
Zülfiýa|زلفیه|دارای زلف زیبا|Zülfiýa|f
Fatyma|فاطمه|فاطمه (نام اسلامی)|Fatyma|f
Hatyja|خدیجه|خدیجه (نام اسلامی)|Hatyja|f
Merýem|مریم|مریم|Merýem|f
Sara|سارا|سارا|Sara|f
Gülçemen|گل‌چمن|گل چمن|Gül + çemen|f
Çemen|چمن|چمن، سبزه‌زار|Çemen|f
Jeren|جرن|آهو، غزال|Jeren|f
Ýyldyz|ییلدیز|ستاره|Ýyldyz|f
Güler|گولر|خندان، شاد|Güler|f
Açap|آچاپ|شگفت‌انگیز، زیبا (از «عجایب»)|Açaýyp owadan|f
Agagül|آغاگل|گلِ برادران (aga + gül)|Agalarynyň güli|f
Akjagül|آق‌جاگل|گلِ سپید (ak + gül)|Bagtly owadan gyz|f
Asly|اصلی|نجیب و باتربیت (از اصل)|Asylly, terbiýeli|f
Aýbike|آی‌بیکه|بانوی ماه‌صورت|Han-begiň aýaly; owadan gyz|f
Aýla|آیلا|دختری که در ماه کامل زاده شده|Dolan aýda dünýä gelen|f
Aýsel|آی‌سل|ماه‌ای که قامتش چون سرو است|Aý ýaly, selbi boýly|f
Aýsen|آی‌سن|مثل ماه زیبا|Aý ýaly gözel|f
Aýşagül|آیشاگل|گلِ زیبا، دراز عمر باد|Gül ýaly owadan, köp ýaşasyn|f
Bibiniýaz|بیبی‌نیاز|نیازِ بانو (bibi + niýaz)|Dilenip-ýalbarlyp alnan|f
Bibisara|بیبی‌سارا|بانوی محترم و آبرومند|Hormatly, abraýly|f
Bike|بیکه|بیکه، بانو|Hormatly uly derejeli|f
Jahanaý|جهان‌آی|جهان + آی (ماه)|Asmanyň aýy|f
Jamal|جمال|جمال، زیبایی|Owadan gözel|f
Jenan|جنان|جنان (بهشت‌ها)|Janlaryň jany|f
Durna|دورنا|درنا (پرنده)|Durna guş ýaly, sabyrly|f
Ejegyz|اجه‌گیز|دخترِ مادر (eje + gyz)|Ejesiniň gyzy|f
Ejeke|اجکه|صورت محبوب‌نامِ «eje» (خواهر بزرگ، مادر)|Aýrylan uly aýaldoganynyň ady|f
Ejow|اجو|صورت محبوب‌نامِ «eje»|Aýrylan ejäniň ady|f
Ene|انه|مادر، بانوی بزرگ|Aýrylan enäniň ady|f
Eneke|انکه|صورت محبوب‌نامِ «ene» (مادر)|Enekäniň ady|f
Gülnur|گل‌نور|دختر زیبای گل‌نور|Gül ýaly nurly|f
Hajat|حاجت|حاجت، خواسته|Isleg-arzuw edilip ýetilen|f
Halima|حلیمه|بردبار و مهربان|Ýuwaş-rehimli|f
Mama|ماما|دختری که نام مامای خود را گرفته|Mamasynyň ady|f
Mamagül|ماماگل|ماما + گل (mama + gül)|Mamasynyň güli|f
Maýa|مایا|آرام و مهربان|Ýuwaş mähirli|f
Melek|ملک|فرشته، نیکوکار چون فرشته|Perişte|f
Näz|ناز|ناز|Niýaz gysgalany|f
Näzli|نازلی|دختر دلربا و زیبا|Näzli gözel gyz|f
Nergis|نرگس|گل زردبرگ و زیبا، نرگس|Sary ýaprakly gül|f
Nowbahar|نوبهار|دختری که در آغاز بهار زاده شد|Baharyň başlanan wagty|f
Nowça|نوچه|نوجوان، تازه‌رس|Sagdyn, ýaş owadan|f
Nowgül|نوگل|گل نو|Täze gül|f
Ömür|عمر|عمر|Ömri bolsun, kän ýaşasyn|f
Peri|پری|پری|Perizat ýaly owadan|f
Ryzwan|رضوان|یکی از نام‌های بهشت|Jennetiň bir ady|f
Selimä|سلیمه|سلیمه، سالم|Sagdyn-kemsiz|f
Solmaz|سولماز|نپژمرد؛ همیشه تازه|Solmasyn, elmydama ter|f
Şemşad|شمشاد|شمشاد (درخت)|Gaty, sagdyn agaç|f
Tarlaň|تارلان|پرندهٔ شکاری شبیه باز|Laçyna meňzeş guş|f
Turan|توران|توران (سرزمین ترکان)|Gadymy Türk ýurdy|f
Ülker|اولکر|پروین (خوشهٔ ستارگان)|Ülker ýyldyzy|f
Ýüpek|یوپک|ابریشم|Ýüpek ýaly ýumşak|f
Kekil|کاکل|کاکل (موی بافته)|Käkilli saçly owadan|f
Leýla|لیلی|لیلی (نام عاشقانه)|Leýli sözünden dörän|f
Baýjan|بای‌جان|بای + جان|Baý hem jana ýakymly|u
Baba|بابا|پسری که نام نیایش را گرفته|Babasynyň ady|m
Babajan|باباجان|جانِ نیای خود|Babasynyň jany|m
Babahan|بابا‌خان|خانِ بابای خود|Babasynyň Han ogly|m
Babyr|بابیر|مثل ببر و پلنگ نیرومند باد|Bäbiýr, Ýolbars ýaly güýçli|m
Baky|باقی|پایدار؛ دراز عمر باد|Köp ýaşasyn|m
Balkan|بالکان|بالکان (کوه/ولایت)|Balkan dagynyň ady|m
Baýar|بایار|توانگر و دولتمند|Baý-döwletli|m
Baýly|بایلی|ثروتمند و دولتمند|Baý-döwletli|m
Baýry|بایری|ثروتمند و باتجربه|Baý hem tejribeli|m
Bazar|بازار|پسری که روز یکشنبه (بازار) زاده شد|Bazar güni dünýä gelen|m
Begçe|بگچه|ارجمند؛ بگِ کوچک شادی‌آور|Kiçijik beg|m
Böke|بوکه|پهلوان، نیرومند|Pälwan-güýçli|m
Bugra|بوغرا|درشت و نیرومند چون شتر نر|Iki örküçli düýe ýaly|m
Jepbar|جبار|جبار|Taňrynyň guly, güýçli|m
Jüneýt|جنید|جنید|Goşun ýaly güýçli|m
Çawdur|چاودور|چاودور (ایل ترکمن)|Gadymy Türkmen taýpasy|m
Daňatar|دانتار|سپیده‌دم (daň + atar)|Daň atan wagty|m
Diýar|دیار|وطن، سرزمین، ایل و دیار|Watan-ülke, il-gün|m
Dörtguly|دورتگولی|«بندهٔ چهارم»: فرزند چهارم|Dördünji oglan|m
Durmuş|دورموش|زندگی|Dursun, köp ýaşasyn|m
Düşem|دوشم|پسری که دوشنبه زاده شد (düşenbe)|Düşenbe güni|m
Emin|امین|مورد اطمینان و راستگو|Ynamly-dogurçyl|m
Erkin|ارکین|آزاد زندگی کند|Azat-erkin|m
Etrek|اترک|اترک (رود)|Etrek derýasy boýunda|m
Faýzullah|فیض‌الله|فیض‌الله|Allahnyň faýzy siňen|m
Fazyl|فاضل|دانا و بافضیلت|Bilimli, akylly, dana|m
Gajar|قاجار|قاجار (ایل)|Gajar taýpasy|m
Garly|گارلی|زاده در هوای برفی|Garly howada dünýä gelen|m
Gaýrat|غیرت|غیرتمند و دلیر|Gaýratly-edermen|m
Gorgan|گرگان|گرگان (شهر/رود)|Gala ýaly gorysyn|m
Gürgen|گورگن|گورگن؛ از گرگان|Sagdyn agaç|m
Habip|حبیب|حبیب|Hebip, ýakyn ýoldaş|m
Hakan|خاقان|خاقان (فرمانروا)|Gadymy Türk han soltany|m
Halil|خلیل|خلیل|Wepaly dost|m
Hamid|حمید|حمید|Öwgä mynasyp|m
Haýdar|حیدر|حیدر (شیر)|Arslan-ederman|m
Hekim|حکیم|حکیم|Bilgir-tebip|m
Magtym|مختوم|مختوم (لقب: آقا، سرور)|Aga, ýolbaşçy|m
Mahmud|محمود|محمود|Öwgüli|m
Maşal|مشعل|مشعل، روشن و درخشان|Şöhleli, nurly|m
Mämi|مامی|صورت کوتاهِ «محمد»|Mämed gysgalany|m
Mejid|مجید|مجید|Görmegöý, şanly|m
Muhammed|محمد|محمد|Öwgä mynasyp|m
Murtaza|مرتضی|مرتضی|Saýlanan|m
Mustafa|مصطفی|مصطفی|Saýlanan|m
Nagmat|نعمت|نعمت|Döwletli|m
Nygmat|نعمت|نعمت|Nagmat, döwletli|m
Oguz|اوغوز|اوغوز (اوغوزخان)|Awuz, päk niýet|m
Omar|عمر|عمر|Dört çaryýaryň biri|m
Polat|پولات|پولات (فولاد)|Polat ýaly berk|m
Rahmet|رحمت|رحمت|Rehim etmek|m
Resul|رسول|رسول|Ilçi, pygambar|m
Reşit|رشید|رشید|Akylly, akly kemala ýeten|m
Ryza|رضا|رضا|Kanagatly|m
Said|سعید|سعید|Bagtly oglan|m
Sanjar|سنجر|سنجر (سلطان سلجوقی)|Duşmanlary sançýan, ýeňýän|m
Sapa|صفا|صفا و آسایش|Safa, rahat|m
Sary|ساری|پسر بور و زیبا؛ نام ایل ساریق|Saryýagyz gelşikli oglan|m
Saýat|سایات|نام ایل ترکمن، کوتاه‌شدهٔ «صیاد»|Türkmen taýpasy|m
Seljuk|سلجوق|سلجوق (بنیان‌گذار)|Oguz Türkmenleriň serdary|m
Selim|سلیم|سلیم|Sagdyn-kemsiz|m
Seýdi|سیدی|سیدی|Seýit|m
Seýfullah|سیف‌الله|سیف‌الله|Allahnyň gylyjy|m
Sumbar|سومبار|سومبار (رود)|Sumbar derýasynyň ady|m
Subhan|سبحان|سبحان|Öwgi, söhrat|m
Şäher|شاهر|زاده در شهر|Şäherde dünýä gelen|m
Şeýda|شیدا|بسیار عاشق و دلباخته|Hetden aş aşyk|m
Şir|شیر|شیر، دلاور|Şir-ýolbar|m
Tejen|تجن|تجن (رود)|Tejende dünýä gelen|m
Tirkeş|تیرکش|تیردان؛ پسران بسیار شود|Kän oglan bolsun|m
Töre|تؤره|سرور و پیشوا؛ رسم و آیین|Baştutan, başlyk|m
Ugur|اوغور|بخت، مقصود، سو، شانس|Bagt, maksat, tarap|m
Umid|امید|امید و آرزو را برآورده کند|Umid-tmany ödejek|m
Ýahýa|یحیی|یحیی|Ýahýa pygambaryň ady|m
Ýalkym|یالقیم|درخشان و نورانی|Ýalkymly-nurly|m
Ýaşar|یاشار|بسیار زندگی کند و نمیرد|Kän ýaşar, ölmez|m
Ýylgaý|یلقای|نام یک تیرهٔ ترکمن|Türkmen tiresiniň ady|m
Isa|عیسی|عیسی|Isa pygambaryň ady|m
Kerem|کرم|بخشندگی و گشاده‌دستی|Sahyllyk, eli açyklyk|m
Kowus|کاووس|کاووس؛ کمان و ستاره و یاری|Kawus, ýaý, ýyldyz|m
Körpe|کورپه|کوچک‌ترین فرزند|Iň kiçi perzend|m
Akgyz|آق‌قیز|دختر روشن‌روی (ak + gyz)|Ak + gyz|f
Akja|آق‌جا|روشن، سپید|Akja, ak|f
Altyna|آلتینا|زرین (از altyn)|Altyn|f
Aýkamar|آی‌قمر|ماه (ترکی + عربی)|Aý + kamar|f
Çynar|چینار|چنار (درخت)|Çynar|f
Derýa|دریا|دریا، رود|Derýa|f
Dileg|دیلگ|آرزو، خواسته|Dileg|f
Döndi|دوندی|بازگشت (از döndi، برگشت)|Döndi|f
Doýduk|دویدوک|سیر شدیم (نام‌گذاری به آرزوی پسر)|Doýduk|f
Dünýä|دونیا|دنیا، جهان|Dünýä|f
Dürli|دورلی|گوناگون، رنگارنگ|Dürli|f
Dursun|دورسون|بماند (از durmak)|Dursun|f
Eje|اجه|مادر، بانو|Eje|f
Ejebay|اجه‌بای|مادرِ توانگر (eje + baý)|Eje + baý|f
Enejan|انه‌جان|مادرِ جان (ene + jan)|Ene + jan|f
Göwher|گووهر|گوهر، سنگ گران‌بها|Göwher|f
Gülalek|گول‌آلک|شقایق|Gülalek|f
Gülbadam|گل‌بادام|گلِ بادام|Gül + badam|f
Güljemile|گل‌جمیله|گلِ زیبا|Gül + jemile|f
Gülkamar|گل‌قمر|گلِ ماه|Gül + kamar|f
Gülşirin|گل‌شیرین|گلِ شیرین|Gül + şirin|f
Gültäç|گل‌تاج|گلِ تاج|Gül + täç|f
Hesel|هسل|عسل (احتمالاً)|Hesel|f
Humaý|هومای|مرغ همای، پرندهٔ اسطوره‌ای|Humaý|f
Hüýri|هوری|حوری|Hüýri|f
Keýik|کئیک|آهو|Keýik|f
Mahym|ماهیم|ماه|Mahym|f
Maýsa|مایسا|سبزه‌زار، جوانه|Maýsa|f
Miwe|میوه|میوه|Miwe|f
Nafisa|نفیسه|نفیس|Nafisa|f
Nartäç|نارتاچ|«تاج آتش» (nar + täç، طبق منبع)|Nar + täç|f
Owadan|اوادان|آبادان، زیبا|Owadan|f
Ovadan|اوادان|آبادان، پررونق (از فارسی ābādān)|Ovadan|f
Owlak|اولاک|بچه، بره (کودکِ دوست‌داشتنی)|Owlak|f
Pamyk|پامیک|پنبه، پنبهٔ نرم|Pamyk|f
Rabyga|رابیغه|رابعه|Rabyga|f
Reýhan|ریحان|ریحان|Reýhan|f
Ruşana|روشنا|روشنا|Ruşana|f
Saçly|ساچلی|مو‌بلند (از saç)|Saçly|f
Sadap|صداپ|صدف، مروارید|Sadap|f
Säher|ساحر|صبح، سحر|Säher|f
Saryýa|ساریا|زرد، زرین (از sary)|Saryýa|f
Şeker|شکر|شکر، قند|Şeker|f
Sülgün|سولگون|قرقاول|Sülgün|f
Sümbül|سومبول|سنبل (گل)|Sümbül|f
Tawus|تاووس|طاووس|Tawus|f
Toty|توتی|طوطی|Toty|f
Towşan|توشان|خرگوش (نام کمیاب)|Towşan|f
Tylla|تیلا|طلا|Tylla|f
Zyba|زیبا|زیبا|Zyba|f
Zübeýda|زبیده|زبیده|Zübeýda|f
Begli|بگلی|وابسته به بگ|Begli|m
Bäşim|بشیم|پنجم (از bäş، پنج)|Bäşim|m
Çopan|چوپان|چوپان|Çopan|m
Daýanç|دایانچ|تکیه‌گاه، پشتیبان|Daýanç|m
Eýmir|ایمیر|امیر (صورت ترکمنی)|Eýmir|m
Eýýüb|ایوب|ایوب (نام پیامبر)|Eýýüb|m
Gadam|قدم|گام، قدم|Gadam|m
Gadyr|قدیر|گرامی، ارجمند|Gadyr|m
Halyl|خلیل|خلیل|Halyl|m
Hemaýat|همایت|حمایت، پشتیبانی|Hemaýat|m
Jelil|جلیل|جلیل، بزرگوار|Jelil|m
Joşgun|جوشگون|پرشور|Joşgun|m
Juneyt|جنید|جنید|Juneyt|m
Kasym|قاسم|قاسم|Kasym|m
Kyýas|کییاس|غیاث|Kyýas|m
Mäti|ماتی|مهدی (صورت ترکمنی)|Mäti|m
Nadyr|نادیر|نادر|Nadyr|m
Nasyr|ناصر|ناصر|Nasyr|m
Nedir|ندیر|کمیاب، نادر|Nedir|m
Palwan|پالوان|پهلوان|Palwan|m
Parahat|پاراهات|آرام، آسوده (در منبع: «دوستانه»)|Parahat|m
Sadyk|صادیق|صادق|Sadyk|m
Salyh|صالیح|صالح|Salyh|m
Saýlaw|سایلاو|گزینش، انتخاب|Saýlaw|m
Şatlyk|شاتلیک|شادی|Şatlyk|m
Sohbet|صحبت|گفت‌وگو، همنشینی|Sohbet|m
Söýeg|سؤیگ|عشق (از söýgi)|Söýeg|m
Tagan|تاگان|سه‌پایه (ابزار آشپزی)|Tagan|m
Teýmur|تیمور|تیمور|Teýmur|m
Tirkiş|تیرکش|ترکش، تیردان|Tirkiş|m
Torgaý|تورغای|گنجشک|Torgaý|m
Toýly|تویلی|دارای جشن (از toý)|Toýly|m
Wepa|وفا|وفا|Wepa|m
Ýagmyr|یاغمیر|باران|Ýagmyr|m
Ýeňiş|یئنیش|پیروزی|Ýeňiş|m
Yhlas|یخلاص|اخلاص، پشتکار|Yhlas|m
Yklym|یکلیم|اقلیم، جهان|Yklym|m
Ylham|یلهام|الهام|Ylham|m
Ýyldyrym|یلدریم|آذرخش، صاعقه|Ýyldyrym|m
Ataş|آتاش|پدر + سنگ (ata + daş، طبق منبع)|Ata + daş|m
Deňiz|دنیز|دریا|Deňiz|u
Intizar|انتظار|انتظار|Intizar|u
Didar|دیدار|دیدار|Didar|u
Nowruz|نوروز|نوروز، روز نو (نام کمیاب)|Nowruz|u
Azat|آزات|آزاد|Azat, erkin|m
Çary|چاری|شاه، تزار|Çary, patyşa|m
Durdy|دوردی|ایستاد (از durmak)|Durdy, durmak|m
Kadyr|قدیر|توانا (صورت ترکمنیِ قادر)|Kadyr|m
Mekan|مکان|جا، سرزمین|Mekan|m
Mergen|مرگن|تیزبین، تیرانداز ماهر|Mergen, uzak gören|m
Meýlis|میلیس|مهمانی، گردهمایی|Meýlis, ýygnak|m
Şöhrat|شهرت|نام‌آوری، شهرت|Şöhrat|m
Guwanç|گووانچ|شادی، سربلندی|Guwanç, begenç|m
Atajan|آتاجان|پدرِ عزیز (ata + jan)|Ata + jan|m
Esen|اسن|سالم، تندرست|Esen|m
Alty|آلتی|شش (نام‌گذاری عددی)|Alty|m
Rahat|راحت|آسوده|Rahat|m
Öwez|اووز|جبران، عوض|Öwez|m
Aýlar|آیلار|ماه‌ها؛ ماه‌روی|Aýlar|f
Bägül|باگل|گل، گل سرخ|Bägül|f
Gülýa|گولیا|گونهٔ گل (صورت محبوب‌نامِ گل)|Gülýa|f
Näzik|نازیک|ظریف، نازک‌اندام|Näzik|f
Şemşat|شمشاد|درخت شمشاد|Şemşat|f
`;
  const SIMPLE = SIMPLE_RAW.trim().split('\n').map(l=>{
    const [tk,script,fa,tkg,g] = l.split('|');
    return { tk, script, fa, tkg, g };
  });

  const COMPOUNDS_M = `
eziz+jan eziz+myrat rejep+baý rejep+myrat
ata+baý aman+gylyç baý+muhammet çary+ýar daýanç+gylyç döwlet+jan esen+myrat hoja+muhammet rüstem+geldi sapar+durdy tirkiş+geldi wezir+geldi ýar+muhammet ýaz+geldi ýaz+mämmet ýaz+myrat yklym+berdi tagan+täç jelil+muhammet kasym+guly mälik+guly kaka+jan
anna+berdi anna+durdy anna+geldi anna+myrat oraz+berdi oraz+durdy oraz+geldi oraz+myrat
baýram+berdi baýram+durdy baýram+geldi gurban+berdi gurban+durdy gurban+geldi gurban+guly
gurban+myrat gurban+nazar juma+berdi juma+durdy juma+geldi juma+myrat
hudaý+berdi hudaý+geldi hudaý+nazar alla+berdi alla+geldi alla+nazar
hoja+berdi hoja+geldi hoja+myrat hoja+nazar seýit+nazar seýit+mämmet
soltan+myrat soltan+geldi soltan+berdi şa+myrat şa+berdi şa+geldi
nur+berdi nur+geldi nur+durdy nur+myrat nur+mämmet nur+muhammet
döwlet+geldi döwlet+myrat döwlet+mämmet mämmet+geldi mämmet+berdi mämmet+weli mämmet+nazar
ýagşy+geldi ýagşy+myrat ýagşy+berdi ata+myrat ata+berdi ata+nazar
aý+geldi aý+berdi aý+dogdy gün+dogdy öwez+geldi öwez+myrat toý+geldi toý+berdi toý+myrat
sapar+myrat sapar+berdi sapar+geldi arslan+berdi batyr+berdi bagt+geldi
aman+geldi aman+berdi aman+myrat aman+nazar aman+durdy aga+myrat aga+berdi aga+geldi
myrat+geldi myrat+berdi myrat+durdy ata+durdy ata+geldi baý+berdi baý+geldi baý+myrat
gurban+mämmet ýar+myrat ýar+berdi ýar+geldi
alty+myrat muhammet+nazar anna+muhammet begenç+muhammet berdi+myrat çary+gylyç çary+myrat derýa+geldi didar+gylyç döwran+myrat güýç+myrat kerim+berdi täç+berdi täç+myrat
anna+nazar oraz+nazar juma+nazar baýram+nazar döwlet+nazar nur+nazar hudaý+durdy alla+durdy
hoja+durdy seýit+geldi seýit+berdi seýit+myrat
`.trim().split(/\s+/);

  const COMPOUNDS_F = `
ogul+sona
ak+nur ak+soltan aý+çemen aý+jan ayna+gözel baýram+gözel gurban+bibi gurban+soltan nur+gözel ogul+bagt ogul+gurban ogul+nur ogul+sapar ogul+şat ogul+täç oraz+gül oraz+soltan tylla+gözel zyba+gözel
aý+gül aý+jemal aý+nur aý+soltan aý+bibi gül+nar gül+bahar gül+jemal gül+soltan gül+bibi
gül+nabat gül+şat nur+gül nur+jemal nur+bibi nur+bahar nur+soltan ýaz+gül nar+gül
ak+gül ak+jemal ak+maral altyn+gül altyn+jemal anna+soltan anna+gül anna+bibi
ogul+gerek ogul+bibi
aý+gözel dünýä+gözel mähri+gözel gül+gözel aý+nabat aý+jahan gül+jahan nur+jahan mähir+bibi mähir+gül mähir+jemal
bahar+gül maral+gül senem+gül
aý+ýyldyz gül+ýyldyz altyn+ýyldyz kümüş+gül kümüş+jemal ýaz+jemal ýaz+nur nar+jemal nar+nabat
`.trim().split(/\s+/);

  /* Verified notable bearers (all appear elsewhere in this app) */
  const KNOWN = {
    'berdi':        { fa:'بردی کربابایف، نویسنده', tk:'Berdi Kerbabaýew, ýazyjy' },
    'gurbandurdy':  { fa:'گوربان‌دوردی زلیلی، شاعر سدهٔ ۱۹', tk:'Gurbandurdy Zelili, şahyr' },
    'gurbannazar':  { fa:'گوربان‌نظر عزیزوف، «شاعر زرگر»', tk:'Gurbannazar Ezizow, «zergär şahyr»' },
    'mämmetweli':   { fa:'مامت‌ولی کمینه، شاعر', tk:'Mämmetweli Kemine, şahyr' },
    'döwletmämmet': { fa:'دولت‌محمد آزادی، شاعر و عالم', tk:'Döwletmämmet Azady, şahyr we alym' },
    'nurmuhammet':  { fa:'نورمحمد آندلیب، شاعر', tk:'Nurmuhammet Andalyp, şahyr' },
    'seýitnazar':   { fa:'سیدنظر سیدی، شاعر', tk:'Seýitnazar Seýdi, şahyr' },
    'annasoltan':   { fa:'آناسلطان ککیلووا، شاعر', tk:'Annasoltan Kekilowa, şahyr' },
    'nury':         { fa:'نوری خالمامدوف، آهنگساز', tk:'Nury Halmämmedow, kompozitor' },
    'sahy':         { fa:'ساحی جپباروف، بخشی و آهنگساز', tk:'Sahy Jepbarow, bagşy we kompozitor' },
    'hydyr':        { fa:'حیدر دریایف، نویسنده', tk:'Hydyr Derýaýew, ýazyjy' },
    'aman':         { fa:'امان ککیلف، شاعر و نویسنده', tk:'Aman Kekilow, şahyr we ýazyjy' },
    'sapar+myrat':  { fa:'صفرمراد نیازوف، نخستین رئیس‌جمهور', tk:'Saparmyrat Nyýazow, ilkinji prezident' },
    'tahyr':        { fa:'«زهره و طاهر» اثر ملانفس', tk:'Mollanepesiň «Zöhre-Tahyr» dessany' },
    'zöhre':        { fa:'«زهره و طاهر» اثر ملانفس', tk:'Mollanepesiň «Zöhre-Tahyr» dessany' },
    'şasenem':      { fa:'دستان «شاسنم و غریب»', tk:'«Şasenem-Garyp» dessany' },
    'leýli':        { fa:'«لیلی و مجنون» اثر آندلیب', tk:'Andalypyň «Leýli we Mejnun» eseri' },
    'zeliha':       { fa:'«یوسف و زلیخا» اثر آندلیب', tk:'Andalypyň «Ýusup we Zeliha» eseri' },
    'meňli':        { fa:'ترانهٔ «آق‌منگلی» با شعر کمینه', tk:'Kemineniň «Akmeňli» goşgusy' },
    'aýsoltan':     { fa:'«ایسولتان از سرزمین زر سپید» اثر کربابایف', tk:'Kerbabaýewiň «Aýsoltan» romany' }
  };

  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

  /* ---- categories (meaning families) ---- */
  const SIMPLE_CAT = {
    faith:'muhammet mämmet ýusup ýunus hydyr hasan hüseýin ali ömer osman abdylla ybraýym ysmaýyl musa ýakyp süleýman dawut idris rahym rahman fatyma hatyja merýem sara aýşa patma hajar zeýnep bäşir hajy işan jennet',
    nature:'bürgüt laçyn arslan gaplaň börü ýolbars bahar gunça gülistan gülzar jeýran maral merjen kümüş altyn läle ýasemin hurma jeren selbi sona çemen gülçemen ýyldyz jeýhun murgap',
    title:'alp batyr mert serdar han beg gylyç hanym bibi hanym merdan rustam gyrat',
    birth:'juma oraz baýram gurban rejep ramazan sapar aşyr',
    literary:'tahyr şasenem zöhre leýli zeliha meňli magtymguly kemine azady andalyp'
  };
  const SIMPLE_CAT_MAP = {};
  Object.keys(SIMPLE_CAT).forEach(c => SIMPLE_CAT[c].split(/\s+/).forEach(n => { SIMPLE_CAT_MAP[n] = c; }));
  const CAT_ORDER = ['faith','nature','virtue','birth','title','family','literary'];
  const CAT_LABELS = {
    fa:{ faith:'دینی و اسلامی', nature:'طبیعت و جانوران', virtue:'ویژگی و آرزو', birth:'روز و رویداد تولد', title:'لقب و دلاوری', family:'خانوادگی', literary:'ادبی و حماسی' },
    tk:{ faith:'Dini we yslamy', nature:'Tebigat we haýwanlar', virtue:'Häsiýet we arzuw', birth:'Doglan gün we waka', title:'Lakam we gaýduwsyzlyk', family:'Maşgala', literary:'Edebi we gahrymançylyk' }
  };
  const catOfParts = parts => { const t = parts[0].type; return t === 'verb' ? 'virtue' : t; };

  /* ---- rule-generated compounds (flagged gen:true) ---- */
  const GEN_M_FIRST = 'anna juma oraz baýram gurban toý sapar hudaý alla hoja seýit weli muhammet mämmet döwlet ýagşy aman aga ata baý ýar myrat bagt nur han beg serdar batyr mert arslan bürgüt laçyn gün aý şa soltan dost'.split(' ');
  const GEN_M_SECOND = 'berdi geldi durdy myrat nazar guly mämmet soltan han jan'.split(' ');
  const GEN_F_FIRST = 'aý gül nur ak altyn kümüş ýaz nar bahar maral senem gözel mähir ýyldyz şat nabat jahan çemen jemal ýagşy döwlet bagt'.split(' ');
  const GEN_F_SECOND = 'gül jemal nur bibi soltan nabat gözel maral senem jahan ýyldyz bahar çemen şat jan'.split(' ');
  const GEN_M_JAN = 'ata aga anna gurban oraz juma baýram hoja seýit myrat nazar aman döwlet bagt batyr mert serdar arslan nur aý gün'.split(' ');
  const GEN_F_JAN = 'aý gül nur mähir senem maral altyn kümüş jemal gözel bahar ýaz nabat'.split(' ');

  let curatedKeys = null;
  function genList(){
    const seen = new Set(curatedKeys), out = [];
    const add = (a, b, gender) => {
      if(a === b || !EL[a] || !EL[b]) return;
      const key = (a + b).toLowerCase(); if(seen.has(key)) return; seen.add(key);
      out.push([a + '+' + b, gender]);
    };
    GEN_M_FIRST.forEach(a => GEN_M_SECOND.forEach(b => {
      if(b === 'jan' && !GEN_M_JAN.includes(a)) return;
      if((b === 'mämmet' || b === 'soltan' || b === 'han') && !['gurban','anna','oraz','juma','baýram','hoja','seýit','sapar','toý','döwlet'].includes(a)) return;
      if(b === 'guly' && !['gurban','anna','oraz','juma','baýram','hoja','seýit','hudaý','alla','weli','muhammet','mämmet','döwlet','toý','sapar'].includes(a)) return;
      add(a, b, 'm');
    }));
    GEN_F_FIRST.forEach(a => GEN_F_SECOND.forEach(b => {
      if(b === 'jan' && !GEN_F_JAN.includes(a)) return;
      add(a, b, 'f');
    }));
    return out;
  }

  const cache = {};
  function build(lang, opts){
    const withGen = !!(opts && opts.gen);
    const ck = lang + (withGen ? '+g' : '');
    if(cache[ck]) return cache[ck];
    const out = [];
    const g = lang === 'fa' ? 'fa' : 'tk';
    SIMPLE.forEach(n=>{
      const key = n.tk.toLowerCase();
      out.push({ tk:n.tk, script:n.script, g:n.g, mean: g==='fa' ? n.fa : n.tkg, parts:null,
                 known: KNOWN[key] ? KNOWN[key][g] : '', cat: SIMPLE_CAT_MAP[key] || (EL[key] ? (EL[key].type === 'verb' ? 'virtue' : EL[key].type) : 'virtue'), gen:false });
    });
    const addCompounds = (list, gender, gen) => list.forEach(c=>{
      const parts = c.split('+').map(id => EL[id]);
      const name = cap(c.replace('+',''));
      const key = name.toLowerCase();
      out.push({
        tk: name,
        script: parts.map(p=>p.script).join(''),
        g: gender,
        mean: parts.map(p=>p[g]).join(' + '),
        parts: parts,
        known: (KNOWN[c] || KNOWN[key]) ? (KNOWN[c] || KNOWN[key])[g] : '',
        cat: catOfParts(parts), gen
      });
    });
    addCompounds(COMPOUNDS_M, 'm', false);
    addCompounds(COMPOUNDS_F, 'f', false);
    if(!curatedKeys) curatedKeys = out.map(n => n.tk.toLowerCase());
    if(withGen){
      const gl = genList();
      addCompounds(gl.filter(x => x[1] === 'm').map(x => x[0]), 'm', true);
      addCompounds(gl.filter(x => x[1] === 'f').map(x => x[0]), 'f', true);
    }
    return (cache[ck] = out);
  }

  const TYPE_LABELS = {
    fa:{ birth:'روز یا رویداد تولد', faith:'دینی', nature:'طبیعت و نمادها', virtue:'ویژگی و آرزو', title:'لقب و عنوان', family:'خانوادگی', verb:'فعل (داد/آمد/ماند)' },
    tk:{ birth:'Doglan gün ýa-da waka', faith:'Dini', nature:'Tebigat we nyşanlar', virtue:'Häsiýet we arzuw', title:'Lakam we ady', family:'Maşgala', verb:'Işlik (berdi/geldi/durdy)' }
  };

  return { ELEMENTS, SIMPLE, build, TYPE_LABELS, CAT_ORDER, CAT_LABELS,
           counts(){ build('fa'); return { simple: SIMPLE.length, compounds: COMPOUNDS_M.length + COMPOUNDS_F.length, generated: genList().length, elements: ELEMENTS.length }; } };
})();
