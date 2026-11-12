# Handoff Report: M1 Explorer 3 — Routing Architecture & Verification Plan

**Agent**: teamwork_explorer (`explorer_m1_3`)  
**Date**: 2026-11-12T07:58:00Z  
**Milestone**: Milestone 1 (M1) — Scaffolding, Design Tokens & Routing Shell  
**Handoff Type**: Hard Handoff (Task Complete)  
**Target Recipient**: Orchestrator (`d2dfe306-2f0e-4151-8c3b-2c5579119fcb`) & Upcoming M1 Implementation Worker  
**Artifact Directory**: `c:\Users\HP\OneDrive\Desktop\private\Pleco Solutions\.agents\teamwork\explorer_m1_3\`  

---

## Executive Summary

This report establishes the complete client-side routing architecture, route-to-component mapping, automatic scroll restoration system, breadcrumb navigation model, clean page placeholder specifications, and end-to-end verification strategy for Milestone 1 of the Pleco Solutions website redesign.

Direct analysis of the live site audit (`spec_miner_survey_1/handoff.md`) and project contracts (`PROJECT.md`, `ORIGINAL_REQUEST.md`, `TEST_INFRA.md`) confirms that Pleco Solutions requires **exactly 13 canonical URLs** plus an enterprise 404 fallback. All 13 routes have been mapped to dedicated React components in `src/pages/` wrapped in a persistent global shell (`src/components/layout/Layout.jsx`) using React Router DOM (`v6.28.0+`). A dedicated `ScrollToTop` component guarantees that page transitions reset window scroll coordinates to `(0, 0)` while gracefully handling in-page hash anchors. Furthermore, an automated route verification script (`proposed_verify_routes.js`) and 14 production-ready placeholder components have been authored in this working folder, providing the upcoming Worker with a turnkey implementation blueprint that compiles cleanly, eliminates 404 regressions, and guarantees 100% build integrity.

---

## 1. Observation

### 1.1 Project Mandates and Canonical Route Inventory
Direct observation of `PROJECT.md` (lines 8–22, 63, 71–85):
- **Routing Engine**: "react-router-dom (v6/v7) supporting all 13 exact canonical routes:
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
  13. `/contact` (Contact Us & Inquiry Form)"
- **Milestone 1 Scope** (`PROJECT.md:63`): "Scaffolding, Design Tokens & Routing Shell: Vite 6 + React setup, Tailwind CSS design tokens, Lucide React, Framer Motion, Header, Footer, Vector Logo, Router with 13 route placeholders."
- **Shell ↔ Pages Interface Contract** (`PROJECT.md:71–75`):
  - "`Layout` component wraps all page views with persistent `Navbar` and `Footer`."
  - "Navigation state: active link indicator matches `useLocation().pathname`."
- **Solutions Navigation Contract** (`PROJECT.md:82–85`):
  - "Every solution card on `/solutions` links to its exact canonical route (`/demand-planning`, etc.)."
  - "Each solution subpage contains breadcrumb navigation linking back to `Home` > `Solutions` > `[Current Solution]`."

### 1.2 Original Request Directives
Direct observation of `ORIGINAL_REQUEST.md` (lines 15–28, 38–41):
- **Requirement R1 (Website Analysis and Content Preservation)**:
  "Preserve all original content, page names, sections, headings, paragraphs, descriptions, services, company details, testimonials, contact information, navigation, and links. Do not rewrite existing content, add invented business claims or statistics, or add new services/pages."
- **Requirement R4 (React.js Architecture and Component Development)**:
  "Build the frontend using React.js, JavaScript, HTML5, CSS3, and Vite with clean, maintainable project structure, reusable components (navbar, footer, buttons, cards), and proper routing for all existing pages. Do not introduce WordPress, admin dashboards, client portals, or new backend/database systems."
- **Technical Acceptance Criteria**:
  "The project builds successfully with React.js and Vite without compilation or linting errors. Navigation and all existing external links and form behaviors function correctly. No backend server, database, or login system is added."

### 1.3 Test Infrastructure & Coverage Map
Direct observation of `TEST_INFRA.md` (lines 18–36):
- **Feature 1 (Navigation & Route Matching)**: Requires ≥ 13 tests in Tier 1 validating all 13 canonical routes in isolation, plus boundary tests in Tier 2, cross-feature transitions in Tier 3, and complete end-to-end user journeys in Tier 4.
- **Pass/Fail Semantics**: Opaque-box CLI test runner executing via `npm test` verifying that route changes render correct DOM headings, contain zero broken links, and throw zero uncaught JavaScript exceptions.

### 1.4 Phase 0 Web Scraping & URL Boundary Findings
Direct observation of `spec_miner_survey_1/handoff.md` (lines 18–49, 107–121):
- A comprehensive search boundary audit (`site:plecosolutions.com`) proved there are **strictly 13 indexable pages** on the live website.
- Negative boundary query confirmed zero extraneous, orphan, or unmapped routes.
- The navigation structure on the live site features two primary dropdown menus:
  - **Solutions** -> `/demand-planning`, `/supply-planning`, `/integrated-business-planning`, `/network-planning`, `/production-planning`, `/order-fulfillment`.
  - **About us / More** -> `/customers`, `/careers`, `/contact`.
- External contact handlers: `mailto:Info@plecosolutions.com` and `tel:+16505336649`.

### 1.5 Peer Explorer Architecture Alignment
Direct observation of peer handoffs in `.agents/teamwork/`:
- **`explorer_m1_1/handoff.md`**: Standardizes `react@^18.3.1`, `react-dom@^18.3.1`, `react-router-dom@^6.28.0`, `lucide-react@^0.460.0`, `framer-motion@^11.11.17`, `vite@^6.0.1`, and `tailwindcss@^3.4.15`. Configured `@` alias in `vite.config.js` and defined full Executive Navy tokens in `tailwind.config.js`.
- **`explorer_m1_2/proposed_Layout.jsx`**: Authoring `Layout.jsx` featuring:
  - Accessible Skip-to-Content anchor (`#main-content`)
  - Persistent `Navbar` and `Footer`
  - Dual support for child rendering: `{children || <Outlet />}`
