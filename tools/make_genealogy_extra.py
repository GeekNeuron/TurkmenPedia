#!/usr/bin/env python3
import os
"""Builds js/genealogy-extra.js (research notes: docs/research-notes-2026-11.md)."""
import json

def L(fa, tk): return {'fa': fa, 'tk': tk}

# ------------------------------------------------------------------ 24 tribes: meanings
# id: (Rashid al-Din, Abu'l-Ghazi, modern etymology, extra "later" line)   each is L(fa, tk) or None
M = {
 'kayi': (L('استوار و پایدار','Berk we çydamly'), None,
          L('از ریشهٔ kad- «سخت، استوار» (در گویش اوغوز d به y بدل شده)؛ یعنی استوار و سخت‌جان','kad- «gaty, berk» düýbünden (oguz şiwesinde d>y): berk, gaty'),
          L('در میان ایل گوکلنِ امروزی هم گروهی به نام «قایی» دیده می‌شود (TDV).','Häzirki Göklen tiresiniň içinde hem «Gaýy» toparynyň bardygy bellenýär (TDV).')),
 'bayat': (L('دارای دولت و نعمت','Döwletli we nygmatly'), L('ثروتمند','Baý'),
           L('از bay «ثروتمند» با پسوند جمع -at: «توانگران»','baý «bay» sözi we köplük -at goşulmasy: «baýlar»'), None),
 'alkaevli': (L('هرجا روند کامیاب و آسوده‌اند','Nirä barsa-da üstünlikli we rahat'), L('همساز و سازگار (موافق)','Sazlaşykly, laýyk'),
              L('احتمالاً «اهل چادر سرخ» (al-evli)؛ تفسیرهای دیگر: «ستوده» یا «چادر گرد»','Ähtimal «gyzyl öýli»; başga düşündirişler: «öwülen», «tegelek öýli»'), None),
 'karaevli': (L('در «راه سیاه» نیکو می‌رود (تعبیر رشیدالدین)','«Gara ýolda» gowy gidýär (Reşideddiniň düşündirişi)'), L('هرجا بنشینند با چادر می‌نشینند','Nirede otursa, çadyr bilen oturýar'),
              L('«اهل چادر سیاه» (چادر نمدی یا موی بز)','«Gara öýli» (keçe ýa-da geçi gyly öý)'), None),
 'yazir': (L('مردم سرزمین‌های بسیار با تو هستند','Köp ýurduň halky seniň bilen'), L('سرور سرزمین‌ها','Ýurtlaryň aga-başy'),
           L('از yaz- «گستردن»: گسترده یا صاحب دشت پهناور','yaz- «ýaýmak»: giň ýa-da giň düzlüğiň eýesi'),
           L('در برخی فهرست‌های امروزی «یازیر» با نام «قاراداشلی» از ایل‌های کوچک ترکمن یاد شده است.','Käbir häzirki sanawlarda «Ýazyr» «Garadaşly» ady bilen kiçi türkmen tireleriniň biri hökmünde agzalýar.')),
 'doger': (L('به سوی چادر می‌آیند','Çadyra tarap gelýärler'), L('پیرامون، اطراف','Töwerek'),
           L('töger «گرد» یا «صاحب اسب پیشانی‌سفید (tüküz)»','töger «tegelek» ýa-da «tüküz (maňlaýy ak) atly»'), None),
 'dodurga': (L('سرزمین می‌گیرد و سامان می‌دهد','Ýurt alýar we tertipleýär'), L('کسی که می‌داند سرزمین را بگیرد و نگه دارد','Ýurdy almagy we saklamagy bilýän'),
             L('از tut- «گرفتن، نگه داشتن»: نگهبان، فرمانروا','tut- «almak, saklamak»: goraýjy, hökümdar'),
             L('جایگاه این ایل در فهرست‌ها یکی نیست: شانزدهم نزد کاشغری، دهم نزد رشیدالدین، هفتم نزد ابوالغازی.','Bu tiräniň sanawlardaky orny birmeňzeş däl: Kaşgarda 16-njy, Reşideddinde 10-njy, Abulgazyda 7-nji.')),
 'yaparli': (None, L('هرچه بر سر راهش بیاید ویران می‌کند','Ýolunda näme duşsa ýykýar'),
             L('احتمالاً «چاروق‌پوش» یا yapar «مشک، عطر»؛ کاشغری شاید با نام «چاروقلوغ» از آن یاد کرده','Ähtimal «çarykly» ýa-da yapar «müşk, ysly»; Kaşgar ony «Çaruklug» ady bilen agzan bolmagy ähtimal'), None),
 'afshar': (L('چابک‌دست و شکارپسند','Işde çalt we awa höwesli'), L('کارساز و زودکار','Işi çalt edýän'),
            L('از av-ış «گرد آمدن»: چابک و تیزرو','av-ış «ýygnanyşmak»: çalt, işjaň'), None),
 'kizik': (L('نیرومند، آشنا به قانون و جنگ','Güýçli, kanuny we söweşi bilýän'), L('اژدها / دلاور','Aždarha / gahryman'),
           L('«خشمگین، سرسخت»','«Gaharly, berk»'),
           L('در فهرست کاشغری نیست. به نظر سومر، «قیزیق» و «قارقین» دو ایل خَلَج بودند که به اوغوزها پیوستند.','Kaşgaryň sanawynda ýok. Sümere görä «Kyzyk» we «Karkyn» oguzlara goşulan iki halaç tiresidi.')),
 'begdili': (L('سخنش چون سخن بزرگان محترم است','Sözi ulularyň sözi ýaly hormatly'), L('سخنش حرمت دارد','Sözi hormatlanýar'),
             L('«زبانِ بگ‌ها»','«Begleriň dili»'),
             L('سنت، دودمان خوارزمشاهیان را از این ایل می‌داند. در میان گوکلن هم شاخه‌ای به نام «چاکیر-بیگدیلی» هست (TDV).','Däp Horezmşalar neslini şu tire bilen baglaýar. Göklenleriň içinde «Çakyr-Begdili» şahasy hem bar (TDV).')),
 'karkin': (L('خوراک فراوان دارد و مردم را سیر می‌کند','Iýmiti köp, halky doýurýar'), L('دارای خوراک','Iýmitli'),
            L('«فراوان، توانگر، سیر»','«Köp, baý, doýgun»'),
            L('(نک: توضیح «قیزیق») این ایل هم در فهرست کاشغری نیست و خلجی‌تبار دانسته می‌شود.','(Seret: «Kyzyk») Bu tire hem Kaşgaryň sanawynda ýok we halaç gelip çykyşly hasaplanýar.')),
 'bayindir': (L('همیشه در فراوانی','Elmydama bollukda'), L('برخوردار از نعمت','Nygmatly'),
              L('از bay «ثروتمند»: توانگر و خوش‌بخت','baý «bay» sözünden: baý we bagtly'),
              L('در میان گوکلن هم گروهی به نام «بایندیر» هست (TDV).','Göklenleriň içinde «Baýyndyr» topary hem bar (TDV).')),
 'pecenek': (L('کوشا و پرتلاش','Zähmetsöýer'), L('سازنده','Guraýjy'),
             L('از çapın- «شتافتن» یا «کوشا»','çapyn- «howlukmak» ýa-da «zähmetsöýer»'), None),
 'cavuldur': (L('به همه در کار کمک می‌کند، می‌جنگد و آرام نمی‌گیرد','Ählä kömek edýär, söweşýär, dynç almaýar'), L('آبرومند و باناموس','Abraýly, namysly'),
              L('از çav «آوازه»: مشهور و نام‌آور','çav «at-owaz»: meşhur'),
              L('ایل بزرگ «چودور» ترکمن در سنت خود را از این ایل می‌داند؛ بنا به روایت‌ها، جناح چپ سپاه اوغوزخان بوده‌اند.','Türkmeniň uly «Çowdur» tiresi däp boýunça şu tireden çykýar; rowaýata görä Oguz hanyň goşunynyň çep ganatydyr.')),
 'cepni': (L('هرجا دشمن باشد می‌جنگد','Duşman nirede bolsa söweşýär'), L('دلاور','Batyr'),
           L('از çap- «حمله کردن»: حمله‌ور، دلیر','çap- «hüjüm etmek»: hüjümçi, batyr'), None),
 'salur': (L('هرجا برود شمشیر و گرز بر می‌کشد','Nirä barsa gylyç we gürze çekýär'), L('شمشیردار','Gylyçly'),
           L('از sal- «افکندن، حمله کردن» + -gur: پیوسته حمله‌ور','sal- «zyňmak, hüjüm etmek» + -gur: üznüksiz hüjümçi'),
           L('ابوالغازی سالور را برجسته می‌کند: تکه، یموت و ارساری را از آن می‌داند. «سالور اوگورجیک آلپ» شش پسر داشت: بردی، بوقا، اوسار، کوسار، یایجی و دینگلی. «سالارهای» چین هم خود را از این ایل می‌دانند.','Abulgazy Salury ýokary tutýar: Teke, Ýomut we Ärsary şundan çykarýar. «Salyr Ogurjyk Alp»yň alty ogly bar eken: Berdi, Buka, Usar, Kusar, Ýaýjy we Dingli. Hytaýyň «Salarlary» hem özlerini şu tireden hasaplaýarlar.')),
 'eymur': (L('سپاه بسیار و ثروتمند','Goşuny köp we baý'), L('ثروتمندترین ثروتمندان','Baýlaryň iň baýy'),
           L('از edimür > eymür: «نیک و توانگر»','edimür > eýmür: «gowy we baý»'), None),
 'alayuntlu': (L('اسب‌هایش همیشه نیکو و فراوان','Atlary elmydama gowy we köp'), L('اسب‌ابلق‌دار','Alaja atly'),
               L('ala «ابلق» + yund «اسب» + -lu','ala «alaja» + yund «at» + -ly'), None),
 'yuregir': (L('کارش همیشه والاست','Işi elmydama belent'), L('نیکوکار','Ýagşylyk ediji'),
             L('از ör- «برخاستن»: سربلند و یاریگر','ör- «galmak»: belent, kömekçi'), None),
 'igdir': (L('نیک و بزرگ','Gowy we uly'), L('بزرگ','Uly'),
           L('yeg «بهتر» + -dir: برتر','yeg «has gowy» + -dir: artykmaç'), None),
 'bugduz': (L('فروتن و خدمتگزار همه','Pespäl, ählä hyzmatkär'), L('خدمتکار','Hyzmatkär'),
            L('از bük- «خم شدن»: فروتن','bük- «egilmek»: pespäl'), None),
 'yiva': (L('اسب‌هایش بلندبالا و ورزیده','Atlary boýy uzyn we çylşyrymly'), L('والامقام','Belent derejeli'),
          L('از yıv- «ستودن»: ستوده و برجسته','yıv- «öwmek»: öwülen, tapawutly'), None),
 'kinik': (L('هرجا باشد عزیز است','Nirede bolsa gadyrly'), L('عزیز','Aziz'),
           L('از kın- «آرزو کردن»: دوست‌داشتنی','kın- «arzuw etmek»: söýgüli'),
           L('کاشغری «قینیق» را نخستین ایل فهرست خود آورده، رشیدالدین آخرین. در میان گوکلن هم گروهی به نام «قیریق/قینیق» هست (TDV).','Kaşgar «Kynyk»y sanawynyň ilkinji tiresi edip, Reşideddin iň soňkusy edip getirýär. Göklenleriň içinde hem «Kyryk/Kynyk» topary bar (TDV).')),
}

