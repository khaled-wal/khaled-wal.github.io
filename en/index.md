---
layout: default
translation_key: home
---

<!-- Hero Section -->
<section id="hero" class="hero bg-navy">
    <div class="container hero-inner">
        <div class="hero-content">
            <span class="badge">👋 Welcome!</span>
            <h1 class="hero-title">I'm Khaled,<br><span class="highlight">Marketing Student</span></h1>
            <p class="hero-desc">Turning data into results-driven marketing strategies. Marketing Communications Specialist | Data Analysis | UX.</p>
            <div class="hero-actions">
                <a href="{{ '/en/portfolio/' | relative_url }}" class="btn btn-primary">My Portfolio <i
                        class="fa-solid fa-arrow-left arrow-icon"></i></a>
                <a href="#contact" class="btn btn-secondary">Contact Me</a>
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
                <span>Content Creation</span>
            </div>
            <div class="skill-item">
                <i class="fa-solid fa-chart-line"></i>
                <span>Data Analysis</span>
            </div>
            <div class="skill-item">
                <i class="fa-solid fa-object-group"></i>
                <span>SEO Optimization</span>
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
            <h2 class="section-title dark-text">{{ site.data.i18n.en.featured_work }}</h2>
            <a href="{{ '/en/portfolio/' | relative_url }}" class="btn btn-outline-dark view-all-btn">View All <i
                    class="fa-solid fa-arrow-left arrow-icon"></i></a>
        </div>

        <div class="portfolio-grid">
            {% assign en_case_studies = site.case_studies | where: "lang", "en" %}
            {% assign en_projects = site.projects | where: "lang", "en" %}
            
            {% assign featured_items = "" | split: "" %}
            {% if en_case_studies.size > 0 %}{% assign featured_items = featured_items | push: en_case_studies[0] %}{% endif %}
            {% if en_projects.size > 0 %}{% assign featured_items = featured_items | push: en_projects[0] %}{% endif %}

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
                            {{ site.data.i18n.en.client }} {{ item.client }}
                        {% else %}
                            {{ site.data.i18n.en.projects }}
                        {% endif %}
                    </span>
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.objective | default: item.description | truncatewords: 15 }}</p>
                    <a href="{{ item.url | relative_url }}" class="read-more">Read More <i class="fa-solid fa-arrow-left arrow-icon"></i></a>
                </div>
            </article>
            {% else %}
            <p>No work yet.</p>
            {% endfor %}
        </div>
    </div>
</section>

<!-- Gradient Divider -->
<div class="section-divider bg-light-to-navy"></div>

<!-- Resume / Timeline Section -->
<section id="cv-section" class="resume bg-navy">
    <div class="container cv-container">
        <div class="cv-header-center">
            <h2 class="section-title">Resume</h2>
            <p class="section-desc">My academic and professional journey is based on a passion for continuous learning and self-development within communications and marketing.</p>
        </div>

        <div class="cv-grid">
            <!-- Experience -->
            <div class="cv-column">
                <h3 class="cv-column-title"><i class="fa-solid fa-briefcase"></i> Experience</h3>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2023 - Present</div>
                        <div class="timeline-role">Marketing Specialist (Freelance)</div>
                        <div class="timeline-company">Freelance</div>
                        <p>Managing marketing campaigns, building brand identities, and analyzing performance data for various projects.</p>
                    </div>
                </div>
            </div>

            <!-- Education -->
            <div class="cv-column">
                <h3 class="cv-column-title"><i class="fa-solid fa-graduation-cap"></i> Education</h3>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">Expected: 2026</div>
                        <div class="timeline-role">B.A. Marketing Communications</div>
                        <div class="timeline-company">Imam Mohammad Ibn Saud Islamic University</div>
                        <p>Currently studying Marketing Communications, developing strong skills in PR, Consumer Behavior, Advertising, and Content Creation.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="cv-certifications">
            <h3 class="cv-column-title"><i class="fa-solid fa-certificate"></i> Certifications</h3>
            <div class="certification-grid">
                <div class="cert-card">
                    <h4>Digital Marketing Certificate</h4>
                    <p>Google - 2024</p>
                </div>
                <div class="cert-card">
                    <h4>Data Analytics</h4>
                    <p>Meta - 2023</p>
                </div>
            </div>
        </div>

        <div class="cv-download-btn-wrapper">
            <a href="{{ site.cv_path | default: '#' | relative_url }}" target="_blank" class="btn btn-primary download-cv-btn">
                <i class="fa-solid fa-download"></i>
                <span>Download CV</span>
            </a>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="contact bg-navy">
    <div class="container contact-inner">
        <div class="contact-text">
            <h2 class="section-title">Contact Me</h2>
            <p class="section-desc">I am always open to discussing new projects, creative ideas or opportunities to make a difference together.</p>

            <div class="contact-info">
                <div class="info-item">
                    <div class="icon-box"><i class="fa-solid fa-envelope"></i></div>
                    <div>
                        <span>Email Address</span>
                        <strong>Khaledwal20@hotmail.com</strong>
                    </div>
                </div>
                <div class="info-item">
                    <div class="icon-box"><i class="fa-brands fa-linkedin"></i></div>
                    <div>
                        <span>LinkedIn</span>
                        <strong dir="ltr"><a href="https://www.linkedin.com/in/khaledw-hashem/" target="_blank">in/khaledw-hashem</a></strong>
                    </div>
                </div>
            </div>
        </div>

        <div class="contact-form-wrapper">
            <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
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
                <button type="submit" class="btn btn-primary submit-btn">Send Message <i
                        class="fa-solid fa-paper-plane"></i></button>
            </form>
        </div>
    </div>
</section>
