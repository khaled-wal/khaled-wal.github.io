---
# ═══════════════════════════════════════════════════════════════════════════
# Project Template — English (LTR)
# ─────────────────────────────────────────────────────────────────────────
# Instructions:
#   1. Copy this file to _projects/ and rename it
#      Example: _projects/resin-brand-2025-en.md
#   2. For Arabic version: copy template-project.md
#
# This layout is designed as a Client Journey Funnel:
#   Hero → Results First (ROI)
#   Stats Bar → Quick data
#   Section 1 → Client & Challenge
#   Section 2 → Research & Discovery
#   Section 3 → Content (Markdown)
#   Section 4 → Visual Gallery
#   Section 5 → KPI Cards
#   CTA → Contact call to action
# ═══════════════════════════════════════════════════════════════════════════

# ─── Jekyll Settings ──────────────────────────────────────────────────
layout: project
lang: en
translation_key: unique_key_here      # Must match the Arabic version
date: 2026-01-01                      # Project date — used for sorting
permalink: /en/portfolio/slug-here/   # Replace slug-here with project slug
publish_state: "coming_soon"           # "published" | "coming_soon"

# ─── Content Classification ───────────────────────────────────────────
tier: "market"           # "market" = Real client work | "lab" = Academic/Training

# ═══════ Phase 1: Core Data (Card + Stats Bar) ════════════════════════

title: "Project Title Here"

# Subtitle — optional, supplementary context
subtitle: "A brief supplementary description or business context"

# SEO description — not visually rendered on page
description: "One-sentence summary of this project for search engines."

# Card thumbnail image
image: "/assets/images/projects/prog-def-cover.png"

# ═══════ Phase 2: Hero Section Data ═══════════════════════════════════

# Wide hero image — ideal size 1200×600
hero_image: "/assets/images/projects/prog-def-cover.png"

# Industry/Sector — optional badge in the hero
industry: "E-Commerce"         # Examples: Fashion | Food & Beverage | EdTech

# Main result — prominent impact card in the hero
project_result: "45% Increase in Revenue"

# Return on investment — highlighted in green
roi: "4.5x"

# ═══════ Phase 3: Quick Stats Bar ════════════════════════════════════

client: "Client or Brand Name"
duration: "3 Months"
budget: "$20,000"              # Optional — leave empty if confidential
my_role: "Marketing Manager / Strategic Consultant"
status: "Completed"            # Completed | In Progress | Phase 2
project_phase: "Phase 1"       # Shown as a tag on the portfolio card

# ═══════ Phase 4: Client & Challenge ═════════════════════════════════

# Client overview — a paragraph describing the business context
client_overview: "Write a paragraph about the client: who are they? what sector? what is their scale? what are their general goals?"

# Core problem — appears as a prominent warning-style callout
core_problem: "Describe the fundamental strategic problem the client faced before working with you."

# ═══════ Phase 5: Research & Discovery (Insight Cards) ════════════════
# Array of data cards — add as many as needed

research_insights:
  - icon: "fa-solid fa-users"
    label: "Target Audience"
    value: "Professionals 25-40, small business owners"
  - icon: "fa-solid fa-chart-pie"
    label: "Market Share"
    value: "12% currently — target 20% within 6 months"
  - icon: "fa-solid fa-magnifying-glass"
    label: "Competitor Analysis"
    value: "3 key competitors — their gap is in digital content"
  - icon: "fa-solid fa-lightbulb"
    label: "Key Opportunity"
    value: "TikTok channel completely untapped in this sector"

# ═══════ Phase 6: KPI Cards ══════════════════════════════════════════
# Delete the entire line pair to hide a card

kpi_1_label: "Traffic Growth"
kpi_1_value: "+45%"
kpi_2_label: "Monthly Revenue"
kpi_2_value: "+30%"
kpi_3_label: "Follower Growth"
kpi_3_value: "+2.5K"
#kpi_4_label: ""
#kpi_4_value: ""

# ═══════ Phase 7: Visual Gallery ══════════════════════════════════════
# Leave empty if no visuals are available yet

gallery:
#  - "/assets/images/projects/screenshot-1.jpg"
#  - "/assets/images/projects/screenshot-2.jpg"
#  - "/assets/images/projects/screenshot-3.jpg"

# ═══════ Phase 8: Tools Used ══════════════════════════════════════════
tools_used:
  - "Meta Ads"
  - "Google Analytics"
  - "Canva"
  - "Notion"

# ═══════ Phase 9: Side Navigation TOC ════════════════════════════════
# Uses id and label (NOT url and title)
# Each id must match a section's HTML id attribute
toc_items:
  - id: "client-problem"
    label: "Client & Challenge"
  - id: "research"
    label: "Research & Discovery"
  - id: "content"
    label: "Strategy & Execution"
  - id: "gallery"
    label: "Visual Gallery"
  - id: "results"
    label: "Results & Evaluation"
---

<!-- ══════════════════════════════════════════════════════════════════════════
     Prose Content — Strategy & Execution
     ──────────────────────────────────────────────────────────────────────────
     This section appears in Section #3, between "Research" and "Gallery".
     ══════════════════════════════════════════════════════════════════════════ -->

## Strategic Plan

Explain the methodology and strategic framework you designed to solve the client's challenge.

### Pillar One — [Name]
Describe what this pillar involves and what impact it is designed to produce.

### Pillar Two — [Name]
Describe the campaigns or initiatives under this pillar.

### Pillar Three — [Name]
Describe the content types or activities tied to this pillar.

> 💡 **Strategic Insight**: Use blockquotes for prominent analytical observations — they render with a distinctive green accent.

## Execution & Implementation

Explain the execution phases — the timeline, challenges that emerged, and how you navigated them.

> ⚠️ **Challenge Encountered**: Note any obstacle that came up during execution and how it was resolved.

## Key Results Summary

- **Result One**: Description of the outcome and its business impact
- **Result Two**: Description of the outcome and its business impact
- **Result Three**: Description of the outcome and its business impact
