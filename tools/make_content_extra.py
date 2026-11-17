#!/usr/bin/env python3
import os
"""Builds js/content-extra.js: deepens clothing, cuisine, books, influences, people (notes: work/research_notes.md)."""
import json
FD = str.maketrans('0123456789', '۰۱۲۳۴۵۶۷۸۹')
def L(f, t): return {'fa': f, 'tk': t}
def P(l, s): return s.translate(FD) if l == 'fa' else s

# ----------------------------------------------------------------- CLOTHING
CLOTH_MEN = [
 dict(icon='shirt', name=L('بالاق، قوشاق و ردای راه‌راه', 'Balak, gowşak we zolakly don'), badge=L('ترکیب لباس مردانه', 'Erkek eşigiň düzümi'),
  text=L('تا دههٔ ۱۹۲۰ لباس مردان ترکمن در ایران از چند بخش بود: شلوار گشادِ پنبه‌ای سفید («بالاق»)، پیراهن کتانی («کؤینک»)، کمربند («قوشاق») و ردای آستین‌تنگ از ابریشم راه‌راه («دون») که روی آن‌ها پوشیده می‌شد؛ کلاه استوانه‌ای سیاه هم همراهش بود.',
         '1920-nji ýyllara çenli Eýranyň türkmen erkekleriniň eşigi birnäçe bölekden durýardy: giň ak pagta balak (balak), zygyr köýnek (köýnek), guşak (gowşak) we olaryň üstünden geýilýän inçe eňsiz zolakly ýüpek don (don); gara silindr şekilli telpek hem goşulýardy.')),
]
CLOTH_WOMEN = [
 dict(icon='gem', name=L('بورنگک: چیرپی یموتی', 'Bürenjek: Ýomut çyrpysy'), badge=L('گونهٔ یموتی', 'Ýomut görnüşi'),
  text=L('چیرپی با نیم‌آستین‌های نمادین بیشتر نزد زنان تکه دیده می‌شد و گونهٔ آستین‌دار آن «کورته» نام دارد. گونهٔ یموتی «بورنگک» ساده‌تر و از ابریشم سبز با حاشیهٔ سرخ بود. رنگ و نقش‌ها نشانهٔ سن و جایگاه زن‌اند و میان یموت، گوکلن، تکه و ارساری کمی فرق می‌کنند (Iranica).',
         'Nyşan çyrpysy (ýarym ýeňli) esasan Teke aýallarynda duş gelýär we doly ýeňli görnüşine «kürte» diýilýär. Ýomut görnüşi «bürenjek» ýönekeýräkdi: gyzyl gyrajyk bilen ýaşyl ýüpekden. Reňk we nagyşlar aýalyň ýaşyny we ornuny görkezýär we Ýomut, Göklen, Teke we Ärsarylarda birneme tapawutlanýar (Iranica).')),
 dict(icon='gem', name=L('آسیق: زیور گیسو و طلسم', 'Asyk: saç bezegi we tumar'), badge=L('زیور', 'Bezeg'),
  text=L('«آسیق» («آویز») قطعه‌ای قلب‌مانند است که پایان گیسوهای دختر جوان را به هم وصل می‌کرد و از هر گیسو آویزهای نقره‌ای جفت می‌آویختند. این زیورها بیش از آنکه آرایش باشند طلسم شمرده می‌شدند و باور بر آن بود که زن را از بیماری، به‌ویژه پیش و هنگام بارداری، نگه می‌دارند (Google Arts & Culture).',
         '«Asyk» («asylýan») ýaş gyzyň örümleriniň uçlaryny birleşdirýän ýürek görnüşli bölek bolup, her örümden jübüt kümüş asylgy asylýardy. Bu bezegler bezegden köp tumar hasaplanýardy we aýaly kesellerden, aýratyn hem göwreliligiň öňünden we wagtynda goraýar diýip ynanýardylar (Google Arts & Culture).')),
 dict(icon='gem', name=L('واژگان زیور: از پیشانی تا مچ', 'Bezeg sözlügi: maňlaýdan bilege çenli'), badge=L('فهرست زیورها', 'Bezegler sanawy'),
  text=L('سولسوله: زیور پیشانی؛ چکلکی: آویز شقیقه؛ بوکاو: گردنبند آیینی؛ بیلزیک: دستبند ستبر؛ آسیق: زیور قلبی؛ تومار: طلسم؛ گولیاکا: آویز گرد. زیور به لباس دوخته می‌شد و روی آن آویخته می‌شد و سر، گردن و دست‌ها را می‌پوشاند؛ زنان از کودکی تا پیری آن را می‌پوشیدند (موزهٔ آسیا و اقیانوس آرام، ورشو؛ Google Arts & Culture).',
         'Sülsüle: maňlaý bezegi; çekelik: gabagyň bezegi; bukau: dabaraly boýun bezegi; bilezik: galyň bilezik; asyk: ýürek bezegi; tumar: tumar; gulýaka: tegelek asylgy. Bezegler eşige tikilip we onuň üstünden asylyp, baş, boýun we elleri örtýärdi; aýallar ony çagalykdan garrylyga çenli geýýärdi (Warşawa Aziýa we Ýuwaş ummany muzeýi; Google Arts & Culture).')),
 dict(icon='gem', name=L('دو سبک زرگری: تکه و یموت', 'Iki zergärçilik stili: Teke we Ýomut'), badge=L('فن زیور', 'Bezeg tehnikasy'),
  text=L('کار نقرهٔ تکه معمولاً مشبک است و با طلاکاری موضعی میان خطوط موج‌دارِ حک‌شده و نگین عقیق آراسته می‌شود؛ کار یموت خطوط قوی‌تری دارد و به‌جای آن با لوزی‌ها و هلالی‌های کوچک از طلاکاریِ برجسته (repoussé) زینت می‌یابد (Iranica). نقرهٔ آب‌طلا با عقیق و فیروزه در مجموعهٔ موزهٔ هنر متروپولیتن هم دیده می‌شود.',
         'Teke kümüş işi adatça açyk nagyşly bolup, gazylan egrem-bugram çyzyklaryň içinde bölekleýin altyn çaýalyşy we akyk bilen bezelýär; Ýomut işiniň çyzyklary güýçli bolup, onuň ýerine ownuk romb we aýjyk görnüşli kabartma altyn bilen bezelýär (Iranica). Altyn çaýalan kümüş akyk we pyrýuza bilen Metropoliten muzeýiniň ýygyndysynda hem görünýär.')),
 dict(icon='gem', name=L('نقره، باروری و سن', 'Kümüş, ogul-gyz we ýaş'), badge=L('باور', 'Ynanç'),
  text=L('نقره را مایهٔ باروری می‌دانستند و به همین سبب زنان جوان‌تر زیور بیشتر می‌پوشیدند؛ زنان از کودکی تا پیری زیور می‌پوشیدند و بسیاری از قطعه‌ها بیش از زینت، طلسم بودند (MFAH؛ Google Arts & Culture).',
         'Kümüşi nesil artmagynyň sebäpkäri hasaplaýardylar we şonuň üçin ýaş aýallar has köp bezeg geýýärdi; aýallar çagalykdan garrylyga çenli bezeg geýýärdi we bölekleriň köpüsi bezegden köp tumardy (MFAH; Google Arts & Culture).')),
]
CLOTH_SRCLIST = [
 ('Iranica: Clothing and jewelry of the Turkmen (P. A. Andrews, 1992)', 'https://www.iranicaonline.org/articles/clothing-xxvi/'),
 ('Google Arts & Culture: Traditional Turkmen Women’s Jewelry of the Teke Tribe', 'https://artsandculture.google.com/story/KwUxe92Wo4C4oA'),
 ('Museum of Asia and Pacific, Warsaw: The Turkmens — the art of everyday life', 'https://www.muzeumazji.pl/en/temporary-exhibition/the-turkmens-the-art-of-everyday-life/'),
 ('MFAH: Thread & Ornament — Turkmen textiles and jewelry', 'https://www.mfah.org/collection/thread-ornament-turkmen-textiles-and-jewelry'),
 ('Metropolitan Museum of Art: Turkmen silver jewelry', 'https://www.metmuseum.org/art/collection/search/455533'),
]

