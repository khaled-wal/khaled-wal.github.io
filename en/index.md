---
layout: default
translation_key: home
title: "Home"
description: "Khaled Hashem — MarCom Student | Interested in branding and consumer behavior analysis"
---

<!-- ══════════════════════════════════════════════════════════════════════════
     ░░ HERO SECTION ░░
     ════════════════════════════════════════════════════
     ✏️ EDIT HERE:
       - Badge text:              Line ~12
       - H1 title (name + role):  Line ~13
       - Short description:       Line ~14
       - CTA button text:         Lines ~16–18
       - Profile image filename:  Line ~24
         (Place your photo in assets/images/ and update the filename)
     ══════════════════════════════════════════════════════════════════════════ -->
<section id="hero" class="hero bg-navy">
    <div class="container hero-inner">
        <div class="hero-content">
            <!-- ✏️ EDIT: Welcome badge text -->
            <span class="badge">👋 Welcome!</span>
            <!-- ✏️ EDIT: H1 — your name + professional title -->
            <h1 class="hero-title">I'm Khaled,<br><span class="highlight">MarCom student</span></h1>
            <!-- ✏️ EDIT: Short description / elevator pitch -->
            <p class="hero-desc">Turning data into results-driven marketing strategies. Believing that every smarter act begins with deeper thinking. Focused on strategic planning and brand building.</p>
            <div class="hero-actions">
                <!-- ✏️ EDIT: Primary CTA — links to portfolio page (do not change href) -->
                <a href="{{ '/en/portfolio/' | relative_url }}" class="btn btn-primary">Explore My Work <i class="fa-solid fa-arrow-left arrow-icon"></i></a>
                <!-- ✏️ EDIT: Secondary CTA — opens CV PDF in a new tab -->
                <a href="{{ site.cv_path | default: '#' | relative_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><i class="fa-solid fa-file-arrow-down"></i> Download CV</a>
            </div>
        </div>
        <!-- ✏️ EDIT: Profile photo — file: assets/images/profile.png -->
        <div class="hero-image-wrapper">
            <div class="profile-image-container">
                <img src="{{ '/assets/images/profile.webp' | relative_url }}" alt="Khaled Waleed Hashem" class="profile-image">
            </div>
        </div>
    </div>
    <!-- ══════════════════════════════════════════════════════════════════
         ░░ SKILLS BAR ░░
         ✏️ Add/edit skills by duplicating a <div class="skill-item"> block
         ══════════════════════════════════════════════════════════════════ -->
    <div class="container">
        <div class="skills-bar">
            <!-- ✏️ EDIT: Each skill-item = icon + label -->
            <div class="skill-item">
                <i class="fa-solid fa-magnifying-glass-chart"></i>
                <span>Market Analytics</span>
            </div>
            <div class="skill-item">
                <i class="fa-solid fa-brain"></i>
                <span>Consumer Behavior</span>
            </div>
            <div class="skill-item">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>Positioning</span>
            </div>
            <div class="skill-item">
                <i class="fa-solid fa-compass"></i>
                <span>Marketing Planning</span>
            </div>
            <!-- Add a new skill by copying the block above:
            <div class="skill-item">
                <i class="fa-solid fa-ICON_NAME"></i>
                <span>Skill Label</span>
            </div>
            -->
        </div>
    </div>
</section>

<!-- Gradient Divider -->
<div class="section-divider bg-navy-to-light"></div>

<!-- ══════════════════════════════════════════════════════════════════════════
     ░░ FEATURED PORTFOLIO SECTION ░░
     ════════════════════════════════════════════════
     ✏️ This section auto-displays the first item from each collection.
     To add work: create a new .md file in _case_studies/ or _projects/
     with lang: en in the front-matter. It will appear here automatically.
     ══════════════════════════════════════════════════════════════════════════ -->
