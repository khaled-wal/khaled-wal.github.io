---
layout: default
translation_key: home
title: "الصفحة الرئيسية"
description: "خالد هاشم — متخصص في الاتصال التسويقي؛ مهتم ببناء العلامات التجارية وتحليل سلوك المستهلك."
---

<!-- ══════════════════════════════════════════════════════════════════════════
     ░░ قسم الهيرو (Hero Section) — أعلى الصفحة ░░
     ══════════════════════════════════════════════════════════════════════════
     ✏️ ما يمكنك تعديله هنا:
       - نص الشارة (badge):             السطر 12
       - العنوان الرئيسي h1:            السطر 13
       - الوصف القصير (hero-desc):      السطر 14
       - نص زر "أعمالي السابقة":        السطر 16-17
       - نص زر "تواصل":                 السطر 18
       - صورة الملف الشخصي (profile):   السطر 24
         (ضع صورتك في assets/images/ وعدّل اسمها)
     ══════════════════════════════════════════════════════════════════════════ -->
<section id="hero" class="hero bg-navy">
    <div class="container hero-inner">
        <div class="hero-content">
            <!-- ✏️ EDIT: نص الشارة الترحيبية -->
            <span class="badge reveal" data-delay="100">👋 مرحباً بك!</span>
            <!-- ✏️ EDIT: العنوان الرئيسي — اسمك + لقبك -->
            <h1 class="hero-title reveal" data-delay="200">أنا خالد<br><span class="highlight">طالب اتصال تسويقي</span></h1>
            <!-- ✏️ EDIT: الوصف المختصر تحت العنوان -->
            <p class="hero-desc reveal" data-delay="300">أحوّل البيانات إلى استراتيجيات تسويقية تُحقق نتائج. أؤمن بأن كل تـصـرف أذكـى يبدأ بـتفكيـر أعمق. مهتم بالتخطيط الاستراتيجي وبناء العلامات التجارية.</p>
            <div class="hero-actions reveal" data-delay="400">
                <!-- ✏️ EDIT: الزر الأول يقود إلى صفحة الأعمال — لا تغيير في الرابط -->
                <a href="{{ '/portfolio/' | relative_url }}" class="btn btn-primary">اكتشف أعمالي<i class="fa-solid fa-arrow-left arrow-icon"></i></a>
                <!-- ✏️ EDIT: الزر الثاني يفتح السيرة الذاتية PDF -->
                <a href="{{ site.cv_path | default: '#' | relative_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><i class="fa-solid fa-file-arrow-down"></i> تحميل السيرة الذاتية</a>
            </div>
        </div>
        <!-- ✏️ EDIT: صورة الملف الشخصي -->
        <!-- اسم الملف الحالي: profile.png — ضعه في مجلد assets/images/ -->
        <div class="hero-image-wrapper">
            <div class="profile-image-container">
                <img src="{{ '/assets/images/profile.webp' | relative_url }}" alt="خالد وليد هاشم" class="profile-image" fetchpriority="high" width="500" height="500">
            </div>
        </div>
    </div>
    <!-- ══════════════════════════════════════════════════════════════════
         ░░ شريط المهارات (Skills Floating Tags) ░░
         ══════════════════════════════════════════════════════════════════ -->
    <div class="container hero-footer-container reveal" data-delay = "500">
        <!-- Scroll Indicator Down Nudge -->
        <div class="hero-scroll-indicator reveal" data-delay="700">
             <i class="fa-solid fa-chevron-down"></i>
        </div>
    </div>
</section>

<!-- Gradient Divider -->
<div class="section-divider bg-navy-to-light"></div>

<!-- ══════════════════════════════════════════════════════════════════════════
     ░░ قسم الأعمال المميزة (Featured Portfolio) ░░
     ════════════════════════════════════════════════
     ✏️ هذا القسم يعرض أول عمل من كل مجموعة (_case_studies و _projects).
     لإضافة عمل جديد: أضف ملف .md جديد في _case_studies/ أو _projects/
     وستظهر أحدث الأعمال هنا تلقائياً.
     ══════════════════════════════════════════════════════════════════════════ -->
