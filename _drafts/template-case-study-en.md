---
# ═══════════════════════════════════════════════════════════════════════════
# Case Study Template — English (LTR)
# ─────────────────────────────────────────────────────────────────────────
# Instructions:
#   1. Copy this file to _case_studies/ and rename it
#      Example: _case_studies/my-brand-2024-en.md
#   2. For Arabic version: copy template-case-study.md
#      Example: _case_studies/my-brand-2024.md
#
# study_type options:
#   "internal" → Your own client work
#                Shows: client, my_role, budget, status
#   "external" → Critical analysis of other brands/campaigns
#                Shows: brand_analyzed, campaign_name, key_takeaway, core_critique
# ═══════════════════════════════════════════════════════════════════════════

# ─── Jekyll Settings ──────────────────────────────────────────────────
layout: case_study
lang: en
translation_key: unique_key_here     # Must match the Arabic version
permalink: /en/portfolio/slug-here/  # Replace slug-here with project slug
publish_state: "coming_soon"          # "published" | "coming_soon"

# ─── Study Type ───────────────────────────────────────────────────────
study_type: "internal"                # "internal" | "external"

# ═══════ Phase 1: Core Data (Card + Hero) ════════════════════════════

# Main title — appears in the card and in the hero
title: "Case Study Title Here"

# Subtitle — [NEW] appears below the main title in the hero, optional
subtitle: "A brief description clarifying context or specialization"

# Description — for SEO, not visible on the page
description: "One-sentence summary of this case study for search engines."

# Card thumbnail image — shown in the portfolio grid
#image: "/assets/images/case-studies/case-def-cover.png"

# Wide hero image — top of the case study page (ideal: 1200×600)
hero_image: "/assets/images/case-studies/case-def-cover.png"

# Objective — shown as a chip in the Meta Bar
objective: "The main objective or problem this study addresses"

# Return on investment — highlighted with a prominent green card
roi: "240%"

# ═══════ Phase 2: Internal Study Fields ═══════════════════════════════
# Visible only when study_type: "internal"

client: "Client or Brand Name"
my_role: "Marketing Manager / Strategic Consultant"
budget: "$15,000"
status: "Completed"          # Completed | In Progress | Phase 2
project_phase: "Phase 1"     # Shown as a tag on the portfolio card

# ═══════ Phase 3: External Study Fields ═══════════════════════════════
# Visible only when study_type: "external"

brand_analyzed: "Analyzed Brand Name"
campaign_name: "Campaign Name"
key_takeaway: "The single most important insight from this analysis"
core_critique: "Write your core analytical critique here — it appears as a prominent callout block at the top of the prose content."

# ═══════ Phase 4: New Optional Fields ════════════════════════════════

# Sector — [NEW] classification badge in the hero, optional
sector: "E-Commerce"          # Examples: Food | Real Estate | Education

# Date — [NEW] used for sorting and shown as a chip in Meta Bar
date: 2026-01-01
order: 1

# Study duration — [NEW] chip in Meta Bar
study_duration: "6 Weeks"

# External link — [NEW] "View Source" button in the hero, optional
#external_link: "https://example.com/campaign-link"

# Tags — [NEW] classification badges below the content
tags:
  - "Social Media"
  - "Content Strategy"
  - "Brand Building"

# ═══════ Phase 5: KPI Cards ══════════════════════════════════════════
# Delete the entire line pair to hide a card

kpi_1_label: "Monthly Reach"
kpi_1_value: "89K"
kpi_2_label: "Engagement Rate"
kpi_2_value: "4.8%"
kpi_3_label: "Revenue Growth"
kpi_3_value: "+$45K"
#kpi_4_label: ""
#kpi_4_value: ""

# ═══════ Phase 6: Before & After Visuals ═════════════════════════════
# Remove if not applicable — no empty space will appear

#before_image: "/assets/images/case-studies/before.jpg"
#after_image: "/assets/images/case-studies/after.jpg"

# ═══════ Phase 7: Tools Used ══════════════════════════════════════════
tools_used:
  - "Meta Ads"
  - "Google Analytics"
  - "Canva"
  - "Notion"

# ═══════ Phase 8: Side Navigation TOC ════════════════════════════════
# Each id must match a heading in the content below
# Example: <h2 id="challenge">Main Challenge</h2>
toc_items:
  - id: "challenge"
    label: "Main Challenge"
  - id: "strategy"
    label: "Strategy"
  - id: "execution"
    label: "Execution"
  - id: "results"
    label: "Results"
  - id: "comparison"
    label: "Before & After"
  - id: "tools"
    label: "Tools"
---

<!-- ══════════════════════════════════════════════════════════════════════════
     Prose Content — Write here using standard Markdown.
     ──────────────────────────────────────────────────────────────────────────
     Tips:
     • Give each major section heading (##) the same id as in toc_items
       Example: <h2 id="challenge">Main Challenge</h2>
     • Blockquotes (>) render as styled "Lesson Learned" callouts
     • Tables are automatically styled with header row highlighting
     • Images display with hover-zoom effect
     ══════════════════════════════════════════════════════════════════════════ -->

<h2 id="challenge">Main Challenge</h2>

Describe the context and the problem you were called to solve. What was the situation **before** your intervention?
What was the market gap? What was the client struggling with?

> 🎯 **Strategic Objective**: Frame the core challenge in a single, clear sentence.

---

<h2 id="strategy">Strategy Adopted</h2>

Explain the framework and methodology you designed to address the challenge.

1. **Pillar One — [Name]**: Brief description of this pillar and what it achieves
2. **Pillar Two — [Name]**: Brief description of this pillar and what it achieves
3. **Pillar Three — [Name]**: Brief description of this pillar and what it achieves

> 💡 **Strategic Insight**: Use blockquotes for prominent analytical observations — they render with a distinctive green accent.

### SWOT Analysis (Optional)

| | Strengths | Weaknesses |
|---|---|---|
| **Internal** | • Strength 1<br>• Strength 2 | • Weakness 1<br>• Weakness 2 |
| **External** | **Opportunities**: Opp. 1 | **Threats**: Threat 1 |

---

<h2 id="execution">Execution Phase</h2>

Explain how the strategy was translated into concrete steps.

### Week 1 — [Phase Name]
What was done and what were the initial results?

### Weeks 2–4 — [Phase Name]
Execution details, challenges that emerged and how they were handled.

> ⚠️ **Challenge Encountered**: Note any obstacle that came up during execution and how it was resolved.

---

<h2 id="results">Results & Impact</h2>

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Metric One | X | Y | +Z% |
| Metric Two | X | Y | +Z% |
| Metric Three | X | Y | +Z% |

Write a concise analysis of the numbers and what they mean in practical terms.

> ✅ **Conclusion**: What did this case prove at the strategic level?
