---
layout: default
translation_key: home
title: "الصفحة الرئيسية"
description: "خالد وليد — طالب اتصالات تسويقية متخصص في صناعة المحتوى وتحليل البيانات وتجربة المستخدم."
---

<!-- ══════════════════════════════════════════════════════════════════════════
     ░░ قسم الهيرو (Hero Section) — أعلى الصفحة ░░
     ════════════════════════════════════════════════════
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
            <span class="badge">👋 مرحباً بك!</span>
            <!-- ✏️ EDIT: العنوان الرئيسي — اسمك + لقبك -->
            <h1 class="hero-title">أنا خالد،<br><span class="highlight">طالب اتصالات تسويقية</span></h1>
            <!-- ✏️ EDIT: الوصف المختصر تحت العنوان -->
            <p class="hero-desc">أحوّل البيانات إلى استراتيجيات تسويقية تُحقق نتائج. متخصص في الاتصال التسويقي | تحليل البيانات | تجربة المستخدم.</p>
            <div class="hero-actions">
                <!-- ✏️ EDIT: الزر الأول يقود إلى صفحة الأعمال — لا تغيير في الرابط -->
                <a href="{{ '/portfolio/' | relative_url }}" class="btn btn-primary">اكتشف أعمالي <i class="fa-solid fa-arrow-left arrow-icon"></i></a>
                <!-- ✏️ EDIT: الزر الثاني يفتح السيرة الذاتية PDF -->
                <a href="{{ site.cv_path | default: '#' | relative_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><i class="fa-solid fa-file-arrow-down"></i> تحميل السيرة الذاتية</a>
            </div>
        </div>
        <!-- ✏️ EDIT: صورة الملف الشخصي -->
        <!-- اسم الملف الحالي: profile.png — ضعه في مجلد assets/images/ -->
        <div class="hero-image-wrapper">
            <div class="profile-image-container">
                <img src="{{ '/assets/images/profile.png' | relative_url }}" alt="خالد وليد" class="profile-image">
            </div>
        </div>
    </div>

    <!-- ══════════════════════════════════════════════════════════════════
         ░░ شريط المهارات (Skills Bar) ░░
         ✏️ أضف أو عدّل مهاراتك بتكرار كتلة <div class="skill-item">
         ══════════════════════════════════════════════════════════════════ -->
    <div class="container">
        <div class="skills-bar">
            <!-- ✏️ EDIT: كل skill-item = أيقونة + نص المهارة -->
            <div class="skill-item">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
                <span>صناعة المحتوى</span>
            </div>
            <div class="skill-item">
                <i class="fa-solid fa-chart-line"></i>
                <span>تحليل بيانات</span>
            </div>
            <div class="skill-item">
                <i class="fa-solid fa-object-group"></i>
                <span>تحسين محركات البحث SEO</span>
            </div>
            <!-- أضف مهارة جديدة هنا:
            <div class="skill-item">
                <i class="fa-solid fa-ICON_NAME"></i>
                <span>اسم المهارة</span>
            </div>
            -->
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
        <div class="section-header">
            <h2 class="section-title dark-text">{{ site.data.i18n.ar.featured_work }}</h2>
            <a href="{{ '/portfolio/' | relative_url }}" class="btn btn-outline-dark view-all-btn">عرض كل الأعمال <i class="fa-solid fa-arrow-left arrow-icon"></i></a>
        </div>
        <div class="portfolio-grid">
            {% assign ar_case_studies = site.case_studies | where: "lang", "ar" %}
            {% assign ar_projects = site.projects | where: "lang", "ar" %}

            {% assign featured_items = "" | split: "" %}
            {% if ar_case_studies.size > 0 %}{% assign featured_items = featured_items | push: ar_case_studies[0] %}{% endif %}
            {% if ar_projects.size > 0 %}{% assign featured_items = featured_items | push: ar_projects[0] %}{% endif %}

            {% for item in featured_items %}
            <article class="portfolio-card">
                <div class="card-image">
                    {% if item.image %}
                    <img src="{{ item.image | relative_url }}" alt="{{ item.title }}">
                    {% else %}
                    <div class="card-placeholder">
                      <i class="fa-solid fa-briefcase fa-3x" aria-hidden="true"></i>
                    </div>
                    {% endif %}
                </div>
                <div class="card-content">
                    <span class="category">
                        {% if item.collection == 'case_studies' %}
                            {{ site.data.i18n.ar.client }} {{ item.client }}
                        {% else %}
                            {{ site.data.i18n.ar.projects }}
                        {% endif %}
                    </span>
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.objective | default: item.description | truncatewords: 15 }}</p>
                    <a href="{{ item.url | relative_url }}" class="read-more">اقرأ المزيد <i class="fa-solid fa-arrow-left arrow-icon"></i></a>
                </div>
            </article>
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
       - عنوان القسم الفرعي:            السطور أدناه
       - الخبرات (timeline-item):       أضف/عدّل كتل timeline-item تحت "الخبرات"
       - التعليم (timeline-item):       أضف/عدّل كتل timeline-item تحت "التعليم"
       - الشهادات (cert-card):          أضف/عدّل كتل cert-card
       - مسار ملف PDF:                  عدّل cv_path في _config.yml

     💡 ملاحظة التصميم:
       القسم له حد أقصى للارتفاع (max-height في style.css) يمنع التمدد المبالغ فيه.
       عند إضافة خبرات كثيرة جداً، قد تحتاج لزيادة max-height في .cv-container.
       التأثير الضبابي (gradient) وزر التحميل ثابتان دائماً في الأسفل.
     ══════════════════════════════════════════════════════════════════════════ -->