# ----------------------------------------------------------------- CUISINE
CUISINE_NEW = [
 dict(icon='bowl', name=L('میراث کوچ‌نشینی در سفره', 'Göçmeçilik mirasy saçakda'),
  text=L('پایهٔ غذای سنتی گوشت، نان، خمیرها و لبنیات است و سبزی کم. آشپزی ترکمن با آشپزی آسیای میانه (ازبکستان و قزاقستان) میراث مشترک دارد و از آشپزی ایران، افغانستان و شبه‌قارهٔ هند هم اثر گرفته است.',
         'Däp iýmitiň düýbi et, çörek, hamyr iýmitleri we süýt önümleri; gök önümler az. Türkmen aşhanasy Orta Aziýanyň (Özbegistan we Gazagystan) aşhanasy bilen umumy mirasa eýe we Eýranyň, Owganystanyň we Hindistan ýarym adasynyň aşhanalarynyň täsirini hem alypdyr.')),
 dict(icon='bowl', name=L('گوجه‌فرنگی، انار و روغن دانهٔ کدو', 'Pomidor, nar we gawun-gabak ýagy'),
  text=L('گوجه‌فرنگی که از دنیای نو آمده، در دو سدهٔ اخیر تأثیر مهمی بر آشپزی ترکمن گذاشته است. در واحه‌ها از انار («نار») برای طعم‌دادن استفاده می‌شود و دانه‌اش را برای آبِ غذا می‌فشارند؛ از دانهٔ کدو هم روغن می‌گیرند.',
         'Täze dünýäden gelen pomidor soňky iki asyrda türkmen aşhanasyna uly täsir edipdir. Oazislerde nar tagam üçin ulanylýar we dänesi şire üçin ezilýär; gabak tohumyndan ýag alýarlar.')),
 dict(icon='bowl', name=L('ادب نان', 'Çörek edebi'),
  text=L('نان («چؤرک») به‌صورت قرص‌های ضخیم و گرد در تندور گِلی «تمدیر» پخته می‌شود. وارونه‌کردن نان یا بدرفتاری با آن بسیار بی‌ادبانه شمرده می‌شود.',
         'Çörek galyň tegelek diskler görnüşinde saz «tamdyr» tamdyrynda bişirilýär. Çöregi ters goýmak ýa-da oňa erbet garamak örän edepsizlik hasaplanýar.')),
 dict(icon='bowl', name=L('شورپا و خانوادهٔ اوناش', 'Şorpa we unaş maşgalasy'),
  text=L('«شورپا» (آب‌گوشت) پایهٔ بیشتر سوپ‌هاست و سنتی‌ترین سوپ‌ها گونه‌های «اوناش»اند که با شیر و رشته یا با لوبیا و رشته می‌پزند. شورپای ماش و سوپ دومپلینگ («اتلی بؤرک شورپاسی») نیز هست.',
         '«Şorpa» (et sorpasy) köp çorbalaryň düýbi we iň däp çorbalar «unaş» görnüşleri bolup, süýt we ýuka çorba bilen ýa-da noýba we ýuka çorba bilen bişirilýär. Maş şorpasy we «etli börek şorpasy» hem bar.')),
]
CUISINE_PATCH = {  # existing dish name (fa) -> extra sentence
 'دوغرامه': L(' بنا به ویکی‌پدیا از دل‌وجگر و گوشتِ خرد‌شده، نان خرد‌شده، پیاز و گوجه ساخته می‌شود؛ برخی منابع آن را «غذای ملی» می‌دانند.',
              ' Wikipediýa görä gök-bagyr we owradylan etden, owradylan çörekden, sogandan we pomidordan taýýarlanýar; käbir çeşmeler ony «milli tagam» hasaplaýar.'),
 'پیشمه': L(' در نوروز دختران با پیشمه و میوهٔ خشک از مهمان‌ها پذیرایی می‌کنند.', ' Nowruzda gyzlar myhmanlary pişme we guradylan miwe bilen garşylaýarlar.'),
 'گوتاپ': L(' معمولاً با اسفناج هم پر می‌شود.', ' Köplenç ysmanak bilen hem doldurylýar.'),
 'پلو ترکمنی': L(' در جشن‌ها و برای مهمان گرامی داده می‌شود و یک منبع آن را «شاه آشپزی ترکمن» می‌نامد؛ در دیگ چدنیِ بزرگ می‌پزند.',
                 ' Toýlarda we sylag ediljek myhmana berilýär we bir çeşme ony «türkmen aşhanasynyň şasy» diýip atlandyrýar; uly çoýun gazanda bişirilýär.'),
}
CUISINE_SRCLIST = [
 ('Wikipedia: Turkmen cuisine', 'https://en.wikipedia.org/wiki/Turkmen_cuisine'),
 ('Whats4eats: Turkmenistan — Recipes and Cuisine', 'https://www.whats4eats.com/?p=729'),
]

