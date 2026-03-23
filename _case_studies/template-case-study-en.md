---
# ═══════════════════════════════════════════════════════════════════════════
# Template: Case Study
# ─────────────────────────────────────────────────────────────────────────
# Copy this file to the _case_studies/ folder and rename it.
# Example: _case_studies/my-new-case-study.md
# For English: _case_studies/my-new-case-study-en.md (with lang: en)
#
# Study Type (study_type):
#   "internal" → Personal work study (shows: Client, My Role, Budget)
#   "external" → External campaign/brand analysis (shows: Brand, Campaign, Takeaway)
# ═══════════════════════════════════════════════════════════════════════════

# ─── Basic Settings ───────────────────────────────────────────────────
layout: case_study
lang: en                         # Language: ar or en
translation_key: unique_key_here  # Link key between Arabic and English — must be identical in both
permalink: /en/portfolio/template-case-study-en/
image: /assets/images/case-studies/after.png

# ─── Study Type ──────────────────────────────────────────────────────
study_type: "internal"            # Change to "external" for analyzing external campaigns

# ─── Basic Information ───────────────────────────────────────────────────
title: "Case Study Title Here"
#hero_image: ""  # Cover image — ideal size 1200×600
objective: "Primary goal of the study/campaign"
roi: "240%"                       # Return on Investment — leave empty if not applicable

# ─── Internal Study Fields (internal) ─────────────────────────────────
# Appears only when study_type: "internal"
client: "Client Name"
my_role: "Marketing Manager / Consultant"
budget: "50,000 SAR"

# ─── External Study Fields (external) ─────────────────────────────────
# Appears only when study_type: "external"
brand_analyzed: "Brand Name"
campaign_name: "Marketing Campaign Name"
key_takeaway: "Core lesson learned from this campaign"
core_critique: "Main critique or observation on the campaign/brand — appears as a prominent box above content"

# ─── Key Performance Indicators (KPI) — Displayed as prominent number cards ──────────────
# Add up to 4 indicators — delete any label/value pair to hide the card
kpi_1_label: "Monthly Reach"
kpi_1_value: "89K"
kpi_2_label: "Engagement Rate"
kpi_2_value: "4.8%"
kpi_3_label: "Sales"
kpi_3_value: "153K SAR"
# kpi_4_label: ""
# kpi_4_value: ""

# ─── Comparison Images (Before/After) ──────────────────────────────────────────
# Displayed as two columns side-by-side — leave empty if not applicable
before_image: "/assets/images/case-studies/before.png"
after_image: "/assets/images/case-studies/after.png"

# ─── Tools Used — Displayed as badges ──────────────────────
tools_used:
  - "Meta Ads"
  - "Google Analytics"
  - "Canva"
  - "Notion"

# ─── Sticky TOC (Table of Contents) ────────────────────────────────────
# Each item contains: id (HTML heading identifier) and label (Display name)
# id must match the headings in the content below
toc_items:
  - id: "the-challenge"
    label: "The Challenge"
  - id: "strategy"
    label: "Strategy"
  - id: "results"
    label: "Results"
  - id: "comparison"
    label: "Before / After"
  - id: "tools"
    label: "Tools"
---

## The Challenge
Explain the challenge or problem you faced here. What was the situation before intervention?

## Strategy
Explain the methodology and plan you followed to solve the problem.

1. **First Pillar**: Brief description
2. **Second Pillar**: Brief description
3. **Third Pillar**: Brief description

> 💡 **Lesson Learned**: You can place important notes and lessons learned in blockquotes — they will appear in a distinct format.

## Results

| Metric | Before | After |
|---------|-----|-----|
| First Metric | X | Y |
| Second Metric | X | Y |
| Third Metric | X | Y |

Write a summary of the results here.