#!/usr/bin/env python3
"""Builds js/culture-extra.js: expands 'language' and 'carpets' (research notes: work/research_notes.md)."""
import json
FD = str.maketrans('0123456789', '۰۱۲۳۴۵۶۷۸۹')
def L(f, t): return {'fa': f, 'tk': t}

# ------------------------------------------------------------------ LANGUAGE
ALPHA = [  # letter, IPA, fa hint, tk hint
 ('A a', 'a', 'نزدیک به «اَ/آ» (کوتاه)', 'gysga «a»'),
 ('B b', 'b', 'مثل «ب»', '«b» ýaly'),
 ('Ç ç', 'tʃ', 'مثل «چ»', '«ç» («ch» ýaly)'),
 ('D d', 'd', 'مثل «د»', '«d» ýaly'),
 ('E e', 'e', 'مثل «ِ» در «بِد»', '«e» ýaly'),
 ('Ä ä', 'æ', 'اَ بازِ پیشین، مانند a در cat انگلیسی (بلند)', 'açyk öň «ä» (uzyn)'),
 ('F f', 'f', 'مثل «ف»', '«f» ýaly'),
 ('G g', 'ɡ', 'مثل «گ»', '«g» ýaly'),
 ('H h', 'h', 'مثل «ه»', '«h» ýaly'),
 ('I i', 'i', 'مثل «ای» کوتاه', 'gysga «i»'),
 ('J j', 'dʒ', 'مثل «ج»', '«j» ýaly'),
 ('Ž ž', 'ʒ', 'مثل «ژ»', '«ž» («zh» ýaly)'),
 ('K k', 'k', 'مثل «ک»؛ کنار واکه‌های پسین به «ق» نزدیک می‌شود', '«k»; arka çekimlilerde «q»-a ýakyn'),
 ('L l', 'l', 'مثل «ل»', '«l» ýaly'),
 ('M m', 'm', 'مثل «م»', '«m» ýaly'),
 ('N n', 'n', 'مثل «ن»', '«n» ýaly'),
 ('Ň ň', 'ŋ', 'صدای غنه، نزدیک به «نگ» (مثل ng در sing)', 'burun sesi, «ng» ýaly'),
 ('O o', 'o', 'مثل «ُ» گرد', 'tegelek «o»'),
 ('Ö ö', 'ø', 'واکهٔ گرد پیشین، مانند ö آلمانی', 'tegelek öň «ö»'),
 ('P p', 'p', 'مثل «پ»', '«p» ýaly'),
 ('R r', 'r', 'مثل «ر»', '«r» ýaly'),
 ('S s', 's', 'مثل «س»؛ در گویش تکه گاه میان‌دندانی (θ)', '«s»; Teke şiwesinde käwagt dişara (θ)'),
 ('Ş ş', 'ʃ', 'مثل «ش»', '«ş» («sh» ýaly)'),
 ('T t', 't', 'مثل «ت»', '«t» ýaly'),
 ('U u', 'u', 'مثل «او» کوتاه', 'gysga «u»'),
 ('Ü ü', 'y', 'واکهٔ گرد پیشین بسته، مانند ü آلمانی', 'tegelek öň ýapyk «ü»'),
 ('W w', 'w', 'بین «و» و «و» لب‌ودندانی', '«w»: «w» bilen «v» aralygy'),
 ('Y y', 'ɯ', 'واکهٔ بسته و پسینِ گردنشده؛ معادل ndارد در فارسی (مثل ы روسی)', 'arka ýapyk tegelek däl «y» (rus «ы» ýaly)'),
 ('Ý ý', 'j', 'صامت «ی» (مثل «ی» در «یار»)', '«ý» («y» ýaly, sessiz)'),
 ('Z z', 'z', 'مثل «ز»', '«z» ýaly'),
]
ALPHA[27] = ('Y y', 'ɯ', 'واکهٔ بسته و پسینِ گردنشده؛ مانند «ı» (i بی‌نقطه) در ترکی استانبولی، در فارسی معادل ندارد', 'arka ýapyk tegelek däl çekimli; nokatsyz «ı» (türkiýe türkçesi) ýaly')

