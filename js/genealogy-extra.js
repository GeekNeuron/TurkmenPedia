/* Genealogy extras: meanings of the 24 Oghuz tribe names, modern Turkmen tribes, holy lineages (öwlat),
   tribal structure, dynasties and sources. Research notes: see README (Update 13). Hand-editable.
   Loaded after genealogy.js and data-new.js. */
(function(){
  const EXTRA = {
 "fa": {
  "modern": [
   {
    "id": "teke",
    "name": "تکه (Teke)",
    "from": "از سالور (در روایت ابوالغازی)",
    "where": "آخال و مری؛ ایران (ترکمن‌صحرا)",
    "text": "«تکه» در ترکمنی یعنی «بُز نر» و بزرگ‌ترین ایل ترکمن است. سنت آن‌ها را از سالور می‌داند. استوارت می‌گوید در دههٔ ۱۸۳۰ در دلتای مرغاب نزدیک مرو ساکن شدند و از آنجا تا قزل‌آروات (سردار امروز) گسترش یافتند؛ از این رو دو شاخهٔ «آخال‌تکه» و «مری‌تکه» پدید آمد. در سال ۱۸۷۹ در نبرد گوک‌تپه سپاه روس را شکست دادند، اما در ۱۸۸۰–۸۱ شکست خوردند و مرو در ۱۸۸۴ گرفته شد. گل «قوشلی» نماد قالی تکه و گل نخست پرچم ملی است. زبان معیار ترکمنی بیش از همه به گویش آخال‌تکه نزدیک است.",
    "parts": [
     "وکیل (Wekil)، بگ (Beg): با هم «توقتامیش»",
     "سوچموز (Suchmuz)، بوکشی (Bukshi): با هم «اوتامیش»"
    ],
    "note": "تقسیم چهارگانه را استوارت (۱۸۳۰ها) ثبت کرده؛ نام‌گذاری‌های دیگر هم در منابع هست.",
    "srcs": [
     "wikiTeke",
     "wikiTribes"
    ]
   },
   {
    "id": "yomut",
    "name": "یموت (Ýomut)",
    "from": "از سالور؛ سنت می‌گوید از کنیز «سالور قازان» برآمده‌اند",
    "where": "بالکان و داشوغوز؛ گلستان (ایران)",
    "text": "یموت‌ها هم کوچ‌نشین‌اند، هم نیمه‌کوچ‌نشین و هم یک‌جانشین. سه شاخهٔ اصلی در سنت روسی ثبت شده: جعفربای، آق و آتابای (آق و آتابای در دههٔ ۱۹۲۰ در «آق‌آتابای» ادغام شدند). امروز سه گروه اصلی دارند: یموتِ گرگان در ایران، یموتِ بالکان (باختری) و یموتِ داشوغوز یا خیوه (بایرام‌شالی). ساختار آن‌ها پیمانی سست از طایفه‌های خودمختار بود. آخرین حاکم عملی خیوه، جنیدخان، یموت بود. «کوشت‌دپدی» در ۲۰۱۷ در فهرست یونسکو ثبت شد.",
    "parts": [
     "جعفربای (Jafarbay)",
     "آق‌آتابای (Ak-Atabay)",
     "بایرام‌شالی (Bayram-Shali)"
    ],
    "note": "جزئیات شاخه‌ها در منابع یک‌دست نیست؛ مقالهٔ ویکی‌پدیا هم نیاز به بازنویسی علامت خورده است.",
    "srcs": [
     "wikiYomut",
     "wikiTribes"
    ]
   },
   {
    "id": "ersari",
    "name": "ارساری (Ärsary)",
    "from": "در سنت از «ایچکی» و «تاشقی» اوغوز؛ ریشهٔ نام: er «مرد دلیر» + sary «زرد، روشن» (تعبیر رایج، تقریبی)",
    "where": "لبپ (آمودریا)؛ افغانستان؛ پاکستان",
    "text": "ارساری‌ها بخش مهم «اتحاد ساین‌خان» (سده‌های ۱۳ تا ۱۷) بودند و از کوه‌های بالکان تا مانگیشلاق و شمال تا رود امبا می‌زیستند. پس از خشک‌شدن شاخهٔ باختری اوزبوی در سدهٔ ۱۷ به سوی آمودریا رفتند. شاخهٔ «علی‌ایلی» در ناحیهٔ کاکا (آخال امروز) ماند. بیشتر ترکمن‌های افغانستان و پاکستان ارساری‌اند.",
    "parts": [
     "قره (Kara)",
     "بکئول (Bekewul)",
     "گونش (Gunesh)",
     "اولودپه (Uludepe)",
     "علی‌ایلی (Ali-Eli) در آخال"
    ],
    "note": "در منابع نمی‌گویند تقسیم «ایچکی/تاشقی» سازمانی، نظامی یا جغرافیایی بوده.",
    "srcs": [
     "wikiTribes"
    ]
   },
   {
    "id": "saryk",
    "name": "ساریق (Saryk)",
    "from": "نیای اوغوزیِ مشخصی در منابع نیست؛ ریشهٔ نام: saryγ «زرد» یا saryq «گوسفند» (دو پیشنهاد)",
    "where": "بالای مرغاب (مری جنوبی: یولوتن، سرحدآباد)؛ ایران و افغانستان (بالا مرغاب، پنج‌ده)",
    "text": "در آغاز سدهٔ ۱۹ ساریق‌ها در ناحیهٔ مرو می‌زیستند، اما از ۱۸۳۰ تکه‌ها آنان را به بالادست دره مرغاب راندند؛ بالا مرغاب و پنج‌ده (پنج‌ده) نشستگاه‌های اصلی‌شان شد. در ۱۸۸۱ پس از نبرد گوک‌تپه و تشکیل ولایت فراخزر زیر کنترل روس‌ها آمدند و جمعیتشان در ۱۸۸۵ حدود ۶۵ هزار برآورد شد. «حادثهٔ پنج‌ده» (۱۸۸۵)، درگیری سپاه روسیه با نیروهای امارت افغانستان در پنج‌ده، که بحرانی روسی-بریتانیایی ساخت و مرز شمال‌باختری افغانستان را مشخص کرد، در سرزمین ساریق‌ها رخ داد. قالی ساریق سرخ‌قهوه‌ای تیره با نقش‌های ریز و خطوط باریک و گره متقارن (ترکی) است. ساریق‌ها ترکمنی (گویش ساریق) و در افغانستان دری هم می‌گویند و سنی‌اند.",
    "parts": [],
    "note": "جمعیت ۱۸۸۵ برآوردی از Lansdell است و رقم دقیق نیست.",
    "srcs": [
     "wikiSaryk",
     "wikiPanjdeh",
     "wikiTribes"
    ]
   },
   {
    "id": "cowdur",
    "name": "چودور (Çowdur)",
    "from": "از چاولدور؛ در سنت جناح چپ سپاه اوغوزخان",
    "where": "داشوغوز؛ پیرامون خیوه؛ آمودریای میانه",
    "text": "به روایت ابوالغازی از سدهٔ ۱۱ در مانگیشلاق بودند. پس از یورش مغول (۱۲۲۱) اوغوزها از سیردریا به قره‌قوم و کرانهٔ خزر رانده شدند. در اوایل سدهٔ ۱۶ بخشی از اتحاد ساین‌خان بودند. وقتی قلموق‌ها وارد مانگیشلاق شدند اتحاد از هم پاشید و چودورها در جنوب‌خاوری خیوه زیر اقتدار یموت‌ها ماندند؛ گروهی هم نزدیک چارجو بر آمودریا. در خیوهٔ سدهٔ ۱۹ ایگدیر، بوزاچی، آبدال و عربچی را زیرمجموعهٔ آنان می‌شمردند. گل چودور یکی از پنج گل پرچم است.",
    "parts": [
     "ایگدیر",
     "بوزاچی",
     "آبدال",
     "عربچی"
    ],
    "note": "گروه‌بندی سدهٔ ۱۹ از Poullada ۲۰۱۸ نقل شده.",
    "srcs": [
     "wikiTribes"
    ]
   },
   {
    "id": "goklen",
    "name": "گوکلن (Göklen)",
    "from": "گروه‌های اوغوزی درونش: قینیق، بایندیر، بیگدیلی، قایی",
    "where": "گرگان و ترکمن‌صحرا (ایران)؛ قره‌قلعه (ترکمنستان)؛ خیوه (ازبکستان)",
    "text": "نام را معمولاً «سرزمین گوک‌ها» می‌خوانند (پسوند -len در نام ایل‌های شمال ایران هم هست)؛ توضیح قطعی ندارد. پس از سدهٔ ۱۶ و کم‌آبی، میان رودهای اترک و گرگان ساکن شدند. چون زودتر یک‌جانشین شدند، بسیاری در مدرسه‌های ایران و ترکستان درس خواندند و ادبیات پربار شد: مختومقلی از تیرهٔ «گرکز» گوکلن بود؛ پدرش دولت‌محمد آزادی، برادرزاده و شاگردش ذلیلی، و سیدی (ارساری‌تبار، پرورده در میان گوکلن) هم از همین فضایند. برآورد شمار گوکلن‌ها حدود ۳۰۰ هزار است (برآورد TDV، ۲۰۲۰).",
    "parts": [
     "کیریق/قینیق",
     "بایندیر",
     "ینکاک",
     "سنکریک",
     "گرکز (Gerkez)",
     "چاکیر-بیگدیلی",
     "عرب",
     "آی‌درویش",
     "قره‌بالکان",
     "ارککلی",
     "قایی",
     "شیخ‌خواجه"
    ],
    "note": "فهرست زیرشاخه‌ها را TDV از هنچه، وامبری و İA آورده؛ املای ترکمنی آن‌ها در منابع یک‌دست نیست.",
    "srcs": [
     "tdvGoklen",
     "iranicaGuklan"
    ]
   },
   {
    "id": "salyr",
    "name": "سالور / سالیر (Salyr)",
    "from": "همان ایل اوغوزی سالور (نیای تکه، یموت، ارساری در روایت ابوالغازی)",
    "where": "مرو، سرخس (آخال و مری)؛ پراکنده در ترکیه، افغانستان، ازبکستان و چین",
    "text": "سالور از معدود ایل‌های اصلی اوغوز است که تا امروز باقی مانده. پیمان «سالور» در مانگیشلاق و دامنهٔ بالکان بود و در اواخر سدهٔ ۱۷ فروپاشید؛ سه ایل ارشد به خاور و سپس به جنوب رفتند: خوارزم، آمودریای میانه، آخال و کپه‌داغ، و رود مرغاب. استوارت در ۱۸۸۱ از «۵۰۰۰ چادر سالور» در میان مری‌تکه یاد می‌کند. ایل سالور پیش از دورهٔ نو بر اثر شکست نظامی ضعیف شد. «سالارهای» چین (حدود ۱۶۵ هزار نفر در سرشماری ۲۰۲۰) خود را از این ایل می‌دانند.",
    "parts": [],
    "note": "پیوند سالارهای چین با سالور سنت و زبان‌شناسی را شامل می‌شود، اما پژوهشگران خاستگاه آن‌ها را «نامطمئن» می‌دانند.",
    "srcs": [
     "countrystudies2",
     "wikiSalar",
     "wikiTeke"
    ]
   }
  ],
  "tribesDetail": {
   "kayi": {
    "meaning": [
     [
      "رشیدالدین",
      "استوار و پایدار"
     ],
     [
      "ریشه‌شناسی امروزی",
      "از ریشهٔ kad- «سخت، استوار» (در گویش اوغوز d به y بدل شده)؛ یعنی استوار و سخت‌جان"
     ]
    ],
    "later": "در میان ایل گوکلنِ امروزی هم گروهی به نام «قایی» دیده می‌شود (TDV)."
   },
   "bayat": {
    "meaning": [
     [
      "رشیدالدین",
      "دارای دولت و نعمت"
     ],
     [
      "ابوالغازی",
      "ثروتمند"
     ],
     [
      "ریشه‌شناسی امروزی",
      "از bay «ثروتمند» با پسوند جمع -at: «توانگران»"
     ]
    ],
    "later": ""
   },
   "alkaevli": {
    "meaning": [
     [
      "رشیدالدین",
      "هرجا روند کامیاب و آسوده‌اند"
     ],
     [
      "ابوالغازی",
      "همساز و سازگار (موافق)"
     ],
     [
      "ریشه‌شناسی امروزی",
      "احتمالاً «اهل چادر سرخ» (al-evli)؛ تفسیرهای دیگر: «ستوده» یا «چادر گرد»"
     ]
    ],
    "later": ""
   },
   "karaevli": {
    "meaning": [
     [
      "رشیدالدین",
      "در «راه سیاه» نیکو می‌رود (تعبیر رشیدالدین)"
     ],
     [
      "ابوالغازی",
      "هرجا بنشینند با چادر می‌نشینند"
     ],
     [
      "ریشه‌شناسی امروزی",
      "«اهل چادر سیاه» (چادر نمدی یا موی بز)"
     ]
    ],
    "later": ""
   },
   "yazir": {
    "meaning": [
     [
      "رشیدالدین",
      "مردم سرزمین‌های بسیار با تو هستند"
     ],
     [
      "ابوالغازی",
      "سرور سرزمین‌ها"
     ],
     [
      "ریشه‌شناسی امروزی",
      "از yaz- «گستردن»: گسترده یا صاحب دشت پهناور"
     ]
    ],
    "later": "در برخی فهرست‌های امروزی «یازیر» با نام «قاراداشلی» از ایل‌های کوچک ترکمن یاد شده است."
   },
   "doger": {
    "meaning": [
     [
      "رشیدالدین",
      "به سوی چادر می‌آیند"
     ],
     [
      "ابوالغازی",
      "پیرامون، اطراف"
     ],
     [
      "ریشه‌شناسی امروزی",
      "töger «گرد» یا «صاحب اسب پیشانی‌سفید (tüküz)»"
     ]
    ],
    "later": ""
   },
   "dodurga": {
    "meaning": [
     [
      "رشیدالدین",
      "سرزمین می‌گیرد و سامان می‌دهد"
     ],
     [
      "ابوالغازی",
      "کسی که می‌داند سرزمین را بگیرد و نگه دارد"
     ],
     [
      "ریشه‌شناسی امروزی",
      "از tut- «گرفتن، نگه داشتن»: نگهبان، فرمانروا"
     ]
    ],
    "later": "جایگاه این ایل در فهرست‌ها یکی نیست: شانزدهم نزد کاشغری، دهم نزد رشیدالدین، هفتم نزد ابوالغازی."
   },
   "yaparli": {
    "meaning": [
     [
      "ابوالغازی",
      "هرچه بر سر راهش بیاید ویران می‌کند"
     ],
     [
      "ریشه‌شناسی امروزی",
      "احتمالاً «چاروق‌پوش» یا yapar «مشک، عطر»؛ کاشغری شاید با نام «چاروقلوغ» از آن یاد کرده"
     ]
    ],
    "later": ""
   },
   "afshar": {
    "meaning": [
     [
      "رشیدالدین",
      "چابک‌دست و شکارپسند"
     ],
     [
      "ابوالغازی",
      "کارساز و زودکار"
     ],
     [
      "ریشه‌شناسی امروزی",
      "از av-ış «گرد آمدن»: چابک و تیزرو"
     ]
    ],
    "later": ""
   },
   "kizik": {
    "meaning": [
     [
      "رشیدالدین",
      "نیرومند، آشنا به قانون و جنگ"
     ],
     [
      "ابوالغازی",
      "اژدها / دلاور"
     ],
     [
      "ریشه‌شناسی امروزی",
      "«خشمگین، سرسخت»"
     ]
    ],
    "later": "در فهرست کاشغری نیست. به نظر سومر، «قیزیق» و «قارقین» دو ایل خَلَج بودند که به اوغوزها پیوستند."
   },
   "begdili": {
    "meaning": [
     [
      "رشیدالدین",
      "سخنش چون سخن بزرگان محترم است"
     ],
     [
      "ابوالغازی",
      "سخنش حرمت دارد"
     ],
     [
      "ریشه‌شناسی امروزی",
      "«زبانِ بگ‌ها»"
     ]
    ],
    "later": "سنت، دودمان خوارزمشاهیان را از این ایل می‌داند. در میان گوکلن هم شاخه‌ای به نام «چاکیر-بیگدیلی» هست (TDV)."
   },
   "karkin": {
    "meaning": [
     [
      "رشیدالدین",
      "خوراک فراوان دارد و مردم را سیر می‌کند"
     ],
     [
      "ابوالغازی",
      "دارای خوراک"
     ],
     [
      "ریشه‌شناسی امروزی",
      "«فراوان، توانگر، سیر»"
     ]
    ],
    "later": "(نک: توضیح «قیزیق») این ایل هم در فهرست کاشغری نیست و خلجی‌تبار دانسته می‌شود."
   },
   "bayindir": {
    "meaning": [
     [
      "رشیدالدین",
      "همیشه در فراوانی"
     ],
     [
      "ابوالغازی",
      "برخوردار از نعمت"
     ],
     [
      "ریشه‌شناسی امروزی",
      "از bay «ثروتمند»: توانگر و خوش‌بخت"
     ]
    ],
    "later": "در میان گوکلن هم گروهی به نام «بایندیر» هست (TDV)."
   },
   "pecenek": {
    "meaning": [
     [
      "رشیدالدین",
      "کوشا و پرتلاش"
     ],
     [
      "ابوالغازی",
      "سازنده"
     ],
     [
      "ریشه‌شناسی امروزی",
      "از çapın- «شتافتن» یا «کوشا»"
     ]
    ],
    "later": ""
   },
   "cavuldur": {
    "meaning": [
     [
      "رشیدالدین",
      "به همه در کار کمک می‌کند، می‌جنگد و آرام نمی‌گیرد"
     ],
     [
      "ابوالغازی",
      "آبرومند و باناموس"
     ],
     [
      "ریشه‌شناسی امروزی",
      "از çav «آوازه»: مشهور و نام‌آور"
     ]
    ],
    "later": "ایل بزرگ «چودور» ترکمن در سنت خود را از این ایل می‌داند؛ بنا به روایت‌ها، جناح چپ سپاه اوغوزخان بوده‌اند."
   },
   "cepni": {
    "meaning": [
     [
      "رشیدالدین",
      "هرجا دشمن باشد می‌جنگد"
     ],
     [
      "ابوالغازی",
      "دلاور"
     ],
     [
      "ریشه‌شناسی امروزی",
      "از çap- «حمله کردن»: حمله‌ور، دلیر"
     ]
    ],
    "later": ""
   },
   "salur": {
    "meaning": [
     [
      "رشیدالدین",
      "هرجا برود شمشیر و گرز بر می‌کشد"
     ],
     [
      "ابوالغازی",
      "شمشیردار"
     ],
     [
      "ریشه‌شناسی امروزی",
      "از sal- «افکندن، حمله کردن» + -gur: پیوسته حمله‌ور"
     ]
    ],
    "later": "ابوالغازی سالور را برجسته می‌کند: تکه، یموت و ارساری را از آن می‌داند. «سالور اوگورجیک آلپ» شش پسر داشت: بردی، بوقا، اوسار، کوسار، یایجی و دینگلی. «سالارهای» چین هم خود را از این ایل می‌دانند."
   },
   "eymur": {
    "meaning": [
     [
      "رشیدالدین",
      "سپاه بسیار و ثروتمند"
     ],
     [
      "ابوالغازی",
      "ثروتمندترین ثروتمندان"
     ],
     [
      "ریشه‌شناسی امروزی",
      "از edimür > eymür: «نیک و توانگر»"
     ]
    ],
    "later": ""
   },
   "alayuntlu": {
    "meaning": [
     [
      "رشیدالدین",
      "اسب‌هایش همیشه نیکو و فراوان"
     ],
     [
      "ابوالغازی",
      "اسب‌ابلق‌دار"
     ],
     [
      "ریشه‌شناسی امروزی",
      "ala «ابلق» + yund «اسب» + -lu"
     ]
    ],
    "later": ""
   },
   "yuregir": {
    "meaning": [
     [
      "رشیدالدین",
      "کارش همیشه والاست"
     ],
     [
      "ابوالغازی",
      "نیکوکار"
     ],
     [
      "ریشه‌شناسی امروزی",
      "از ör- «برخاستن»: سربلند و یاریگر"
     ]
    ],
    "later": ""
   },
   "igdir": {
    "meaning": [
     [
      "رشیدالدین",
      "نیک و بزرگ"
     ],
     [
      "ابوالغازی",
      "بزرگ"
     ],
     [
      "ریشه‌شناسی امروزی",
      "yeg «بهتر» + -dir: برتر"
     ]
    ],
    "later": ""
   },
   "bugduz": {
    "meaning": [
     [
      "رشیدالدین",
      "فروتن و خدمتگزار همه"
     ],
     [
      "ابوالغازی",
      "خدمتکار"
     ],
     [
      "ریشه‌شناسی امروزی",
      "از bük- «خم شدن»: فروتن"
     ]
    ],
    "later": ""
   },
   "yiva": {
    "meaning": [
     [
      "رشیدالدین",
      "اسب‌هایش بلندبالا و ورزیده"
     ],
     [
      "ابوالغازی",
      "والامقام"
     ],
     [
      "ریشه‌شناسی امروزی",
      "از yıv- «ستودن»: ستوده و برجسته"
     ]
    ],
    "later": ""
   },
   "kinik": {
    "meaning": [
     [
      "رشیدالدین",
      "هرجا باشد عزیز است"
     ],
     [
      "ابوالغازی",
      "عزیز"
     ],
     [
      "ریشه‌شناسی امروزی",
      "از kın- «آرزو کردن»: دوست‌داشتنی"
     ]
    ],
    "later": "کاشغری «قینیق» را نخستین ایل فهرست خود آورده، رشیدالدین آخرین. در میان گوکلن هم گروهی به نام «قیریق/قینیق» هست (TDV)."
   }
  },
  "ovlat": {
   "title": "اولاد (دودمان‌های مقدس)",
   "intro": "در کنار ایل‌هایی که نسب خود را به اوغوزخان می‌رسانند، در جامعهٔ ترکمن گروه‌هایی هستند که نسبشان را به یکی از چهار خلیفهٔ نخست می‌رسانند و از راه مبلغان صوفی به آن می‌پیوندند. به آن‌ها «اولاد» (öwlat) می‌گویند. پژوهشگران آن را شکل نو شدهٔ کیش نیاکان آمیخته با تصوف می‌دانند.",
   "order": "سنتاً شش اولاد، به ترتیب قداست و قدرت: خواجه، سید، شیخ، مختوم، آتا، مجاور.",
   "text": "اولادها میان همهٔ ایل‌ها پراکنده‌اند، برکت می‌دهند، در جشن‌ها و مراسم زندگی حاضر می‌شوند و میان طایفه‌ها و ایل‌ها میانجی‌اند. بنا به یکی از منابع کاملاً درون‌همسرند. شمار آن‌ها را برخی منابع پنج و برخی شش می‌گویند. آرامگاه بنیان‌گذاران اولادها (مانند مختوم اعظم، دانا آتا، قیزلی آتا و پاکیر شیخ) از زیارتگاه‌های شناخته‌شده است.",
   "note": "«اولاد» از نظر نسب با فهرست ۲۴ ایل اوغوز جداست؛ در منابع پیشاشوروی گاه آن‌ها را «غیرترکمن» می‌نامیدند.",
   "srcs": [
    "sageTurkmen",
    "countryReligion",
    "kinship"
   ]
  },
  "structure": {
   "title": "ساختار ایل: از «خلق» تا «چادر»",
   "intro": "جامعهٔ ترکمن در سنت یک نظام پاره‌پاره (segmentary) از گروه‌های سرزمینی بود: نسب از پدر می‌رسد، هر ایل به گروه‌های کوچک‌تر و نزدیک‌تر تقسیم می‌شود و شجره‌ها سینه‌به‌سینه نگه داشته می‌شد. دو غریبه وقتی به هم می‌رسند نخست می‌پرسند از کدام تیره‌اند.",
   "terms": [
    "خلق (halk)",
    "ایل (il)",
    "تایفه (taýpa)",
    "اورگ (urug)",
    "کوک (kök)",
    "کوم/قبیله (kowum, kabile)",
    "آیماق (aýmak/oýmak)",
    "اوبه (oba)",
    "بولوک (bölük)",
    "کوده، ددسه، لاقام، توپ، بیراته، توپار، تیره (küde, desse, lakam, top, birata, topar, tire)"
   ],
   "text": "این واژه‌ها هم‌پوشان‌اند و ترتیب یک‌دست و قطعی ندارند. سرکرده را «سردار» می‌گفتند و بزرگان را «آق‌ساقال» (ریش‌سفید) که بیشتر با اجماع برگزیده می‌شدند و دربارهٔ آب، زمین و جنگ تصمیم می‌گرفتند. حقوق عرفی نانوشته (تؤره/عادت) داور بود. از رهبران ستوده‌شده می‌توان آبا سردار، کیمیر کور، نوربردی خان، گوشوت خان و دیکمه سردار را نام برد. در دورهٔ شوروی هویت ایلی کم‌رنگ شد اما هنوز در زندگی اجتماعی اهمیت دارد.",
   "srcs": [
    "kinship",
    "wikiTribes"
   ]
  },
  "compare": {
   "title": "سه فهرست، سه روایت",
   "text": "محمود کاشغری (سدهٔ ۱۱) ۲۲ ایل اوغوز را می‌شمارد؛ «قیزیق» و «قارقین» در فهرست او نیستند و به نظر سومر دو ایل خلج بودند که بعدها به اوغوزها پیوستند. رشیدالدین فضل‌الله (سدهٔ ۱۴) و یازیجی‌اوغلو (سدهٔ ۱۵) فهرست ۲۴تایی با معنای نام‌ها آورده‌اند. ابوالغازی (سدهٔ ۱۷) «شجرهٔ ترکمن» را در ۱۶۵۹ (در برخی منابع ۱۶۶۱) به درخواست ملاها، شیخ‌ها و بگ‌های ترکمن نوشت، چون اوغوزنامه‌های پیشین را پر از «خطا و اختلاف» می‌دانستند. او تقریباً از روایت اسلامی‌شده و مغولی‌شدهٔ رشیدالدین پیروی می‌کند. هر ایل در این سنت گاه‌نشانهٔ (تمغا) و چراگاه خود را داشت.",
   "srcs": [
    "durmus2025",
    "wikiShajara"
   ]
  },
  "dynasties": {
   "title": "خاندان‌های بزرگ و ایل‌های اوغوزی‌شان (به روایت سنت)",
   "intro": "سنت تاریخی چند دودمان بزرگ را به ایل‌های کهن اوغوز می‌رساند. این پیوندها باور و روایت‌اند؛ پژوهشگران برای بیشترشان (به‌ویژه قایی و عثمانی) دلیل قطعی نمی‌شناسند.",
   "cols": [
    "خاندان",
    "ایل اوغوزی",
    "دوره"
   ],
   "srcs": [
    "wikiTribes",
    "wikiShajara"
   ],
   "rows": [
    {
     "dyn": "سلجوقیان",
     "tribe": "قینیق",
     "era": "سدهٔ ۱۱ م"
    },
    {
     "dyn": "خوارزمشاهیان",
     "tribe": "بیگدیلی",
     "era": "سده‌های ۱۱–۱۳ م"
    },
    {
     "dyn": "قره‌قویونلو",
     "tribe": "ییوا",
     "era": "سده‌های ۱۴–۱۵ م"
    },
    {
     "dyn": "آق‌قویونلو",
     "tribe": "بایندیر",
     "era": "سده‌های ۱۴–۱۶ م"
    },
    {
     "dyn": "عثمانیان",
     "tribe": "قایی (مورد بحث)",
     "era": "سده‌های ۱۳–۲۰ م"
    },
    {
     "dyn": "افشاریه",
     "tribe": "آفشار",
     "era": "سدهٔ ۱۸ م"
    }
   ]
  },
  "sources": [
   {
    "id": "durmus2025",
    "t": "Durmuş (۲۰۲۵): معنای نام ایل‌های اوغوز — Pamukkale Üniv. SBE Dergisi",
    "u": "https://dergipark.org.tr/tr/download/journal-file/34254"
   },
   {
    "id": "wikiTribes",
    "t": "ویکی‌پدیا: Turkmen tribes",
    "u": "https://en.wikipedia.org/wiki/Turkmen_tribes"
   },
   {
    "id": "wikiTeke",
    "t": "ویکی‌پدیا: Teke (tribe)",
    "u": "https://en.wikipedia.org/wiki/Teke_(tribe)"
   },
   {
    "id": "wikiYomut",
    "t": "ویکی‌پدیا: Yomut",
    "u": "https://en.wikipedia.org/wiki/Yomut"
   },
   {
    "id": "wikiShajara",
    "t": "ویکی‌پدیا: Shajara-i Tarākima",
    "u": "https://en.wikipedia.org/wiki/Shajara-i_Tar%C4%81kima"
   },
   {
    "id": "tdvGoklen",
    "t": "TDV İslâm Ansiklopedisi: Göklen (M. Aydın)",
    "u": "https://islamansiklopedisi.org.tr/goklen"
   },
   {
    "id": "iranicaGuklan",
    "t": "Encyclopaedia Iranica: Guklān",
    "u": "https://www.iranicaonline.org/articles/guklan/"
   },
   {
    "id": "countrystudies2",
    "t": "Library of Congress Country Studies: Formation of the Turkmen Nation",
    "u": "https://countrystudies.us/turkmenistan/2.htm"
   },
   {
    "id": "countryReligion",
    "t": "Library of Congress Country Studies: Religion (Turkmenistan)",
    "u": "https://countrystudies.us/turkmenistan/14.htm"
   },
   {
    "id": "sageTurkmen",
    "t": "SAGE Encyclopedia of Global Religion: Turkmenistan",
    "u": "https://sk.sagepub.com/ency/edvol/embed/globalreligion/chpt/turkmenistan"
   },
   {
    "id": "kinship",
    "t": "Countries and Their Cultures: Turkmens — Kinship",
    "u": "https://www.everyculture.com/Russia-Eurasia-China/Turkmens-Kinship.html"
   },
   {
    "id": "wikiSaryk",
    "t": "ویکی‌پدیا: Saryk",
    "u": "https://en.wikipedia.org/wiki/Saryk"
   },
   {
    "id": "wikiPanjdeh",
    "t": "ویکی‌پدیا: Panjdeh incident",
    "u": "https://en.wikipedia.org/wiki/Panjdeh_incident"
   },
   {
    "id": "wikiSalar",
    "t": "ویکی‌پدیا: Salar people",
    "u": "https://en.wikipedia.org/wiki/Salar_people"
   },
   {
    "id": "caucasus",
    "t": "Caucasian Knot: Turkmen (مرور کلی؛ ثانویه)",
    "u": "https://www.caucasianknot.org/articles/536"
   }
  ],
  "ui": {
   "modernTitle": "ایل‌های امروزی ترکمن و شاخه‌هایشان",
   "modernIntro": "این ایل‌ها از ایل‌های اوغوزی بالا برآمده‌اند یا با آن‌ها درآمیخته‌اند. هر کارت خلاصه‌ای از منابع است؛ مرزها و شمار شاخه‌ها در منابع گوناگون یکی نیست.",
   "from_": "نیا / سنت",
   "where": "سرزمین",
   "parts": "شاخه‌ها و بخش‌ها",
   "meaningTitle": "معنای نام (به روایت منابع)",
   "laterTitle": "در تاریخ و امروز",
   "srcTitle": "منابع",
   "approx": "معنی‌ها تفسیرهای قدیمی (گاه عامیانه) هستند؛ ریشه‌شناسی علمی امروز ممکن است فرق کند."
  }
 },
 "tk": {
  "modern": [
   {
    "id": "teke",
    "name": "Teke",
    "from": "Salyrdan (Abulgazy rowaýatynda)",
    "where": "Ahal we Mary; Eýran (Türkmen sährasy)",
    "text": "«Teke» türkmen dilinde «teke geçi» diýmek, iň uly türkmen tiresi. Däp ony Salyrdan çykarýar. Stuarta görä 1830-njy ýyllarda Murgabyň deltasynda Merwiň golaýynda ýaşap başlap, soňra Gyzylarbada çenli ýaýrapdyrlar; şeýdip «Ahal teke» we «Mary teke» şahalary döräpdir. 1879-njy ýylda Gökdepede rus goşunyny ýeňipdirler, ýöne 1880–81-nji ýyllarda ýeňlip, Merw 1884-nji ýylda alnypdyr. «Guşly göl» teke halysynyň nyşany we milli baýdagyň ilkinji göli. Standart türkmen dili has köp Ahal teke şiwesine ýakyn.",
    "parts": [
     "Wekil, Beg: bilelikde «Toktamyş»",
     "Suçmuz, Bukşy: bilelikde «Otamyş»"
    ],
    "note": "Dört bölünişigi Stuart (1830-njy ýyllar) ýazga alypdyr; başga atlandyrmalar hem çeşmelerde bar.",
    "srcs": [
     "wikiTeke",
     "wikiTribes"
    ]
   },
   {
    "id": "yomut",
    "name": "Ýomut",
    "from": "Salyrdan; däp «Salyr Gazanyň» gyrnagyndan diýýär",
    "where": "Balkan we Daşoguz; Golestan (Eýran)",
    "text": "Ýomutlar göçme, ýarym göçme we oturymly ýaşaýarlar. Rus däbinde üç esasy şahasy bellenýär: Jepbaý, Ak we Atabaý (Ak we Atabaý 1920-nji ýyllarda «Ak-Atabaý» bolup birleşipdir). Häzir üç esasy topary bar: Eýranyň Gurgan ýomutlary, Balkan (günbatar) ýomutlary we Daşoguz ýa-da Hywa (Baýramşaly) ýomutlary. Gurluşy özbaşdak taýpalaryň gowşak bileleşigidi. Hywanyň iň soňky hakyky hany Junaýdhan ýomutdy. «Kuştdepdi» 2017-nji ýylda ÝUNESKO sanawyna girizildi.",
    "parts": [
     "Jepbaý (Jafarbay)",
     "Ak-Atabaý",
     "Baýramşaly"
    ],
    "note": "Şahalaryň jikme-jiklikleri çeşmelerde birmeňzeş däl; Wikipediýa makalasy hem gaýtadan ýazylmaga muhtaç diýlip bellenipdir.",
    "srcs": [
     "wikiYomut",
     "wikiTribes"
    ]
   },
   {
    "id": "ersari",
    "name": "Ärsary",
    "from": "Däp boýunça oguzyň «içki» we «daşky» bölegi; ady: er «batyr» + sary «sary, açyk» (ýaýran, takmynan düşündiriş)",
    "where": "Lebap (Amyderýa); Owganystan; Pakistan",
    "text": "Ärsarylar «Saýyn han» bileleşiginiň (XIII–XVII asyrlar) möhüm bölegidi, Balkan daglaryndan Mangyşlaga çenli we demirgazykda Emba derýasyna çenli ýaşapdyrlar. XVII asyrda Uzboýuň günbatar şahasy gurandan soň Amyderýa tarap göçüpdirler. «Ali-Eli» şahasy Kaka töwereginde (häzirki Ahal) galypdyr. Owganystanyň we Pakistanyň türkmenleriniň köpüsi ärsarylardyr.",
    "parts": [
     "Gara",
     "Bekewul",
     "Güneş",
     "Uludepe",
     "Ali-Eli (Ahalda)"
    ],
    "note": "Çeşmeler «içki/daşky» bölünişiginiň gurluş, harby ýa-da geografik bolandygyny aýtmaýar.",
    "srcs": [
     "wikiTribes"
    ]
   },
   {
    "id": "saryk",
    "name": "Saryk",
    "from": "Çeşmelerde anyk oguz ata-babasy ýok; adynyň gelip çykyşy: saryγ «sary» ýa-da saryq «goýun» (iki teklip)",
    "where": "Ýokarky Murgap (Mary günorta: Ýolöten, Serhetabat); Eýran we Owganystan (Bala Murgap, Penjdeh)",
    "text": "XIX asyryň başynda Saryklar Mary töwereginde ýaşaýardy, ýöne 1830-njy ýyldan Tekeler olary Murgap jülgesiniň ýokarsyna sürdi; Bala Murgap we Penjdeh esasy ýaşaýyş ýerleri boldy. 1881-nji ýylda Gökdepe söweşinden we Zakaspi welaýatynyň döredilmeginden soň rus gözegçiligine düşdüler we 1885-nji ýylda ilaty takmynan 65 müň diýlip çaklandy. «Penjdeh wakasy» (1885), Russiýa goşunynyň Penjdehde Owganystan emirliginiň güýçleri bilen çaknyşygy, rus-iňlis krizisini döredip, Owganystanyň demirgazyk-günbatar serhedini kesgitledi, Saryk ýerinde bolup geçdi. Saryk haly gara-gyzyl goňur, inçe ýollar bilen çekilen nagyşly we simmetrik (türk) düwünli. Saryklar türkmen (Saryk şiwesi) we Owganystanda dari dilinde hem gepleýär we sunnydyr.",
    "parts": [],
    "note": "1885-nji ýyl ilaty Lansdelliň çaklamasy, takyk san däl.",
    "srcs": [
     "wikiSaryk",
     "wikiPanjdeh",
     "wikiTribes"
    ]
   },
   {
    "id": "cowdur",
    "name": "Çowdur",
    "from": "Çawuldurdan; däp boýunça Oguz hanyň çep ganaty",
    "where": "Daşoguz; Hywa töweregi; orta Amyderýa",
    "text": "Abulgazynyň rowaýatyna görä XI asyrdan Mangyşlakda bolupdyrlar. Mongol çozuşyndan (1221) soň oguzlar Sirderýadan Garagum we Hazar kenaryna iberilipdir. XVI asyryň başynda Saýyn han bileleşiginiň bir bölegi bolupdyrlar. Galmyklar Mangyşlaga girende bileleşik dargap, Çowdurlar Hywanyň günorta-gündogarynda ýomutlaryň häkimiýeti astynda galypdyr; käbiri hem Çärjewiň golaýynda Amyderýanyň boýunda. XIX asyr Hywasynda Ygdyr, Bozaçy, Abdal we Arabaçy olaryň düzüminde sanalypdyr. Çowdur göli baýdakdaky bäş göliň biri.",
    "parts": [
     "Ygdyr",
     "Bozaçy",
     "Abdal",
     "Arabaçy"
    ],
    "note": "XIX asyr toparlanmasy Poullada 2018-den getirilýär.",
    "srcs": [
     "wikiTribes"
    ]
   },
   {
    "id": "goklen",
    "name": "Göklen",
    "from": "Içindäki oguz toparlary: Kynyk, Baýyndyr, Begdili, Gaýy",
    "where": "Gurgan we Türkmen sährasy (Eýran); Garagala (Türkmenistan); Hywa (Özbegistan)",
    "text": "Adyny köplenç «Gökleriň mekany» diýip okaýarlar (-len goşulmasy Eýranyň demirgazygyndaky tire atlarynda hem bar); takyk düşündiriş ýok. XVI asyrdan soň suw ýetmezçiligi sebäpli Etrek bilen Gurgan derýalarynyň aralygynda ýerleşipdirler. Has ir oturymly bolany üçin köpüsi Eýranyň we Türküstanyň medreselerinde okapdyr we edebiýat ösüpdir: Magtymguly Göklenleriň «Gerkez» tiresindendi; kakasy Döwletmämmet Azady, ýegeni we şägirdi Zelili, Ärsary gelip çykyşly, ýöne Göklenleriň arasynda ýetişen Seýdi hem şu gurşawdan. Göklenleriň sanyny takmynan 300 müň diýip çaklaýarlar (TDV çaklamasy, 2020).",
    "parts": [
     "Kyryk/Kynyk",
     "Baýyndyr",
     "Ýenkak",
     "Senkrik",
     "Gerkez",
     "Çakyr-Begdili",
     "Arap",
     "Aý-Derwüş",
     "Gara-Balkan",
     "Erkekli",
     "Gaýy",
     "Şeýh-Hoja"
    ],
    "note": "Alt toparlar sanawyny TDV Haentzsche, Vámbéry we İA-dan getirýär; olaryň türkmençe ýazylyşy çeşmelerde birmeňzeş däl.",
    "srcs": [
     "tdvGoklen",
     "iranicaGuklan"
    ]
   },
   {
    "id": "salyr",
    "name": "Salyr (Salor)",
    "from": "Oguzyň Salur tiresi (Abulgazynyň rowaýatynda Teke, Ýomut, Ärsarynyň ata-babasy)",
    "where": "Mary, Sarahs (Ahal we Mary); Türkiýede, Owganystanda, Özbegistanda we Hytaýda ýaýran",
    "text": "Salyr oguzyň häzire çenli saklanan seýrek esasy tireleriniň biri. «Salyr» bileleşigi Mangyşlakda we Balkan eteklerinde bolup, XVII asyryň ahyrynda dargapdyr; üç uly tire gündogara we soňra günorta göçüpdir: Horezme, orta Amyderýa, Ahala we Köpetdaga, Murgap derýasyna. Stuart 1881-nji ýylda Mary tekeleriň arasynda «5000 Salyr çadyry» barada ýazýar. Salyr tiresi häzirki zamandan öň harby ýeňlişden soň gowşapdyr. Hytaýyň «Salarlary» (2020-nji ýyl ilat ýazuwynda takmynan 165 müň adam) özlerini şu tireden hasaplaýarlar.",
    "parts": [],
    "note": "Hytaý Salarlarynyň Salyr bilen baglanyşygy däbe we dilçilige daýanýar, ýöne alymlar olaryň gelip çykyşyny «anyk däl» diýip hasaplaýarlar.",
    "srcs": [
     "countrystudies2",
     "wikiSalar",
     "wikiTeke"
    ]
   }
  ],
  "tribesDetail": {
   "kayi": {
    "meaning": [
     [
      "Reşideddin",
      "Berk we çydamly"
     ],
     [
      "Häzirki etimologiýa",
      "kad- «gaty, berk» düýbünden (oguz şiwesinde d>y): berk, gaty"
     ]
    ],
    "later": "Häzirki Göklen tiresiniň içinde hem «Gaýy» toparynyň bardygy bellenýär (TDV)."
   },
   "bayat": {
    "meaning": [
     [
      "Reşideddin",
      "Döwletli we nygmatly"
     ],
     [
      "Abulgazy",
      "Baý"
     ],
     [
      "Häzirki etimologiýa",
      "baý «bay» sözi we köplük -at goşulmasy: «baýlar»"
     ]
    ],
    "later": ""
   },
   "alkaevli": {
    "meaning": [
     [
      "Reşideddin",
      "Nirä barsa-da üstünlikli we rahat"
     ],
     [
      "Abulgazy",
      "Sazlaşykly, laýyk"
     ],
     [
      "Häzirki etimologiýa",
      "Ähtimal «gyzyl öýli»; başga düşündirişler: «öwülen», «tegelek öýli»"
     ]
    ],
    "later": ""
   },
   "karaevli": {
    "meaning": [
     [
      "Reşideddin",
      "«Gara ýolda» gowy gidýär (Reşideddiniň düşündirişi)"
     ],
     [
      "Abulgazy",
      "Nirede otursa, çadyr bilen oturýar"
     ],
     [
      "Häzirki etimologiýa",
      "«Gara öýli» (keçe ýa-da geçi gyly öý)"
     ]
    ],
    "later": ""
   },
   "yazir": {
    "meaning": [
     [
      "Reşideddin",
      "Köp ýurduň halky seniň bilen"
     ],
     [
      "Abulgazy",
      "Ýurtlaryň aga-başy"
     ],
     [
      "Häzirki etimologiýa",
      "yaz- «ýaýmak»: giň ýa-da giň düzlüğiň eýesi"
     ]
    ],
    "later": "Käbir häzirki sanawlarda «Ýazyr» «Garadaşly» ady bilen kiçi türkmen tireleriniň biri hökmünde agzalýar."
   },
   "doger": {
    "meaning": [
     [
      "Reşideddin",
      "Çadyra tarap gelýärler"
     ],
     [
      "Abulgazy",
      "Töwerek"
     ],
     [
      "Häzirki etimologiýa",
      "töger «tegelek» ýa-da «tüküz (maňlaýy ak) atly»"
     ]
    ],
    "later": ""
   },
   "dodurga": {
    "meaning": [
     [
      "Reşideddin",
      "Ýurt alýar we tertipleýär"
     ],
     [
      "Abulgazy",
      "Ýurdy almagy we saklamagy bilýän"
     ],
     [
      "Häzirki etimologiýa",
      "tut- «almak, saklamak»: goraýjy, hökümdar"
     ]
    ],
    "later": "Bu tiräniň sanawlardaky orny birmeňzeş däl: Kaşgarda 16-njy, Reşideddinde 10-njy, Abulgazyda 7-nji."
   },
   "yaparli": {
    "meaning": [
     [
      "Abulgazy",
      "Ýolunda näme duşsa ýykýar"
     ],
     [
      "Häzirki etimologiýa",
      "Ähtimal «çarykly» ýa-da yapar «müşk, ysly»; Kaşgar ony «Çaruklug» ady bilen agzan bolmagy ähtimal"
     ]
    ],
    "later": ""
   },
   "afshar": {
    "meaning": [
     [
      "Reşideddin",
      "Işde çalt we awa höwesli"
     ],
     [
      "Abulgazy",
      "Işi çalt edýän"
     ],
     [
      "Häzirki etimologiýa",
      "av-ış «ýygnanyşmak»: çalt, işjaň"
     ]
    ],
    "later": ""
   },
   "kizik": {
    "meaning": [
     [
      "Reşideddin",
      "Güýçli, kanuny we söweşi bilýän"
     ],
     [
      "Abulgazy",
      "Aždarha / gahryman"
     ],
     [
      "Häzirki etimologiýa",
      "«Gaharly, berk»"
     ]
    ],
    "later": "Kaşgaryň sanawynda ýok. Sümere görä «Kyzyk» we «Karkyn» oguzlara goşulan iki halaç tiresidi."
   },
   "begdili": {
    "meaning": [
     [
      "Reşideddin",
      "Sözi ulularyň sözi ýaly hormatly"
     ],
     [
      "Abulgazy",
      "Sözi hormatlanýar"
     ],
     [
      "Häzirki etimologiýa",
      "«Begleriň dili»"
     ]
    ],
    "later": "Däp Horezmşalar neslini şu tire bilen baglaýar. Göklenleriň içinde «Çakyr-Begdili» şahasy hem bar (TDV)."
   },
   "karkin": {
    "meaning": [
     [
      "Reşideddin",
      "Iýmiti köp, halky doýurýar"
     ],
     [
      "Abulgazy",
      "Iýmitli"
     ],
     [
      "Häzirki etimologiýa",
      "«Köp, baý, doýgun»"
     ]
    ],
    "later": "(Seret: «Kyzyk») Bu tire hem Kaşgaryň sanawynda ýok we halaç gelip çykyşly hasaplanýar."
   },
   "bayindir": {
    "meaning": [
     [
      "Reşideddin",
      "Elmydama bollukda"
     ],
     [
      "Abulgazy",
      "Nygmatly"
     ],
     [
      "Häzirki etimologiýa",
      "baý «bay» sözünden: baý we bagtly"
     ]
    ],
    "later": "Göklenleriň içinde «Baýyndyr» topary hem bar (TDV)."
   },
   "pecenek": {
    "meaning": [
     [
      "Reşideddin",
      "Zähmetsöýer"
     ],
     [
      "Abulgazy",
      "Guraýjy"
     ],
     [
      "Häzirki etimologiýa",
      "çapyn- «howlukmak» ýa-da «zähmetsöýer»"
     ]
    ],
    "later": ""
   },
   "cavuldur": {
    "meaning": [
     [
      "Reşideddin",
      "Ählä kömek edýär, söweşýär, dynç almaýar"
     ],
     [
      "Abulgazy",
      "Abraýly, namysly"
     ],
     [
      "Häzirki etimologiýa",
      "çav «at-owaz»: meşhur"
     ]
    ],
    "later": "Türkmeniň uly «Çowdur» tiresi däp boýunça şu tireden çykýar; rowaýata görä Oguz hanyň goşunynyň çep ganatydyr."
   },
   "cepni": {
    "meaning": [
     [
      "Reşideddin",
      "Duşman nirede bolsa söweşýär"
     ],
     [
      "Abulgazy",
      "Batyr"
     ],
     [
      "Häzirki etimologiýa",
      "çap- «hüjüm etmek»: hüjümçi, batyr"
     ]
    ],
    "later": ""
   },
   "salur": {
    "meaning": [
     [
      "Reşideddin",
      "Nirä barsa gylyç we gürze çekýär"
     ],
     [
      "Abulgazy",
      "Gylyçly"
     ],
     [
      "Häzirki etimologiýa",
      "sal- «zyňmak, hüjüm etmek» + -gur: üznüksiz hüjümçi"
     ]
    ],
    "later": "Abulgazy Salury ýokary tutýar: Teke, Ýomut we Ärsary şundan çykarýar. «Salyr Ogurjyk Alp»yň alty ogly bar eken: Berdi, Buka, Usar, Kusar, Ýaýjy we Dingli. Hytaýyň «Salarlary» hem özlerini şu tireden hasaplaýarlar."
   },
   "eymur": {
    "meaning": [
     [
      "Reşideddin",
      "Goşuny köp we baý"
     ],
     [
      "Abulgazy",
      "Baýlaryň iň baýy"
     ],
     [
      "Häzirki etimologiýa",
      "edimür > eýmür: «gowy we baý»"
     ]
    ],
    "later": ""
   },
   "alayuntlu": {
    "meaning": [
     [
      "Reşideddin",
      "Atlary elmydama gowy we köp"
     ],
     [
      "Abulgazy",
      "Alaja atly"
     ],
     [
      "Häzirki etimologiýa",
      "ala «alaja» + yund «at» + -ly"
     ]
    ],
    "later": ""
   },
   "yuregir": {
    "meaning": [
     [
      "Reşideddin",
      "Işi elmydama belent"
     ],
     [
      "Abulgazy",
      "Ýagşylyk ediji"
     ],
     [
      "Häzirki etimologiýa",
      "ör- «galmak»: belent, kömekçi"
     ]
    ],
    "later": ""
   },
   "igdir": {
    "meaning": [
     [
      "Reşideddin",
      "Gowy we uly"
     ],
     [
      "Abulgazy",
      "Uly"
     ],
     [
      "Häzirki etimologiýa",
      "yeg «has gowy» + -dir: artykmaç"
     ]
    ],
    "later": ""
   },
   "bugduz": {
    "meaning": [
     [
      "Reşideddin",
      "Pespäl, ählä hyzmatkär"
     ],
     [
      "Abulgazy",
      "Hyzmatkär"
     ],
     [
      "Häzirki etimologiýa",
      "bük- «egilmek»: pespäl"
     ]
    ],
    "later": ""
   },
   "yiva": {
    "meaning": [
     [
      "Reşideddin",
      "Atlary boýy uzyn we çylşyrymly"
     ],
     [
      "Abulgazy",
      "Belent derejeli"
     ],
     [
      "Häzirki etimologiýa",
      "yıv- «öwmek»: öwülen, tapawutly"
     ]
    ],
    "later": ""
   },
   "kinik": {
    "meaning": [
     [
      "Reşideddin",
      "Nirede bolsa gadyrly"
     ],
     [
      "Abulgazy",
      "Aziz"
     ],
     [
      "Häzirki etimologiýa",
      "kın- «arzuw etmek»: söýgüli"
     ]
    ],
    "later": "Kaşgar «Kynyk»y sanawynyň ilkinji tiresi edip, Reşideddin iň soňkusy edip getirýär. Göklenleriň içinde hem «Kyryk/Kynyk» topary bar (TDV)."
   }
  },
  "ovlat": {
   "title": "Öwlatlar (mukaddes nesiller)",
   "intro": "Oguz handan gelip çykýan tireleriň ýanynda türkmen jemgyýetinde nesil şejeresini dört halypanyň birine ýetirýän toparlar bar; sopy wagyzçylary arkaly baglanyşýarlar. Olara «öwlat» diýilýär. Alymlar muny sopuçylyk bilen garyşan ata-babalar kultunyň täzelenen görnüşi hasaplaýarlar.",
   "order": "Däp boýunça alty öwlat, mukaddeslik we güýç tertibinde: Hoja, Seýit, Şyh, Magtym, Ata, Mýuwür.",
   "text": "Öwlatlar ähli tireleriň arasynda ýaýran, ak pata berýär, toýlara we durmuş däp-dessurlaryna gatnaşýar, taýpalaryň we tireleriň arasynda araçy bolýar. Bir çeşmä görä doly içkigudalykdyr. Sanyny käbir çeşmeler bäş, käbirleri alty diýýär. Öwlatlaryň esaslandyryjylarynyň gabyrlary (Magtym Meazzem, Dana-ata, Gyzly-ata, Pakyr-şyh ýaly) tanalýan ziýaratgähler.",
   "note": "«Öwlat» nesil taýdan 24 oguz tiresiniň sanawyndan aýratyn; Sowetden öňki çeşmelerde käwagt olara «türkmen däl» diýilipdir.",
   "srcs": [
    "sageTurkmen",
    "countryReligion",
    "kinship"
   ]
  },
  "structure": {
   "title": "Tire gurluşy: «halk»dan «öý»e çenli",
   "intro": "Türkmen jemgyýeti däp boýunça territorial nesil toparlarynyň bölek-bölek ulgamydy: nesil kakadan gelýär, her tire kiçi we ýakyn toparlara bölünýär we şejereler agzaky saklanýardy. Iki nätanyş duşanda ilki haýsy tiredendigini soraşýarlar.",
   "terms": [
    "halk",
    "il",
    "taýpa",
    "urug",
    "kök",
    "kowum, kabile",
    "aýmak/oýmak",
    "oba",
    "bölük",
    "küde, desse, lakam, top, birata, topar, tire"
   ],
   "text": "Bu sözler biri-birine geçýär we birmeňzeş, kesgitli tertibi ýok. Baştutana «serdar», ululara «aksakal» (ak sakgally) diýilýärdi, olar köplenç ylalaşyk bilen saýlanýardy we suw, ýer we söweş barada karar berýärdi. Ýazylmadyk adat hukugy (töre/adat) hakamdy. Öwülýän ýolbaşçylardan Aba Serdar, Keýmir Kör, Nurberdi han, Gowşut han we Dykma Serdar agzalýar. Sowet döwründe tire kimligi gowşady, ýöne jemgyýetçilik durmuşynda henizem möhüm.",
   "srcs": [
    "kinship",
    "wikiTribes"
   ]
  },
  "compare": {
   "title": "Üç sanaw, üç rowaýat",
   "text": "Mahmyt Kaşgarly (XI asyr) 22 oguz tiresini sanaýar; «Kyzyk» we «Karkyn» onuň sanawynda ýok we Sümere görä soňra oguzlara goşulan iki halaç tiresidi. Reşideddin Fazlullah (XIV asyr) we Ýazyjyoglu (XV asyr) atlaryň manylary bilen 24 tireli sanaw getirýärler. Abulgazy (XVII asyr) «Şejereýi terakime»ni 1659-njy ýylda (käbir çeşmelerde 1661) türkmen mollalarynyň, şeýhleriniň we begleriniň haýyşy bilen ýazypdyr, sebäbi öňki Oguznamalary «ýalňyşlyk we tapawut» doly hasaplapdyrlar. Ol köplenç Reşiddiniň yslamlaşdyrylan we mongollaşdyrylan rowaýatyna eýerýär. Bu däpde her tiräniň öz tagmasy we öri bardy.",
   "srcs": [
    "durmus2025",
    "wikiShajara"
   ]
  },
  "dynasties": {
   "title": "Uly neslehler we olaryň oguz tireleri (däp boýunça)",
   "intro": "Taryhy däp birnäçe uly neslini gadymy oguz tireleri bilen baglaýar. Bu baglanyşyklar ynam we rowaýatdyr; alymlar olaryň köpüsi (aýratyn Gaýy we Osmanly) üçin kesgitli delil tapmaýarlar.",
   "cols": [
    "Nesil",
    "Oguz tiresi",
    "Döwür"
   ],
   "srcs": [
    "wikiTribes",
    "wikiShajara"
   ],
   "rows": [
    {
     "dyn": "Seljuklar",
     "tribe": "Kynyk",
     "era": "XI asyr"
    },
    {
     "dyn": "Horezmşalar",
     "tribe": "Begdili",
     "era": "XI–XIII asyrlar"
    },
    {
     "dyn": "Garagoýunlylar",
     "tribe": "Ýywa",
     "era": "XIV–XV asyrlar"
    },
    {
     "dyn": "Akgoýunlylar",
     "tribe": "Baýyndyr",
     "era": "XIV–XVI asyrlar"
    },
    {
     "dyn": "Osmanlylar",
     "tribe": "Gaýy (jedelli)",
     "era": "XIII–XX asyrlar"
    },
    {
     "dyn": "Afşarlar",
     "tribe": "Afşar",
     "era": "XVIII asyr"
    }
   ]
  },
  "sources": [
   {
    "id": "durmus2025",
    "t": "Durmuş (2025): Oguz tire atlarynyň manylary — Pamukkale Üniv. SBE Dergisi",
    "u": "https://dergipark.org.tr/tr/download/journal-file/34254"
   },
   {
    "id": "wikiTribes",
    "t": "Wikipedia: Turkmen tribes",
    "u": "https://en.wikipedia.org/wiki/Turkmen_tribes"
   },
   {
    "id": "wikiTeke",
    "t": "Wikipedia: Teke (tribe)",
    "u": "https://en.wikipedia.org/wiki/Teke_(tribe)"
   },
   {
    "id": "wikiYomut",
    "t": "Wikipedia: Yomut",
    "u": "https://en.wikipedia.org/wiki/Yomut"
   },
   {
    "id": "wikiShajara",
    "t": "Wikipedia: Shajara-i Tarākima",
    "u": "https://en.wikipedia.org/wiki/Shajara-i_Tar%C4%81kima"
   },
   {
    "id": "tdvGoklen",
    "t": "TDV İslâm Ansiklopedisi: Göklen (M. Aydın)",
    "u": "https://islamansiklopedisi.org.tr/goklen"
   },
   {
    "id": "iranicaGuklan",
    "t": "Encyclopaedia Iranica: Guklān",
    "u": "https://www.iranicaonline.org/articles/guklan/"
   },
   {
    "id": "countrystudies2",
    "t": "Library of Congress Country Studies: Formation of the Turkmen Nation",
    "u": "https://countrystudies.us/turkmenistan/2.htm"
   },
   {
    "id": "countryReligion",
    "t": "Library of Congress Country Studies: Religion (Turkmenistan)",
    "u": "https://countrystudies.us/turkmenistan/14.htm"
   },
   {
    "id": "sageTurkmen",
    "t": "SAGE Encyclopedia of Global Religion: Turkmenistan",
    "u": "https://sk.sagepub.com/ency/edvol/embed/globalreligion/chpt/turkmenistan"
   },
   {
    "id": "kinship",
    "t": "Countries and Their Cultures: Turkmens — Kinship",
    "u": "https://www.everyculture.com/Russia-Eurasia-China/Turkmens-Kinship.html"
   },
   {
    "id": "wikiSaryk",
    "t": "Wikipedia: Saryk",
    "u": "https://en.wikipedia.org/wiki/Saryk"
   },
   {
    "id": "wikiPanjdeh",
    "t": "Wikipedia: Panjdeh incident",
    "u": "https://en.wikipedia.org/wiki/Panjdeh_incident"
   },
   {
    "id": "wikiSalar",
    "t": "Wikipedia: Salar people",
    "u": "https://en.wikipedia.org/wiki/Salar_people"
   },
   {
    "id": "caucasus",
    "t": "Caucasian Knot: Turkmen (umumy syn; ikinji derejeli)",
    "u": "https://www.caucasianknot.org/articles/536"
   }
  ],
  "ui": {
   "modernTitle": "Häzirki türkmen tireleri we olaryň şahalary",
   "modernIntro": "Bu tireler ýokardaky oguz tirelerinden döräpdir ýa-da olar bilen garyşypdyr. Her kart çeşmeleriň gysgaça mazmuny; serhetler we şahalaryň sany çeşmelerde birmeňzeş däl.",
   "from_": "Ata-baba / däp",
   "where": "Mekan",
   "parts": "Şahalar we bölümler",
   "meaningTitle": "Adyň manysy (çeşmelere görä)",
   "laterTitle": "Taryhda we şu gün",
   "srcTitle": "Çeşmeler",
   "approx": "Manylar gadymy (käwagt halk) düşündirişleridir; häzirki ylmy etimologiýa tapawutly bolup biler."
  }
 }
};
  ['fa', 'tk'].forEach(l => { DATA[l].genealogy.extra = EXTRA[l]; });
  const base = GENEALOGY.build;
  GENEALOGY.build = function(lang){
    const g = base(lang), det = EXTRA[lang].tribesDetail;
    g.sons.forEach(s => s.tribes.forEach(t => { const d = det[t.id]; if(d){ t.meaning = d.meaning; t.later = d.later; } }));
    return g;
  };
})();
