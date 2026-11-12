# Project: Pleco Solutions Website Redesign

## Architecture
- **Framework & Runtime**: React 18 / 19 with Vite 6 build tool, ES Modules.
- **Styling & Design System**: Tailwind CSS v3/v4 configured with Pleco Executive Navy (`#0A192F`, `#0F2744`) & Slate tokens, Inter typography scale, accessible contrast (WCAG 2.1 AA).
- **Iconography**: Lucide React (`lucide-react`) for clean, uniform enterprise SVG icons.
- **Animation & Micro-Interactions**: Framer Motion (`framer-motion`) with hardware acceleration and `prefers-reduced-motion` compliance.
- **Routing**: `react-router-dom` (v6/v7) supporting all 13 exact canonical routes:
  1. `/` (Home)
  2. `/solutions` (Solutions Hub)
  3. `/demand-planning` (Demand Planning)
  4. `/supply-planning` (Supply Planning)
  5. `/integrated-business-planning` (Integrated Business Planning - SIMPLE Framework)
  6. `/network-planning` (Network Planning)
  7. `/production-planning` (Production Planning)
  8. `/order-fulfillment` (Order Fulfillment)
  9. `/services` (Consulting Services)
  10. `/about` (About Us)
  11. `/customers` (Client Testimonials)
  12. `/careers` (Career Opportunities)
  13. `/contact` (Contact Us & Inquiry Form)
- **Deployment Model**: Zero-backend static frontend bundle for universal hosting (Cloudflare Pages, Netlify, Vercel, S3/CloudFront).

## Feature Inventory
Every feature from the Phase 0 Survey mapped to a milestone with zero unassigned features:

| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Global Header & Navigation | Persistent header with branding, 2 dropdown menus (Solutions & About), mobile drawer | M1 | survey |
| 2 | Global Footer | 4-column enterprise footer, corporate copyright (© 2026 by PLECO SOLUTIONS), links, contact details | M1 | survey |
| 3 | Design System & Tokens | Executive Navy/Slate color tokens, typography scale, responsive breakpoints, reset | M1 | survey |
| 4 | Client-side Router Setup | Clean SPA routing across all 13 canonical URLs with ScrollToTop on navigation | M1 | survey |
| 5 | Vector Brand Logo & Favicon | High-DPI scalable inline SVG logo preserving dynamic wave motif + favicon bundle | M1 | survey |
| 6 | Homepage Hero Section | Authority headline, executive badge, dual CTAs ("Explore Solutions", "Contact Us"), trust metrics | M2 | survey |
| 7 | Homepage About Spotlight | Verbatim text describing Pleco's focus on Oracle VCP and Edge Products with "More Info" CTA | M2 | survey |
| 8 | Homepage Services Spotlight | Verbatim services overview, thought leadership focus, post-implementation risk mitigation, "More Info" CTA | M2 | survey |
| 9 | Homepage Solutions Spotlight | Verbatim 12-module summary, 3 industry vertical clusters, "More Info" CTA | M2 | survey |
| 10 | Homepage Testimonial Spotlight | Featured quote from Demand Manager Lead, Hi-Tech with link to `/customers` | M2 | survey |
| 11 | About Us Page (`/about`) | Verbatim corporate overview, Oracle partnership philosophy, industry experience | M2 | survey |
| 12 | Services Page (`/services`) | 4 core consulting pillars: Strategy & Optimization, Roadmap Planning, Implementation & Upgrades, Managed Services | M2 | survey |
| 13 | Customers / Testimonials Page (`/customers`) | 3 full verbatim enterprise reviews: Qualcomm (Hi-Tech), PetSafe (ERP), Cummins Power Generation (BP&A) | M2 | survey |
| 14 | Careers Page (`/careers`) | 2 active job openings: Oracle ASCP Consultant and Oracle Demantra Consultant with mailto application CTA | M2 | survey |
| 15 | Contact Us Page (`/contact`) | Carrollton TX address, phone (+1 650 533-6649), email, and interactive inquiry form with validation | M2 | survey |
| 16 | Solutions Hub (`/solutions`) | Comprehensive portfolio overview of all 10 Oracle planning solutions and industry verticals | M3 | survey |
| 17 | Demand Planning Route (`/demand-planning`) | Oracle Demantra DM, AFDM, and Service Parts Forecasting (SPF) capabilities and verbatim ROI | M3 | survey |
| 18 | Supply Planning Route (`/supply-planning`) | Oracle ASCP, Rapid Planning (RP), and Inventory Optimization (IO) capabilities | M3 | survey |
| 19 | Integrated Business Planning (`/integrated-business-planning`) | Proprietary SIMPLE framework, Demantra Real-Time S&OP, APCC executive consensus | M3 | survey |
| 20 | Network Planning Route (`/network-planning`) | Strategic Network Optimization (SNO) and Collaborative Planning (CP) | M3 | survey |
| 21 | Production Planning Route (`/production-planning`) | Oracle Production Scheduling (PS), drag-and-drop sequencing, bottleneck management | M3 | survey |
| 22 | Order Fulfillment Route (`/order-fulfillment`) | Oracle Global Order Promising (GOP) and Distributed Order Orchestration (DOO) | M3 | survey |
| 23 | Curated Supply Chain Imagery | Relevant professional business & technology images corresponding to content sections | M3 | survey |
| 24 | Responsive Layout Hardening | Mobile (375px+), tablet (768px+), laptop (1024px+), wide desktop (1280px+) optimization | M4 | survey |
| 25 | Enterprise Micro-Interactions | Framer Motion fade-ins, card hover elevations, smooth accordion/dropdown transitions | M4 | survey |
| 26 | Accessibility & Performance | WCAG 2.1 AA color contrast, keyboard navigability, ARIA labels, descriptive alt text | M4 | survey |
| 27 | SEO Metadata & OpenGraph | Page titles, meta descriptions, OpenGraph tags, canonical tags per route | M4 | survey |
| 28 | E2E Test Suite Validation | 100% pass across Tier 1 (Feature), Tier 2 (Boundary), Tier 3 (Cross-Feature), Tier 4 (Workloads) | M5 | survey |
| 29 | Adversarial Coverage Hardening | Tier 5 white-box challenger analysis and test case hardening | M5 | survey |