FACTS = [
 ('info', L('ترکمنی زبان رسمی ترکمنستان است و در افغانستان زبان اقلیتِ رسمی‌شناخته‌شده. شمار گویشوران بسته به منبع و سال حدود ۶ تا ۸ میلیون برآورد می‌شود (حدود ۴٫۷ تا ۶٫۶ میلیون گویشور مادری در ترکمنستان، به‌علاوهٔ گویشوران ایران، افغانستان، ازبکستان، روسیه و تاجیکستان).',
            'Türkmen dili Türkmenistanyň döwlet dili we Owganystanda ykrar edilen azlyk dili. Gepleýjileriniň sany çeşmä we ýyla görä takmynan 6–8 million diýlip çaklanylýar (Türkmenistanda 4,7–6,6 million ene dili gepleýji, goşmaça Eýranda, Owganystanda, Özbegistanda, Russiýada we Täjigistanda).'),
  ['wikiLang']),
 ('letters', L('الفبای لاتینِ امروزی ۳۰ حرف دارد: ۹ واکه (a, e, ä, i, y, o, ö, u, ü) و ۲۱ صامت. طول واکه در ترکمنی معنا می‌سازد (مثلاً öl «بمیر!» و ȫl «تر، خیس»)، اما در املا فقط برای üý و ä نشان داده می‌شود.',
              'Häzirki latyn elipbiýinde 30 harp bar: 9 çekimli (a, e, ä, i, y, o, ö, u, ü) we 21 çekimsiz. Türkmen dilinde çekimliniň uzynlygy many üýtgedýär (meselem, öl «öl!» bilen ȫl «çyg» (ȫl: uzyn ö)), ýöne ýazuwda diňe üý we ä üçin görkezilýär.'),
  ['wikiGrammar', 'webonary']),
 ('letters', L('«هماهنگی واکه‌ای» دو گونه دارد: پیشین/پسین و تا حدی گرد/ناگرد. واژه‌های بومی یا همه پیشین‌اند یا همه پسین. فعل‌های مصدر «-mak» از واکه‌های پسین و «-mek» از واکه‌های پیشین پیروی می‌کنند؛ مثلاً obalardan «از روستاها» اما itlerden «از سگ‌ها». واژه‌های وام‌گرفته (روسی، فارسی، عربی) همیشه از این قاعده پیروی نمی‌کنند، اما پسوندها از آخرین واکه تبعیت می‌کنند (kitap > kitabyndan).',
              '«Çekimlileriň sazlaşygy» iki görnüşde: öň/arka we belli bir derejede tegelek/tegelek däl. Ata-baba sözleri ýa-ha doly öň, ýa-da doly arka çekimlilerden durýar. «-mak» işlikleri arka, «-mek» işlikleri öň çekimlilere eýerýär; meselem, obalardan «oba-dan», ýöne itlerden «it-den». Alnan sözler (rus, pars, arap) hemişe bu kada eýermeýär, ýöne goşulmalar soňky çekimlä eýerýär (kitap > kitabyndan).'),
  ['wikiLang', 'wikiGrammar', 'webonary']),
 ('letters', L('واژهٔ بومی ترکمنی به واکهٔ گرد ختم نمی‌شود؛ از این رو «suw» (آب) با «w» نوشته می‌شود، در حالی که ترکی استانبولی «su» دارد. نمونه‌های مقایسه: dogry / doğru «درست»؛ asman (وام فارسی) / gök «آسمان».',
              'Ata-baba türkmen sözi tegelek çekimli bilen gutarmaýar; şonuň üçin «suw» (suw) «w» bilen ýazylýar, ýöne stambul türkçesinde «su». Deňeşdirme: dogry (türkçe: doğru); asman (pars sözi, türkçe: gök).'),
  ['wikiLang']),
 ('globe', L('گویشی که زبان معیار بر آن استوار است «تکه» است (آخال و مری). گویش‌های دیگر: نوخورلی، یموت، آنه‌ولی، هسارلی، نِرِزیم، گوکلن، سالیر، ساریق، ارساری و چودور؛ و «تروخمنی» در استاوروپول روسیه. در ایران بیشتر گویشوران گویش یموت و در افغانستان گویش ارساری را به‌کار می‌برند. بیشتر گویش‌ها فقط اندکی از چغتایی کلاسیک اثر پذیرفته‌اند، هرچند گویش تکه را در افغانستان گاه «چغتایی» می‌نامند.',
             'Standart dil Teke şiwesine (Ahal we Mary) daýanýar. Başga şiwe: Nohurly, Ýomut, Änewli, Hasarly, Nerezim, Göklen, Salyr, Saryk, Ärsary we Çowdur; we Russiýanyň Stawropolynda «Truhmen». Eýranda gepleýjileriň köpüsi Ýomut şiwesini, Owganystanda bolsa Ärsary şiwesini ulanýar. Şiweleriň köpüsi klassyky çagataýdan diňe az täsir alypdyr, emma Owganystanda Teke şiwesini käwagt «çagataý» diýip atlandyrýarlar.'),
  ['wikiLang', 'webonary']),
 ('feather', L('در تلفظ تکه، /s/ و /z/ اغلب میان‌دندانی (θ و ð) ادا می‌شوند، مانند «لیسپ»؛ یموت و ارساری هم دارند اما ضعیف‌تر. فشار واژه معمولاً روی هجای آخر است. k کنار واکه‌های پسین پسین‌تر ادا می‌شود: kaka با کامِ نرم، köke با کامِ سخت.',
              'Teke aýdylyşynda /s/ we /z/ köplenç dişara (θ we ð) aýdylýar; Ýomut we Ärsary hem, ýöne gowşak. Söz basymy köplenç soňky bogunda. K arka çekimlileriň ýanynda has arka aýdylýar: kaka (ýumşak dama bilen), köke (gaty dama bilen).'),
  ['webonary', 'wikiGrammar']),
 ('book', L('ترکمنی ترکیبی-چسبان (agglutinative) است، جنس دستوری ندارد و ترتیب جمله فاعل–مفعول–فعل است. شش حالت دستوری دارد و در فعل‌ها «گواهی‌نمایی» (evidentiality) نشان داده می‌شود: گوینده مشخص می‌کند خبر را خودش دیده یا شنیده.',
            'Türkmen dili ýelmeşýän (agglutinative) dil, grammatik jynsy ýok we sözlem tertibi eýe–doldurgyç–habar. Alty düşüm bar we işliklerde «şaýatlyk» (evidentiality) görkezilýär: gepleýji habary özi gördümi ýa-da eşitdimi, ony aýdýar.'),
  ['linguisten', 'wikiGrammar']),
]