# ----------------------------------------------------------------- BOOKS
BOOKS_NEW = [
 dict(icon='scroll', title=L('دیوان لغات الترک (کاشغری)', 'Diwanü lugat it-türk (Kaşgarly)'), author=L('محمود کاشغری', 'Mahmyt Kaşgarly'), era=L('سدهٔ ۱۱ میلادی', 'XI asyr'),
  text=L('فرهنگ و دانشنامهٔ گویش‌های ترکی که از کهن‌ترین مأخذ فهرست ایل‌های اوغوز است: کاشغری ۲۲ ایل را می‌شمارد و «قیزیق» و «قارقین» در فهرستش نیستند.',
         'Türki şiweleriň sözlügi we ensiklopediýasy; Oguz tireleriniň sanawynyň iň gadymy çeşmesi: Kaşgarly 22 tireni sanaýar we «Kyzyk» bilen «Karkyn» onuň sanawynda ýok.')),
 dict(icon='scroll', title=L('جامع‌التواریخ (اوغوزنامه)', 'Jemgyýetnama (Oguznama)'), author=L('رشیدالدین فضل‌الله', 'Reşideddin Fazlullah'), era=L('سدهٔ ۱۴ میلادی', 'XIV asyr'),
  text=L('تاریخ جهانیِ ایلخانی که روایت اسلامی‌شدهٔ اوغوزخان و فهرست ۲۴ ایل را همراه با معنای نام هر ایل آورده؛ ابوالغازی بعدها تقریباً از همین روایت پیروی کرد.',
         'Ilhanlylar zamanynyň dünýä taryhy; Oguz hanyň yslamlaşdyrylan rowaýatyny we 24 tiräniň sanawyny her tiräniň adynyň manysy bilen getirýär; Abulgazy soňra takmynan şu rowaýata eýerdi.')),
]
BOOKS_PATCH = {
 'کتاب دده قورقود': L(' دست‌نویس درسدن (مقدمه و ۱۲ داستان) نخستین نسخهٔ شناخته‌شده است و نسخهٔ واتیکان مقدمه و ۶ داستان دارد. در ۲۰۱۸ دست‌نویسی در مجموعهٔ خصوصی در گنبد کاووس ایران پیدا شد که عنوانش «جلد دوم کتاب ترکمان» است. یونسکو در ۲۰۱۸ این میراث را به درخواست جمهوری آذربایجان، قزاقستان و ترکیه ثبت کرد؛ ترکمنستان از درخواست‌دهندگان نبود.',
                      ' Drezden golýazmasy (giriş we 12 hekaýa) ilkinji belli nusga, Watikan nusgasy bolsa giriş we 6 hekaýa saklaýar. 2018-nji ýylda Eýranyň Gonbad-e Kawus şäherindäki hususy ýygyndyda «Türkmen kitabynyň ikinji jildi» ady bilen golýazma tapyldy. ÝUNESKO bu mirasy 2018-nji ýylda Azerbaýjanyň, Gazagystanyň we Türkiýäniň haýyşy bilen girizdi; Türkmenistan haýyş edijileriň arasynda däldi.'),
}
BOOKS_SRCLIST = [
 ('Wikipedia: Book of Dede Korkut', 'https://en.wikipedia.org/wiki/Book_of_Dede_Korkut'),
 ('Uzuntaş (2022): Dede Korkut Kitabı’nın Dresden ve Günbed yazmaları', 'https://avesis.trakya.edu.tr/yayin/2fdd3e26-b4d4-43f7-8174-e8c0e72a1de3/dede-korkut-kitabinin-dresden-yazmasindaki-kagan-ve-gunbed-yazmasindaki-kakan-kelimeleri-uzerine'),
 ('Durmuş (2025): Oğuz boy adlarının anlamları', 'https://dergipark.org.tr/tr/download/journal-file/34254'),
]

