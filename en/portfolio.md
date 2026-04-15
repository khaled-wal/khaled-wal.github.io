---
layout: default
title: "My Work"
translation_key: case_studies
permalink: /en/portfolio/
light_bg: true
description: "Browse case studies and projects by Khaled Waleed in the fields of marketing and communications."
---

<section class="portfolio-page-section bg-light">
  <div class="container">
    <h1 class="portfolio-page-title reveal">My Work</h1>
    <!-- ══════════════════════════════════════════════════════════════
         TIER 1: Market Work
         Filter: status=published AND lang=en
    ══════════════════════════════════════════════════════════════ -->
    <div class="portfolio-tier-market reveal">
      <div class="portfolio-market-wrapper">
        <div class="market-sticky-sidebar">
          <h2 class="market-sidebar-title">Market Impact</h2>
        </div>
        <div class="market-content-col">
          <!-- Projects -->
          <h3 class="portfolio-page-subtitle">Projects</h3>
          <div class="portfolio-grid-custom tier-market-grid">
            {%- assign en_market_pr = site.projects | where: "lang", "en" | where: "publish_state", "published" | sort: "order" | reverse -%}
            {% for item in en_market_pr %}
            <a href="{{ item.url | relative_url }}" class="card-link" aria-label="{{ item.title }}">
            <article class="portfolio-card">
                <div class="card-image">
                    {% if item.image %}
                    <img src="{{ item.image | relative_url }}" alt="{{ item.title }}">
                    {% else %}
                    <div class="card-placeholder">
                      <img src="/assets/images/projects/prog-def-cover.png" >
                    </div>
                    {% endif %}
                </div>
                <div class="card-content">
                    <span class="category">
                        {% if item.client %}
                            {{ site.data.i18n.en.client }} {{ item.client }}
                        {% else %}
                            {{ site.data.i18n.en.projects }}
                        {% endif %}
                    </span>
                    {% if item.project_phase %}
                    <span class="project-status-tag"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> {{ item.project_phase }}</span>
                    {% endif %}
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
          <!-- Case Studies -->
          <h3 class="portfolio-page-subtitle">Case Studies</h3>
          <div class="portfolio-grid-custom tier-market-grid">
            {%- assign en_market_cs = site.case_studies | where: "lang", "en" | where: "publish_state", "published" | sort: "order" | reverse -%}
            {% for item in en_market_cs %}
            <a href="{{ item.url | relative_url }}" class="card-link" aria-label="{{ item.title }}">
            <article class="portfolio-card">
                <div class="card-image">
                    {% if item.image %}
                    <img src="{{ item.image | relative_url }}" alt="{{ item.title }}">
                    {% else %}
                    <div class="card-placeholder">
                      <img src="/assets/images/case-studies/case-def-cover.png" >
                    </div>
                    {% endif %}
                </div>
                <div class="card-content">
                    <span class="category">
                        {% if item.client %}
                            {{ site.data.i18n.en.client }} {{ item.client }}
                        {% elsif item.brand_analyzed %}
                            {{ site.data.i18n.en.cs_brand_analyzed }}: {{ item.brand_analyzed }}
                        {% else %}
                            {{ site.data.i18n.en.latest_case_studies }}
                        {% endif %}
                    </span>
                    {% if item.project_phase %}
                    <span class="project-status-tag"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> {{ item.project_phase }}</span>
                    {% endif %}
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
        </div>
      </div>
    </div>
    <!-- /portfolio-tier-market -->
    <!-- ══════════════════════════════════════════════════════════════
         TIER 2: Training Works (from _lab)
         Filter: collection=lab AND lang=en
    ══════════════════════════════════════════════════════════════ -->
    {%- assign en_all_lab = site.lab | where: "lang", "en" | sort: "order" | reverse -%}
    {% if en_all_lab.size > 0 %}
    <div class="portfolio-tier-training reveal">
      <div class="training-wrapper">
        <span class="tier-label">
          <i class="fa-solid fa-briefcase" aria-hidden="true"></i>
          Training Works
        </span>
        <div class="portfolio-grid-custom tier-training-grid">
          {% for item in en_all_lab %}
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
                  <!-- Dynamic Badging Logic: Connects to 'training-badge' classes in style.css -->
                  {% if item.training_type %}
                  <span class="training-badge {{ item.training_type_class | default: 'badge-default' }}">
                      {{ item.training_type }}
                  </span>
                  {% else %}
                  <span class="category">{{ item.category | default: "Academic/Training Project" }}</span>
                  {% endif %}
                  
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.objective | default: item.description | truncatewords: 15 }}</p>
                  <span class="read-more" aria-hidden="true">Read More <i class="fa-solid fa-arrow-left arrow-icon"></i></span>
              </div>
          </article>
          </a>
          {% endfor %}
        </div>
      </div>
    </div>
    {% endif %}
    <!-- /portfolio-tier-training -->
    <!-- ══════════════════════════════════════════════════════════════
         TIER 3: Coming Soon
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
    <!-- /portfolio-tier-coming-soon -->

  </div>
</section>