# ------------------------------------------------------------------ modern Turkmen tribes
MODERN = [
 dict(id='teke', name=L('تکه (Teke)','Teke'),
      from_=L('از سالور (در روایت ابوالغازی)','Salyrdan (Abulgazy rowaýatynda)'),
      where=L('آخال و مری؛ ایران (ترکمن‌صحرا)','Ahal we Mary; Eýran (Türkmen sährasy)'),
      text=L('«تکه» در ترکمنی یعنی «بُز نر» و بزرگ‌ترین ایل ترکمن است. سنت آن‌ها را از سالور می‌داند. استوارت می‌گوید در دههٔ ۱۸۳۰ در دلتای مرغاب نزدیک مرو ساکن شدند و از آنجا تا قزل‌آروات (سردار امروز) گسترش یافتند؛ از این رو دو شاخهٔ «آخال‌تکه» و «مری‌تکه» پدید آمد. در سال ۱۸۷۹ در نبرد گوک‌تپه سپاه روس را شکست دادند، اما در ۱۸۸۰–۸۱ شکست خوردند و مرو در ۱۸۸۴ گرفته شد. گل «قوشلی» نماد قالی تکه و گل نخست پرچم ملی است. زبان معیار ترکمنی بیش از همه به گویش آخال‌تکه نزدیک است.',
              '«Teke» türkmen dilinde «teke geçi» diýmek, iň uly türkmen tiresi. Däp ony Salyrdan çykarýar. Stuarta görä 1830-njy ýyllarda Murgabyň deltasynda Merwiň golaýynda ýaşap başlap, soňra Gyzylarbada çenli ýaýrapdyrlar; şeýdip «Ahal teke» we «Mary teke» şahalary döräpdir. 1879-njy ýylda Gökdepede rus goşunyny ýeňipdirler, ýöne 1880–81-nji ýyllarda ýeňlip, Merw 1884-nji ýylda alnypdyr. «Guşly göl» teke halysynyň nyşany we milli baýdagyň ilkinji göli. Standart türkmen dili has köp Ahal teke şiwesine ýakyn.'),
      parts=L(['وکیل (Wekil)، بگ (Beg): با هم «توقتامیش»','سوچموز (Suchmuz)، بوکشی (Bukshi): با هم «اوتامیش»'],
              ['Wekil, Beg: bilelikde «Toktamyş»','Suçmuz, Bukşy: bilelikde «Otamyş»']),
      note=L('تقسیم چهارگانه را استوارت (۱۸۳۰ها) ثبت کرده؛ نام‌گذاری‌های دیگر هم در منابع هست.','Dört bölünişigi Stuart (1830-njy ýyllar) ýazga alypdyr; başga atlandyrmalar hem çeşmelerde bar.'),
      srcs=['wikiTeke','wikiTribes']),
 dict(id='yomut', name=L('یموت (Ýomut)','Ýomut'),
      from_=L('از سالور؛ سنت می‌گوید از کنیز «سالور قازان» برآمده‌اند','Salyrdan; däp «Salyr Gazanyň» gyrnagyndan diýýär'),
      where=L('بالکان و داشوغوز؛ گلستان (ایران)','Balkan we Daşoguz; Golestan (Eýran)'),
      text=L('یموت‌ها هم کوچ‌نشین‌اند، هم نیمه‌کوچ‌نشین و هم یک‌جانشین. سه شاخهٔ اصلی در سنت روسی ثبت شده: جعفربای، آق و آتابای (آق و آتابای در دههٔ ۱۹۲۰ در «آق‌آتابای» ادغام شدند). امروز سه گروه اصلی دارند: یموتِ گرگان در ایران، یموتِ بالکان (باختری) و یموتِ داشوغوز یا خیوه (بایرام‌شالی). ساختار آن‌ها پیمانی سست از طایفه‌های خودمختار بود. آخرین حاکم عملی خیوه، جنیدخان، یموت بود. «کوشت‌دپدی» در ۲۰۱۷ در فهرست یونسکو ثبت شد.',
              'Ýomutlar göçme, ýarym göçme we oturymly ýaşaýarlar. Rus däbinde üç esasy şahasy bellenýär: Jepbaý, Ak we Atabaý (Ak we Atabaý 1920-nji ýyllarda «Ak-Atabaý» bolup birleşipdir). Häzir üç esasy topary bar: Eýranyň Gurgan ýomutlary, Balkan (günbatar) ýomutlary we Daşoguz ýa-da Hywa (Baýramşaly) ýomutlary. Gurluşy özbaşdak taýpalaryň gowşak bileleşigidi. Hywanyň iň soňky hakyky hany Junaýdhan ýomutdy. «Kuştdepdi» 2017-nji ýylda ÝUNESKO sanawyna girizildi.'),
      parts=L(['جعفربای (Jafarbay)','آق‌آتابای (Ak-Atabay)','بایرام‌شالی (Bayram-Shali)'],['Jepbaý (Jafarbay)','Ak-Atabaý','Baýramşaly']),
      note=L('جزئیات شاخه‌ها در منابع یک‌دست نیست؛ مقالهٔ ویکی‌پدیا هم نیاز به بازنویسی علامت خورده است.','Şahalaryň jikme-jiklikleri çeşmelerde birmeňzeş däl; Wikipediýa makalasy hem gaýtadan ýazylmaga muhtaç diýlip bellenipdir.'),
      srcs=['wikiYomut','wikiTribes']),
 dict(id='ersari', name=L('ارساری (Ärsary)','Ärsary'),
      from_=L('در سنت از «ایچکی» و «تاشقی» اوغوز؛ ریشهٔ نام: er «مرد دلیر» + sary «زرد، روشن» (تعبیر رایج، تقریبی)','Däp boýunça oguzyň «içki» we «daşky» bölegi; ady: er «batyr» + sary «sary, açyk» (ýaýran, takmynan düşündiriş)'),
      where=L('لبپ (آمودریا)؛ افغانستان؛ پاکستان','Lebap (Amyderýa); Owganystan; Pakistan'),
      text=L('ارساری‌ها بخش مهم «اتحاد ساین‌خان» (سده‌های ۱۳ تا ۱۷) بودند و از کوه‌های بالکان تا مانگیشلاق و شمال تا رود امبا می‌زیستند. پس از خشک‌شدن شاخهٔ باختری اوزبوی در سدهٔ ۱۷ به سوی آمودریا رفتند. شاخهٔ «علی‌ایلی» در ناحیهٔ کاکا (آخال امروز) ماند. بیشتر ترکمن‌های افغانستان و پاکستان ارساری‌اند.',
              'Ärsarylar «Saýyn han» bileleşiginiň (XIII–XVII asyrlar) möhüm bölegidi, Balkan daglaryndan Mangyşlaga çenli we demirgazykda Emba derýasyna çenli ýaşapdyrlar. XVII asyrda Uzboýuň günbatar şahasy gurandan soň Amyderýa tarap göçüpdirler. «Ali-Eli» şahasy Kaka töwereginde (häzirki Ahal) galypdyr. Owganystanyň we Pakistanyň türkmenleriniň köpüsi ärsarylardyr.'),
      parts=L(['قره (Kara)','بکئول (Bekewul)','گونش (Gunesh)','اولودپه (Uludepe)','علی‌ایلی (Ali-Eli) در آخال'],['Gara','Bekewul','Güneş','Uludepe','Ali-Eli (Ahalda)']),
      note=L('در منابع نمی‌گویند تقسیم «ایچکی/تاشقی» سازمانی، نظامی یا جغرافیایی بوده.','Çeşmeler «içki/daşky» bölünişiginiň gurluş, harby ýa-da geografik bolandygyny aýtmaýar.'),
      srcs=['wikiTribes']),
 dict(id='saryk', name=L('ساریق (Saryk)','Saryk'),
      from_=L('نیای اوغوزیِ مشخصی در منابع نیست؛ ریشهٔ نام: saryγ «زرد» یا saryq «گوسفند» (دو پیشنهاد)','Çeşmelerde anyk oguz ata-babasy ýok; adynyň gelip çykyşy: saryγ «sary» ýa-da saryq «goýun» (iki teklip)'),
      where=L('بالای مرغاب (مری جنوبی: یولوتن، سرحدآباد)؛ ایران و افغانستان (بالا مرغاب، پنج‌ده)','Ýokarky Murgap (Mary günorta: Ýolöten, Serhetabat); Eýran we Owganystan (Bala Murgap, Penjdeh)'),
      text=L('در آغاز سدهٔ ۱۹ ساریق‌ها در ناحیهٔ مرو می‌زیستند، اما از ۱۸۳۰ تکه‌ها آنان را به بالادست دره مرغاب راندند؛ بالا مرغاب و پنج‌ده (پنج‌ده) نشستگاه‌های اصلی‌شان شد. در ۱۸۸۱ پس از نبرد گوک‌تپه و تشکیل ولایت فراخزر زیر کنترل روس‌ها آمدند و جمعیتشان در ۱۸۸۵ حدود ۶۵ هزار برآورد شد. «حادثهٔ پنج‌ده» (۱۸۸۵)، درگیری سپاه روسیه با نیروهای امارت افغانستان در پنج‌ده، که بحرانی روسی-بریتانیایی ساخت و مرز شمال‌باختری افغانستان را مشخص کرد، در سرزمین ساریق‌ها رخ داد. قالی ساریق سرخ‌قهوه‌ای تیره با نقش‌های ریز و خطوط باریک و گره متقارن (ترکی) است. ساریق‌ها ترکمنی (گویش ساریق) و در افغانستان دری هم می‌گویند و سنی‌اند.',
              'XIX asyryň başynda Saryklar Mary töwereginde ýaşaýardy, ýöne 1830-njy ýyldan Tekeler olary Murgap jülgesiniň ýokarsyna sürdi; Bala Murgap we Penjdeh esasy ýaşaýyş ýerleri boldy. 1881-nji ýylda Gökdepe söweşinden we Zakaspi welaýatynyň döredilmeginden soň rus gözegçiligine düşdüler we 1885-nji ýylda ilaty takmynan 65 müň diýlip çaklandy. «Penjdeh wakasy» (1885), Russiýa goşunynyň Penjdehde Owganystan emirliginiň güýçleri bilen çaknyşygy, rus-iňlis krizisini döredip, Owganystanyň demirgazyk-günbatar serhedini kesgitledi, Saryk ýerinde bolup geçdi. Saryk haly gara-gyzyl goňur, inçe ýollar bilen çekilen nagyşly we simmetrik (türk) düwünli. Saryklar türkmen (Saryk şiwesi) we Owganystanda dari dilinde hem gepleýär we sunnydyr.'),
      parts=L([],[]), note=L('جمعیت ۱۸۸۵ برآوردی از Lansdell است و رقم دقیق نیست.','1885-nji ýyl ilaty Lansdelliň çaklamasy, takyk san däl.'),
      srcs=['wikiSaryk','wikiPanjdeh','wikiTribes']),
 dict(id='cowdur', name=L('چودور (Çowdur)','Çowdur'),
      from_=L('از چاولدور؛ در سنت جناح چپ سپاه اوغوزخان','Çawuldurdan; däp boýunça Oguz hanyň çep ganaty'),
      where=L('داشوغوز؛ پیرامون خیوه؛ آمودریای میانه','Daşoguz; Hywa töweregi; orta Amyderýa'),
      text=L('به روایت ابوالغازی از سدهٔ ۱۱ در مانگیشلاق بودند. پس از یورش مغول (۱۲۲۱) اوغوزها از سیردریا به قره‌قوم و کرانهٔ خزر رانده شدند. در اوایل سدهٔ ۱۶ بخشی از اتحاد ساین‌خان بودند. وقتی قلموق‌ها وارد مانگیشلاق شدند اتحاد از هم پاشید و چودورها در جنوب‌خاوری خیوه زیر اقتدار یموت‌ها ماندند؛ گروهی هم نزدیک چارجو بر آمودریا. در خیوهٔ سدهٔ ۱۹ ایگدیر، بوزاچی، آبدال و عربچی را زیرمجموعهٔ آنان می‌شمردند. گل چودور یکی از پنج گل پرچم است.',
              'Abulgazynyň rowaýatyna görä XI asyrdan Mangyşlakda bolupdyrlar. Mongol çozuşyndan (1221) soň oguzlar Sirderýadan Garagum we Hazar kenaryna iberilipdir. XVI asyryň başynda Saýyn han bileleşiginiň bir bölegi bolupdyrlar. Galmyklar Mangyşlaga girende bileleşik dargap, Çowdurlar Hywanyň günorta-gündogarynda ýomutlaryň häkimiýeti astynda galypdyr; käbiri hem Çärjewiň golaýynda Amyderýanyň boýunda. XIX asyr Hywasynda Ygdyr, Bozaçy, Abdal we Arabaçy olaryň düzüminde sanalypdyr. Çowdur göli baýdakdaky bäş göliň biri.'),
      parts=L(['ایگدیر','بوزاچی','آبدال','عربچی'],['Ygdyr','Bozaçy','Abdal','Arabaçy']),
      note=L('گروه‌بندی سدهٔ ۱۹ از Poullada ۲۰۱۸ نقل شده.','XIX asyr toparlanmasy Poullada 2018-den getirilýär.'),
      srcs=['wikiTribes']),
 dict(id='goklen', name=L('گوکلن (Göklen)','Göklen'),
      from_=L('گروه‌های اوغوزی درونش: قینیق، بایندیر، بیگدیلی، قایی','Içindäki oguz toparlary: Kynyk, Baýyndyr, Begdili, Gaýy'),
      where=L('گرگان و ترکمن‌صحرا (ایران)؛ قره‌قلعه (ترکمنستان)؛ خیوه (ازبکستان)','Gurgan we Türkmen sährasy (Eýran); Garagala (Türkmenistan); Hywa (Özbegistan)'),
      text=L('نام را معمولاً «سرزمین گوک‌ها» می‌خوانند (پسوند -len در نام ایل‌های شمال ایران هم هست)؛ توضیح قطعی ندارد. پس از سدهٔ ۱۶ و کم‌آبی، میان رودهای اترک و گرگان ساکن شدند. چون زودتر یک‌جانشین شدند، بسیاری در مدرسه‌های ایران و ترکستان درس خواندند و ادبیات پربار شد: مختومقلی از تیرهٔ «گرکز» گوکلن بود؛ پدرش دولت‌محمد آزادی، برادرزاده و شاگردش ذلیلی، و سیدی (ارساری‌تبار، پرورده در میان گوکلن) هم از همین فضایند. برآورد شمار گوکلن‌ها حدود ۳۰۰ هزار است (برآورد TDV، ۲۰۲۰).',
              'Adyny köplenç «Gökleriň mekany» diýip okaýarlar (-len goşulmasy Eýranyň demirgazygyndaky tire atlarynda hem bar); takyk düşündiriş ýok. XVI asyrdan soň suw ýetmezçiligi sebäpli Etrek bilen Gurgan derýalarynyň aralygynda ýerleşipdirler. Has ir oturymly bolany üçin köpüsi Eýranyň we Türküstanyň medreselerinde okapdyr we edebiýat ösüpdir: Magtymguly Göklenleriň «Gerkez» tiresindendi; kakasy Döwletmämmet Azady, ýegeni we şägirdi Zelili, Ärsary gelip çykyşly, ýöne Göklenleriň arasynda ýetişen Seýdi hem şu gurşawdan. Göklenleriň sanyny takmynan 300 müň diýip çaklaýarlar (TDV çaklamasy, 2020).'),
      parts=L(['کیریق/قینیق','بایندیر','ینکاک','سنکریک','گرکز (Gerkez)','چاکیر-بیگدیلی','عرب','آی‌درویش','قره‌بالکان','ارککلی','قایی','شیخ‌خواجه'],
              ['Kyryk/Kynyk','Baýyndyr','Ýenkak','Senkrik','Gerkez','Çakyr-Begdili','Arap','Aý-Derwüş','Gara-Balkan','Erkekli','Gaýy','Şeýh-Hoja']),
      note=L('فهرست زیرشاخه‌ها را TDV از هنچه، وامبری و İA آورده؛ املای ترکمنی آن‌ها در منابع یک‌دست نیست.','Alt toparlar sanawyny TDV Haentzsche, Vámbéry we İA-dan getirýär; olaryň türkmençe ýazylyşy çeşmelerde birmeňzeş däl.'),
      srcs=['tdvGoklen','iranicaGuklan']),
 dict(id='salyr', name=L('سالور / سالیر (Salyr)','Salyr (Salor)'),
      from_=L('همان ایل اوغوزی سالور (نیای تکه، یموت، ارساری در روایت ابوالغازی)','Oguzyň Salur tiresi (Abulgazynyň rowaýatynda Teke, Ýomut, Ärsarynyň ata-babasy)'),
      where=L('مرو، سرخس (آخال و مری)؛ پراکنده در ترکیه، افغانستان، ازبکستان و چین','Mary, Sarahs (Ahal we Mary); Türkiýede, Owganystanda, Özbegistanda we Hytaýda ýaýran'),
      text=L('سالور از معدود ایل‌های اصلی اوغوز است که تا امروز باقی مانده. پیمان «سالور» در مانگیشلاق و دامنهٔ بالکان بود و در اواخر سدهٔ ۱۷ فروپاشید؛ سه ایل ارشد به خاور و سپس به جنوب رفتند: خوارزم، آمودریای میانه، آخال و کپه‌داغ، و رود مرغاب. استوارت در ۱۸۸۱ از «۵۰۰۰ چادر سالور» در میان مری‌تکه یاد می‌کند. ایل سالور پیش از دورهٔ نو بر اثر شکست نظامی ضعیف شد. «سالارهای» چین (حدود ۱۶۵ هزار نفر در سرشماری ۲۰۲۰) خود را از این ایل می‌دانند.',
              'Salyr oguzyň häzire çenli saklanan seýrek esasy tireleriniň biri. «Salyr» bileleşigi Mangyşlakda we Balkan eteklerinde bolup, XVII asyryň ahyrynda dargapdyr; üç uly tire gündogara we soňra günorta göçüpdir: Horezme, orta Amyderýa, Ahala we Köpetdaga, Murgap derýasyna. Stuart 1881-nji ýylda Mary tekeleriň arasynda «5000 Salyr çadyry» barada ýazýar. Salyr tiresi häzirki zamandan öň harby ýeňlişden soň gowşapdyr. Hytaýyň «Salarlary» (2020-nji ýyl ilat ýazuwynda takmynan 165 müň adam) özlerini şu tireden hasaplaýarlar.'),
      parts=L([],[]), note=L('پیوند سالارهای چین با سالور سنت و زبان‌شناسی را شامل می‌شود، اما پژوهشگران خاستگاه آن‌ها را «نامطمئن» می‌دانند.','Hytaý Salarlarynyň Salyr bilen baglanyşygy däbe we dilçilige daýanýar, ýöne alymlar olaryň gelip çykyşyny «anyk däl» diýip hasaplaýarlar.'),
      srcs=['countrystudies2','wikiSalar','wikiTeke']),
]
# fix accidental Latin look-alikes typed above (Cyrillic-free check happens in tests)

