#!/usr/bin/env python3
import os
"""Builds js/quiz-extra.js: 37 new questions (all answers checked against sources in docs/research-notes-2026-11.md),
categories for all questions, and UI strings for the new quiz modes."""
import json
FD = str.maketrans('0123456789', '۰۱۲۳۴۵۶۷۸۹')

SRC = {
 'mak':   ('ویکی‌پدیا: Magtymguly Pyragy', 'Wikipediýa: Magtymguly Pyragy', 'https://en.wikipedia.org/wiki/Magtymguly_Pyragy'),
 'iran':  ('دانشنامهٔ ایرانیکا: پوشاک و زیور ترکمن', 'Iranica: Türkmen egin-eşigi we şaý-sepi', 'https://www.iranicaonline.org/articles/clothing-xxvi/'),
 'kara':  ('ویکی‌پدیا: Karakum Desert', 'Wikipediýa: Garagum çöli', 'https://en.wikipedia.org/wiki/Karakum_Desert'),
 'forrel':('ویکی‌پدیا: Foreign relations of Turkmenistan', 'Wikipediýa: Türkmenistanyň daşary gatnaşyklary', 'https://en.wikipedia.org/wiki/Foreign_relations_of_Turkmenistan'),
 'oghuz': ('ویکی‌پدیا: Oghuz Khagan', 'Wikipediýa: Oguz han', 'https://en.wikipedia.org/wiki/Oghuz_Khagan'),
 'ovez':  ('ویکی‌پدیا: Danatar Ovezov', 'Wikipediýa: Danatar Öwezow', 'https://en.wikipedia.org/wiki/Danatar_Ovezov'),
 'akhalt':('ویکی‌پدیا: Treaty of Akhal', 'Wikipediýa: Ahal şertnamasy', 'https://en.wikipedia.org/wiki/Treaty_of_Akhal'),
 'dur':   ('Durmuş (2025): معنای نام ایل‌های اوغوز', 'Durmuş (2025): Oguz tire atlarynyň manylary', 'https://dergipark.org.tr/tr/download/journal-file/34254'),
 'shaj':  ('ویکی‌پدیا: Shajara-i Tarākima', 'Wikipedia: Shajara-i Tarākima', 'https://en.wikipedia.org/wiki/Shajara-i_Tar%C4%81kima'),
 'tribes':('ویکی‌پدیا: Turkmen tribes', 'Wikipedia: Turkmen tribes', 'https://en.wikipedia.org/wiki/Turkmen_tribes'),
 'teke':  ('ویکی‌پدیا: Teke (tribe)', 'Wikipedia: Teke (tribe)', 'https://en.wikipedia.org/wiki/Teke_(tribe)'),
 'yomut': ('ویکی‌پدیا: Yomut', 'Wikipedia: Yomut', 'https://en.wikipedia.org/wiki/Yomut'),
 'lang':  ('ویکی‌پدیا: Turkmen language', 'Wikipedia: Turkmen language', 'https://en.wikipedia.org/wiki/Turkmen_language'),
 'gram':  ('ویکی‌پدیا: Turkmen grammar', 'Wikipedia: Turkmen grammar', 'https://en.wikipedia.org/wiki/Turkmen_grammar'),
 'tdv':   ('TDV İslâm Ansiklopedisi: Göklen', 'TDV İslâm Ansiklopedisi: Göklen', 'https://islamansiklopedisi.org.tr/goklen'),
 'cyber': ('Cyberleninka: Magtymguly Firagi', 'Cyberleninka: Magtymguly Firagi', 'https://cyberleninka.ru/article/n/improving-students-communication-skills-through-magtymguly-firagi-s-poems'),
 'sage':  ('SAGE Encyclopedia of Global Religion: Turkmenistan', 'SAGE Encyclopedia of Global Religion: Turkmenistan', 'https://sk.sagepub.com/ency/edvol/embed/globalreligion/chpt/turkmenistan'),
 'sary':  ('ویکی‌پدیا: Saryk', 'Wikipedia: Saryk', 'https://en.wikipedia.org/wiki/Saryk'),
 'panj':  ('ویکی‌پدیا: Panjdeh incident', 'Wikipedia: Panjdeh incident', 'https://en.wikipedia.org/wiki/Panjdeh_incident'),
 'weli':  ('ویکی‌پدیا: Weli Muhadow', 'Wikipedia: Weli Muhadow', 'https://en.wikipedia.org/wiki/Weli_Muhadow'),
 'akh':   ('ویکی‌پدیا: Akhal-Teke', 'Wikipedia: Akhal-Teke', 'https://en.wikipedia.org/wiki/Akhal-Teke'),
 'ht':    ('History Today: Golden Horses, Red Square', 'History Today: Golden Horses, Red Square', 'https://www.historytoday.com/archive/history-matters/golden-horses-red-square'),
 'flag':  ('ویکی‌پدیا: Flag of Turkmenistan', 'Wikipedia: Flag of Turkmenistan', 'https://en.wikipedia.org/wiki/Flag_of_Turkmenistan'),
 'rug':   ('ویکی‌پدیا: Turkmen rug', 'Wikipedia: Turkmen rug', 'https://en.wikipedia.org/wiki/Turkmen_rug'),
 'unrug': ('یونسکو: Traditional Turkmen carpet making art', 'UNESCO: Traditional Turkmen carpet making art', 'https://ich.unesco.org/en/RL/traditional-turkmen-carpet-making-art-in-turkmenistan-01486'),
 'arts':  ('Google Arts & Culture: Teke jewelry', 'Google Arts & Culture: Teke jewelry', 'https://artsandculture.google.com/story/KwUxe92Wo4C4oA'),
 'cuis':  ('ویکی‌پدیا: Turkmen cuisine', 'Wikipedia: Turkmen cuisine', 'https://en.wikipedia.org/wiki/Turkmen_cuisine'),
 'salar': ('ویکی‌پدیا: Salar people', 'Wikipedia: Salar people', 'https://en.wikipedia.org/wiki/Salar_people'),
 'eki':   ('کتاب سرخ EKI: Trukhmens', 'EKI Gyzyl kitaby: Trukhmens', 'https://www.eki.ee/books/redbook/trukhmens.shtml'),
 'tkm':   ('ویکی‌پدیا: Turkmens', 'Wikipedia: Turkmens', 'https://en.wikipedia.org/wiki/Turkmens'),
 'uz':    ('IWPR: ترکمن‌های ازبکستان', 'IWPR: Özbegistanyň türkmenleri', 'https://iwpr.net/ezwgy857'),
 'ist':   ('IWPR: ترکمن‌های افغان‌تبار در استانبول', 'IWPR: Stambuldaky owgan türkmenleri', 'https://iwpr.net/tysbemd3'),
 'whs':   ('ویکی‌پدیا: میراث جهانی در ترکمنستان', 'Wikipedia: World Heritage Sites in Turkmenistan', 'https://en.wikipedia.org/wiki/List_of_World_Heritage_Sites_in_Turkmenistan'),
 'dede':  ('ویکی‌پدیا: Book of Dede Korkut', 'Wikipedia: Book of Dede Korkut', 'https://en.wikipedia.org/wiki/Book_of_Dede_Korkut'),
 'wmc':   ('World Music Central: Oghlan Bakhshi', 'World Music Central: Oghlan Bakhshi', 'https://worldmusiccentral.org/?p=94494'),
 'ez':    ('ویکی‌پدیا: Turkmen literature', 'Wikipedia: Turkmen literature', 'https://en.wikipedia.org/wiki/Turkmen_literature'),
}

