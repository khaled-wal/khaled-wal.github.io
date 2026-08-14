---
# ═══════════════════════════════════════════════════════════════════════════
# Case Study Template — English (LTR) — Comprehensive v2
# ─────────────────────────────────────────────────────────────────────────
# Instructions:
#   1. Copy this file to _case_studies/ and rename it
#      Example: _case_studies/my-brand-2024-en.md
#   2. For Arabic version: copy template-case-study.md
#      Example: _case_studies/my-brand-2024.md
#   3. Fully delete any field you don't use (don't leave it empty) — the
#      system is built so a deleted field leaves zero visual gap.
#
# study_type options — three types now:
#   "internal" → Your own client work
#                Shows: client, my_role, budget, status
#   "external" → Critical analysis of ONE specific campaign from another
#                brand/agency
#                Shows: brand_analyzed, campaign_name, key_takeaway, core_critique
#   "analysis" → [NEW] Deep strategic analysis of a brand's overall
#                positioning (not one campaign). Long-form editorial pieces
#                using marketing frameworks (JTBD, SWOT, Brand Promise Gap...)
#                that often end on an open question. Shares the same fields
#                as "external" (brand_analyzed, key_takeaway, core_critique)
#                but unlocks extra fields of its own (see Section 9 below)
#                and does not need campaign_name.
#
# Important design note: this template "stretches" to fit any content
# pattern — a field existing doesn't mean you're required to use it. The
# rendered page adapts automatically to whichever fields are present,
# with zero empty gaps.
# ═══════════════════════════════════════════════════════════════════════════

# ─── Jekyll Settings ──────────────────────────────────────────────────
layout: case_study
lang: en
translation_key: unique_key_here     # Must match the Arabic version
permalink: /en/portfolio/slug-here/  # Replace slug-here with project slug
publish_state: "coming_soon"          # "published" | "coming_soon" | "draft"

# ─── Study Type ───────────────────────────────────────────────────────
study_type: "internal"                # "internal" | "external" | "analysis"

# Hero badge override text — [NEW] optional
# By default the badge text is chosen automatically from study_type, but
# you can override it here.
# Example for an analytical study: "Brand Positioning Analysis"
#type_label: ""

# ═══════ Phase 1: Core Data (Card + Hero) ════════════════════════════

# Main title — appears in the card and in the hero
title: "Case Study Title Here"

# Subtitle — appears below the main title in the hero, optional
subtitle: "A brief description clarifying context or specialization"

# Description — for SEO, not visible on the page (aim for 120–160 chars)
description: "One-sentence summary of this case study for search engines."

# Card thumbnail image — shown in the portfolio grid
#image: "/assets/images/case-studies/case-def-cover.jpg"

# Wide hero image — top of the case study page (ideal: 1200×600)
# Leave fully deleted if no image is available — the hero adapts without it
#hero_image: "/assets/images/case-studies/case-def-hero.jpg"

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

# ═══════ Phase 3: External & Analysis Study Fields ════════════════════
# Visible when study_type: "external" OR "analysis"

brand_analyzed: "Analyzed Brand Name"

# Campaign name — leave fully deleted for "analysis" studies (they don't
# examine a single campaign)
campaign_name: "Campaign Name"

key_takeaway: "The single most important insight from this analysis"
core_critique: "Write your core analytical critique here — it appears as a prominent callout block at the top of the prose content."

# Founding year — [NEW] useful for long-run positioning studies, optional
#founded: 2000

# Short competitive-position statement — [NEW] one line summarizing rank
# Example: "4th of 5 major competitors in its core category"
#market_position: ""

# ═══════ Phase 4: General Classification Fields (all types) ══════════

# Sector — classification badge in the hero, optional
sector: "E-Commerce"          # Examples: Food | Real Estate | Education

# Date — used for sorting and shown as a chip in Meta Bar
date: 2026-01-01
order: 1

# Last updated — [NEW] optional, only shown if different from the date above
#last_updated: 2026-02-10

# Study duration — chip in Meta Bar
study_duration: "6 Weeks"

# Reading time — [NEW] auto-computed by default from word count.
# You don't need to set this manually; use the field below only to
# override the automatic estimate in edge cases (table/image-heavy content)
#reading_time_override: "12 min read"

# External link — "View Source" button in the hero, optional (one main link)
#external_link: "https://example.com/campaign-link"

# Tags — general classification badges below the content
tags:
  - "Social Media"
  - "Content Strategy"
  - "Brand Building"

# ═══════ Phase 5: KPI Cards ══════════════════════════════════════════
# Delete the entire line pair to hide a card — best suited to internal/
# external campaign studies. "analysis" studies usually skip this section
# entirely.

kpi_1_label: "Monthly Reach"
kpi_1_value: "89K"
kpi_2_label: "Engagement Rate"
kpi_2_value: "4.8%"
kpi_3_label: "Revenue Growth"
kpi_3_value: "+$45K"
#kpi_4_label: ""
#kpi_4_value: ""