<section id="cv-section" class="resume bg-navy">
    <div class="container cv-container">
        <div class="cv-header-center">
            <!-- ✏️ EDIT: عنوان قسم السيرة الذاتية -->
            <h2 class="section-title">السيرة الذاتية</h2>
            <!-- ✏️ EDIT: الوصف المختصر للقسم -->
            <p class="section-desc">مسيرتي الأكاديمية والمهنية ترتكز على الشغف بالتعلم المستمر وتطوير الذات في مجالات الاتصال والتسويق.</p>
        </div>

        <div class="cv-grid">
            <!-- ── عمود الخبرات ─────────────────────────────────── -->
            <div class="cv-column">
                <h3 class="cv-column-title"><i class="fa-solid fa-briefcase"></i> الخبرات</h3>
                <div class="timeline">
                    <!-- ✏️ EDIT: عنصر خبرة — كرّر هذه الكتلة لكل خبرة جديدة -->
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <!-- ✏️ EDIT: الفترة الزمنية -->
                        <div class="timeline-date">2023 - الآن</div>
                        <!-- ✏️ EDIT: المسمى الوظيفي -->
                        <div class="timeline-role">أخصائي تسويق (عمل حر)</div>
                        <!-- ✏️ EDIT: اسم الشركة أو المؤسسة -->
                        <div class="timeline-company">مستقل</div>
                        <!-- ✏️ EDIT: الوصف المختصر -->
                        <p>إدارة حملات تسويقية، بناء هوية بصرية، تحليل بيانات وتقارير أداء للعديد من المشاريع.</p>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <!-- ✏️ EDIT: الفترة الزمنية -->
                        <div class="timeline-date">2023 - الآن</div>
                        <!-- ✏️ EDIT: المسمى الوظيفي -->
                        <div class="timeline-role">أخصائي تسويق (عمل حر)</div>
                        <!-- ✏️ EDIT: اسم الشركة أو المؤسسة -->
                        <div class="timeline-company">مستقل</div>
                        <!-- ✏️ EDIT: الوصف المختصر -->
                        <p>إدارة حملات تسويقية، بناء هوية بصرية، تحليل بيانات وتقارير أداء للعديد من المشاريع.</p>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <!-- ✏️ EDIT: الفترة الزمنية -->
                        <div class="timeline-date">2023 - الآن</div>
                        <!-- ✏️ EDIT: المسمى الوظيفي -->
                        <div class="timeline-role">أخصائي تسويق (عمل حر)</div>
                        <!-- ✏️ EDIT: اسم الشركة أو المؤسسة -->
                        <div class="timeline-company">مستقل</div>
                        <!-- ✏️ EDIT: الوصف المختصر -->
                        <p>إدارة حملات تسويقية، بناء هوية بصرية، تحليل بيانات وتقارير أداء للعديد من المشاريع.</p>
                    </div>
                    <!-- أضف خبرة جديدة هنا بنسخ الكتلة أعلاه -->
                    
                </div>
            </div>

            <!-- ── عمود التعليم والشهادات ─────────────────────────────── -->
            <div class="cv-column">
                <h3 class="cv-column-title"><i class="fa-solid fa-graduation-cap"></i> التعليم</h3>
                <div class="timeline">
                    <!-- ✏️ EDIT: عنصر تعليمي — كرّر هذه الكتلة لكل درجة علمية -->
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <!-- ✏️ EDIT: سنة التخرج أو الفترة -->
                        <div class="timeline-date">متوقع التخرج: 2026</div>
                        <!-- ✏️ EDIT: الدرجة العلمية أو الشهادة -->
                        <div class="timeline-role">بكالوريوس اتصال تسويقي</div>
                        <!-- ✏️ EDIT: اسم المؤسسة التعليمية -->
                        <div class="timeline-company">جامعة الإمام محمد بن سعود الإسلامية</div>
                        <!-- ✏️ EDIT: تفاصيل إضافية -->
                        <p>أدرس حالياً في تخصص الاتصال التسويقي، واكتسبت مهارات قوية في العلاقات العامة، سلوك المستهلك، الحملات الإعلانية وصناعة المحتوى.</p>
                    </div>
                    <!-- أضف تعليماً جديداً هنا بنسخ الكتلة أعلاه -->
                </div>

                <!-- ── الشهادات (داخل عمود التعليم لتوازن العمودين) ────── -->
                <div class="cv-certifications">
                    <h3 class="cv-column-title"><i class="fa-solid fa-certificate"></i> الشهادات</h3>
                    <div class="certification-grid">
                        <!-- ✏️ EDIT: كرّر كتلة cert-card لكل شهادة -->
                        <div class="cert-card">
                            <!-- ✏️ EDIT: اسم الشهادة -->
                            <h4>شهادة التسويق الرقمي</h4>
                            <!-- ✏️ EDIT: الجهة المُصدِرة والسنة -->
                            <p>مقدمة من Google - 2024</p>
                        </div>
                        <div class="cert-card">
                            <h4>تحليل البيانات</h4>
                            <p>مقدمة من Meta - 2023</p>
                        </div>
                        <div class="cert-card">
                            <h4>تحليل البيانات</h4>
                            <p>مقدمة من Meta - 2023</p>
                        </div>
                        <!-- أضف شهادة جديدة هنا بنسخ cert-card أعلاه -->
                    </div>
                </div>
            </div>
        </div>

        <!-- زر تحميل السيرة الذاتية — ثابت فوق التأثير الضبابي -->
        <!-- ✏️ EDIT: مسار الملف يُعدَّل في _config.yml (cv_path) -->
        <div class="cv-download-btn-wrapper">
            <a href="{{ site.cv_path | default: '#' | relative_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-primary download-cv-btn" aria-label="تحميل السيرة الذاتية (PDF)">
                <i class="fa-solid fa-download" aria-hidden="true"></i>
                <span>تحميل السيرة الذاتية</span>
            </a>
        </div>
    </div>