<section id="portfolio" class="portfolio bg-light">
    <div class="container">
        <div class="section-header reveal">
            <h2 class="section-title dark-text">{{ site.data.i18n.ar.featured_work }}</h2>
            {% assign ar_cs = site.case_studies | where: "lang", "ar" | where: "publish_state", "published" %}
            {% assign ar_pr = site.projects | where: "lang", "ar" | where: "publish_state", "published" %}
            {% assign ar_lab = site.lab | where: "lang", "ar" | where: "publish_state", "published" %}
            {% assign ar_total = ar_cs.size | plus: ar_pr.size | plus: ar_lab.size %}
            <div class="view-all-group reveal">
                <span class="portfolio-counter-badge">+{{ ar_total }} {{ site.data.i18n.ar.portfolio_count_label }}</span>
                <a href="{{ '/portfolio/' | relative_url }}" class="btn btn-outline-dark view-all-btn">عرض كل الأعمال <i class="fa-solid fa-arrow-left arrow-icon"></i></a>
            </div>
        </div>
        <div class="portfolio-grid reveal">
            {%- comment -%}
              ── أبرز أعمالي: آخر عمل منشور من كل قسم ──
              Filter: status=published AND lang=ar
              Sort by: order descending → take first 1 from each
            {%- endcomment -%}
            {%- assign latest_pr = site.projects | where: "lang", "ar" | where: "publish_state", "published" | sort: "order" | reverse | limit: 1 -%}
            {%- assign latest_cs = site.case_studies | where: "lang", "ar" | where: "publish_state", "published" | sort: "order" | reverse | limit: 1 -%}
            {%- assign latest_lab = site.lab | where: "lang", "ar" | where: "publish_state", "published" | sort: "order" | reverse | limit: 1 -%}
            {%- assign featured_items = latest_pr | concat: latest_cs | concat: latest_lab -%}

            {% for item in featured_items %}
            <a href="{{ item.url | relative_url }}" class="card-link" aria-label="{{ item.title }}">
            <article class="portfolio-card">
                <div class="card-image">
                    {% if item.image %}
                    <img src="{{ item.image | relative_url }}" alt="{{ item.title }}">
                    {% else %}
                        {% if item.collection == 'case_studies' %}
                        <img src="{{ '/assets/images/case-studies/case-def-cover.png' | relative_url }}" alt="{{ item.title }}">
                        {% else %}
                        <img src="{{ '/assets/images/projects/prog-def-cover.png' | relative_url }}" alt="{{ item.title }}">
                        {% endif %}
                    {% endif %}
                </div>
                <div class="card-content">
                    <span class="category">
                        {% if item.client %}
                            {{ site.data.i18n.ar.client }} {{ item.client }}
                        {% elsif item.collection == 'case_studies' %}
                            {{ site.data.i18n.ar.case_studies }}
                        {% else %}
                            {{ site.data.i18n.ar.projects }}
                        {% endif %}
                    </span>
                    {% if item.project_phase %}
                    <span class="project-status-tag"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> {{ item.project_phase }}</span>
                    {% endif %}
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.objective | default: item.description | truncatewords: 15 }}</p>
                    <span class="read-more" aria-hidden="true">اقرأ المزيد <i class="fa-solid fa-arrow-left arrow-icon"></i></span>
                </div>
            </article>
            </a>
            {% else %}
            <p>لا توجد أعمال بعد.</p>
            {% endfor %}
        </div>
    </div>

</section>

<!-- Gradient Divider -->
<div class="section-divider bg-light-to-navy"></div>

<!-- ══════════════════════════════════════════════════════════════════════════
     ░░ قسم السيرة الذاتية (CV / Resume Section) ░░
     ════════════════════════════════════════════════
     ✏️ ما يمكنك تعديله هنا:
       - الخبرات (timeline-item):       أضف/عدّل كتل timeline-item تحت الخبرات
       - التعليم (timeline-item):       أضف/عدّل كتل timeline-item تحت التعليم
       - الشهادات (cert-card):          أضف/عدّل كتل cert-card
       - مسار ملف PDF:                  عدّل cv_path في _config.yml
     ══════════════════════════════════════════════════════════════════════════ -->