# ═══════ Phase 6: Analytical Frameworks Used — [NEW] ═════════════════
# Mostly for "analysis" studies — the marketing/strategy frameworks used
# as the analytical lens (rendered as badges visually distinct from
# regular tags, near the top of the content before the prose begins)
#frameworks_used:
#  - "Jobs-to-be-Done (JTBD)"
#  - "Brand Promise Gap"
#  - "SWOT Analysis"
#  - "BCG Matrix"

# ═══════ Phase 7: Before & After Visuals ═════════════════════════════
# Remove both lines if not applicable — no empty space will appear

#before_image: "/assets/images/case-studies/before.jpg"
#after_image: "/assets/images/case-studies/after.jpg"

# Extra image gallery — [NEW] optional, for multiple supporting visuals /
# proof shots. An alternative to before/after when that pattern doesn't fit
#gallery:
#  - image: "/assets/images/case-studies/proof-1.jpg"
#    caption: "Short caption for the first image"
#  - image: "/assets/images/case-studies/proof-2.jpg"
#    caption: "Short caption for the second image"

# ═══════ Phase 8: Tools Used ══════════════════════════════════════════
tools_used:
  - "Meta Ads"
  - "Google Analytics"
  - "Canva"
  - "Notion"

# ═══════ Phase 9: Trust & Credibility — [NEW] ═════════════════════════
# Especially relevant for "external" and "analysis" studies that critique
# a real brand you have no affiliation with — protects your editorial
# credibility and clarifies your ethical/legal standing

# Editorial disclaimer — shown as a small notice above the content
#editorial_disclaimer: "This is an independent, unsponsored analysis with no affiliation to the brand discussed. All opinions expressed are analytical and belong to the author."

# Sources & references — [NEW] optional list shown as footnotes below the content
#sources:
#  - label: "Source or article name"
#    url: "https://example.com/source"
#  - label: "Another source"
#    url: "https://example.com/source-2"

# ═══════ Phase 10: Hook Quote & Closing Question — [NEW] ══════════════
# Two prominent visual components that break up the monotony of long
# analytical articles

# Opening hook quote/question — shown as large, prominent text between
# the hero and the content. Use it to capture the study's central
# tension or question in a single sentence
#hook_quote: "The real question isn't whether the brand is successful, but..."

# Closing open question/statement — shown in a distinct, prominent box at
# the very end of the article (visually different from a regular
# "> ✅ Conclusion" blockquote inside the prose — this one is bigger and
# designed to stick with the reader)
#closing_question: "At what point does expansion stop reinforcing a brand and start consuming the very positioning it was built on?"

# ═══════ Phase 11: Related Content — [NEW] ════════════════════════════
# Other studies to suggest to the reader — built from other files' slugs

#related_case_studies:
#  - slug: "another-case-study-slug"
#  - slug: "yet-another-slug"

# Mark this study as featured — [NEW] reserved for future use on the
# portfolio listing page (optional)
#featured: false

# ═══════ Phase 12: Side Navigation TOC ════════════════════════════════
# Each id must match a heading in the content below
# Example: <h2 id="challenge">Main Challenge</h2>
# No limit on item count — fits a "Challenge→Strategy→Results" campaign
# structure as well as a numbered "First→Second→Third..." analytical one
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
     General tips:
     • Give each major section heading (##) the same id as in toc_items
       Example: <h2 id="challenge">Main Challenge</h2>
     • Blockquotes (>) render as styled "Lesson Learned" callouts.
       Use these emoji prefixes to visually distinguish quote types:
         🎯 Strategic objective   💡 Analytical insight
         ⚠️ Challenge/obstacle    ✅ Conclusion
     • Tables are automatically styled with header row highlighting (no
       limit on table count — deep strategic analyses often need more
       than one comparison table)
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

<!-- ══════════════════════════════════════════════════════════════════════════
     🔀 Alternative pattern — for "analysis" studies (long-form strategic
     positioning analysis)
     ──────────────────────────────────────────────────────────────────────────
     Delete everything above and use this pattern instead when
     study_type: "analysis" — numbered sections (First/Second/Third...)
     instead of challenge/strategy/execution, with more room for prose
     analysis backed by multiple comparison tables. Update toc_items
     above to match:
       - id: "section-1" → First: Title of the first thread
       - id: "section-2" → Second: Title of the second thread
       - ... and so on through "conclusion" → Conclusion
     ══════════════════════════════════════════════════════════════════════════ -->

<!--
<h2 id="section-1">First: Title of the First Analytical Thread</h2>

Extended analytical prose explaining the phenomenon or strategic shift,
backed by a table where useful:

| Dimension | Previous State | Current State |
|---|---|---|
| ... | ... | ... |

---

<h2 id="section-2">Second: Title of the Second Analytical Thread</h2>

...

---

<h2 id="conclusion">Conclusion</h2>

A closing paragraph that ties the analysis's core argument together. The
open closing question is written in the closing_question front-matter
field above, not here — it renders automatically in its own prominent
box at the end of the page.
-->
