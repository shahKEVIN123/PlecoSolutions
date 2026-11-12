/**
 * Milestone 1 Route Architecture & Page Component Verification Script
 * 
 * Verifies that all 13 canonical routes, 404 fallback, ScrollToTop, and Layout
 * are correctly structured, imported, and exported across the codebase.
 * 
 * Usage: node tests/verify_routes.js (or node .agents/teamwork/explorer_m1_3/proposed_verify_routes.js)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Project root resolution
const projectRoot = path.resolve(__dirname, '../../..');
const srcDir = path.join(projectRoot, 'src');

console.log('========================================================');
console.log('Pleco Solutions: Milestone 1 Route Verification Suite');
console.log('Project Root:', projectRoot);
console.log('========================================================\n');

let failed = false;

function check(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
  } else {
    console.error(`[FAIL] ${message}`);
    failed = true;
  }
}

// 1. Verify Expected Page Components Exist
const EXPECTED_PAGES = [
  { file: 'Home.jsx', canonicalRoute: '/' },
  { file: 'SolutionsHub.jsx', canonicalRoute: '/solutions' },
  { file: 'DemandPlanning.jsx', canonicalRoute: '/demand-planning' },
  { file: 'SupplyPlanning.jsx', canonicalRoute: '/supply-planning' },
  { file: 'IntegratedBusinessPlanning.jsx', canonicalRoute: '/integrated-business-planning' },
  { file: 'NetworkPlanning.jsx', canonicalRoute: '/network-planning' },
  { file: 'ProductionPlanning.jsx', canonicalRoute: '/production-planning' },
  { file: 'OrderFulfillment.jsx', canonicalRoute: '/order-fulfillment' },
  { file: 'Services.jsx', canonicalRoute: '/services' },
  { file: 'About.jsx', canonicalRoute: '/about' },
  { file: 'Customers.jsx', canonicalRoute: '/customers' },
  { file: 'Careers.jsx', canonicalRoute: '/careers' },
  { file: 'Contact.jsx', canonicalRoute: '/contact' },
  { file: 'NotFound.jsx', canonicalRoute: '*' },
];

console.log('--- 1. Checking Page Component Files in src/pages/ ---');
const pagesDir = path.join(srcDir, 'pages');

if (!fs.existsSync(pagesDir)) {
  console.error(`[FAIL] Directory not found: ${pagesDir}`);
  failed = true;
} else {
  for (const page of EXPECTED_PAGES) {
    const pagePath = path.join(pagesDir, page.file);
    const exists = fs.existsSync(pagePath);
    check(exists, `Page exists: src/pages/${page.file} (Route: ${page.canonicalRoute})`);

    if (exists) {
      const content = fs.readFileSync(pagePath, 'utf8');
      check(
        content.includes('export default function') || content.includes('export default'),
        `Component has default export: src/pages/${page.file}`
      );
    }
  }
}

// 2. Check Layout and ScrollToTop components
console.log('\n--- 2. Checking Layout & ScrollToTop Infrastructure ---');
const layoutDir = path.join(srcDir, 'components', 'layout');
const scrollToTopPath = path.join(layoutDir, 'ScrollToTop.jsx');
const layoutPath = path.join(layoutDir, 'Layout.jsx');

check(fs.existsSync(scrollToTopPath), 'ScrollToTop component exists in src/components/layout/ScrollToTop.jsx');
if (fs.existsSync(scrollToTopPath)) {
  const content = fs.readFileSync(scrollToTopPath, 'utf8');
  check(content.includes('useLocation'), 'ScrollToTop imports useLocation hook');
  check(content.includes('window.scrollTo'), 'ScrollToTop calls window.scrollTo');
}

check(fs.existsSync(layoutPath), 'Layout component exists in src/components/layout/Layout.jsx');
if (fs.existsSync(layoutPath)) {
  const content = fs.readFileSync(layoutPath, 'utf8');
  check(content.includes('<Outlet') || content.includes('children'), 'Layout renders <Outlet /> or children');
}

// 3. Inspect App.jsx for Route Definitions
console.log('\n--- 3. Checking App.jsx Route Declarations ---');
const appPath = path.join(srcDir, 'App.jsx');

check(fs.existsSync(appPath), 'src/App.jsx exists');
if (fs.existsSync(appPath)) {
  const appContent = fs.readFileSync(appPath, 'utf8');

  check(appContent.includes('BrowserRouter'), 'App.jsx wraps with BrowserRouter');
  check(appContent.includes('ScrollToTop'), 'App.jsx includes ScrollToTop');
  check(appContent.includes('Routes'), 'App.jsx defines <Routes>');

  // Check each canonical route string in App.jsx
  const ROUTE_STRINGS = [
    { label: 'Home (index)', pattern: 'index' },
    { label: '/solutions', pattern: 'path="solutions"' },
    { label: '/demand-planning', pattern: 'path="demand-planning"' },
    { label: '/supply-planning', pattern: 'path="supply-planning"' },
    { label: '/integrated-business-planning', pattern: 'path="integrated-business-planning"' },
    { label: '/network-planning', pattern: 'path="network-planning"' },
    { label: '/production-planning', pattern: 'path="production-planning"' },
    { label: '/order-fulfillment', pattern: 'path="order-fulfillment"' },
    { label: '/services', pattern: 'path="services"' },
    { label: '/about', pattern: 'path="about"' },
    { label: '/customers', pattern: 'path="customers"' },
    { label: '/careers', pattern: 'path="careers"' },
    { label: '/contact', pattern: 'path="contact"' },
    { label: '404 Fallback', pattern: 'path="*"' },
  ];

  for (const r of ROUTE_STRINGS) {
    check(appContent.includes(r.pattern), `Route declared in App.jsx: ${r.label} [${r.pattern}]`);
  }
}

// 4. Verification Summary
console.log('\n========================================================');
if (failed) {
  console.error('VERIFICATION FAILED: One or more route architectural requirements are missing.');
  process.exit(1);
} else {
  console.log('VERIFICATION SUCCESSFUL: All 13 canonical routes, 404 fallback,');
  console.log('ScrollToTop, and page placeholders satisfy Milestone 1 contracts!');
  console.log('========================================================');
  process.exit(0);
}
