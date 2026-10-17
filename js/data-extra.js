/* =========================================================
   TurkmenPedia — enrichment data (js/data-extra.js)
   Loaded right after data.js. Adds new, fact-checked entries
   to the existing sections in both languages without touching
   the core data file. Every entry is a short, paraphrased
   educational summary; see the "Sources" section for notes.
   ========================================================= */
(function(){
  'use strict';

  // insert `items` before the entry whose key field equals `before`
  // (falls back to appending, so a renamed anchor never loses data)
  function put(arr, keyField, before, items){
    const i = before ? arr.findIndex(x => x[keyField] === before) : -1;
    if(i === -1) arr.push(...items); else arr.splice(i, 0, ...items);
  }

  /* ---------------------------------------------------------
     فارسی
     --------------------------------------------------------- */
  const fa = DATA.fa;

  put(fa.history.eras, 'title', 'تمدن برنزی مرغیانه', [
    { year:'هزارهٔ ششم تا سوم پیش از میلاد', title:'نخستین کشاورزان کوهپایهٔ کپه‌داغ',
      text:'در نوار حاصل‌خیز میان کوه‌های کپه‌داغ و صحرای قره‌قوم، یکی از کهن‌ترین روستاهای کشاورزی آسیای میانه به نام جیتون (حدود هزارهٔ ششم پیش از میلاد) پدید آمد؛ پس از آن فرهنگ مس‌سنگی آنائو و شهرک عصر مفرغ آلتین‌دپه در همین حوزه شکوفا شدند و زمینه را برای تمدن‌های بزرگ‌تر صحرا فراهم کردند.' }
  ]);
  put(fa.history.eras, 'title', 'مهاجرت قبایل اوغوز', [
    { year:'سده‌های ۷ تا ۹ میلادی', title:'مرو در دوران خلافت',
      text:'مرو در سال ۶۵۱ میلادی به دست مسلمانان افتاد و به مرکز خراسان بدل شد. در آغاز سدهٔ نهم، مأمون عباسی سال‌ها در مرو ماند و از آنجا خلافت را اداره می‌کرد؛ شهر در این دوران به یکی از قطب‌های دانش و بازرگانی جادهٔ ابریشم تبدیل شد.' }
  ]);
  put(fa.history.eras, 'title', 'امپراتوری سلجوقی', [
    { year:'۱۰۷۱', title:'نبرد ملازگرد',
      text:'آلپ‌ارسلان، سلطان سلجوقی، در نبرد ملازگرد (شرق آناتولی) سپاه بیزانس و امپراتور رومانوس چهارم را شکست داد؛ پیروزی‌ای که راه کوچ ترکمانان و ترکان اوغوز به آناتولی را باز کرد و سرآغاز ترک‌شدن تدریجی این سرزمین شد.' }
  ]);
  put(fa.history.eras, 'title', 'خوارزمشاهیان', [
    { year:'۱۱۱۸ تا ۱۱۵۷', title:'سلطان سنجر و اوج مرو',
      text:'سنجر، آخرین سلطان بزرگ سلجوقی، از مرو بر قلمرو پهناور سلجوقیان فرمان می‌راند و شهر را به پایتخت شکوهمند خود بدل کرد. در سال ۱۱۵۳ گروهی از قبایل اوغوز او را اسیر کردند؛ رویدادی که پایان اقتدار بزرگ سلجوقی در شرق بود. آرامگاه او هنوز در مرو باستان برپاست.' }
  ]);
  put(fa.history.eras, 'title', 'حملهٔ مغول و پراکندگی', [
    { year:'۱۲۲۱', title:'ویرانی مرو و گرگانج',
      text:'در سال ۱۲۲۱ سپاه مغول مرو را گشود و ویران کرد و اندکی بعد گرگانج (کهنه‌گرگانج) نیز سقوط کرد. این دو فاجعه، واحه‌های پررونق جادهٔ ابریشم را به سال‌ها رکود کشاند و بر کوچ‌های بعدی قبایل ترکمن اثر گذاشت.' }
  ]);
  put(fa.history.eras, 'title', 'تشکیل جمهوری شوروی ترکمنستان', [
    { year:'۱۸۸۱', title:'پیمان آخال',
      text:'پس از سقوط گؤک‌تپه، پیمان آخال (۱۸۸۱) مرز میان ایران و روسیهٔ تزاری را در امتداد کپه‌داغ مشخص کرد. از همین سال، ترکمن‌ها میان دو کشور تقسیم شدند؛ ریشهٔ حضور جمعیت ترکمن در شمال ایران، یعنی ترکمن‌صحرا، در همین مرزبندی است.' }
  ]);

  put(fa.warpeace.events, 'title', 'سهم در جنگ جهانی دوم', [
    { icon:'horse', title:'جنید خان و ایستادگی در قره‌قوم',
      text:'جنید خان، رهبر ایل یموت، در جریان جنگ و آشوب‌های ۱۹۱۶ تا ۱۹۲۸ چهره‌ای تعیین‌کننده بود؛ در سال‌های ۱۹۱۸ تا ۱۹۲۰ بر خیوه چیره شد و پس از آن تا اواخر دههٔ ۱۹۲۰ در برابر ارتش سرخ در صحرا مقاومت کرد و سرانجام به ایران پناه برد.' }
  ]);

  fa.cuisine.dishes.push(
    { icon:'bowl', name:'کاقماچ', text:'گوشت خشک‌شدهٔ نمک‌زده که به‌صورت تکه یا نوار برای نگهداری طولانی آماده می‌شود؛ یادگار روزگار کوچ‌نشینی، که امروز هم در سفره‌های سنتی و به‌عنوان طعم‌دهندهٔ غذاها جایگاه دارد.' },
    { icon:'bowl', name:'اتلی چؤرک', text:'«نان گوشتی»؛ نانی گرد و ضخیم که مغز آن گوشت است و می‌توان آن را به‌تنهایی یک وعدهٔ کامل خورد. شکل‌های محلی آن با نام‌هایی مانند فیتچی هم شناخته می‌شود.' },
    { icon:'bowl', name:'تمدیرلاما', text:'گوشت (معمولاً بره) که در تنور گلی «تمدیر» پخته می‌شود؛ حرارت یکنواخت و بخار دیوارهٔ گلی آن را آبدار و معطر نگه می‌دارد. این شیوه از معروف‌ترین شیوه‌های پخت گوشت در مهمانی‌های ترکمن است.' },
    { icon:'bowl', name:'بوگلاما', text:'گوشت و سبزی که با کمترین آب و در دیگ سربسته به‌آرامی خورش می‌شوند تا شیرهٔ خودشان را بیرون بدهند؛ از ساده‌ترین و در عین حال سیرکننده‌ترین خوراک‌های ترکمنی.' },
    { icon:'bowl', name:'کله‌باش‌آیاق', text:'غذای کله‌پاچه‌ای (سر و پاچهٔ گوسفند) که در مهمانی‌ها می‌آید؛ از غذاهایی که هنر آشپز ترکمن را در پختن آرام و طولانی نشان می‌دهد.' },
    { icon:'bowl', name:'ماهی خزر و آمودریا', text:'ترکمن‌های ساکن کرانهٔ خزر و کنار رودها از دیرباز ماهی را به سفره آورده‌اند؛ سوپ ماهی، ماهی کبابی و ماهی نمک‌سود از خوراک‌های این نوار آبی‌اند، در برابر سفرهٔ گوشتیِ دشت و صحرا.' },
    { icon:'bowl', name:'سوپ‌ها و آش‌ها', text:'در سفرهٔ ترکمنی بیش از پانزده نوع سوپ و آش هست: از شورپا و اوناش گرفته تا آش‌های حبوبات و رشته‌ای. آش در فرهنگ ترکمن غذای هر روز است و پهن‌کردن سفره بدون آن کمتر دیده می‌شود.' },
    { icon:'bowl', name:'خربزه و روز خربزه', text:'خربزه میوهٔ نمادین ترکمنستان است و جشنی ملی به نام «روز خربزه» (دومین یکشنبهٔ اوت) به آن اختصاص دارد. خربزه‌های ترکمن را تازه می‌خورند و برای زمستان خشک‌شده نگه می‌دارند.' },
    { icon:'horse', name:'احترام اسب در سفره', text:'گوشت اسب در آشپزی ترکمن به‌طور سنتی خورده نمی‌شود؛ جایگاه والای اسب (به‌ویژه آخال‌تکه) در فرهنگ ترکمن، آن را از مرز خوراک بیرون برده است. همین نکته آشپزی ترکمن را از بسیاری از همسایگان ترک‌زبان‌اش متمایز می‌کند.' }
  );

  fa.arts.items.push(
    { icon:'sun', title:'تقویم ملی و جشن‌های سالانه', text:'علاوه بر نوروز (۲۱ مارس)، ترکمنستان جشن‌های ملی نمادینی دارد: «روز اسب» (آخرین یکشنبهٔ آوریل)، «روز قالی» (آخرین یکشنبهٔ مه)، «روز قانون اساسی و پرچم دولتی» (۱۸ مه)، «روز خربزه» (دومین یکشنبهٔ اوت)، «روز باغشی» (دومین یکشنبهٔ سپتامبر)، روز استقلال (۲۷ سپتامبر) و روز بی‌طرفی (۱۲ دسامبر). تاریخ برخی جشن‌ها ممکن است تغییر کند؛ برای زمان دقیق به تقویم رسمی مراجعه کنید.' },
    { icon:'music', title:'شاسنم و غریب، نخستین اپرای ترکمن', text:'اپرای «شاسنم و غریب» که داستان عاشقانهٔ کهن را به صحنهٔ اپرا آورد، نخستین اپرای ترکمنی است. دانتر اووزوف و آدریان شاپوشنیکوف آن را ساختند و نخستین اجرایش ۲۵ اکتبر ۱۹۴۴ بود؛ اثری که ملودی‌های بخشی را به زبان موسیقی کلاسیک اروپایی آورد.' },
    { icon:'music', title:'دستان و تیرمه', text:'دو قالب پرکاربرد در آواز بخشی‌ها: «دستان»، روایت‌های بلند حماسی و عاشقانه (مانند گوروغلی و شاسنم و غریب) که با دوتار خوانده می‌شود، و «تیرمه»، ترانه‌ای که بر پایهٔ شعر شاعرانی مانند مختومقلی، کمینه یا سیدی ساخته می‌شود.' },
    { icon:'music', title:'تویدوک و سازهای بادی', text:'کنار دوتار و گیجک، ترکمن‌ها سازهای بادی چوبی و نی‌مانند هم دارند که «تویدوک» نامیده می‌شوند؛ صدای نرم و دردمندانهٔ آن‌ها در موسیقی چوپانی و محافل خصوصی شنیده می‌شود.' },
    { icon:'yurt', title:'نمدمالی و فرش‌های نمدی', text:'نمد (کِپه) پوشش اصلی یورت و فرش خانه‌های کوچ‌نشین بود. زنان پشم را می‌شستند، می‌زدند و با آب گرم می‌مالیدند تا نمد شود؛ نقش‌های نمد، مانند قالی، هویت خانوادگی و ایلی را حمل می‌کند.' },
    { icon:'quote', title:'سیصدمین سالگرد مختومقلی (۲۰۲۴)', text:'سال ۲۰۲۴ در ترکمنستان «سال دریای فرزانگی مختومقلی فراغی» نام گرفت و سیصدمین سالگرد تولد او گرامی داشته شد (سال تولد به برآورد پژوهشگران ۱۷۲۴؛ درگذشت ۱۸۰۷. در این‌باره اختلاف هست: برخی ۱۷۳۳ را برای تولد و ۱۷۸۰ تا ۱۷۸۳ را برای درگذشت آورده‌اند). سازمان ترک‌سوی ۲۰۲۴ را «سال مختومقلی» اعلام کرد و به گزارش پایگاه‌های دولتی ترکمنستان مجموعهٔ دست‌نوشته‌های او در فهرست بین‌المللی «حافظهٔ جهان» یونسکو ثبت شده است. پورتال رسمی magtymgulypyragy.gov.tm زندگی‌نامه و این اختلاف‌ها را شرح می‌دهد.' }
  );

  fa.clothing.women.push(
    { icon:'gem', name:'کتنی', badge:'پارچهٔ ابریشمی', text:'ابریشمی سبک با راه‌های ریز در رنگ‌های سرخ، سبز و بنفش که پارچهٔ اصلی پیراهن و ردای زنان است؛ مردان نیز کمربند ابریشمی پهن سرخی به همین نام می‌بندند. بافت ابریشم ترکمن در فهرست یونسکو ثبت شده است.' },
    { icon:'gem', name:'گینچ و بؤرک زنانه', badge:'پوشش سر زنان متأهل', text:'کلاه‌های بلند و آراسته به نقره که با روسری نگه داشته می‌شوند، ویژهٔ زنان متأهل‌اند؛ دختران مجرد تاخیای کوتاه می‌گذارند. صفحه‌ها، آویزها و گیره‌های نقره‌ای روی آن‌ها گیجگاه و گردن را می‌پوشانند و باور بر این بود که حافظ‌اند.' },
    { icon:'feather', name:'گلدوزی کشدی', badge:'هنر سوزن‌دوزی', text:'کشدی گرهٔ بخیه‌ای قلاب‌مانندی است که دختران ترکمن سال‌ها برای یادگرفتن آن زمان می‌گذارند؛ شالوده‌ای برای گلدوزی لباس‌های جشن زنان متأهل و ردای چیرپی. هنر سوزن‌دوزی ترکمن در سال ۲۰۲۲ در فهرست یونسکو ثبت شد.' },
    { icon:'shield', name:'تعویذ و چشم‌زخم', badge:'نگهبان‌های کوچک', text:'در پوشاک ترکمن مردان، زنان و کودکان همه تعویذی دارند: مثلث‌های نقره‌ای، عقیق و کیسه‌های کوچک. باور بر این است که این زیورها نخست نگهبان صاحب خود بودند و بعد نشانهٔ جایگاه اجتماعی شدند.' }
  );

  fa.places.items.push(
    { icon:'landmark', title:'فواره و یادمان اوغوزخان', text:'مجموعه‌ای در عشق‌آباد (افتتاح ۲۰۰۸) با فواره‌ای بزرگ و پیکرهٔ اوغوزخان و شش پسرش؛ نمونه‌ای از اینکه شجرهٔ اسطوره‌ای اوغوزی در نماد شهری امروز هم زنده است.' },
    { icon:'landmark', title:'آلتین‌دپه', text:'شهرک عصر مفرغ (هزارهٔ سوم تا دوم پیش از میلاد) در ولایت آخال، با ساختارهای معماری، انبارها و نشانه‌هایی از شهرنشینی و مبادلات دوربرد؛ یکی از مهم‌ترین گواهان تمدن‌های پیش از مرغیانه در این نوار.' },
    { icon:'compass', title:'ذخیره‌گاه بادخیز', text:'ذخیره‌گاهی در جنوب شرقی کشور، مرز افغانستان، با دشت‌های خشک و پستهٔ وحشی؛ مأمن گورخر آسیایی (کولان) و بخش مهمی از میراث طبیعی ترکمنستان.' },
    { icon:'compass', title:'ذخیره‌گاه رپتک', text:'ذخیره‌گاه زیست‌کرهٔ صحرای قره‌قوم در ولایت لبپ؛ مرکز پژوهش در اکوسیستم بیابانی و شناخته‌شده برای گیاهان و جانوران سازگار با خشکی (از جمله ساکسول).' }
  );

  fa.people.items.push(
    { icon:'scroll', name:'آلپ‌ارسلان', era:'سدهٔ ۱۱ میلادی', text:'دومین سلطان بزرگ سلجوقی؛ پیروزی او در ملازگرد (۱۰۷۱) درهٔ آناتولی را به روی ترکان و ترکمانان گشود.' },
    { icon:'landmark', name:'سلطان سنجر', era:'سدهٔ ۱۲ میلادی', text:'آخرین سلطان بزرگ سلجوقی که از مرو حکومت می‌کرد؛ آرامگاه او از نمادهای مرو باستان و میراث جهانی یونسکو است.' },
    { icon:'horse', name:'جنید خان', era:'سدهٔ ۲۰ میلادی', text:'رهبر ایل یموت و از سرداران پرآوازهٔ دوران ناآرامی‌های ۱۹۱۶ تا ۱۹۲۸؛ هم‌زمان حاکم خیوه و فرمانده مقاومت در صحرا.' }
  );

  /* ---------------------------------------------------------
     Türkmençe
     --------------------------------------------------------- */
  const tk = DATA.tk;

  put(tk.history.eras, 'title', 'Margiýananyň bürünç asyr siwilizasiýasy', [
    { year:'B.e.öň 6–3-nji müňýyllyklar', title:'Köpetdagyň eteginiň ilkinji daýhanlary',
      text:'Köpetdag bilen Garagumuň arasyndaky hasyllyly zolakda Merkezi Aziýanyň iň gadymy oba hojalyk obalarynyň biri Jeýtun (takmynan b.e.öň 6-njy müňýyllyk) döredi; soňra Änew mis-daş medeniýeti we Altyndepe bürünç asyr şäherçesi şol sebitde gülläp ösüp, çöl siwilizasiýalaryna ýol açdy.' }
  ]);
  put(tk.history.eras, 'title', 'Oguz taýpalarynyň göçi', [
    { year:'7–9-njy asyrlar', title:'Halyflyk döwründe Merw',
      text:'Merw 651-nji ýylda musulmanlaryň eline geçip, Horasanyň merkezine öwrüldi. 9-njy asyryň başynda Abbasy halyfy Mamun Merwde ençeme ýyl ýaşap, halyflygy şol ýerden dolandyrdy; şäher bu döwürde ylmyň we Ýüpek ýolunyň söwdasynyň iň möhüm merkezleriniň birine öwrüldi.' }
  ]);
  put(tk.history.eras, 'title', 'Seljuk imperiýasy', [
    { year:'1071', title:'Malazgirt söweşi',
      text:'Seljuk soltany Alp Arslan Malazgirtde (Gündogar Anadoly) Wizantiýa goşunyny we imperator Roman IV-i ýeňdi; bu ýeňiş türkmenleriň we oguz türkleriniň Anadola göçüne ýol açyp, bu topragyň kem-kemden türkleşmeginiň başlangyjy boldy.' }
  ]);
  put(tk.history.eras, 'title', 'Horezmşalar döwleti', [
    { year:'1118–1157', title:'Soltan Sanjar we Merwiň gülläp ösüşi',
      text:'Soňky beýik seljuk soltany Sanjar Merwden seljuklaryň giň ýerlerini dolandyrdy we şäheri öz şöhratly paýtagtyna öwrüldi. 1153-nji ýylda oguz taýpalarynyň bir topary ony ýesir aldy; bu waka seljuklaryň gündogardaky beýik güýjüniň soňuny alamatlandyrdy. Onuň aramgähi Gadymy Merwde henizem ýatyr.' }
  ]);
  put(tk.history.eras, 'title', 'Mongol çozuşy we dargama', [
    { year:'1221', title:'Merwiň we Gürgençiň weýran edilmegi',
      text:'1221-nji ýylda mongol goşuny Merwi alyp weýran etdi, köp wagt geçmänkä Gürgenç (Köneürgenç) hem ýykyldy. Bu iki betbagtçylyk Ýüpek ýolunyň gülläp ösen wahalaryny ençeme ýyl yzyna goýup, türkmen tireleriniň soňky göçlerine täsir etdi.' }
  ]);
  put(tk.history.eras, 'title', 'Türkmenistan SSR-niň döredilmegi', [
    { year:'1881', title:'Ahal şertnamasy',
      text:'Gökdepe ýykylandan soň, Ahal şertnamasy (1881) Eýran bilen patyşa Russiýasynyň arasyndaky serhedi Köpetdagyň ugrunda kesgitledi. Şol ýyldan başlap türkmenler iki ýurduň arasynda bölündiler; Eýranyň demirgazygyndaky türkmen ilatynyň, ýagny Türkmen sährasynyň, gelip çykyşy şu serhet çyzgysyna baglydyr.' }
  ]);

  put(tk.warpeace.events, 'title', 'Ikinji jahan urşundaky goşant', [
    { icon:'horse', title:'Junaýyt han we Garagumdaky garşylyk',
      text:'Ýomut tiresiniň ýolbaşçysy Junaýyt han 1916–1928-nji ýyllaryň uruş we bulaşyklygynda kesgitleýji şahsyýet boldy; 1918–1920-nji ýyllarda Hywa üstünde agalyk etdi, soň bolsa 1920-nji ýyllaryň ahyryna çenli Gyzyl goşuna garşy çölde garşylyk görkezdi we ahyrynda Eýrana gaçyp gitdi.' }
  ]);

  tk.cuisine.dishes.push(
    { icon:'bowl', name:'Kakmaç', text:'Uzak wagtlap saklamak üçin bölek ýa-da zolak görnüşinde taýýarlanýan duzlanan guradylan et; göçme durmuşyň ýadygärligi, bu gün hem adaty saçaklarda we tagamlara tagam goşmak üçin ulanylýar.' },
    { icon:'bowl', name:'Etli çörek', text:'«Etli çörek»; içi et bilen doldurylan tegelek, galyň çörek, ony özbaşyna doly bir nahar hökmünde iýip bolýar. Onuň ýerli görnüşleri fitçi ýaly atlar bilen hem tanalýar.' },
    { icon:'bowl', name:'Tamdyrlama', text:'Palçykdan ýasalan tamdyrda bişirilýän et (adatça guzy eti); tamdyryň deň ýylylygy we diwaryndan gelýän bug ony şireli we ysly saklaýar. Bu usul türkmen myhmançylyklarynda et bişirmegiň iň meşhur usullarynyň biridir.' },
    { icon:'bowl', name:'Buglama', text:'Et we gök önümler iň az suw bilen, ýapyk gazanda ýuwaşlyk bilen bugarylýar, öz şiresini bermegi üçin; türkmen tagamlarynyň iň ýönekeý, ýöne iň doýurýanlarynyň biri.' },
    { icon:'bowl', name:'Kelle-baş-aýak', text:'Goýnuň kellesi bilen aýaklaryndan taýýarlanýan tagam; myhmançylyklarda berilýär, türkmen aşpezçisiniň uzak we ýuwaş bişirmek ukybyny görkezýän tagamlaryň biri.' },
    { icon:'bowl', name:'Hazar we Amyderýa balygy', text:'Hazar kenarynda we derýa ýakasynda ýaşaýan türkmenler irki zamanlardan bäri saçaga balyk getiripdirler; balyk çorbasy, kebap balyk we duzlanan balyk bu suwly zolagyň tagamlarydyr, düzlüň we çölüň et saçagyna garşy goýulýar.' },
    { icon:'bowl', name:'Çorbalar we aşlar', text:'Türkmen saçagynda on bäşden gowrak görnüşli çorba we aş bar: şorpadan, unaşdan başlap, hoz-noýbaly we çişirimli aşlara çenli. Aş türkmen medeniýetinde her günki tagamdyr, ony ýok saçak ýazmak seýrek duş gelýär.' },
    { icon:'bowl', name:'Gawun we Gawun güni', text:'Gawun Türkmenistanyň nyşanly miwesidir; oňa «Gawun güni» (awgust aýynyň ikinji ýekşenbesi) atly milli baýram bagyşlanýar. Türkmen gawunlaryny täze iýýärler, gyş üçin bolsa guradylan görnüşde saklaýarlar.' },
    { icon:'horse', name:'Atyň hormaty saçakda', text:'At eti türkmen aşpezçiliginde adatça iýilmeýär; atyň (aýratyn ahaltekäniň) türkmen medeniýetindäki beýik orny ony iýmit çäginden çykarýar. Bu aýratynlyk türkmen aşpezçiligini köp türki dilli goňşularyndan tapawutlandyrýar.' }
  );

  tk.arts.items.push(
    { icon:'sun', title:'Milli senenama we ýyllyk baýramlar', text:'Nowruzdan (21-nji mart) başga, Türkmenistanyň nyşanly milli baýramlary bar: «At güni» (aprel aýynyň soňky ýekşenbesi), «Haly güni» (maý aýynyň soňky ýekşenbesi), «Konstitusiýa we Döwlet baýdagynyň güni» (18-nji maý), «Gawun güni» (awgustyň ikinji ýekşenbesi), «Bagşy güni» (sentýabryň ikinji ýekşenbesi), Garaşsyzlyk güni (27-nji sentýabr) we Bitaraplyk güni (12-nji dekabr). Käbir baýramlaryň sene täzelenmegi mümkin; takyk wagt üçin resmi senenama serediň.' },
    { icon:'music', title:'«Şasenem we Garyp», ilkinji türkmen operasy', text:'Gadymy söýgi hekaýasyny opera sahnasyna çykaran «Şasenem we Garyp» ilkinji türkmen operasydyr. Ony Danatar Öwezow bilen Adrian Şaposhnikow döretdi we ilkinji gezek 1944-nji ýylyň 25-nji oktýabrynda sahnalaşdyryldy; bagşy sazlaryny Ýewropanyň klassyki sazy dilinde eşitdirdi.' },
    { icon:'music', title:'Dessan we tirme', text:'Bagşylaryň aýdymynda iki köp ulanylýan görnüş: «dessan», dutar bilen aýdylýan uzyn gahrymançylyk we söýgi hekaýalary (Görogly we Şasenem-Garyp ýaly), we «tirme», Magtymguly, Kemine ýa-da Seýdi ýaly şahyrlaryň goşgularyna esaslanan aýdym.' },
    { icon:'music', title:'Tüýdük we üflenýän sazlar', text:'Dutar we gyjakdan başga türkmenlerde «tüýdük» diýlip atlandyrylýan agaç we gamyş görnüşli üflenýän sazlar hem bar; olaryň ýumşak, hasratly sesi çopan sazlarynda we ýapyk ýygnaklarda eşidilýär.' },
    { icon:'yurt', title:'Keçe basmak we keçe haly', text:'Keçe öýüň esasy örtügi we göçme öýleriň haly-düşegi bolupdyr. Aýallar ýüňi ýuwup, gatyryp, gyzgyn suw bilen sürtüp keçä öwrüpdirler; keçäniň nagyşlary hem haly ýaly maşgala we tire kimligini göterýär.' },
    { icon:'quote', title:'Magtymgulynyň 300 ýyllygy (2024)', text:'2024-nji ýyl Türkmenistanda «Pähim-paýhas ummany Magtymguly Pyragy» ýyly diýlip yglan edildi we onuň doglanynyň 300 ýyllygy bellenildi (alymlaryň çaklamasy boýunça 1724–1807; bu barada jedel bar: käbirleri doglan ýyly hökmünde 1733-nji, aradan çykan ýyly hökmünde 1780–1783-nji ýyllary getirýärler). TÜRKSOÝ 2024-nji ýyly «Magtymguly ýyly» diýip yglan etdi we döwlet çeşmeleriniň habaryna görä, onuň golýazmalar toplumy ÝUNESKO-nyň «Dünýäniň hakydasy» halkara sanawyna girizildi. magtymgulypyragy.gov.tm resmi portaly terjimehaly we şu jedelleri beýan edýär.' }
  );

  tk.clothing.women.push(
    { icon:'gem', name:'Keteni', badge:'Ýüpek mata', text:'Gyzyl, ýaşyl we melewşe reňklerdäki inçe zolakly ýeňil ýüpek; aýallaryň köýnekleriniň we eşikleriniň esasy matasy, erkekler hem şol atly giň gyzyl ýüpek guşak daňýarlar. Türkmen ýüpek dokamaçylygy ÝUNESKO-nyň sanawynda bellige alyndy.' },
    { icon:'gem', name:'Gyňaç we aýal börügi', badge:'Öýlenen aýallaryň başgaby', text:'Kümüş bilen bezelen, ýaglyk bilen saklanýan beýik başgaplar öýlenen aýallara mahsusdyr; öýlenmedik gyzlar pes tahýa geýýärler. Olaryň üstündäki kümüş tagtalar, asylgylar we sancaklar şakgyny we boýnuny ýapýar we goraýar diýlip ynanylypdyr.' },
    { icon:'feather', name:'Keşde (kesdi)', badge:'Inedurlyk sungaty', text:'Kesdi gyzlaryň ençeme ýyl öwrenýän ilmek şekilli tikin düwünidir; öýlenen aýallaryň dabara eşiklerini we çyrpyny bezeýän keşdäniň esasy. Türkmen inedurlyk sungaty 2022-nji ýylda ÝUNESKO-nyň sanawyna girizildi.' },
    { icon:'shield', name:'Tumar we göz degmesi', badge:'Kiçijik goragçylar', text:'Türkmen eşiginde erkekler, aýallar we çagalar - ählisi tumar dakynýar: kümüş üçburçluklar, akyk we kiçi haltajyklar. Bu şaý-sepleriň ilki eýesini goraýandygy, soň bolsa jemgyýetçilik derejäniň alamatyna öwrülendigi aýdylýar.' }
  );

  tk.places.items.push(
    { icon:'landmark', title:'Oguz han ýadygärligi we fontan', text:'Aşgabatdaky (2008-nji ýylda açylan) uly fontanly toplum; Oguz hanyň we onuň alty ogluň heýkelleri bilen; oguz rowaýat şejeresiniň şäher nyşanyna öwrülendigini görkezýär.' },
    { icon:'landmark', title:'Altyndepe', text:'Ahal welaýatynda bürünç asyr şäherçesi (b.e.öň 3–2-nji müňýyllyk), binagärlik gurluşlary, ammarlary we şäher durmuşynyň, uzak aralyk alyş-çalşygyň alamatlary bilen; Margiýanadan öňki siwilizasiýalaryň iň möhüm şaýatlarynyň biri.' },
    { icon:'compass', title:'Badhyz goraghanasy', text:'Ýurduň günorta-gündogarynda, Owganystan serhedinde, gurak düzlükleri we ýabany pisse agaçlary bilen; Aziýa ýabany eşegi (kulan) üçin howpsuz ýer we Türkmenistanyň tebigy mirasynyň möhüm bölegi.' },
    { icon:'compass', title:'Repetek goraghanasy', text:'Garagum çölündäki Lebap welaýatynda biosfera goraghanasy; çöl ekosistemasyny öwrenmegiň merkezi, guraklyga uýgunlaşan ösümlikleri we haýwanlary (şol sanda sakssaul) bilen tanalýar.' }
  );

  tk.people.items.push(
    { icon:'scroll', name:'Alp Arslan', era:'11-nji asyr', text:'Ikinji beýik seljuk soltany; Malazgirtdäki (1071) ýeňşi Anadoly derwezesini türklere we türkmenlere açdy.' },
    { icon:'landmark', name:'Soltan Sanjar', era:'12-nji asyr', text:'Merwden dolandyran soňky beýik seljuk soltany; onuň aramgähi Gadymy Merwiň nyşanlaryndan we ÝUNESKO-nyň Bütindünýä mirasynyň biridir.' },
    { icon:'horse', name:'Junaýyt han', era:'20-nji asyr', text:'Ýomut tiresiniň ýolbaşçysy, 1916–1928-nji ýyllaryň bulaşyk döwrüniň meşhur serkerdelerinden; şol bir wagtyň özünde Hywanyň hany we çöldäki garşylygyň serkerdesi.' }
  );

  /* quiz + intro text */
  fa.quiz.questions.push(
    { q:'در روایت اوغوزخان، پسران بزرگ‌تر چه چیزی دریافت کردند؟', options:['سه تیر سیمین','پاره‌های یک کمان زرین','سه شمشیر','سه اسب'], correct:1, explain:'سه پسر بزرگ‌تر (گون، آی، ییلدیز) پاره‌های کمان زرین را گرفتند و شاخهٔ «بوزوق» شدند؛ پسران کوچک‌تر سه تیر سیمین گرفتند و «اوچوق» نام گرفتند.' },
    { q:'نخستین اپرای ترکمنی چه نام دارد؟', options:['شاسنم و غریب','زهره و طاهر','گوروغلی','لیلی و مجنون'], correct:0, explain:'«شاسنم و غریب» (۱۹۴۴) اثر دانتر اووزوف و آدریان شاپوشنیکوف نخستین اپرای ترکمنی است.' },
    { q:'پیمان آخال (۱۸۸۱) چه چیزی را مشخص کرد؟', options:['مرز ایران و روسیهٔ تزاری در امتداد کپه‌داغ','پایتخت ترکمنستان','الفبای ترکمنی','نام ایل‌ها'], correct:0, explain:'پس از سقوط گؤک‌تپه، این پیمان مرز ایران و روسیه را مشخص کرد و ترکمن‌ها میان دو کشور تقسیم شدند.' }
  );
  tk.quiz.questions.push(
    { q:'Oguz hanyň rowaýatynda uly ogullar näme aldylar?', options:['Üç kümüş ok','Altyn ýaýyň bölekleri','Üç gylyç','Üç at'], correct:1, explain:'Üç uly ogul (Gün, Aý, Ýyldyz) altyn ýaýyň bölekleriniň alyp «bozok» boldular; üç kiçi ogul üç kümüş ok alyp «üçok» atlandylar.' },
    { q:'Ilkinji türkmen operasynyň ady nähili?', options:['Şasenem we Garyp','Zöhre-Tahyr','Görogly','Leýli we Mejnun'], correct:0, explain:'«Şasenem we Garyp» (1944), Danatar Öwezow bilen Adrian Şaposhnikowyň eseri, ilkinji türkmen operasydyr.' },
    { q:'Ahal şertnamasy (1881) nämäni kesgitledi?', options:['Eýran bilen patyşa Russiýasynyň serhedini Köpetdagyň ugrunda','Türkmenistanyň paýtagtyny','Türkmen elipbiýini','Tireleriň atlaryny'], correct:0, explain:'Gökdepe ýykylandan soň bu şertnama Eýran bilen Russiýanyň serhedini kesgitledi we türkmenler iki ýurduň arasynda bölündiler.' }
  );
  fa.ui.quizIntro = 'هجده سؤال چهارگزینه‌ای دربارهٔ تاریخ، زبان، پوشاک، غذا و مشاهیر ترکمن. امتیاز شما در همین مرورگر ذخیره می‌شود.';
  tk.ui.quizIntro = 'Taryh, dil, eşik, tagam we türkmen görnükli adamlary barada on sekiz soraglyk test. Netijäňiz şu brauzerde saklanýar.';

  /* sources: record this revision's checks */
  fa.sources.categories.push({ icon:'check', title:'بازبینی واقعیت‌ها و افزوده‌ها (اکتبر ۲۰۲۶، دور دوم)', text:'فهرست ده‌گانهٔ یونسکو (فهرست نمایندهٔ ترکمنستان)، ترتیب پنج گل پرچم، روایت کمان زرین و سه تیر سیمین (متن ابوالغازی در نسخهٔ دیجیتال توهو‌بونکو)، نام‌ها و رنگ‌های چیرپی، و سابقهٔ اپرای «شاسنم و غریب» با منابع مرجع تطبیق داده شد. واژه‌نام‌های ترکمنی و معناهای تحت‌اللفظی نام‌ها همچنان نیازمند بازبینی گویشور بومی‌اند.' });
  tk.sources.categories.push({ icon:'check', title:'Maglumatlary barlamak we goşmaçalar (2026-njy ýylyň oktýabry, ikinji tapgyr)', text:'ÝUNESKO-nyň on elementli sanawy, baýdakdaky bäş gölüň tertibi, altyn ýaý we üç kümüş ok rowaýaty (Abulgazynyň teksti), çyrpynyň reňkleri we atlary, «Şasenem we Garyp» operasynyň taryhy ygtybarly çeşmeler bilen deňeşdirildi. Türkmen sözleri we atlaryň manylary henizem ene dilli gürleýjiniň barlagyna mätäçdir.' });

  fa.arts.items.push({ icon:'shield', title:'ثبت‌های یونسکو: تاریخ و محل نشست‌ها', text:'بر پایهٔ خبرهای رسمی سفارت‌های ترکمنستان: حماسه‌خوانی گوروغلی ۲۰۱۵؛ آیین آواز و رقص «کوشت‌دپدی» در ۷ دسامبر ۲۰۱۷ در نشست دوازدهم کمیتهٔ میراث ناملموس در جِجو (کره جنوبی) و پیش‌تر در ۲۰۱۳ در فهرست ملی ترکمنستان؛ هنر قالی‌بافی ترکمن در دسامبر ۲۰۱۹ در نشست چهاردهم در بوگوتا (کلمبیا)؛ هنر گلدوزی ترکمن در ۲۰۲۲ در نشست هفدهم در رباط (مراکش). متن رسمی ترکمنی هم ثبت‌ها را همراه ساخت و ساز دوتار و دوتارنوازی و اسب آخال‌تکه می‌شمارد.' });
  tk.arts.items.push({ icon:'shield', title:'ÝUNESKO belliklerinin senesi we ýeri', text:'Türkmenistanyň ilçihanalarynyň resmi habarlaryna görä: «Görogly» dessançylyk sungaty 2015; «Küştdepdi» aýdym we tans dessury 2017-nji ýylyň 7-nji dekabrynda Koreýa Respublikasynyň Çeju şäherindäki 12-nji mejlisde (2013-nji ýylda Türkmenistanyň milli sanawyna girizilipdi); türkmen halyçylyk sungaty 2019-njy ýylyň dekabrynda Kolumbiýanyň Bogota şäherindäki 14-nji mejlisde; türkmen keşdeçilik sungaty 2022-nji ýylda Marokkonyň Rabat şäherindäki 17-nji mejlisde. Resmi türkmen çeşmeleri dutar ýasamak, dutarda saz çalmak we ahalteke atçylygyny hem sanaýar.' });
  fa.arts.items.push(
    { icon:'users', title:'عروسی ترکمن: سه روز جشن', text:'عروسی امروزی ترکمن معمولاً سه روز و با همهٔ مقدمات تا پنج روز طول می‌کشد. ازدواج بیشتر با خواستگاری (gudaçylyk) و توافق والدین (guda bolmak) انجام می‌شود. نخستین مرحله «چین‌چلپک» است: جشن در خانهٔ عروس، که امروز به‌شکل دورهمی دختران است.' },
    { icon:'shirt', title:'لباس عروس ترکمن', text:'لباس رایج عروس: پیراهن سرخ از ابریشم دست‌بافت کتنی با آویزهای نقره یا آب‌طلا از یقهٔ گلدوزی تا دامن، ردای بازِ مزین به زیورهای نقره، عرقچین ابریشم‌دوزی و زنجیر و زنگوله و آویزهای نقره بر موی بافته. بر سر عروس ردای گلدوزی‌شده‌ای (چیرپی‌گونه) می‌اندازند. جواهرات کهن ترکمن جایگاه ویژه دارند.' },
    { icon:'gem', title:'آت‌قولاق: هدیه‌های پیش از عروسی', text:'یک روز پیش از جشن، مادر داماد به خویشان عروس هدیه می‌دهد: پارچه، شیرینی بسته‌بندی در دستمال و قالی. طرف دیگر باید دستمال‌ها را با هدایایی هم‌ارزش پس بدهد.' },
    { icon:'shirt', title:'گلین کورته', text:'ردای سرخ و غرق گلدوزی «گلین کورته» که بر سر عروس انداخته می‌شود و از نشانه‌های عروسی ترکمن است.' },
    { icon:'mask', title:'بازی‌های آیینی عروس و داماد', text:'برای شناخت و شوخی: عروس باید گره‌های سفت کمربند ابریشمی داماد را باز کند، دوستان داماد دکمهٔ یقه‌اش را می‌کنند و عروس آن را می‌دوزد، و عروس باید چکمه‌های تنگ داماد را درآورد. این آزمون‌های شوخ نشانهٔ مهارت عروس و پیوند تازه‌ٔ خویشاوندی است.' },
    { icon:'feather', title:'سرپوش دختر و زن', text:'در یکی از شیوه‌ها، چهار گیسوی عروس را به پشت می‌اندازند، دستمال کوچک سرش را کودکی در شلوغی می‌قاپد و مادرشوهر در برابر شیرینی پس می‌دهد؛ عروس باید آن را تا ازدواج دخترش یا پسرش (برای هدیه به عروس) نگه دارد. در شیوهٔ دیگر، «افسار» طناب بافته‌ای را بر ردای عروس می‌اندازند، داماد نمادین سه بار می‌کشد و روسری بزرگی از زنی محترم و پرفرزند بر سر او می‌اندازند: نماد ازدواج و آغاز سرنوشت زنانه.' },
    { icon:'gem', title:'سِپ: جهیزیهٔ عروس', text:'پدر و مادر عروس روز عروسی جهیزیه («سِپ») را به خانوادهٔ داماد می‌دهند؛ سال‌ها پیش تهیه می‌شد و بیشتر کار دست خود عروس بود. شامل: دو چووال (کیسهٔ قالی یا پلاس)، یک یا دو قالی، پلاس، نمد، تُربه، لحاف گرم و ظروف آشپزخانه، با شمار مشخص طبق رسم. جهیزیه را به نمایش می‌گذاشتند تا مهمانان مهارت و پشتکار دختر را بسنجند. لباس‌ها هم شامل پیراهن ابریشمی و شلوار و ردا و شال بود.' },
    { icon:'quote', title:'هدیه‌های عروس به خانوادهٔ شوهر', text:'به رسم، عروس به پدرشوهر ردا یا عرقچین گلدوزی‌شده می‌دهد، به مادرشوهر روسری و به شوهرش عرقچین زیبا؛ به دیگران هم عرقچین، پارچه یا روسری.' },
    { icon:'horse', title:'کاروان عروسی: از شتر تا خودرو', text:'پیش‌تر کاروان عروسی با اسبان زنگوله‌دار و شترانی که با قالی آراسته می‌شدند و دختران و زنان لباس جشن بر آن‌ها می‌نشستند، از لحظه‌های درخشان مراسم بود؛ امروز خودروها جای آن‌ها را گرفته‌اند و شمارشان باید زوج باشد، که نماد جفت‌بودن است.' }
  );
  tk.arts.items.push(
    { icon:'users', title:'Türkmen toýy: üç gün jemagatlyk', text:'Häzirki türkmen toýy adatça üç gün, ähli öňürti dabaralar bilen bäş güne çenli dowam edýär. Nikalaşma köplenç gudaçylyk we ata-eneleriň ylalaşygy (guda bolmak) arkaly bolýar. Ilkinji tapgyr «çin-çelpek» — gelniň öýündäki toý, häzir gyzlaryň ýygnanyşygy görnüşinde.' },
    { icon:'shirt', title:'Gelniň toý eşigi', text:'Gelniň adaty eşigi: ýüpek keteniden gyzyl köýnek, nakyşly ýakadan eteklere çenli kümüş ýa-da altyn örtükli asmalar, kümüş bezegli açyk don, ýüpek bilen nagyşlanan tahýa, gaşa we asma-bezegler. Gelniň kellesine nagyşly don atylýar. Gadymy türkmen şaý-sepleri aýratyn orun tutýar.' },
    { icon:'gem', title:'At gulak: toýdan öňki sowgatlar', text:'Toýuň öň ýanynda, giýewiniň ejesi gelniň garyndaşlaryna matalar, ýaglyga dolanan süýjüler we halylar sowgat berýär. Garşy tarap ýaglyklary deň bahaly sowgatlar bilen yzyna gaýtarmaly.' },
    { icon:'shirt', title:'Gelin kürte', text:'Gelniň kellesine atylýan gyzyl, ýygyn-ýygyn nagyşly «gelin kürte» türkmen toýunyň alamatlaryndan biridir.' },
    { icon:'mask', title:'Gelin-giýew oýunlary', text:'Tanyşlyk we degişme üçin: gelin giýewiniň ýüpek guşagyndaky berk düwünleri çözmeli, giýewiniň dostlary onuň köýnek ýakasynyň düwmesini üzýärler, gelin ony täzeden tikýär, gelin giýewiniň dar ädigini çykarmaly. Bu degişme synaglary gelniň ukybyny we täze garyndaşlyk baglanyşygyny görkezýär.' },
    { icon:'feather', title:'Gyzlyk we gelinlik baş eşigi', text:'Bir görnüşde gelniň dört örümi arkasyna taşlanýar, başdaky kiçi ýaglygy bir çaga ýygyndan alýar we gaýyn ene ony süýji-peçenä gaýtarýar; gelin ony gyzy durmuşa çykýança ýa-da ogly öýlenýänçä saklamaly. Başga görnüşde gelniň donuna örme «gylawlar» atylýar, giýew ony nyşanly üç gezek çekýär we köp çagaly hormatly aýalyň sowgat beren uly ýaglygy gelniň kellesine atylýar: durmuşa çykmagyň nyşany.' },
    { icon:'gem', title:'Sep: gelin çuw', text:'Gelniň ata-enesi toý güni Sep atly gelin çuwuny giýewiniň tarapyna berýär; ol ençeme ýyl öň taýýarlanýar we köplenç gelniň öz eli bilen dokalýar. Içinde: iki çuwal, bir-iki haly, palas, keçe, torba, ýyly ýorgan we aşhana gap-gaçlary, sany ýörelge boýunça kesgitlenýär. Çuw görkezilýär, myhmanlar gyzyň ukybyny we zähmetsöýerligini baha berýärler.' },
    { icon:'quote', title:'Gelniň giýew maşgalasyna sowgatlary', text:'Ýörelge boýunça gelin gaýyn atasyna don ýa-da nagyşly tahýa, gaýyn enesine baş ýaglyk, ärine owadan tahýa sowgat berýär; beýlekilere hem tahýa, mata ýa-da ýaglyk.' },
    { icon:'horse', title:'Toý ýörişi: düýeden awtoulaga çenli', text:'Öň toý ýörişi ýaňlanýan monjukly atlar we haly bilen bezelen düýeler, olaryň üstünde bezenen gyz-gelinler bilen iň şowhunly pursatlaryň biri bolupdyr; häzir ulaglar çalyşdy we sany jübüt bolmaly, bu jübütligiň nyşany.' }
  );
  fa.places.items.push(
    { icon:'landmark', title:'موزهٔ دولتی ترکمنستان (عشق‌آباد)', text:'از ۱۹۲۵ به‌نام «موزهٔ دولتیِ سرزمین‌شناسی ترکمنستان» شناخته شد (پیش‌تر موزهٔ جانورشناسی بود)؛ ۱۹۶۳ زیر نظر وزارت فرهنگ؛ ۵ ژانویهٔ ۱۹۹۸ با فرمان شمارهٔ ۳۴۷۹ رئیس‌جمهور، موزهٔ تاریخ و قوم‌نگاری با موزهٔ هنرهای تجسمی ادغام و «موزهٔ ملی ترکمنستان» شد (افتتاح ۱۲ نوامبر ۱۹۹۸)؛ ۱۴ مه ۲۰۰۹ «موزهٔ ملی اصلی» نام گرفت و بعدها به مرکز دولتی فرهنگ پیوست. موزهٔ دولتی هفت تالار دائمی دارد (تاریخ، فرهنگ امروز، قوم‌نگاری).' },
    { icon:'landmark', title:'موزهٔ قوم‌نگاری و سرزمین‌شناسی', text:'۱۸ مه ۲۰۰۹ افتتاح شد. ساختمانی سه‌طبقه کنار ساختمان اصلی؛ طبقهٔ اول طبیعت ترکمنستان (۴۳۶ گونه پرنده ثبت‌شده؛ ۹ گونهٔ گلِ برف‌شکن از کتاب سرخ که ۴ گونه بومی‌اند) و طبقهٔ دوم قوم‌نگاری: آداب، وسایل زندگی، لباس‌های ملی، پیشه‌ها، سلاح، سازها و زیور نقره‌ای.' },
    { icon:'gem', title:'موزهٔ هنرهای تجسمی (تا ۱۹۹۸)', text:'۱۹۲۷ بخش هنرهای تجسمی در موزهٔ سرزمین‌شناسی گشوده شد و ۲۹ سپتامبر ۱۹۳۹ موزهٔ مستقلی شد. تا ۱۹۴۲ مجموعهٔ قالی، گلدوزی و زرگری آن از اتحادیهٔ دولتی قالی و موزهٔ سرزمین‌شناسی تأمین شد. با ادغام ۵ ژانویهٔ ۱۹۹۸ به‌صورت موزهٔ مستقل متوقف شد و آثارش به موزهٔ ملی رفت.' },
    { icon:'compass', title:'موزهٔ مجازی (virtualmuseum.gov.tm)', text:'تور مجازی ۳۶۰ درجه از موزهٔ دولتی ترکمنستان که ۱۹۹۸ تاریخچهٔ ادغام و افتتاحش را هم می‌نویسد. ۲۱ فوریهٔ ۲۰۰۷ ساخت موزهٔ رئیس‌جمهور و موزهٔ قوم‌نگاری دو سوی ساختمان اصلی آغاز شد.' },
    { icon:'book', title:'کتابخانهٔ دولتی ترکمنستان', text:'کتابخانهٔ ملی کشور، تأسیس ۱۸۹۵ (به گفتهٔ ویکی‌پدیا) و با ۵٫۶ میلیون مدرک (کتاب، نشریه، نوشتار صوتی، نقشه، دست‌نوشته…). ۲۴ دسامبر ۱۹۹۲ مقام «نهاد ملی» گرفت و ۲۵ آوریل ۲۰۱۳ به کتابخانهٔ دولتی مرکز دولتی فرهنگ تغییر نام داد.' },
    { icon:'music', title:'کنسرواتوار ملی ترکمنستان', text:'۱۹۷۲ باز شد، ۱۹۹۳ به «کنسرواتوار ملی ترکمن» تغییر نام داد و فلسفهٔ آن حفظ و پرورش سنت‌های ملی است؛ اکتبر ۲۰۱۹ موزهٔ مایا کولی‌یوا در محوطه‌اش افتتاح شد.' }
  );
  tk.places.items.push(
    { icon:'landmark', title:'Türkmenistanyň Döwlet muzeýi (Aşgabat)', text:'1925-nji ýyldan «Türkmenistanyň Döwlet ülkäni öwreniş» muzeýi diýlip atlandyrylypdyr (öň zoologiýa muzeýi bolupdyr); 1963-nji ýylda Medeniýet ministrliginiň düzümine girdi; 1998-nji ýylyň 5-nji ýanwarynda Prezidentiň № 3479 kararyna laýyklykda Taryh we etnografiýa muzeýi bilen Şekillendiriş sungaty muzeýi birikdirilip Türkmenistanyň Milli muzeýi döredildi (1998-nji ýylyň 12-nji noýabrynda açyldy); 2009-njy ýylyň 14-nji maýynda oňa «Baş milli muzeý» ady dakyldy we soň Döwlet medeniýet merkezine girizildi. Döwlet muzeýiniň ýedi hemişelik zaly bar (taryh, häzirki zaman medeniýeti, etnografiýa).' },
    { icon:'landmark', title:'Etnografiýa we ülkäni öwreniş muzeýi', text:'2009-njy ýylyň 18-nji maýynda açyldy. Esasy binanyň ýanyndaky üç gatly bina; 1-nji gat Türkmenistanyň tebigatyna (guşlaryň 436 görnüşi hasaba alnan; Gyzyl kitapdaky çigildemiň 9 görnüşi, olaryň 4-i endemik), 2-nji gat etnografiýa bölümine bagyşlanan: däp-dessurlar, durmuş esbaplary, milli egin-eşikler, senetler, ýaraglar, saz gurallary, kümüş şaý-sepler.' },
    { icon:'gem', title:'Şekillendiriş sungaty muzeýi (1998-nji ýyla çenli)', text:'1927-nji ýylda ülkäni öwreniş muzeýinde şekillendiriş bölümi açyldy we 1939-njy ýylyň 29-njy sentýabrynda aýratyn muzeý boldy. 1942-nji ýyla çenli onuň halylary, keşdeleri we zergärçilik önümleri Döwlet halyçylyk birleşiginden we ülkäni öwreniş muzeýinden getirildi. 1998-nji ýylyň 5-nji ýanwarynda birleşdirmek bilen özbaşdak muzeý hökmünde işini togtatdy we gymmatlyklary Milli muzeýe geçirildi.' },
    { icon:'compass', title:'Wirtual muzeý (virtualmuseum.gov.tm)', text:'Türkmenistanyň Döwlet muzeýiniň 360 gradusly wirtual syýahaty; muzeýiň birleşdirilişiniň we açylyşynyň taryhy hem ýazylýar. 2007-nji ýylyň 21-nji fewralynda Prezident muzeýiniň we Etnografiýa muzeýiniň gurluşygy esasy binanyň iki ýanynda başlandy.' },
    { icon:'book', title:'Türkmenistanyň Döwlet kitaphanasy', text:'Ýurduň milli kitaphanasy, 1895-nji ýylda esaslandyrylan (Wikipediýa boýunça), 5,6 million nusga (kitap, neşir, ses ýazgylary, kartalar, golýazmalar…). 1992-nji ýylyň 24-nji dekabrynda «milli edara» derejesini aldy we 2013-nji ýylyň 25-nji aprelinde Döwlet medeniýet merkeziniň Döwlet kitaphanasy diýlip adyny üýtgetdi.' },
    { icon:'music', title:'Türkmen milli konserwatoriýasy', text:'1972-nji ýylda açyldy, 1993-nji ýylda «Türkmen milli konserwatoriýasy» diýlip adyny üýtgetdi; onuň maksady milli däpleri saklamak we ösdürmek; 2019-njy ýylyň oktýabrynda onuň meýdançasynda Maýa Kulyýewanyň muzeýi açyldy.' }
  );

  /* ---------- update 7: poets, checked against the 19th-century literature pages of turkmenkultur.com and tk.wikipedia ---------- */
  const poet = (D, name) => D.poets.items.find(x => x.name === name);
  (function(){
    let x;
    if((x = poet(fa, 'دولت‌محمد آزادی'))) x.years = 'حدود ۱۷۰۰ تا ۱۷۶۰';
    if((x = poet(tk, 'Döwletmämmet Azady'))) x.years = 'takmynan 1700–1760';
    if((x = poet(fa, 'زلیلی'))) { x.years = '۱۷۸۰ تا ۱۸۴۶'; x.name = 'قربان‌دردی زلیلی'; }
    if((x = poet(tk, 'Zelili'))) { x.years = '1780–1846'; x.name = 'Gurbandurdy Zelili'; }
    if((x = poet(fa, 'مُلانفس'))) x.text = x.text.replace('در مدرسه‌های بخارا و خیوه درس خواند','در مدرسهٔ روستا و مدرسهٔ مرو درس خواند (برخی منابع بخارا و خیوه را هم می‌آورند)') + ' او را «شاه سرزمین عشق» (Yşk mülküniň şasy) می‌خوانند؛ پدرش ملا قدیربردی و زادگاهش به نوشتهٔ turkmenkultur.com ناحیهٔ سرخس است.';
    if((x = poet(tk, 'Mollanepes'))) x.text += ' Ony «Yşk mülküniň şasy» diýip atlandyrýarlar; atasy molla Kadyrberdi, doglan ýeri turkmenkultur.com-yň ýazmagyna görä Sarahs töweregi, ol oba mekdebinde we Mary medresesinde okapdyr.';
    if((x = poet(fa, 'مختومقلی فراغی'))) x.text += ' به نوشتهٔ turkmenkultur.com حدود ۱۷۳۳ در حاجی‌گووشان کنار رود گرگان زاده شد و حدود ۱۷۸۳ کنار چشمهٔ آتاساری نزدیک سونوداغ درگذشت؛ پورتال رسمی برآورد ۱۷۲۴ تا ۱۸۰۷ را می‌آورد.';
    if((x = poet(tk, 'Magtymguly Pyragy'))) x.text += ' turkmenkultur.com-yň ýazmagyna görä, takmynan 1733-nji ýylda Gürgen derýasynyň boýundaky Hajygowşanda doglup, takmynan 1783-nji ýylda Sönüdagyň ýanyndaky Atasary çeşmesiniň boýunda aradan çykypdyr; resmi portal 1724–1807 çaklamasyny getirýär.';
    if((x = poet(fa, 'کمینه'))) { x.name = 'مامت‌ولی کمینه'; x.text += ' در «زولپ» (پنج‌بندی دربارهٔ زلف) زلف را به اژدهای خفته بر گنج و کمند تشبیه می‌کند؛ ملانفس گفته است برای ستایش زلف سخنی نگذاشته است.'; }
    if((x = poet(tk, 'Kemine'))) { x.name = 'Mämmetweli Kemine'; x.text += ' «Zülp» atly bäşlemesinde zülpi genji-hazynany ýassanyp ýatan ajdarha meňzedýär; Mollanepes onuň zülp hakda söz goýmandygyny aýdypdyr.'; }
  })();
  fa.poets.items.push({ icon:'feather', name:'آناگیلیچ مطاجی', years:'۱۸۲۲ تا ۱۸۸۴', text:'از شاعران کلاسیک سدهٔ ۱۹ ترکمن که در کنار سیدی، زلیلی، کمینه و ملانفس نام برده می‌شود. اطلاعات تفصیلی‌ای که در این منابع دیدم به همین اندازه است.' });
  tk.poets.items.push({ icon:'feather', name:'Annagylyç Mätäji', years:'1822–1884', text:'XIX asyr türkmen klassyk şahyrlarynyň biri; Seýdi, Zelili, Kemine we Mollanepes bilen bilelikde agzalýar. Gören çeşmelerimde jikme-jik maglumat şu derejede.' });
  fa.sources.categories.push({ icon:'check', title:'شاعران سدهٔ ۱۸ و ۱۹ (آپدیت ۷)', text:'سال‌های زندگی آزادی، آندلیب، کمینه، سیدی، زلیلی، ملانفس و مطاجی با صفحه‌های «ادبیات سدهٔ ۱۹» در turkmenkultur.com/menu/ml/t8 و ویکی‌پدیای ترکمنی تطبیق داده شد؛ سال‌های دقیق در منابع اختلاف دارند و همه «حدود»اند.' });
  tk.sources.categories.push({ icon:'check', title:'XVIII–XIX asyr şahyrlary (täzelenme 7)', text:'Azadynyň, Andalybyň, Keminäniň, Seýdiniň, Zelilini, Mollanepesiň we Mätäjiniň ýaşan ýyllary turkmenkultur.com/menu/ml/t8 sahypalary we türkmen Wikipediýasy bilen deňeşdirildi; takyk ýyllar çeşmelerde tapawutly we hemmesi «takmynan».' });
  fa.arts.items.push(
    { icon:'quote', title:'سینمای ترکمن: صد سال (۱۹۲۶ تا ۲۰۲۶)', text:'تولد سینمای ترکمن را ۷ فوریهٔ ۱۹۲۶ می‌دانند و انجمن «اوغوزخان»–ترکمن‌فیلم در ۲۰۲۶ صدمین سالگرد را جشن می‌گیرد. به نوشتهٔ پرتال دولتی، نخستین فیلم بلند، «برمی‌گردم» (الکساندر لداشچف، ۱۹۳۵)، فیلمی صامت با زیرنویس بر پایهٔ شعر «کارگر مزرعه» اثر اوراز تاچنازاروف است.' },
    { icon:'quote', title:'دورسون (۱۹۴۰) و استودیوی ترکمن‌فیلم', text:'«دورسون» نخستین فیلم استودیوی تازهٔ ترکمن‌فیلم است (کارگردان: یوگنی ایوانف‌بارکوف)؛ جز یک بازیگر، همهٔ بازیگران ترکمن و بی‌تجربه بودند. کارخانهٔ فیلم ۱۹۳۹ به استودیوی ترکمن‌فیلم تبدیل شد و ساختمانش در زلزلهٔ ۱۹۴۸ ویران شد؛ استودیو در دههٔ ۱۹۵۰ بازسازی شد.' },
    { icon:'quote', title:'آلتی قارلی‌یف (۱۹۰۹ تا ۱۹۷۳)', text:'بازیگر، کارگردان و نمایشنامه‌نویس؛ در استودیوی درام ترکمن و کالج تئاتر باکو (۱۹۳۱) درس خواند. «ماموریت فوق‌العاده» (۱۹۵۷، با ایوانف‌بارکوف) نخستین فیلم رنگی ترکمن‌فیلم و «آینا» (۱۹۶۰) دومین کارگردانی اوست. اسلاپکه او را بنیان‌گذار بی‌چون‌وچرای سینمای ملی ترکمن می‌نامد؛ ۱۹۵۶ تا ۱۹۶۰ مدیر هنری ترکمن‌فیلم بود.' },
    { icon:'quote', title:'گلین (۱۹۷۲، خوجه‌قلی نارلی‌یف)', text:'فیلم «گلین» («عروس»؛ در منابع «Nevestka») را «فیلمی که سینمای ترکمن را بر نقشه نشاند» و مهم‌ترین فیلم این سینما می‌نامند. نارلی‌یف (زادهٔ ۱۹۳۷ عشق‌آباد) از ۱۹۶۰ فارغ‌التحصیل دانشکدهٔ سینمایی مسکو (VGIK) است و فیلم‌هایش بیشتر به جایگاه زنان در جامعهٔ شوروی و شوروی‌سازی می‌پردازد.' }
  );
  tk.arts.items.push(
    { icon:'quote', title:'Türkmen kinosy: ýüz ýyl (1926–2026)', text:'Türkmen kinosynyň doglan güni 1926-njy ýylyň 7-nji fewraly hasaplanýar we «Oguzhan» Türkmenfilm birleşigi 2026-njy ýylda 100 ýyllygy belleýär. Döwlet portalynyň ýazmagyna görä, ilkinji çuň film Aleksandr Ledaşçewiň «I Will Return» (meniň terjimämde «Men gaýdyp geljek», 1935) atly sessiz, subtitrli filmi bolup, Oraz Tachnazarowyň «Daýhan» atly goşgusyna esaslanýar.' },
    { icon:'quote', title:'«Dursun» (1940) we Türkmenfilm studiýasy', text:'«Dursun» täze Türkmenfilm studiýasynyň ilkinji filmi (režissýor: Ýewgeniý Iwanow-Barkow); bir aktrisadan başga ähli aktýor türkmen we tejribesizdi. Film fabrigi 1939-njy ýylda Türkmenfilm studiýasyna öwrüldi we onuň binasy 1948-nji ýylyň Aşgabat ýertitremesinde weýran boldy; studiýa 1950-nji ýyllarda täzeden guruldy.' },
    { icon:'quote', title:'Alty Garlyýew (1909–1973)', text:'Aktýor, režissýor we dramaturg; Türkmen drama studiýasynda we Baku teatr kollejinde (1931) okapdyr. «Çalt ýörite tabşyryk» (1957, Iwanow-Barkow bilen) Türkmenfilmiň ilkinji reňkli filmi, «Aýna» (1960) onuň indiki režissýorlyk işi. Slapke ony milli türkmen kinosynyň şübhesiz esaslandyryjysy hasaplaýar; 1956–1960-njy ýyllarda Türkmenfilmiň ýaradyjylyk ýolbaşçysy bolupdyr.' },
    { icon:'quote', title:'«Gelin» (1972, Hojaguly Narlyýew)', text:'«Gelin» («Nevestka» ady bilen) filmi «türkmen kinosyny kartada goýan film» we bu kinonyň iň möhüm filmi hasaplanýar. Narlyýew (1937-nji ýylda Aşgabatda doglan) 1960-njy ýylda Moskwanyň kinematografiýa institutyny (VGIK) gutarypdyr; filmleri köplenç sowet jemgyýetinde aýallaryň orny we sowetleşdirmek meselesine bagyşlanýar.' }
  );
  fa.tribes.items.push(
    { icon:'grid', name:'چاروا و چومور', region:'شیوهٔ زندگی', text:'جامعهٔ سنتی ترکمن به دو شیوهٔ اقتصادی بخش می‌شد: چاروا (دامدار) و چومور (کشاورز). گوسفند فقط در سدهٔ ۱۹ و با یک‌جانشین‌شدن بیشتر به دام اصلی گله‌ها بدل شد. در دههٔ ۱۹۲۰ دولت شوروی زمین‌های ایلی را مصادره کرد و در دههٔ ۱۹۳۰ جمعی‌سازی اجباری را آغاز کرد (eHRAF، دانشگاه ییل).' },
    { icon:'grid', name:'نام «ترکمن» و زبان ادبی', region:'نام و زبان', text:'نام «ترکمن» نخستین بار در منابع سدهٔ ۱۱ دیده می‌شود. زبان ادبی امروز ترکمن نسبتاً تازه است و در دههٔ ۱۹۲۰ زیر نظر شوروی بر پایهٔ لهجه‌های یموت و تکه شکل گرفت (eHRAF).' },
    { icon:'grid', name:'فهرست ایل‌های بزرگ در منابع مختلف', region:'یادداشت', text:'منابع دربارهٔ «ایل‌های بزرگ» هم‌نظر نیستند: ویکی‌پدیا تکه، یموت، ارساری، چودور، گکلن و ساریق را می‌آورد، اما CultureGrams (۲۰۱۱) پنج ایل بزرگ را تکه، یموت، ارساری، گکلن و ساریق می‌داند؛ پس جای چودور و گکلن در فهرست‌ها فرق می‌کند. فهرست ایل‌های روی پرچم هم با این فهرست‌ها یکی نیست.' }
  );
  tk.tribes.items.push(
    { icon:'grid', name:'Çarwa we çomur', region:'Durmuş usuly', text:'Däp bolan türkmen jemgyýeti iki hojalyk görnüşine bölünýärdi: çarwa (maldar) we çomur (daýhan). Goýun diňe XIX asyrda, oturymlylyk artansoň, sürileriň esasy haýwanyna öwrüldi. 1920-nji ýyllarda sowet hökümeti tire ýerlerini konfiskasiýa etdi we 1930-njy ýyllarda zor bilen kollektiwleşdirmäni başlady (eHRAF, Ýel uniwersiteti).' },
    { icon:'grid', name:'«Türkmen» ady we edebi dil', region:'At we dil', text:'«Türkmen» ady XI asyryň çeşmelerinde ilkinji gezek duş gelýär. Häzirki edebi türkmen dili salgydyr we 1920-nji ýyllarda sowetleriň gözegçiliginde ýomut we teke şiweleri esasynda emele geldi (eHRAF).' },
    { icon:'grid', name:'Uly tireleriň sanawy dürli çeşmelerde', region:'Bellik', text:'Çeşmeler «uly tireler» barada ylalaşmaýarlar: Wikipediýa teke, ýomut, ärsary, çowdur, gökleň we saryk tireleriniň atlaryny getirýär, ýöne CultureGrams (2011) bäş uly tire hökmünde teke, ýomut, ärsary, gökleň we saryk-y görkezýär; ýagny çowdur bilen gökleňiň orny sanawlarda tapawutlanýar. Baýdakdaky tireleriň sanawy hem bulara gabat gelmeýär.' }
  );
})();