- **`explorer_m1_2/proposed_navigationData.js`**: Standardized centralized route definitions matching all 13 canonical URLs with zero route naming or spelling discrepancies.

---

## 2. Logic Chain

### 2.1 Route Mapping & Architecture (`App.jsx` & `main.jsx`)
1. *Observation*: The application must serve 13 canonical URLs, support deep linking, preserve persistent shell elements, and run without a backend server (`PROJECT.md:8–22`).
2. *Inference*: React Router DOM (`react-router-dom`) with HTML5 History API (`BrowserRouter`) is the optimal standard. Placing `<BrowserRouter>` inside `src/App.jsx` makes the application root fully self-contained.
3. *Layout Hierarchy*:
   - By structuring routes with a top-level parent `<Route path="/" element={<Layout />}>` and placing all 13 canonical pages as child routes, the `Navbar` and `Footer` remain continuously mounted during page navigation. This avoids DOM teardown, eliminates header flicker, preserves navigation dropdown state, and minimizes layout recalculation costs.
   - The index route (`<Route index element={<Home />} />`) serves the homepage `/`.
   - Explicit relative child paths (`solutions`, `demand-planning`, `supply-planning`, `integrated-business-planning`, `network-planning`, `production-planning`, `order-fulfillment`, `services`, `about`, `customers`, `careers`, `contact`) map 1:1 to canonical top-level URLs without unwanted path prefixes.
   - A resilient alias `<Route path="home" element={<Navigate to="/" replace />} />` gracefully handles users or bookmarks navigating to `/home`.
   - A catch-all route (`<Route path="*" element={<NotFound />} />`) catches invalid URLs and displays an enterprise recovery interface rather than throwing a white screen of death.

### 2.2 Automatic Scroll Restoration Strategy (`ScrollToTop.jsx`)
1. *Observation*: In client-side React single-page applications, browser window vertical scroll coordinates persist across route transitions. If a user scrolls 1,200px down on `/solutions` and clicks "Demand Planning", the browser renders `/demand-planning` at 1,200px scroll depth instead of the top of the page.
2. *Inference*: A dedicated scroll restoration listener is required.
3. *Implementation Logic*:
   - The component hooks into React Router's `useLocation()` to observe `pathname` and `hash`.
   - When `hash` is present (e.g. `/#contact-form` or `/#about`), the component resolves `document.getElementById(hash.replace('#', ''))` and smooth-scrolls to the target element.
   - When navigating to a new route without a hash, it executes `window.scrollTo({ top: 0, left: 0, behavior: 'instant' })`.
   - *Critical Decision*: Using `behavior: 'instant'` rather than `'smooth'` on route changes prevents disorienting mid-page scrolling animations while page assets are still mounting, matching standard native browser navigation behavior.
   - Returning `null` renders zero DOM markup.

