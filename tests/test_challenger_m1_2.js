/**
 * Empirical Verification Suite for Milestone 1 Challenger 2
 * Focus: Design tokens, responsive layout, drawer state, and visual effects
 */

import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const projectRoot = process.cwd();
console.log('===============================================================');
console.log('Milestone 1 Challenger 2: Empirical Stress Verification Harness');
console.log('Project Root:', projectRoot);
console.log('===============================================================\n');

let passCount = 0;
let failCount = 0;
const findings = [];

function check(title, condition, details = '') {
  if (condition) {
    console.log(`[PASS] ${title}`);
    passCount++;
  } else {
    console.log(`[FAIL] ${title}`);
    if (details) console.log(`       Details: ${details}`);
    failCount++;
    findings.push({ title, details });
  }
}

// -----------------------------------------------------------------------------
// Suite 1: Design Tokens in tailwind.config.js & src/index.css
// -----------------------------------------------------------------------------
console.log('--- Suite 1: Design Tokens & Palette Completeness ---');

const tailwindConfigPath = path.join(projectRoot, 'tailwind.config.js');
const indexCssPath = path.join(projectRoot, 'src', 'index.css');

const tailwindConfig = fs.readFileSync(tailwindConfigPath, 'utf-8');
const indexCss = fs.readFileSync(indexCssPath, 'utf-8');

check(
  'tailwind.config.js defines pleco.navy-dark as #0A192F',
  tailwindConfig.includes("'navy-dark': '#0A192F'")
);

check(
  'tailwind.config.js defines pleco.navy as #0F2744',
  tailwindConfig.includes("'navy': '#0F2744'")
);

check(
  'tailwind.config.js defines brand-primary scale (50-950) with DEFAULT #2563EB',
  tailwindConfig.includes("'brand-primary':") && tailwindConfig.includes("DEFAULT: '#2563EB'")
);

check(
  'tailwind.config.js defines standard responsive breakpoints (screens or default 375, 768, 1024, 1280)',
  tailwindConfig.includes("'7xl': '80rem'") || tailwindConfig.includes('1280px') || !tailwindConfig.includes('screens:') // default tailwind screens include sm:640, md:768, lg:1024, xl:1280
);

check(
  'src/index.css defines CSS variables --color-pleco-navy-dark: #0A192F and --color-pleco-navy: #0F2744',
  indexCss.includes('--color-pleco-navy-dark: #0A192F;') && indexCss.includes('--color-pleco-navy: #0F2744;')
);

// -----------------------------------------------------------------------------
// Suite 2: Arbitrary Hex Color Overrides in Source Components
// -----------------------------------------------------------------------------
console.log('\n--- Suite 2: Arbitrary Hex Color Overrides in Source Components ---');

