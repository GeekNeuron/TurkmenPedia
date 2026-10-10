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
    { icon:'sun', title:'تقویم ملی و جشن‌های سالانه', text:'علاوه بر نوروز (۲۱ مارس)، ترکمنستان جشن‌های ملی نمادینی دارد: «روز اسب» (آخرین یکشنبهٔ آوریل)، «روز قالی» (آخرین یکشنبهٔ مه)، «روز احیا، وحدت و شعر مختومقلی» (۱۸ و ۱۹ مه)، «روز خربزه» (دومین یکشنبهٔ اوت)، «روز باغشی» (دومین یکشنبهٔ سپتامبر)، روز استقلال (۲۷ سپتامبر) و روز بی‌طرفی (۱۲ دسامبر). تاریخ برخی جشن‌ها ممکن است تغییر کند؛ برای زمان دقیق به تقویم رسمی مراجعه کنید.' },
    { icon:'music', title:'شاسنم و غریب، نخستین اپرای ترکمن', text:'اپرای «شاسنم و غریب» که داستان عاشقانهٔ کهن را به صحنهٔ اپرا آورد، نخستین اپرای ترکمنی است. دانتر اووزوف و آدریان شاپوشنیکوف آن را ساختند و نخستین اجرایش ۲۵ اکتبر ۱۹۴۴ بود؛ اثری که ملودی‌های بخشی را به زبان موسیقی کلاسیک اروپایی آورد.' },
    { icon:'music', title:'دستان و تیرمه', text:'دو قالب پرکاربرد در آواز بخشی‌ها: «دستان»، روایت‌های بلند حماسی و عاشقانه (مانند گوروغلی و شاسنم و غریب) که با دوتار خوانده می‌شود، و «تیرمه»، ترانه‌ای که بر پایهٔ شعر شاعرانی مانند مختومقلی، کمینه یا سیدی ساخته می‌شود.' },
    { icon:'music', title:'تویدوک و سازهای بادی', text:'کنار دوتار و گیجک، ترکمن‌ها سازهای بادی چوبی و نی‌مانند هم دارند که «تویدوک» نامیده می‌شوند؛ صدای نرم و دردمندانهٔ آن‌ها در موسیقی چوپانی و محافل خصوصی شنیده می‌شود.' },
    { icon:'yurt', title:'نمدمالی و فرش‌های نمدی', text:'نمد (کِپه) پوشش اصلی یورت و فرش خانه‌های کوچ‌نشین بود. زنان پشم را می‌شستند، می‌زدند و با آب گرم می‌مالیدند تا نمد شود؛ نقش‌های نمد، مانند قالی، هویت خانوادگی و ایلی را حمل می‌کند.' },
    { icon:'quote', title:'سیصدمین سالگرد مختومقلی (۲۰۲۴)', text:'سال ۲۰۲۴ مصادف بود با سیصدمین سالگرد تولد مختومقلی فراغی (به‌روایت رایج متولد حدود ۱۷۲۴)؛ یونسکو این سالگرد را در فهرست بزرگداشت‌های جهانی خود گنجاند و برنامه‌های فرهنگی در ترکمنستان، ایران، افغانستان و کشورهای دیگر برگزار شد.' }
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
    { icon:'sun', title:'Milli senenama we ýyllyk baýramlar', text:'Nowruzdan (21-nji mart) başga, Türkmenistanyň nyşanly milli baýramlary bar: «At güni» (aprel aýynyň soňky ýekşenbesi), «Haly güni» (maý aýynyň soňky ýekşenbesi), «Galkynyş, Agzybirlik we Magtymguly Pyragynyň poeziýa güni» (18–19-njy maý), «Gawun güni» (awgustyň ikinji ýekşenbesi), «Bagşy güni» (sentýabryň ikinji ýekşenbesi), Garaşsyzlyk güni (27-nji sentýabr) we Bitaraplyk güni (12-nji dekabr). Käbir baýramlaryň sene täzelenmegi mümkin; takyk wagt üçin resmi senenama serediň.' },
    { icon:'music', title:'«Şasenem we Garyp», ilkinji türkmen operasy', text:'Gadymy söýgi hekaýasyny opera sahnasyna çykaran «Şasenem we Garyp» ilkinji türkmen operasydyr. Ony Danatar Öwezow bilen Adrian Şaposhnikow döretdi we ilkinji gezek 1944-nji ýylyň 25-nji oktýabrynda sahnalaşdyryldy; bagşy sazlaryny Ýewropanyň klassyki sazy dilinde eşitdirdi.' },
    { icon:'music', title:'Dessan we tirme', text:'Bagşylaryň aýdymynda iki köp ulanylýan görnüş: «dessan», dutar bilen aýdylýan uzyn gahrymançylyk we söýgi hekaýalary (Görogly we Şasenem-Garyp ýaly), we «tirme», Magtymguly, Kemine ýa-da Seýdi ýaly şahyrlaryň goşgularyna esaslanan aýdym.' },
    { icon:'music', title:'Tüýdük we üflenýän sazlar', text:'Dutar we gyjakdan başga türkmenlerde «tüýdük» diýlip atlandyrylýan agaç we gamyş görnüşli üflenýän sazlar hem bar; olaryň ýumşak, hasratly sesi çopan sazlarynda we ýapyk ýygnaklarda eşidilýär.' },
    { icon:'yurt', title:'Keçe basmak we keçe haly', text:'Keçe öýüň esasy örtügi we göçme öýleriň haly-düşegi bolupdyr. Aýallar ýüňi ýuwup, gatyryp, gyzgyn suw bilen sürtüp keçä öwrüpdirler; keçäniň nagyşlary hem haly ýaly maşgala we tire kimligini göterýär.' },
    { icon:'quote', title:'Magtymgulynyň 300 ýyllygy (2024)', text:'2024-nji ýyl Magtymguly Pyragynyň doglanynyň 300 ýyllygyna gabat geldi (giňden ýaýran rowaýat boýunça takmynan 1724-nji ýyl); ÝUNESKO bu ýubileýi öz dünýä ýubileýler sanawyna girizdi we Türkmenistanda, Eýranda, Owganystanda we beýleki ýurtlarda medeni çäreler geçirildi.' }
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
})();