OVLAT = dict(
 title=L('اولاد (دودمان‌های مقدس)','Öwlatlar (mukaddes nesiller)'),
 intro=L('در کنار ایل‌هایی که نسب خود را به اوغوزخان می‌رسانند، در جامعهٔ ترکمن گروه‌هایی هستند که نسبشان را به یکی از چهار خلیفهٔ نخست می‌رسانند و از راه مبلغان صوفی به آن می‌پیوندند. به آن‌ها «اولاد» (öwlat) می‌گویند. پژوهشگران آن را شکل نو شدهٔ کیش نیاکان آمیخته با تصوف می‌دانند.',
         'Oguz handan gelip çykýan tireleriň ýanynda türkmen jemgyýetinde nesil şejeresini dört halypanyň birine ýetirýän toparlar bar; sopy wagyzçylary arkaly baglanyşýarlar. Olara «öwlat» diýilýär. Alymlar muny sopuçylyk bilen garyşan ata-babalar kultunyň täzelenen görnüşi hasaplaýarlar.'),
 order=L('سنتاً شش اولاد، به ترتیب قداست و قدرت: خواجه، سید، شیخ، مختوم، آتا، مجاور.','Däp boýunça alty öwlat, mukaddeslik we güýç tertibinde: Hoja, Seýit, Şyh, Magtym, Ata, Mýuwür.'),
 text=L('اولادها میان همهٔ ایل‌ها پراکنده‌اند، برکت می‌دهند، در جشن‌ها و مراسم زندگی حاضر می‌شوند و میان طایفه‌ها و ایل‌ها میانجی‌اند. بنا به یکی از منابع کاملاً درون‌همسرند. شمار آن‌ها را برخی منابع پنج و برخی شش می‌گویند. آرامگاه بنیان‌گذاران اولادها (مانند مختوم اعظم، دانا آتا، قیزلی آتا و پاکیر شیخ) از زیارتگاه‌های شناخته‌شده است.',
        'Öwlatlar ähli tireleriň arasynda ýaýran, ak pata berýär, toýlara we durmuş däp-dessurlaryna gatnaşýar, taýpalaryň we tireleriň arasynda araçy bolýar. Bir çeşmä görä doly içkigudalykdyr. Sanyny käbir çeşmeler bäş, käbirleri alty diýýär. Öwlatlaryň esaslandyryjylarynyň gabyrlary (Magtym Meazzem, Dana-ata, Gyzly-ata, Pakyr-şyh ýaly) tanalýan ziýaratgähler.'),
 note=L('«اولاد» از نظر نسب با فهرست ۲۴ ایل اوغوز جداست؛ در منابع پیشاشوروی گاه آن‌ها را «غیرترکمن» می‌نامیدند.','«Öwlat» nesil taýdan 24 oguz tiresiniň sanawyndan aýratyn; Sowetden öňki çeşmelerde käwagt olara «türkmen däl» diýilipdir.'),
 srcs=['sageTurkmen','countryReligion','kinship'],
)

