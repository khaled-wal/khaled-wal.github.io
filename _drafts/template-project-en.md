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
#   Section 6 → Downloadable Project Document (Visual Preview)
#   CTA → Contact call to action
# ═══════════════════════════════════════════════════════════════════════════

# ─── Jekyll Settings ──────────────────────────────────────────────────
layout: project
lang: en
translation_key: unique_key_here      # Must match the Arabic version
date: 2026-01-01                      # Project date — used for sorting
order: 1
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
image: "/assets/images/projects/prog-def-cover.jpg"

# ═══════ Phase 2: Hero Section Data ═══════════════════════════════════

# Wide hero image — ideal size 1200×600
hero_image: "/assets/images/projects/prog-def-cover.jpg"

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
# Add image paths — leave commented if not available

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

# ═══════ Phase 9: Downloadable Document (File Preview Card) ═══════════
# Interactive preview card with thumbnail, format badge, and direct download action
download_file: "/assets/files/sample-report.pdf"
download_title: "Full Strategic Project Report (PDF)"
download_description: "Includes complete project blueprints, full statistical tables, KPI breakdowns, and operational appendices."
download_preview_image: "/assets/images/projects/prog-def-cover.jpg"
download_button_text: "Download Full Document (PDF)"
download_badge: "Verified Strategic Document"
download_file_size: "PDF • 3.5 MB"
download_format: "PDF"
download_section_title: "Download Project Document"

# ═══════ Phase 10: Side Navigation TOC ════════════════════════════════
# Table of Contents using id and label (matches page sections & headings)
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
    label: "Evaluation & Results"
  - id: "download"
    label: "Download Project Document"
---

<!-- ══════════════════════════════════════════════════════════════════════════
     Prose Content — Strategy & Execution
     ──────────────────────────────────────────────────────────────────────────
     UI/UX & Mobile Responsiveness Guidelines for Information-Heavy Content:
     1. Always wrap tables in <div class="table-responsive" markdown="1"> to prevent mobile overflow.
     2. Avoid raw unparsed LaTeX like $..$; use clean semantic typography (*n* = 45, α = 0.955).
     3. Use structured callout blockquotes for strategic takeaways and observations.
     ══════════════════════════════════════════════════════════════════════════ -->

## Strategic Plan

Explain here the overarching strategic framework and methodology applied to solve the client's core challenge.

### Pillar 1 — [Name]
Detailed description of actions taken within this pillar and the expected business impact.

### Pillar 2 — [Name]
Description of campaign activations or marketing initiatives.

<!-- Responsive Mobile-Friendly Table Example -->
<div class="table-responsive" markdown="1">

| Phase | Operational Objectives | Target Deliverables | Lead Role |
| :--- | :--- | :--- | :--- |
| **Phase 1** | Current audit & audience research | Analytical report & KPI dashboard | Marketing Lead |
| **Phase 2** | Campaign framing & creative production | 12 core assets + ad copy scripts | Creative Team |
| **Phase 3** | Campaign launch & paid media management | 25,000 impressions + 1,200 conversions | Ads Specialist |

</div>

> 💡 **Strategic Insight**: Use callout blockquotes to emphasize critical findings, improving scannability and reading rhythm.

## Execution & Implementation

Explain the implementation phases — timeline, milestones, unexpected friction, and how issues were addressed.

> ⚠️ **Friction Encountered**: Highlight challenges faced during rollout and how strategic flexibility resolved them.

## Results Summary

- **Primary Impact**: Concrete description of business and revenue growth.
- **Cost Efficiency**: Acquisition cost reduction and improved funnel performance.
- **Brand Equity**: Enhanced market positioning and long-term brand recall.
