#!/usr/bin/env python3
import os
"""Builds js/mature-extra.js (notes: docs/research-notes-2026-11.md — LITERATURE, MUSIC, AKHAL-TEKE, SMALL TRIBES, flag correction)."""
import json
FD = str.maketrans('0123456789', '۰۱۲۳۴۵۶۷۸۹')
def L(f, t): return {'fa': f, 'tk': t}

# ------------------------------------------------------------------ POETS (name, years, text)
POETS = [
 dict(icon='feather', name=L('عبدالله شبنده', 'Abdylla Şabende'), years=L('سدهٔ ۱۸ (هم‌روزگار مختومقلی)', 'XVIII asyr (Magtymguly bilen döwürdeş)'),
  text=L('از شاعران هم‌روزگار مختومقلی که شعر غنایی و نثر خیالی می‌نوشت؛ منظومهٔ «گل و بلبل» از اوست.', 'Magtymguly bilen döwürdeş şahyrlardan, lirik goşgy we hyýaly proza ýazypdyr; «Gül we Bilbil» goşgusy onuňky.')),
 dict(icon='feather', name=L('شیدایی', 'Şeýdaýy'), years=L('پایان سدهٔ ۱۸ تا آغاز سدهٔ ۱۹', 'XVIII asyryň ahyry – XIX asyryň başy'),
  text=L('نویسندهٔ «گل و سنوبر»؛ ویکی‌پدیا آن را رمانی خیالی (fantasy) می‌نامد. به همراه غایبی و مغروبی، از ادامه‌دهندگان سنت شعر مکتوب پس از مختومقلی است.', 'Wikipediýanyň «hyýaly roman» diýip atlandyrýan «Gül we Senuwer» eseriniň awtory. Gaýyby we Magrupy bilen bilelikde Magtymguludan soňky ýazuw şygryýetiniň dowamçylaryndan.')),
 dict(icon='feather', name=L('محمود غایبی', 'Mahmyt Gaýyby'), years=L('پایان سدهٔ ۱۸ تا آغاز سدهٔ ۱۹', 'XVIII asyryň ahyry – XIX asyryň başy'),
  text=L('شاعری که حدود ۴۰۰ شعر از او یاد می‌شود.', 'Takmynan 400 goşgusy ýatlanylýan şahyr.')),
 dict(icon='feather', name=L('قربان‌علی مغروبی', 'Gurbanally Magrupy'), years=L('پایان سدهٔ ۱۸ تا آغاز سدهٔ ۱۹', 'XVIII asyryň ahyry – XIX asyryň başy'),
  text=L('نویسندهٔ منظومه‌های «یوسف و احمد» و «سیف‌الملوک».', '«Ýusup we Ahmet» we «Seýfel Melek» goşgularynyň awtory.')),
 dict(icon='scroll', name=L('عبدالستار قاضی', 'Abdysetdar Kazy'), years=L('دههٔ ۱۸۶۰', '1860-njy ýyllar'),
  text=L('نویسندهٔ «جنگ‌نامه» (Jeňnama) دربارهٔ نبردهای تکه‌ها با ایرانیان.', 'Tekeleriň eýranlylar bilen söweşleri barada «Jeňnama» eseriniň awtory.')),
 dict(icon='feather', name=L('میسگین‌قیلیچ', 'Misgin Gylyç'), years=L('۱۸۴۵ تا ۱۹۰۵', '1845–1905'),
  text=L('هم‌روزگار ماتاجی که دربارهٔ دفاع از گوک‌تپه سرود.', 'Mätäji bilen bilelikde Gökdepäniň goragy barada ýazan şahyr.')),
 dict(icon='feather', name=L('مُلامورت', 'Molla Murt'), years=L('۱۸۷۹ تا ۱۹۳۰', '1879–1930'),
  text=L('نخستین شاعر شوروی ترکمن شمرده می‌شود.', 'Türkmeniň ilkinji sowet şahyry hasaplanýar.')),
]
POETS_PATCH = {  # persian name -> (years_fa, years_tk, extra sentence fa, extra sentence tk)
 'آناگیلیچ مطاجی': ('حدود ۱۸۲۴ تا ۱۸۸۴', 'takmynan 1824–1884',
    ' ویکی‌پدیا او را همراه میسگین‌قیلیچ از سرایندگان دفاع گوک‌تپه می‌شمارد.',
    ' Wikipediýa ony Misgin Gylyç bilen bilelikde Gökdepäniň goragyny aýdan şahyrlardan hasaplaýar.'),
}
POETS_SRC = [
 ('ویکی‌پدیا: Turkmen literature', 'https://en.wikipedia.org/wiki/Turkmen_literature'),
 ('ویکی‌پدیا: Gurbannazar Ezizow', 'https://en.wikipedia.org/wiki/Gurbannazar_Ezizow'),
 ('TDV İslâm Ansiklopedisi: Göklen (مختومقلی و ذلیلی)', 'https://islamansiklopedisi.org.tr/goklen'),
 ('Cyberleninka: Magtymguly Firagi', 'https://cyberleninka.ru/article/n/improving-students-communication-skills-through-magtymguly-firagi-s-poems'),
]