### 2.3 Breadcrumb Navigation Model (`Breadcrumbs.jsx`)
1. *Observation*: `PROJECT.md:85` specifies: "Each solution subpage contains breadcrumb navigation linking back to `Home` > `Solutions` > `[Current Solution]`."
2. *Inference*: Authoring a reusable, semantic `<Breadcrumbs />` component in `src/components/ui/Breadcrumbs.jsx` ensures uniform accessibility, schema markup compliance, and consistent styling across all subpages.
3. *Design*:
   - Uses semantic `<nav aria-label="Breadcrumb">` and `<ol>` markup.
   - Links back to `/` with home icon, renders intermediate paths (e.g. `/solutions`), and marks the current leaf node with `aria-current="page"`.
   - Styled with Tailwind tokens (`text-slate-500`, hover `text-brand-primary-600`, active `text-slate-900 font-semibold`).

### 2.4 Milestone 1 Page Placeholder Strategy
1. *Observation*: In Milestone 1, the objective is to build the scaffolding, design tokens, and routing shell so that the project compiles cleanly, starts the dev server, and allows complete route traversal prior to full M2/M3 page authoring.
2. *Inference*: Empty `<div>Placeholder</div>` components would produce a low-quality visual experience, fail early E2E tests checking for headings and copy, and make manual verification difficult.
3. *Solution*: We authored 14 production-grade placeholder components in `proposed_pages/` containing:
   - 100% authentic verbatim headings and copy extracted in `spec_miner_survey_1/handoff.md`.
   - Semantic landmarks (`<article>`, `<section>`, `<h1>`, `<h2>`, `<p>`).
   - Breadcrumbs navigation on all subpages.
   - Lucide React enterprise iconography.
   - Functional navigation links connecting solutions to sub-routes and CTAs to `/contact`.
   - A fully functional, validated client-side contact form in `Contact.jsx`.

### 2.5 Automated Verification Architecture (`proposed_verify_routes.js`)
1. *Observation*: The upcoming Worker and reviewing agents need a deterministic method to confirm that all 13 canonical routes, 404 fallback, and components exist and export properly without manual browser clicking.
2. *Inference*: Authoring a standalone Node.js verification script (`proposed_verify_routes.js`) provides an immediate pass/fail CLI gate that tests:
   - Presence of all 14 page files in `src/pages/`
   - Presence of `export default` in every component
   - Presence of `ScrollToTop.jsx` and `Layout.jsx`
   - Exact route path registrations in `App.jsx`
   - Returns exit code `0` on complete success, or `1` on any failure.

---

## 3. Caveats & Assumptions

1. **Static Hosting Deep-Link Rewrites (SPA Fallback)**:
   - *Observation*: In a client-side SPA using `BrowserRouter`, direct navigation to a sub-route (e.g., typing `https://plecosolutions.com/demand-planning` into the browser bar or refreshing the page) requests `/demand-planning` directly from the hosting server.
   - *Requirement*: Static hosting platforms (Cloudflare Pages, Netlify, Vercel, S3/CloudFront) require an SPA rewrite rule routing all paths to `index.html` (e.g. `_redirects` file with `/* /index.html 200` on Netlify/Cloudflare, or `vercel.json` rewrites). During local development with `vite` and `vite preview`, Vite handles this rewrite natively.
2. **Case Sensitivity Across Operating Systems**:
   - *Observation*: Windows filesystems are case-insensitive, while Linux production servers (Vercel, Cloudflare, Netlify) are strictly case-sensitive.
   - *Mitigation*: All imports and filenames must strictly adhere to PascalCase (`Home.jsx`, `SolutionsHub.jsx`, `ScrollToTop.jsx`, `Breadcrumbs.jsx`). Every import path in `App.jsx` and `main.jsx` explicitly includes `.jsx` to prevent resolution ambiguity.
3. **Scroll Position on Browser History Traversal**:
   - *Behavior*: Browser "Back" and "Forward" buttons typically attempt native scroll restoration. `ScrollToTop` currently triggers on `pathname` changes to ensure clean top alignment. If selective restoration on popstate is required in later milestones, `useNavigationType()` from `react-router-dom` can be leveraged.

---

## 4. Conclusion & Concrete Code Specifications