# (cat, src, correct, [fa question, fa options, fa explain], [tk question, tk options, tk explain])
Q = [
 ('tribe','shaj',1,
  ['«شجرهٔ ترکمن» (Shajara-i Tarākima) ابوالغازی، به نوشتهٔ بیشتر منابع، در چه سالی به پایان رسید؟',['۱۵۵۹','۱۶۵۹','۱۷۵۹','۱۸۵۹'],'در بیشتر منابع ۱۶۵۹ آمده (برخی ۱۶۶۱). ابوالغازی آن را به درخواست ملاها، شیخ‌ها و بگ‌های ترکمن نوشت.'],
  ['Abulgazynyň «Şejereýi terakime» eseri köp çeşmä görä haýsy ýylda tamamlandy?',['1559','1659','1759','1859'],'Köp çeşmede 1659 (käbirinde 1661). Abulgazy ony türkmen mollalarynyň, şeýhleriniň we begleriniň haýyşy bilen ýazdy.']),
 ('tribe','dur',1,
  ['محمود کاشغری در «دیوان لغات الترک» چند ایل اوغوز را برمی‌شمارد؟',['۱۲','۲۲','۲۴','۴۰'],'کاشغری (سدهٔ ۱۱) ۲۲ ایل را می‌شمارد؛ رشیدالدین و ابوالغازی فهرست ۲۴تایی دارند.'],
  ['Mahmyt Kaşgarly «Diwanü lugat it-türk»de nähili Oguz tiresini sanaýar?',['12','22','24','40'],'Kaşgarly (XI asyr) 22 tireni sanaýar; Reşideddin we Abulgazynyň sanawy 24 tireli.']),
 ('tribe','dur',0,
  ['کدام دو ایل در فهرست کاشغری نیستند و به نظر سومر دو ایل خلج بودند که به اوغوزها پیوستند؟',['قیزیق و قارقین','سالور و قینیق','قایی و بایات','آفشار و ییوا'],'«قیزیق» و «قارقین» در فهرست کاشغری نیستند.'],
  ['Haýsy iki tire Kaşgarlynyň sanawynda ýok we Sümere görä oguzlara goşulan halaç tiresi bolupdyr?',['Kyzyk we Karkyn','Salyr we Kynyk','Gaýy we Baýat','Afşar we Ýywa'],'«Kyzyk» we «Karkyn» Kaşgarlynyň sanawynda ýok.']),
 ('tribe','dur',3,
  ['به روایت ابوالغازی، نام ایل «سالور» یعنی چه؟',['اسب‌دار','چادرنشین','خدمتگزار','شمشیردار'],'ابوالغازی «سالور» را «شمشیردار» معنا می‌کند؛ رشیدالدین می‌گوید هرجا برود شمشیر و گرز بر می‌کشد.'],
  ['Abulgazynyň rowaýatyna görä «Salyr» tiresiniň ady nämäni aňladýar?',['Atly','Çadyrly','Hyzmatkär','Gylyçly'],'Abulgazy «Salyr»y «gylyçly» diýip düşündirýär; Reşideddin nirä barsa gylyç we gürze çekýär diýýär.']),
 ('tribe','shaj',2,
  ['ابوالغازی کدام سه ایل امروزی ترکمن را از سالور می‌داند؟',['چودور، گوکلن، ساریق','تکه، چودور، ساریق','تکه، یموت، ارساری','یموت، گوکلن، چودور'],'در روایت ابوالغازی تکه، یموت و ارساری از سالور برآمده‌اند.'],
  ['Abulgazy haýsy üç häzirki türkmen tiresini Salyrdan çykarýar?',['Çowdur, Göklen, Saryk','Teke, Çowdur, Saryk','Teke, Ýomut, Ärsary','Ýomut, Göklen, Çowdur'],'Abulgazynyň rowaýatynda Teke, Ýomut we Ärsary Salyrdan çykýar.']),
 ('tribe','teke',1,
  ['«تکه» در زبان ترکمنی یعنی چه؟',['اسب','بُز نر','عقاب','گرگ'],'«تکه» در ترکمنی «بُز نر» است؛ استوارت می‌گوید بزِ کوهی یا بُز پیرِ پیشرو گله.'],
  ['Türkmen dilinde «teke» näme diýmek?',['At','Teke geçi','Bürgüt','Möjek'],'«Teke» türkmen dilinde «erkek geçi»; Stuart ony «dag geçisi» ýa-da sürini ugrukdyrýan garry teke diýip düşündirýär.']),
 ('tribe','tdv',3,
  ['مختومقلی از کدام تیرهٔ ایل گوکلن بود؟',['قایی','بایات','سالور','گرکز'],'مختومقلی از تیرهٔ «گرکز» ایل گوکلن بود (TDV).'],
  ['Magtymguly Göklen tiresiniň haýsy taýpasyndandy?',['Gaýy','Baýat','Salyr','Gerkez'],'Magtymguly Göklenleriň «Gerkez» tiresindendi (TDV).']),
 ('tribe','cyber',0,
  ['نام «مختومقلی» (Magtymguly) به چه معناست؟',['بندهٔ مختوم','فرزند کوه','شاعر فراق','خادم ایل'],'«مختوم» یکی از دودمان‌های مقدس (اولاد) ترکمن است؛ نام یعنی «بندهٔ مختوم».'],
  ['«Magtymguly» ady nämäni aňladýar?',['Magtymyň guly','Dagyň ogly','Firak şahyry','Tiräniň hyzmatkäri'],'«Magtym» türkmeniň mukaddes nesilleriniň (öwlat) biri; ady «Magtymyň guly» diýmek.']),
 ('tribe','sage',2,
  ['کدام یک از این‌ها یکی از «اولاد» (دودمان‌های مقدس) ترکمن است؟',['تکه','یموت','خواجه','ارساری'],'خواجه، سید، شیخ، مختوم، آتا و مجاور از اولادند؛ تکه، یموت و ارساری ایل‌اند.'],
  ['Aşakdakylardan haýsy türkmeniň «öwlat» (mukaddes nesil) toparlarynyň biri?',['Teke','Ýomut','Hoja','Ärsary'],'Hoja, Seýit, Şyh, Magtym, Ata we Mýuwür öwlatlar; Teke, Ýomut we Ärsary bolsa tire.']),
 ('tribe','shaj',0,
  ['سنت، دودمان سلجوقیان را به کدام ایل اوغوز می‌رساند؟',['قینیق','آفشار','قایی','بیگدیلی'],'سلجوقیان در سنت از ایل قینیق دانسته می‌شوند (و عثمانیان از قایی، با تردید پژوهشگران).'],
  ['Däp Seljuklar nesilini haýsy oguz tiresine ýetirýär?',['Kynyk','Afşar','Gaýy','Begdili'],'Seljuklar däp boýunça Kynyk tiresinden hasaplanýar (Osmanlylar Gaýydan, alymlaryň şübhesi bilen).']),
 ('hist','teke',0,
  ['در ۱۸۷۹ کدام ایل ترکمن در نبرد گوک‌تپه سپاه روسیه را شکست داد؟',['تکه','یموت','ارساری','سالور'],'در ۱۸۷۹ تکه‌ها در گوک‌تپه پیروز شدند؛ در ۱۸۸۰–۸۱ شکست خوردند و مرو در ۱۸۸۴ گرفته شد.'],
  ['1879-njy ýylda Gökdepe söweşinde rus goşunyny haýsy türkmen tiresi ýeňdi?',['Teke','Ýomut','Ärsary','Salyr'],'1879-njy ýylda Tekeler Gökdepede ýeňiş gazandy; 1880–81-nji ýyllarda ýeňlip, Merw 1884-nji ýylda alnypdyr.']),
 ('tribe','sary',1,
  ['«حادثهٔ پنج‌ده» (۱۸۸۵) در سرزمین کدام ایل رخ داد؟',['یموت','ساریق','چودور','گوکلن'],'ساریق‌ها پس از ۱۸۳۰ در بالادست مرغاب و پنج‌ده نشستند؛ درگیری روسیه و افغانستان در ۱۸۸۵ آنجا بود.'],
  ['«Penjdeh wakasy» (1885) haýsy tiräniň ýerinde bolup geçdi?',['Ýomut','Saryk','Çowdur','Göklen'],'Saryklar 1830-njy ýyldan soň Murgabyň ýokarsynda we Penjdehde ýerleşdi; Russiýa–Owganystan çaknyşygy şol ýerde bolupdyr.']),
 ('tribe','tribes',2,
  ['آخرین حاکم عملی خیوه، جنیدخان، از کدام ایل بود؟',['تکه','ارساری','یموت','ساریق'],'جنیدخان یموت بود (Keller 2001).'],
  ['Hywanyň iň soňky hakyky hany Junaýdhan haýsy tirelidi?',['Teke','Ärsary','Ýomut','Saryk'],'Junaýdhan ýomutdy (Keller 2001).']),
 ('cult','rug',1,
  ['گل اصلی قالی ارساری که در منابع غربی «پای فیل» (elephant’s foot) نامیده می‌شود، چه شکلی است؟',['چهارگوش ساده','هشت‌ضلعی','مثلثی','دایرهٔ کامل'],'گل ارساری بزرگ و هشت‌ضلعی است و در ردیف‌ها تکرار می‌شود.'],
  ['Günbatar çeşmelerde «pil aýagy» («elephant’s foot») diýilýän Ärsary halysynyň esasy göli nähili görnüşde?',['Ýönekeý dörtburç','Sekiz burçly','Üçburç','Doly tegelek'],'Ärsary göli uly we sekiz burçly bolup, hatarlarda gaýtalanýar.']),
 ('lang','lang',2,
  ['الفبای لاتین امروزی ترکمنی چند حرف دارد؟',['۲۶','۲۸','۳۰','۳۳'],'۳۰ حرف: ۹ واکه و ۲۱ صامت.'],
  ['Häzirki türkmen latyn elipbiýinde näçe harp bar?',['26','28','30','33'],'30 harp: 9 çekimli we 21 çekimsiz.']),
 ('lang','lang',1,
  ['«آب» در ترکمنی چگونه نوشته می‌شود؟',['su','suw','sub','suv'],'«suw» با «w»: واژهٔ بومی ترکمنی به واکهٔ گرد ختم نمی‌شود، برخلاف «su» در ترکی استانبولی.'],
  ['Türkmen dilinde «suw» sözi nähili ýazylýar?',['su','suw','sub','suv'],'«suw» «w» bilen: ata-baba türkmen sözi tegelek çekimli bilen gutarmaýar, stambul türkçesindäki «su»-dan tapawutlylykda.']),
 ('lang','lang',3,
  ['ترکمنی در فاصلهٔ ۱۹۴۰ تا ۱۹۹۳ با کدام خط نوشته می‌شد؟',['عربی','لاتین','چینی','سیریلیک'],'در دورهٔ شوروی سیریلیک جای لاتین را گرفت؛ لاتین در ۱۹۹۳ برگشت.'],
  ['1940–1993-nji ýyllarda türkmen dili haýsy ýazuw bilen ýazylýardy?',['Arap','Latyn','Hytaý','Kiril'],'Sowet döwründe kiril latynyň ýerini aldy; latyn 1993-nji ýylda dolandy.']),
 ('lang','gram',0,
  ['حرف «ň» در الفبای ترکمنی چه صدایی دارد؟',['صدای غنهٔ «ng»','«ش»','«ج»','«خ»'],'«ň» صدای غنه است، مثل ng در sing.'],
  ['Türkmen elipbiýindäki «ň» harpy nähili ses berýär?',['«ng» burun sesi','«ş»','«j»','«h»'],'«ň» burun sesi, «sing» sözündäki «ng» ýaly.']),
 ('lang','lang',2,
  ['ترکمنی چند واکه دارد؟',['۶','۸','۹','۱۲'],'۹ واکه: a, e, ä, i, y, o, ö, u, ü؛ طول واکه هم معنا می‌سازد.'],
  ['Türkmen dilinde näçe çekimli bar?',['6','8','9','12'],'9 çekimli: a, e, ä, i, y, o, ö, u, ü; çekimliniň uzynlygy hem many üýtgedýär.']),
 ('lang','gram',1,
  ['انتخاب «-mak» یا «-mek» در پایان مصدر ترکمنی به چه بستگی دارد؟',['جنس دستوری','هماهنگی واکه‌ای','تعداد هجاها','حالت دستوری'],'واکه‌های پسین «-mak» می‌گیرند و پیشین «-mek»؛ مانند obalardan و itlerden.'],
  ['Türkmen işliginiň soňundaky «-mak» ýa-da «-mek» nämä bagly?',['Grammatik jyns','Çekimlileriň sazlaşygy','Bogunyň sany','Düşüm'],'Arka çekimliler «-mak», öň çekimliler «-mek» alýar; meselem, obalardan we itlerden.']),
 ('lang','lang',3,
  ['ترکمن‌های ایران و افغانستان هنوز با کدام خط می‌نویسند؟',['لاتین ترکی','سیریلیک','خط چینی','عربی-فارسیِ اصلاح‌شده'],'در ایران و افغانستان هنوز خط عربی-فارسیِ اصلاح‌شده رایج است.'],
  ['Eýranyň we Owganystanyň türkmenleri henizem haýsy ýazuw bilen ýazýarlar?',['Türk latyny','Kiril','Hytaý ýazuwy','Özgerdilen arap-pars'],'Eýranda we Owganystanda henizem özgerdilen arap-pars ýazuwy ýaýran.']),
 ('lang','gram',1,
  ['کدام حرف ترکمنی صامت «ی» (مثل «ی» در «یار») است؟',['y','ý','j','ž'],'«ý» صامت «ی» است؛ «y» واکهٔ بستهٔ پسین است.'],
  ['Türkmen elipbiýinde haýsy harp «ý» sessiz sesi («ýar» sözündäki) berýär?',['y','ý','j','ž'],'«ý» sessiz «y»; «y» bolsa arka ýapyk çekimli.']),
 ('world','eki',0,
  ['ترکمن‌های استاوروپول در روسیه به چه نامی شناخته می‌شوند؟',['تروخمن‌ها','کومیک‌ها','نوقای‌ها','قره‌چای‌ها'],'«تروخمن‌ها» که طبق پژوهش توکارف در سدهٔ ۱۷ به قفقاز شمالی کوچیدند.'],
  ['Russiýanyň Stawropolyndaky türkmenler haýsy at bilen tanalýar?',['Truhmenler','Kumyklar','Nogaýlar','Garaçaýlar'],'«Truhmenler»; Tokarewiň barlagyna görä XVII asyrda Demirgazyk Kawkaza göçüpdirler.']),
 ('world','salar',2,
  ['کدام قوم ساکن چین نسب خود را به ایل اوغوزی سالور می‌رساند؟',['اویغورها','هویی‌ها','سالارها','قزاق‌ها'],'سالارها (۱۶۵٬۱۵۹ نفر در ۲۰۲۰) خود را از سالور می‌دانند؛ پژوهشگران خاستگاه را «نامطمئن» می‌دانند.'],
  ['Hytaýda haýsy halk nesilini oguzyň Salur tiresine ýetirýär?',['Uýgurlar','Huýlar','Salarlar','Gazaklar'],'Salarlar (2020-de 165 159 adam) özlerini Salyrdan hasaplaýar; alymlar gelip çykyşyny «anyk däl» diýýär.']),
 ('world','tkm',1,
  ['تعداد ترکمن‌های ثبت‌شده در سرشماری ۲۰۲۱ روسیه حدود چند نفر بود؟',['۴ هزار','۴۱ هزار','۴۱۳ هزار','۴ میلیون'],'۴۱٬۳۲۸ نفر.'],
  ['2021-nji ýyl Russiýa ilat ýazuwynda hasaba alnan türkmenleriň sany takmynan näçe?',['4 müň','41 müň','413 müň','4 million'],'41 328 adam.']),
 ('world','uz',3,
  ['بنا به منابع، ترکمن‌ها در کدام یک از این مناطق ازبکستان گزارش نشده‌اند؟',['خوارزم','سورخان‌دریا','قره‌قالپاقستان','فرغانه'],'منابع (IWPR) از خوارزم، سورخان‌دریا و قره‌قالپاقستان نام می‌برند، نه فرغانه.'],
  ['Çeşmelere görä Özbegistanyň haýsy sebitinde türkmenler habar berilmedi?',['Horezm','Surhandarýa','Garagalpagystan','Fergana'],'Çeşmeler (IWPR) Horezmi, Surhandarýany we Garagalpagystany agzaýar, Ferganany däl.']),
 ('world','ist',0,
  ['ترکمن‌های افغان‌تبار در ۱۹۸۲ دسته‌جمعی در کدام شهر ترکیه ساکن شدند؟',['استانبول','آنکارا','ازمیر','قونیه'],'به گزارش IWPR، دسته‌ای بزرگ از آنان در ۱۹۸۲ در استانبول جا گرفتند.'],
  ['Owgan gelip çykyşly türkmenler 1982-nji ýylda toplumlaýyn Türkiýäniň haýsy şäherinde ornaşdy?',['Stambul','Ankara','Izmir','Konýa'],'IWPR-iň habaryna görä uly topar 1982-nji ýylda Stambulda ornaşypdyr.']),
 ('world','tkm',2,
  ['«ترکمن‌صحرا» در کدام استان ایران است؟',['مازندران','یزد','گلستان','کرمان'],'ترکمن‌صحرا شمال استان گلستان است (گنبد کاووس، بندر ترکمن).'],
  ['«Türkmen sährasy» Eýranyň haýsy ostanynda?',['Mazandaran','Ýezd','Golestan','Kerman'],'Türkmen sährasy Golestanyň demirgazygy (Gonbad-e Kawus, Bender Türkmen).']),
 ('cult','unrug',0,
  ['در پروندهٔ یونسکوی قالی‌بافی ترکمن (۲۰۱۹) پرورش کدام گوسفند هم جزو زنجیرهٔ هنر است؟',['ساریجا','مرینوس','حصاری','دالا'],'زنجیره از پرورش گوسفند «ساریجا» و پشم‌چینی تا بافت و مرمت را شامل می‌شود.'],
  ['ÝUNESKO-nyň türkmen halyçylygy resminamasynda (2019) haýsy goýun ösdürmek hem sungat zynjyrynyň bir bölegi?',['Saryja','Merinos','Hissar','Dala'],'Zynjyr «saryja» goýun ösdürmekden ýüň gyrkmakdan dokamaga we dikeltmäge çenli bölekleri öz içine alýar.']),
 ('cult','flag',3,
  ['در پرچم و نشان ملی ترکمنستان، نخستین گل قالی (به ترتیب سنتی) از کدام ایل است؟',['ساریق','چودور','یموت','تکه'],'ترتیب سنتی (از بالا به پایین): تکه، یموت، ساریق، چودور، ارساری؛ گل میانی را برخی منابع نمایندهٔ سالیر هم می‌دانند.'],
  ['Türkmenistanyň baýdagynda we gerbinde ilkinji haly göli (däp tertibinde) haýsy tiräniň?',['Saryk','Çowdur','Ýomut','Teke'],'Däp tertibi (ýokardan aşaklygyna): Teke, Ýomut, Saryk, Çowdur, Ärsary; ortaky göli käbir çeşmeler Salyr hem hasaplaýar.']),
 ('cult','arts',1,
  ['زیور نقره‌ای قلب‌مانند «آسیق» در باور ترکمن‌ها بیشتر چه نقشی داشت؟',['سکهٔ مبادله','طلسم برای زن','نشان جنگجو','ابزار آشپزی'],'«آسیق» بیش از آنکه آرایش باشد طلسم بود و باور بر آن بود از بیماری، به‌ویژه پیش و هنگام بارداری، حفظ می‌کند.'],
  ['Ýürek görnüşli kümüş «asyk» bezegi türkmenleriň ynanjynda esasan haýsy ähmiýete eýedi?',['Pul','Aýal üçin tumar','Söweşiji nyşany','Aşpez guraly'],'«Asyk» bezegden köp tumardy we aýaly, aýratyn göwreliligiň öňünden we wagtynda, kesellerden goraýar diýip ynanýardylar.']),
 ('cult','cuis',2,
  ['در فرهنگ نان ترکمن، چه کاری بسیار بی‌ادبانه است؟',['بریدن نان با چاقو','خوردن نان گرم','وارونه‌گذاشتن قرص نان','تقسیم نان با مهمان'],'وارونه‌کردن نان یا بدرفتاری با آن بسیار ناپسند است.'],
  ['Türkmen çörek medeniýetinde haýsy hereket örän edepsizlik hasaplanýar?',['Çöregi pyçak bilen kesmek','Ysy çörek iýmek','Çöregi ters goýmak','Çöregi myhman bilen paýlaşmak'],'Çöregi ters goýmak ýa-da oňa erbet garamak örän edepsizlik hasaplanýar.']),
 ('cult','cuis',1,
  ['«دوغراما» (dograma) بیشتر از چه ساخته می‌شود؟',['برنج و زعفران','دل‌وجگر و نان خرد‌شده','ماست و خیار','ماهی و لیمو'],'بنا به ویکی‌پدیا از دل‌وجگر و گوشت خرد‌شده، نان، پیاز و گوجه ساخته می‌شود.'],
  ['«Dograma» köplenç nämeden taýýarlanýar?',['Tüwi we zagpyran','Gök-bagyr we owradylan çörek','Gatyk we hyýar','Balyk we limon'],'Wikipediýa görä gök-bagyr we owradylan etden, çörekden, sogandan we pomidordan taýýarlanýar.']),
 ('cult','cuis',3,
  ['«پیشمه» (pishme) در نوروز چگونه به مهمان داده می‌شود؟',['سرد با بستنی','با ماهی شور','با شراب','با میوهٔ خشک'],'در نوروز دختران با پیشمه و میوهٔ خشک از مهمان‌ها پذیرایی می‌کنند.'],
  ['Nowruzda «pişme» myhmanlara nähili berilýär?',['Doňdurma bilen sowuk','Duzly balyk bilen','Çakyr bilen','Guradylan miwe bilen'],'Nowruzda gyzlar myhmanlary pişme we guradylan miwe bilen garşylaýarlar.']),
 ('her','whs',1,
  ['نخستین محوطهٔ ترکمنستان که در ۱۹۹۹ در فهرست میراث جهانی یونسکو ثبت شد کدام است؟',['نیسا','مرو باستان','کهنه‌گرگانج','دروازهٔ دوزخ'],'«پارک تاریخی و فرهنگی مرو باستان» در ۱۹۹۹؛ کهنه‌گرگانج ۲۰۰۵ و نیسا ۲۰۰۷.'],
  ['1999-njy ýylda ÝUNESKO-nyň Dünýä mirasy sanawyna girizilen Türkmenistanyň ilkinji ýadygärligi haýsy?',['Nusaý','Gadymy Merw','Könegürgenç','Derweze'],'«Gadymy Merw Döwlet taryhy-medeni seýilgähi» 1999-njy ýylda; Könegürgenç 2005, Nusaý 2007.']),
 ('her','whs',2,
  ['مناره قطلغ‌تیمور (حدود ۶۰ متر) در کدام محوطهٔ جهانی ترکمنستان است؟',['مرو','نیسا','کهنه‌گرگانج','یانگی‌قلعه'],'مناره در کهنه‌گرگانج (داشوغوز)، پایتخت خوارزم است.'],
  ['Gutlug Timur minarasy (takmynan 60 metr) Türkmenistanyň haýsy Dünýä mirasynda?',['Merw','Nusaý','Könegürgenç','Ýangykala'],'Minara Horezmiň paýtagty Könegürgençde (Daşoguz).']),
 ('her','whs',0,
  ['آرامگاه کدام سلطان سلجوقی در مرو (اوایل سدهٔ ۱۲) است؟',['سنجر','طغرل‌بیگ','ملک‌شاه','محمود غزنوی'],'آرامگاه سلطان سنجر (فرمانروا از ۱۱۱۸ تا ۱۱۵۷) در سلطان‌قلعهٔ مرو است.'],
  ['Merwdäki (XII asyryň başy) mawzoleý haýsy Seljuk soltanyna degişli?',['Sanjar','Tugrul beg','Meliksah','Mahmyt Gaznewi'],'Soltan Sanjaryň (1118–1157 ýyllarda hökümdar) mawzoleýi Merwiň Soltan Galasynda.']),
 ('lit','dede',3,
  ['یونسکو در ۲۰۱۸ «میراث دده قورقود» را به درخواست کدام کشورها ثبت کرد؟',['ترکمنستان و ازبکستان','ایران و عراق','ترکمنستان و ترکیه','آذربایجان، قزاقستان و ترکیه'],'ثبت ۲۰۱۸ به درخواست آذربایجان، قزاقستان و ترکیه بود؛ ترکمنستان جزو درخواست‌دهندگان نبود.'],
  ['ÝUNESKO 2018-nji ýylda «Dede Gorkut mirasyny» haýsy ýurtlaryň haýyşy bilen girizdi?',['Türkmenistan we Özbegistan','Eýran we Yrak','Türkmenistan we Türkiýe','Azerbaýjan, Gazagystan we Türkiýe']  ,'2018-nji ýyldaky giriş Azerbaýjanyň, Gazagystanyň we Türkiýäniň haýyşy bilen boldy; Türkmenistan haýyş edijileriň arasynda däldi.']),
 ('lit','dede',0,
  ['نسخهٔ «گنبد» از «کتاب ترکمان» (دده قورقود) در ۲۰۱۸ در کجا پیدا شد؟',['گنبد کاووس (ایران)','درسدن (آلمان)','واتیکان','کهنه‌گرگانج'],'در مجموعهٔ خصوصی در گنبد کاووس؛ عنوانش «جلد دوم کتاب ترکمان» است.'],
  ['«Gonbad» golýazmasy (Dede Gorkut) 2018-nji ýylda nirede tapyldy?',['Gonbad-e Kawus (Eýran)','Drezden (Germaniýa)','Watikan','Könegürgenç'],'Gonbad-e Kawusdaky hususy ýygyndyda; ady «Türkmen kitabynyň ikinji jildi».']),
 ('lit','wmc',2,
  ['نخستین دارندهٔ لقب «اوغلان باخشی» که دانسته می‌شود، کیست؟',['مختومقلی','کمینه','ساحی جپباروف','مولانپس'],'ساحی جپباروف (۱۹۰۵–۱۹۷۷)، بخشی و سازمان‌دهندهٔ نخستین گروه سازی-آوازی «خانهٔ جمهوری هنر مردمی» (۱۹۳۷).'],
  ['«Oglan bagşy» lakamynyň ilkinji eýesi hasaplanýan kim?',['Magtymguly','Kemine','Sähy Jepbarow','Mollanepes'],'Sähy Jepbarow (1905–1977), bagşy we 1937-nji ýylda açylan Respublika halk döredijiligi öýüniň ilkinji topary guran adam.']),
 ('hist','whs',1,
  ['کهنه‌گرگانج در چه سالی با یورش چنگیزخان ویران شد؟',['۱۱۲۱','۱۲۲۱','۱۳۲۱','۱۴۲۱'],'در ۱۲۲۱؛ همان سالی که مغول‌ها اوغوزها را از سیردریا به قره‌قوم و کرانهٔ خزر راندند.'],
  ['Könegürgenç haýsy ýylda Çingiz hanyň çozuşynda weýran edildi?',['1121','1221','1321','1421'],'1221-nji ýylda; şol ýyl mongollar oguzlary Sirderýadan Garagum we Hazar kenaryna sürdi.']),
 ('hist','whs',0,
  ['در سده‌های ۱۱ و ۱۲ کدام شهر امروزِ ترکمنستان پایتخت سلجوقیان بود؟',['مرو','نیسا','داشوغوز','ترکمن‌باشی'],'مرو پایتخت سلجوقیان بود؛ سلطان سنجر از ۱۱۱۸ تا ۱۱۵۷ فرمانروا بود.'],
  ['XI–XII asyrlarda häzirki Türkmenistanyň haýsy şäheri Seljuklaryň paýtagtydy?',['Merw','Nusaý','Daşoguz','Türkmenbaşy'],'Merw Seljuklaryň paýtagtydy; Soltan Sanjar 1118–1157 ýyllarda hökümdardy.']),
 ('hist','dede',1,
  ['از نیمهٔ کدام سده نام «اوغوز» میان ترکان کم‌کم جای خود را به «ترکمان» داد؟',['سدهٔ ۶','سدهٔ ۱۰','سدهٔ ۱۴','سدهٔ ۱۸'],'از نیمهٔ سدهٔ ۱۰؛ این روند تا آغاز سدهٔ ۱۳ تمام شد.'],
  ['Haýsy asyryň ortalaryndan «Oguz» ady türkleriň özlerinde ýuwaş-ýuwaşdan «Türkmen» adyna ýer berdi?',['VI asyr','X asyr','XIV asyr','XVIII asyr'],'X asyryň ortalaryndan; bu proses XIII asyryň başyna çenli tamamlandy.']),
 ('hist','shaj',2,
  ['ابوالغازی، نویسندهٔ «شجرهٔ ترکمن»، خان کدام خانات بود؟',['بخارا','قوقند','خیوه','مرو'],'ابوالغازی بهادرخان از ۱۶۴۳/۴۴ تا ۱۶۶۳ خان خیوه بود.'],
  ['«Şejereýi terakime»niň awtory Abulgazy haýsy hanlygyň hanydy?',['Buhara','Gokand','Hywa','Merw'],'Abulgazy Bahadyr han 1643/44–1663 ýyllarda Hywanyň hanydy.']),
 ('hist','teke',1,
  ['روسیه در چه سالی مرو را گرفت؟',['۱۸۶۴','۱۸۸۴','۱۹۰۴','۱۹۲۴'],'مرو در ۱۸۸۴ گرفته شد؛ پیش‌تر در ۱۸۷۹ تکه‌ها در گوک‌تپه پیروز و در ۱۸۸۰–۸۱ شکست خورده بودند.'],
  ['Russiýa Merwi haýsy ýylda aldy?',['1864','1884','1904','1924'],'Merw 1884-nji ýylda alyndy; öň 1879-njy ýylda Tekeler Gökdepede ýeňiş gazanypdy we 1880–81-nji ýyllarda ýeňlipdi.']),
 ('tribe','shaj',0,
  ['در روایت ابوالغازی، فرزندان اوغوزخان به دو بالِ «بوزوق‌ها (تیرهای خاکستری)» و کدام بال تقسیم می‌شوند؟',['اوچ‌اوق‌ها (سه تیر)','سرخ‌پوشان','کوه‌نشینان','سوارکاران'],'پسران گون، آی و یلدیز «بوزوق» و پسران گوک، داغ و دنیز «اوچ‌اوق» نام دارند.'],
  ['Abulgazynyň rowaýatynda Oguz hanyň nesilleri «Bozoklar (çal oklar)» we haýsy ganata bölünýär?',['Üç oklar','Gyzyl eşikliler','Dagly adamlar','Atlylar'],'Gün, Aý we Ýyldyz ogullary «Bozok», Gök, Dag we Deňiz ogullary «Üç ok» diýlip atlandyrylýar.']),
 ('tribe','flag',3,
  ['در پرچم ترکمنستان، گل پایینی (پنجم از بالا) به سنت به کدام ایل نسبت داده می‌شود؟',['تکه','ساریق','چودور','ارساری'],'ترتیب سنتی از بالا: تکه، یموت، ساریق، چودور، ارساری؛ گل میانی را برخی منابع نمایندهٔ سالیر هم می‌دانند.'],
  ['Türkmenistanyň baýdagynda aşaky (ýokardan bäşinji) göl däp boýunça haýsy tirä degişli edilýär?',['Teke','Saryk','Çowdur','Ärsary'],'Ýokardan däp tertibi: Teke, Ýomut, Saryk, Çowdur, Ärsary; ortaky göli käbir çeşmeler Salyr hem hasaplaýar.']),
 ('lit','ez',1,
  ['«جنگ‌نامه» (Jeňnama) دربارهٔ نبردهای تکه‌ها با ایرانیان در دههٔ ۱۸۶۰ اثر کیست؟',['مختومقلی','عبدالستار قاضی','سیدی','ذلیلی'],'عبدالستار قاضی (Abdysetdar Kazy) در دههٔ ۱۸۶۰.'],
  ['1860-njy ýyllaryň Teke–Eýran söweşleri barada «Jeňnama» kimiň eseri?',['Magtymguly','Abdysetdar Kazy','Seýdi','Zelili'],'Abdysetdar Kazy, 1860-njy ýyllarda.']),
 ('lit','weli',2,
  ['سرود ۱۹۴۴ جمهوری شوروی ترکمنستان را کدام آهنگساز ساخت؟',['داناتار اووزوف','نوری هالمامدف','ولی محادف','ساحی جپباروف'],'ولی محادف (متن: امان ککیلف).'],
  ['1944-nji ýylda Türkmenistan SSR gimnini haýsy kompozitor döretdi?',['Danatar Öwezow','Nury Halmämmedow','Weli Muhadow','Sähy Jepbarow'],'Weli Muhadow (sözleri: Aman Kekilow).']),
 ('cult','akh',0,
  ['نام «آخال‌تکه» برای اسب را در ۱۸۸۱ کدام ژنرال روسی رایج کرد؟',['کوروپاتکین','اسکوبلف','کاوفمان','لازارف'],'ژنرال کوروپاتکین پس از جنگ پرورشگاه ساخت و اسب‌ها را به نام ایل تکه نامید.'],
  ['Atyň «Ahalteke» ady 1881-nji ýylda haýsy rus generaly tarapyndan ýaýradyldy?',['Kuropatkin','Skobelew','Kaufman','Lazarew'],'General Kuropatkin söweşden soň at ösdürilýän ýer gurup, atlary Teke tiresiniň ady bilen atlandyrypdyr.']),
 ('hist','ht',3,
  ['در ۱۹۳۵ بیست‌وهشت سوار با اسب آخال‌تکه از عشق‌آباد به کدام شهر رفتند؟',['تاشکند','تهران','باکو','مسکو'],'برای تأثیرگذاری بر مقام‌ها به مسکو رفتند؛ بنا به ویکی‌پدیا حدود ۸۴ روز با عبور سه‌روزه از بیابان بی‌آب.'],
  ['1935-nji ýylda 28 atly Ahalteke atlary bilen Aşgabatdan haýsy şähere ýöredi?',['Daşkent','Tähran','Bakuw','Moskwa'],'Häkimiýetleri täsirlendirmek üçin Moskwa ýöredi; Wikipediýa görä takmynan 84 gün, suwsuz çölden üç günlük geçiş bilen.']),
 ('lit','ez',0,
  ['«رونق‌الاسلام» وفایی، از کهن‌ترین آثار ترکمنی، به چه سالی برمی‌گردد؟',['۱۴۶۴','۱۵۶۴','۱۶۶۴','۱۳۶۴'],'۱۴۶۴؛ ویکی‌پدیا آن را همراه اشعار بایرام‌خان و «شجرهٔ ترکمن» آغاز نوشتار ترکمنی می‌داند.'],
  ['Wepaýynyň «Rownak-ul-Yslam» eseri, iň gadymy türkmen eserleriniň biri, haýsy ýyla degişli?',['1464','1564','1664','1364'],'1464; Wikipediýa ony Baýram hanyň goşgulary we «Şejere» bilen bilelikde türkmen ýazuwynyň başlangyjy hasaplaýar.']),
 ('lit','ez',2,
  ['کدام دو شاعر دربارهٔ دفاع از گوک‌تپه سروده‌اند؟',['آزادی و آندلیب','کمینه و سیدی','ماتاجی و میسگین‌قیلیچ','ذلیلی و مولانپس'],'ماتاجی (حدود ۱۸۲۴–۱۸۸۴) و میسگین‌قیلیچ (۱۸۴۵–۱۹۰۵) در ویکی‌پدیا.'],
  ['Haýsy iki şahyr Gökdepäniň goragy barada ýazypdyr?',['Azady we Andalyp','Kemine we Seýdi','Mätäji we Misgin Gylyç','Zelili we Mollanepes'],'Wikipediýa görä Mätäji (takmynan 1824–1884) we Misgin Gylyç (1845–1905).']),
]