## Milestones

| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Scaffolding, Design Tokens & Routing Shell | Vite 6 + React setup, Tailwind CSS design tokens, Lucide React, Framer Motion, Header, Footer, Vector Logo, Router with 13 route placeholders | none | PLANNED |
| M2 | Core Brand, Overview & Interactive Pages | Implement `/`, `/about`, `/services`, `/customers`, `/careers`, `/contact` with 100% verbatim text and interactive inquiry form | M1 | PLANNED |
| M3 | Solutions Matrix & Deep-Dive Planning Routes | Implement `/solutions` hub and 6 deep-dive planning routes (`/demand-planning`, `/supply-planning`, `/integrated-business-planning`, `/network-planning`, `/production-planning`, `/order-fulfillment`) with curated imagery | M1 | PLANNED |
| M4 | Responsive Polish, Animations & SEO Metadata | Comprehensive responsive testing (375px-1280px+), Framer Motion micro-interactions, WCAG 2.1 AA accessibility, SEO metadata & OpenGraph | M2, M3 | PLANNED |
| M5 | Final Milestone: E2E Validation & Adversarial Hardening | Phase 1: 100% pass of E2E test suite (Tiers 1-4). Phase 2: Tier 5 adversarial coverage hardening | M4, TEST_READY | PLANNED |

## Interface Contracts

### Shell ↔ Pages (`Navbar`, `Footer`, `Layout`)
- `Layout` component wraps all page views with persistent `Navbar` and `Footer`.
- Navigation state: active link indicator matches `useLocation().pathname`.
- Dropdown state: accessible keyboard (`Escape`, `ArrowDown`) and hover transitions.
- Mobile drawer state: controlled open/close state with background scroll lock.

### Contact Form ↔ Validation Interface
- Fields: `name` (string, min 2 chars), `email` (RFC 5322 regex), `subject` (string, min 3 chars), `message` (string, min 10 chars).
- Validation state: live client-side validation on blur and submit; accessible error messages linked via `aria-describedby`.
- Submit behavior: simulates successful dispatch with affirmative enterprise notification card without external backend requirements.

### Solutions Navigation Contract
- Every solution card on `/solutions` links to its exact canonical route (`/demand-planning`, etc.).
- Each solution subpage contains breadcrumb navigation linking back to `Home` > `Solutions` > `[Current Solution]`.

## Code Layout
```
c:\Users\HP\OneDrive\Desktop\private\Pleco Solutions\
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── assets/
│   │   ├── logo.svg
│   │   └── images/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── SectionHeader.jsx
│   │   │   └── Modal.jsx
│   │   └── forms/
│   │       └── ContactForm.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── SolutionsHub.jsx
│   │   ├── DemandPlanning.jsx
│   │   ├── SupplyPlanning.jsx
│   │   ├── IntegratedBusinessPlanning.jsx
│   │   ├── NetworkPlanning.jsx
│   │   ├── ProductionPlanning.jsx
│   │   ├── OrderFulfillment.jsx
│   │   ├── Customers.jsx
│   │   ├── Careers.jsx
│   │   └── Contact.jsx
│   └── data/
│       ├── navigationData.js
│       ├── solutionsData.js
│       ├── servicesData.js
│       ├── testimonialsData.js
│       └── careersData.js
└── tests/
    └── e2e/
```
