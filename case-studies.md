---
layout: default
title: "أعمالي"
translation_key: case_studies
permalink: /portfolio/
description: "استعرض دراسات الحالة والمشاريع التي أبدعتها خالد وليد في مجال التسويق والاتصال."
---

<section class="portfolio-page-section bg-light">
  <div class="container">
    <h1 class="portfolio-page-title">أعمالي</h1>
    
    <h2 class="portfolio-page-subtitle">دراسات الحالة</h2>
    <div class="portfolio-grid-custom">
      {% assign ar_case_studies = site.case_studies | where: "lang", "ar" %}
      {% for item in ar_case_studies %}
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
              <span class="category">{{ site.data.i18n.ar.client }} {{ item.client }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.objective | default: item.description | truncatewords: 15 }}</p>
              <a href="{{ item.url | relative_url }}" class="read-more">اقرأ المزيد <i class="fa-solid fa-arrow-left arrow-icon"></i></a>
          </div>
      </article>
      {% else %}
      <p>لا توجد دراسات حالة حالياً.</p>
      {% endfor %}
    </div>

    <h2 class="portfolio-page-subtitle">المشاريع</h2>
    <div class="portfolio-grid-custom">
      {% assign ar_projects = site.projects | where: "lang", "ar" %}
      {% for item in ar_projects %}
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
              <span class="category">{{ site.data.i18n.ar.projects }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.objective | default: item.description | truncatewords: 15 }}</p>
              <a href="{{ item.url | relative_url }}" class="read-more">اقرأ المزيد <i class="fa-solid fa-arrow-left arrow-icon"></i></a>
          </div>
      </article>
      {% else %}
      <p>لا توجد مشاريع حالياً.</p>
      {% endfor %}
    </div>

  </div>
</section>