# ----------------------------------------------------------------- INFLUENCES
INFL_NEW = [
 dict(icon='landmark', title=L('سه محوطهٔ ثبت‌شدهٔ یونسکو', 'Üç ÝUNESKO bellige alnan ýadygärlik'),
  text=L('سه محوطهٔ ترکمنستان در فهرست میراث جهانی‌اند: «پارک تاریخی و فرهنگی مرو باستان» (۱۹۹۹؛ نخستین)، «کهنه‌گرگانج» (۲۰۰۵) و «دژهای اشکانی نسا» (۲۰۰۷). بنا به ویکی‌پدیا دو محوطهٔ دیگر («راهروی زرافشان–قره‌قوم» و «بیابان‌های سرد توران») در فهرست مقدماتی قرار دارند.',
         'Türkmenistanyň üç ýadygärligi Dünýä mirasy sanawynda: «Gadymy Merw Döwlet taryhy-medeni seýilgähi» (1999; ilkinji), «Könegürgenç» (2005) we «Nusaýyň Parfiýa galalary» (2007). Wikipediýa görä beýleki iki ýadygärlik («Zarafşan–Garagum geçelgesi» we «Turanyň sowuk çöller») wagtlaýyn sanawda.')),
 dict(icon='landmark', title=L('مرو در دورهٔ سلجوقی', 'Seljuklar döwründe Merw'),
  text=L('مرو در سده‌های ۱۱ و ۱۲ پایتخت سلجوقیان بود. آرامگاه سلطان سنجر (فرمانروا از ۱۱۱۸ تا ۱۱۵۷) از اوایل سدهٔ ۱۲ در سلطان‌قلعهٔ مرو برپاست و از ویژگی‌های دورهٔ اوج مرو به شمار می‌آید.',
         'Merw XI we XII asyrlarda Seljuklaryň paýtagtydy. Soltan Sanjaryň (1118–1157 ýyllarda hökümdar) mazary XII asyryň başyndan Merwiň Soltan Gala şäherçesinde ýerleşýär we Merwiň gülläp ösen döwrüniň aýratynlygy hasaplanýar.')),
 dict(icon='landmark', title=L('کهنه‌گرگانج: پایتخت خوارزم', 'Könegürgenç: Horezmiň paýtagty'),
  text=L('کهنه‌گرگانج پایتخت خوارزم بود و در ۱۲۲۱ با یورش چنگیز ویران شد. مناره قطلغ‌تیمور (حدود ۶۰ متر؛ منابع ۶۰ تا ۶۲ متر می‌گویند) و آرامگاه تورابک‌خانم از یادگارهای آن است. تورابک دختر اوزبک‌خان و همسر قطلغ‌تیمور بود و آرامگاهش را به سدهٔ ۱۴ نسبت می‌دهند.',
         'Könegürgenç Horezmiň paýtagtydy we 1221-nji ýylda Çingiz hanyň çozuşynda weýran edildi. Gutlug Timur minarasy (takmynan 60 metr; çeşmeler 60–62 metr diýýär) we Türebek hanymyň mawzoleýi onuň ýadygärlikleri. Türebek Özbek hanyň gyzy we Gutlug Timuryň aýaly bolupdyr, mawzoleýi XIV asyra degişli edilýär.')),
 dict(icon='tree', title=L('از «اوغوز» تا «ترکمان»', '«Oguz»dan «Türkmen»e'),
  text=L('از نیمهٔ سدهٔ ۱۰ نام «اوغوز» میان خود ترکان کم‌کم جای خود را به «ترکمان» داد و این روند تا آغاز سدهٔ ۱۳ تمام شد. ترکمان‌ها ترک‌هایی (بیشتر اما نه همه اوغوز) بودند که اسلام آورده و زندگی یک‌جانشین‌تری آغاز کرده بودند. در سدهٔ ۱۴ یک اتحاد ترکمان، آق‌قویونلو، دولتی در شرق ترکیه، آذربایجان، عراق و باختر ایران بنا کرد.',
         'X asyryň ortalaryndan «Oguz» ady türkleriň özlerinde ýuwaş-ýuwaşdan «Türkmen» adyna ýer berdi we bu proses XIII asyryň başyna çenli tamamlandy. Türkmenler Yslamy kabul edip has oturymly durmuşa geçen türkler (köplenç, ýöne hemmesi däl oguzlar) bolupdy. XIV asyrda Türkmen bileleşigi Akgoýunly Gündogar Türkiýede, Azerbaýjanda, Yrakda we Eýranyň günbataryndaky döwleti gurdy.')),
 dict(icon='compass', title=L('کوچ ایل‌ها (سده‌های ۱۱ تا ۱۸)', 'Tireleriň göçüşi (XI–XVIII asyrlar)'),
  text=L('کوچ باختریِ ایل‌های ترکمن در سده‌های ۱۱ تا ۱۸ در شکل‌گیری ترک‌های آناتولی، ترکمان‌های عراق و سوریه و جمعیت ترک‌زبان ایران و آذربایجان نقش داشت. یورش مغول در ۱۲۲۱ اوغوزها را از سیردریا به قره‌قوم و کرانهٔ خزر راند.',
         'Türkmen tireleriniň XI–XVIII asyrlarda günbatara göçüşi Anadolynyň türkleriniň, Yrak we Siriýa türkmenleriniň, Eýranyň we Azerbaýjanyň türki dilli ilatynyň emele gelmegine goşant goşdy. 1221-nji ýyldaky mongol çozuşy oguzlary Sirderýadan Garagum we Hazar kenaryna sürdi.')),
 dict(icon='flame', title=L('تصوف و دودمان‌های مقدس', 'Sopuçylyk we mukaddes nesiller'),
  text=L('اسلام بیشتر به دست شیخ‌های صوفی میان ترکمن‌ها گسترد و بسیاری از آن‌ها «قدیس حامی» طایفه‌ها شدند. شش «اولاد» (خواجه، سید، شیخ، مختوم، آتا، مجاور) نسب خود را از راه مبلغان صوفی به یکی از چهار خلیفه می‌رسانند؛ نک. بخش شجره‌نامه.',
         'Yslam türkmenlere köplenç sopy şeýhleri arkaly ýaýrady we olaryň köpüsi taýpalaryň «goraýjy ewliýasy» boldy. Alty «öwlat» (Hoja, Seýit, Şyh, Magtym, Ata, Mýuwür) şejeresini sopy wagyzçylary arkaly dört halypanyň birine ýetirýär; seret: Şejere bölümi.')),
]
INFL_SRCLIST = [
 ('Wikipedia: List of World Heritage Sites in Turkmenistan', 'https://en.wikipedia.org/wiki/List_of_World_Heritage_Sites_in_Turkmenistan'),
 ('UNESCO World Heritage Centre: Turkmenistan documents', 'https://whc.unesco.org/en/statesparties/TM/documents/'),
 ('Wikipedia: Book of Dede Korkut (Oghuz → Turkoman)', 'https://en.wikipedia.org/wiki/Book_of_Dede_Korkut'),
 ('Wikipedia: Turkmen tribes', 'https://en.wikipedia.org/wiki/Turkmen_tribes'),
 ('Library of Congress Country Studies: Religion (Turkmenistan)', 'https://countrystudies.us/turkmenistan/14.htm'),
]