SCRIPTS = [
 (L('تا دههٔ ۱۹۲۰', 'XX asyryň 1920-nji ýyllaryna çenli'), L('خط عربی-فارسی', 'Arap-pars ýazuwy'),
  L('ترکمنی با خط عربی-فارسی نوشته می‌شد؛ این خط برای واکه‌های ترکمنی مناسب نبود و یک صدا را گاه با چند حرف می‌نوشت.', 'Türkmen dili arap-pars ýazuwy bilen ýazylýardy; bu ýazuw türkmen çekimlileri üçin amatly däldi we bir sesi käwagt birnäçe harp bilen ýazýardy.')),
 (L('۱۹۲۳–۱۹۲۹', '1923–1929'), L('اصلاح خط عربی', 'Arap ýazuwynyň özgertmesi'),
  L('در جمهوری شوروی ترکمنستان نخست صورتی اصلاح‌شده از خط عربی به‌کار رفت.', 'Türkmenistan SSR-de ilki arap ýazuwynyň özgerdilen görnüşi ulanyldy.')),
 (L('۱۹۲۹–۱۹۴۰', '1929–1940'), L('لاتین («یَنِلیف»)', 'Latyn («Ýanalif»)'),
  L('گذار به الفبای لاتین در چارچوب «الفبای یکدستِ ترکی» شوروی (حدود ۱۹۲۸–۲۹).', 'Sowet «birleşdirilen türki elipbiý» çäginde latyn elipbiýine geçiş (takmynan 1928–29).')),
 (L('۱۹۴۰–۱۹۹۳', '1940–1993'), L('سیریلیک', 'Kiril'),
  L('در دورهٔ شوروی خط سیریلیک جای لاتین را گرفت.', 'Sowet döwründe kiril ýazuwy latynyň ýerini aldy.')),
 (L('۱۹۹۳ تا ۱۹۹۹', '1993–1999'), L('بازگشت به لاتین', 'Latyna dolanyş'),
  L('نسخهٔ نو الفبای لاتین در فوریهٔ ۱۹۹۳ منتشر و در ۱۲ آوریل ۱۹۹۳ با فرمان ریاست‌جمهوری از سوی مجلس تأیید شد.', 'Latyn elipbiýiniň täze görnüşi 1993-nji ýylyň fewralynda çap edildi we 12-nji aprelde Mejlis tarapyndan prezident karary hökmünde tassyklandy.')),
 (L('از ۱۹۹۹', '1999-dan'), L('الفبای کنونی (۳۰ حرف)', 'Häzirki elipbiý (30 harp)'),
  L('نسخهٔ بازبینی‌شده‌ای که تا امروز رسمی است. ترکمن‌های ایران و افغانستان همچنان با خط عربی-فارسی اصلاح‌شده می‌نویسند.', 'Häzire çenli resmi bolan gaýtadan işlenen görnüş. Eýranyň we Owganystanyň türkmenleri henizem özgerdilen arap-pars ýazuwy bilen ýazýarlar.')),
]

