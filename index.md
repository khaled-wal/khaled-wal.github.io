---
layout: default
translation_key: home
title: "الصفحة الرئيسية"
---

<!-- Hero Section -->
<section id="hero" class="hero bg-navy">
    <div class="container hero-inner">
        <div class="hero-content">
            <span class="badge">👋 مرحباً بك!</span>
            <h1 class="hero-title">أنا خالد،<br><span class="highlight">طالب اتصالات تسويقية</span></h1>
            <p class="hero-desc">أحوّل البيانات إلى استراتيجيات تسويقية تُحقق نتائج. متخصص في الاتصال التسويقي | تحليل البيانات | تجربة المستخدم.</p>
            <div class="hero-actions">
                <a href="{{ '/portfolio/' | relative_url }}" class="btn btn-primary">أعمالي السابقة <i
                        class="fa-solid fa-arrow-left arrow-icon"></i></a>
                <a href="#contact" class="btn btn-secondary">تواصل معي الآن</a>
            </div>
        </div>
        <!-- Profile Image & Floating Badges -->
        <div class="hero-image-wrapper">
            <div class="profile-image-container">
                <img src="{{ '/assets/images/MY PIC.PNG' | relative_url }}" alt="Khaled Waleed" class="profile-image">
            </div>
        </div>
    </div>

    <!-- Skills/Tools Horizontal Bar -->
    <div class="container">
        <div class="skills-bar">
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
        </div>
    </div>
</section>

<!-- Gradient Divider -->
<div class="section-divider bg-navy-to-light"></div>

<!-- Portfolio Section -->
<section id="portfolio" class="portfolio bg-light">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title dark-text">{{ site.data.i18n.ar.featured_work }}</h2>
            <a href="{{ '/portfolio/' | relative_url }}" class="btn btn-outline-dark view-all-btn">عرض كل الأعمال <i
                    class="fa-solid fa-arrow-left arrow-icon"></i></a>
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
                    <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; color: var(--clr-border);">
                      <i class="fa-solid fa-briefcase fa-3x"></i>
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

<!-- Resume / Timeline Section -->
<section id="cv-section" class="resume bg-navy">
    <div class="container resume-inner">
        <div class="resume-content">
            <h2 class="section-title">السيرة الذاتية</h2>
            <p class="section-desc">مسيرتي الأكاديمية والمهنية ترتكز على الشغف بالتعلم المستمر وتطوير الذات في مجالات الاتصال والتسويق.</p>
            <a href="{{ site.cv_path | default: '#' | relative_url }}" target="_blank" class="btn btn-primary download-cv-btn">
                <i class="fa-solid fa-download"></i>
                <span>تحميل السيرة الذاتية</span>
            </a>
        </div>

        <div class="timeline-container">
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">متوقع التخرج: 2026</div>
                    <div class="timeline-role">بكالوريوس اتصال تسويقي</div>
                    <div class="timeline-company">جامعة الإمام محمد بن سعود الإسلامية</div>
                    <p>أدرس حالياً في تخصص الاتصال التسويقي، واكتسبت مهارات قوية في العلاقات العامة، سلوك المستهلك، الحملات الإعلانية وصناعة المحتوى.</p>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">2023 - الآن</div>
                    <div class="timeline-role">أخصائي تسويق (عمل حر)</div>
                    <div class="timeline-company">مستقل</div>
                    <p>إدارة حملات تسويقية، بناء هوية بصرية، تحليل بيانات وتقارير أداء للعديد من المشاريع.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="contact bg-navy">
    <div class="container contact-inner">
        <div class="contact-text">
            <h2 class="section-title">تواصل معي</h2>
            <p class="section-desc">أنا دائماً منفتح لمناقشة المشاريع الجديدة، الأفكار الإبداعية، والفرص التي يمكن أن نصنع من خلالها فرقاً معاً.</p>
            <div class="contact-info">
                <div class="info-item">
                    <div class="icon-box"><i class="fa-solid fa-envelope"></i></div>
                    <div>
                        <span>البريد الإلكتروني</span>
                        <strong>Khaledwal20@hotmail.com</strong>
                    </div>
                </div>
                <div class="info-item">
                    <div class="icon-box"><i class="fa-brands fa-linkedin"></i></div>
                    <div>
                        <span>لينكد إن</span>
                        <strong dir="ltr"><a href="https://www.linkedin.com/in/khaledw-hashem/" target="_blank">in/khaledw-hashem</a></strong>
                    </div>
                </div>
            </div>
        </div>

        <div class="contact-form-wrapper">
            <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
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
                <button type="submit" class="btn btn-primary submit-btn">إرسال الرسالة <i
                        class="fa-solid fa-paper-plane"></i></button>
            </form>
        </div>
    </div>
</section>