# ----------------------------------------------------------------- PEOPLE
PEOPLE_NEW = [
 dict(icon='shield', name=L('رهبران ایلی نام‌دار', 'Meşhur tire ýolbaşçylary'), era=L('سده‌های ۱۸ و ۱۹', 'XVIII–XIX asyrlar'),
  text=L('در یادهای ترکمن از رهبران و سردارانی چون آبا سردار، کیمیر کور، نوربردی‌خان، گوشوت‌خان و دیکمه سردار یاد می‌شود. «اوئزمرات دیکمه‌سردار» به نوشتهٔ ویکی‌پدیا درجهٔ سرگردی در ارتش روسیه گرفت. جزئیات زندگی و نقش هر یک در منابع در دسترس اندک و ناهمخوان است.',
         'Türkmen ýadynda Aba Serdar, Keýmir Kör, Nurberdi han, Gowşut han we Dykma Serdar ýaly ýolbaşçylar we serdarlar agzalýar. Wikipediýanyň ýazmagyna görä «Öwezmyrat Dykma Serdar» rus goşunynda mejor derejesini alypdyr. Olaryň her biriniň durmuşynyň jikme-jiklikleri elýeterli çeşmelerde az we tapawutly.')),
 dict(icon='scroll', name=L('محمود کاشغری', 'Mahmyt Kaşgarly'), era=L('سدهٔ ۱۱ میلادی', 'XI asyr'),
  text=L('نویسندهٔ «دیوان لغات الترک»، که کهن‌ترین فهرست ایل‌های اوغوز در آن آمده است (۲۲ ایل). او ترکمن نبود؛ از دانشمندان ترک‌زبان است که شناخت ما از ایل‌های کهن اوغوز بسیار وامدار اوست.',
         '«Diwanü lugat it-türk»iň awtory, onda Oguz tireleriniň iň gadymy sanawy (22 tire) bar. Ol türkmen däldi; türki dilli alymlardan, gadymy oguz tireleri barada bilişimiz oňa köp bergili.')),
]
PEOPLE_SRCLIST = [
 ('Wikipedia: Teke (tribe)', 'https://en.wikipedia.org/wiki/Teke_(tribe)'),
 ('Wikipedia: Turkmen tribes', 'https://en.wikipedia.org/wiki/Turkmen_tribes'),
 ('Durmuş (2025): Oğuz boy adlarının anlamları', 'https://dergipark.org.tr/tr/download/journal-file/34254'),
 ('Wikipedia: Gurbannazar Ezizow', 'https://en.wikipedia.org/wiki/Gurbannazar_Ezizow'),
 ('Wikipedia: Turkmen literature', 'https://en.wikipedia.org/wiki/Turkmen_literature'),
]