LANG_SRC = [
 ('wikiLang', 'ویکی‌پدیا: Turkmen language', 'Wikipedia: Turkmen language', 'https://en.wikipedia.org/wiki/Turkmen_language'),
 ('wikiGrammar', 'ویکی‌پدیا: Turkmen grammar', 'Wikipedia: Turkmen grammar', 'https://en.wikipedia.org/wiki/Turkmen_grammar'),
 ('wikiAlpha', 'ویکی‌پدیا: Turkmen alphabet', 'Wikipedia: Turkmen alphabet', 'https://wikipedia.com/wiki/Turkmen_alphabet'),
 ('webonary', 'Webonary: Turkmen phonology', 'Webonary: Turkmen phonology', 'https://www.webonary.org/turkmen/language/phonology/'),
 ('inalco', 'INALCO: Turkmenistan, the country and the language', 'INALCO: Turkmenistan, the country and the language', 'https://inalco.fr/en/turkmenistan-country-and-language'),
 ('linguisten', 'Languages of the world: Turkmen', 'Languages of the world: Turkmen', 'https://blog.linguisten.de/post/654971661630767104'),
]

# ------------------------------------------------------------------ CARPETS
CARPET_UNESCO = dict(
 title=L('ثبت یونسکو (۲۰۱۹)', 'ÝUNESKO belligi (2019)'),
 text=L('«هنر سنتی قالی‌بافی ترکمن در ترکمنستان» در ۲۰۱۹ (چهاردهمین نشست کمیتهٔ بین‌دولتی، بوگوتا؛ تصمیم ۱۲ دسامبر) در فهرست نمایندهٔ میراث ناملموس بشریت ثبت شد (شمارهٔ مدخل ۰۱۴۸۶). پروندهٔ یونسکو فقط خودِ بافت را نمی‌گیرد: کل زنجیره را شامل می‌شود، از پرورش گوسفند «ساریجا» و پشم‌چینی و ریسندگی تا رنگرزی، ساخت دار و ابزار، طراحی گل‌ها، بافندگی و مرمت قالی‌های کهن. قالی در نظر ترکمن‌ها نشانهٔ هویت و یگانگی فرهنگی است. قانون «هنرهای کاربردی» (۲۰۰۰) و انجمن دولتی «ترکمن‌خالی» هم از نهادهای مرتبطند.',
         '«Türkmenistanda türkmen halyçylyk sungatynyň däp-dessury» 2019-njy ýylda (Hökümetara komitetiniň 14-nji mejlisi, Bogota; 12-nji dekabr karary) adamzadyň maddy däl medeni mirasynyň wekilçilikli sanawyna girizildi (giriş belgisi 01486). ÝUNESKO resminamasy diňe dokamagy däl, tutuş zynjyry öz içine alýar: «saryja» goýun ösdürmekden, ýüň gyrkmakdan we egirmekden başlap boýamak, dokma enjamlaryny ýasamak, göllerini çyzmak, dokamak we gadymy halylary dikeltmek. Türkmenler üçin haly medeni kimligiň we agzybirligiň nyşany. «Amaly sungat» kanuny (2000) we «Türkmenhaly» döwlet birleşigi hem degişli edaralar.'),
 chain=L(['پرورش گوسفند «ساریجا»', 'پشم‌چینی و ریسندگی', 'رنگرزی (روناس و رنگ‌های طبیعی)', 'ساخت دار و ابزار', 'طراحی گل‌ها', 'بافت', 'مرمت قالی‌های کهن'],
         ['«Saryja» goýun ösdürmek', 'Ýüň gyrkmak we egirmek', 'Boýamak (gyzylyldym we tebigy reňkler)', 'Dokma gurallaryny ýasamak', 'Göllerini çyzmak', 'Dokamak', 'Gadymy halylary dikeltmek']),
 flag=L('در پرچم و نشان ملی، پنج گل قالی به ترتیب سنتی (از بالا به پایین) نمایندهٔ پنج ایل بزرگ‌اند: تکه، یموت، ساریق، چودور و ارساری. به نوشتهٔ ویکی‌پدیا گل میانی ممکن است نمایندهٔ سالیر (ایلی که پیش از دورهٔ نو بر اثر شکست نظامی ضعیف شد) هم باشد؛ منابع دیگر (LoC) سالور را به‌جای چودور می‌آورند.',
        'Milli baýdakda we gerbde bäş haly göli däp tertibinde (ýokardan aşaklygyna) bäş uly tiräni wekilleýär: Teke, Ýomut, Saryk, Çowdur we Ärsary. Wikipediýanyň ýazmagyna görä ortaky göl, häzirki zamandan öň harby ýeňlişden soň gowşan Salyry hem aňladyp biler; başga çeşmeler (LoC) Çowduryň ýerine Salyry getirýär.'),
 srcs=['unescoRL', 'wikiRug', 'wikiFlag', 'unescoForm'],
)