</section>

<!-- ══════════════════════════════════════════════════════════════════════════
     ░░ قسم التواصل (Contact Section) ░░
     ═════════════════════════════════════
     ✏️ ما يمكنك تعديله هنا:
       - بريدك الإلكتروني:              رابط direct-link (الإيميل)
       - رابط LinkedIn:                 رابط direct-link (لينكدإن)
       - معرّف Formspree (action):      سطر <form action="...">
     ══════════════════════════════════════════════════════════════════════════ -->
<section id="contact" class="contact bg-navy">
    <div class="container contact-inner">

        <!-- 1. العنوان والوصف -->
        <div class="contact-header">
            <h2 class="section-title">تواصل معي</h2>
            <p class="section-desc">أنا دائماً منفتح لمناقشة المشاريع الجديدة، الأفكار الإبداعية، والفرص التي يمكن أن نصنع من خلالها فرقاً معاً.</p>
        </div>

        <!-- 2. نموذج الإرسال (الخيار الأساسي) -->
        <div class="contact-form-wrapper">
            <!-- ✏️ EDIT: استبدل YOUR_FORM_ID برابط Formspree الخاص بك -->
            <!-- مثال: action="https://formspree.io/f/xabc1234" -->
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
        <div class="contact-alternatives">
            <p class="contact-alternatives-label">أو تواصل مباشرة</p>
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