<section id="portfolio" class="portfolio bg-light">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title dark-text">{{ site.data.i18n.en.featured_work }}</h2>
            {% assign en_all_works = site.case_studies | where: "lang", "en" %}
            {% assign en_all_projects = site.projects | where: "lang", "en" %}
            {% assign en_total = en_all_works.size | plus: en_all_projects.size %}
            <div class="view-all-group">
                <span class="portfolio-counter-badge">+{{ en_total }} {{ site.data.i18n.en.portfolio_count_label }}</span>
                <a href="{{ '/en/portfolio/' | relative_url }}" class="btn btn-outline-dark view-all-btn">View All <i class="fa-solid fa-arrow-left arrow-icon"></i></a>
            </div>
        </div>
        <div class="portfolio-grid">
            {% assign en_case_studies = site.case_studies | where: "lang", "en" %}
            {% assign en_projects = site.projects | where: "lang", "en" %}

            {% assign featured_items = "" | split: "" %}
            {% if en_case_studies.size > 0 %}{% assign featured_items = featured_items | push: en_case_studies[0] %}{% endif %}
            {% if en_projects.size > 0 %}{% assign featured_items = featured_items | push: en_projects[0] %}{% endif %}

            {% for item in featured_items %}
            <a href="{{ item.url | relative_url }}" class="card-link" aria-label="{{ item.title }}">
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
                            {{ site.data.i18n.en.client }} {{ item.client }}
                        {% else %}
                            {{ site.data.i18n.en.projects }}
                        {% endif %}
                    </span>
                    {% if item.status %}
                    <span class="project-status-tag"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> {{ item.status }}</span>
                    {% endif %}
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.objective | default: item.description | truncatewords: 15 }}</p>
                    <span class="read-more" aria-hidden="true">Read More <i class="fa-solid fa-arrow-left arrow-icon"></i></span>
                </div>
            </article>
            </a>
            {% else %}
            <p>No work yet.</p>
            {% endfor %}
        </div>
    </div>
</section>

<!-- Gradient Divider -->
<div class="section-divider bg-light-to-navy"></div>

<!-- ══════════════════════════════════════════════════════════════════════════
     ░░ RESUME / CV SECTION ░░
     ═════════════════════════════════════════════════
     ✏️ EDIT HERE:
       - Experience entries:   Duplicate a timeline-item block under "Experience"
       - Education entries:    Duplicate a timeline-item block under "Education"
       - Certifications:       Duplicate a cert-card block
       - CV file path:         Set cv_path in _config.yml

     💡 Design note: The section has a max-height in style.css keeping it compact.
        The gradient fade and download button are always pinned to the bottom.
        If you add many entries, increase max-height in .cv-container in style.css.
     ══════════════════════════════════════════════════════════════════════════ -->