<section id="cv-section" class="resume bg-navy">
    <div class="container cv-container reveal">
        <div class="cv-header-center">
            <!-- ✏️ EDIT: عنوان قسم السيرة الذاتية -->
            <h2 class="section-title">السيرة الذاتية</h2>
            <!-- ✏️ EDIT: الوصف المختصر للقسم -->
            <p class="section-desc">مسيرتي الأكاديمية والمهنية ترتكز على الشغف بالتعلم المستمر وتطوير الذات في مجال التسويق والتخطيط الاستراتيجي.</p>
        </div>
        <!-- زر تحميل السيرة الذاتية — تحت العنوان مباشرة، مستقل عن منطقة التوسع -->
        <!-- ✏️ EDIT: مسار الملف يُعدَّل في _config.yml (cv_path) -->
        <div class="cv-download-btn-wrapper">
            <a href="{{ site.cv_path | default: '#' | relative_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-primary download-cv-btn" aria-label="تحميل السيرة الذاتية (PDF)">
                <i class="fa-solid fa-download" aria-hidden="true"></i>
                <span>تحميل السيرة الذاتية</span>
            </a>
        </div>
        <!-- ═══ الخط الزمني الكامل ═══════════════════════ -->
        <div class="cv-grid">
            <!-- ── عمود الخبرات ─────────────────────────────────── -->
            <div class="cv-column">
                <!-- عنوان فاصل — يظهر فقط على الجوال -->
                <h3 class="cv-column-title"><i class="fa-solid fa-briefcase"></i> الخبرات</h3>
                <div class="timeline">
                    <!-- ✏️ EDIT: عنصر خبرة — كرّر هذه الكتلة لكل خبرة جديدة -->
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <!-- ✏️ EDIT: الفترة الزمنية -->
                        <div class="timeline-date"> فبراير 2026 - الآن</div>
                        <!-- ✏️ EDIT: المسمى الوظيفي -->
                        <div class="timeline-role">مسؤول التخطيط الاستراتيجي</div>
                        <!-- ✏️ EDIT: اسم الشركة أو المؤسسة -->
                        <div class="timeline-company">نادي إيجاد | IMSIU EJAD </div>
                        <!-- ✏️ EDIT: الوصف المختصر -->
                        <p>قيادة التحليل التنظيمي (SWOT)، بناء الخطط التشغيلية، ومتابعة أداء المبادرات لضمان مواءمة التنفيذ مع رؤية وأهداف النادي.</p>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <!-- ✏️ EDIT: الفترة الزمنية -->
                        <div class="timeline-date">ابريل 2026 - الان</div>
                        <!-- ✏️ EDIT: المسمى الوظيفي -->
                        <div class="timeline-role">قائد الحملات الابداعية </div>
                        <!-- ✏️ EDIT: اسم الشركة أو المؤسسة -->
                        <div class="timeline-company">نادي الإعلام - Media Club</div>
                        <!-- ✏️ EDIT: الوصف المختصر -->
                        <p>قُدت خطة تحول تشغيلي سريعة وطورت منظومة استقطاب الأعضاء، مع الإشراف على استراتيجيات الحملات الإبداعية لضمان كفاءة الأداء وتحقيق الأهداف التسويقية.</p>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <!-- ✏️ EDIT: الفترة الزمنية -->
                        <div class="timeline-date">ابريل 2026 - الان</div>
                        <!-- ✏️ EDIT: المسمى الوظيفي -->
                        <div class="timeline-role">ممثل النادي</div>
                        <!-- ✏️ EDIT: اسم الشركة أو المؤسسة -->
                        <div class="timeline-company">نادي الإعلام - Media Club</div>
                        <!-- ✏️ EDIT: الوصف المختصر -->
                        <p>أمثل النادي في المنصة الرقمية الموحدة لأندية الجامعة، حيث أدير التواصل مع الطلاب وأروّج للفعاليات لتعزيز حضور النادي واستقطاب الأعضاء الجدد.</p>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <!-- ✏️ EDIT: الفترة الزمنية -->
                        <div class="timeline-date">يناير 2026 - ابريل 2026</div>
                        <!-- ✏️ EDIT: المسمى الوظيفي -->
                        <div class="timeline-role">نائب قائد الحملات الابداعية </div>
                        <!-- ✏️ EDIT: اسم الشركة أو المؤسسة -->
                        <div class="timeline-company">نادي الإعلام - Media Club</div>
                        <!-- ✏️ EDIT: الوصف المختصر -->
                        <p>دعم التخطيط الاستراتيجي، إدارة وتوزيع مهام الفريق، وضمان جودة المخرجات الإعلامية والمواءمة بين اللجان المختلفة.</p>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <!-- ✏️ EDIT: الفترة الزمنية -->
                        <div class="timeline-date">سبتمبر 2025 - يناير 2026</div>
                        <!-- ✏️ EDIT: المسمى الوظيفي -->
                        <div class="timeline-role">مخطط حملات إبداعية</div>
                        <!-- ✏️ EDIT: اسم الشركة أو المؤسسة -->
                        <div class="timeline-company">نادي الإعلام - Media Club</div>
                        <!-- ✏️ EDIT: الوصف المختصر -->
                        <p>تطوير استراتيجيات تسويقية متكاملة، تنسيق المحتوى الرقمي عبر الأقسام، وتحليل أداء الحملات لتعزيز التواجد والتأثير الإعلامي للنادي.</p>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <!-- ✏️ EDIT: الفترة الزمنية -->
                        <div class="timeline-date">ابريل 2024 - نوفمبر 2024</div>
                        <!-- ✏️ EDIT: المسمى الوظيفي -->
                        <div class="timeline-role">مصمم محتوى وسائل التواصل</div>
                        <!-- ✏️ EDIT: اسم الشركة أو المؤسسة -->
                        <div class="timeline-company">نادي الإعلام - Media Club</div>
                        <!-- ✏️ EDIT: الوصف المختصر -->
                        <p>تطوير الهوية البصرية باستخدام (AI & Photoshop)، تصميم قوالب محتوى تفاعلية، والمساهمة في التنظيم الفني للفعاليات الكبرى.</p>
                    </div>
                    <!-- أضف خبرة جديدة هنا بنسخ الكتلة أعلاه -->
                </div>
            </div>
            <!-- ── عمود التعليم والشهادات ─────────────────────────────── -->
            <div class="cv-column">
                <!-- عنوان فاصل — يظهر فقط على الجوال -->
                <div class="cv-mobile-section-title" aria-hidden="true"></div>
                <h3 class="cv-column-title"><i class="fa-solid fa-graduation-cap"></i> التعليم</h3>
                <div class="timeline">
                    <!-- ✏️ EDIT: عنصر تعليمي — كرّر هذه الكتلة لكل درجة علمية -->
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <!-- ✏️ EDIT: سنة التخرج أو الفترة -->
                        <div class="timeline-date">متوقع التخرج: 2027</div>
                        <!-- ✏️ EDIT: الدرجة العلمية أو الشهادة -->
                        <div class="timeline-role">بكالوريوس الإعلان والاتصال التسويقي</div>
                        <!-- ✏️ EDIT: اسم المؤسسة التعليمية -->
                        <div class="timeline-company">جامعة الإمام محمد بن سعود الإسلامية</div>
                        <!-- ✏️ EDIT: تفاصيل إضافية -->
                        <p>أدرس حالياً في تخصص الاتصال التسويقي، واكتسبت مهارات قوية في تحليل سلوك المستهلك، الحملات الإعلانية، العلاقات العامة وصناعة المحتوى.</p>
                    </div>
                    <!-- أضف تعليماً جديداً هنا بنسخ الكتلة أعلاه -->
                </div>
                <!-- ── الشهادات ────── -->
                <div class="cv-certifications">
                    <!-- عنوان فاصل — يظهر فقط على الجوال -->
                    <div class="cv-mobile-section-title" aria-hidden="true"></div>
                    <h3 class="cv-column-title"><i class="fa-solid fa-certificate"></i> الشهادات</h3>
                    <div class="certification-grid">
                        <!-- ✏️ EDIT: كرّر كتلة cert-card لكل شهادة -->
                        <div class="cert-card">
                            <h4>عزّز تحليلات بياناتك باستخدام الذكاء الاصطناعي التوليدي</h4>
                            <p>مقدمة من "IBM" و"Neon" عام 2026</p>
                        </div>
                        <div class="cert-card">
                            <h4> فن البيع</h4>
                            <p>مقدمة من "منصة ادراك" عام 2025</p>
                        </div>
                        <div class="cert-card">
                            <h4>IBM: مقدمة في الذكاء الاصطناعي</h4>
                            <p>مقدمة من "IBM" عام 2025</p>
                        </div>
                        <div class="cert-card">
                            <h4>ورشة عمل: من الفكرة الى السوق</h4>
                            <p>مقدمة من "منشآت" عام 2025</p>
                        </div>
                        <div class="cert-card">
                            <h4>CS50: مقدمة في علوم الحاسب</h4>
                            <p>مقدمة من "جامعة هارفارد" عام 2023</p>
                        </div>
                        <!-- أضف شهادة جديدة هنا بنسخ cert-card أعلاه -->
                    </div>
                </div>
            </div>
        </div>
        <!-- ═══ نهاية الخط الزمني ══════════════════════════════════════ -->
    </div>
    <!-- /.cv-container -->
    <!-- منطقة الزر (خارج حاوية المحتوى تماماً لضمان عدم القص) -->
    <div class="cv-action-area">
        <button class="cv-expand-btn" id="cv-expand-btn-ar" aria-expanded="false" aria-controls="cv-container-ar">
            <span class="btn-label">عرض المزيد</span>
            <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
        </button>
    </div>