CATS = [
 ('hist',  'تاریخ', 'Taryh'),
 ('tribe', 'ایل‌ها و شجره‌نامه', 'Tireler we şejere'),
 ('lang',  'زبان و خط', 'Dil we ýazuw'),
 ('cult',  'فرهنگ و آیین', 'Medeniýet we däp-dessur'),
 ('lit',   'ادبیات و موسیقی', 'Edebiýat we saz'),
 ('her',   'میراث و مکان‌ها', 'Miras we ýerler'),
 ('world', 'ترکمن‌ها در جهان', 'Dünýädäki türkmenler'),
]
OLD_CATS = ['lit','lang','cult','her','cult','cult','cult','lang','lit','hist','tribe','tribe','cult','lit','her','tribe','lit','hist']

UI = {
 'fa': dict(quizIntro='{N} سؤال چهارگزینه‌ای دربارهٔ تاریخ، ایل‌ها و شجره‌نامه، زبان، فرهنگ، ادبیات و میراث ترکمن. دور سریع ۱۰ سؤال تصادفی دارد، یا موضوع را خودت انتخاب کن. پس از هر پاسخ، توضیح و (برای سؤال‌های تازه) منبع را می‌بینی. امتیاز در همین مرورگر ذخیره می‌شود.',
            quizQuick='دور سریع (۱۰ سؤال تصادفی)', quizAllQ='همهٔ سؤال‌ها', quizByTopic='بر پایهٔ موضوع', quizChange='حالت دیگر', quizReview='مرور پاسخ‌های اشتباه',
            quizSource='منبع', quizMsgA='عالی! تسلط خوبی داری.', quizMsgB='خیلی خوب!', quizMsgC='خوب؛ بخش ایل‌ها و شجره‌نامه را هم ببین.', quizMsgD='ادامه بده؛ بخش‌ها را بخوان و دوباره امتحان کن.', quizBestMode='بهترین'),
 'tk': dict(quizIntro='Türkmen taryhy, tireler we şejere, dil, medeniýet, edebiýat we miras baradaky {N} dörtsany soragy. Çalt tapgyrda 10 tötänleýin sorag bar, ýa-da temany özüň saýla. Her jogapdan soň düşündiriş we (täze soraglar üçin) çeşme görkezilýär. Netije şu brauzerde saklanýar.',
            quizQuick='Çalt tapgyr (10 tötänleýin sorag)', quizAllQ='Ähli soraglar', quizByTopic='Tema boýunça', quizChange='Başga görnüş', quizReview='Ýalňyş jogaplary gözden geçir',
            quizSource='Çeşme', quizMsgA='Ajaýyp! Gowy bilýärsiň.', quizMsgB='Gaty gowy!', quizMsgC='Gowy; Tireler we şejere bölümine hem seret.', quizMsgD='Dowam et; bölümleri oka we täzeden synap gör.', quizBestMode='Iň gowusy'),
}