# ------------------------------------------------------------------ PEOPLE
PEOPLE = [
 dict(icon='music', name=L('داناتار اووزوف', 'Danatar Öwezow'), era=L('۱۹۱۱ تا ۱۹۶۶', '1911–1966'),
  text=L('آهنگساز و رهبر ارکستر. با آدریان شاپوشنیکوف اپرای «شاسنم و غریب» را ساخت که در ۲۵ اکتبر ۱۹۴۴ اجرا شد و ویکی‌پدیا آن را نخستین اپرای ترکمن می‌نامد. نویسندهٔ اپرای «آینا» (۱۹۶۰) و کانتات «صدای دوتار» (۱۹۵۰) و از بنیان‌گذاران اتحادیهٔ آهنگسازان ترکمنستان (ریاست ۱۹۴۰ تا ۱۹۴۸) بود. «شاسنم و غریب» سال‌ها هر فصل تئاتر اپرا و باله را گشود.',
         'Kompozitor we dirižýor. Adrian Şaposhnikow bilen «Şasenem we Garyp» operasyny döretdi; ol 1944-nji ýylyň 25-nji oktýabrynda sahnalaşdyryldy we Wikipediýa ony ilkinji türkmen operasy diýip atlandyrýar. «Aýna» operasynyň (1960) we «Dutaryň owazy» kantatasynyň (1950) awtory we Türkmenistanyň Kompozitorlar birleşiginiň esaslandyryjylaryndan (1940–1948 ýyllarda ýolbaşçy).')),
 dict(icon='music', name=L('ولی محادف', 'Weli Muhadow'), era=L('۱۹۱۶ تا ۲۰۰۵', '1916–2005'),
  text=L('آهنگساز؛ سرود جمهوری شوروی ترکمنستان (۱۹۴۴، متن از امان ککیلف)، اپرای «پایان گردنهٔ خونین» و سمفونی «به یاد مختومقلی» از آثار اوست.',
         'Kompozitor; Türkmenistan SSR-iň sowet gimni (1944, sözleri Aman Kekilow), «Gandy aşyrymyň ahyry» operasy we «Magtymgulynyň ýadyna» simfoniýasy onuň eserleri.')),
 dict(icon='music', name=L('نوری هالمامدف', 'Nury Halmämmedow'), era=L('۱۹۳۸ تا ۱۹۸۳', '1938–1983'),
  text=L('آهنگساز متولد روستای دایننا نزدیک باهردن؛ در کودکی یتیم شد (مادرش ۱۹۴۴ درگذشت) و در یتیم‌خانه و مدرسهٔ شبانه‌روزی بزرگ شد. اثر پیانوی «صدای دوتار» (۱۹۶۲، با تقدیم به دوتارنواز ملی تاچمرادف) و «لالایی» از «گام قاطع» از معروف‌ترین کارهای اوست.',
         'Bäherden golaýyndaky Daýna obasynda doglan kompozitor; çagalykda ýetim galdy (ejesi 1944-nji ýylda aradan çykdy), ýetimler öýünde we internat mekdepde ulaldy. «Dutaryň owazy» fortepiano eseri (1962, dutarçy Mylly Täçmyradowa bagyşlanyp) we «Aýgytly ädim» eserindäki beşik aýdymy iň meşhur işleriniň biri.')),
 dict(icon='feather', name=L('بردی کربابایف', 'Berdi Kerbabaýew'), era=L('زادهٔ ۱۸۹۴', '1894-nji ýylda doglan'),
  text=L('نویسندهٔ برجستهٔ دورهٔ شوروی؛ «گام قاطع» (آیغیتلی آدیم، ۱۹۴۷؛ جایزهٔ دولتی شوروی ۱۹۴۸)، «آیسلطان از سرزمین طلای سفید» (۱۹۴۹؛ جایزهٔ دولتی ۱۹۵۱) و «نفت‌داغ» (۱۹۵۷). نمایشنامهٔ «مختومقلی» (۱۹۴۳) را هم نوشت و ۱۹۴۲ تا ۱۹۵۰ رئیس اتحادیهٔ نویسندگان بود.',
         'Sowet döwrüniň görnükli ýazyjysy; «Aýgytly ädim» (1947; 1948-nji ýylda SSSR Döwlet baýragy), «Ak altyn ýurdundan Aýsoltan» (1949; 1951-nji ýylda Döwlet baýragy) we «Nebitdag» (1957). «Magtymguly» dramasyny (1943) hem ýazdy we 1942–1950 ýyllarda Ýazyjylar birleşiginiň başlygydy.')),
 dict(icon='feather', name=L('توشان اسنووا', 'Towşan Esenowa'), era=L('زادهٔ ۱۹۱۵', '1915-nji ýylda doglan'),
  text=L('نخستین زن نمایشنامه‌نویس و شاعر ترکمن.', 'Türkmeniň ilkinji aýal dramaturgy we şahyry.')),
 dict(icon='feather', name=L('آگاخان دوردییف', 'Agahan Durdyýew'), era=L('زادهٔ ۱۹۰۴', '1904-nji ýylda doglan'),
  text=L('نخستین نثرنویس شوروی ترکمن شمرده می‌شود.', 'Türkmeniň ilkinji sowet proza ýazyjysy hasaplanýar.')),
]
PEOPLE_SRC = [
 ('ویکی‌پدیا: Danatar Ovezov', 'https://en.wikipedia.org/wiki/Danatar_Ovezov'),
 ('ویکی‌پدیا: Weli Muhadow', 'https://en.wikipedia.org/wiki/Weli_Muhadow'),
 ('ویکی‌پدیا: Nury Halmammedov', 'https://en.wikipedia.org/wiki/Nury_Halmammedov'),
 ('ویکی‌پدیا: Turkmen literature (کربابایف، اسنووا، دوردییف)', 'https://en.wikipedia.org/wiki/Turkmen_literature'),
]