# ----------------------------------------------------------------- SOURCES PAGE UI
SRCUI = {
 'fa': dict(
  intro='همهٔ منبع‌هایی که در بخش‌های سایت به‌کار رفته‌اند، یک‌جا و بی‌تکرار، با نوع و درجهٔ اعتبار هر کدام و فهرست بخش‌هایی که از آن استفاده می‌کنند. اگر لینکی خراب است یا منبع بهتری می‌شناسید، گزارش دهید.',
  total='منبع', sections='بخش', all='همه', allTypes='همهٔ انواع', allAreas='همهٔ بخش‌ها', usedIn='استفاده در', csv='دانلود فهرست (CSV)', report='گزارش منبع ضعیف یا لینک خراب',
  tierTitle='درجهٔ اعتبار', typeTitle='نوع منبع', areaTitle='بخش', weak='منبع ضعیف یا تبلیغاتی: فقط برای راهنمایی و تا یافتن جایگزین.', noResults='منبعی با این فیلتر پیدا نشد.', notes='یادداشت‌های روش و بازبینی',
  tiers={'A': ['A · مرجع', 'مبنای ادعاهای واقعی (پژوهش، یونسکو، دانشنامه‌های تخصصی، آمار رسمی)؛ هرجا ممکن است اول سراغ این‌ها می‌رویم.'],
         'B': ['B · دانشنامهٔ آزاد', 'ویکی‌پدیا؛ برای ارجاع و جست‌وجو. ادعاهای مهم باید با منبع A هم‌خوان باشد.'],
         'C': ['C · گزارش و برآورد', 'رسانه، اندیشکده، NGO و منابع دولتی؛ همیشه به‌نام منبع نقل می‌شوند، نه به‌عنوان واقعیت قطعی (منابع دولتی ممکن است لحن تبلیغاتی داشته باشند).'],
         'D': ['D · ضعیف', 'وبلاگ، گردشگری، تجاری و انجمن؛ فقط برای رنگ‌وبو و اشاره، و تا یافتن جایگزین بهتر.']},
  types={'official': 'آمار و اسناد رسمی، یونسکو', 'academic': 'پژوهشی و دانشگاهی', 'reference': 'دانشنامه و مرجع تخصصی', 'encyclopedia': 'ویکی‌پدیا', 'media': 'رسانه، اندیشکده و NGO', 'state': 'منبع دولتی ترکمنستان', 'community': 'وبلاگ، گردشگری و تجاری'}),
 'tk': dict(
  intro='Saýtyň bölümlerinde ulanylan ähli çeşmeler, gaýtalanmazdan, her biriniň görnüşi we ygtybarlylyk derejesi bilen we olary ulanýan bölümleriň sanawy bilen. Çeşme açylmasa ýa-da has gowusyny bilseňiz, habar beriň.',
  total='çeşme', sections='bölüm', all='Hemmesi', allTypes='Ähli görnüşler', allAreas='Ähli bölümler', usedIn='Ulanylýan ýeri', csv='Sanawy ýükle (CSV)', report='Ejiz çeşme ýa-da bozuk baglanyşyk habary',
  tierTitle='Ygtybarlylyk derejesi', typeTitle='Çeşme görnüşi', areaTitle='Bölüm', weak='Ejiz ýa-da mahabat çeşme: diňe ugrukdyryş üçin we çalyşmagy tapýança.', noResults='Bu süzgüç bilen çeşme tapylmady.', notes='Usul we gözden geçiriş bellikleri',
  tiers={'A': ['A · Esasy', 'Hakyky talaplaryň esasy (barlag, ÝUNESKO, hünärmen ensiklopediýalar, resmi statistika); mümkin boldugyça ilki şulara ýüz tutýarys.'],
         'B': ['B · Erkin ensiklopediýa', 'Wikipediýa; salgylanma we gözleg üçin. Möhüm talaplar A çeşmesi bilen gabat gelmeli.'],
         'C': ['C · Habar we çaklama', 'Metbugat, pikir merkezleri, NGO we döwlet çeşmeleri; hemişe çeşmäniň ady bilen getirilýär, kesgitli hakykat hökmünde däl (döwlet çeşmeleri mahabat äheňli bolup biler).'],
         'D': ['D · Ejiz', 'Blog, syýahat, täjirçilik we forum; diňe reňk we salgylanma üçin we has gowusyny tapýança.']},
  types={'official': 'Resmi statistika we resminamalar, ÝUNESKO', 'academic': 'Ylmy we uniwersitet', 'reference': 'Ensiklopediýa we hünär çeşmesi', 'encyclopedia': 'Wikipediýa', 'media': 'Metbugat, pikir merkezi we NGO', 'state': 'Türkmenistanyň döwlet çeşmesi', 'community': 'Blog, syýahat we täjirçilik'}),
}