OLD_SRC = ['mak','lang','akh','whs','iran','cuis','iran','lang','wmc','forrel','tribes','shaj','cuis','ez','kara','oghuz','ovez','akhalt']

def old_src(lang):
    return [{'t': SRC[k][0 if lang=='fa' else 1], 'u': SRC[k][2]} for k in OLD_SRC]

def build(lang):
    L = 0 if lang == 'fa' else 1
    sc = (lambda s: s.translate(FD)) if lang == 'fa' else (lambda s: s)
    qs = []
    for cat, src, ci, fa, tk in Q:
        row = fa if lang == 'fa' else tk
        q, opts, ex = row
        title, url = (SRC[src][0], SRC[src][2]) if lang == 'fa' else (SRC[src][1], SRC[src][2])
        qs.append({'cat': cat, 'q': sc(q), 'options': [sc(o) for o in opts], 'correct': ci, 'explain': sc(ex), 'src': {'t': title, 'u': url}})
    return {'questions': qs, 'cats': [{'id': i, 'label': (f if lang == 'fa' else t)} for i, f, t in CATS], 'ui': UI[lang]}

data = {l: build(l) for l in ('fa', 'tk')}
for l in ('fa', 'tk'):
    for q in data[l]['questions']:
        assert len(q['options']) == 4 and 0 <= q['correct'] < 4