# ------------------------------------------------------------------ BOOKS
BOOKS = [
 dict(icon='scroll', title=L('رونق‌الاسلام (وفایی)', 'Rownak-ul-Yslam (Wepaýy)'), author=L('وفایی (ترکمن خراسانی)', 'Wepaýy (Horasan türkmeni)'), era=L('۱۴۶۴ میلادی', '1464'),
  text=L('از کهن‌ترین آثار ترکمنیِ متمایز از ترکی قدیم؛ ویکی‌پدیا آن را در کنار اشعار بایرام‌خان (سدهٔ ۱۶) و «شجرهٔ ترکمن» ابوالغازی (سدهٔ ۱۷) آغاز نوشتار ترکمنی می‌شمارد.',
         'Köne türkiden tapawutly türkmen dilindäki iň gadymy eserleriň biri; Wikipediýa ony Baýram hanyň goşgulary (XVI asyr) we Abulgazynyň «Şejere»si (XVII asyr) bilen bilelikde türkmen ýazuwynyň başlangyjy hasaplaýar.')),
 dict(icon='scroll', title=L('جنگ‌نامه (Jeňnama)', 'Jeňnama'), author=L('عبدالستار قاضی', 'Abdysetdar Kazy'), era=L('دههٔ ۱۸۶۰', '1860-njy ýyllar'),
  text=L('منظومه‌ای دربارهٔ نبردهای تکه‌ها با ایرانیان؛ نمونه‌ای از ادبیات تاریخی-حماسی سدهٔ ۱۹.', 'Tekeleriň eýranlylar bilen söweşleri barada poema; XIX asyryň taryhy-gahrymançylyk edebiýatynyň nusgasy.')),
 dict(icon='scroll', title=L('گل و سنوبر', 'Gül we Senuwer'), author=L('شیدایی', 'Şeýdaýy'), era=L('پایان سدهٔ ۱۸ – آغاز ۱۹', 'XVIII asyryň ahyry – XIX asyryň başy'),
  text=L('ویکی‌پدیا آن را رمانی خیالی می‌نامد؛ از آثار عاشقانه-ماجرایی پس از مختومقلی.', 'Wikipediýa ony hyýaly roman diýip atlandyrýar; Magtymguludan soňky söýgi-başdan geçirme eserleriniň biri.')),
 dict(icon='scroll', title=L('یوسف و احمد؛ سیف‌الملوک', 'Ýusup we Ahmet; Seýfel Melek'), author=L('قربان‌علی مغروبی', 'Gurbanally Magrupy'), era=L('پایان سدهٔ ۱۸ – آغاز ۱۹', 'XVIII asyryň ahyry – XIX asyryň başy'),
  text=L('دو منظومهٔ روایی از مغروبی که به سنت شرقی داستان‌گویی منظوم نزدیک‌اند.', 'Magrupynyň gündogar rowaýat däbine ýakyn iki hekaýa poemasy.')),
 dict(icon='scroll', title=L('دستان‌های عامیانه (اصلی و کرم، هورلوقا و همره، ملیکه دیلارام، زین‌العرب، بابا روشن)', 'Halk dessanlary (Asly we Kerem, Hürlükga we Hemra, Melike Dilaram, Zeýnal-Arap, Baba Röwşen)'), author=L('ناشناس', 'Näbelli'), era=L('ساخته در سده‌های ۱۵–۱۷؛ ثبت در سدهٔ ۱۹', 'XV–XVII asyrlarda döredilip, XIX asyrda ýazga alnan'),
  text=L('نثر و نظم در آن‌ها متناوب می‌آید؛ یاری‌گرانِ داستان دیو، جن و پری‌اند. ویکی‌پدیا «بابا روشن» و «ملیکه دیلارام» را داستان کشمکش پیروان علی با «کافران» می‌داند. قهرمان‌های طنز مردمی مانند آلدار کوسه، کلجه و دالیجه هم در سنت شفاهی‌اند.',
         'Olarda proza we goşgy çalyşyp gelýär; hekaýanyň kömekçileri dew, jyn we perilerdir. Wikipediýa «Baba Röwşen» we «Melike Dilaram» eserlerini Alynyň yzyna eýerijileriň «kapyrlar» bilen göreşi hasaplaýar. Aldar Köse, Kelje we Dälije ýaly halk gülki gahrymanlary hem agzaky däpde bar.')),
 dict(icon='book', title=L('نخستین فرهنگ روسی–ترکمنی و دستور (۱۹۱۳ و ۱۹۱۵)', 'Ilkinji rus–türkmen sözlügi we grammatika (1913 we 1915)'), author=L('ای. آ. بلیایف', 'I. A. Belýaýew'), era=L('۱۹۱۳ و ۱۹۱۵', '1913 we 1915'),
  text=L('زبان ترکمنیِ نوین در آغاز سدهٔ ۲۰ بر پایهٔ گویش تکه شکل گرفت؛ فرهنگ و دستور بلیایف از نخستین ابزارهای مکتوب آن بود.', 'Häzirki türkmen dili XX asyryň başynda Teke şiwesine daýanyp emele geldi; Belýaýewiň sözlügi we grammatikasy onuň ilkinji ýazuw gurallaryndandy.')),
]
BOOKS_SRC = [('ویکی‌پدیا: Turkmen literature', 'https://en.wikipedia.org/wiki/Turkmen_literature')]