def build(lang):
    X = lambda s: P(lang, s)
    L_ = lambda d: X(d[lang])
    out = {}
    out['clothing'] = {'men': [{'icon': i['icon'], 'name': L_(i['name']), 'badge': L_(i['badge']), 'text': L_(i['text'])} for i in CLOTH_MEN],
                       'women': [{'icon': i['icon'], 'name': L_(i['name']), 'badge': L_(i['badge']), 'text': L_(i['text'])} for i in CLOTH_WOMEN],
                       'sources': [{'t': t, 'u': u} for t, u in CLOTH_SRCLIST]}
    out['cuisine'] = {'dishes': [{'icon': i['icon'], 'name': L_(i['name']), 'text': L_(i['text'])} for i in CUISINE_NEW],
                      'patch': {k: L_(v) for k, v in CUISINE_PATCH.items()}, 'sources': [{'t': t, 'u': u} for t, u in CUISINE_SRCLIST]}
    out['books'] = {'items': [{'icon': i['icon'], 'title': L_(i['title']), 'author': L_(i['author']), 'era': L_(i['era']), 'text': L_(i['text'])} for i in BOOKS_NEW],
                    'patch': {k: L_(v) for k, v in BOOKS_PATCH.items()}, 'sources': [{'t': t, 'u': u} for t, u in BOOKS_SRCLIST]}
    out['influences'] = {'items': [{'icon': i['icon'], 'title': L_(i['title']), 'text': L_(i['text'])} for i in INFL_NEW], 'sources': [{'t': t, 'u': u} for t, u in INFL_SRCLIST]}
    out['people'] = {'items': [{'icon': i['icon'], 'name': L_(i['name']), 'era': L_(i['era']), 'text': L_(i['text'])} for i in PEOPLE_NEW], 'sources': [{'t': t, 'u': u} for t, u in PEOPLE_SRCLIST]}
    out['sourcesUi'] = SRCUI[lang]
    out['ui'] = {'fa': {'sectionSources': 'منابع این بخش'}, 'tk': {'sectionSources': 'Bu bölümiň çeşmeleri'}}[lang]
    return out