STRUCT = dict(
 title=L('ساختار ایل: از «خلق» تا «چادر»','Tire gurluşy: «halk»dan «öý»e çenli'),
 intro=L('جامعهٔ ترکمن در سنت یک نظام پاره‌پاره (segmentary) از گروه‌های سرزمینی بود: نسب از پدر می‌رسد، هر ایل به گروه‌های کوچک‌تر و نزدیک‌تر تقسیم می‌شود و شجره‌ها سینه‌به‌سینه نگه داشته می‌شد. دو غریبه وقتی به هم می‌رسند نخست می‌پرسند از کدام تیره‌اند.',
         'Türkmen jemgyýeti däp boýunça territorial nesil toparlarynyň bölek-bölek ulgamydy: nesil kakadan gelýär, her tire kiçi we ýakyn toparlara bölünýär we şejereler agzaky saklanýardy. Iki nätanyş duşanda ilki haýsy tiredendigini soraşýarlar.'),
 terms=L(['خلق (halk)','ایل (il)','تایفه (taýpa)','اورگ (urug)','کوک (kök)','کوم/قبیله (kowum, kabile)','آیماق (aýmak/oýmak)','اوبه (oba)','بولوک (bölük)','کوده، ددسه، لاقام، توپ، بیراته، توپار، تیره (küde, desse, lakam, top, birata, topar, tire)'],
         ['halk','il','taýpa','urug','kök','kowum, kabile','aýmak/oýmak','oba','bölük','küde, desse, lakam, top, birata, topar, tire']),
 text=L('این واژه‌ها هم‌پوشان‌اند و ترتیب یک‌دست و قطعی ندارند. سرکرده را «سردار» می‌گفتند و بزرگان را «آق‌ساقال» (ریش‌سفید) که بیشتر با اجماع برگزیده می‌شدند و دربارهٔ آب، زمین و جنگ تصمیم می‌گرفتند. حقوق عرفی نانوشته (تؤره/عادت) داور بود. از رهبران ستوده‌شده می‌توان آبا سردار، کیمیر کور، نوربردی خان، گوشوت خان و دیکمه سردار را نام برد. در دورهٔ شوروی هویت ایلی کم‌رنگ شد اما هنوز در زندگی اجتماعی اهمیت دارد.',
        'Bu sözler biri-birine geçýär we birmeňzeş, kesgitli tertibi ýok. Baştutana «serdar», ululara «aksakal» (ak sakgally) diýilýärdi, olar köplenç ylalaşyk bilen saýlanýardy we suw, ýer we söweş barada karar berýärdi. Ýazylmadyk adat hukugy (töre/adat) hakamdy. Öwülýän ýolbaşçylardan Aba Serdar, Keýmir Kör, Nurberdi han, Gowşut han we Dykma Serdar agzalýar. Sowet döwründe tire kimligi gowşady, ýöne jemgyýetçilik durmuşynda henizem möhüm.'),
 srcs=['kinship','wikiTribes'],
)

