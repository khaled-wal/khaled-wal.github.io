---
layout: default
title: "أعمالي"
translation_key: case_studies
permalink: /portfolio/
light_bg: true
description: "استعرض دراسات الحالة والمشاريع التي أبدعها خالد وليد في مجال التسويق والاتصال."
---

<section class="portfolio-page-section bg-light">
  <div class="container">
    <h1 class="portfolio-page-title reveal">أعمالي</h1>
    <!-- ══════════════════════════════════════════════════════════════
         TIER 1: أعمال السوق الحقيقية (Market Work)
         کل بطاقة تمثّل مشروعاً حقيقياً مع عميل أو علامة تجارية.
         الفلتر: status=published AND lang=ar
    ══════════════════════════════════════════════════════════════ -->
    <div class="portfolio-tier-market reveal">
      <div class="portfolio-market-wrapper">
        <div class="market-sticky-sidebar">
          <h2 class="market-sidebar-title">أعمال السوق</h2>
        </div>
        <div class="market-content-col">
          <!-- المشاريع -->
          <h3 class="portfolio-page-subtitle">المشاريع</h3>
          <div class="portfolio-grid-custom tier-market-grid">
            {%- assign market_pr = site.projects | where: "lang", "ar" | where: "publish_state", "published" | sort: "date" | reverse -%}
            {% for item in market_pr %}
            <a href="{{ item.url | relative_url }}" class="card-link" aria-label="{{ item.title }}">
            <article class="portfolio-card">
                <div class="card-image">
                    {% if item.image %}
                    <img src="{{ item.image | relative_url }}" alt="{{ item.title }}">
                    {% else %}
                    <img src="{{ '/assets/images/projects/prog-def-cover.png' | relative_url }}" alt="{{ item.title }}">
                    {% endif %}
                </div>
                <div class="card-content">
                    <span class="category">
                        {% if item.client %}
                            {{ site.data.i18n.ar.client }} {{ item.client }}
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
            <p>لا توجد مشاريع حالياً.</p>
            {% endfor %}
          </div>
          <!-- دراسات الحالة -->
          <h3 class="portfolio-page-subtitle">دراسات الحالة</h3>
          <div class="portfolio-grid-custom tier-market-grid">
            {%- assign market_cs = site.case_studies | where: "lang", "ar" | where: "publish_state", "published" | sort: "date" | reverse -%}
            {% for item in market_cs %}
            <a href="{{ item.url | relative_url }}" class="card-link" aria-label="{{ item.title }}">
            <article class="portfolio-card">
                <div class="card-image">
                    {% if item.image %}
                    <img src="{{ item.image | relative_url }}" alt="{{ item.title }}">
                    {% else %}
                    <img src="{{ '/assets/images/case-studies/case-def-cover.png' | relative_url }}" alt="{{ item.title }}">
                    {% endif %}
                </div>
                <div class="card-content">
                    <span class="category">
                        {% if item.client %}
                            {{ site.data.i18n.ar.client }} {{ item.client }}
                        {% elsif item.brand_analyzed %}
                            {{ site.data.i18n.ar.cs_brand_analyzed }}: {{ item.brand_analyzed }}
                        {% else %}
                            {{ site.data.i18n.ar.latest_case_studies }}
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
            <p>لا توجد دراسات حالة حالياً.</p>
            {% endfor %}
          </div>
        </div>
      </div>
    </div>
    <!-- /portfolio-tier-market -->
    <!-- ══════════════════════════════════════════════════════════════
         TIER 2: أعمال المختبر (Lab / University / Training)
         مشاريع استكشافية وتدريبية وأكاديمية.
         الفلتر: من مجموعة (collection) lab
    ══════════════════════════════════════════════════════════════ -->
    {%- assign all_lab = site.lab | where: "lang", "ar" | sort: "date" | reverse -%}
    {% if all_lab.size > 0 %}
    <div class="portfolio-tier-lab reveal">
      <span class="tier-label">
        <i class="fa-solid fa-flask" aria-hidden="true"></i>
      المختبر  -  اعمال اكاديمية وتدريبية 
      </span>
      <div class="portfolio-grid-custom tier-lab-blueprint">
        {% for item in all_lab %}
        <a href="{{ item.url | relative_url }}" class="card-link" aria-label="{{ item.title }}">
        <article class="portfolio-card">
            <div class="card-image">
                {% if item.image %}
                <img src="{{ item.image | relative_url }}" alt="{{ item.title }}">
                {% else %}
                <img src="{{ '/assets/images/lab/lab-def-academic-cover.png' | relative_url }}" alt="{{ item.title }}">
                {% endif %}
            </div>
            <div class="card-content">
                <span class="category">{{ item.category | default: "مشروع أكاديمي" }}</span>
                <h3>{{ item.title }}</h3>
                <p>{{ item.objective | default: item.description | truncatewords: 15 }}</p>
                <span class="read-more" aria-hidden="true">اقرأ المزيد <i class="fa-solid fa-arrow-left arrow-icon"></i></span>
            </div>
        </article>
        </a>
        {% endfor %}
      </div>
    </div>
    {% endif %}
    <!-- /portfolio-tier-lab -->
    <!-- ══════════════════════════════════════════════════════════════
         TIER 3: قيد التنفيذ (Coming Soon)
         مشاريع لم تُكتمل بعد — مُقفلة بصرياً مع Hover Overlay.
    ══════════════════════════════════════════════════════════════ -->
    {%- assign coming_soon_cs = site.case_studies | where: "lang", "ar" | where: "publish_state", "coming_soon" -%}
    {%- assign coming_soon_pr = site.projects | where: "lang", "ar" | where: "publish_state", "coming_soon" -%}
    {%- assign coming_soon_lab = site.lab | where: "lang", "ar" | where: "publish_state", "coming_soon" -%}
    {%- assign all_coming_soon = coming_soon_cs | concat: coming_soon_pr | concat: coming_soon_lab -%}
    {% if all_coming_soon.size > 0 %}
    <div class="portfolio-tier-coming-soon reveal">
      <span class="tier-label">
        <i class="fa-solid fa-hourglass-half" aria-hidden="true"></i>
        قيد التنفيذ
      </span>
      <div class="tier-coming-soon-slider">
        {% for item in all_coming_soon %}
        <div class="coming-soon-card" aria-label="{{ item.title }} — قيد التنفيذ" role="article">
          <article class="portfolio-card">
              <div class="card-image">
                  {% if item.image %}
                  <img src="{{ item.image | relative_url }}" alt="{{ item.title }}" aria-hidden="true">
                  {% else %}
                  <img src="{{ '/assets/images/coming-soon-def.png' | relative_url }}" alt="{{ item.title }}" aria-hidden="true">
                  {% endif %}
              </div>
              <div class="card-content">
                  <span class="category">{{ item.category | default: "قريباً" }}</span>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.objective | default: item.description | truncatewords: 12 }}</p>
              </div>
          </article>
        </div>
        {% endfor %}
      </div>
    </div>
    {% endif %}
    <!-- /portfolio-tier-coming-soon -->

  </div>
</section>
