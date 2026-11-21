/* =========================================================
   TurkmenPedia — zoomable genealogy flowcharts (js/tree.js)
   Hooks: TS_TREE.sectionHtml(lang) -> markup for the genealogy page, TS_TREE.mount(root, lang) -> wires it.
   DATA: transcribed by hand from the traditional «Shajara-ye Turkmanha» chart supplied by the site owner.
   The chart grows from the bottom (Adam) to the top, so descendants are drawn LEFT -> RIGHT here (mirrored in
   Persian). A label is «fa|tk»: tk may be omitted (the Persian-script spelling is then shown in both languages).
   Latin (tk) spellings are APPROXIMATE and need native review. This is a traditional compiled chart, not a
   scholarly source.
   Options per node: c = red annotation of the chart («fa|tk»), d = dashed (tribal, not strictly lineal) link.
   ========================================================= */
(function(){
  'use strict';

  const n  = (l, k, o) => Object.assign({ l, k: k || [] }, o || {});
  const ls = (...a) => a.map(x => n(x));
  const lsd = (...a) => a.map(x => n(x, [], { d: 1 }));
  const link = nodes => { for(let i = nodes.length - 2; i >= 0; i--) nodes[i].k.push(nodes[i + 1]); return nodes[0]; };

  /* ---------------------------------------------------------------- data */
  const GOKLEN = n('دووُرقه|Dodurga', [
    n('بانگاق|Ýangak', ls('بابنال', 'چافیر', 'قره گل|Garagöl', 'کوسه|Kose'), { d: 1 }),
    n('حلقه داغلی|Halka dagly', lsd('بیگدلی|Begdili', 'آی درویش|Aý-Derwüş', 'قوجامز', 'آجان', 'قانجیق', 'قره خوجه|Gara-Hoja'), { d: 1 }),
    n('فرق|(Kerek؟)', [
      n('گرکز|Gerkez', lsd('بونور', 'قبسق')),
      n('گینگ لگ', lsd('سفیان', 'نمر', 'دانه', 'قره جه', 'قره فوزی', 'کنگر', 'چکه', 'گوکجه', 'اونگکلوت')),
    ], { d: 1 }),
    n('سنگریک|Sengrik', lsd('امان خوجه|Aman-Hoja', 'بانگ', 'قره شور|Gara-Şor', 'آق شور|Ak-Şor'), { d: 1 }),
  ], { c: 'طوایف گوگلان از این شخص منشعب می‌باشد|Gökleň tireleri şu adamdan dowam edýär' });

  const BAYANDIR = n('بایندر|Baýyndyr', ls('چوبرک', 'قانالی', 'قره داشلی|Gara-daşly', 'قارانک', 'بازلیک', 'قیصر',
    'آق باجی|Ak-baýjy', 'قره باجی|Gara-baýjy', 'قلابجی', 'بابانگی',
    '__AQ'), {});
  BAYANDIR.k[BAYANDIR.k.length - 1] = n('آق قوینلی|Akgoýunly', [], { c: 'آق قوینلی‌ها از بایندریان بوده|Akgoýunlylar Baýyndyrdan bolupdyr' });

  const SONS = n('اغوز خان|Oguz han', [
    n('داغ خان|Dag han', ls('ایمر|Eýmir', 'بورقوت|Burgut', 'سالور|Salyr', 'اورکوت|Orgut')),
    n('گون خان|Gün han', [
      n('قایی|Gaýy', ls('قره گل', 'قزل', 'گل', 'بل بانکقی', 'قره بالقان'), { c: 'امپراتوری عثمانی از نوادگان این شخص منشعب است|Osmanly imperiýasy şu adamdan dowam edýär' }),
      n('بایات|Bayat'), n('الی قراولی'), n('قره اوبلی'),
    ]),
    n('بیلدیز خان|Ýyldyz han', [n('قره خان'), n('اوشار|Owşar (Afşar)', [], { c: 'افشارها از این شخص منشعب است|Afşarlar şu adamdan dowam edýär' }), n('بگدلی|Begdili'), n('قزاق (قیزیق)|Gyzyk')]),
    n('آی خان|Aý han', [
      n('توکا'), n('بافیر'), n('بازبر', ls('قره داشلی')),
      n('دووُرقه|Dodurga', [], { c: 'طوایف گوگلان از این شخص منشعب می‌باشد (شاخه‌ها: نمودار «گوکلن»)|Gökleň tireleri şu adamdan (şahalary: «Gökleň» diagrammasy)' }),
    ]),
    n('دنگیز خان|Deňiz han', [
      n('قینیق|Kynyk', [ link([ n('قزل ارسلان'), n('الپ ارسلان|Alp Arslan'), n('ملک سلطان|Melikşa'), n('سلطان سنجر ماضی'), n('فیروزشاه'), n('آق ملک'), n('قره ملک'),
        n('قره ماضی', ls('سلطان عزیز', 'ابل ملک', 'ناش آباق', 'باش آباق')) ]) ], { c: 'سلجوق‌ها از قینیق منشعب می‌شود (نام‌های زنجیره همان املای نمودارند و با فهرست تاریخی سلجوقیان یکی نیست)|Seljuklar Kynykdan dowam edýär (zynjyrdaky atlar diagrammadaky ýazylyşda, taryhy Seljuk sanawy bilen birmeňzeş däl)' }),
      n('ایگدیر|Igdir'), n('بوگدیر|Bugdyr'), n('بیوه'),
    ]),
    n('گونگ خان (گوک)|Gönk han (Gök)', [
      n('چاودر|Çawdar', [], { c: 'نام «چاودر» در نمودار؛ معمولاً با چاولدور (چودور/Çowdur) یکی دانسته می‌شود و در نمودار زیرشاخه ندارد|Diagrammadaky «Çawdar» ady; adatça Çawuldur (Çowdur) bilen deňeşdirilýär, diagrammada aşagynda şaha ýok' }),
      n('بچنه|Beçne (Peçenek)', ls('باجی نمک')),
      n('چکنه|Çekne (Çepni)', ls('چندر')),
      BAYANDIR,
    ], { c: 'در نمودار «گونگ خان» نوشته شده؛ همان گوک‌خان، پسر اوغوزخان|Diagrammada «Gönk han» ýazylan; Oguz hanyň ogly Gök han' }),
  ], { c: 'همهٔ ترکمنان از این شخص منشعب است|Ähli türkmenler şu adamdan dowam edýär' });

  const TEKE_LINE = n('تکه|Teke', [
    n('نوخرلی|Nohurly', lsd('شیطان', 'ملک', 'مورچه لی', 'هورگلدی', 'بگ', 'آنه قربان', 'قاضی', 'عبدالرحمان لار'), { c: 'گرهٔ کادر‌قرمز در نمودار|Diagrammada gyzyl çarçuwaly düwün' }),
    n('درگز|Dargaz', lsd('نوخندانلی', 'بهادرلی', 'شیخ لار', 'مادوانلی', 'صابن خانی', 'قره باشلی', 'گوارسلی',
      'میهنه لی', 'انا قولی', 'ایمورلی', 'علی ایلی|Aly-eli', 'قره قوینلی|Gara-goýunly'), { c: 'گرهٔ کادر‌قرمز در نمودار|Diagrammada gyzyl çarçuwaly düwün' }),
    n('قره بورمه', lsd('تلکی'), { d: 1 }),
    n('آق کنکور', lsd('آماشه'), { d: 1 }),
    n('مشدلار', lsd('قره کنکور'), { d: 1 }),
    n('قانجیق|Gancyk', lsd('قول لار'), { d: 1 }),
    n('نوغنامیش|Tokdamyş', [
      n('وکیل|Wekil', ls('قره وکیل', 'آق وکیل')),
      n('بگ|Beg', ls('شاش امان', 'گوکجه', 'ساز', 'موجک', 'تابماس')),
      n('جمبدلار', [], { d: 1 }),
    ], { d: 1 }),
    n('اوناماش|Otamyş', [
      n('باغشی|Bagşy', ls('برشیس', 'سلطان عزیز', 'گوک|Gök', 'سجاگیر', 'وانش')),
      n('سچمیش|Sychmyş', ls('واجه', 'میرش', 'نیاز', 'قره احمد', 'پرنگ', 'اوچروک')),
      n('بوکری', [], { d: 1 }),
    ], { d: 1 }),
  ], { c: 'گرهٔ کادر‌قرمز تکه؛ خط‌چین افقی آن را به ایل‌های دیگر وصل می‌کند|Gyzyl çarçuwaly Teke düwni; gorizontal punktir çyzyk ony beýleki tirelere birikdirýär' });

  const BUKA = n('بوکه|Buka', [
    n('آق خان|Ak han', ls('سالور|Salyr')),
    n('قره جه اسلام|Garaja Yslam', [
      n('قره حاجی|Gara Haji'), n('تاج|Taj'),
      n('ابوکا|Abuka', [ n('بافا پهلوان|Bafa pälwan', [ TEKE_LINE ]) ]),
    ]),
  ], { c: 'در نمودار، سالور و تکه هر دو از نوادگان «بوکه»‌اند (سالور زیر آق‌خان، تکه زیر قره‌جه اسلام)|Diagrammada Salyr bilen Teke ikisi hem «Buka»nyň nesli (Salyr Ak hanyň, Teke Garaja Yslamyň aşagynda)' });

  const TEKE = BUKA;

  const JAFARBAY = n('دولت', [
    n('باغه', ls('کسه', 'چافار', 'قره فوشلی', 'فورماجیق', 'ناغدیلی', 'کدجه')),
    n('بلقای', lsd('میاود', 'اودک', 'خبوه لی', 'قره داغلی', 'ابجمک', 'بژان', 'عبدال', 'پهلوان', 'اروس', 'گرگانلی', 'گری'), { d: 1 }),
    n('جعفربای|Jepbaý', [
      n('نورعالی', ls('کوتک', 'بانگ', 'محمد کور')), n('هوزعالی'), n('شیرعالی'),
      n('بارعلی', ls('کل', 'چوگان', 'صفالی', 'قره قول')),
    ], { c: 'تمام طوایف جعفربای از این است|Jepbaý tireleriniň hemmesi şundan' }),
    n('باشلی فره', [n('دوجی', lsd('اونق', 'چورش', 'کلته', 'ساری تلفک', 'سیدلار', 'کدجو', 'چورسی', 'فبرلار', 'سقر', 'میرزالی'), { d: 1 })]),
  ]);

  const YOMUT = n('یومت|Ýomut', [
    n('اوشاق|Uşak', [], { c: 'از زن یموت که قره‌ساج نام دارد می‌باشد|Ýomut aýaly Garasaçdan' }),
    n('اونلی تمر|Only Tymyr', [
      n('سالاق|Salak', ls('الجکلی', 'اوزبنلی', 'اونقلی', 'زمانلی', 'اوکوز', 'اورسافجی', 'بایرام شالی|Baýramşaly')),
    ], { c: 'تمام طوایف بایرام‌شالی از نسل اونلی تمر است|Baýramşaly tireleriniň hemmesi Only Tymyryň nesli' }),
    n('قونلی تمر|Gonly Tymyr', [
      n('محمد|Muhammet', [
        n('چونی|Çuny', [
          n('الیاس قلی|Alyýaguly', [n('فان بوقمز', lsd('سارلی', 'قزل جه', 'سارجه کور', 'اسکندرلی'))]),
          n('حیدر قلی|Haýdarguly', [
            n('ارگدیر', lsd('قره سارلی', 'قابی', 'اودکلی', 'هورن'), { d: 1 }),
            n('کوچک', lsd('باغمرلی', 'اوسناجیق', 'خرطوم', 'باسی دابان'), { d: 1 }),
          ]),
          n('محمد قلی|Mämmetguly', [
            n('احمد|Ahmet', [
              n('بدراق|Badrak', lsd('قولاق', 'جاغنای', 'باش آغیز', 'چورا'), { d: 1 }),
              n('داز|Daz', lsd('نوغدری', 'قره کری', 'قزل لی', 'کوبزالی'), { d: 1 }),
            ]),
            n('حاجیم|Hajym', [
              n('میر قلی|Mirguly', [], { c: 'طایفهٔ قنگرمه از این است|Gongurma tiresi şundan' }),
              n('شاه قلی|Şaguly', [
                n('مدد|Medet', lsd('گادر', 'قره ساتان', 'ساریق|Saryk', 'نوبس'), { c: 'طوایف بلمه از این است|Belme tireleri şundan' }),
                n('خدای بردی|Hudaýberdi', [
                  n('شاه محمد|Şa Muhammet', [
                    n('سافاوی|Safawy', [
                      n('پتکه لار؟'), n('قره بی لی'), n('بالقابلی'), n('چوب باشلار'),
                      n('اکچی بارم اوسنا', lsd('مرگان لار', 'اوسته لار', 'بارلی لار')),
                      n('چوپان اوسته', ls('شکرلی')),
                    ]),
                    n('حبیب|Habyp', [ n('سلطان لی', ls('میرزا جیک')), n('هویم بابالی', ls('چافان')) ], { c: 'اوزبن آق|Uzben Ak' }),
                    n('گوک|Gök', [ n('سورت', ls('مشرق')), n('بگره', ls('اوکوزلار')), n('کوسه', ls('انگاکی سارغیل')), n('کورد', ls('نار آغیز')), n('آلام') ], { d: 1 }),
                  ], { c: 'قبسخه آق|Gabsyhe Ak' }),
                  n('جان محمد', [
                    n('گویز محمد', ls('بای لار', 'بژه', 'فرجه')),
                    n('شیر محمد', ls('کورلار', 'قره قول لار', 'کچه لار', 'نفنجی لار')),
                  ]),
                ], { c: 'طوایف آق از این است|Ak tireleri şundan' }),
                n('محمد قلی قره شور', [
                  n('محمد عالی', lsd('کوشافلار', 'قولک لار', 'آل جلیل', 'کم کور', 'اوستانگف لار', 'غرادنگ لار', 'آل هوز', 'گرکز'), { c: 'طوایف محمد آلق از این است|Muhammet Alak tireleri şundan' }),
                  n('اتابای|Atabaý', [
                    n('هوزقزل'), n('نمک'), n('سارجه لیق'),
                    n('محمد قلی|Mämmetguly', [], { c: 'طایفهٔ کسه از این است|Kese tiresi şundan' }),
                    n('اغساق صحنه', ls('بامبی', 'سوفی', 'صحنه')),
                    n('خان محمد|Han Muhammet', [
                      n('اودمش', lsd('چوماطار', 'پارسی', 'ماخیر', 'نیاز منگلی', 'خانملی', 'اغاقلی', 'قره لار'), { c: 'طایفهٔ کسرفه از این است|Kesrefe tiresi şundan' }),
                      n('مراد|Myrat', [
                        n('آتاش|Ataş', [], { c: 'طوایف لابنا از این است|Labna tireleri şundan' }),
                        n('مامش|Mamyş', lsd('عالبنگی', 'ساروانلی', 'قره جه ارنبقلی'), { c: 'طوایف دوگونچی از این است|Dogunçy tireleri şundan' }),
                        n('ولی بای|Waly baý', [
                          n('عاشور گوزی گوک|Aşur Gözi Gök', [], { c: 'طوایف عاشور گوک از این است|Aşur Gök tireleri şundan' }),
                          n('طانه قربان'),
                        ]),
                      ]),
                    ]),
                  ], { c: 'تمام طوایف اتابای از این است|Atabaý tireleriniň hemmesi şundan' }),
                ]),
              ]),
            ]),
          ]),
        ], { c: 'تمام طوایف چونی از این است|Çuny tireleriniň hemmesi şundan' }),
      ]),
      JAFARBAY,
    ]),
  ], { c: 'طوایف یموت‌ها از این شخص منشعب است|Ýomut tireleri şu adamdan dowam edýär' });

  const ERSARI = n('قل حاجی|Gul Haji', [
    n('قل|Gul'),
    n('ساری (ارساری بابا)|Sary (Ärsary baba)', [
      n('خوجم بازلی', [], { d: 1 }), n('فرق قوینلی', [], { d: 1 }), n('آق قوم لار', [], { d: 1 }), n('اولام', [], { d: 1 }),
      n('کونش', [
        n('غابه صفال', ls('رحمشلی', 'کرغاب صفال')), ...ls('چفر', 'چگر', 'عمر', 'سلیمان', 'اریق باتر'),
        ...lsd('چرشنگی', 'لمثه', 'طاغن', 'غازان', 'دالی', 'فربش', 'اسلام', 'چکش', 'بابنی'),
      ]),
      n('اولی دفه'), n('قره'), n('بوکاوی'),
    ], { c: 'طوایف ارساری از این است|Ärsary tireleri şundan' }),
  ]);

  const BERDI = n('بردی|Berdi', [
    ERSARI,
    n('قولمی', [
      n('قولقاق'),
      n('یومت|Ýomut', [], { c: 'طوایف یموت‌ها از این شخص منشعب است (ادامه در نمودار «یموت…»)|Ýomut tireleri şu adamdan (dowamy «Ýomut…» diagrammasynda)' }),
    ]),
  ]);

  const UGUR = n('اوکورجیک اولوغ بیگ|Ugurjyk Ulug beg', [
    n('باجی', [], { c: 'ترکمان‌های قره‌گول از این است|Garagöl türkmenleri şundan' }),
    n('دنگلی'),
    n('اوسار', [ n('یمره لی', [], { c: 'طایفهٔ یمره‌لی از این است|Ymreli tiresi şundan' }) ]),
    n('قیار', [], { c: 'ترکمان‌های اسکی حلب از این است|Eski Halap türkmenleri şundan' }),
    n('بوکه|Buka', [], { c: 'نوادگان بوکه (سالور و تکه) در نمودار «تکه و سالور» آمده|Bukanyň nesilleri (Salyr we Teke) «Teke we Salyr» diagrammasynda' }),
    BERDI,
  ]);

  const UPPER = link([
    n('اورت گوزلی اورس'), n('حیدر غازی'), n('سلیمان قاضی'), n('آنبال غازی'), n('طلال غازی'), n('بورنوجی غازی'), n('بیسام قاضی'), n('فراج بیگ'),
    n('فره قاضی بیگ|Gara Gazy beg', [ ...ls('فوماجیق', 'قارا امان', 'قوارجیق'), UGUR ]),
  ]);

  const GHAZAN = n('سالور غازان بابا|Salyr Gazan baba', [
    n('بالاواج', lsd('بگ سافار', 'فورت حبیب', 'اردو خوجه', 'کریم افا', 'نافیر دفا', 'کوسه لار')),
    n('کچی افا', lsd('باجی', 'هرزه کی', 'بوق فارا', 'بیکه باشارجا', 'صاباد', 'بافوب', 'ارسلان')),
    n('قارا امان', lsd('خلیل', 'چولوم', 'اوکورجوکلی', 'آلام', 'اجی تام', 'بگ گرگ')),
    UPPER,
  ]);

  SONS.k.forEach(son => son.k.forEach(t => { t.g = 1; }));   // the 24 grey «tribe» nodes of the chart

  const SPINE = n('اغوز خان|Oguz han', [
    n('داغ خان|Dag han', [
      n('ایمر|Eýmir'), n('بورقوت|Burgut'), n('اورکوت|Orgut'),
      n('سالور|Salyr', [
        link([ n('تمور|Tymyr'), n('ارمه بارغه'), n('ارغبل'), n('ابرماق'), n('بکاشجی'), n('نوفه خان'), n('کموش خان'), n('تمور توره'),
               n('قره خان|Gara han'), n('طالب|Talyp'), GHAZAN ]),
      ]),
    ]),
  ], { c: 'ستون اصلی نیاکان از اوغوزخان تا یموت (پایین‌ترین گره = قدیمی‌ترین)|Oguz handan Ýomuda çenli esasy ata-baba sütüni' });

  const TREES = [
    { id: 'sons',   t: { fa: 'اوغوزخان و شش پسر', tk: 'Oguz han we alty ogly' }, root: SONS,
      note: { fa: 'شش پسر: گون، آی، بیلدیز (بوزوق) و گوک، داغ، دنگیز (اوچوق)؛ هر پسر چهار قبیله دارد و این ۲۴ قبیله (گره‌های رنگی، خاکستری در نمودار اصلی) با فهرست نمودار آمده‌اند که با فهرست رایج ۲۴ قبیله تفاوت‌هایی دارد. در نمودار گوک‌خان «گونگ خان» نوشته شده.', tk: 'Alty ogly: Gün, Aý, Ýyldyz (Bozok) we Gök, Dag, Deňiz (Üçok); her oglanyň dört tiresi bar, bu 24 tire (reňkli düwünler) diagramma sanawy bilen berilýär, ol meşhur 24 tire sanawyndan käbir tapawutlara eýe. Diagrammada Gök han «Gönk han» ýazylan.' } },
    { id: 'goklen', t: { fa: 'گوکلن (شاخهٔ دودورقا)', tk: 'Gökleň (Dodurga şahasy)' }, root: GOKLEN,
      note: { fa: 'زیر آی‌خان. این ساختار با ایرانیکا (کرک، ینگک، سنگریک، گرکز) هم‌خوان است؛ بایندر در نمودار زیر گوک‌خان است.', tk: 'Aý hanyň aşagynda. Gurluş Iranica bilen gabat gelýär; diagrammada Baýyndyr Gök hanyň aşagynda.' } },
    { id: 'spine',  t: { fa: 'ستون نیاکان تا یموت', tk: 'Ata-baba sütüni (Ýomuda çenli)' }, root: SPINE,
      note: { fa: 'از اوغوزخان ← داغ‌خان ← سالور ← … ← قره‌خان ← سالور غازان بابا ← … ← فره قاضی بیگ ← اوکورجیک اولوغ بیگ ← بردی ← قولمی ← یومت؛ شاخهٔ ارساری (قل حاجی ← ساری/ارساری بابا) از بردی جدا می‌شود.', tk: 'Oguz han → Dag han → Salyr → … → Gara han → Salyr Gazan baba → … → Gara Gazy beg → Ugurjyk Ulug beg → Berdi → Golmy → Ýomut; Ärsary şahasy (Gul Haji → Sary/Ärsary baba) Berdiden aýrylýar.' } },
    { id: 'teke',   t: { fa: 'تکه و سالور (نوادگان بوکه)', tk: 'Teke we Salyr (Bukanyň nesilleri)' }, root: TEKE,
      note: { fa: 'سالور و تکه هر دو از نوادگان «بوکه»‌اند. اوتاماش (باغشی، سچمیش) و نوغنامیش (وکیل، بگ) با تقسیم چهارگانهٔ استوارت (اوتامیش، توختامیش) هم‌خوان‌اند.', tk: 'Otamyş (Bagşy, Sychmyş) we Tokdamyş (Wekil, Beg) Stuartyň dört bölünişigine gabat gelýär.' } },
    { id: 'yomut',  t: { fa: 'یموت، اتابای و جعفربای', tk: 'Ýomut, Atabaý we Jepbaý' }, root: YOMUT,
      note: { fa: 'ستون نمودار از یومت به چونی و اتابای (و از «قونلی تمر» به جعفربای) می‌رود؛ دوگونچی، لابنا، کسه، کسرفه و… از شاخهٔ اتابای‌اند.', tk: 'Diagramma sütüni Ýomutdan Çunä we Atabaýa (we «Gonly Tymyr»dan Jepbaýa) gidýär; Dogunçy, Labna, Kese, Kesrefe… Atabaý şahasyndan.' } },
  ];

  const UI = {
    fa: { title: 'نمودار شجره‌نامهٔ ایل‌ها (قابل زوم)',
          intro: 'فلوچارت ایل‌ها و شاخه‌هایشان از روی نمودار سنتی «شجره‌نامهٔ ترکمن‌ها». با دکمه‌های + و − یا Ctrl+چرخ ماوس زوم کنید؛ بکشید تا جابه‌جا شود. روی هر گره بزنید تا یادداشت قرمز نمودار را ببینید. کادر قرمز = یادداشت نمودار؛ خط‌چین = پیوند ایلی (نه لزوماً پدر-پسری).',
          warn: 'نمودار سنتی و گردآوری‌شده است، نه منبع علمی؛ نام‌ها با املای نمودار آمده و املای لاتین ترکمنی تقریبی است.',
          zi: 'بزرگ‌نمایی', zo: 'کوچک‌نمایی', fit: 'تنظیم روی صفحه', hint: 'کیبورد: + و − و ۰ و کلیدهای جهت‌نما', pick: 'روی یک گره بزنید…', ann: 'یادداشت نمودار', nodes: 'گره' },
    tk: { title: 'Tirelerň şejere diagrammasy (ulaldylýar)',
          intro: 'Däp bolan «Türkmenleriň şejeresi» diagrammasyndan tireleriň we şahalarynyň akym diagrammasy. + we − düwmeleri ýa-da Ctrl+syçan tigiri bilen ulaldyň; süýräp ýerini üýtgediň. Diagrammadaky gyzyl bellige seretmek üçin düwüne basyň. Gyzyl çarçuwa = diagramma bellegi; punktir = tire baglanyşygy (hökman kakadan ogla däl).',
          warn: 'Bu däp bolan, ýygnalan diagramma, ylmy çeşme däl; atlar diagrammadaky ýazylyşda berilýär, lätin ýazylyşy takmynan.',
          zi: 'Ulalt', zo: 'Kiçelt', fit: 'Ekrana sygdyr', hint: 'Klawiatura: + we − we 0 we ok düwmeleri', pick: 'Düwüne basyň…', ann: 'Diagramma bellegi', nodes: 'düwün' },
  };

  /* ---------------------------------------------------------------- helpers */
  const pick = (s, lang) => { const p = String(s).split('|'); return lang === 'tk' ? (p[1] || p[0]) : p[0]; };
  const esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  const NODE_H = 24, ROW = 32, GAP_X = 44, PAD = 24;

  function layout(root, lang){
    const nodes = []; let leaf = 0;
    (function walk(nd, depth, parent){
      nd.depth = depth; nd.parent = parent; nd.label = pick(nd.l, lang);
      nd.w = Math.max(64, Math.min(196, Math.round(nd.label.length * (lang === 'tk' ? 6.6 : 7.4) + 20)));
      if(!nd.k.length) nd.y = leaf++;
      else { nd.k.forEach(c => walk(c, depth + 1, nd)); nd.y = (nd.k[0].y + nd.k[nd.k.length - 1].y) / 2; }
      nodes.push(nd);
    })(root, 0, null);
    const maxDepth = nodes.reduce((m, x) => Math.max(m, x.depth), 0), colW = Array(maxDepth + 1).fill(0);
    nodes.forEach(x => { colW[x.depth] = Math.max(colW[x.depth], x.w); });
    const colX = []; let acc = PAD; colW.forEach((w, i) => { colX[i] = acc; acc += w + GAP_X; });
    const W = acc - GAP_X + PAD, H = leaf * ROW + PAD * 2;
    nodes.forEach(x => { x.px = colX[x.depth]; x.py = PAD + x.y * ROW + (ROW - NODE_H) / 2; });
    return { nodes, W, H, count: nodes.length };
  }

  function svgFor(tree, lang){
    const L = layout(tree.root, lang), rtl = lang === 'fa';
    const X = x => rtl ? L.W - x : x;                 // mirror for Persian
    const links = [], boxes = [];
    L.nodes.forEach((nd, i) => {
      nd.id = i;
      const left = rtl ? X(nd.px + nd.w) : nd.px;
      if(nd.parent){
        const p = nd.parent, pr = rtl ? X(p.px) : p.px + p.w, cl = rtl ? X(nd.px) : nd.px;
        const x1 = pr, y1 = p.py + NODE_H / 2, x2 = cl, y2 = nd.py + NODE_H / 2, mx = x1 + (x2 - x1) / 2;
        links.push(`<path class="tree-link${nd.d ? ' dashed' : ''}" d="M${x1} ${y1}H${mx}V${y2}H${x2}"/>`);
      }
      boxes.push(`<g class="tree-node${nd.g ? ' tribe' : ''}${nd.c ? ' has-note' : ''}" data-i="${i}" tabindex="0" role="button" aria-label="${esc(nd.label)}"><rect x="${left}" y="${nd.py}" width="${nd.w}" height="${NODE_H}" rx="5"/><text x="${left + nd.w / 2}" y="${nd.py + NODE_H / 2}" dir="${/[\u0600-\u06FF]/.test(nd.label) ? 'rtl' : 'ltr'}">${esc(nd.label)}</text></g>`);
    });
    return { L, html: `<g class="tree-g">${links.join('')}${boxes.join('')}</g>` };
  }

  const nz = x => String(x || '').replace(/[\u200c\u200f\u064B-\u0652]/g, '').replace(/ي/g, 'ی').replace(/ك/g, 'ک').toLowerCase().trim();
  const nodeKey = (nd, lang) => nz(pick(nd.l, lang) + ' ' + (nd.c ? pick(nd.c, lang) : ''));
  function allNodes(tree){ const out = []; (function w(nd){ out.push(nd); nd.k.forEach(w); })(tree.root); return out; }
  /* entries for the site-wide search: one per distinct label per tree */
  function searchEntries(lang){
    const out = [];
    TREES.forEach(tr => { const seen = new Set(); allNodes(tr).forEach(nd => {
      const label = pick(nd.l, lang), note = nd.c ? pick(nd.c, lang) : '', title = note && note.length < 60 ? label + ' — ' + note : label;
      if(seen.has(title)) return; seen.add(title);
      out.push({ title, where: tr.t[lang], tree: tr.id });
    }); });
    return out;
  }

  /* ---------------------------------------------------------------- public: markup */
  function sectionHtml(lang){
    const u = UI[lang];
    const tabs = TREES.map((t, i) => `<button type="button" class="map-chip tree-tab${i === 0 ? ' on' : ''}" data-tree="${t.id}">${esc(t.t[lang])}</button>`).join('');
    return `<section class="gx tree-section reveal" id="treeSection">
      <h3 class="gx-title">${u.title}</h3>
      <p class="x-note">${u.intro}</p>
      <div class="tree-tabs">${tabs}</div>
      <div class="tree-canvas" id="treeCanvas" data-lang="${lang}">
        <div class="tree-ctrl">
          <button type="button" data-z="in" aria-label="${u.zi}" title="${u.zi}">+</button>
          <button type="button" data-z="out" aria-label="${u.zo}" title="${u.zo}">−</button>
          <button type="button" data-z="fit" aria-label="${u.fit}" title="${u.fit}">⤢</button>
        </div>
        <svg class="tree-svg" tabindex="0" role="application" aria-label="${u.title}" xmlns="http://www.w3.org/2000/svg"></svg>
      </div>
      <p class="x-note tree-hint">${u.hint}</p>
      <div class="tree-info" id="treeInfo" aria-live="polite">${u.pick}</div>
      <p class="gx-note">${u.warn}</p>
    </section>`;
  }

  /* ---------------------------------------------------------------- public: wiring */
  function mount(root, lang, query){
    const cv = root.querySelector('#treeCanvas'); if(!cv) return null;
    const svg = cv.querySelector('svg'), info = root.querySelector('#treeInfo'), u = UI[lang];
    const st = { k: 1, x: 0, y: 0, tree: TREES[0], built: null };
    const apply = () => { const g = svg.querySelector('.tree-g'); if(g) g.setAttribute('transform', `translate(${st.x} ${st.y}) scale(${st.k})`); svg.dataset.k = st.k.toFixed(3); };
    const box = () => svg.getBoundingClientRect();
    const fit = initial => {
      const r = box(), W = st.built.L.W, H = st.built.L.H, w = r.width || 640, h = r.height || 460, rtl = lang === 'fa';
      const kFull = Math.min(1, w / W, h / H);
      if(initial === true && kFull < 0.5){                       // wide/tall tree: start readable, anchored on the root
        const root = st.built.L.nodes.find(x => !x.parent), k = 0.62, cy = root.py + NODE_H / 2;
        st.k = k; st.x = rtl ? w - W * k - 6 : 6; st.y = Math.min(8, h / 2 - cy * k); apply(); return;
      }
      st.k = Math.max(0.15, Math.min(1, w / W)); if(H * st.k > h && W * st.k < w * 1.01) st.k = Math.max(0.15, Math.min(st.k, h / H));
      st.x = (w - W * st.k) / 2; st.y = H * st.k < h ? (h - H * st.k) / 2 : 8; apply();
    };
    const zoomAt = (cx, cy, f) => {
      const nk = Math.max(0.2, Math.min(3, st.k * f)), r = nk / st.k;
      st.x = cx - (cx - st.x) * r; st.y = cy - (cy - st.y) * r; st.k = nk; apply();
    };
    const centre = () => { const r = box(); return [r.width / 2, r.height / 2]; };
    const build = tree => {
      st.tree = tree; st.built = svgFor(tree, lang); svg.innerHTML = st.built.html;
      const s = root.querySelector('.tree-note'); if(s) s.remove();
      info.textContent = tree.note[lang] + ' (' + st.built.L.count + ' ' + u.nodes + ')'; fit(true);
    };
    build(TREES[0]);
    root.querySelectorAll('.tree-tab').forEach(b => b.addEventListener('click', () => {
      root.querySelectorAll('.tree-tab').forEach(x => x.classList.toggle('on', x === b));
      build(TREES.find(t => t.id === b.dataset.tree));
    }));
    cv.querySelectorAll('.tree-ctrl button').forEach(b => b.addEventListener('click', () => {
      const z = b.dataset.z; if(z === 'fit') fit(false); else zoomAt(...centre(), z === 'in' ? 1.4 : 1 / 1.4);
    }));
    svg.addEventListener('wheel', e => { if(!(e.ctrlKey || e.metaKey)) return; e.preventDefault(); const r = box(); zoomAt(e.clientX - r.left, e.clientY - r.top, e.deltaY < 0 ? 1.18 : 0.85); }, { passive: false });
    /* pointer pan + pinch */
    const ptrs = new Map(); let last = null, moved = 0;
    svg.addEventListener('pointerdown', e => { ptrs.set(e.pointerId, [e.clientX, e.clientY]); moved = 0; last = [e.clientX, e.clientY]; try{ svg.setPointerCapture(e.pointerId); }catch(_){} });
    svg.addEventListener('pointermove', e => {
      if(!ptrs.has(e.pointerId)) return;
      const prev = ptrs.get(e.pointerId); ptrs.set(e.pointerId, [e.clientX, e.clientY]);
      if(ptrs.size === 2){
        const [a, b] = [...ptrs.values()], pa = [...ptrs.values()];
        const d1 = Math.hypot(a[0] - b[0], a[1] - b[1]), d0 = Math.hypot(a[0] - b[0] + (prev[0] - e.clientX), a[1] - b[1] + (prev[1] - e.clientY)) || d1;
        const r = box(); zoomAt((a[0] + b[0]) / 2 - r.left, (a[1] + b[1]) / 2 - r.top, d1 / d0); moved = 99; return;
      }
      st.x += e.clientX - prev[0]; st.y += e.clientY - prev[1]; moved += Math.abs(e.clientX - prev[0]) + Math.abs(e.clientY - prev[1]); apply();
    });
    const end = e => { ptrs.delete(e.pointerId); };
    svg.addEventListener('pointerup', end); svg.addEventListener('pointercancel', end);
    /* node details */
    const show = g => {
      svg.querySelectorAll('.tree-node.sel').forEach(x => x.classList.remove('sel')); g.classList.add('sel');
      const nd = st.built.L.nodes[+g.dataset.i], path = []; for(let p = nd; p; p = p.parent) path.unshift(p.label);
      info.innerHTML = `<b>${esc(nd.label)}</b>` + (nd.c ? ` — <span class="tree-ann">${u.ann}: «${esc(pick(nd.c, lang))}»</span>` : '') + `<br><small>${esc(path.join(rtlArrow(lang)))}</small>`;
    };
    svg.addEventListener('click', e => { const g = e.target.closest('.tree-node'); if(g && moved < 6) show(g); });
    svg.addEventListener('keydown', e => {
      if(e.ctrlKey || e.metaKey || e.altKey) return;
      const k = e.key, [cx, cy] = centre();
      if(k === 'Enter' || k === ' '){ const g = e.target.closest && e.target.closest('.tree-node'); if(g){ e.preventDefault(); show(g); } return; }
      if(k === '+' || k === '='){ e.preventDefault(); zoomAt(cx, cy, 1.4); }
      else if(k === '-' || k === '_'){ e.preventDefault(); zoomAt(cx, cy, 1 / 1.4); }
      else if(k === '0'){ e.preventDefault(); fit(false); }
      else if(k === 'ArrowLeft' || k === 'ArrowRight' || k === 'ArrowUp' || k === 'ArrowDown'){
        e.preventDefault(); const r = box();
        st.x += (k === 'ArrowLeft' ? 1 : k === 'ArrowRight' ? -1 : 0) * r.width * 0.15; st.y += (k === 'ArrowUp' ? 1 : k === 'ArrowDown' ? -1 : 0) * r.height * 0.15; apply();
      }
    });
    window.addEventListener('resize', () => { if(document.body.contains(svg)) fit(true); }, { passive: true });
    /* arriving from the site search: open the tree that contains the query and centre the node */
    const q = nz(query);
    if(q){
      for(const tr of TREES){
        const hit = allNodes(tr).find(nd => nodeKey(nd, lang).includes(q));
        if(!hit) continue;
        root.querySelectorAll('.tree-tab').forEach(x => x.classList.toggle('on', x.dataset.tree === tr.id));
        build(tr);
        const nd = st.built.L.nodes.find(x => nodeKey(x, lang).includes(q));
        if(nd){
          const g = svg.querySelector(`.tree-node[data-i="${nd.id}"]`), r = box(), W = st.built.L.W;
          st.k = 1; const left = lang === 'fa' ? W - (nd.px + nd.w) : nd.px;
          st.x = (r.width || 640) / 2 - (left + nd.w / 2); st.y = (r.height || 460) / 2 - (nd.py + NODE_H / 2); apply();
          if(g) show(g);
          cv.scrollIntoView && cv.scrollIntoView({ block: 'center' });
        }
        break;
      }
    }
    return st;
  }
  const rtlArrow = lang => lang === 'fa' ? ' ← ' : ' → ';

  window.TS_TREE = { sectionHtml, mount, searchEntries, TREES, layout, UI, _pick: pick };
})();