DYN = dict(
 title=L('خاندان‌های بزرگ و ایل‌های اوغوزی‌شان (به روایت سنت)','Uly neslehler we olaryň oguz tireleri (däp boýunça)'),
 intro=L('سنت تاریخی چند دودمان بزرگ را به ایل‌های کهن اوغوز می‌رساند. این پیوندها باور و روایت‌اند؛ پژوهشگران برای بیشترشان (به‌ویژه قایی و عثمانی) دلیل قطعی نمی‌شناسند.',
         'Taryhy däp birnäçe uly neslini gadymy oguz tireleri bilen baglaýar. Bu baglanyşyklar ynam we rowaýatdyr; alymlar olaryň köpüsi (aýratyn Gaýy we Osmanly) üçin kesgitli delil tapmaýarlar.'),
 rows=[
  dict(dyn=L('سلجوقیان','Seljuklar'), tribe=L('قینیق','Kynyk'), era=L('سدهٔ ۱۱ م','XI asyr')),
  dict(dyn=L('خوارزمشاهیان','Horezmşalar'), tribe=L('بیگدیلی','Begdili'), era=L('سده‌های ۱۱–۱۳ م','XI–XIII asyrlar')),
  dict(dyn=L('قره‌قویونلو','Garagoýunlylar'), tribe=L('ییوا','Ýywa'), era=L('سده‌های ۱۴–۱۵ م','XIV–XV asyrlar')),
  dict(dyn=L('آق‌قویونلو','Akgoýunlylar'), tribe=L('بایندیر','Baýyndyr'), era=L('سده‌های ۱۴–۱۶ م','XIV–XVI asyrlar')),
  dict(dyn=L('عثمانیان','Osmanlylar'), tribe=L('قایی (مورد بحث)','Gaýy (jedelli)'), era=L('سده‌های ۱۳–۲۰ م','XIII–XX asyrlar')),
  dict(dyn=L('افشاریه','Afşarlar'), tribe=L('آفشار','Afşar'), era=L('سدهٔ ۱۸ م','XVIII asyr')),
 ],
 colLabels=L(['خاندان','ایل اوغوزی','دوره'],['Nesil','Oguz tiresi','Döwür']),
 srcs=['wikiTribes','wikiShajara'],
)

