/* Quiz bank extension: 37 new questions with sources, categories for every question, and UI strings for the new modes.
   Answers were checked against docs/research-notes-2026-11.md. Hand-editable. */
(function(){
  const X = {
 "fa": {
  "questions": [
   {
    "cat": "tribe",
    "q": "«شجرهٔ ترکمن» (Shajara-i Tarākima) ابوالغازی، به نوشتهٔ بیشتر منابع، در چه سالی به پایان رسید؟",
    "options": [
     "۱۵۵۹",
     "۱۶۵۹",
     "۱۷۵۹",
     "۱۸۵۹"
    ],
    "correct": 1,
    "explain": "در بیشتر منابع ۱۶۵۹ آمده (برخی ۱۶۶۱). ابوالغازی آن را به درخواست ملاها، شیخ‌ها و بگ‌های ترکمن نوشت.",
    "src": {
     "t": "ویکی‌پدیا: Shajara-i Tarākima",
     "u": "https://en.wikipedia.org/wiki/Shajara-i_Tar%C4%81kima"
    }
   },
   {
    "cat": "tribe",
    "q": "محمود کاشغری در «دیوان لغات الترک» چند ایل اوغوز را برمی‌شمارد؟",
    "options": [
     "۱۲",
     "۲۲",
     "۲۴",
     "۴۰"
    ],
    "correct": 1,
    "explain": "کاشغری (سدهٔ ۱۱) ۲۲ ایل را می‌شمارد؛ رشیدالدین و ابوالغازی فهرست ۲۴تایی دارند.",
    "src": {
     "t": "Durmuş (2025): معنای نام ایل‌های اوغوز",
     "u": "https://dergipark.org.tr/tr/download/journal-file/34254"
    }
   },
   {
    "cat": "tribe",
    "q": "کدام دو ایل در فهرست کاشغری نیستند و به نظر سومر دو ایل خلج بودند که به اوغوزها پیوستند؟",
    "options": [
     "قیزیق و قارقین",
     "سالور و قینیق",
     "قایی و بایات",
     "آفشار و ییوا"
    ],
    "correct": 0,
    "explain": "«قیزیق» و «قارقین» در فهرست کاشغری نیستند.",
    "src": {
     "t": "Durmuş (2025): معنای نام ایل‌های اوغوز",
     "u": "https://dergipark.org.tr/tr/download/journal-file/34254"
    }
   },
   {
    "cat": "tribe",
    "q": "به روایت ابوالغازی، نام ایل «سالور» یعنی چه؟",
    "options": [
     "اسب‌دار",
     "چادرنشین",
     "خدمتگزار",
     "شمشیردار"
    ],
    "correct": 3,
    "explain": "ابوالغازی «سالور» را «شمشیردار» معنا می‌کند؛ رشیدالدین می‌گوید هرجا برود شمشیر و گرز بر می‌کشد.",
    "src": {
     "t": "Durmuş (2025): معنای نام ایل‌های اوغوز",
     "u": "https://dergipark.org.tr/tr/download/journal-file/34254"
    }
   },
   {
    "cat": "tribe",
    "q": "ابوالغازی کدام سه ایل امروزی ترکمن را از سالور می‌داند؟",
    "options": [
     "چودور، گوکلن، ساریق",
     "تکه، چودور، ساریق",
     "تکه، یموت، ارساری",
     "یموت، گوکلن، چودور"
    ],
    "correct": 2,
    "explain": "در روایت ابوالغازی تکه، یموت و ارساری از سالور برآمده‌اند.",
    "src": {
     "t": "ویکی‌پدیا: Shajara-i Tarākima",
     "u": "https://en.wikipedia.org/wiki/Shajara-i_Tar%C4%81kima"
    }
   },
   {
    "cat": "tribe",
    "q": "«تکه» در زبان ترکمنی یعنی چه؟",
    "options": [
     "اسب",
     "بُز نر",
     "عقاب",
     "گرگ"
    ],
    "correct": 1,
    "explain": "«تکه» در ترکمنی «بُز نر» است؛ استوارت می‌گوید بزِ کوهی یا بُز پیرِ پیشرو گله.",
    "src": {
     "t": "ویکی‌پدیا: Teke (tribe)",
     "u": "https://en.wikipedia.org/wiki/Teke_(tribe)"
    }
   },
   {
    "cat": "tribe",
    "q": "مختومقلی از کدام تیرهٔ ایل گوکلن بود؟",
    "options": [
     "قایی",
     "بایات",
     "سالور",
     "گرکز"
    ],
    "correct": 3,
    "explain": "مختومقلی از تیرهٔ «گرکز» ایل گوکلن بود (TDV).",
    "src": {
     "t": "TDV İslâm Ansiklopedisi: Göklen",
     "u": "https://islamansiklopedisi.org.tr/goklen"
    }
   },
   {
    "cat": "tribe",
    "q": "نام «مختومقلی» (Magtymguly) به چه معناست؟",
    "options": [
     "بندهٔ مختوم",
     "فرزند کوه",
     "شاعر فراق",
     "خادم ایل"
    ],
    "correct": 0,
    "explain": "«مختوم» یکی از دودمان‌های مقدس (اولاد) ترکمن است؛ نام یعنی «بندهٔ مختوم».",
    "src": {
     "t": "Cyberleninka: Magtymguly Firagi",
     "u": "https://cyberleninka.ru/article/n/improving-students-communication-skills-through-magtymguly-firagi-s-poems"
    }
   },
   {
    "cat": "tribe",
    "q": "کدام یک از این‌ها یکی از «اولاد» (دودمان‌های مقدس) ترکمن است؟",
    "options": [
     "تکه",
     "یموت",
     "خواجه",
     "ارساری"
    ],
    "correct": 2,
    "explain": "خواجه، سید، شیخ، مختوم، آتا و مجاور از اولادند؛ تکه، یموت و ارساری ایل‌اند.",
    "src": {
     "t": "SAGE Encyclopedia of Global Religion: Turkmenistan",
     "u": "https://sk.sagepub.com/ency/edvol/embed/globalreligion/chpt/turkmenistan"
    }
   },
   {
    "cat": "tribe",
    "q": "سنت، دودمان سلجوقیان را به کدام ایل اوغوز می‌رساند؟",
    "options": [
     "قینیق",
     "آفشار",
     "قایی",
     "بیگدیلی"
    ],
    "correct": 0,
    "explain": "سلجوقیان در سنت از ایل قینیق دانسته می‌شوند (و عثمانیان از قایی، با تردید پژوهشگران).",
    "src": {
     "t": "ویکی‌پدیا: Shajara-i Tarākima",
     "u": "https://en.wikipedia.org/wiki/Shajara-i_Tar%C4%81kima"
    }
   },
   {
    "cat": "hist",
    "q": "در ۱۸۷۹ کدام ایل ترکمن در نبرد گوک‌تپه سپاه روسیه را شکست داد؟",
    "options": [
     "تکه",
     "یموت",
     "ارساری",
     "سالور"
    ],
    "correct": 0,
    "explain": "در ۱۸۷۹ تکه‌ها در گوک‌تپه پیروز شدند؛ در ۱۸۸۰–۸۱ شکست خوردند و مرو در ۱۸۸۴ گرفته شد.",
    "src": {
     "t": "ویکی‌پدیا: Teke (tribe)",
     "u": "https://en.wikipedia.org/wiki/Teke_(tribe)"
    }
   },
   {
    "cat": "tribe",
    "q": "«حادثهٔ پنج‌ده» (۱۸۸۵) در سرزمین کدام ایل رخ داد؟",
    "options": [
     "یموت",
     "ساریق",
     "چودور",
     "گوکلن"
    ],
    "correct": 1,
    "explain": "ساریق‌ها پس از ۱۸۳۰ در بالادست مرغاب و پنج‌ده نشستند؛ درگیری روسیه و افغانستان در ۱۸۸۵ آنجا بود.",
    "src": {
     "t": "ویکی‌پدیا: Saryk",
     "u": "https://en.wikipedia.org/wiki/Saryk"
    }
   },
   {
    "cat": "tribe",
    "q": "آخرین حاکم عملی خیوه، جنیدخان، از کدام ایل بود؟",
    "options": [
     "تکه",
     "ارساری",
     "یموت",
     "ساریق"
    ],
    "correct": 2,
    "explain": "جنیدخان یموت بود (Keller ۲۰۰۱).",
    "src": {
     "t": "ویکی‌پدیا: Turkmen tribes",
     "u": "https://en.wikipedia.org/wiki/Turkmen_tribes"
    }
   },
   {
    "cat": "cult",
    "q": "گل اصلی قالی ارساری که در منابع غربی «پای فیل» (elephant’s foot) نامیده می‌شود، چه شکلی است؟",
    "options": [
     "چهارگوش ساده",
     "هشت‌ضلعی",
     "مثلثی",
     "دایرهٔ کامل"
    ],
    "correct": 1,
    "explain": "گل ارساری بزرگ و هشت‌ضلعی است و در ردیف‌ها تکرار می‌شود.",
    "src": {
     "t": "ویکی‌پدیا: Turkmen rug",
     "u": "https://en.wikipedia.org/wiki/Turkmen_rug"
    }
   },
   {
    "cat": "lang",
    "q": "الفبای لاتین امروزی ترکمنی چند حرف دارد؟",
    "options": [
     "۲۶",
     "۲۸",
     "۳۰",
     "۳۳"
    ],
    "correct": 2,
    "explain": "۳۰ حرف: ۹ واکه و ۲۱ صامت.",
    "src": {
     "t": "ویکی‌پدیا: Turkmen language",
     "u": "https://en.wikipedia.org/wiki/Turkmen_language"
    }
   },
   {
    "cat": "lang",
    "q": "«آب» در ترکمنی چگونه نوشته می‌شود؟",
    "options": [
     "su",
     "suw",
     "sub",
     "suv"
    ],
    "correct": 1,
    "explain": "«suw» با «w»: واژهٔ بومی ترکمنی به واکهٔ گرد ختم نمی‌شود، برخلاف «su» در ترکی استانبولی.",
    "src": {
     "t": "ویکی‌پدیا: Turkmen language",
     "u": "https://en.wikipedia.org/wiki/Turkmen_language"
    }
   },
   {
    "cat": "lang",
    "q": "ترکمنی در فاصلهٔ ۱۹۴۰ تا ۱۹۹۳ با کدام خط نوشته می‌شد؟",
    "options": [
     "عربی",
     "لاتین",
     "چینی",
     "سیریلیک"
    ],
    "correct": 3,
    "explain": "در دورهٔ شوروی سیریلیک جای لاتین را گرفت؛ لاتین در ۱۹۹۳ برگشت.",
    "src": {
     "t": "ویکی‌پدیا: Turkmen language",
     "u": "https://en.wikipedia.org/wiki/Turkmen_language"
    }
   },
   {
    "cat": "lang",
    "q": "حرف «ň» در الفبای ترکمنی چه صدایی دارد؟",
    "options": [
     "صدای غنهٔ «ng»",
     "«ش»",
     "«ج»",
     "«خ»"
    ],
    "correct": 0,
    "explain": "«ň» صدای غنه است، مثل ng در sing.",
    "src": {
     "t": "ویکی‌پدیا: Turkmen grammar",
     "u": "https://en.wikipedia.org/wiki/Turkmen_grammar"
    }
   },
   {
    "cat": "lang",
    "q": "ترکمنی چند واکه دارد؟",
    "options": [
     "۶",
     "۸",
     "۹",
     "۱۲"
    ],
    "correct": 2,
    "explain": "۹ واکه: a, e, ä, i, y, o, ö, u, ü؛ طول واکه هم معنا می‌سازد.",
    "src": {
     "t": "ویکی‌پدیا: Turkmen language",
     "u": "https://en.wikipedia.org/wiki/Turkmen_language"
    }
   },
   {
    "cat": "lang",
    "q": "انتخاب «-mak» یا «-mek» در پایان مصدر ترکمنی به چه بستگی دارد؟",
    "options": [
     "جنس دستوری",
     "هماهنگی واکه‌ای",
     "تعداد هجاها",
     "حالت دستوری"
    ],
    "correct": 1,
    "explain": "واکه‌های پسین «-mak» می‌گیرند و پیشین «-mek»؛ مانند obalardan و itlerden.",
    "src": {
     "t": "ویکی‌پدیا: Turkmen grammar",
     "u": "https://en.wikipedia.org/wiki/Turkmen_grammar"
    }
   },
   {
    "cat": "lang",
    "q": "ترکمن‌های ایران و افغانستان هنوز با کدام خط می‌نویسند؟",
    "options": [
     "لاتین ترکی",
     "سیریلیک",
     "خط چینی",
     "عربی-فارسیِ اصلاح‌شده"
    ],
    "correct": 3,
    "explain": "در ایران و افغانستان هنوز خط عربی-فارسیِ اصلاح‌شده رایج است.",
    "src": {
     "t": "ویکی‌پدیا: Turkmen language",
     "u": "https://en.wikipedia.org/wiki/Turkmen_language"
    }
   },
   {
    "cat": "lang",
    "q": "کدام حرف ترکمنی صامت «ی» (مثل «ی» در «یار») است؟",
    "options": [
     "y",
     "ý",
     "j",
     "ž"
    ],
    "correct": 1,
    "explain": "«ý» صامت «ی» است؛ «y» واکهٔ بستهٔ پسین است.",
    "src": {
     "t": "ویکی‌پدیا: Turkmen grammar",
     "u": "https://en.wikipedia.org/wiki/Turkmen_grammar"
    }
   },
   {
    "cat": "world",
    "q": "ترکمن‌های استاوروپول در روسیه به چه نامی شناخته می‌شوند؟",
    "options": [
     "تروخمن‌ها",
     "کومیک‌ها",
     "نوقای‌ها",
     "قره‌چای‌ها"
    ],
    "correct": 0,
    "explain": "«تروخمن‌ها» که طبق پژوهش توکارف در سدهٔ ۱۷ به قفقاز شمالی کوچیدند.",
    "src": {
     "t": "کتاب سرخ EKI: Trukhmens",
     "u": "https://www.eki.ee/books/redbook/trukhmens.shtml"
    }
   },
   {
    "cat": "world",
    "q": "کدام قوم ساکن چین نسب خود را به ایل اوغوزی سالور می‌رساند؟",
    "options": [
     "اویغورها",
     "هویی‌ها",
     "سالارها",
     "قزاق‌ها"
    ],
    "correct": 2,
    "explain": "سالارها (۱۶۵٬۱۵۹ نفر در ۲۰۲۰) خود را از سالور می‌دانند؛ پژوهشگران خاستگاه را «نامطمئن» می‌دانند.",
    "src": {
     "t": "ویکی‌پدیا: Salar people",
     "u": "https://en.wikipedia.org/wiki/Salar_people"
    }
   },
   {
    "cat": "world",
    "q": "تعداد ترکمن‌های ثبت‌شده در سرشماری ۲۰۲۱ روسیه حدود چند نفر بود؟",
    "options": [
     "۴ هزار",
     "۴۱ هزار",
     "۴۱۳ هزار",
     "۴ میلیون"
    ],
    "correct": 1,
    "explain": "۴۱٬۳۲۸ نفر.",
    "src": {
     "t": "ویکی‌پدیا: Turkmens",
     "u": "https://en.wikipedia.org/wiki/Turkmens"
    }
   },
   {
    "cat": "world",
    "q": "بنا به منابع، ترکمن‌ها در کدام یک از این مناطق ازبکستان گزارش نشده‌اند؟",
    "options": [
     "خوارزم",
     "سورخان‌دریا",
     "قره‌قالپاقستان",
     "فرغانه"
    ],
    "correct": 3,
    "explain": "منابع (IWPR) از خوارزم، سورخان‌دریا و قره‌قالپاقستان نام می‌برند، نه فرغانه.",
    "src": {
     "t": "IWPR: ترکمن‌های ازبکستان",
     "u": "https://iwpr.net/ezwgy857"
    }
   },
   {
    "cat": "world",
    "q": "ترکمن‌های افغان‌تبار در ۱۹۸۲ دسته‌جمعی در کدام شهر ترکیه ساکن شدند؟",
    "options": [
     "استانبول",
     "آنکارا",
     "ازمیر",
     "قونیه"
    ],
    "correct": 0,
    "explain": "به گزارش IWPR، دسته‌ای بزرگ از آنان در ۱۹۸۲ در استانبول جا گرفتند.",
    "src": {
     "t": "IWPR: ترکمن‌های افغان‌تبار در استانبول",
     "u": "https://iwpr.net/tysbemd3"
    }
   },
   {
    "cat": "world",
    "q": "«ترکمن‌صحرا» در کدام استان ایران است؟",
    "options": [
     "مازندران",
     "یزد",
     "گلستان",
     "کرمان"
    ],
    "correct": 2,
    "explain": "ترکمن‌صحرا شمال استان گلستان است (گنبد کاووس، بندر ترکمن).",
    "src": {
     "t": "ویکی‌پدیا: Turkmens",
     "u": "https://en.wikipedia.org/wiki/Turkmens"
    }
   },
   {
    "cat": "cult",
    "q": "در پروندهٔ یونسکوی قالی‌بافی ترکمن (۲۰۱۹) پرورش کدام گوسفند هم جزو زنجیرهٔ هنر است؟",
    "options": [
     "ساریجا",
     "مرینوس",
     "حصاری",
     "دالا"
    ],
    "correct": 0,
    "explain": "زنجیره از پرورش گوسفند «ساریجا» و پشم‌چینی تا بافت و مرمت را شامل می‌شود.",
    "src": {
     "t": "یونسکو: Traditional Turkmen carpet making art",
     "u": "https://ich.unesco.org/en/RL/traditional-turkmen-carpet-making-art-in-turkmenistan-01486"
    }
   },
   {
    "cat": "cult",
    "q": "در پرچم و نشان ملی ترکمنستان، نخستین گل قالی (به ترتیب سنتی) از کدام ایل است؟",
    "options": [
     "ساریق",
     "چودور",
     "یموت",
     "تکه"
    ],
    "correct": 3,
    "explain": "ترتیب سنتی: تکه، یموت، ارساری، چودور، ساریق.",
    "src": {
     "t": "ویکی‌پدیا: Turkmen rug",
     "u": "https://en.wikipedia.org/wiki/Turkmen_rug"
    }
   },
   {
    "cat": "cult",
    "q": "زیور نقره‌ای قلب‌مانند «آسیق» در باور ترکمن‌ها بیشتر چه نقشی داشت؟",
    "options": [
     "سکهٔ مبادله",
     "طلسم برای زن",
     "نشان جنگجو",
     "ابزار آشپزی"
    ],
    "correct": 1,
    "explain": "«آسیق» بیش از آنکه آرایش باشد طلسم بود و باور بر آن بود از بیماری، به‌ویژه پیش و هنگام بارداری، حفظ می‌کند.",
    "src": {
     "t": "Google Arts & Culture: Teke jewelry",
     "u": "https://artsandculture.google.com/story/KwUxe92Wo4C4oA"
    }
   },
   {
    "cat": "cult",
    "q": "در فرهنگ نان ترکمن، چه کاری بسیار بی‌ادبانه است؟",
    "options": [
     "بریدن نان با چاقو",
     "خوردن نان گرم",
     "وارونه‌گذاشتن قرص نان",
     "تقسیم نان با مهمان"
    ],
    "correct": 2,
    "explain": "وارونه‌کردن نان یا بدرفتاری با آن بسیار ناپسند است.",
    "src": {
     "t": "ویکی‌پدیا: Turkmen cuisine",
     "u": "https://en.wikipedia.org/wiki/Turkmen_cuisine"
    }
   },
   {
    "cat": "cult",
    "q": "«دوغراما» (dograma) بیشتر از چه ساخته می‌شود؟",
    "options": [
     "برنج و زعفران",
     "دل‌وجگر و نان خرد‌شده",
     "ماست و خیار",
     "ماهی و لیمو"
    ],
    "correct": 1,
    "explain": "بنا به ویکی‌پدیا از دل‌وجگر و گوشت خرد‌شده، نان، پیاز و گوجه ساخته می‌شود.",
    "src": {
     "t": "ویکی‌پدیا: Turkmen cuisine",
     "u": "https://en.wikipedia.org/wiki/Turkmen_cuisine"
    }
   },
   {
    "cat": "cult",
    "q": "«پیشمه» (pishme) در نوروز چگونه به مهمان داده می‌شود؟",
    "options": [
     "سرد با بستنی",
     "با ماهی شور",
     "با شراب",
     "با میوهٔ خشک"
    ],
    "correct": 3,
    "explain": "در نوروز دختران با پیشمه و میوهٔ خشک از مهمان‌ها پذیرایی می‌کنند.",
    "src": {
     "t": "ویکی‌پدیا: Turkmen cuisine",
     "u": "https://en.wikipedia.org/wiki/Turkmen_cuisine"
    }
   },
   {
    "cat": "her",
    "q": "نخستین محوطهٔ ترکمنستان که در ۱۹۹۹ در فهرست میراث جهانی یونسکو ثبت شد کدام است؟",
    "options": [
     "نیسا",
     "مرو باستان",
     "کهنه‌گرگانج",
     "دروازهٔ دوزخ"
    ],
    "correct": 1,
    "explain": "«پارک تاریخی و فرهنگی مرو باستان» در ۱۹۹۹؛ کهنه‌گرگانج ۲۰۰۵ و نیسا ۲۰۰۷.",
    "src": {
     "t": "ویکی‌پدیا: میراث جهانی در ترکمنستان",
     "u": "https://en.wikipedia.org/wiki/List_of_World_Heritage_Sites_in_Turkmenistan"
    }
   },
   {
    "cat": "her",
    "q": "مناره قطلغ‌تیمور (حدود ۶۰ متر) در کدام محوطهٔ جهانی ترکمنستان است؟",
    "options": [
     "مرو",
     "نیسا",
     "کهنه‌گرگانج",
     "یانگی‌قلعه"
    ],
    "correct": 2,
    "explain": "مناره در کهنه‌گرگانج (داشوغوز)، پایتخت خوارزم است.",
    "src": {
     "t": "ویکی‌پدیا: میراث جهانی در ترکمنستان",
     "u": "https://en.wikipedia.org/wiki/List_of_World_Heritage_Sites_in_Turkmenistan"
    }
   },
   {
    "cat": "her",
    "q": "آرامگاه کدام سلطان سلجوقی در مرو (اوایل سدهٔ ۱۲) است؟",
    "options": [
     "سنجر",
     "طغرل‌بیگ",
     "ملک‌شاه",
     "محمود غزنوی"
    ],
    "correct": 0,
    "explain": "آرامگاه سلطان سنجر (فرمانروا از ۱۱۱۸ تا ۱۱۵۷) در سلطان‌قلعهٔ مرو است.",
    "src": {
     "t": "ویکی‌پدیا: میراث جهانی در ترکمنستان",
     "u": "https://en.wikipedia.org/wiki/List_of_World_Heritage_Sites_in_Turkmenistan"
    }
   },
   {
    "cat": "lit",
    "q": "یونسکو در ۲۰۱۸ «میراث دده قورقود» را به درخواست کدام کشورها ثبت کرد؟",
    "options": [
     "ترکمنستان و ازبکستان",
     "ایران و عراق",
     "ترکمنستان و ترکیه",
     "آذربایجان، قزاقستان و ترکیه"
    ],
    "correct": 3,
    "explain": "ثبت ۲۰۱۸ به درخواست آذربایجان، قزاقستان و ترکیه بود؛ ترکمنستان جزو درخواست‌دهندگان نبود.",
    "src": {
     "t": "ویکی‌پدیا: Book of Dede Korkut",
     "u": "https://en.wikipedia.org/wiki/Book_of_Dede_Korkut"
    }
   },
   {
    "cat": "lit",
    "q": "نسخهٔ «گنبد» از «کتاب ترکمان» (دده قورقود) در ۲۰۱۸ در کجا پیدا شد؟",
    "options": [
     "گنبد کاووس (ایران)",
     "درسدن (آلمان)",
     "واتیکان",
     "کهنه‌گرگانج"
    ],
    "correct": 0,
    "explain": "در مجموعهٔ خصوصی در گنبد کاووس؛ عنوانش «جلد دوم کتاب ترکمان» است.",
    "src": {
     "t": "ویکی‌پدیا: Book of Dede Korkut",
     "u": "https://en.wikipedia.org/wiki/Book_of_Dede_Korkut"
    }
   },
   {
    "cat": "lit",
    "q": "نخستین دارندهٔ لقب «اوغلان باخشی» که دانسته می‌شود، کیست؟",
    "options": [
     "مختومقلی",
     "کمینه",
     "ساحی جپباروف",
     "مولانپس"
    ],
    "correct": 2,
    "explain": "ساحی جپباروف (۱۹۰۵–۱۹۷۷)، بخشی و سازمان‌دهندهٔ نخستین گروه سازی-آوازی «خانهٔ جمهوری هنر مردمی» (۱۹۳۷).",
    "src": {
     "t": "World Music Central: Oghlan Bakhshi",
     "u": "https://worldmusiccentral.org/?p=94494"
    }
   },
   {
    "cat": "hist",
    "q": "کهنه‌گرگانج در چه سالی با یورش چنگیزخان ویران شد؟",
    "options": [
     "۱۱۲۱",
     "۱۲۲۱",
     "۱۳۲۱",
     "۱۴۲۱"
    ],
    "correct": 1,
    "explain": "در ۱۲۲۱؛ همان سالی که مغول‌ها اوغوزها را از سیردریا به قره‌قوم و کرانهٔ خزر راندند.",
    "src": {
     "t": "ویکی‌پدیا: میراث جهانی در ترکمنستان",
     "u": "https://en.wikipedia.org/wiki/List_of_World_Heritage_Sites_in_Turkmenistan"
    }
   },
   {
    "cat": "hist",
    "q": "در سده‌های ۱۱ و ۱۲ کدام شهر امروزِ ترکمنستان پایتخت سلجوقیان بود؟",
    "options": [
     "مرو",
     "نیسا",
     "داشوغوز",
     "ترکمن‌باشی"
    ],
    "correct": 0,
    "explain": "مرو پایتخت سلجوقیان بود؛ سلطان سنجر از ۱۱۱۸ تا ۱۱۵۷ فرمانروا بود.",
    "src": {
     "t": "ویکی‌پدیا: میراث جهانی در ترکمنستان",
     "u": "https://en.wikipedia.org/wiki/List_of_World_Heritage_Sites_in_Turkmenistan"
    }
   },
   {
    "cat": "hist",
    "q": "از نیمهٔ کدام سده نام «اوغوز» میان ترکان کم‌کم جای خود را به «ترکمان» داد؟",
    "options": [
     "سدهٔ ۶",
     "سدهٔ ۱۰",
     "سدهٔ ۱۴",
     "سدهٔ ۱۸"
    ],
    "correct": 1,
    "explain": "از نیمهٔ سدهٔ ۱۰؛ این روند تا آغاز سدهٔ ۱۳ تمام شد.",
    "src": {
     "t": "ویکی‌پدیا: Book of Dede Korkut",
     "u": "https://en.wikipedia.org/wiki/Book_of_Dede_Korkut"
    }
   },
   {
    "cat": "hist",
    "q": "ابوالغازی، نویسندهٔ «شجرهٔ ترکمن»، خان کدام خانات بود؟",
    "options": [
     "بخارا",
     "قوقند",
     "خیوه",
     "مرو"
    ],
    "correct": 2,
    "explain": "ابوالغازی بهادرخان از ۱۶۴۳/۴۴ تا ۱۶۶۳ خان خیوه بود.",
    "src": {
     "t": "ویکی‌پدیا: Shajara-i Tarākima",
     "u": "https://en.wikipedia.org/wiki/Shajara-i_Tar%C4%81kima"
    }
   },
   {
    "cat": "hist",
    "q": "روسیه در چه سالی مرو را گرفت؟",
    "options": [
     "۱۸۶۴",
     "۱۸۸۴",
     "۱۹۰۴",
     "۱۹۲۴"
    ],
    "correct": 1,
    "explain": "مرو در ۱۸۸۴ گرفته شد؛ پیش‌تر در ۱۸۷۹ تکه‌ها در گوک‌تپه پیروز و در ۱۸۸۰–۸۱ شکست خورده بودند.",
    "src": {
     "t": "ویکی‌پدیا: Teke (tribe)",
     "u": "https://en.wikipedia.org/wiki/Teke_(tribe)"
    }
   },
   {
    "cat": "tribe",
    "q": "در روایت ابوالغازی، فرزندان اوغوزخان به دو بالِ «بوزوق‌ها (تیرهای خاکستری)» و کدام بال تقسیم می‌شوند؟",
    "options": [
     "اوچ‌اوق‌ها (سه تیر)",
     "سرخ‌پوشان",
     "کوه‌نشینان",
     "سوارکاران"
    ],
    "correct": 0,
    "explain": "پسران گون، آی و یلدیز «بوزوق» و پسران گوک، داغ و دنیز «اوچ‌اوق» نام دارند.",
    "src": {
     "t": "ویکی‌پدیا: Shajara-i Tarākima",
     "u": "https://en.wikipedia.org/wiki/Shajara-i_Tar%C4%81kima"
    }
   }
  ],
  "cats": [
   {
    "id": "hist",
    "label": "تاریخ"
   },
   {
    "id": "tribe",
    "label": "ایل‌ها و شجره‌نامه"
   },
   {
    "id": "lang",
    "label": "زبان و خط"
   },
   {
    "id": "cult",
    "label": "فرهنگ و آیین"
   },
   {
    "id": "lit",
    "label": "ادبیات و موسیقی"
   },
   {
    "id": "her",
    "label": "میراث و مکان‌ها"
   },
   {
    "id": "world",
    "label": "ترکمن‌ها در جهان"
   }
  ],
  "ui": {
   "quizIntro": "{N} سؤال چهارگزینه‌ای دربارهٔ تاریخ، ایل‌ها و شجره‌نامه، زبان، فرهنگ، ادبیات و میراث ترکمن. دور سریع ۱۰ سؤال تصادفی دارد، یا موضوع را خودت انتخاب کن. پس از هر پاسخ، توضیح و (برای سؤال‌های تازه) منبع را می‌بینی. امتیاز در همین مرورگر ذخیره می‌شود.",
   "quizQuick": "دور سریع (۱۰ سؤال تصادفی)",
   "quizAllQ": "همهٔ سؤال‌ها",
   "quizByTopic": "بر پایهٔ موضوع",
   "quizChange": "حالت دیگر",
   "quizReview": "مرور پاسخ‌های اشتباه",
   "quizSource": "منبع",
   "quizMsgA": "عالی! تسلط خوبی داری.",
   "quizMsgB": "خیلی خوب!",
   "quizMsgC": "خوب؛ بخش ایل‌ها و شجره‌نامه را هم ببین.",
   "quizMsgD": "ادامه بده؛ بخش‌ها را بخوان و دوباره امتحان کن.",
   "quizBestMode": "بهترین"
  }
 },
 "tk": {
  "questions": [
   {
    "cat": "tribe",
    "q": "Abulgazynyň «Şejereýi terakime» eseri köp çeşmä görä haýsy ýylda tamamlandy?",
    "options": [
     "1559",
     "1659",
     "1759",
     "1859"
    ],
    "correct": 1,
    "explain": "Köp çeşmede 1659 (käbirinde 1661). Abulgazy ony türkmen mollalarynyň, şeýhleriniň we begleriniň haýyşy bilen ýazdy.",
    "src": {
     "t": "Wikipedia: Shajara-i Tarākima",
     "u": "https://en.wikipedia.org/wiki/Shajara-i_Tar%C4%81kima"
    }
   },
   {
    "cat": "tribe",
    "q": "Mahmyt Kaşgarly «Diwanü lugat it-türk»de nähili Oguz tiresini sanaýar?",
    "options": [
     "12",
     "22",
     "24",
     "40"
    ],
    "correct": 1,
    "explain": "Kaşgarly (XI asyr) 22 tireni sanaýar; Reşideddin we Abulgazynyň sanawy 24 tireli.",
    "src": {
     "t": "Durmuş (2025): Oguz tire atlarynyň manylary",
     "u": "https://dergipark.org.tr/tr/download/journal-file/34254"
    }
   },
   {
    "cat": "tribe",
    "q": "Haýsy iki tire Kaşgarlynyň sanawynda ýok we Sümere görä oguzlara goşulan halaç tiresi bolupdyr?",
    "options": [
     "Kyzyk we Karkyn",
     "Salyr we Kynyk",
     "Gaýy we Baýat",
     "Afşar we Ýywa"
    ],
    "correct": 0,
    "explain": "«Kyzyk» we «Karkyn» Kaşgarlynyň sanawynda ýok.",
    "src": {
     "t": "Durmuş (2025): Oguz tire atlarynyň manylary",
     "u": "https://dergipark.org.tr/tr/download/journal-file/34254"
    }
   },
   {
    "cat": "tribe",
    "q": "Abulgazynyň rowaýatyna görä «Salyr» tiresiniň ady nämäni aňladýar?",
    "options": [
     "Atly",
     "Çadyrly",
     "Hyzmatkär",
     "Gylyçly"
    ],
    "correct": 3,
    "explain": "Abulgazy «Salyr»y «gylyçly» diýip düşündirýär; Reşideddin nirä barsa gylyç we gürze çekýär diýýär.",
    "src": {
     "t": "Durmuş (2025): Oguz tire atlarynyň manylary",
     "u": "https://dergipark.org.tr/tr/download/journal-file/34254"
    }
   },
   {
    "cat": "tribe",
    "q": "Abulgazy haýsy üç häzirki türkmen tiresini Salyrdan çykarýar?",
    "options": [
     "Çowdur, Göklen, Saryk",
     "Teke, Çowdur, Saryk",
     "Teke, Ýomut, Ärsary",
     "Ýomut, Göklen, Çowdur"
    ],
    "correct": 2,
    "explain": "Abulgazynyň rowaýatynda Teke, Ýomut we Ärsary Salyrdan çykýar.",
    "src": {
     "t": "Wikipedia: Shajara-i Tarākima",
     "u": "https://en.wikipedia.org/wiki/Shajara-i_Tar%C4%81kima"
    }
   },
   {
    "cat": "tribe",
    "q": "Türkmen dilinde «teke» näme diýmek?",
    "options": [
     "At",
     "Teke geçi",
     "Bürgüt",
     "Möjek"
    ],
    "correct": 1,
    "explain": "«Teke» türkmen dilinde «erkek geçi»; Stuart ony «dag geçisi» ýa-da sürini ugrukdyrýan garry teke diýip düşündirýär.",
    "src": {
     "t": "Wikipedia: Teke (tribe)",
     "u": "https://en.wikipedia.org/wiki/Teke_(tribe)"
    }
   },
   {
    "cat": "tribe",
    "q": "Magtymguly Göklen tiresiniň haýsy taýpasyndandy?",
    "options": [
     "Gaýy",
     "Baýat",
     "Salyr",
     "Gerkez"
    ],
    "correct": 3,
    "explain": "Magtymguly Göklenleriň «Gerkez» tiresindendi (TDV).",
    "src": {
     "t": "TDV İslâm Ansiklopedisi: Göklen",
     "u": "https://islamansiklopedisi.org.tr/goklen"
    }
   },
   {
    "cat": "tribe",
    "q": "«Magtymguly» ady nämäni aňladýar?",
    "options": [
     "Magtymyň guly",
     "Dagyň ogly",
     "Firak şahyry",
     "Tiräniň hyzmatkäri"
    ],
    "correct": 0,
    "explain": "«Magtym» türkmeniň mukaddes nesilleriniň (öwlat) biri; ady «Magtymyň guly» diýmek.",
    "src": {
     "t": "Cyberleninka: Magtymguly Firagi",
     "u": "https://cyberleninka.ru/article/n/improving-students-communication-skills-through-magtymguly-firagi-s-poems"
    }
   },
   {
    "cat": "tribe",
    "q": "Aşakdakylardan haýsy türkmeniň «öwlat» (mukaddes nesil) toparlarynyň biri?",
    "options": [
     "Teke",
     "Ýomut",
     "Hoja",
     "Ärsary"
    ],
    "correct": 2,
    "explain": "Hoja, Seýit, Şyh, Magtym, Ata we Mýuwür öwlatlar; Teke, Ýomut we Ärsary bolsa tire.",
    "src": {
     "t": "SAGE Encyclopedia of Global Religion: Turkmenistan",
     "u": "https://sk.sagepub.com/ency/edvol/embed/globalreligion/chpt/turkmenistan"
    }
   },
   {
    "cat": "tribe",
    "q": "Däp Seljuklar nesilini haýsy oguz tiresine ýetirýär?",
    "options": [
     "Kynyk",
     "Afşar",
     "Gaýy",
     "Begdili"
    ],
    "correct": 0,
    "explain": "Seljuklar däp boýunça Kynyk tiresinden hasaplanýar (Osmanlylar Gaýydan, alymlaryň şübhesi bilen).",
    "src": {
     "t": "Wikipedia: Shajara-i Tarākima",
     "u": "https://en.wikipedia.org/wiki/Shajara-i_Tar%C4%81kima"
    }
   },
   {
    "cat": "hist",
    "q": "1879-njy ýylda Gökdepe söweşinde rus goşunyny haýsy türkmen tiresi ýeňdi?",
    "options": [
     "Teke",
     "Ýomut",
     "Ärsary",
     "Salyr"
    ],
    "correct": 0,
    "explain": "1879-njy ýylda Tekeler Gökdepede ýeňiş gazandy; 1880–81-nji ýyllarda ýeňlip, Merw 1884-nji ýylda alnypdyr.",
    "src": {
     "t": "Wikipedia: Teke (tribe)",
     "u": "https://en.wikipedia.org/wiki/Teke_(tribe)"
    }
   },
   {
    "cat": "tribe",
    "q": "«Penjdeh wakasy» (1885) haýsy tiräniň ýerinde bolup geçdi?",
    "options": [
     "Ýomut",
     "Saryk",
     "Çowdur",
     "Göklen"
    ],
    "correct": 1,
    "explain": "Saryklar 1830-njy ýyldan soň Murgabyň ýokarsynda we Penjdehde ýerleşdi; Russiýa–Owganystan çaknyşygy şol ýerde bolupdyr.",
    "src": {
     "t": "Wikipedia: Saryk",
     "u": "https://en.wikipedia.org/wiki/Saryk"
    }
   },
   {
    "cat": "tribe",
    "q": "Hywanyň iň soňky hakyky hany Junaýdhan haýsy tirelidi?",
    "options": [
     "Teke",
     "Ärsary",
     "Ýomut",
     "Saryk"
    ],
    "correct": 2,
    "explain": "Junaýdhan ýomutdy (Keller 2001).",
    "src": {
     "t": "Wikipedia: Turkmen tribes",
     "u": "https://en.wikipedia.org/wiki/Turkmen_tribes"
    }
   },
   {
    "cat": "cult",
    "q": "Günbatar çeşmelerde «pil aýagy» («elephant’s foot») diýilýän Ärsary halysynyň esasy göli nähili görnüşde?",
    "options": [
     "Ýönekeý dörtburç",
     "Sekiz burçly",
     "Üçburç",
     "Doly tegelek"
    ],
    "correct": 1,
    "explain": "Ärsary göli uly we sekiz burçly bolup, hatarlarda gaýtalanýar.",
    "src": {
     "t": "Wikipedia: Turkmen rug",
     "u": "https://en.wikipedia.org/wiki/Turkmen_rug"
    }
   },
   {
    "cat": "lang",
    "q": "Häzirki türkmen latyn elipbiýinde näçe harp bar?",
    "options": [
     "26",
     "28",
     "30",
     "33"
    ],
    "correct": 2,
    "explain": "30 harp: 9 çekimli we 21 çekimsiz.",
    "src": {
     "t": "Wikipedia: Turkmen language",
     "u": "https://en.wikipedia.org/wiki/Turkmen_language"
    }
   },
   {
    "cat": "lang",
    "q": "Türkmen dilinde «suw» sözi nähili ýazylýar?",
    "options": [
     "su",
     "suw",
     "sub",
     "suv"
    ],
    "correct": 1,
    "explain": "«suw» «w» bilen: ata-baba türkmen sözi tegelek çekimli bilen gutarmaýar, stambul türkçesindäki «su»-dan tapawutlylykda.",
    "src": {
     "t": "Wikipedia: Turkmen language",
     "u": "https://en.wikipedia.org/wiki/Turkmen_language"
    }
   },
   {
    "cat": "lang",
    "q": "1940–1993-nji ýyllarda türkmen dili haýsy ýazuw bilen ýazylýardy?",
    "options": [
     "Arap",
     "Latyn",
     "Hytaý",
     "Kiril"
    ],
    "correct": 3,
    "explain": "Sowet döwründe kiril latynyň ýerini aldy; latyn 1993-nji ýylda dolandy.",
    "src": {
     "t": "Wikipedia: Turkmen language",
     "u": "https://en.wikipedia.org/wiki/Turkmen_language"
    }
   },
   {
    "cat": "lang",
    "q": "Türkmen elipbiýindäki «ň» harpy nähili ses berýär?",
    "options": [
     "«ng» burun sesi",
     "«ş»",
     "«j»",
     "«h»"
    ],
    "correct": 0,
    "explain": "«ň» burun sesi, «sing» sözündäki «ng» ýaly.",
    "src": {
     "t": "Wikipedia: Turkmen grammar",
     "u": "https://en.wikipedia.org/wiki/Turkmen_grammar"
    }
   },
   {
    "cat": "lang",
    "q": "Türkmen dilinde näçe çekimli bar?",
    "options": [
     "6",
     "8",
     "9",
     "12"
    ],
    "correct": 2,
    "explain": "9 çekimli: a, e, ä, i, y, o, ö, u, ü; çekimliniň uzynlygy hem many üýtgedýär.",
    "src": {
     "t": "Wikipedia: Turkmen language",
     "u": "https://en.wikipedia.org/wiki/Turkmen_language"
    }
   },
   {
    "cat": "lang",
    "q": "Türkmen işliginiň soňundaky «-mak» ýa-da «-mek» nämä bagly?",
    "options": [
     "Grammatik jyns",
     "Çekimlileriň sazlaşygy",
     "Bogunyň sany",
     "Düşüm"
    ],
    "correct": 1,
    "explain": "Arka çekimliler «-mak», öň çekimliler «-mek» alýar; meselem, obalardan we itlerden.",
    "src": {
     "t": "Wikipedia: Turkmen grammar",
     "u": "https://en.wikipedia.org/wiki/Turkmen_grammar"
    }
   },
   {
    "cat": "lang",
    "q": "Eýranyň we Owganystanyň türkmenleri henizem haýsy ýazuw bilen ýazýarlar?",
    "options": [
     "Türk latyny",
     "Kiril",
     "Hytaý ýazuwy",
     "Özgerdilen arap-pars"
    ],
    "correct": 3,
    "explain": "Eýranda we Owganystanda henizem özgerdilen arap-pars ýazuwy ýaýran.",
    "src": {
     "t": "Wikipedia: Turkmen language",
     "u": "https://en.wikipedia.org/wiki/Turkmen_language"
    }
   },
   {
    "cat": "lang",
    "q": "Türkmen elipbiýinde haýsy harp «ý» sessiz sesi («ýar» sözündäki) berýär?",
    "options": [
     "y",
     "ý",
     "j",
     "ž"
    ],
    "correct": 1,
    "explain": "«ý» sessiz «y»; «y» bolsa arka ýapyk çekimli.",
    "src": {
     "t": "Wikipedia: Turkmen grammar",
     "u": "https://en.wikipedia.org/wiki/Turkmen_grammar"
    }
   },
   {
    "cat": "world",
    "q": "Russiýanyň Stawropolyndaky türkmenler haýsy at bilen tanalýar?",
    "options": [
     "Truhmenler",
     "Kumyklar",
     "Nogaýlar",
     "Garaçaýlar"
    ],
    "correct": 0,
    "explain": "«Truhmenler»; Tokarewiň barlagyna görä XVII asyrda Demirgazyk Kawkaza göçüpdirler.",
    "src": {
     "t": "EKI Gyzyl kitaby: Trukhmens",
     "u": "https://www.eki.ee/books/redbook/trukhmens.shtml"
    }
   },
   {
    "cat": "world",
    "q": "Hytaýda haýsy halk nesilini oguzyň Salur tiresine ýetirýär?",
    "options": [
     "Uýgurlar",
     "Huýlar",
     "Salarlar",
     "Gazaklar"
    ],
    "correct": 2,
    "explain": "Salarlar (2020-de 165 159 adam) özlerini Salyrdan hasaplaýar; alymlar gelip çykyşyny «anyk däl» diýýär.",
    "src": {
     "t": "Wikipedia: Salar people",
     "u": "https://en.wikipedia.org/wiki/Salar_people"
    }
   },
   {
    "cat": "world",
    "q": "2021-nji ýyl Russiýa ilat ýazuwynda hasaba alnan türkmenleriň sany takmynan näçe?",
    "options": [
     "4 müň",
     "41 müň",
     "413 müň",
     "4 million"
    ],
    "correct": 1,
    "explain": "41 328 adam.",
    "src": {
     "t": "Wikipedia: Turkmens",
     "u": "https://en.wikipedia.org/wiki/Turkmens"
    }
   },
   {
    "cat": "world",
    "q": "Çeşmelere görä Özbegistanyň haýsy sebitinde türkmenler habar berilmedi?",
    "options": [
     "Horezm",
     "Surhandarýa",
     "Garagalpagystan",
     "Fergana"
    ],
    "correct": 3,
    "explain": "Çeşmeler (IWPR) Horezmi, Surhandarýany we Garagalpagystany agzaýar, Ferganany däl.",
    "src": {
     "t": "IWPR: Özbegistanyň türkmenleri",
     "u": "https://iwpr.net/ezwgy857"
    }
   },
   {
    "cat": "world",
    "q": "Owgan gelip çykyşly türkmenler 1982-nji ýylda toplumlaýyn Türkiýäniň haýsy şäherinde ornaşdy?",
    "options": [
     "Stambul",
     "Ankara",
     "Izmir",
     "Konýa"
    ],
    "correct": 0,
    "explain": "IWPR-iň habaryna görä uly topar 1982-nji ýylda Stambulda ornaşypdyr.",
    "src": {
     "t": "IWPR: Stambuldaky owgan türkmenleri",
     "u": "https://iwpr.net/tysbemd3"
    }
   },
   {
    "cat": "world",
    "q": "«Türkmen sährasy» Eýranyň haýsy ostanynda?",
    "options": [
     "Mazandaran",
     "Ýezd",
     "Golestan",
     "Kerman"
    ],
    "correct": 2,
    "explain": "Türkmen sährasy Golestanyň demirgazygy (Gonbad-e Kawus, Bender Türkmen).",
    "src": {
     "t": "Wikipedia: Turkmens",
     "u": "https://en.wikipedia.org/wiki/Turkmens"
    }
   },
   {
    "cat": "cult",
    "q": "ÝUNESKO-nyň türkmen halyçylygy resminamasynda (2019) haýsy goýun ösdürmek hem sungat zynjyrynyň bir bölegi?",
    "options": [
     "Saryja",
     "Merinos",
     "Hissar",
     "Dala"
    ],
    "correct": 0,
    "explain": "Zynjyr «saryja» goýun ösdürmekden ýüň gyrkmakdan dokamaga we dikeltmäge çenli bölekleri öz içine alýar.",
    "src": {
     "t": "UNESCO: Traditional Turkmen carpet making art",
     "u": "https://ich.unesco.org/en/RL/traditional-turkmen-carpet-making-art-in-turkmenistan-01486"
    }
   },
   {
    "cat": "cult",
    "q": "Türkmenistanyň baýdagynda we gerbinde ilkinji haly göli (däp tertibinde) haýsy tiräniň?",
    "options": [
     "Saryk",
     "Çowdur",
     "Ýomut",
     "Teke"
    ],
    "correct": 3,
    "explain": "Däp tertibi: Teke, Ýomut, Ärsary, Çowdur, Saryk.",
    "src": {
     "t": "Wikipedia: Turkmen rug",
     "u": "https://en.wikipedia.org/wiki/Turkmen_rug"
    }
   },
   {
    "cat": "cult",
    "q": "Ýürek görnüşli kümüş «asyk» bezegi türkmenleriň ynanjynda esasan haýsy ähmiýete eýedi?",
    "options": [
     "Pul",
     "Aýal üçin tumar",
     "Söweşiji nyşany",
     "Aşpez guraly"
    ],
    "correct": 1,
    "explain": "«Asyk» bezegden köp tumardy we aýaly, aýratyn göwreliligiň öňünden we wagtynda, kesellerden goraýar diýip ynanýardylar.",
    "src": {
     "t": "Google Arts & Culture: Teke jewelry",
     "u": "https://artsandculture.google.com/story/KwUxe92Wo4C4oA"
    }
   },
   {
    "cat": "cult",
    "q": "Türkmen çörek medeniýetinde haýsy hereket örän edepsizlik hasaplanýar?",
    "options": [
     "Çöregi pyçak bilen kesmek",
     "Ysy çörek iýmek",
     "Çöregi ters goýmak",
     "Çöregi myhman bilen paýlaşmak"
    ],
    "correct": 2,
    "explain": "Çöregi ters goýmak ýa-da oňa erbet garamak örän edepsizlik hasaplanýar.",
    "src": {
     "t": "Wikipedia: Turkmen cuisine",
     "u": "https://en.wikipedia.org/wiki/Turkmen_cuisine"
    }
   },
   {
    "cat": "cult",
    "q": "«Dograma» köplenç nämeden taýýarlanýar?",
    "options": [
     "Tüwi we zagpyran",
     "Gök-bagyr we owradylan çörek",
     "Gatyk we hyýar",
     "Balyk we limon"
    ],
    "correct": 1,
    "explain": "Wikipediýa görä gök-bagyr we owradylan etden, çörekden, sogandan we pomidordan taýýarlanýar.",
    "src": {
     "t": "Wikipedia: Turkmen cuisine",
     "u": "https://en.wikipedia.org/wiki/Turkmen_cuisine"
    }
   },
   {
    "cat": "cult",
    "q": "Nowruzda «pişme» myhmanlara nähili berilýär?",
    "options": [
     "Doňdurma bilen sowuk",
     "Duzly balyk bilen",
     "Çakyr bilen",
     "Guradylan miwe bilen"
    ],
    "correct": 3,
    "explain": "Nowruzda gyzlar myhmanlary pişme we guradylan miwe bilen garşylaýarlar.",
    "src": {
     "t": "Wikipedia: Turkmen cuisine",
     "u": "https://en.wikipedia.org/wiki/Turkmen_cuisine"
    }
   },
   {
    "cat": "her",
    "q": "1999-njy ýylda ÝUNESKO-nyň Dünýä mirasy sanawyna girizilen Türkmenistanyň ilkinji ýadygärligi haýsy?",
    "options": [
     "Nusaý",
     "Gadymy Merw",
     "Könegürgenç",
     "Derweze"
    ],
    "correct": 1,
    "explain": "«Gadymy Merw Döwlet taryhy-medeni seýilgähi» 1999-njy ýylda; Könegürgenç 2005, Nusaý 2007.",
    "src": {
     "t": "Wikipedia: World Heritage Sites in Turkmenistan",
     "u": "https://en.wikipedia.org/wiki/List_of_World_Heritage_Sites_in_Turkmenistan"
    }
   },
   {
    "cat": "her",
    "q": "Gutlug Timur minarasy (takmynan 60 metr) Türkmenistanyň haýsy Dünýä mirasynda?",
    "options": [
     "Merw",
     "Nusaý",
     "Könegürgenç",
     "Ýangykala"
    ],
    "correct": 2,
    "explain": "Minara Horezmiň paýtagty Könegürgençde (Daşoguz).",
    "src": {
     "t": "Wikipedia: World Heritage Sites in Turkmenistan",
     "u": "https://en.wikipedia.org/wiki/List_of_World_Heritage_Sites_in_Turkmenistan"
    }
   },
   {
    "cat": "her",
    "q": "Merwdäki (XII asyryň başy) mawzoleý haýsy Seljuk soltanyna degişli?",
    "options": [
     "Sanjar",
     "Tugrul beg",
     "Meliksah",
     "Mahmyt Gaznewi"
    ],
    "correct": 0,
    "explain": "Soltan Sanjaryň (1118–1157 ýyllarda hökümdar) mawzoleýi Merwiň Soltan Galasynda.",
    "src": {
     "t": "Wikipedia: World Heritage Sites in Turkmenistan",
     "u": "https://en.wikipedia.org/wiki/List_of_World_Heritage_Sites_in_Turkmenistan"
    }
   },
   {
    "cat": "lit",
    "q": "ÝUNESKO 2018-nji ýylda «Dede Gorkut mirasyny» haýsy ýurtlaryň haýyşy bilen girizdi?",
    "options": [
     "Türkmenistan we Özbegistan",
     "Eýran we Yrak",
     "Türkmenistan we Türkiýe",
     "Azerbaýjan, Gazagystan we Türkiýe"
    ],
    "correct": 3,
    "explain": "2018-nji ýyldaky giriş Azerbaýjanyň, Gazagystanyň we Türkiýäniň haýyşy bilen boldy; Türkmenistan haýyş edijileriň arasynda däldi.",
    "src": {
     "t": "Wikipedia: Book of Dede Korkut",
     "u": "https://en.wikipedia.org/wiki/Book_of_Dede_Korkut"
    }
   },
   {
    "cat": "lit",
    "q": "«Gonbad» golýazmasy (Dede Gorkut) 2018-nji ýylda nirede tapyldy?",
    "options": [
     "Gonbad-e Kawus (Eýran)",
     "Drezden (Germaniýa)",
     "Watikan",
     "Könegürgenç"
    ],
    "correct": 0,
    "explain": "Gonbad-e Kawusdaky hususy ýygyndyda; ady «Türkmen kitabynyň ikinji jildi».",
    "src": {
     "t": "Wikipedia: Book of Dede Korkut",
     "u": "https://en.wikipedia.org/wiki/Book_of_Dede_Korkut"
    }
   },
   {
    "cat": "lit",
    "q": "«Oglan bagşy» lakamynyň ilkinji eýesi hasaplanýan kim?",
    "options": [
     "Magtymguly",
     "Kemine",
     "Sähy Jepbarow",
     "Mollanepes"
    ],
    "correct": 2,
    "explain": "Sähy Jepbarow (1905–1977), bagşy we 1937-nji ýylda açylan Respublika halk döredijiligi öýüniň ilkinji topary guran adam.",
    "src": {
     "t": "World Music Central: Oghlan Bakhshi",
     "u": "https://worldmusiccentral.org/?p=94494"
    }
   },
   {
    "cat": "hist",
    "q": "Könegürgenç haýsy ýylda Çingiz hanyň çozuşynda weýran edildi?",
    "options": [
     "1121",
     "1221",
     "1321",
     "1421"
    ],
    "correct": 1,
    "explain": "1221-nji ýylda; şol ýyl mongollar oguzlary Sirderýadan Garagum we Hazar kenaryna sürdi.",
    "src": {
     "t": "Wikipedia: World Heritage Sites in Turkmenistan",
     "u": "https://en.wikipedia.org/wiki/List_of_World_Heritage_Sites_in_Turkmenistan"
    }
   },
   {
    "cat": "hist",
    "q": "XI–XII asyrlarda häzirki Türkmenistanyň haýsy şäheri Seljuklaryň paýtagtydy?",
    "options": [
     "Merw",
     "Nusaý",
     "Daşoguz",
     "Türkmenbaşy"
    ],
    "correct": 0,
    "explain": "Merw Seljuklaryň paýtagtydy; Soltan Sanjar 1118–1157 ýyllarda hökümdardy.",
    "src": {
     "t": "Wikipedia: World Heritage Sites in Turkmenistan",
     "u": "https://en.wikipedia.org/wiki/List_of_World_Heritage_Sites_in_Turkmenistan"
    }
   },
   {
    "cat": "hist",
    "q": "Haýsy asyryň ortalaryndan «Oguz» ady türkleriň özlerinde ýuwaş-ýuwaşdan «Türkmen» adyna ýer berdi?",
    "options": [
     "VI asyr",
     "X asyr",
     "XIV asyr",
     "XVIII asyr"
    ],
    "correct": 1,
    "explain": "X asyryň ortalaryndan; bu proses XIII asyryň başyna çenli tamamlandy.",
    "src": {
     "t": "Wikipedia: Book of Dede Korkut",
     "u": "https://en.wikipedia.org/wiki/Book_of_Dede_Korkut"
    }
   },
   {
    "cat": "hist",
    "q": "«Şejereýi terakime»niň awtory Abulgazy haýsy hanlygyň hanydy?",
    "options": [
     "Buhara",
     "Gokand",
     "Hywa",
     "Merw"
    ],
    "correct": 2,
    "explain": "Abulgazy Bahadyr han 1643/44–1663 ýyllarda Hywanyň hanydy.",
    "src": {
     "t": "Wikipedia: Shajara-i Tarākima",
     "u": "https://en.wikipedia.org/wiki/Shajara-i_Tar%C4%81kima"
    }
   },
   {
    "cat": "hist",
    "q": "Russiýa Merwi haýsy ýylda aldy?",
    "options": [
     "1864",
     "1884",
     "1904",
     "1924"
    ],
    "correct": 1,
    "explain": "Merw 1884-nji ýylda alyndy; öň 1879-njy ýylda Tekeler Gökdepede ýeňiş gazanypdy we 1880–81-nji ýyllarda ýeňlipdi.",
    "src": {
     "t": "Wikipedia: Teke (tribe)",
     "u": "https://en.wikipedia.org/wiki/Teke_(tribe)"
    }
   },
   {
    "cat": "tribe",
    "q": "Abulgazynyň rowaýatynda Oguz hanyň nesilleri «Bozoklar (çal oklar)» we haýsy ganata bölünýär?",
    "options": [
     "Üç oklar",
     "Gyzyl eşikliler",
     "Dagly adamlar",
     "Atlylar"
    ],
    "correct": 0,
    "explain": "Gün, Aý we Ýyldyz ogullary «Bozok», Gök, Dag we Deňiz ogullary «Üç ok» diýlip atlandyrylýar.",
    "src": {
     "t": "Wikipedia: Shajara-i Tarākima",
     "u": "https://en.wikipedia.org/wiki/Shajara-i_Tar%C4%81kima"
    }
   }
  ],
  "cats": [
   {
    "id": "hist",
    "label": "Taryh"
   },
   {
    "id": "tribe",
    "label": "Tireler we şejere"
   },
   {
    "id": "lang",
    "label": "Dil we ýazuw"
   },
   {
    "id": "cult",
    "label": "Medeniýet we däp-dessur"
   },
   {
    "id": "lit",
    "label": "Edebiýat we saz"
   },
   {
    "id": "her",
    "label": "Miras we ýerler"
   },
   {
    "id": "world",
    "label": "Dünýädäki türkmenler"
   }
  ],
  "ui": {
   "quizIntro": "Türkmen taryhy, tireler we şejere, dil, medeniýet, edebiýat we miras baradaky {N} dörtsany soragy. Çalt tapgyrda 10 tötänleýin sorag bar, ýa-da temany özüň saýla. Her jogapdan soň düşündiriş we (täze soraglar üçin) çeşme görkezilýär. Netije şu brauzerde saklanýar.",
   "quizQuick": "Çalt tapgyr (10 tötänleýin sorag)",
   "quizAllQ": "Ähli soraglar",
   "quizByTopic": "Tema boýunça",
   "quizChange": "Başga görnüş",
   "quizReview": "Ýalňyş jogaplary gözden geçir",
   "quizSource": "Çeşme",
   "quizMsgA": "Ajaýyp! Gowy bilýärsiň.",
   "quizMsgB": "Gaty gowy!",
   "quizMsgC": "Gowy; Tireler we şejere bölümine hem seret.",
   "quizMsgD": "Dowam et; bölümleri oka we täzeden synap gör.",
   "quizBestMode": "Iň gowusy"
  }
 }
}, OLD = ["lit", "lang", "cult", "her", "cult", "cult", "cult", "lang", "lit", "hist", "tribe", "tribe", "cult", "lit", "her", "tribe", "lit", "hist"];
  ['fa', 'tk'].forEach(l => {
    const Q = DATA[l].quiz;
    Q.questions.forEach((q, i) => { q.cat = OLD[i]; });
    Q.questions = Q.questions.concat(X[l].questions);
    Q.cats = X[l].cats;
    Object.assign(DATA[l].ui, X[l].ui);
    DATA[l].ui.quizIntro = DATA[l].ui.quizIntro.replace('{N}', String(Q.questions.length).replace(/\d/g, c => l === 'fa' ? '۰۱۲۳۴۵۶۷۸۹'[c] : c));
  });
})();