<section id="cv-section" class="resume bg-navy">
    <div class="container cv-container">
        <div class="cv-header-center">
            <!-- ✏️ EDIT: Section heading and description -->
            <h2 class="section-title">Resume</h2>
            <p class="section-desc">My academic and professional journey is based on a passion for continuous learning and self-development in the field of marketing and strategic planning.</p>
        </div>
        <!-- Download CV button — directly below the heading, independent of the expandable area -->
        <!-- ✏️ EDIT: Update cv_path in _config.yml to point to your PDF file -->
        <div class="cv-download-btn-wrapper">
            <a href="{{ site.cv_path | default: '#' | relative_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-primary download-cv-btn" aria-label="Download CV (PDF)">
                <i class="fa-solid fa-download" aria-hidden="true"></i>
                <span>Download CV</span>
            </a>
        </div>
        <!-- ═══ Expandable area  ════════════════════════════════════════ -->
        <div class="cv-grid">
            <!-- ── Experience Column ─────────────────────────── -->
            <div class="cv-column">
                <!-- Section separator heading — visible on mobile only -->
                <h3 class="cv-column-title"><i class="fa-solid fa-briefcase"></i> Experience</h3>
                <div class="timeline">
                    <!-- ✏️ EDIT: Duplicate this block for each new role -->
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <!-- ✏️ EDIT: Date range -->
                        <div class="timeline-date">February 2026 - Present</div>
                        <!-- ✏️ EDIT: Job title -->
                        <div class="timeline-role">Strategic Planning Officer</div>
                        <!-- ✏️ EDIT: Company / client name -->
                        <div class="timeline-company">نادي إيجاد | IMSIU EJAD</div>
                        <!-- ✏️ EDIT: Brief description of responsibilities -->
                        <p>Led organizational analysis (SWOT), developed operational plans, and monitored initiative performance to ensure alignment with the club’s vision and goals.</p>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <!-- ✏️ EDIT: Date range -->
                        <div class="timeline-date">January 2026 - Present</div>
                        <!-- ✏️ EDIT: Job title -->
                        <div class="timeline-role">Deputy Creative Campaigns Lead</div>
                        <!-- ✏️ EDIT: Company / client name -->
                        <div class="timeline-company">نادي الإعلام - Media Club</div>
                        <!-- ✏️ EDIT: Brief description of responsibilities -->
                        <p>Supported strategic planning, managed team operations and task distribution, and ensured quality control and cross-departmental alignment.</p>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <!-- ✏️ EDIT: Date range -->
                        <div class="timeline-date">September 2025 - January 2026</div>
                        <!-- ✏️ EDIT: Job title -->
                        <div class="timeline-role">Creative Campaign Planner</div>
                        <!-- ✏️ EDIT: Company / client name -->
                        <div class="timeline-company">نادي الإعلام - Media Club</div>
                        <!-- ✏️ EDIT: Brief description of responsibilities -->
                        <p>Developed integrated marketing strategies, coordinated digital content across departments, and analyzed campaign performance to enhance the club’s digital impact.</p>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <!-- ✏️ EDIT: Date range -->
                        <div class="timeline-date">April 2024 - November 2024</div>
                        <!-- ✏️ EDIT: Job title -->
                        <div class="timeline-role">Visual Content Designer</div>
                        <!-- ✏️ EDIT: Company / client name -->
                        <div class="timeline-company">نادي الإعلام - Media Club</div>
                        <!-- ✏️ EDIT: Brief description of responsibilities -->
                        <p>Developed visual identity using AI & Photoshop, designed interactive content templates, and assisted in the technical organization of major events.</p>
                    </div>
                    <!-- Add new experience here by copying the block above -->
                </div>
            </div>
            <!-- ── Education + Certifications Column (merged for visual balance) ── -->
            <div class="cv-column">
                <!-- Section separator heading — visible on mobile only -->
                <h3 class="cv-mobile-section-title"><i class=""></i> </h3>
                <h3 class="cv-column-title"><i class="fa-solid fa-graduation-cap"></i> Education</h3>
                <div class="timeline">
                    <!-- ✏️ EDIT: Duplicate this block for each degree -->
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <!-- ✏️ EDIT: Expected graduation year or date range -->
                        <div class="timeline-date">Expected: 2027</div>
                        <!-- ✏️ EDIT: Degree name -->
                        <div class="timeline-role">Bachelor of Advertising and Marketing Communication</div>
                        <!-- ✏️ EDIT: University / institution name -->
                        <div class="timeline-company">Imam Mohammad Ibn Saud Islamic University</div>
                        <!-- ✏️ EDIT: Additional details -->
                        <p>Currently studying Marketing Communications, and I have acquired strong skills in Consumer Behavior Analysis, Advertising Campaigns, Public Relations and Content Creation.</p>
                    </div>
                    <!-- Add new education here by copying the block above -->
                </div>
                <!-- ── Certifications (inside Education column for visual balance) ── -->
                <div class="cv-certifications">
                    <!-- Section separator heading — visible on mobile only -->
                    <h3 class="cv-mobile-section-title"><i class=""></i> </h3>
                    <h3 class="cv-column-title"><i class="fa-solid fa-certificate"></i> Certifications</h3>
                    <div class="certification-grid">
                        <!-- ✏️ EDIT: Duplicate cert-card for each certification -->
                        <div class="cert-card">
                            <!-- ✏️ EDIT: Certificate name -->
                            <h4>Art of Selling</h4>
                            <!-- ✏️ EDIT: Issuer and year -->
                            <p>Issued by "Edraak Platform", 2025</p>
                        </div>
                        <div class="cert-card">
                            <h4>IBM: Intro to Artificial Intelligence</h4>
                            <p>Issued by "IBM", 2025</p>
                        </div>
                        <div class="cert-card">
                            <h4>Workshop: From Idea to Market</h4>
                            <p>Issued by "Monsha'at", 2025</p>
                        </div>
                        <div class="cert-card">
                            <h4>CS50: Intro to Computer Science</h4>
                            <p>Issued by "Harvard University", 2023</p>
                        </div>
                        <!-- Add new cert here by copying a cert-card block above -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.cv-container -->
    <div class="cv-action-area">
        <!-- Show More button (desktop + mobile) -->
        <button class="cv-expand-btn" id="cv-expand-btn-en" aria-expanded="false" aria-controls="cv-container-en">
            <span class="btn-label">Show More</span>
            <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
        </button>
    </div>