COMPARE = dict(
 title=L('سه فهرست، سه روایت','Üç sanaw, üç rowaýat'),
 text=L('محمود کاشغری (سدهٔ ۱۱) ۲۲ ایل اوغوز را می‌شمارد؛ «قیزیق» و «قارقین» در فهرست او نیستند و به نظر سومر دو ایل خلج بودند که بعدها به اوغوزها پیوستند. رشیدالدین فضل‌الله (سدهٔ ۱۴) و یازیجی‌اوغلو (سدهٔ ۱۵) فهرست ۲۴تایی با معنای نام‌ها آورده‌اند. ابوالغازی (سدهٔ ۱۷) «شجرهٔ ترکمن» را در ۱۶۵۹ (در برخی منابع ۱۶۶۱) به درخواست ملاها، شیخ‌ها و بگ‌های ترکمن نوشت، چون اوغوزنامه‌های پیشین را پر از «خطا و اختلاف» می‌دانستند. او تقریباً از روایت اسلامی‌شده و مغولی‌شدهٔ رشیدالدین پیروی می‌کند. هر ایل در این سنت گاه‌نشانهٔ (تمغا) و چراگاه خود را داشت.',
        'Mahmyt Kaşgarly (XI asyr) 22 oguz tiresini sanaýar; «Kyzyk» we «Karkyn» onuň sanawynda ýok we Sümere görä soňra oguzlara goşulan iki halaç tiresidi. Reşideddin Fazlullah (XIV asyr) we Ýazyjyoglu (XV asyr) atlaryň manylary bilen 24 tireli sanaw getirýärler. Abulgazy (XVII asyr) «Şejereýi terakime»ni 1659-njy ýylda (käbir çeşmelerde 1661) türkmen mollalarynyň, şeýhleriniň we begleriniň haýyşy bilen ýazypdyr, sebäbi öňki Oguznamalary «ýalňyşlyk we tapawut» doly hasaplapdyrlar. Ol köplenç Reşiddiniň yslamlaşdyrylan we mongollaşdyrylan rowaýatyna eýerýär. Bu däpde her tiräniň öz tagmasy we öri bardy.'),
 srcs=['durmus2025','wikiShajara'],
)