# ------------------------------------------------------------------ INFLUENCES
INFL = [
 dict(icon='horse', title=L('اسب آخال‌تکه: از ایل تا جهان', 'Ahalteke aty: tireden dünýä'),
  text=L('نام امروزی «آخال‌تکه» به ۱۸۸۱ برمی‌گردد: ژنرال کوروپاتکین که این اسب‌ها را هنگام جنگ دیده بود، پرورشگاهی ساخت و آن‌ها را به نام ایل تکه نامید. این نژاد از کهن‌ترین نژادهای زندهٔ اسب است و بر نژادهای ترکنر، دُن، بودیونی، قره‌بایر و قره‌باغ اثر گذاشت. خاستگاه آن بحث‌برانگیز است و ارتباطش با اسب انگلیسی (Thoroughbred) تنها یک فرضیه است. ایل‌ها اصل‌ونسب اسب را شفاهی نگه می‌داشتند.',
         'Häzirki «Ahalteke» ady 1881-nji ýyla degişli: bu atlary söweş wagtynda gören general Kuropatkin bir ösdürilýän ýer gurup, olara Teke tiresiniň adyny beripdir. Bu tohum ýaşaýan iň gadymy at tohumlarynyň biri we Trakener, Don, Budýonny, Garabaýyr we Garabag atlaryna täsir edipdir. Gelip çykyşy jedelli we iňlis aty (Thoroughbred) bilen baglanyşygy diňe çaklama. Tireler atyň şejeresini agzaky saklapdyrlar.')),
 dict(icon='horse', title=L('سفر ۱۹۳۵ عشق‌آباد–مسکو', '1935-nji ýyldaky Aşgabat–Moskwa ýöreýşi'),
  text=L('در ۳۰ مه ۱۹۳۵ بیست‌وهشت سوار با اسب آخال‌تکه عشق‌آباد را به مقصد مسکو ترک کردند تا مقام‌ها را تحت تأثیر قرار دهند. بنا به ویکی‌پدیا مسافت حدود ۴۰۰۰ کیلومتر در ۸۴ روز بود و شامل عبور سه‌روزه از بیابان بی‌آب. در ۱۹۶۰ «آبسنت» به سواری سرگئی فیلاتوف نخستین طلای اسب‌سواری شوروی (درساژ) را برد و ژوکوف در رژهٔ پیروزی ۱۹۴۵ بر اسب سفید آخال‌تکه سوار بود.',
         '1935-nji ýylyň 30-njy maýynda 28 atly Ahalteke atlary bilen häkimiýetleri täsirlendirmek üçin Aşgabatdan Moskwa ugrady. Wikipediýa görä aralyk takmynan 4000 km, 84 günlük we suwsuz çölden üç günlük geçişi öz içine alýardy. 1960-njy ýylda Sergeý Filatowyň münen «Absent» aty Sowetleriň ilkinji atçylyk altynyny (dressaž) gazandy we Žukow 1945-nji ýyldaky Ýeňiş paradynda ak Ahalteke münüpdi.')),
 dict(icon='flag', title=L('جمهوری شوروی ترکمنستان و اشتراکی‌سازی', 'Türkmenistan SSR we kolhozlaşdyrma'),
  text=L('جمهوری شوروی ترکمنستان در ۲۷ اکتبر ۱۹۲۴ تأسیس شد. اشتراکی‌سازی: تا ۱۹۲۹ حدود ۱۵٪ کشاورزان ترکمن و تا ۱۹۴۰ بیش از ۹۹٪ در مزرعه‌های جمعی بودند (History Today). اسب‌ها به اصطبل‌های دولتی رفتند و زیرنویسی با خون انگلیسی تهدیدی برای نژاد بود؛ دفتر نژاد ۱۹۳۲ بسته شد و نخستین ثبت شوروی در ۱۹۴۱ با بیش از ۷۰۰ اسب انجام شد.',
         'Türkmenistan SSR 1924-nji ýylyň 27-nji oktýabrynda döredildi. Kolhozlaşdyrma: 1929-njy ýyla çenli türkmen daýhanlarynyň takmynan 15%-i, 1940-njy ýyla çenli 99%-den gowragy kolhozlarda boldy (History Today). Atlar döwlet ýabylaryna geçirildi we iňlis gany bilen çaknyşdyrmak tohuma howp salypdyr; tohum kitaby 1932-nji ýylda ýapyldy we ilkinji Sowet bellige alyşy 1941-nji ýylda 700-den gowrak at bilen geçirildi.')),
 dict(icon='swords', title=L('فتح روسیه (۱۸۷۹ تا ۱۸۸۵)', 'Russiýanyň basyp almagy (1879–1885)'),
  text=L('تکه‌ها در ۱۸۷۹ در گوک‌تپه سپاه روسیه را شکست دادند، اما در ۱۸۸۰–۸۱ شکست خوردند؛ ۱۸۸۱ ولایت فراخزر پدید آمد، مرو در ۱۸۸۴ گرفته شد و در ۱۸۸۵ درگیری پنج‌ده با افغانستان مرز شمال‌باختری افغانستان را مشخص کرد.',
         'Tekeler 1879-njy ýylda Gökdepede rus goşunyny ýeňdi, ýöne 1880–81-nji ýyllarda ýeňildi; 1881-nji ýylda Zakaspi welaýaty döredi, Merw 1884-nji ýylda alyndy we 1885-nji ýylda Penjdehdäki çaknyşyk Owganystanyň demirgazyk-günbatar serhedini kesgitledi.')),
 dict(icon='quote', title=L('سنت ادبی شرقی و زبان چغتایی', 'Gündogar edebi däbi we çagataý dili'),
  text=L('زبان ادبی ترکمنی تا مدت‌ها زیر تأثیر چغتایی بود. شاعرانی مانند آزادی و آندلیب زبانی دور از گفتار مردم و پیرو قاعده‌های شعر درباری شرقی داشتند، در حالی که مختومقلی با زبان مردمی نوشت و بند نشانه‌های ایلی را شکست.',
         'Türkmen edebi dili uzak wagtlap çagataý täsirinde boldy. Azady we Andalyp ýaly şahyrlaryň dili halk gepinden daş we gündogar hanlyk şygryýetiniň kadalaryna eýerýärdi; Magtymguly bolsa halk dilinde ýazyp, tire serhetlerini böwsüpdir.')),
 dict(icon='letters', title=L('کنگرهٔ باکو (۱۹۲۶) و خط', 'Baku gurultaýy (1926) we ýazuw'),
  text=L('پس از کنگرهٔ ترک‌شناسی باکو در ۱۹۲۶ خط لاتین تا ۱۹۴۰ رایج شد، سپس سیریلیک تا ۱۹۹۳ و دوباره لاتین. زبان معیار نوین در آغاز سدهٔ ۲۰ بر پایهٔ گویش تکه شکل گرفت.',
         '1926-njy ýyldaky Baku türkologiýa gurultaýyndan soň latyn ýazuwy 1940-njy ýyla çenli ýaýrady, soňra kiril 1993-nji ýyla çenli we ýene-de latyn. Häzirki standart dil XX asyryň başynda Teke şiwesine daýanyp emele geldi.')),
]
FOLK_SRC = [
 ('یونسکو: Epic art of Gorogly (پروندهٔ ۰۱۰۲۸، ۲۰۱۵)', 'https://ich.unesco.org/en/RL/epic-art-of-gorogly-01028'),
 ('یونسکو: تصمیم کمیتهٔ بین‌دولتی 10.COM 10.B.30', 'https://ich.unesco.org/en/decisions/10.COM/10.B.30'),
 ('ویکی‌پدیا: Epic of Koroghlu', 'https://en.wikipedia.org/wiki/Epic_of_Koroghlu'),
 ('یونسکو: Telling tradition of Nasreddin Hodja… (تصمیم 17.COM 7.B.43، ۲۰۲۲)', 'https://ich.unesco.org/en/decisions/17.COM/7.b.43'),
]
TRIBE_SRC = [
 ('ویکی‌پدیا: Turkmen tribes', 'https://en.wikipedia.org/wiki/Turkmen_tribes'),
 ('ویکی‌پدیا: Ersari', 'https://en.wikipedia.org/wiki/Ersari'),
 ('ویکی‌پدیا: Yomut', 'https://en.wikipedia.org/wiki/Yomut'),
 ('ویکی‌پدیا: Saryk', 'https://en.wikipedia.org/wiki/Saryk'),
 ('ویکی‌پدیا: Shajara-i Tarākima (ابوالغازی، ۱۶۵۹)', 'https://en.wikipedia.org/wiki/Shajara-i_Tar%C4%81kima'),
]
INFL_SRC = [
 ('ویکی‌پدیا: Akhal-Teke', 'https://en.wikipedia.org/wiki/Akhal-Teke'),
 ('History Today: Golden Horses, Red Square', 'https://www.historytoday.com/archive/history-matters/golden-horses-red-square'),
 ('Saudi Aramco World (1997): The Golden Horses of Turkmenistan', 'https://archive.aramcoworld.com/issue/199703/the.golden.horses.of.turkmenistan.htm'),
 ('ویکی‌پدیا: Turkmen literature', 'https://en.wikipedia.org/wiki/Turkmen_literature'),
 ('ویکی‌پدیا: Teke (tribe)', 'https://en.wikipedia.org/wiki/Teke_(tribe)'),
 ('ویکی‌پدیا: Panjdeh incident', 'https://en.wikipedia.org/wiki/Panjdeh_incident'),
]