NEW_WEAVES = [
 dict(id='gapalyk', title=L('گاپالیق', 'Gapalyk'), text=L('آرایهٔ ورودی یورت؛ همراه «انسی» و بافته‌های دیگر ورودی را زینت می‌داد.', 'Ýurduň girelgesiniň bezegi; «ensi» we beýleki dokmalar bilen girelgäni bezeýärdi.')),
 dict(id='athaly', title=L('آت‌هالی و ایچیرگی', 'At haly we içirgi'), text=L('«آت‌هالی» قالیچهٔ اسب و «ایچیرگی» زین‌پوش است؛ بافته‌هایی که فقط در خانه نبودند و بر اسب و شتر هم می‌رفتند.', '«At haly» atyň halyjygy we «içirgi» eýer ýapgysy; diňe öýde däl, at we düýe üstünde hem ulanylan dokmalar.')),
 dict(id='khorjun', title=L('خورجین', 'Horjun'), text=L('کیسهٔ سفر یا بارِ زین برای خوراک و چیزهای کوچک؛ در پروندهٔ یونسکو هم نام برده شده.', 'Ýol haltasy ýa-da eýerde göterilýän halta, iýmit we ownuk zatlar üçin; ÝUNESKO resminamasynda hem agzalýar.')),
]
CARPET_SRC = [
 ('unescoRL', 'یونسکو: Traditional Turkmen carpet making art in Turkmenistan', 'UNESCO: Traditional Turkmen carpet making art in Turkmenistan', 'https://ich.unesco.org/en/RL/traditional-turkmen-carpet-making-art-in-turkmenistan-01486'),
 ('wikiRug', 'ویکی‌پدیا: Turkmen rug', 'Wikipedia: Turkmen rug', 'https://en.wikipedia.org/wiki/Turkmen_rug'),
 ('wikiFlag', 'ویکی‌پدیا: Flag of Turkmenistan', 'Wikipedia: Flag of Turkmenistan', 'https://en.wikipedia.org/wiki/Flag_of_Turkmenistan'),
 ('unescoForm', 'یونسکو: فرم فهرست‌نگاری (نسخهٔ بایگانی)', 'UNESCO: inventory form (archived copy)', 'https://webarchive.unesco.org/web/20201018031652/https://ich.unesco.org/doc/src/40581.pdf'),
]
ERSARI = L('گل ارساری معمولاً بزرگ و هشت‌ضلعی است و در ردیف‌هایی تکرار می‌شود؛ در منابع غربی به «پای فیل» معروف است.',
           'Ärsary göli adatça uly we sekiz burçly bolup, hatarlarda gaýtalanýar; günbatar çeşmelerde «pil aýagy» («elephant’s foot») diýlip tanalýar.')