SRC = [
 ('durmus2025','Durmuş (۲۰۲۵): معنای نام ایل‌های اوغوز — Pamukkale Üniv. SBE Dergisi','Durmuş (2025): Oguz tire atlarynyň manylary — Pamukkale Üniv. SBE Dergisi','https://dergipark.org.tr/tr/download/journal-file/34254'),
 ('wikiTribes','ویکی‌پدیا: Turkmen tribes','Wikipedia: Turkmen tribes','https://en.wikipedia.org/wiki/Turkmen_tribes'),
 ('wikiTeke','ویکی‌پدیا: Teke (tribe)','Wikipedia: Teke (tribe)','https://en.wikipedia.org/wiki/Teke_(tribe)'),
 ('wikiYomut','ویکی‌پدیا: Yomut','Wikipedia: Yomut','https://en.wikipedia.org/wiki/Yomut'),
 ('wikiShajara','ویکی‌پدیا: Shajara-i Tarākima','Wikipedia: Shajara-i Tarākima','https://en.wikipedia.org/wiki/Shajara-i_Tar%C4%81kima'),
 ('tdvGoklen','TDV İslâm Ansiklopedisi: Göklen (M. Aydın)','TDV İslâm Ansiklopedisi: Göklen (M. Aydın)','https://islamansiklopedisi.org.tr/goklen'),
 ('iranicaGuklan','Encyclopaedia Iranica: Guklān','Encyclopaedia Iranica: Guklān','https://www.iranicaonline.org/articles/guklan/'),
 ('countrystudies2','Library of Congress Country Studies: Formation of the Turkmen Nation','Library of Congress Country Studies: Formation of the Turkmen Nation','https://countrystudies.us/turkmenistan/2.htm'),
 ('countryReligion','Library of Congress Country Studies: Religion (Turkmenistan)','Library of Congress Country Studies: Religion (Turkmenistan)','https://countrystudies.us/turkmenistan/14.htm'),
 ('sageTurkmen','SAGE Encyclopedia of Global Religion: Turkmenistan','SAGE Encyclopedia of Global Religion: Turkmenistan','https://sk.sagepub.com/ency/edvol/embed/globalreligion/chpt/turkmenistan'),
 ('kinship','Countries and Their Cultures: Turkmens — Kinship','Countries and Their Cultures: Turkmens — Kinship','https://www.everyculture.com/Russia-Eurasia-China/Turkmens-Kinship.html'),
 ('wikiSaryk','ویکی‌پدیا: Saryk','Wikipedia: Saryk','https://en.wikipedia.org/wiki/Saryk'),
 ('wikiPanjdeh','ویکی‌پدیا: Panjdeh incident','Wikipedia: Panjdeh incident','https://en.wikipedia.org/wiki/Panjdeh_incident'),
 ('wikiSalar','ویکی‌پدیا: Salar people','Wikipedia: Salar people','https://en.wikipedia.org/wiki/Salar_people'),
 ('caucasus','Caucasian Knot: Turkmen (مرور کلی؛ ثانویه)','Caucasian Knot: Turkmen (umumy syn; ikinji derejeli)','https://www.caucasianknot.org/articles/536'),
]

