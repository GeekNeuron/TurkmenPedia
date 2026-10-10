/* =========================================================
   TurkmenPedia — Turkmen ⇆ Persian dictionary (js/dictionary.js)

   This is a single, original, hand-curated dictionary compiled
   specifically for this project (not extracted from any external
   dataset or file). It is intentionally NOT sourced from a
   machine-translation lexicon, so every entry is a genuine
   word-pair, never a stray multi-word fragment or a grammar-tool
   artifact — it is meant to read like an actual dictionary.

   Because there is no widely available open, high-quality
   Turkmen-Persian dictionary dataset to draw on, this list was
   written from general Turkic-language knowledge and should be
   treated as a solid starting reference, not an authoritative
   academic source — see the "note" field below, shown in the UI.

   Each entry:
     tk        — the Turkmen word, official Latin orthography
     faScript  — an APPROXIMATE phonetic rendering of the Turkmen
                 word using Persian script, to help a Persian
                 reader who cannot read Latin-Turkmen get a rough
                 idea of the pronunciation. This is a phonetic
                 aid, not a standard orthography.
     fa        — the Persian meaning/translation
   ========================================================= */

const DICTIONARY = {
  note: {
    fa:'این واژه‌نامه، دیتاستی دست‌ساز و اصیل است که مستقیماً برای این پروژه نوشته شده -نه استخراج‌شده از فایل ترجمهٔ ماشینی یا دیتاست بیرونی- تا هیچ جملهٔ نامرتبط یا قطعهٔ عجیب‌وغریب وسط آن نیاید. نویسه‌گردانی فارسی هر واژه هم تلفظ تقریبی است (نه رسم‌الخط رسمی)؛ چون خط فارسی صداهایی مانند ä، ö، ü و ň را دقیق ندارد. پیش از استفادهٔ آموزشی یا رسمی، تلفظ‌ها را با یک گویشور بومی ترکمن بسنجید.',
    tk:'Bu sözlük -daşarky maşyn terjime faýlyndan alynmadyk, göni şu taslama üçin ýazylan- asyl maglumatdyr; şonuň üçin arasynda geregi bolmadyk sözlem ýa-da düşnüksiz bölek ýok. Her sözüň pars elipbiýindäki ýazylyşy hem çemeleşdirilen aýdylyşdyr (resmi ýazuw däl); sebäbi pars elipbiýinde ä, ö, ü, ň ýaly sesler takyk ýok. Bilim ýa-da resmi maksatly ulanmazdan öň, aýdylyşyny ene dilli türkmen bilen barlaň.'
  },
  categories:[
    {
      id:'greetings', fa:'سلام و احوال‌پرسی', tk:'Salamlaşyk',
      words:[
        { tk:'Salam',            faScript:'سلام',            fa:'سلام' },
        { tk:'Salawmaleýkim',    faScript:'سلاومالئیکیم',      fa:'سلام علیکم (رسمی‌تر)' },
        { tk:'Hoş geldiňiz',     faScript:'خوش گلدی‌نگیز',      fa:'خوش آمدید' },
        { tk:'Sag boluň',        faScript:'ساغ بولونگ',        fa:'متشکرم / سلامت باشید' },
        { tk:'Arkaýyn boluň',    faScript:'آرکایین بولونگ',     fa:'راحت باشید' },
        { tk:'Hoş',              faScript:'خوش',              fa:'خداحافظ' },
        { tk:'Görüşýänçäk',      faScript:'گؤروشینچأک',       fa:'تا دیدار بعد' },
        { tk:'Ýagşy',            faScript:'یاقشی',            fa:'خوب' },
        { tk:'Erbet / Ýaman',    faScript:'اربت / یامان',      fa:'بد' },
        { tk:'Bagyşlaň',         faScript:'باغیشلانگ',        fa:'ببخشید' },
        { tk:'Minnetdar',        faScript:'مینتدار',          fa:'سپاسگزار' },
        { tk:'Hawa',             faScript:'هاوا',             fa:'بله' },
        { tk:'Ýok',              faScript:'یوک',              fa:'نه / نیست' },
        { tk:'Dogry',            faScript:'دوغری',            fa:'درست است' },
        { tk:'Bolýar',           faScript:'بولیار',           fa:'باشد / می‌شود' },
        { tk:'Bolmaz',           faScript:'بولماز',           fa:'نمی‌شود' },
        { tk:'Nähili?',          faScript:'نه‌هیلی؟',          fa:'چطور؟ / حالت چطوره؟' },
        { tk:'Adyň näme?',       faScript:'آدینگ نمه؟',        fa:'اسمت چیست؟' },
        { tk:'Düşnükli',         faScript:'دوشنوکلی',          fa:'قابل‌فهم / متوجه شدم' },
        { tk:'Haýyş',            faScript:'هایش',             fa:'خواهش می‌کنم / لطفاً' }
      ]
    },
    {
      id:'pronouns', fa:'ضمایر', tk:'Çalyşmalar',
      words:[
        { tk:'Men',    faScript:'من',    fa:'من' },
        { tk:'Sen',    faScript:'سن',    fa:'تو' },
        { tk:'Ol',     faScript:'اول',   fa:'او / آن' },
        { tk:'Biz',    faScript:'بیز',   fa:'ما' },
        { tk:'Siz',    faScript:'سیز',   fa:'شما' },
        { tk:'Olar',   faScript:'اولار',  fa:'آن‌ها' },
        { tk:'Bu',     faScript:'بو',    fa:'این' },
        { tk:'Şu',     faScript:'شو',    fa:'همین' },
        { tk:'Şol',    faScript:'شول',   fa:'همان' },
        { tk:'Meniň',  faScript:'منینگ',  fa:'مالِ من' },
        { tk:'Seniň',  faScript:'سنینگ',  fa:'مالِ تو' },
        { tk:'Özi',    faScript:'اؤزی',   fa:'خودش' },
        { tk:'Hemme',  faScript:'همّه',   fa:'همه' },
        { tk:'Hiç kim',faScript:'هیچ کیم',fa:'هیچ‌کس' }
      ]
    },
    {
      id:'questions', fa:'کلمات پرسشی', tk:'Sorag sözleri',
      words:[
        { tk:'Näme?',   faScript:'نمه؟',   fa:'چی؟' },
        { tk:'Kim?',    faScript:'کیم؟',   fa:'کی؟ (چه کسی)' },
        { tk:'Haçan?',  faScript:'هاچان؟',  fa:'کِی؟ (چه زمانی)' },
        { tk:'Nirede?', faScript:'نیره‌ده؟', fa:'کجا؟' },
        { tk:'Näme üçin?', faScript:'نمه اوچین؟', fa:'چرا؟' },
        { tk:'Nähili?', faScript:'نه‌هیلی؟', fa:'چطور؟' },
        { tk:'Näçe?',   faScript:'نچه؟',   fa:'چند؟ / چه مقدار؟' },
        { tk:'Haýsy?',  faScript:'هایسی؟',  fa:'کدام؟' },
        { tk:'Kimiň?',  faScript:'کیمینگ؟', fa:'مالِ کی؟' }
      ]
    },
    {
      id:'family', fa:'خانواده و بستگان', tk:'Maşgala',
      words:[
        { tk:'Maşgala', faScript:'ماشغالا', fa:'خانواده' },
        { tk:'Ata',     faScript:'آتا',     fa:'پدر' },
        { tk:'Eje',     faScript:'اجه',     fa:'مادر' },
        { tk:'Ogul',    faScript:'اوغول',    fa:'پسر (فرزند)' },
        { tk:'Gyz',     faScript:'قیز',     fa:'دختر' },
        { tk:'Dogan',   faScript:'دوغان',   fa:'خواهر یا برادر' },
        { tk:'Uýa',     faScript:'اویا',    fa:'خواهر' },
        { tk:'Aga',     faScript:'آغا',     fa:'برادر بزرگ‌تر' },
        { tk:'Inim',    faScript:'اینیم',   fa:'برادر کوچک‌تر' },
        { tk:'Är',      faScript:'أر',      fa:'شوهر' },
        { tk:'Aýal',    faScript:'آیال',    fa:'همسر (زن) / زن' },
        { tk:'Ata-ene', faScript:'آتا-انه', fa:'والدین' },
        { tk:'Ýaşuly',  faScript:'یاشولی',   fa:'بزرگ‌تر (خانواده)' },
        { tk:'Agtyk',   faScript:'آغتیق',   fa:'نوه' },
        { tk:'Daýy',    faScript:'دایی',    fa:'دایی' },
        { tk:'Daýza',   faScript:'دایزا',   fa:'خاله' },
        { tk:'Garyndaş',faScript:'قارینداش', fa:'خویشاوند' },
        { tk:'Dost',    faScript:'دوست',    fa:'دوست' },
        { tk:'Goňşy',   faScript:'قونگشی',  fa:'همسایه' }
      ]
    },
    {
      id:'numbers', fa:'اعداد', tk:'Sanlar',
      words:[
        { tk:'Bir',    faScript:'بیر',      fa:'۱ / یک' },
        { tk:'Iki',    faScript:'ایکی',     fa:'۲ / دو' },
        { tk:'Üç',     faScript:'اوچ',      fa:'۳ / سه' },
        { tk:'Dört',   faScript:'دؤرت',     fa:'۴ / چهار' },
        { tk:'Bäş',    faScript:'بَش',      fa:'۵ / پنج' },
        { tk:'Alty',   faScript:'آلتی',     fa:'۶ / شش' },
        { tk:'Ýedi',   faScript:'یدی',      fa:'۷ / هفت' },
        { tk:'Sekiz',  faScript:'سکیز',     fa:'۸ / هشت' },
        { tk:'Dokuz',  faScript:'دوقوز',    fa:'۹ / نه' },
        { tk:'On',     faScript:'اون',      fa:'۱۰ / ده' },
        { tk:'On bir', faScript:'اون بیر',   fa:'۱۱ / یازده' },
        { tk:'Ýigrimi',faScript:'ییگیرمی',   fa:'۲۰ / بیست' },
        { tk:'Otuz',   faScript:'اوتوز',    fa:'۳۰ / سی' },
        { tk:'Kyrk',   faScript:'قیرق',     fa:'۴۰ / چهل' },
        { tk:'Elli',   faScript:'الّی',     fa:'۵۰ / پنجاه' },
        { tk:'Ýüz',    faScript:'یوز',      fa:'۱۰۰ / صد' },
        { tk:'Müň',    faScript:'مونگ',     fa:'۱۰۰۰ / هزار' },
        { tk:'Birinji',faScript:'بیرینجی',   fa:'اول (ترتیبی)' },
        { tk:'Ikinji', faScript:'ایکینجی',   fa:'دوم' },
        { tk:'Soňky',  faScript:'سونگکی',    fa:'آخرین' }
      ]
    },
    {
      id:'colors', fa:'رنگ‌ها', tk:'Reňkler',
      words:[
        { tk:'Ak',      faScript:'آق',      fa:'سفید' },
        { tk:'Gara',    faScript:'قارا',    fa:'سیاه' },
        { tk:'Gyzyl',   faScript:'قیزیل',   fa:'قرمز' },
        { tk:'Gök',     faScript:'گؤک',     fa:'آبی / سبز آسمانی' },
        { tk:'Ýaşyl',   faScript:'یاشیل',   fa:'سبز' },
        { tk:'Sary',    faScript:'ساری',    fa:'زرد' },
        { tk:'Mele',    faScript:'مله',     fa:'قهوه‌ای' },
        { tk:'Çal',     faScript:'چال',     fa:'خاکستری' },
        { tk:'Benewşe', faScript:'بنفشه',   fa:'بنفش' },
        { tk:'Gülgün',  faScript:'گولگون',   fa:'صورتی' },
        { tk:'Altyn reňk', faScript:'آلتین رنگ', fa:'طلایی' },
        { tk:'Kümüş reňk', faScript:'کوموش رنگ', fa:'نقره‌ای' }
      ]
    },
    {
      id:'nature', fa:'طبیعت و آسمان', tk:'Tebigat',
      words:[
        { tk:'Gün',    faScript:'گون',     fa:'خورشید / روز' },
        { tk:'Aý',     faScript:'آی',      fa:'ماه (کره) / ماه (تقویمی)' },
        { tk:'Ýyldyz', faScript:'ییلدیز',   fa:'ستاره' },
        { tk:'Asman',  faScript:'آسمان',    fa:'آسمان' },
        { tk:'Suw',    faScript:'سوو',     fa:'آب' },
        { tk:'Ot',     faScript:'اوت',     fa:'علف / آتش (بسته به بافت)' },
        { tk:'Çöl',    faScript:'چؤل',     fa:'صحرا / بیابان' },
        { tk:'Dag',    faScript:'داغ',     fa:'کوه' },
        { tk:'Deňiz',  faScript:'دنگیز',    fa:'دریا' },
        { tk:'Derýa',  faScript:'دریا',    fa:'رودخانه' },
        { tk:'Ýel',    faScript:'یئل',     fa:'باد' },
        { tk:'Gar',    faScript:'قار',     fa:'برف' },
        { tk:'Ýagyş',  faScript:'یاغیش',   fa:'باران' },
        { tk:'Çäge',   faScript:'چأگه',    fa:'شن' },
        { tk:'Agaç',   faScript:'آغاچ',    fa:'درخت' },
        { tk:'Gül',    faScript:'گول',     fa:'گل' },
        { tk:'Daş',    faScript:'داش',     fa:'سنگ' },
        { tk:'Topar',  faScript:'توپار',   fa:'خاک' }
      ]
    },
    {
      id:'animals', fa:'حیوانات', tk:'Haýwanlar',
      words:[
        { tk:'At',     faScript:'آت',      fa:'اسب' },
        { tk:'Goýun',  faScript:'قویون',    fa:'گوسفند' },
        { tk:'Düýe',   faScript:'دویه',    fa:'شتر' },
        { tk:'It',     faScript:'ایت',     fa:'سگ' },
        { tk:'Pişik',  faScript:'پیشیک',    fa:'گربه' },
        { tk:'Guş',    faScript:'قوش',     fa:'پرنده' },
        { tk:'Balyk',  faScript:'بالیق',    fa:'ماهی' },
        { tk:'Gurt',   faScript:'قورت',    fa:'گرگ' },
        { tk:'Sygyr',  faScript:'سیغیر',    fa:'گاو' },
        { tk:'Geçi',   faScript:'گچی',     fa:'بز' },
        { tk:'Towuk',  faScript:'توووق',    fa:'مرغ خانگی' },
        { tk:'Horaz',  faScript:'خوراز',    fa:'خروس' },
        { tk:'Aslan',  faScript:'آصلان',    fa:'شیر (حیوان)' },
        { tk:'Möjek',  faScript:'مؤجک',     fa:'روباه' },
        { tk:'Aý bally', faScript:'آی بللی', fa:'خرس' }
      ]
    },
    {
      id:'food', fa:'غذا و نوشیدنی', tk:'Iýmit',
      words:[
        { tk:'Çörek',  faScript:'چؤرک',     fa:'نان' },
        { tk:'Et',     faScript:'ات',      fa:'گوشت' },
        { tk:'Süýt',   faScript:'سویت',    fa:'شیر' },
        { tk:'Çaý',    faScript:'چای',     fa:'چای' },
        { tk:'Gant',   faScript:'قند',     fa:'قند / شکر' },
        { tk:'Duz',    faScript:'دوز',     fa:'نمک' },
        { tk:'Miwe',   faScript:'میوه',    fa:'میوه' },
        { tk:'Gawun',  faScript:'قاوون',    fa:'طالبی/خربزه' },
        { tk:'Garpyz', faScript:'قارپیز',   fa:'هندوانه' },
        { tk:'Üzüm',   faScript:'اوزوم',    fa:'انگور' },
        { tk:'Alma',   faScript:'آلما',    fa:'سیب' },
        { tk:'Bal',    faScript:'بال',     fa:'عسل' },
        { tk:'Tüwi',   faScript:'توویی',    fa:'برنج' },
        { tk:'Un',     faScript:'اون',     fa:'آرد' },
        { tk:'Ýumurtga', faScript:'یومورتغا', fa:'تخم‌مرغ' },
        { tk:'Gök önüm', faScript:'گؤک اونوم', fa:'سبزیجات' },
        { tk:'Iýmek',  faScript:'ایمک',    fa:'خوردن (مصدر)' },
        { tk:'Açlyk',  faScript:'آچلیق',    fa:'گرسنگی' },
        { tk:'Suwsuzlyk', faScript:'سووسوزلیق', fa:'تشنگی' },
        { tk:'Tagam',  faScript:'تعام',    fa:'طعم / غذا' }
      ]
    },
    {
      id:'body', fa:'بدن انسان', tk:'Beden agzalary',
      words:[
        { tk:'Baş',   faScript:'باش',   fa:'سر' },
        { tk:'Göz',   faScript:'گؤز',   fa:'چشم' },
        { tk:'Gulak', faScript:'قولاق', fa:'گوش' },
        { tk:'Burun', faScript:'بورون', fa:'بینی' },
        { tk:'Agyz',  faScript:'آغیز',  fa:'دهان' },
        { tk:'El',    faScript:'ال',    fa:'دست' },
        { tk:'Barmak',faScript:'بارماق', fa:'انگشت' },
        { tk:'Aýak',  faScript:'آیاق',  fa:'پا' },
        { tk:'Ýürek', faScript:'یورک',  fa:'قلب' },
        { tk:'Saç',   faScript:'ساچ',   fa:'مو' },
        { tk:'Diş',   faScript:'دیش',   fa:'دندان' },
        { tk:'Deri',  faScript:'دری',   fa:'پوست' },
        { tk:'Boýun', faScript:'بویون', fa:'گردن' },
        { tk:'Arka',  faScript:'آرقا',  fa:'پشت (بدن)' },
        { tk:'Ganatlar', faScript:'قاناتلار', fa:'ریه‌ها (نایاب)، بهتر: سینه' }
      ]
    },
    {
      id:'time', fa:'زمان و تقویم', tk:'Wagt',
      words:[
        { tk:'Gün',      faScript:'گون',      fa:'روز' },
        { tk:'Hepde',    faScript:'هفده',     fa:'هفته' },
        { tk:'Aý',       faScript:'آی',       fa:'ماه' },
        { tk:'Ýyl',      faScript:'ییل',      fa:'سال' },
        { tk:'Şu gün',   faScript:'شو گون',   fa:'امروز' },
        { tk:'Düýn',     faScript:'دویون',    fa:'دیروز' },
        { tk:'Ertir',    faScript:'ارتیر',    fa:'فردا / صبح' },
        { tk:'Agşam',    faScript:'آقشام',    fa:'عصر / شب' },
        { tk:'Gije',     faScript:'گیجه',     fa:'شب (هنگام)' },
        { tk:'Sagat',    faScript:'ساعات',    fa:'ساعت' },
        { tk:'Minut',    faScript:'مینوت',    fa:'دقیقه' },
        { tk:'Häzir',    faScript:'هأزیر',    fa:'الان' },
        { tk:'Bahar',    faScript:'بهار',    fa:'بهار' },
        { tk:'Tomus',    faScript:'توموس',    fa:'تابستان' },
        { tk:'Güýz',     faScript:'گویز',    fa:'پاییز' },
        { tk:'Gyş',      faScript:'قیش',     fa:'زمستان' },
        { tk:'Duşenbe',  faScript:'دوشنبه',   fa:'دوشنبه' },
        { tk:'Anna',     faScript:'آنّا',     fa:'جمعه' },
        { tk:'Ýekşenbe', faScript:'یکشنبه',   fa:'یکشنبه' }
      ]
    },
    {
      id:'adjectives', fa:'صفت‌های رایج', tk:'Sypatlar',
      words:[
        { tk:'Uly',    faScript:'اولی',    fa:'بزرگ' },
        { tk:'Kiçi',   faScript:'کیچی',    fa:'کوچک' },
        { tk:'Gowy',   faScript:'گووی',    fa:'خوب' },
        { tk:'Erbet',  faScript:'اربت',    fa:'بد' },
        { tk:'Täze',   faScript:'تأزه',    fa:'جدید' },
        { tk:'Köne',   faScript:'کؤنه',    fa:'قدیمی' },
        { tk:'Uzyn',   faScript:'اوزین',   fa:'بلند / طولانی' },
        { tk:'Gysga',  faScript:'قیسقا',   fa:'کوتاه' },
        { tk:'Ýyly',   faScript:'ییلی',    fa:'گرم' },
        { tk:'Sowuk',  faScript:'سووق',    fa:'سرد' },
        { tk:'Gymmat', faScript:'قیمّت',   fa:'گران' },
        { tk:'Arzan',  faScript:'ارزان',   fa:'ارزان' },
        { tk:'Aňsat',  faScript:'آنسات',   fa:'آسان' },
        { tk:'Kyn',    faScript:'قین',     fa:'سخت / دشوار' },
        { tk:'Owadan', faScript:'اووادان',  fa:'زیبا' },
        { tk:'Çuň',    faScript:'چونگ',    fa:'عمیق' },
        { tk:'Doly',   faScript:'دولی',    fa:'پر' },
        { tk:'Boş',    faScript:'بوش',     fa:'خالی' },
        { tk:'Çalt',   faScript:'چالت',    fa:'سریع' },
        { tk:'Haýal',  faScript:'هایال',   fa:'کند / آهسته' }
      ]
    },
    {
      id:'verbs', fa:'افعال رایج', tk:'Işlikler',
      words:[
        { tk:'Gelmek',   faScript:'گلمک',    fa:'آمدن' },
        { tk:'Gitmek',   faScript:'گیتمک',   fa:'رفتن' },
        { tk:'Görmek',   faScript:'گؤرمک',   fa:'دیدن' },
        { tk:'Bilmek',   faScript:'بیلمک',   fa:'دانستن' },
        { tk:'Aýtmak',   faScript:'آیتماق',  fa:'گفتن' },
        { tk:'Iýmek',    faScript:'ایمک',    fa:'خوردن' },
        { tk:'Içmek',    faScript:'ایچمک',   fa:'نوشیدن' },
        { tk:'Ýazmak',   faScript:'یازماق',  fa:'نوشتن' },
        { tk:'Okamak',   faScript:'اوقاماق',  fa:'خواندن' },
        { tk:'Söýmek',   faScript:'سویمک',   fa:'دوست‌داشتن' },
        { tk:'Işlemek',  faScript:'ایشلمک',  fa:'کار کردن' },
        { tk:'Oturmak',  faScript:'اوتورماق', fa:'نشستن' },
        { tk:'Durmak',   faScript:'دورماق',  fa:'ایستادن' },
        { tk:'Ýatmak',   faScript:'یاتماق',  fa:'خوابیدن' },
        { tk:'Oýanmak',  faScript:'اویانماق', fa:'بیدار شدن' },
        { tk:'Ylgamak',  faScript:'ییلغاماق', fa:'دویدن' },
        { tk:'Ýöremek',  faScript:'یؤرمک',   fa:'راه‌رفتن' },
        { tk:'Gürlemek', faScript:'گورلمک',  fa:'صحبت کردن' },
        { tk:'Soramak',  faScript:'سوراماق',  fa:'پرسیدن' },
        { tk:'Kömek etmek', faScript:'کؤمک اتمک', fa:'کمک کردن' },
        { tk:'Almak',    faScript:'آلماق',   fa:'گرفتن / خریدن' },
        { tk:'Bermek',   faScript:'برمک',    fa:'دادن' },
        { tk:'Açmak',    faScript:'آچماق',   fa:'باز کردن' },
        { tk:'Ýapmak',   faScript:'یاپماق',  fa:'بستن' }
      ]
    },
    {
      id:'home', fa:'خانه و زندگی روزمره', tk:'Öý we durmuş',
      words:[
        { tk:'Öý',      faScript:'اوی',     fa:'خانه' },
        { tk:'Gapy',    faScript:'قاپی',    fa:'در' },
        { tk:'Ýol',     faScript:'یول',     fa:'راه / جاده' },
        { tk:'Bazar',   faScript:'بازار',   fa:'بازار' },
        { tk:'Pul',     faScript:'پول',     fa:'پول' },
        { tk:'Dükan',   faScript:'دوکان',   fa:'مغازه' },
        { tk:'Mekdep',  faScript:'مکدپ',    fa:'مدرسه' },
        { tk:'Hat',     faScript:'هات',     fa:'نامه / خط' },
        { tk:'Kitap',   faScript:'کیتاب',   fa:'کتاب' },
        { tk:'Galam',   faScript:'قلم',     fa:'قلم' },
        { tk:'Otag',    faScript:'اوتاغ',   fa:'اتاق' },
        { tk:'Penjire', faScript:'پنجره',   fa:'پنجره' },
        { tk:'Krowat',  faScript:'کراوات',   fa:'تخت (خواب)' },
        { tk:'Saçak',   faScript:'ساچاق',   fa:'سفره' },
        { tk:'Çemçe',   faScript:'چمچه',    fa:'قاشق' }
      ]
    },
    {
      id:'emotions', fa:'احساسات', tk:'Duýgular',
      words:[
        { tk:'Söýgi',      faScript:'سویگی',    fa:'عشق' },
        { tk:'Begenmek',   faScript:'بگنمک',    fa:'خوشحال شدن' },
        { tk:'Gynanmak',   faScript:'غینانماق',  fa:'ناراحت شدن / غمگین شدن' },
        { tk:'Gorkmak',    faScript:'قورقماق',   fa:'ترسیدن' },
        { tk:'Ynanmak',    faScript:'ینانماق',   fa:'اعتماد کردن / باور کردن' },
        { tk:'Umyt',       faScript:'اومید',     fa:'امید' },
        { tk:'Hormat',     faScript:'حرمت',      fa:'احترام' },
        { tk:'Minnetdarlyk', faScript:'مینتدارلیق', fa:'قدردانی / تشکر' },
        { tk:'Gaharlanmak', faScript:'قاهارلانماق', fa:'عصبانی شدن' },
        { tk:'Arzuw',      faScript:'آرزو',     fa:'آرزو' }
      ]
    },
    {
      id:'directions', fa:'جهت‌ها و مکان', tk:'Ugurlar',
      words:[
        { tk:'Ýokary',  faScript:'یوقاری',   fa:'بالا' },
        { tk:'Aşak',    faScript:'آشاق',    fa:'پایین' },
        { tk:'Öňe',     faScript:'اؤنگه',    fa:'جلو' },
        { tk:'Yza',     faScript:'ییزا',    fa:'عقب' },
        { tk:'Sag',     faScript:'ساغ',     fa:'راست (جهت)' },
        { tk:'Çep',     faScript:'چپ',      fa:'چپ' },
        { tk:'Demirgazyk', faScript:'دمیرقازیق', fa:'شمال' },
        { tk:'Günorta', faScript:'گونورتا',  fa:'جنوب' },
        { tk:'Gündogar',faScript:'گوندوغار', fa:'شرق' },
        { tk:'Günbatar',faScript:'گونباتار', fa:'غرب' },
        { tk:'Içinde',  faScript:'ایچینده',  fa:'داخل' },
        { tk:'Daşynda', faScript:'داشیندا',  fa:'خارج / بیرون' },
        { tk:'Golaý',   faScript:'قولای',   fa:'نزدیک' },
        { tk:'Uzak',    faScript:'اوزاق',   fa:'دور' }
      ]
    },
    {
      id:'professions', fa:'مشاغل', tk:'Käsler',
      words:[
        { tk:'Mugallym', faScript:'موغاللیم', fa:'معلم' },
        { tk:'Lukman',   faScript:'لوقمان',   fa:'پزشک' },
        { tk:'Daýhan',   faScript:'دایهان',   fa:'کشاورز' },
        { tk:'Çopan',    faScript:'چوپان',    fa:'چوپان' },
        { tk:'Söwdagär', faScript:'سودگر',    fa:'بازرگان / تاجر' },
        { tk:'Ussa',     faScript:'اوستا',    fa:'استادکار / صنعتگر' },
        { tk:'Dokmaçy',  faScript:'دوکماچی',   fa:'بافنده (قالی)' },
        { tk:'Şahyr',    faScript:'شاعیر',    fa:'شاعر' },
        { tk:'Ýazyjy',   faScript:'یازیجی',   fa:'نویسنده' },
        { tk:'Bagşy',    faScript:'باغشی',    fa:'خواننده-نوازندهٔ سنتی' },
        { tk:'Aşpez',    faScript:'آشپز',    fa:'آشپز' },
        { tk:'Salgytçy', faScript:'سالغیتچی', fa:'راننده' }
      ]
    },
    {
      id:'travel', fa:'سفر و وسایل نقلیه', tk:'Syýahat',
      words:[
        { tk:'Ulag',    faScript:'اولاق',    fa:'وسیلهٔ نقلیه / ماشین' },
        { tk:'Otly',    faScript:'اوتلی',    fa:'قطار' },
        { tk:'Uçar',    faScript:'اوچار',    fa:'هواپیما' },
        { tk:'Duralga', faScript:'دورالغا',   fa:'ایستگاه' },
        { tk:'Petek',   faScript:'پتک',     fa:'بلیت' },
        { tk:'Ýolagçy', faScript:'یولاغچی',  fa:'مسافر' },
        { tk:'Çemodan', faScript:'چمدان',   fa:'چمدان' },
        { tk:'Serhet',  faScript:'سرحد',    fa:'مرز' },
        { tk:'Şäher',   faScript:'شأهر',    fa:'شهر' },
        { tk:'Oba',     faScript:'اوبا',    fa:'روستا' }
      ]
    },
    {
      id:'clothing_words', fa:'پوشاک (واژگان پایه)', tk:'Egin-eşik sözleri',
      words:[
        { tk:'Eşik',    faScript:'اشیک',    fa:'لباس' },
        { tk:'Köýnek',  faScript:'کؤینک',    fa:'پیراهن' },
        { tk:'Balak',   faScript:'بالاق',    fa:'شلوار' },
        { tk:'Aýakgap', faScript:'آیاقغاپ',  fa:'کفش' },
        { tk:'Telpek',  faScript:'تلپک',    fa:'کلاه پوستی' },
        { tk:'Guşak',   faScript:'قوشاق',   fa:'کمربند' }
      ]
    },
    {
      id:'abstract', fa:'مفاهیم انتزاعی', tk:'Manyly düşünjeler',
      words:[
        { tk:'Azatlyk',  faScript:'آزادلیق',  fa:'آزادی' },
        { tk:'Adalat',   faScript:'عدالت',   fa:'عدالت' },
        { tk:'Parahatlyk', faScript:'پاراهاتلیق', fa:'صلح / آرامش' },
        { tk:'Dostluk',  faScript:'دوستلوق',  fa:'دوستی' },
        { tk:'Dogruçyllyk', faScript:'دوغروچیللیق', fa:'صداقت' },
        { tk:'Batyrlyk', faScript:'باتیرلیق', fa:'شجاعت' },
        { tk:'Bagt',     faScript:'بخت',     fa:'خوشبختی' },
        { tk:'Hakykat',  faScript:'حقیقت',   fa:'حقیقت' },
        { tk:'Bilim',    faScript:'بیلیم',   fa:'دانش / آموزش' },
        { tk:'Watan',    faScript:'وطن',     fa:'وطن' }
      ]
    }
  ]
};