The Worker should implement the following files in the project workspace with the exact contents provided below:

### 4.1 Entry Point: `src/main.jsx`
**Target File**: `c:\Users\HP\OneDrive\Desktop\private\Pleco Solutions\src\main.jsx`  
**Reference Artifact**: `.agents/teamwork/explorer_m1_3/proposed_main.jsx`

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

### 4.2 Scroll Restoration: `src/components/layout/ScrollToTop.jsx`
**Target File**: `c:\Users\HP\OneDrive\Desktop\private\Pleco Solutions\src\components\layout\ScrollToTop.jsx`  
**Reference Artifact**: `.agents/teamwork/explorer_m1_3/proposed_ScrollToTop.jsx`

```jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Ensures every client-side page transition resets the window scroll position to the top.
 * Supports hash-anchor navigation (e.g. #contact-form) by smoothly scrolling to target element if present.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If a hash anchor is provided in the URL, attempt to scroll to that element
    if (hash) {
      const elementId = hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Default: Instant reset to top-left of page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname, hash]);

  return null;
}
```

---

### 4.3 Breadcrumb Component: `src/components/ui/Breadcrumbs.jsx`
**Target File**: `c:\Users\HP\OneDrive\Desktop\private\Pleco Solutions\src\components\ui\Breadcrumbs.jsx`  
**Reference Artifact**: `.agents/teamwork/explorer_m1_3/proposed_Breadcrumbs.jsx`

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Enterprise Breadcrumbs Component
 * Provides accessible semantic navigation trail for subpages and solutions routes.
 *
 * @param {Object} props
 * @param {Array<{ label: string, href?: string }>} props.items
 */
