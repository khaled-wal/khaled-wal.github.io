---
layout: default
lang: en
title: "My Work"
translation_key: case_studies
permalink: /en/portfolio/
light_bg: true
description: "Browse case studies and projects by Khaled Waleed in the fields of marketing."
---

<section class="portfolio-page-section bg-light">
  <div class="container">
    <div class="portfolio-page-header reveal" style="margin-bottom: 2rem;">
      <h1 class="portfolio-page-title">My Work</h1>
      <p class="portfolio-page-subdesc" style="color: var(--clr-text-dark); font-size: 1.1rem; max-width: 680px; margin-top: 0.5rem;">Strategic projects, campaign execution, and analytical case studies focused on delivering tangible marketing results and data insights.</p>
    </div>

    <!-- ══════════════════════════════════════════════════════════════
         Filter Tabs
    ══════════════════════════════════════════════════════════════ -->
    <div class="portfolio-filter-wrapper reveal" style="margin-bottom: 2.5rem;">
      <div class="portfolio-filter-tabs" role="tablist" aria-label="Portfolio Filters">
        <button type="button" class="filter-tab active" data-filter="all" role="tab" aria-selected="true">
          {{ site.data.i18n.en.filter_all }}
        </button>
        <button type="button" class="filter-tab" data-filter="strategy" role="tab" aria-selected="false">
          <i class="fa-solid fa-chart-line" aria-hidden="true"></i> {{ site.data.i18n.en.filter_strategy }}
        </button>
        <button type="button" class="filter-tab" data-filter="creative" role="tab" aria-selected="false">
          <i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> {{ site.data.i18n.en.filter_creative }}
        </button>
      </div>
    </div>

    <!-- ══════════════════════════════════════════════════════════════
         Unified Works Grid (English)
    ══════════════════════════════════════════════════════════════ -->
    <div class="portfolio-grid reveal" id="portfolio-grid-en" style="margin-bottom: 4rem;">
      {%- assign en_projects = site.projects | where: "lang", "en" | where: "publish_state", "published" -%}
      {%- assign en_case_studies = site.case_studies | where: "lang", "en" | where: "publish_state", "published" -%}
      {%- assign en_lab_items = site.lab | where: "lang", "en" | where: "publish_state", "published" -%}
      {%- assign en_published_works = en_projects | concat: en_case_studies | concat: en_lab_items | sort: "order" | reverse -%}

      {% for item in en_published_works %}
      <div class="portfolio-item-wrapper" data-work-type="{{ item.work_type | default: 'strategy' }}">
        <a href="{{ item.url | relative_url }}" class="card-link" aria-label="{{ item.title }}">
          <article class="portfolio-card">
            <div class="card-image">
              {% if item.image %}
                <img src="{{ item.image | relative_url }}" alt="{{ item.title }}">
              {% else %}
                {% if item.collection == 'case_studies' %}
                  <img src="{{ '/assets/images/case-studies/case-def-cover.png' | relative_url }}" alt="{{ item.title }}">
                {% elsif item.collection == 'lab' %}
                  <img src="{{ '/assets/images/lab/lab-def-academic-cover.png' | relative_url }}" alt="{{ item.title }}">
                {% else %}
                  <img src="{{ '/assets/images/projects/prog-def-cover.png' | relative_url }}" alt="{{ item.title }}">
                {% endif %}
              {% endif %}
            </div>
            <div class="card-content">
              <span class="category">
                {% if item.client %}
                  {{ site.data.i18n.en.client }} {{ item.client }}
                {% elsif item.brand_analyzed %}
                  {{ site.data.i18n.en.cs_brand_analyzed }}: {{ item.brand_analyzed }}
                {% elsif item.collection == 'case_studies' %}
                  {{ site.data.i18n.en.case_studies }}
                {% elsif item.category %}
                  {{ item.category }}
                {% else %}
                  {{ site.data.i18n.en.projects }}
                {% endif %}
              </span>

              {% if item.tags %}
              <div class="card-tags">
                {% for tag in item.tags %}
                  <span class="card-tag">{{ tag }}</span>
                {% endfor %}
              </div>
              {% endif %}

              <h3>{{ item.title }}</h3>
              <p>{{ item.objective | default: item.description | truncatewords: 15 }}</p>
              <span class="read-more" aria-hidden="true">Read More <i class="fa-solid fa-arrow-right arrow-icon"></i></span>
            </div>
          </article>
        </a>
      </div>
      {% else %}
        <p>No work available yet.</p>
      {% endfor %}
    </div>

    <!-- ══════════════════════════════════════════════════════════════
         Coming Soon
    ══════════════════════════════════════════════════════════════ -->
    {%- assign en_coming_soon_cs = site.case_studies | where: "lang", "en" | where: "publish_state", "coming_soon" -%}
    {%- assign en_coming_soon_pr = site.projects | where: "lang", "en" | where: "publish_state", "coming_soon" -%}
    {%- assign en_coming_soon_lab = site.lab | where: "lang", "en" | where: "publish_state", "coming_soon" -%}
    {%- assign en_all_coming_soon = en_coming_soon_cs | concat: en_coming_soon_pr | concat: en_coming_soon_lab -%}
    {% if en_all_coming_soon.size > 0 %}
    <div class="portfolio-tier-coming-soon reveal">
      <span class="tier-label">
        <i class="fa-solid fa-hourglass-half" aria-hidden="true"></i>
        Coming Soon
      </span>
      <div class="tier-coming-soon-slider">
        {% for item in en_all_coming_soon %}
        <div class="coming-soon-card" aria-label="{{ item.title }} — Coming Soon" role="article">
          <article class="portfolio-card">
              <div class="card-image">
                  {% if item.image %}
                  <img src="{{ item.image | relative_url }}" alt="{{ item.title }}" aria-hidden="true">
                  {% else %}
                  <img src="{{ '/assets/images/coming-soon-def.png' | relative_url }}" alt="{{ item.title }}" aria-hidden="true">
                  {% endif %}
              </div>
              <div class="card-content">
                  <span class="category">{{ item.category | default: "Coming Soon" }}</span>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.objective | default: item.description | truncatewords: 12 }}</p>
              </div>
          </article>
        </div>
        {% endfor %}
      </div>
    </div>
    {% endif %}

  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var tabs = document.querySelectorAll('.filter-tab');
  var items = document.querySelectorAll('.portfolio-item-wrapper');
  if (!tabs.length || !items.length) return;

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var filter = this.getAttribute('data-filter');
      tabs.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');

      items.forEach(function (item) {
        var type = item.getAttribute('data-work-type');
        if (filter === 'all' || type === filter) {
          item.style.display = 'block';
          setTimeout(function() { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(function() { item.style.display = 'none'; }, 200);
        }
      });
    });
  });
});
</script>