</section>

<script>
(function () {
    var btn = document.getElementById('cv-expand-btn-ar');
    var panel = document.querySelector('#cv-section .cv-container');
    if (!btn || !panel) return;
    btn.addEventListener('click', function () {
        var expanded = panel.classList.toggle('is-expanded');
        btn.classList.toggle('is-expanded', expanded);
        btn.setAttribute('aria-expanded', expanded);
        btn.querySelector('.btn-label').textContent = expanded ? 'عرض أقل' : 'عرض المزيد';
    });
})();
</script>

<!-- ══════════════════════════════════════════════════════════════════════════
     ░░ قسم التواصل (Contact Section) ░░
     ═════════════════════════════════════
     ✏️ ما يمكنك تعديله هنا:
       - بريدك الإلكتروني:              رابط direct-link (الإيميل)
       - رابط LinkedIn:                 رابط direct-link (لينكدإن)
       - معرّف Formspree (action):      سطر <form action="...">
     ══════════════════════════════════════════════════════════════════════════ -->
<section id="contact" class="contact bg-navy reveal">
    <div class="container contact-inner">
        <!-- 1. العنوان والوصف -->
        <div class="contact-header">
            <h2 class="section-title">تواصل معي</h2>
            <p class="section-desc">أنا دائماً منفتح لمناقشة المشاريع الجديدة، الأفكار الإبداعية، والفرص التي يمكن أن نصنع من خلالها فرقاً معاً.</p>
        </div>
        <!-- 2. نموذج الإرسال (الخيار الأساسي) -->
        <div class="contact-form-wrapper">
            <!-- ✏️ EDIT: استبدل YOUR_FORM_ID برابط Formspree الخاص بك -->
            <form class="contact-form" action="https://formspree.io/f/mgoljdnp" method="POST">
                <!-- Formspree custom redirect — do not remove this hidden field -->
                <input type="hidden" name="_next" value="https://khaled-wal.github.io/thanks/">
                <div class="form-group">
                    <label for="name">الاسم الكامل</label>
                    <input type="text" name="name" id="name" placeholder="أدخل اسمك الكريم" required>
                </div>
                <div class="form-group">
                    <label for="email">البريد الإلكتروني</label>
                    <input type="email" name="email" id="email" placeholder="البريد الإلكتروني الخاص بك" required>
                </div>
                <div class="form-group">
                    <label for="message">الرسالة</label>
                    <textarea name="message" id="message" rows="5" placeholder="حدثني أكثر عن ما تود إنجازه..." required></textarea>
                </div>
                <button type="submit" class="btn btn-primary submit-btn">إرسال الرسالة <i class="fa-solid fa-paper-plane"></i></button>
            </form>
        </div>
        <!-- 3. بدائل التواصل المباشر (الخيار الثانوي) -->
        <div class="contact-alternatives reveal">
            <p class="contact-alternatives-label"> أو تواصل مباشرة عبر</p>
            <div class="direct-links">
                <!-- ✏️ EDIT: البريد الإلكتروني -->
                <a href="mailto:Khaledwal20@hotmail.com" class="direct-link">
                    <i class="fa-solid fa-envelope"></i>
                    Khaledwal20@hotmail.com
                </a>
                <!-- ✏️ EDIT: رابط LinkedIn -->
                <a href="https://www.linkedin.com/in/khaledw-hashem/" target="_blank" rel="noopener noreferrer" class="direct-link">
                    <i class="fa-brands fa-linkedin"></i>
                    in/khaledw-hashem
                </a>
                <!-- ✏️ EDIT: رابط X (تويتر) -->
                <a href="https://x.com/K72A76ED" target="_blank" rel="noopener noreferrer" class="direct-link">
                    <i class="fa-brands fa-x-twitter"></i>
                    @K72A76ED
                </a>
            </div>
        </div>
    </div>
</section>