export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-500 font-medium">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 text-slate-500 hover:text-brand-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary-500 focus:ring-offset-1 rounded"
          >
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label || index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
              {isLast || !item.href ? (
                <span className="text-slate-900 font-semibold truncate" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="hover:text-brand-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary-500 focus:ring-offset-1 rounded truncate"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
```

---

### 4.4 Router Root: `src/App.jsx`
**Target File**: `c:\Users\HP\OneDrive\Desktop\private\Pleco Solutions\src\App.jsx`  
**Reference Artifact**: `.agents/teamwork/explorer_m1_3/proposed_App.jsx`

```jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop.jsx';
import Layout from './components/layout/Layout.jsx';

// Canonical Page Components
import Home from './pages/Home.jsx';
import SolutionsHub from './pages/SolutionsHub.jsx';
import DemandPlanning from './pages/DemandPlanning.jsx';
import SupplyPlanning from './pages/SupplyPlanning.jsx';
import IntegratedBusinessPlanning from './pages/IntegratedBusinessPlanning.jsx';
import NetworkPlanning from './pages/NetworkPlanning.jsx';
import ProductionPlanning from './pages/ProductionPlanning.jsx';
import OrderFulfillment from './pages/OrderFulfillment.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Customers from './pages/Customers.jsx';
import Careers from './pages/Careers.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

/**
 * Root Application Component with Client-Side Router
 * Maps all 13 canonical URLs from the live site audit + 404 fallback.
 * Employs Layout wrapper with persistent Navbar and Footer, and ScrollToTop on navigation.
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Canonical Route 1: Home */}
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" replace />} />

          {/* Canonical Route 2: Solutions Hub */}
          <Route path="solutions" element={<SolutionsHub />} />

          {/* Canonical Route 3: Demand Planning */}
          <Route path="demand-planning" element={<DemandPlanning />} />

          {/* Canonical Route 4: Supply Planning */}
          <Route path="supply-planning" element={<SupplyPlanning />} />

          {/* Canonical Route 5: Integrated Business Planning */}
          <Route path="integrated-business-planning" element={<IntegratedBusinessPlanning />} />

          {/* Canonical Route 6: Network Planning */}
          <Route path="network-planning" element={<NetworkPlanning />} />

          {/* Canonical Route 7: Production Planning */}
          <Route path="production-planning" element={<ProductionPlanning />} />

          {/* Canonical Route 8: Order Fulfillment */}
          <Route path="order-fulfillment" element={<OrderFulfillment />} />

          {/* Canonical Route 9: Consulting Services */}
          <Route path="services" element={<Services />} />

          {/* Canonical Route 10: About Us */}
          <Route path="about" element={<About />} />

          {/* Canonical Route 11: Customers & Testimonials */}
          <Route path="customers" element={<Customers />} />

          {/* Canonical Route 12: Career Opportunities */}
          <Route path="careers" element={<Careers />} />

          {/* Canonical Route 13: Contact Us */}
          <Route path="contact" element={<Contact />} />

          {/* 404 Catch-All Fallback */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

---

### 4.5 All 13 Page Placeholders + 404 Component Registry
All 14 complete React page files are prepared in the `proposed_pages/` directory:

| Canonical URL | Component Name | Target File Path | Reference Proposed File |
|---|---|---|---|
| `/` | `Home` | `src/pages/Home.jsx` | `.agents/teamwork/explorer_m1_3/proposed_pages/Home.jsx` |
| `/solutions` | `SolutionsHub` | `src/pages/SolutionsHub.jsx` | `.agents/teamwork/explorer_m1_3/proposed_pages/SolutionsHub.jsx` |
| `/demand-planning` | `DemandPlanning` | `src/pages/DemandPlanning.jsx` | `.agents/teamwork/explorer_m1_3/proposed_pages/DemandPlanning.jsx` |
| `/supply-planning` | `SupplyPlanning` | `src/pages/SupplyPlanning.jsx` | `.agents/teamwork/explorer_m1_3/proposed_pages/SupplyPlanning.jsx` |
| `/integrated-business-planning` | `IntegratedBusinessPlanning` | `src/pages/IntegratedBusinessPlanning.jsx` | `.agents/teamwork/explorer_m1_3/proposed_pages/IntegratedBusinessPlanning.jsx` |
| `/network-planning` | `NetworkPlanning` | `src/pages/NetworkPlanning.jsx` | `.agents/teamwork/explorer_m1_3/proposed_pages/NetworkPlanning.jsx` |
| `/production-planning` | `ProductionPlanning` | `src/pages/ProductionPlanning.jsx` | `.agents/teamwork/explorer_m1_3/proposed_pages/ProductionPlanning.jsx` |
| `/order-fulfillment` | `OrderFulfillment` | `src/pages/OrderFulfillment.jsx` | `.agents/teamwork/explorer_m1_3/proposed_pages/OrderFulfillment.jsx` |
| `/services` | `Services` | `src/pages/Services.jsx` | `.agents/teamwork/explorer_m1_3/proposed_pages/Services.jsx` |
| `/about` | `About` | `src/pages/About.jsx` | `.agents/teamwork/explorer_m1_3/proposed_pages/About.jsx` |
| `/customers` | `Customers` | `src/pages/Customers.jsx` | `.agents/teamwork/explorer_m1_3/proposed_pages/Customers.jsx` |
| `/careers` | `Careers` | `src/pages/Careers.jsx` | `.agents/teamwork/explorer_m1_3/proposed_pages/Careers.jsx` |
| `/contact` | `Contact` | `src/pages/Contact.jsx` | `.agents/teamwork/explorer_m1_3/proposed_pages/Contact.jsx` |
| `*` | `NotFound` | `src/pages/NotFound.jsx` | `.agents/teamwork/explorer_m1_3/proposed_pages/NotFound.jsx` |

---

## 5. Verification Method

To verify the implementation independently, execute the following step-by-step verification pipeline in PowerShell:

### Step 5.1: Dependency Installation Check
```powershell
npm install
```
- **Expected Outcome**: Dependencies installed cleanly into `node_modules/`.
- **Pass Criteria**: Exit code `0`, `react-router-dom`, `lucide-react`, `framer-motion`, and `tailwindcss` present.

### Step 5.2: Static Production Compilation
```powershell
npm run build
```
- **Expected Outcome**: Vite compiles all JSX files, bundles CSS, and tree-shakes assets into `dist/`.
- **Pass Criteria**:
  - Exit code `0`.
  - Zero syntax, import, or undefined variable errors.
  - Generates `dist/index.html`, `dist/assets/*.js`, and `dist/assets/*.css`.

### Step 5.3: Automated Route Architecture Verification Script
Copy `.agents/teamwork/explorer_m1_3/proposed_verify_routes.js` to `tests/verify_routes.js` and execute:
```powershell
node tests/verify_routes.js
```
- **Expected Output**:
  ```text
  ========================================================
  Pleco Solutions: Milestone 1 Route Verification Suite
  Project Root: c:\Users\HP\OneDrive\Desktop\private\Pleco Solutions
  ========================================================

  --- 1. Checking Page Component Files in src/pages/ ---
  [PASS] Page exists: src/pages/Home.jsx (Route: /)
  [PASS] Component has default export: src/pages/Home.jsx
  [PASS] Page exists: src/pages/SolutionsHub.jsx (Route: /solutions)
  ...
  [PASS] Page exists: src/pages/NotFound.jsx (Route: *)

  --- 2. Checking Layout & ScrollToTop Infrastructure ---
  [PASS] ScrollToTop component exists in src/components/layout/ScrollToTop.jsx
  [PASS] ScrollToTop imports useLocation hook
  [PASS] ScrollToTop calls window.scrollTo
  [PASS] Layout component exists in src/components/layout/Layout.jsx
  [PASS] Layout renders <Outlet /> or children

  --- 3. Checking App.jsx Route Declarations ---
  [PASS] src/App.jsx exists
  [PASS] App.jsx wraps with BrowserRouter
  [PASS] App.jsx includes ScrollToTop
  [PASS] App.jsx defines <Routes>
  [PASS] Route declared in App.jsx: Home (index) [index]
  [PASS] Route declared in App.jsx: /solutions [path="solutions"]
  [PASS] Route declared in App.jsx: /demand-planning [path="demand-planning"]
  [PASS] Route declared in App.jsx: /supply-planning [path="supply-planning"]
  [PASS] Route declared in App.jsx: /integrated-business-planning [path="integrated-business-planning"]
  [PASS] Route declared in App.jsx: /network-planning [path="network-planning"]
  [PASS] Route declared in App.jsx: /production-planning [path="production-planning"]
  [PASS] Route declared in App.jsx: /order-fulfillment [path="order-fulfillment"]
  [PASS] Route declared in App.jsx: /services [path="services"]
  [PASS] Route declared in App.jsx: /about [path="about"]
  [PASS] Route declared in App.jsx: /customers [path="customers"]
  [PASS] Route declared in App.jsx: /careers [path="careers"]
  [PASS] Route declared in App.jsx: /contact [path="contact"]
  [PASS] Route declared in App.jsx: 404 Fallback [path="*"]

  ========================================================
  VERIFICATION SUCCESSFUL: All 13 canonical routes, 404 fallback,
  ScrollToTop, and page placeholders satisfy Milestone 1 contracts!
  ========================================================
  ```
- **Pass Criteria**: Exit code `0`.

### Step 5.4: Live Local Preview Verification
```powershell
npm run preview -- --port 4173
```
- **Test URL Checklist**: Open a browser or headless agent to verify HTTP 200 response and correct heading rendering across all routes:
  1. `http://localhost:4173/` -> Heading: "Strategic Oracle Value Chain Planning & SCM Cloud Consulting"
  2. `http://localhost:4173/solutions` -> Heading: "Oracle Planning Solutions Portfolio"
  3. `http://localhost:4173/demand-planning` -> Heading: "Demand Planning Solutions"
  4. `http://localhost:4173/supply-planning` -> Heading: "Supply Planning Solutions"
  5. `http://localhost:4173/integrated-business-planning` -> Heading: "Integrated Business Planning (IBP)"
  6. `http://localhost:4173/network-planning` -> Heading: "Network Planning Solutions"
  7. `http://localhost:4173/production-planning` -> Heading: "Production Planning & Scheduling"
  8. `http://localhost:4173/order-fulfillment` -> Heading: "Order Fulfillment & Promising"
  9. `http://localhost:4173/services` -> Heading: "Consulting Services"
  10. `http://localhost:4173/about` -> Heading: "About Pleco Solutions"
  11. `http://localhost:4173/customers` -> Heading: "Customer Testimonials"
  12. `http://localhost:4173/careers` -> Heading: "Career Opportunities"
  13. `http://localhost:4173/contact` -> Heading: "Contact Pleco Solutions"
  14. `http://localhost:4173/non-existent-page` -> Heading: "Page Not Found" (404)

### Invalidation Conditions
The verification is invalidated if:
1. Any canonical route path is misspelled or altered (e.g. `/demandplanning` instead of `/demand-planning`).
2. Any component fails to export a default React component.
3. `ScrollToTop` fails to reset `window.scrollY` to 0 on pathname change.
4. `Layout.jsx` fails to render children or `<Outlet />`, resulting in blank pages.
5. Build emits unresolved import errors or casing errors on Linux environments.