# ------------------------------------------------------------------ SMALL TRIBES (appended to genealogy.extra.modern)
SMALL = [
 dict(id='alili', name=L('علی‌ایلی (Ali Ili)', 'Ali Ili (Alili)'),
  from_=L('در یک منبع شاخه‌ای از ارساری؛ در منبع دیگر گروهی که پیش از شوروی خود را قومی جدا می‌دانست', 'Bir çeşmede Ärsarynyň şahasy; başka bir çeşmede Sowetden öň özlerini aýry halk hasaplaýan topar'),
  where=L('ناحیهٔ کاکا (آخال) و پیرامون', 'Kaka (Ahal) we töweregi'),
  text=L('ویکی‌پدیا علی‌ایلی را یکی از ده بخش ایلی بزرگ ترکمنستان می‌نامد؛ می‌گوید پیش از دورهٔ شوروی خود را قومی متمایز می‌دانستند و شوروی آنان را زیر مجموعهٔ «ترکمن» قرار داد. از سوی دیگر، در روایتی دربارهٔ ارساری، شاخهٔ «علی‌ایلی» پس از خشک‌شدن اوزبوی در سدهٔ ۱۷ در ناحیهٔ کاکا ماند. LoC آنان را همراه «آتا» از گروه‌های کوچک‌تر می‌شمارد.',
         'Wikipediýa Ali Ili tiresini Türkmenistanyň on uly tire bölüminiň biri diýip atlandyrýar; Sowet döwründen öň özlerini aýry halk hasaplaýandyklaryny we Sowetleriň olary «türkmen» toparyna goşandygyny aýdýar. Başga bir tarapdan, Ärsary barada rowaýatda «Ali-Eli» şahasy XVII asyrda Uzboý gurandan soň Kaka töwereginde galypdyr. LoC olary «Ata» bilen bilelikde has kiçi toparlar hasaplaýar.'),
  parts=L([], []), note=L('دو منبع با هم نمی‌خوانند: «شاخهٔ ارساری» یا «قوم جدا».', 'Iki çeşme biri-birine gabat gelmeýär: «Ärsary şahasy» ýa-da «aýry halk».'),
  srcs=['wikiAliIli', 'locPeople', 'wikiTribes']),
 dict(id='small', name=L('ایل‌ها و گروه‌های کوچک‌تر', 'Has kiçi tireler we toparlar'),
  from_=L('گروه‌های گوناگون؛ برخی اوغوزی و برخی نه', 'Dürli toparlar; käbiri oguz, käbiri däl'),
  where=L('آخال، مری و گرداگرد', 'Ahal, Mary we töweregi'),
  text=L('در کنار ایل‌های بزرگ، منابع از گروه‌های کوچک‌تری یاد می‌کنند: آتا، یازیر (قاراداشلی)، یمره‌لی، بایات؛ و دربارهٔ پیرامون عشق‌آباد، تجن و مرو: ساریق و سالور در کنار آتا، سونلای، آنالو و مورچا (Wright). LoC می‌گوید ۵۰۰ سال پیش پنج یا شش ایل بزرگ بودند و تکه بزرگ‌ترین است و دو بخش آن (آخال و مری) جز اندکی اشتراک دارند و رقیب سیاسی و اقتصادی‌اند. یموت هم به باختری و شمالی تقسیم می‌شود.',
         'Uly tireleriň ýanynda çeşmeler has kiçi toparlary agzaýar: Ata, Ýazyr (Garadaşly), Ýemreli, Baýat; Aşgabat, Tejen we Merw töweregi barada: Saryk we Salyr bilen bilelikde Ata, Sunlaý, Analy we Murça (Wright). LoC 500 ýyl öň bäş-alty uly tiräniň bardygyny, Tekäniň iň ulusydygyny we onuň iki bölüminiň (Ahal we Mary) arasynda az umumylyk bardygyny, olaryň syýasy we ykdysady bäsdeşdigini aýdýar. Ýomut hem günbatar we demirgazyk bölünýär.'),
  parts=L(['آتا','یازیر (قاراداشلی)','یمره‌لی','بایات','سونلای','آنالو','مورچا'], ['Ata','Ýazyr (Garadaşly)','Ýemreli','Baýat','Sunlaý','Analy','Murça']),
  note=L('منبع‌های این فهرست ناهمسان‌اند (LoC، رسانه، و یک پژوهشگر قالی)؛ جزئیات هر گروه به بازبینی تخصصی نیاز دارد.', 'Bu sanawyň çeşmeleri deň däl (LoC, metbugat we halyşynas); her topar barada jikme-jiklik hünärmen gözden geçirişini talap edýär.'),
  srcs=['locPeople', 'caucasus', 'wrightRim']),
 dict(id='nonoguz', name=L('گروه‌های غیراوغوزی و تازه‌واردان', 'Oguz däl toparlar we täze gelenler'),
  from_=L('پیوسته به ایل‌ها در طول تاریخ', 'Taryhy dowam eden tireler bilen birleşen toparlar'),
  where=L('سراسر ترکمنستان', 'Ähli Türkmenistan'),
  text=L('گره قفقاز یادآوری می‌کند که گروه‌های ترک‌زبان غیراوغوزی (قیپچاق و جلایر) و مغول‌ها بعدها به ترکمن‌ها پیوستند. اصطلاح «گلمشک» تازه‌واردان و «تات» باقی‌ماندهٔ گروه‌های ایرانی‌تبار را می‌نامید. سنت سنگ‌بنای نسب اوغوزی را تأکید می‌کند، اما پژوهشگران پیش از شوروی بعضی گروه‌ها (و «اولاد») را «غیرترکمن» می‌خواندند.',
         'Kawkaz düwüni oguz däl türki dilli toparlaryň (gypçak we jelaýyr) we mongollaryň soňra türkmenlere goşulandygyny ýatladýar. «Gelmişek» täze gelenleri, «tat» bolsa eýran gelip çykyşly galyndylary aňladýardy. Däp oguz nesliniň esasyny nygtaýar, ýöne Sowetden öňki alymlar käbir toparlary («öwlatlary» hem) «türkmen däl» diýip atlandyrypdyr.'),
  parts=L(['قیپچاق','جلایر','مغول','گلمشک','تات'], ['Gypçak','Jelaýyr','Mongol','Gelmişek','Tat']),
  note=L('تفسیر این گروه‌بندی‌ها حساس است و به منابع تخصصی‌تر از رسانه نیاز دارد.', 'Bu toparlanmalaryň düşündirilişi duýgur we metbugatdan hünär çeşmelerine mätäç.'),
  srcs=['caucasus', 'sageTurkmen']),
]
SMALL_SRC = [
 ('wikiAliIli', 'ویکی‌پدیا: Ali Ili', 'Wikipedia: Ali Ili', 'https://wikipedia.com/wiki/Ali_Ili'),
 ('locPeople', 'Library of Congress (GlobalSecurity): Turkmenistan — People', 'Library of Congress (GlobalSecurity): Turkmenistan — People', 'https://www.globalsecurity.org/military/world/centralasia/turkmen-pop.htm'),
 ('wrightRim', 'R. E. Wright: The Southern Rim (دربارهٔ ایل‌های کوچک؛ سایت یک پژوهشگر قالی)', 'R. E. Wright: The Southern Rim (kiçi tireler barada; halyşynas sahypasy)', 'https://richardewright.com/0909_SuthernRim.html'),
]

