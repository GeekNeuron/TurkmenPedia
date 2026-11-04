import json
FD=str.maketrans('0123456789','۰۱۲۳۴۵۶۷۸۹')
def fd(s): return s.translate(FD).replace('.','٫') if False else s.translate(FD)

SRC=[
 {'id':'censusTm','fa':'سرشماری ۲۰۲۲ ترکمنستان (stat.gov.tm)','tk':'Türkmenistanyň 2022 ýyl ilat ýazuwy (stat.gov.tm)','u':'https://stat.gov.tm/en/population-census'},
 {'id':'censusTmNat','fa':'ترکیب ملی (جدول ۴٫۱ سرشماری)','tk':'Milli düzüm (ilat ýazuwynyň 4.1 tablisasy)','u':'https://stat.gov.tm/population-census-pdfs/results/en/4.pdf'},
 {'id':'rferlCensus','fa':'رادیو آزادی: تردید دربارهٔ آمار سرشماری','tk':'Azatlyk radiosy: ilat ýazuwynyň sanlaryna şübhe','u':'https://www.rferl.org/a/turkmenistan-census-fake-numbers-population-decline/32516559.html'},
 {'id':'wikiTkm','fa':'ویکی‌پدیا: Turkmens (گردآوری ثانویه)','tk':'Wikipedia: Turkmens (ikinji derejeli ýygyndy)','u':'https://en.wikipedia.org/wiki/Turkmens'},
 {'id':'wikiIr','fa':'ویکی‌پدیا: Iranian Turkmens','tk':'Wikipedia: Iranian Turkmens','u':'https://en.wikipedia.org/wiki/Iranian_Turkmens'},
 {'id':'zaIr','fa':'Zentralasien-Analysen 160 (۲۰۲۳)','tk':'Zentralasien-Analysen 160 (2023)','u':'https://laender-analysen.de/zentralasien-analysen/160/ZentralasienAnalysen160.pdf'},
 {'id':'rferlIr','fa':'رادیو آزادی: ترکمن‌های ایران','tk':'Azatlyk radiosy: Eýranyň türkmenleri','u':'https://www.rferl.org/a/iran-turkmen-minority-war-hope-trepidation/33700396.html'},
 {'id':'wikiAf','fa':'ویکی‌پدیا: Afghan Turkmens','tk':'Wikipedia: Afghan Turkmens','u':'https://en.wikipedia.org/wiki/Afghan_Turkmens'},
 {'id':'euaa','fa':'EUAA: گزارش اطلاعات کشوری افغانستان (ترکمن‌ها)','tk':'EUAA: Owganystan boýunça maglumat (türkmenler)','u':'https://www.euaa.europa.eu/coi-report-afghanistan-country-focus/487-turkmen'},
 {'id':'jamestown','fa':'Jamestown: ترکمن‌های افغانستان','tk':'Jamestown: Owganystanyň türkmenleri','u':'https://jamestown.org/afghanistans-ethnic-turkmens-enemies-or-allies-for-ashgabat/'},
 {'id':'iwpr','fa':'IWPR: ترکمن‌های ازبکستان','tk':'IWPR: Özbegistanyň türkmenleri','u':'https://iwpr.net/ezwgy857'},
 {'id':'tuik','fa':'TÜİK: آمار ثبت نشانی ترکیه ۲۰۲۴','tk':'TÜİK: Türkiýäniň adrese esaslanýan ilat ýazuwy 2024','u':'https://data.tuik.gov.tr/Bulten/Index?p=Adrese-Dayali-Nufus-Kayit-Sistemi-Sonuclari-2024-53783&dil=1'},
 {'id':'joshua','fa':'Joshua Project: ازبکستان','tk':'Joshua Project: Özbegistan','u':'https://joshuaproject.net/people_groups/print/15654/UZ'},
]

def L(fa,tk): return {'fa':fa,'tk':tk}