js = '''/* Quiz bank extension: 37 new questions with sources, categories for every question, and UI strings for the new modes.
   Answers were checked against docs/research-notes-2026-11.md. Hand-editable. */
(function(){
  const X = %s, OLD = %s, OLDSRC = %s;
  ['fa', 'tk'].forEach(l => {
    const Q = DATA[l].quiz;
    Q.questions.forEach((q, i) => { if(i < OLD.length){ q.cat = OLD[i]; if(!q.src) q.src = OLDSRC[l][i]; } });
    Q.questions = Q.questions.concat(X[l].questions);
    Q.cats = X[l].cats;
    Object.assign(DATA[l].ui, X[l].ui);
    DATA[l].ui.quizIntro = DATA[l].ui.quizIntro.replace('{N}', String(Q.questions.length).replace(/\\d/g, c => l === 'fa' ? '۰۱۲۳۴۵۶۷۸۹'[c] : c));
  });
})();
''' % (json.dumps(data, ensure_ascii=False, indent=1), json.dumps(OLD_CATS), json.dumps({l: old_src(l) for l in ('fa','tk')}, ensure_ascii=False))
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'js', 'quiz-extra.js'), 'w', encoding='utf8').write(js)
print('questions: old 18 + new', len(Q), '=', 18 + len(Q))
import collections
print(collections.Counter([c for c in OLD_CATS] + [q[0] for q in Q]))
