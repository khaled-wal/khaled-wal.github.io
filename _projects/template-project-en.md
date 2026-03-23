---
# ═══════════════════════════════════════════════════════════════════════════
# قالب المشروع — Template: Project
# ─────────────────────────────────────────────────────────────────────────
# انسخ هذا الملف إلى مجلد _projects/ وغيّر اسمه.
# مثال: _projects/my-new-project.md
# للإنجليزية: _projects/my-new-project-en.md (مع lang: en)
#
# هذا التخطيط مُصمم كرحلة عميل (Client Journey):
#   الهيدر → النتيجة أولاً
#   ثم الإحصائيات السريعة
#   ثم العميل والتحدي
#   ثم البحث والاكتشاف
#   ثم المحتوى (الاستراتيجية + التنفيذ) من Markdown
#   ثم المعرض البصري
#   ثم النتائج النهائية (KPI)
# ═══════════════════════════════════════════════════════════════════════════

# ─── إعدادات أساسية ───────────────────────────────────────────────────
layout: project
lang: en                          # Language: ar or en
translation_key: unique_key       # Key to link Arabic version with English
date: 2026-01-01                  # Project date — used for sorting
permalink: en/portfolio/template-project-en/  # Custom link — change based on project name

# ─── معلومات المشروع الأساسية ─────────────────────────────────────────
title: "Project Title Here"
client: "Client Name"
industry: "Tech / Fashion / Restaurants"  # Business sector
duration: "3 Months"                        # Project duration
budget: "75,000 SAR"                      # Project budget
my_role: "Marketing Manager / Strategic Consultant"

# ─── صورة الغلاف والنتائج ─────────────────────────────────────────────
hero_image: "/assets/images/projects/cover.png"  # Ideal size 1200×600
project_result: "45% Increase in Sales"      # Main result — appears prominently in header
roi: "180%"                                       # Return on Investment

# ─── العميل والتحدي (القسم 1) ────────────────────────────────────────
# These fields automatically fill the "Client & Challenge" section
client_overview: "Brief description of the client — who are they? What is their size? What is their business activity? What are their general goals?"
core_problem: "What was the core challenge or problem the client faced before collaborating with you? — appears in a distinct warning format"

# ─── البحث والاكتشاف (القسم 2) ───────────────────────────────────────
# Research insights array — each item contains: icon (FontAwesome icon), label, value
# You can add any number of insights
research_insights:
  - icon: "fa-solid fa-users"
    label: "Target Audience"
    value: "Youth 18-35, interested in tech and innovation"
  - icon: "fa-solid fa-chart-pie"
    label: "Market Share"
    value: "12% before project — goal to reach 20%"
  - icon: "fa-solid fa-magnifying-glass"
    label: "Competitor Analysis"
    value: "3 main competitors — weaknesses in digital content"

# ─── مؤشرات الأداء (KPI) — تُعرض كبطاقات أرقام بارزة ──────────────
kpi_1_label: "Traffic Growth"
kpi_1_value: "+45%"
kpi_2_label: "Monthly Sales"
kpi_2_value: "+30%"
kpi_3_label: "Followers Growth"
kpi_3_value: "+2.5K"
# kpi_4_label: ""
# kpi_4_value: ""

# ─── المعرض البصري — مسارات الصور ────────────────────────────────────
# Displayed in a responsive grid — add any number of paths
gallery:
  - "/assets/images/projects/screenshot-1.png"
  - "/assets/images/projects/screenshot-2.png"
  - "/assets/images/projects/screenshot-3.png"
  - "/assets/images/projects/screenshot-4.png"

# ─── الأدوات المستخدمة — تُعرض كشارات ────────────────────────────────
tools_used:
  - "Google Ads"
  - "Meta Ads"
  - "Google Analytics"
  - "Shopify"
  - "Canva"
  - "Notion"
---

<!-- ═══════════════════════════════════════════════════════════════════════
     المحتوى النصي — الاستراتيجية والتنفيذ
     ─────────────────────────────────────────────────────────────────────
     هذا القسم يظهر بين البحث/الاكتشاف والمعرض البصري.
     اكتب هنا تفاصيل الخطة الاستراتيجية وكيف تم التنفيذ.
     استخدم العناوين (##) لتنظيم المحتوى.
     ═══════════════════════════════════════════════════════════════════════ -->
## Strategic Plan
Explain here the methodology and the plan you developed to solve the client's challenge.

### First Pillar: Visual Identity
Description of what was accomplished in this pillar.

### Second Pillar: Advertising Campaigns
Description of the campaigns and their targeting.

### Third Pillar: Content Creation
Type of content and the publishing plan.

## Execution and Implementation
Explain the implementation phases — the timeline, challenges that arose, and the solutions you implemented.

> 💡 **Important Note**: Place any notes or lessons learned from the implementation phase here.

## Results Summary
- The first result and its impact
- The second result and its impact
- The third result and its impact