def build(lang):
    X = lambda s: s.translate(FD) if lang == 'fa' else s
    g = lambda d: X(d[lang])
    out = {}
    out['poets'] = [{'icon': p['icon'], 'name': g(p['name']), 'years': g(p['years']), 'text': g(p['text'])} for p in POETS]
    out['poetsPatch'] = {k: {'years': X(v[0] if lang == 'fa' else v[1]), 'add': X(v[2] if lang == 'fa' else v[3])} for k, v in POETS_PATCH.items()}
    out['people'] = [{'icon': p['icon'], 'name': g(p['name']), 'era': g(p['era']), 'text': g(p['text'])} for p in PEOPLE]
    out['books'] = [{'icon': b['icon'], 'title': g(b['title']), 'author': g(b['author']), 'era': g(b['era']), 'text': g(b['text'])} for b in BOOKS]
    out['influences'] = [{'icon': i['icon'], 'title': g(i['title']), 'text': g(i['text'])} for i in INFL]
    out['small'] = [{'id': s['id'], 'name': g(s['name']), 'from': g(s['from_']), 'where': g(s['where']), 'text': g(s['text']),
                     'parts': s['parts'][lang], 'note': g(s['note']), 'srcs': s['srcs']} for s in SMALL]
    out['smallSources'] = [{'id': i, 't': (f if lang == 'fa' else t), 'u': u} for i, f, t, u in SMALL_SRC]
    TKMAP = [('ویکی‌پدیا:', 'Wikipediýa:'), ('(مختومقلی و ذلیلی)', '(Magtymguly we Zelili)'), ('(کربابایف، اسنووا، دوردییف)', '(Kerbabaýew, Esenowa, Durdyýew)')]
    def tr(t):
        if lang == 'fa': return t
        for a, b in TKMAP: t = t.replace(a, b)
        return t
    mk = lambda lst: [{'t': tr(t), 'u': u} for t, u in lst]
    out['foot'] = {'poets': mk(POETS_SRC), 'people': mk(PEOPLE_SRC), 'books': mk(BOOKS_SRC), 'influences': mk(INFL_SRC), 'folklore': mk(FOLK_SRC), 'tribes': mk(TRIBE_SRC)}
    return out