regions=[
 ('golestan', L('گلستان (ایران)','Golestan (Eýran)'),
  L('ترکمن‌ها در شمال استان، در دشتی به نام ترکمن‌صحرا، زندگی می‌کنند؛ شهرهای اصلی آن گنبد کاووس و بندر ترکمن‌اند و ترکمن‌ها سنی‌مذهب‌اند. برآورد شمار ترکمن‌های کل ایران بین منابع از ۰٫۵ تا ۲٫۴ میلیون متفاوت است.',
    'Türkmenler welaýatyň demirgazygynda, Türkmen sährasy diýilýän düzlükde ýaşaýarlar; onuň esasy şäherleri Gonbad-e Kawus we Bender Türkmendir, türkmenler sunny musulmandyrlar. Eýranyň ähli türkmenleriniň sany çeşmelere görä 0,5–2,4 million aralygynda çaklanylýar.'),
  ['wikiIr','zaIr']),
 ('nkhorasan', L('خراسان شمالی (ایران)','Demirgazyk Horasan (Eýran)'),
  L('بخشی از ترکمن‌های ایران در این استان ساکن‌اند؛ منابع آن را همراه با گلستان و خراسان رضوی یکی از سه استان اصلی سکونت ترکمن‌ها در ایران می‌شمارند.',
    'Eýranyň türkmenleriniň bir bölegi şu welaýatda ýaşaýar; çeşmeler ony Golestan we Räzewi Horasan bilen bilelikde türkmenleriň Eýrandaky üç esasy ýaşaýyş welaýatynyň biri hasaplaýar.'),
  ['wikiIr','zaIr']),
 ('rkhorasan', L('خراسان رضوی (ایران)','Räzewi Horasan (Eýran)'),
  L('ترکمن‌ها در بخش‌هایی از این استان، به‌ویژه نزدیک مرز ترکمنستان، ساکن‌اند و منابع آن را یکی از سه استان اصلی سکونت ترکمن‌ها در ایران می‌شمارند.',
    'Türkmenler welaýatyň käbir böleginde, esasanam Türkmenistanyň serhedine ýakyn ýerlerde ýaşaýarlar; çeşmeler ony Eýrandaky üç esasy türkmen welaýatynyň biri hasaplaýar.'),
  ['wikiIr','zaIr']),
 ('faryab', L('فاریاب (افغانستان)','Faryab (Owganystan)'),
  L('ترکمن‌ها در بخش‌هایی از این ولایت زندگی می‌کنند؛ سهم آن‌ها بسته به منبع حدود ۷٪ تا ۱۳٪ برآورد شده و منابع با هم ناهمخوان‌اند.',
    'Türkmenler welaýatyň käbir böleginde ýaşaýarlar; olaryň paýy çeşmä görä takmynan 7%–13% diýlip çaklanylýar we çeşmeler biri-birine gabat gelmeýär.'),
  ['jamestown','wikiAf']),
 ('jowzjan', L('جوزجان (افغانستان)','Jowzjan (Owganystan)'),
  L('از ولایت‌هایی است که ترکمن‌ها در آن حضور پررنگ‌تری دارند. یک جدول جمعیتی حدود ۱۰٪ می‌آورد، اما منبع دیگر آنان را اکثریت محلی می‌داند؛ آمار دقیق در دست نیست.',
    'Türkmenleriň has görnükli bolan welaýatlarynyň biri. Bir ilat tablisasy takmynan 10% görkezýär, başga bir çeşme bolsa olary ýerli köplük hasaplaýar; takyk san ýok.'),
  ['euaa','jamestown','wikiAf']),
 ('badghis', L('بادغیس (افغانستان)','Badgis (Owganystan)'),
  L('سهم ترکمن‌ها در این ولایت حدود ۳٪ برآورد شده است.','Türkmenleriň şu welaýatdaky paýy takmynan 3% diýlip çaklanylýar.'),
  ['jamestown','wikiAf']),
 ('balkh', L('بلخ (افغانستان)','Balh (Owganystan)'),
  L('از ولایت‌های شمال افغانستان که منابع برای آن‌ها از حضور ترکمن‌ها نام می‌برند؛ شمار دقیق در دست نیست.','Çeşmeleriň türkmenleriň bardygyny ýatlaýan Owganystanyň demirgazyk welaýatlarynyň biri; takyk san ýok.'),
  ['wikiAf']),
 ('herat', L('هرات (افغانستان)','Hyrat (Owganystan)'),
  L('از ولایت‌های افغانستان که منابع از حضور ترکمن‌ها در بخش‌هایی از آن یاد می‌کنند؛ شمار دقیق در دست نیست.','Çeşmeleriň türkmenleriň käbir böleginde ýaşaýandygyny ýatlaýan Owganystan welaýatlarynyň biri; takyk san ýok.'),
  ['wikiAf']),
 ('khorezm', L('خوارزم (ازبکستان)','Horezm (Özbegistan)'),
  L('ترکمن‌های سه منطقهٔ خوارزم، سورخان‌دریا و قره‌قالپاقستان روی هم دست‌کم ۱۵۰ هزار نفر گزارش شده‌اند؛ برآورد دیگری تا ۲۲۵ هزار هم می‌رسد.',
    'Horezm, Surhandarýa we Garagalpagystan sebitleriniň türkmenleri jemi azyndan 150 müň adam diýlip habar berilýär; başga bir çaklama 225 müňe çenli ýetýär.'),
  ['iwpr','joshua']),
 ('surkhandarya', L('سورخان‌دریا (ازبکستان)','Surhandarýa (Özbegistan)'),
  L('یکی از سه منطقهٔ ازبکستان که ترکمن‌ها در آن گزارش شده‌اند؛ برای مجموع سه منطقه دست‌کم ۱۵۰ هزار نفر آمده است.',
    'Türkmenleriň habar berilen Özbegistanyň üç sebitinden biri; üç sebit üçin jemi azyndan 150 müň adam görkezilýär.'),
  ['iwpr','joshua']),
 ('karakalpakstan', L('قره‌قالپاقستان (ازبکستان)','Garagalpagystan (Özbegistan)'),
  L('یکی از سه منطقهٔ ازبکستان که ترکمن‌ها در آن گزارش شده‌اند؛ برای مجموع سه منطقه دست‌کم ۱۵۰ هزار نفر آمده است.',
    'Türkmenleriň habar berilen Özbegistanyň üç sebitinden biri; üç sebit üçin jemi azyndan 150 müň adam görkezilýär.'),
  ['iwpr','joshua']),
]