def build(lang):
    sc = {'fa': lambda s: s.translate(FD), 'tk': lambda s: s}[lang]
    out = {}
    out['facts'] = [{'icon': ic, 'text': sc(t[lang]) if lang == 'fa' else t[lang], 'srcs': sr} for ic, t, sr in FACTS]
    out['alphabet'] = [{'letter': l, 'sound': (f'[{ipa}] — ' + (hf if lang == 'fa' else ht))} for l, ipa, hf, ht in ALPHA]
    out['scripts'] = [{'years': sc(y[lang]), 'title': ti[lang], 'text': sc(tx[lang]) if lang == 'fa' else tx[lang]} for y, ti, tx in SCRIPTS]
    out['sources'] = [{'id': i, 't': (f if lang == 'fa' else t), 'u': u} for i, f, t, u in LANG_SRC]
    out['ui'] = {'fa': dict(alphabetTitle='الفبای لاتین ترکمنی (۳۰ حرف) با تلفظ تقریبی', scriptsTitle='سیر خط ترکمنی در یک سده', srcTitle='منابع', alphaNote='تلفظ‌ها تقریبی‌اند؛ در بیشتر حرف‌ها نشان IPA در قلاب آمده.'),
                 'tk': dict(alphabetTitle='Türkmen latyn elipbiýi (30 harp), takmynan aýdylyşy bilen', scriptsTitle='Türkmen ýazuwynyň bir asyrda geçen ýoly', srcTitle='Çeşmeler', alphaNote='Aýdylyşlar takmynandyr; köp harplarda IPA belgisi gaýda içinde.')}[lang]
    cu = CARPET_UNESCO
    out['carpets'] = {
      'unesco': {'title': cu['title'][lang], 'text': cu['text'][lang].translate(FD) if lang == 'fa' else cu['text'][lang], 'chain': cu['chain'][lang], 'flag': cu['flag'][lang], 'srcs': cu['srcs']},
      'weaves': [{'id': w['id'], 'title': w['title'][lang], 'text': w['text'][lang]} for w in NEW_WEAVES],
      'ersari': ERSARI[lang],
      'sources': [{'id': i, 't': (f if lang == 'fa' else t), 'u': u} for i, f, t, u in CARPET_SRC],
      'ui': {'fa': dict(chainTitle='از گوسفند تا قالی', srcTitle='منابع'), 'tk': dict(chainTitle='Goýundan halyça çenli', srcTitle='Çeşmeler')}[lang],
    }
    return out

data = {l: build(l) for l in ('fa', 'tk')}
js = '''/* Language + carpets extras (research notes: README, Update 13). Hand-editable. Loaded after data-new.js. */
(function(){
  const X = %s;
  ['fa', 'tk'].forEach(l => {
    const D = DATA[l], e = X[l];
    D.language.facts = D.language.facts.concat(e.facts);
    D.language.alphabet = e.alphabet;
    D.language.scripts = e.scripts;
    D.language.sources = e.sources;
    Object.assign(D.ui, { alphabetTitle:e.ui.alphabetTitle, scriptsTitle:e.ui.scriptsTitle, langSrcTitle:e.ui.srcTitle, alphaNote:e.ui.alphaNote });
    const c = D.carpets;
    c.unesco = e.carpets.unesco; c.sources = e.carpets.sources; c.ui.chainTitle = e.carpets.ui.chainTitle; c.ui.srcTitle = e.carpets.ui.srcTitle;
    c.weaves = c.weaves.concat(e.carpets.weaves);
    const ers = c.guls.find(g => g.id === 'ersari'); if(ers) ers.text = e.carpets.ersari;
  });
})();
''' % json.dumps(data, ensure_ascii=False, indent=1)
open('/home/claude/TurkmenPedia/js/culture-extra.js', 'w', encoding='utf8').write(js)
print('written', len(js)//1024, 'KB')