data = {l: build(l) for l in ('fa', 'tk')}
js = '''/* Matured content: more poets, cultural figures, works, influences and small tribes, each tied to sources
   (research notes: docs/research-notes-2026-11.md). Hand-editable. Loaded after content-extra.js. */
(function(){
  const X = %s;
  const idxOf = (arr, key, val) => arr.findIndex(x => x[key] === val);
  ['fa', 'tk'].forEach(l => {
    const D = DATA[l], e = X[l];
    D.poets.items = D.poets.items.concat(e.poets);
    D.people.items = D.people.items.concat(e.people);
    D.books.items = D.books.items.concat(e.books);
    D.influences.items = D.influences.items.concat(e.influences);
    const add = (blk, list) => { const seen = new Set((blk.footSrc || []).map(s => s.u)); blk.footSrc = (blk.footSrc || []).concat(list.filter(s => !seen.has(s.u))); };
    D.poets.footSrc = D.poets.footSrc || [];
    add(D.poets, e.foot.poets); add(D.people, e.foot.people); add(D.books, e.foot.books); add(D.influences, e.foot.influences); add(D.folklore, e.foot.folklore); add(D.tribes, e.foot.tribes);
    const gx = D.genealogy.extra;
    gx.modern = gx.modern.concat(e.small);
    gx.sources = gx.sources.concat(e.smallSources);
  });
  const fa = DATA.fa;
  Object.keys(X.fa.poetsPatch).forEach(name => {
    const i = idxOf(fa.poets.items, 'name', name);
    if(i >= 0) ['fa', 'tk'].forEach(l => { const it = DATA[l].poets.items[i], p = X[l].poetsPatch[name]; it.years = p.years; it.text += p.add; });
  });
})();
''' % json.dumps(data, ensure_ascii=False, indent=1)
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'js', 'mature-extra.js'), 'w', encoding='utf8').write(js)
print('written', len(js) // 1024, 'KB')