function getSourceFiles(dir, exts = ['.jsx', '.js']) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getSourceFiles(fullPath, exts));
    } else {
      if (exts.includes(path.extname(file))) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

const srcFiles = getSourceFiles(path.join(projectRoot, 'src'));
const arbitraryHexInTailwindClasses = [];

srcFiles.forEach(file => {
  const relPath = path.relative(projectRoot, file);
  if (relPath.includes('Logo.jsx')) return; // SVG markup handles fills directly
  if (relPath.includes('navigationData.js')) return; // data file with street address

  const content = fs.readFileSync(file, 'utf-8');
  const lines = content.split('\n');

  lines.forEach((line, idx) => {
    // Check for arbitrary hex inside class/className strings: e.g. bg-[#...], text-[#...], border-[#...]
    const match = line.match(/(bg|text|border|ring|fill|stroke)-\[#[0-9a-fA-F]{3,8}\]/g);
    if (match) {
      match.forEach(m => {
        arbitraryHexInTailwindClasses.push({
          file: relPath,
          line: idx + 1,
          match: m,
          rawLine: line.trim()
        });
      });
    }
  });
});

check(
  'No arbitrary hardcoded hex classes (e.g. bg-[#...]) in layout/page components',
  arbitraryHexInTailwindClasses.length === 0,
  `Found ${arbitraryHexInTailwindClasses.length} arbitrary hex classes: ` +
    arbitraryHexInTailwindClasses.map(i => `${i.file}:${i.line} (${i.match})`).join(', ')
);

// Specifically inspect Footer.jsx
const footerPath = path.join(projectRoot, 'src', 'components', 'layout', 'Footer.jsx');
const footerContent = fs.readFileSync(footerPath, 'utf-8');

check(
  'Footer.jsx does NOT use unmapped arbitrary hex bg-[#071324]',
  !footerContent.includes('bg-[#071324]'),
  'Footer.jsx line 140 uses arbitrary unmapped hex bg-[#071324] instead of a configured design token'
);

check(
  'Footer.jsx uses semantic design token (e.g. bg-pleco-navy-dark) instead of bg-[#0A192F]',
  !footerContent.includes('bg-[#0A192F]'),
  'Footer.jsx line 26 uses arbitrary hex class bg-[#0A192F] instead of configured token bg-pleco-navy-dark'
);

// -----------------------------------------------------------------------------
// Suite 3: Responsive Breakpoints & Mobile Drawer Architecture (Navbar.jsx)
// -----------------------------------------------------------------------------
console.log('\n--- Suite 3: Responsive Breakpoints & Mobile Drawer Architecture ---');

const navbarPath = path.join(projectRoot, 'src', 'components', 'layout', 'Navbar.jsx');
const navbarContent = fs.readFileSync(navbarPath, 'utf-8');

check(
  'Desktop navigation (<nav>) is hidden on mobile and visible at md: breakpoint (768px+)',
  navbarContent.includes('hidden md:flex')
);

check(
  'Mobile hamburger toggle is visible on mobile (<768px) and hidden at md: (768px+)',
  navbarContent.includes('md:hidden') && navbarContent.includes('onClick={() => setMobileMenuOpen(!mobileMenuOpen)}')
);

check(
  'Mobile drawer slides out on right with max-w-sm and 100% width on 375px mobile',
  navbarContent.includes('fixed inset-y-0 right-0 w-full max-w-sm')
);

check(
  'Mobile drawer has backdrop overlay with close trigger',
  navbarContent.includes('bg-slate-900/60') && navbarContent.includes('onClick={() => setMobileMenuOpen(false)}')
);

check(
  'Mobile drawer auto-dismisses when route location changes',
  navbarContent.includes('setMobileMenuOpen(false);') && navbarContent.includes('[location.pathname]')
);

check(
  'Escape key closes both active dropdowns and mobile drawer',
  navbarContent.includes("if (e.key === 'Escape')") &&
    navbarContent.includes('setActiveDropdown(null);') &&
    navbarContent.includes('setMobileMenuOpen(false);')
);

// -----------------------------------------------------------------------------
// Suite 4: Adversarial Stress Test - Viewport Resize & Body Scroll Lock
// -----------------------------------------------------------------------------
console.log('\n--- Suite 4: Adversarial Stress Test - Body Scroll Lock & Resize Invariants ---');

// Check if Navbar clears scroll lock / closes drawer when viewport expands past 768px
const hasResizeListener =
  navbarContent.includes("addEventListener('resize'") ||
  navbarContent.includes('window.matchMedia') ||
  navbarContent.includes('(min-width: 768px)');

check(
  'Navbar handles viewport resize / orientation change to auto-close drawer and release scroll lock',
  hasResizeListener,
  'Navbar.jsx sets body.style.overflow = "hidden" when mobileMenuOpen is true, but does NOT attach a resize or matchMedia listener. If a user resizes or rotates device past 768px, body scroll remains locked on desktop!'
);

// -----------------------------------------------------------------------------
// Suite 5: Adversarial Accessibility - Closed Drawer Tabbing Invariant
// -----------------------------------------------------------------------------
console.log('\n--- Suite 5: Adversarial Accessibility - Off-Screen Drawer Focus ---');

// When mobileMenuOpen is false, the drawer is translated off-screen (translate-x-full).
// On mobile viewports (<768px), md:hidden does NOT apply.
// Does the drawer have aria-hidden={!mobileMenuOpen} or inert or hidden when closed?
const drawerElementDeclaration = navbarContent.substring(
  navbarContent.indexOf('id="mobile-navigation"'),
  navbarContent.indexOf('id="mobile-navigation"') + 400
);

const hasAriaHiddenWhenClosed =
  drawerElementDeclaration.includes('aria-hidden={!mobileMenuOpen}') ||
  drawerElementDeclaration.includes('aria-hidden={mobileMenuOpen ? "false" : "true"}');

const hasHiddenClassWhenClosed =
  drawerElementDeclaration.includes('!mobileMenuOpen && "hidden"') ||
  drawerElementDeclaration.includes('mobileMenuOpen ? "flex" : "hidden"');

const hasInertWhenClosed =
  drawerElementDeclaration.includes('inert={!mobileMenuOpen}') ||
  drawerElementDeclaration.includes('inert={mobileMenuOpen ? undefined : ""}') ||
  drawerElementDeclaration.includes('inert={!mobileMenuOpen ? "" : undefined}');

check(
  'Off-screen mobile drawer (<768px) is hidden from accessibility tree / keyboard focus when closed',
  hasAriaHiddenWhenClosed || hasHiddenClassWhenClosed || hasInertWhenClosed,
  'Navbar.jsx renders the mobile drawer container with only translate-x-full when closed. On viewports <768px, links inside the off-screen drawer remain focusable via Tab key (violating WCAG 2.4.3 Focus Order).'
);

// -----------------------------------------------------------------------------
// Suite 6: Prohibited Visual Effects & Generic AI Styling
// -----------------------------------------------------------------------------
console.log('\n--- Suite 6: Prohibited Visual Effects & Styling Check ---');

let hasNeon = false;
let hasExcessive3D = false;
let hasExcessiveGlass = false;

srcFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  if (/neon/i.test(content)) hasNeon = true;
  if (/perspective-\[|rotate-x-|rotate-y-|transform-style-3d/i.test(content)) hasExcessive3D = true;
  if (/backdrop-blur-(2xl|3xl)/i.test(content)) hasExcessiveGlass = true;
});

check('No neon glow classes or neon effects present in codebase', !hasNeon);
check('No heavy 3D transforms (rotateX, rotateY, perspective) present', !hasExcessive3D);
check('No excessive glassmorphism (backdrop-blur-2xl/3xl) present', !hasExcessiveGlass);

// -----------------------------------------------------------------------------
// Suite 7: WCAG 2.1 AA Contrast Ratios
// -----------------------------------------------------------------------------
console.log('\n--- Suite 7: Color Contrast Ratios (WCAG 2.1 AA) ---');

function luminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
  return [parseInt(hex.slice(0, 2), 16), parseInt(hex.slice(2, 4), 16), parseInt(hex.slice(4, 6), 16)];
}

function contrast(hex1, hex2) {
  const l1 = luminance(...hexToRgb(hex1));
  const l2 = luminance(...hexToRgb(hex2));
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

// In Footer.jsx:
// Line 130 uses text-slate-500 (#64748B) on #0A192F
const slate500OnNavy = contrast('#64748B', '#0A192F');
check(
  'Footer contact hours (slate-500 #64748B on #0A192F) meets WCAG 2.1 AA (>= 4.5:1)',
  slate500OnNavy >= 4.5,
  `Contrast ratio is ${slate500OnNavy.toFixed(2)}:1 (minimum required is 4.5:1 for normal body text)`
);

// Line 147 uses text-slate-500 (#64748B) on #071324
const slate500OnSubfooter = contrast('#64748B', '#071324');
check(
  'Subfooter disclaimer (slate-500 #64748B on #071324) meets WCAG 2.1 AA (>= 4.5:1)',
  slate500OnSubfooter >= 4.5,
  `Contrast ratio is ${slate500OnSubfooter.toFixed(2)}:1 (minimum required is 4.5:1 for normal body text)`
);

// Footer main text: slate-400 (#94A3B8) on #0A192F
const slate400OnNavy = contrast('#94A3B8', '#0A192F');
check(
  'Footer body text (slate-400 #94A3B8 on #0A192F) meets WCAG 2.1 AA (>= 4.5:1)',
  slate400OnNavy >= 4.5,
  `Contrast ratio is ${slate400OnNavy.toFixed(2)}:1`
);

// Navbar primary links: slate-700 (#334155) on white
const slate700OnWhite = contrast('#334155', '#FFFFFF');
check(
  'Navbar primary text (slate-700 #334155 on white) meets WCAG 2.1 AA (>= 4.5:1)',
  slate700OnWhite >= 4.5,
  `Contrast ratio is ${slate700OnWhite.toFixed(2)}:1`
);

// Navbar active links: blue-600 (#2563EB) on white
const blue600OnWhite = contrast('#2563EB', '#FFFFFF');
check(
  'Navbar active link text (blue-600 #2563EB on white) meets WCAG 2.1 AA (>= 4.5:1)',
  blue600OnWhite >= 4.5,
  `Contrast ratio is ${blue600OnWhite.toFixed(2)}:1`
);

console.log('\n===============================================================');
console.log(`SUMMARY: ${passCount} Passed, ${failCount} Failed`);
console.log('===============================================================');

if (findings.length > 0) {
  console.log('\nDETAILED FINDINGS REQUIRING ATTENTION:');
  findings.forEach((f, i) => {
    console.log(`${i + 1}. [FAIL] ${f.title}`);
    if (f.details) console.log(`   -> ${f.details}`);
  });
}