data = {l: build(l) for l in ('fa', 'tk')}
js = '''/* Deeper content for clothing, cuisine, books, influences and people (research notes: docs/research-notes-2026-11.md).
   Adds cards, completes existing cards where research added detail, and registers per-section sources. Hand-editable. */
(function(){
  const X = %s;
  const idxOf = (arr, key, val) => arr.findIndex(x => x[key] === val);
  ['fa', 'tk'].forEach(l => {
    const D = DATA[l], e = X[l];
    D.ui.sectionSources = e.ui.sectionSources;
    D.sources.ui = e.sourcesUi;
    D.clothing.men = D.clothing.men.concat(e.clothing.men);
    D.clothing.women = D.clothing.women.concat(e.clothing.women);
    D.clothing.footSrc = e.clothing.sources;
    D.cuisine.dishes = D.cuisine.dishes.concat(e.cuisine.dishes);
    D.cuisine.footSrc = e.cuisine.sources;
    D.books.items = D.books.items.concat(e.books.items);
    D.books.footSrc = e.books.sources;
    D.influences.items = D.influences.items.concat(e.influences.items);
    D.influences.footSrc = e.influences.sources;
    D.people.items = D.people.items.concat(e.people.items);
    D.people.footSrc = e.people.sources;
  });
  /* Patches use the Persian names as keys and apply to the same index in both languages */
  const fa = DATA.fa;
  Object.keys(X.fa.cuisine.patch).forEach(name => {
    const i = idxOf(fa.cuisine.dishes, 'name', name);
    if(i >= 0) ['fa', 'tk'].forEach(l => { DATA[l].cuisine.dishes[i].text += X[l].cuisine.patch[name]; });
  });
  Object.keys(X.fa.books.patch).forEach(name => {
    const i = idxOf(fa.books.items, 'title', name);
    if(i >= 0) ['fa', 'tk'].forEach(l => { DATA[l].books.items[i].text += X[l].books.patch[name]; });
  });
})();
''' % json.dumps(data, ensure_ascii=False, indent=1)
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'js', 'content-extra.js'), 'w', encoding='utf8').write(js)
print('written', len(js) // 1024, 'KB')