def build(lang):
    out = {'modern': [], 'tribesDetail': {}}
    for tid, (r, a, m, later) in M.items():
        lines = []
        if r: lines.append([ {'fa':'رشیدالدین','tk':'Reşideddin'}[lang], r[lang]])
        if a: lines.append([ {'fa':'ابوالغازی','tk':'Abulgazy'}[lang], a[lang]])
        if m: lines.append([ {'fa':'ریشه‌شناسی امروزی','tk':'Häzirki etimologiýa'}[lang], m[lang]])
        out['tribesDetail'][tid] = {'meaning': lines, 'later': later[lang] if later else ''}
    for t in MODERN:
        out['modern'].append({'id': t['id'], 'name': t['name'][lang], 'from': t['from_'][lang], 'where': t['where'][lang], 'text': t['text'][lang],
                              'parts': t['parts'][lang], 'note': t['note'][lang], 'srcs': t['srcs']})
    out['ovlat'] = {k: (v[lang] if isinstance(v, dict) and 'fa' in v else v) for k, v in OVLAT.items()}
    out['structure'] = {k: (v[lang] if isinstance(v, dict) and 'fa' in v else v) for k, v in STRUCT.items()}
    out['compare'] = {k: (v[lang] if isinstance(v, dict) and 'fa' in v else v) for k, v in COMPARE.items()}
    out['dynasties'] = {'title': DYN['title'][lang], 'intro': DYN['intro'][lang], 'cols': DYN['colLabels'][lang], 'srcs': DYN['srcs'],
                        'rows': [{'dyn': r['dyn'][lang], 'tribe': r['tribe'][lang], 'era': r['era'][lang]} for r in DYN['rows']]}
    out['sources'] = [{'id': i, 't': (fa if lang == 'fa' else tk), 'u': u} for i, fa, tk, u in SRC]
    out['ui'] = {
      'fa': dict(modernTitle='ایل‌های امروزی ترکمن و شاخه‌هایشان', modernIntro='این ایل‌ها از ایل‌های اوغوزی بالا برآمده‌اند یا با آن‌ها درآمیخته‌اند. هر کارت خلاصه‌ای از منابع است؛ مرزها و شمار شاخه‌ها در منابع گوناگون یکی نیست.',
                 from_='نیا / سنت', where='سرزمین', parts='شاخه‌ها و بخش‌ها', meaningTitle='معنای نام (به روایت منابع)', laterTitle='در تاریخ و امروز', srcTitle='منابع', approx='معنی‌ها تفسیرهای قدیمی (گاه عامیانه) هستند؛ ریشه‌شناسی علمی امروز ممکن است فرق کند.'),
      'tk': dict(modernTitle='Häzirki türkmen tireleri we olaryň şahalary', modernIntro='Bu tireler ýokardaky oguz tirelerinden döräpdir ýa-da olar bilen garyşypdyr. Her kart çeşmeleriň gysgaça mazmuny; serhetler we şahalaryň sany çeşmelerde birmeňzeş däl.',
                 from_='Ata-baba / däp', where='Mekan', parts='Şahalar we bölümler', meaningTitle='Adyň manysy (çeşmelere görä)', laterTitle='Taryhda we şu gün', srcTitle='Çeşmeler', approx='Manylar gadymy (käwagt halk) düşündirişleridir; häzirki ylmy etimologiýa tapawutly bolup biler.'),
    }[lang]
    return out

data = {l: build(l) for l in ('fa', 'tk')}
js = '''/* Genealogy extras: meanings of the 24 Oghuz tribe names, modern Turkmen tribes, holy lineages (öwlat),
   tribal structure, dynasties and sources. Research notes: see README (Update 13). Hand-editable.
   Loaded after genealogy.js and data-new.js. */
(function(){
  const EXTRA = %s;
  ['fa', 'tk'].forEach(l => { DATA[l].genealogy.extra = EXTRA[l]; });
  const base = GENEALOGY.build;
  GENEALOGY.build = function(lang){
    const g = base(lang), det = EXTRA[lang].tribesDetail;
    g.sons.forEach(s => s.tribes.forEach(t => { const d = det[t.id]; if(d){ t.meaning = d.meaning; t.later = d.later; } }));
    return g;
  };
})();
''' % json.dumps(data, ensure_ascii=False, indent=1)
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'js', 'genealogy-extra.js'), 'w', encoding='utf8').write(js)
print('written', len(js) // 1024, 'KB; tribes with meaning:', len(M), '; modern tribes:', len(MODERN))
