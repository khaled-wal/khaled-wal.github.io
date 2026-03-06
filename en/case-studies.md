---
layout: default
title: "My Work"
translation_key: case_studies
permalink: /en/portfolio/
description: "Browse case studies and projects by Khaled Waleed in the fields of marketing and communications."
---

<section class="portfolio-page-section bg-light">
  <div class="container">
    <h1 class="portfolio-page-title">My Work</h1>
    
    <h2 class="portfolio-page-subtitle">Case Studies</h2>
    <div class="portfolio-grid-custom">
      {% assign en_case_studies = site.case_studies | where: "lang", "en" %}
      {% for item in en_case_studies %}
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
              <span class="category">{{ site.data.i18n.en.client }} {{ item.client }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.objective | default: item.description | truncatewords: 15 }}</p>
              <span class="read-more" aria-hidden="true">Read More <i class="fa-solid fa-arrow-left arrow-icon"></i></span>
          </div>
      </article>
      </a>
      {% else %}
      <p>No case studies available yet.</p>
      {% endfor %}
    </div>

    <h2 class="portfolio-page-subtitle">Projects</h2>
    <div class="portfolio-grid-custom">
      {% assign en_projects = site.projects | where: "lang", "en" %}
      {% for item in en_projects %}
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
              <span class="category">{{ site.data.i18n.en.projects }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.objective | default: item.description | truncatewords: 15 }}</p>
              <span class="read-more" aria-hidden="true">Read More <i class="fa-solid fa-arrow-left arrow-icon"></i></span>
          </div>
      </article>
      </a>
      {% else %}
      <p>No projects available yet.</p>
      {% endfor %}
    </div>

  </div>
</section>
