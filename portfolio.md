---
layout: default
lang: ar
title: "أعمالي"
translation_key: case_studies
permalink: /portfolio/
light_bg: true
description: "استعرض دراسات الحالة والمشاريع التي أبدعها خالد وليد في مجال التسويق."
---

<section class="portfolio-page-section bg-light">
  <div class="container">
    <div class="portfolio-page-header reveal" style="margin-bottom: 2rem;">
      <h1 class="portfolio-page-title">أعمالي</h1>
      <p class="portfolio-page-subdesc" style="color: var(--clr-text-dark); font-size: 1.1rem; max-width: 680px; margin-top: 0.5rem;">مشاريع وحملات استراتيجية ودراسات تحليليّة تُركز على إحداث أثر تسويقي ملموس واستخلاص الرؤى المبنية على البيانات.</p>
    </div>

    <!-- ══════════════════════════════════════════════════════════════
         أزرار الفرز والتصفية (Filter Tabs)
    ══════════════════════════════════════════════════════════════ -->
    <div class="portfolio-filter-wrapper reveal" style="margin-bottom: 2.5rem;">
      <div class="portfolio-filter-tabs" role="tablist" aria-label="تصنيفات الأعمال">
        <button type="button" class="filter-tab active" data-filter="all" role="tab" aria-selected="true">
          {{ site.data.i18n.ar.filter_all }}
        </button>
        <button type="button" class="filter-tab" data-filter="strategy" role="tab" aria-selected="false">
          <i class="fa-solid fa-chart-line" aria-hidden="true"></i> {{ site.data.i18n.ar.filter_strategy }}
        </button>
        <button type="button" class="filter-tab" data-filter="creative" role="tab" aria-selected="false">
          <i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> {{ site.data.i18n.ar.filter_creative }}
        </button>
      </div>
    </div>

    <!-- ══════════════════════════════════════════════════════════════
         شبكة الأعمال الموحدة (Unified Works Grid)
         عرض متناسق ومتكافئ لجميع المشاريع ودراسات الحالة
    ══════════════════════════════════════════════════════════════ -->
    <div class="portfolio-grid reveal" id="portfolio-grid" style="margin-bottom: 4rem;">
      {%- assign all_projects = site.projects | where: "lang", "ar" | where: "publish_state", "published" -%}
      {%- assign all_case_studies = site.case_studies | where: "lang", "ar" | where: "publish_state", "published" -%}
      {%- assign all_lab_items = site.lab | where: "lang", "ar" | where: "publish_state", "published" -%}
      {%- assign all_published_works = all_projects | concat: all_case_studies | concat: all_lab_items | sort: "order" | reverse -%}

      {% for item in all_published_works %}
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
                  {{ site.data.i18n.ar.client }} {{ item.client }}
                {% elsif item.brand_analyzed %}
                  {{ site.data.i18n.ar.cs_brand_analyzed }}: {{ item.brand_analyzed }}
                {% elsif item.collection == 'case_studies' %}
                  {{ site.data.i18n.ar.case_studies }}
                {% elsif item.category %}
                  {{ item.category }}
                {% else %}
                  {{ site.data.i18n.ar.projects }}
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
              <span class="read-more" aria-hidden="true">اقرأ المزيد <i class="fa-solid fa-arrow-left arrow-icon"></i></span>
            </div>
          </article>
        </a>
      </div>
      {% else %}
        <p>لا توجد أعمال حالياً.</p>
      {% endfor %}
    </div>
    <!-- ══════════════════════════════════════════════════════════════
         قيد التنفيذ (Coming Soon)
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