</section>

<script>
(function () {
    var btn = document.getElementById('cv-expand-btn-en');
    var panel = document.querySelector('#cv-section .cv-container');
    if (!btn || !panel) return;
    btn.addEventListener('click', function () {
        var expanded = panel.classList.toggle('is-expanded');
        btn.classList.toggle('is-expanded', expanded);
        btn.setAttribute('aria-expanded', expanded);
        btn.querySelector('.btn-label').textContent = expanded ? 'Show Less' : 'Show More';
    });
})();
</script>

<!-- ══════════════════════════════════════════════════════════════════════════
     ░░ CONTACT SECTION ░░
     ═════════════════════════════════════════════════
     ✏️ EDIT HERE:
       - Email address:  update the direct-link href
       - LinkedIn URL:   update the direct-link href
       - Formspree ID:   replace the form action URL
     ══════════════════════════════════════════════════════════════════════════ -->
<section id="contact" class="contact bg-navy">
    <div class="container contact-inner">
        <!-- 1. Heading and description -->
        <div class="contact-header">
            <h2 class="section-title">Contact Me</h2>
            <p class="section-desc">I am always open to discussing new projects, creative ideas or opportunities to make a difference together.</p>
        </div>
        <!-- 2. Contact form (primary action) -->
        <div class="contact-form-wrapper">
            <!-- ✏️ EDIT: Replace YOUR_FORM_ID with your Formspree form ID -->
            <!-- Example: action="https://formspree.io/f/xabc1234" -->
            <form class="contact-form" action="https://formspree.io/f/mgoljdnp" method="POST">
                <!-- Formspree custom redirect — do not remove this hidden field -->
                <input type="hidden" name="_next" value="https://khaled-wal.github.io/en/thanks/">
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea name="message" id="message" rows="5" placeholder="Tell me more about your project..." required></textarea>
                </div>
                <button type="submit" class="btn btn-primary submit-btn">Send Message <i class="fa-solid fa-paper-plane"></i></button>
            </form>
        </div>
        <!-- 3. Direct contact alternatives (secondary) -->
        <div class="contact-alternatives">
            <p class="contact-alternatives-label">Or reach me directly</p>
            <div class="direct-links">
                <!-- ✏️ EDIT: Your email address -->
                <a href="mailto:Khaledwal20@hotmail.com" class="direct-link">
                    <i class="fa-solid fa-envelope"></i>
                    Khaledwal20@hotmail.com
                </a>
                <!-- ✏️ EDIT: Your LinkedIn profile URL -->
                <a href="https://www.linkedin.com/in/khaledw-hashem/" target="_blank" rel="noopener noreferrer" class="direct-link">
                    <i class="fa-brands fa-linkedin"></i>
                    in/khaledw-hashem
                </a>
                <!-- ✏️ EDIT: X (Twitter) profile URL -->
                <a href="https://x.com/K72A76ED" target="_blank" rel="noopener noreferrer" class="direct-link">
                    <i class="fa-brands fa-x-twitter"></i>
                    @K72A76ED
                </a>
            </div>
        </div>
    </div>
</section>