# (id, name, display value, numeric for bar, note, on-map)
world=[
 ('tm', L('ترکمنستان','Türkmenistan'), L('≈ 6.12 میلیون','≈ 6,12 million'), 6120854,
   L('سرشماری ۲۰۲۲: ۷٬۰۵۷٬۸۴۱ نفر که ۸۶٫۷٪ آن ترکمن است','2022 ýyl ilat ýazuwy: 7 057 841 adam, onuň 86,7%-i türkmen'), True, ['censusTm','censusTmNat','rferlCensus']),
 ('ir', L('ایران','Eýran'), L('≈ 1 میلیون (برآوردها: 0.5 تا 2.4)','≈ 1 million (çaklamalar: 0,5–2,4)'), 1000000,
   L('گلستان، خراسان شمالی و خراسان رضوی','Golestan, Demirgazyk we Räzewi Horasan'), True, ['wikiIr','zaIr','rferlIr']),
 ('af', L('افغانستان','Owganystan'), L('≈ 1 میلیون (1 تا 3٪ جمعیت)','≈ 1 million (ilatyň 1–3%-i)'), 1000000,
   L('بادغیس، بلخ، فاریاب، هرات و جوزجان؛ برآوردها ناهمخوان‌اند','Badgis, Balh, Faryab, Hyrat we Jowzjan; çaklamalar biri-birine gabat gelmeýär'), True, ['wikiAf','euaa']),
 ('uz', L('ازبکستان','Özbegistan'), L('≈ 150 تا 225 هزار','≈ 150–225 müň'), 190000,
   L('خوارزم، سورخان‌دریا و قره‌قالپاقستان؛ ثبت رسمی ازبکستان: 194,076 (۲۰۲۶، به نقل ویکی‌پدیا)','Horezm, Surhandarýa we Garagalpagystan; Özbegistanyň resmi ýazuwy: 194 076 (2026, Wikipediýa boýunça)'), True, ['iwpr','joshua','wikiTkm']),
 ('pk', L('پاکستان','Pakistan'), L('≈ 171 هزار','≈ 171 müň'), 171000,
   L('برآوردی کم‌اطمینان (گردآوری ثانویه)','Ynamy pes çaklama (ikinji derejeli ýygyndy)'), False, ['wikiTkm']),
 ('tr', L('ترکیه','Türkiýe'), L('113,762 (2024)','113 762 (2024)'), 113762,
   L('آمار ثبت نشانی ترکیه؛ ملاک شمارش ممکن است تابعیت باشد نه قومیت','Türkiýäniň adrese esaslanýan ýazuwy; sanamagyň ölçegi etniki däl-de raýatlyk bolmagy mümkin'), False, ['wikiTkm','tuik']),
 ('ru', L('روسیه','Russiýa'), L('41,328 نفر','41 328 adam'), 41328, L('سرشماری ۲۰۲۱','2021 ýyl ilat ýazuwy'), False, ['wikiTkm']),
 ('tj', L('تاجیکستان','Täjigistan'), L('15,171 نفر','15 171 adam'), 15171, L('سرشماری ۲۰۱۰','2010 ýyl ilat ýazuwy'), False, ['wikiTkm']),
]
vel=[
 ('mary', L('مری','Mary'), 22.9), ('dashoguz', L('داشوغوز','Daşoguz'), 22.0), ('lebap', L('لبپ','Lebap'), 20.5),
 ('ashgabat', L('شهر عشق‌آباد','Aşgabat şäheri'), 14.6), ('ahal', L('آخال','Ahal'), 12.5), ('balkan', L('بالکان','Balkan'), 7.5),
]
TOTAL=7057841

