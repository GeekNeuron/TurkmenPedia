/* =========================================================
   TurkmenPedia — Oghuz genealogy data (js/genealogy.js)

   Source tradition: Abu'l-Ghazi Bahadur Khan, "Shajara-i
   Tarakima" (17th c.), compared with Rashid al-Din and
   Mahmud al-Kashgari. The tree is epic/legendary, not a
   documentary pedigree — the app says so on the page itself.

   Legend (checked against the Abu'l-Ghazi text as quoted in
   the Toyo Bunko digital edition and the Oghuz Khagan entry):
   - The three ELDER sons (Gun, Ay, Yildiz) received the pieces
     of a broken GOLDEN BOW  -> branch "Bozok" (right wing).
   - The three YOUNGER sons (Gok, Dag, Deniz) received the
     three SILVER ARROWS     -> branch "Uchok" (left wing).
   ========================================================= */
const GENEALOGY = (function(){

  // id | fa | tk | element fa | element tk | icon
  const SONS = [
    ['gun',   'گون خان',    'Gün han',    'خورشید', 'Gün (Güneş)',   'sun'],
    ['ay',    'آی خان',     'Aý han',     'ماه',    'Aý',            'moon'],
    ['yildiz','ییلدیز خان', 'Ýyldyz han', 'ستاره',  'Ýyldyz',        'star'],
    ['gok',   'گؤک خان',    'Gök han',    'آسمان',  'Gök',           'cloud'],
    ['dag',   'داغ خان',    'Dag han',    'کوه',    'Dag',           'mountain'],
    ['deniz', 'دنیز خان',   'Deňiz han',  'دریا',   'Deňiz',         'waves']
  ];

  // son id | tribe id | fa | tk | note fa | note tk | link route | link query fa | link query tk
  const TRIBES = [
    ['gun','kayi','قایی','Gaýy',
      'در سنت عثمانی، دودمان عثمانی را از این ایل می‌دانند؛ پژوهشگران امروز این پیوند را قطعی نمی‌دانند.',
      'Osman däbinde Osmanly neslini şu tire bilen baglaýarlar; häzirki alymlar bu baglanyşygy takyk hasaplamaýarlar.', '', '', ''],
    ['gun','bayat','بایات','Baýat',
      'در سنت، دده قورقود از ایل بایات شمرده می‌شود و شاعر آذربایجانی فضولی هم به آن منسوب است.',
      'Däp boýunça Dede Gorkut baýat tiresinden hasaplanýar, azerbaýjan şahyry Fuzuli hem şoňa degişli edilýär.', 'books','دده قورقود','Dede Gorkut'],
    ['gun','alkaevli','آلکا-اوی','Alka-öýli',
      'نام را معمولاً «اهل خانهٔ ابلق» معنا می‌کنند (ریشه‌شناسی تقریبی)؛ دربارهٔ تاریخچهٔ آن اطلاعات کمی هست.',
      'Adyny köplenç «alaja öýli» diýip düşündirýärler (takmynan etimologiýa); taryhy barada maglumat az.', '', '', ''],
    ['gun','karaevli','قره-اوی','Gara-öýli',
      'نام را «اهل چادر سیاه» می‌خوانند (ریشه‌شناسی تقریبی)؛ منابع دربارهٔ آن کم‌حجم‌اند.',
      'Adyny «gara öýli» diýip okaýarlar (takmynan etimologiýa); çeşmeler ol barada gysga.', '', '', ''],

    ['ay','yazir','یازیر','Ýazyr', '', '', '', '', ''],
    ['ay','doger','دوگر','Döger', '', '', '', '', ''],
    ['ay','dodurga','دودورقا','Dodurga', '', '', '', '', ''],
    ['ay','yaparli','یاپارلی','Ýaparly', '', '', '', '', ''],

    ['yildiz','afshar','آفشار','Owşar (Afşar)',
      'نادرشاه افشار، بنیان‌گذار سلسلهٔ افشاریه در ایران، از این ایل بود؛ شاخه‌های افشار در ایران، آذربایجان و آناتولی پراکنده‌اند.',
      'Eýranda Owşarlar neslini esaslandyran Nadyr şa şu tiredendi; owşarlaryň şahalary Eýranda, Azerbaýjanda we Anadolyda ýaýrandyr.', 'history','نادرشاه','Nedir Şa'],
    ['yildiz','kizik','قیزیق','Kyzyk', '', '', '', '', ''],
    ['yildiz','begdili','بیگدیلی','Begdili', '', '', '', '', ''],
    ['yildiz','karkin','قارقین','Garkyn', '', '', '', '', ''],

    ['gok','bayindir','بایندیر','Baýyndyr',
      'خاندان آق‌قویونلو، حکومت ترکمن در ایران و عراق در سدهٔ ۱۵، را به این ایل نسبت می‌دهند.',
      '15-nji asyrda Eýranda we Yrakda höküm süren Akgoýunly türkmen neslini şu tire bilen baglaýarlar.', 'history','قره‌قویونلو و آق‌قویونلو','Garagoýunly we Akgoýunly'],
    ['gok','pecenek','پچنک','Peçenek',
      'نامش با پچنگ‌های استپ شمال دریای سیاه یکی است؛ در شجرهٔ اوغوزی جا دارد، هرچند آن‌ها را قومی جداگانه نیز می‌شناسند.',
      'Ady Gara deňziň demirgazygyndaky peçenekler bilen birdir; oguz şejeresinde orny bar, emma olary aýry halk hem hasaplaýarlar.', '', '', ''],
    ['gok','cavuldur','چاولدور','Çawuldur',
      'برخی پژوهشگران ایل بزرگ «چودور» ترکمن را ادامهٔ این ایل می‌دانند؛ همان ایلی که گلش یکی از پنج گل پرچم است.',
      'Käbir alymlar uly türkmen «çowdur» tiresini şu tiräniň dowamy hasaplaýarlar; baýdakdaky bäş gölüň biri şol tiräniňkidir.', 'tribes','چودور','Çowdur'],
    ['gok','cepni','چپنی','Çepni',
      'گروه‌هایی از این ایل در سده‌های میانه در ساحل دریای سیاه (ترابزون، گیرسون) ساکن شدند و نامش آنجا هنوز زنده است.',
      'Bu tiräniň toparlary orta asyrlarda Gara deňiz kenarynda (Trabzon, Giresun) mesgen tutdular we ady ol ýerde henizem ýaşaýar.', '', '', ''],

    ['dag','salur','سالور','Salyr',
      'سالور قازان، قهرمان «کتاب دده قورقود»، از این ایل است؛ ایل تاریخی سالور ترکمن همین نام را دارد.',
      '«Dede Gorkut kitabynyň» gahrymany Salyr Gazan şu tiredendir; taryhy türkmen salyr tiresi hem şu ady göterýär.', 'tribes','سالور','Salyr'],
    ['dag','eymur','ایمور','Eýmur', '', '', '', '', ''],
    ['dag','alayuntlu','آلایونتلی','Alaýuntly',
      'نام را «دارای اسبان ابلق» معنا می‌کنند (ریشه‌شناسی تقریبی)؛ اطلاعات تفصیلی کمی از آن مانده است.',
      'Adyny «alaja atly» diýip düşündirýärler (takmynan etimologiýa); jikme-jik maglumat az galypdyr.', '', '', ''],
    ['dag','yuregir','یوره‌گیر','Ýüregir',
      'نامش در جنوب ترکیه (ناحیهٔ یورگیر) مانده و امارت رمضان‌اوغلو را به این ایل نسبت می‌دهند.',
      'Ady Türkiýäniň günortasynda (Ýüregir etraby) galypdyr we Ramazanogullary begligini şu tire bilen baglaýarlar.', '', '', ''],

    ['deniz','igdir','ایگدیر','Igdir',
      'شهر ایغدیر در شرق ترکیه نام این ایل را دارد.',
      'Türkiýäniň gündogaryndaky Iğdyr şäheri bu tiräniň adyny göterýär.', '', '', ''],
    ['deniz','bugduz','بوگدوز','Bügdüz', '', '', '', '', ''],
    ['deniz','yiva','ییوا','Ýywa',
      'نام آن در پیوند با دولت یبغوی اوغوز و در برخی روایت‌ها قره‌قویونلو آمده است.',
      'Ady oguz ýabgu döwleti bilen we käbir rowaýatlarda Garagoýunly bilen baglanyşykda agzalýar.', 'history','دولت یبغوی اوغوز','Oguz ýabgu döwleti'],
    ['deniz','kinik','قینیق','Kynyk',
      'خاندان سلجوقی، یعنی طغرل و چغری، به‌روایت سنت از این ایل برخاستند.',
      'Seljuk neslini, ýagny Tugrul bilen Çagrynyň, däp boýunça şu tiredendir diýip aýdýarlar.', 'history','سلجوقی','Seljuk']
  ];

  const T = {
    fa: {
      stats: [['۱','نیای مشترک'],['۲','شاخهٔ اصلی'],['۶','پسر'],['۲۴','ایل']],
      storyTitle: 'کمان زرین و سه تیر سیمین',
      story: 'اوغوزخان شش پسر را به شرق و غرب فرستاد. پسران بزرگ‌تر کمانی زرین یافتند و پسران کوچک‌تر سه تیر سیمین. او کمان را سه پاره کرد و به سه پسر بزرگ داد و تیرها را به سه پسر کوچک؛ از اینجا دو شاخهٔ بوزوق و اوچوق پدید آمد.',
      bozok: { name:'بوزوق', alt:'جناح راست؛ سه پسر بزرگ‌تر', gift:'هر پسر پاره‌ای از کمان زرین', sym:'bow' },
      uchok: { name:'اوچوق', alt:'جناح چپ؛ سه پسر کوچک‌تر', gift:'هر پسر یکی از سه تیر سیمین', sym:'arrow' },
      hint: 'روی هر ایل بزنید تا توضیح و پیوندهای مرتبط را ببینید.',
      hintMobile: 'روی نام هر پسر بزنید تا ایل‌هایش باز شود.',
      lineage: 'نسب',
      related: 'ببینید در بخش‌های دیگر',
      prev: 'قبلی', next: 'بعدی', close: 'بستن',
      noteFallback: 'دربارهٔ این ایل تفصیل چندانی در منابع نیست؛ نامش در فهرست‌های ابوالغازی، رشیدالدین و کاشغری با اندک تفاوت آمده است.',
      sonOf: 'پسر اوغوزخان',
      tribeCount: 'ایل',
      openAll: 'باز کردن همه', closeAll: 'بستن همه',
      rootNote: 'نیای افسانه‌ای قبایل اوغوز',
      sections: { history:'تاریخ', tribes:'ایل‌ها و گل قالی', books:'کتاب‌ها' }
    },
    tk: {
      stats: [['1','umumy ata'],['2','esasy şaha'],['6','ogul'],['24','tire']],
      storyTitle: 'Altyn ýaý we üç kümüş ok',
      story: 'Oguz han alty oglunu gündogara we günbatara iberdi. Uly ogullar altyn ýaý, kiçi ogullar üç kümüş ok tapdylar. Ol ýaýy üç bölege bölüp üç uly oglana, oklary üç kiçi oglana berdi; şeýdip bozok we üçok şahalary döredi.',
      bozok: { name:'Bozok', alt:'sagganat; üç uly ogul', gift:'her ogula altyn ýaýyň bir bölegi', sym:'bow' },
      uchok: { name:'Üçok', alt:'çep ganat; üç kiçi ogul', gift:'her ogula üç kümüş okuň biri', sym:'arrow' },
      hint: 'Düşündiriş we baglanyşykly bölümleri görmek üçin tirä basyň.',
      hintMobile: 'Tireleri açmak üçin her oglanyň adyna basyň.',
      lineage: 'Nesil',
      related: 'Beýleki bölümlerde gör',
      prev: 'Öňki', next: 'Indiki', close: 'Ýap',
      noteFallback: 'Bu tire barada çeşmelerde köp maglumat ýok; ady Abulgazynyň, Raşidäddiniň we Kaşgarynyň sanawlarynda birneme tapawutly ýazylýar.',
      sonOf: 'Oguz hanyň ogly',
      tribeCount: 'tire',
      openAll: 'Hemmesini aç', closeAll: 'Hemmesini ýap',
      rootNote: 'Oguz tireleriniň rowaýatdaky ata-babasy',
      sections: { history:'Taryh', tribes:'Tireler we haly göli', books:'Kitaplar' }
    }
  };

  function build(lang){
    const L = lang === 'fa' ? 0 : 1;
    const t = T[lang];
    const sons = SONS.map((s, i) => ({
      id: s[0], name: s[1 + L], element: s[3 + L], icon: s[5], index: i,
      wing: i < 3 ? 'bozok' : 'uchok', tribes: []
    }));
    TRIBES.forEach(r => {
      const son = sons.find(s => s.id === r[0]);
      son.tribes.push({
        id: r[1], name: r[2 + L], note: r[4 + L] || '',
        link: r[6] ? { route: r[6], q: L === 0 ? r[7] : r[8] } : null,
        son: son.id
      });
    });
    return { t, sons, wings: [
      Object.assign({ id:'bozok', sons: sons.slice(0, 3) }, t.bozok),
      Object.assign({ id:'uchok', sons: sons.slice(3) }, t.uchok)
    ] };
  }

  return { build, count: TRIBES.length };
})();