def fa_num(s): return s.translate(FD).replace('.', '٫').replace(',', '٬')
def build(lang):
    pers = lambda t: fa_num(t) if lang=='fa' else t
    ui = {
     'fa': dict(
       layerLabel='ترکمن‌های فرامرزی',
       intro='نقشهٔ تعاملی ترکمنستان و همسایگان بر پایهٔ داده‌های جغرافیایی واقعی (Natural Earth). روی نشان‌ها، محدودهٔ ایل‌ها و استان‌هایی که در آن‌ها ترکمن‌ها زندگی می‌کنند بزنید؛ با دکمه‌های + و − یا دو بار زدن بزرگ‌نمایی کنید.',
       tapHint='روی یک نشان، ایل یا استان بزنید',
       base={'title':'زمینه','vector':'برداری','osm':'خیابان','topo':'ناهمواری','light':'ساده'},
       zoomIn='بزرگ‌نمایی', zoomOut='کوچک‌نمایی', zoomReset='بازنشانی نما', zoomHint='Ctrl + چرخ ماوس هم کار می‌کند',
       tileLoading='در حال بارگذاری نقشهٔ زمینه…', tileFail='اتصال به سرور نقشهٔ زمینه برقرار نشد؛ نقشهٔ برداری نمایش داده می‌شود.',
       tileNote='نقشهٔ زمینه از سرورهای خارجی بارگذاری می‌شود و فقط با اتصال اینترنت کار می‌کند.',
       diaNote='نواحی هاشورخورده استان‌هایی‌اند که منابع در بخشی از آن‌ها از جمعیت ترکمن یاد کرده‌اند؛ کل استان ترکمن‌نشین نیست و هاشور مرز دقیق سکونت را نشان نمی‌دهد.',
       credit='مرزها، رودها و دریاچه‌ها: Natural Earth (مالکیت عمومی، نسخهٔ ۵٫۲ سال ۲۰۲۲). سایهٔ بیابان و کوهستان تقریبی است.'),
     'tk': dict(
       layerLabel='Serhetaşyr türkmenler',
       intro='Türkmenistanyň we goňşy ýurtlaryň hakyky geografiýa maglumatlaryna (Natural Earth) esaslanýan interaktiw karta. Nyşanlara, tire sebitlerine we türkmenleriň ýaşaýan welaýatlaryna basyň; ulaltmak üçin + we − düwmelerini ulanyň ýa-da iki gezek basyň.',
       tapHint='Nyşana, tire sebitine ýa-da welaýata basyň',
       base={'title':'Fon','vector':'Wektor','osm':'Köçeler','topo':'Relýef','light':'Ýönekeý'},
       zoomIn='Ulalt', zoomOut='Kiçelt', zoomReset='Görnüşi dikelt', zoomHint='Ctrl + syçan tigiri hem işleýär',
       tileLoading='Fon kartasy ýüklenýär…', tileFail='Fon kartasynyň serwerine birigip bolmady; wektor karta görkezilýär.',
       tileNote='Fon kartasy daşarky serwerlerden ýüklenýär we diňe internet bilen işleýär.',
       diaNote='Çyzgyly sebitler çeşmelerde bir böleginde türkmen ilaty bar diýlip görkezilen welaýatlardyr; bütin welaýat türkmen däl, çyzgy hem takyk ýaşaýyş serhedini görkezmeýär.',
       credit='Serhetler, derýalar we kölleri: Natural Earth (jemgyýetçilik eýeçiligi, 2022-nji ýyl 5.2 wersiýasy). Çöl we dag kölegesi takmynandyr.'),
    }[lang]
    stats = {
     'fa': dict(title='آمار: ترکمن‌ها در جهان', intro='اعداد زیر برآوردهایی از منابع گوناگون‌اند. برای ایران، افغانستان و ازبکستان منبع رسمیِ روشنی برای قومیت وجود ندارد و منابع با هم فاصلهٔ زیادی دارند؛ پس هر ردیف بازه یا مقدار تقریبی است، نه رقم قطعی.',
        worldTitle='شمار ترکمن‌ها به تفکیک کشور (برآورد)', velTitle='جمعیت ولایت‌های ترکمنستان (سرشماری ۲۰۲۲)',
        onMap='روی نقشه', total='جمع جهانی: حدود ۹ میلیون (برآورد کلی؛ فاصلهٔ منابع زیاد است)',
        velNote='سهم هر ولایت از ۷٬۰۵۷٬۸۴۱ نفر؛ سهم عشق‌آباد از مابقی محاسبه شده و جمعیت‌ها تقریبی‌اند.',
        caveat='دربارهٔ دقت سرشماری ۲۰۲۲ ترکمنستان، رادیو آزادی (RFE/RL) و منابع مستقل تردید کرده‌اند و برآورد جمعیت واقعی را پایین‌تر از رقم رسمی نقل کرده‌اند. ترکمن‌های عراق و سوریه (ترکمان) گروه قومی دیگری هستند و در این فهرست نیامده‌اند.',
        sourcesLabel='منابع', updated='گردآوری: آبان ۱۴۰۵ (نوامبر ۲۰۲۶)'),
     'tk': dict(title='Statistika: dünýädäki türkmenler', intro='Aşakdaky sanlar dürli çeşmelerden alnan çaklamalardyr. Eýran, Owganystan we Özbegistan üçin etniki düzüm boýunça anyk resmi çeşme ýok we çeşmeler biri-birinden köp tapawutlanýar; şonuň üçin her setir aralyk ýa-da takmynan baha, kesgitli san däl.',
        worldTitle='Türkmenleriň ýurtlar boýunça sany (çaklama)', velTitle='Türkmenistanyň welaýatlarynyň ilaty (2022 ýyl ilat ýazuwy)',
        onMap='kartada', total='Dünýä boýunça jemi: takmynan 9 million (umumy çaklama; çeşmeleriň aralygy uly)',
        velNote='Her welaýatyň 7 057 841 adamdan paýy; Aşgabadyň paýy galan bölekden hasaplanyldy, sanlar takmynandyr.',
        caveat='2022 ýyl ilat ýazuwynyň takyklygyna Azatlyk radiosy (RFE/RL) we garaşsyz çeşmeler şübhe bilen garaýarlar we hakyky ilaty resmi sandan pes diýip habar berýärler. Yrak we Siriýa türkmenleri (türkmenler/türkmenlar) başga etniki topardyr we bu sanawa girizilmedi.',
        sourcesLabel='Çeşmeler', updated='Ýygnalan: 2026-njy ýylyň noýabry'),
    }[lang]
    out = {'ui':ui,'regions':[],'stats':{}}
    for rid,title,text,srcs in regions:
        out['regions'].append({'id':rid,'title':title[lang],'text':text[lang],'srcs':srcs})
    st=dict(stats)
    st['world']=[{'id':i,'name':n[lang],'val':pers(v[lang]),'v':num,'note':pers(nt[lang]),'onMap':om,'srcs':sr} for i,n,v,num,nt,om,sr in world]
    st['vel']=[{'id':i,'name':n[lang],'pct':p,'val':pers(f"{p:.1f}% (≈ {p/100*TOTAL/1e6:.2f} {'میلیون' if lang=='fa' else 'million'})".replace('.',',') if lang=='tk' else f"{p:.1f}٪ (≈ {p/100*TOTAL/1e6:.2f} میلیون)")} for i,n,p in vel]
    if lang=='fa':
        for r in st['vel']: r['val']=fa_num(r['val'])
    st['sources']=[{'id':s['id'],'t':s[lang],'u':s['u']} for s in SRC]
    out['stats']=st
    return out
data={l:build(l) for l in ('fa','tk')}
js="""/* Map extras: Turkmen-populated regions beyond Turkmenistan, statistics, and the new UI strings.
   Numbers are estimates collected from the sources listed in `stats.sources` (see README, Update 12).
   Hand-editable. Loaded after data-new.js. */
(function(){
  const EXTRA = %s;
  ['fa', 'tk'].forEach(l => {
    const m = DATA[l].map, e = EXTRA[l];
    m.ui.layers.diaspora = e.ui.layerLabel;
    Object.keys(e.ui).forEach(k => { if(k !== 'layerLabel') m.ui[k] = e.ui[k]; });
    m.regions = e.regions;
    m.stats = e.stats;
  });
})();
""" % json.dumps(data,ensure_ascii=False,indent=1)
open('/home/claude/TurkmenPedia/js/map-data.js','w',encoding='utf8').write(js)
print('written',len(js)//1024,'KB')
print(json.dumps(data['fa']['stats']['vel'],ensure_ascii=False)); print(json.dumps(data['tk']['stats']['vel'],ensure_ascii=False)); print(data['fa']['stats']['world'][0])
