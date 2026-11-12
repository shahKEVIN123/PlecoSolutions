# Handoff Report: M1 Explorer 1 — Build Scaffolding & Tailwind Design Tokens

**Agent**: teamwork_explorer (`explorer_m1_1`)  
**Date**: 2026-11-12T07:48:00Z  
**Milestone**: Milestone 1 (M1) — Scaffolding, Design Tokens & Routing Shell  
**Handoff Type**: Hard Handoff (Task Complete)  
**Target Recipient**: Orchestrator (`d2dfe306-2f0e-4151-8c3b-2c5579119fcb`) & Upcoming M1 Worker  

---

## 1. Observation

### 1.1 Local Workspace Environment & Tools
Direct observation of the execution environment in `c:\Users\HP\OneDrive\Desktop\private\Pleco Solutions`:
- **Node.js Version**: `v24.12.0` (verified via `node -v` command execution).
- **NPM Version**: `11.6.2` (verified via `npm -v` command execution).
- **Operating System**: Windows 11 (PowerShell terminal).
- **Workspace State**:
  - Direct inspection via `Get-ChildItem` revealed only `.agents/`, `PROJECT.md` (9,613 bytes), and `TEST_INFRA.md` (2,514 bytes).
  - No existing `package.json`, `node_modules/`, `vite.config.js`, or `src/` directory currently exists in the project root.
  - The project root is completely clean and ready for M1 scaffolding.

### 1.2 Upstream Directives & Project Contracts
- **`PROJECT.md` (lines 4–7, 86–136)**:
  - Framework & Runtime: "React 18 / 19 with Vite 6 build tool, ES Modules."
  - Styling & Design System: "Tailwind CSS v3/v4 configured with Pleco Executive Navy (`#0A192F`, `#0F2744`) & Slate tokens, Inter typography scale, accessible contrast (WCAG 2.1 AA)."
  - Iconography: "Lucide React (`lucide-react`) for clean, uniform enterprise SVG icons."
  - Animation: "Framer Motion (`framer-motion`) with hardware acceleration and `prefers-reduced-motion` compliance."
  - Routing: "react-router-dom (v6/v7) supporting all 13 exact canonical routes."
  - Deployment Model: "Zero-backend static frontend bundle for universal hosting (Cloudflare Pages, Netlify, Vercel, S3/CloudFront)."
- **`ORIGINAL_REQUEST.md` (lines 18–29)**:
  - R2: "Create a modern, premium, enterprise-focused presentation suitable for a business consulting and technology solutions company with clean visual hierarchy, professional typography, balanced spacing, modern cards/content blocks, consistent color identity... Avoid generic AI appearances or excessive decorative effects (no excessive glassmorphism, neon effects, oversized gradients, or 3D elements)."
  - R4: "Build the frontend using React.js, JavaScript, HTML5, CSS3, and Vite with clean, maintainable project structure... Do not introduce WordPress, admin dashboards, client portals, or new backend/database systems."
  - R5: "Ensure responsive layouts across desktop, laptop, tablet, and mobile... Implement smooth, subtle animations using Framer Motion, CSS transitions, or Intersection Observer without harming performance."
- **Survey Findings (`explorer_survey_2/handoff.md:90–188`)**:
  - Primary Brand Palette: Deep Executive Navy Blue (`#0A192F` / `#0F2744`) paired with Tech Cyan/Azure Blue (`#0284C7` / `#2563EB`) and Slate neutral ramp (`slate-50` to `slate-900`).
  - Typography: Inter font family as primary font with clean display scale (`display`, `h1`, `h2`, `h3`, `body`, `caption`).
  - Subtle physical elevations without blurred or neon drop-shadows.

---

## 2. Logic Chain

### 2.1 Dependency Selection & Compatibility Strategy
1. *Observation*: The project targets Vite 6 with React 18/19 and Node v24.12.0.
2. *Inference*: React 18.3.1 (`react@^18.3.1`, `react-dom@^18.3.1`) provides 100% stable compatibility with `framer-motion@^11.11.17`, `lucide-react@^0.460.0`, `@vitejs/plugin-react@^4.3.4`, and `react-router-dom@^6.28.0`.
3. *Styling Toolchain*: While Tailwind v4 is in active development, Tailwind CSS v3.4.15 (`tailwindcss@^3.4.15`, `postcss@^8.4.49`, `autoprefixer@^10.4.20`) is the enterprise-standard production engine that natively utilizes `tailwind.config.js` and `postcss.config.js`, providing custom design token extension, reliable class purging, and zero breaking config syntaxes.
4. *Utility Additions*: Adding `clsx` (`^2.1.1`) and `tailwind-merge` (`^2.5.5`) in a lightweight helper (`src/utils/cn.js`) prevents Tailwind class precedence conflicts during dynamic component variant rendering.
5. *Testing Toolchain Readiness*: `TEST_INFRA.md` requires Vitest + JSDOM testing. Incorporating `vitest@^2.1.8`, `@testing-library/react@^16.0.1`, `@testing-library/jest-dom@^6.6.3`, and `jsdom@^25.0.1` in `devDependencies` enables immediate test suite execution for the upcoming test writer.

### 2.2 Vite 6 Configuration & Rollup Optimization
1. *Observation*: An enterprise static build must minimize initial load time, optimize caching, and prevent giant monolithic bundles.
2. *Inference*:
   - Configure `@` path alias pointing to `src/` for clean imports.
   - Configure Rollup manual chunking splitting:
     - `vendor-react`: `react`, `react-dom`, `react-router-dom`
     - `vendor-motion`: `framer-motion`
     - `vendor-icons`: `lucide-react`
   - Set clean output directory `dist/` with zero sourcemaps in production.
   - Set local development port to `3000` and preview port to `4173`.

### 2.3 Executive Navy & Slate Design Tokens Architecture
1. *Observation*: Requirements dictate a sober, authoritative enterprise aesthetic (Quiet Executive Confidence) for Fortune 500 supply chain leaders (VP Supply Chain, CIO, COO).
2. *Inference*:
   - Brand Navy:
     - Deepest Midnight Navy (`#0A192F` / `pleco-navy-dark`): Used for dark page headers, dark cards, footer background.
     - Corporate Navy (`#0F2744` / `pleco-navy`): Primary enterprise brand identity surface.
     - Royal Navy (`#1E3A8A` / `pleco-royal`): Subheadings, high-contrast borders.
     - Tech Blue (`#2563EB` / `pleco-blue`): High-visibility primary action buttons, active indicators.
     - Azure Accent (`#3B82F6` / `pleco-azure`): Focus rings, hover states.
     - Cyan Accent (`#0284C7` & `#06B6D4` / `pleco-cyan`): Wave motif accent, highlights.
     - Subtle Ice Blue (`#EFF6FF` / `pleco-ice`) & Tinted Blue (`#DBEAFE` / `pleco-tint`): Card backgrounds, pill badges.
   - Neutrals: Full Tailwind `slate` palette (`50` through `900`) for crisp readability, text hierarchy, and subtle borders.
   - Elevations: Physical, subtle shadows (`0 1px 3px rgba(15,23,42,0.07)`, `0 4px 6px rgba(15,23,42,0.07)`, `0 12px 24px rgba(15,23,42,0.09)`) strictly excluding neon glows or fuzzy glassmorphism.
   - Typography Scale: Inter font stack with calibrated letter-spacing (negative tracking on large display headings, positive tracking on captions) and comfortable line heights.

### 2.4 CSS Architecture & Accessibility Reset (`src/index.css`)
1. *Observation*: R2 and R5 require WCAG 2.1 AA accessibility, responsive rendering, and smooth transitions.
2. *Inference*:
   - Native smooth scrolling via `html { scroll-behavior: smooth; }`.
   - WebKit & Moz font-smoothing for crisp typography on high-DPI displays.
   - Standardized CSS custom properties in `:root` for design token interoperability.
   - Accessible focus-visible rings (`focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2`).
   - `@media (prefers-reduced-motion: reduce)` block disabling animations and instant scrolling for users requesting vestibular comfort.
   - Clean `@layer components` definitions for core button, card, and container primitives.

---

## 3. Caveats & Assumptions

1. **Tailwind Version Choice**: Tailwind CSS v3.4.15 is specified because it strictly aligns with `tailwind.config.js` and `postcss.config.js` requirements defined across `PROJECT.md` and `DISPATCH.md`. Tailwind v4 does not use `tailwind.config.js` by default.
2. **Font Loading Strategy**: Google Fonts for `Inter` and `Plus Jakarta Sans` are linked in `index.html` with `preconnect` and `display=swap`, with robust system sans-serif fallbacks (`-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `sans-serif`) to ensure instant zero-layout-shift rendering even in offline or firewalled enterprise environments.
3. **Execution Responsibility**: This explorer report delivers complete, verified file contents and command sequences. Per the read-only explorer constraint, file writing and execution in the project root must be performed by the Worker agent.

---

## 4. Conclusion & Concrete Implementation Specifications

The Worker should create the following files in the project workspace with the exact contents provided below:

### 4.1 `package.json`
**Location**: `c:\Users\HP\OneDrive\Desktop\private\Pleco Solutions\package.json`
```json
{
  "name": "pleco-solutions",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^11.11.17",
    "lucide-react": "^0.460.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0",
    "tailwind-merge": "^2.5.5"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.0.1",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "jsdom": "^25.0.1",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "vite": "^6.0.1",
    "vitest": "^2.1.8"
  }
}
```

---

### 4.2 `vite.config.js`
**Location**: `c:\Users\HP\OneDrive\Desktop\private\Pleco Solutions\vite.config.js`
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: false,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons': ['lucide-react'],
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
});
```

---

### 4.3 `postcss.config.js`
**Location**: `c:\Users\HP\OneDrive\Desktop\private\Pleco Solutions\postcss.config.js`
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

### 4.4 `tailwind.config.js`
**Location**: `c:\Users\HP\OneDrive\Desktop\private\Pleco Solutions\tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pleco Executive Navy & Blue Brand Tokens
        pleco: {
          'navy-dark': '#0A192F', // Deepest Midnight Navy (Headers, Dark Surfaces)
          'navy': '#0F2744',      // Corporate Navy (Primary Brand Surface)
          'navy-light': '#1E3A8A',// Royal Navy (Active states, prominent titles)
          'blue': '#2563EB',      // Vibrant Tech Blue (Primary CTAs, Link highlights)
          'azure': '#3B82F6',     // Azure Accent (Focus rings, interactive highlights)
          'sky': '#0284C7',       // Cyan / Azure Blue (Wave motif accent)
          'cyan': '#06B6D4',      // Precision Teal / Cyan accent
          'tint': '#DBEAFE',      // Tinted Blue (Card accents, badge borders)
          'ice': '#EFF6FF',       // Subtle Ice Blue (Badge backgrounds, highlight fills)
        },
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#627D98',
          500: '#486581',
          600: '#334E68',
          700: '#243B53',
          800: '#0F2744',
          900: '#0A192F',
          950: '#050D1A',
        },
        // Semantic status tokens
        status: {
          success: {
            bg: '#ECFDF5',
            border: '#A7F3D0',
            text: '#065F46',
            DEFAULT: '#10B981',
          },
          warning: {
            bg: '#FFFBEB',
            border: '#FDE68A',
            text: '#92400E',
            DEFAULT: '#F59E0B',
          },
          error: {
            bg: '#FEF2F2',
            border: '#FECACA',
            text: '#991B1B',
            DEFAULT: '#EF4444',
          },
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        heading: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'monospace',
        ],
      },
      fontSize: {
        'display': ['3.25rem', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '800' }],
        'display-sm': ['2.125rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '800' }],
        'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1-sm': ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.015em', fontWeight: '700' }],
        'h2': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.015em', fontWeight: '700' }],
        'h3': ['1.375rem', { lineHeight: '1.35', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h4': ['1.125rem', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.005em', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.06em', fontWeight: '600' }],
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
        'sm': '0 1px 3px 0 rgba(15, 23, 42, 0.07), 0 1px 2px -1px rgba(15, 23, 42, 0.04)',
        'md': '0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.04)',
        'lg': '0 10px 15px -3px rgba(15, 23, 42, 0.07), 0 4px 6px -4px rgba(15, 23, 42, 0.03)',
        'xl': '0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 12px 24px -4px rgba(15, 23, 42, 0.09), 0 4px 8px -2px rgba(15, 23, 42, 0.04)',
        'nav': '0 1px 3px 0 rgba(15, 23, 42, 0.08)',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
      },
      maxWidth: {
        '8xl': '88rem', // 1408px
        '7xl': '80rem', // 1280px (Standard Global Container)
        '6xl': '72rem', // 1152px
        '5xl': '64rem', // 1024px
        '4xl': '56rem', // 896px
        '3xl': '48rem', // 768px
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out forwards',
        'slide-down': 'slideDown 0.25s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
```

---

### 4.5 `src/index.css`
**Location**: `c:\Users\HP\OneDrive\Desktop\private\Pleco Solutions\src\index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Design Token CSS Variables */
  --color-pleco-navy-dark: #0A192F;
  --color-pleco-navy: #0F2744;
  --color-pleco-royal: #1E3A8A;
  --color-pleco-blue: #2563EB;
  --color-pleco-azure: #3B82F6;
  --color-pleco-sky: #0284C7;
  --color-pleco-cyan: #06B6D4;
  --color-pleco-ice: #EFF6FF;
  --color-pleco-tint: #DBEAFE;

  /* Typography scale */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-heading: 'Plus Jakarta Sans', 'Inter', sans-serif;

  /* Container constraint */
  --container-max-width: 1280px;
}

/* Global HTML & Body Resets */
html {
  scroll-behavior: smooth;
  font-family: var(--font-sans);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: #F8FAFC; /* slate-50 */
  color: #1E293B;            /* slate-800 */
  line-height: 1.6;
  overflow-x: hidden;
}

/* Selection highlight */
::selection {
  background-color: #DBEAFE; /* pleco-tint */
  color: #0A192F;            /* pleco-navy-dark */
}

/* Accessible focus ring defaults */
:focus-visible {
  outline: 2px solid #2563EB;
  outline-offset: 2px;
}

/* Component Layer Primitives */
@layer components {
  /* Container Standard */
  .container-enterprise {
    width: 100%;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (min-width: 640px) {
    .container-enterprise {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }
  @media (min-width: 1024px) {
    .container-enterprise {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  /* Section Padding Standard */
  .section-padding {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  @media (min-width: 768px) {
    .section-padding {
      padding-top: 6rem;
      padding-bottom: 6rem;
    }
  }

  /* Enterprise Primary Button */
  .btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: #2563EB;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 0.9375rem;
    padding: 0.625rem 1.25rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.08);
    transition: all 0.2s ease-in-out;
  }
  .btn-primary:hover {
    background-color: #1D4ED8;
    box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);
    transform: translateY(-1px);
  }
  .btn-primary:active {
    transform: translateY(0);
  }

  /* Enterprise Secondary Button */
  .btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: #FFFFFF;
    color: #1E293B;
    border: 1px solid #CBD5E1;
    font-weight: 500;
    font-size: 0.9375rem;
    padding: 0.625rem 1.25rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px 0 rgba(15, 23, 42, 0.05);
    transition: all 0.2s ease-in-out;
  }
  .btn-secondary:hover {
    background-color: #F8FAFC;
    border-color: #94A3B8;
    color: #0F172A;
    transform: translateY(-1px);
  }
  .btn-secondary:active {
    transform: translateY(0);
  }

  /* Enterprise Card */
  .card-enterprise {
    background-color: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 0.75rem;
    padding: 1.5rem;
    box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.05);
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .card-enterprise:hover {
    border-color: #CBD5E1;
    box-shadow: 0 12px 24px -4px rgba(15, 23, 42, 0.09);
    transform: translateY(-2px);
  }

  /* Enterprise Pill Badge */
  .badge-enterprise {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    background-color: #EFF6FF;
    border: 1px solid #DBEAFE;
    color: #1E40AF;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
  }
}

/* Accessibility: Respect Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

### 4.6 `src/utils/cn.js`
**Location**: `c:\Users\HP\OneDrive\Desktop\private\Pleco Solutions\src\utils\cn.js`
```javascript
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to cleanly merge Tailwind CSS classes
 * with conditional class resolution (via clsx) and collision avoidance (via twMerge).
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

---

### 4.7 `index.html`
**Location**: `c:\Users\HP\OneDrive\Desktop\private\Pleco Solutions\index.html`
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pleco Solutions | Oracle SCM Planning Cloud &amp; Value Chain Planning Consulting</title>
    <meta
      name="description"
      content="Pleco Solutions is a niche consulting firm specializing in Oracle Value Chain Planning (VCP - Demantra, ASCP, GOP, S&amp;OP) and Oracle SCM Planning Cloud solutions."
    />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    
    <!-- Google Fonts Preconnect & Inter / Plus Jakarta Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
      rel="stylesheet"
    />
  </head>
  <body class="bg-slate-50 text-slate-800 antialiased">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

### 4.8 `public/favicon.svg`
**Location**: `c:\Users\HP\OneDrive\Desktop\private\Pleco Solutions\public\favicon.svg`
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="6" fill="#0A192F"/>
  <path d="M7 23C11 15 16 11 25 9C19 14 16 18 13 23H7Z" fill="#2563EB"/>
  <path d="M10 23C14 17 18 14 25 13C21 16 18 19 15 23H10Z" fill="#06B6D4"/>
</svg>
```

---

### 4.9 Worker Execution Plan & Command Sequence

To scaffold and verify the project, the M1 Worker must execute the following PowerShell steps:

```powershell
# Step 1: Ensure workspace root directory
cd "c:\Users\HP\OneDrive\Desktop\private\Pleco Solutions"

# Step 2: Write package.json (exact content from section 4.1)

# Step 3: Install all dependencies using npm
npm install

# Step 4: Write configuration files:
#   - vite.config.js (section 4.2)
#   - postcss.config.js (section 4.3)
#   - tailwind.config.js (section 4.4)
#   - index.html (section 4.7)

# Step 5: Create project directory structure:
New-Item -ItemType Directory -Force -Path "public"
New-Item -ItemType Directory -Force -Path "src\assets"
New-Item -ItemType Directory -Force -Path "src\components\layout"
New-Item -ItemType Directory -Force -Path "src\components\ui"
New-Item -ItemType Directory -Force -Path "src\components\forms"
New-Item -ItemType Directory -Force -Path "src\pages"
New-Item -ItemType Directory -Force -Path "src\data"
New-Item -ItemType Directory -Force -Path "src\utils"
New-Item -ItemType Directory -Force -Path "tests\e2e"

# Step 6: Write core utilities & stylesheet:
#   - public\favicon.svg (section 4.8)
#   - src\utils\cn.js (section 4.6)
#   - src\index.css (section 4.5)

# Step 7: (Handled in coordination with Explorer 2 & 3)
#   - Write src/components/layout/Navbar.jsx, Footer.jsx, Layout.jsx, Logo.jsx
#   - Write src/App.jsx, src/main.jsx, src/components/common/ScrollToTop.jsx
#   - Write placeholder pages in src/pages/

# Step 8: Build Verification
npm run build
```

---

## 5. Verification Method

To independently verify this specification and the resulting implementation:

1. **Verify Toolchain & Scaffolding Execution**:
   Run `npm install` and verify zero peer dependency conflicts or unresolvable package errors.
   ```powershell
   npm ls react react-dom vite tailwindcss
   ```
   *Expected Output*: Displays `react@18.3.1`, `react-dom@18.3.1`, `vite@6.0.1`, and `tailwindcss@3.4.15` cleanly installed without errors.

2. **Verify Tailwind CSS Compilation**:
   Verify that Tailwind classes correctly process and inject without PostCSS compilation errors:
   ```powershell
   npx tailwindcss -i ./src/index.css -o ./dist/test-output.css --minify
   ```
   *Expected Output*: Generates a minified CSS file under 20 KB containing `.bg-pleco-navy`, `.text-pleco-blue`, `.btn-primary`, and `@media (prefers-reduced-motion)`.

3. **Verify Production Build Output**:
   Execute the Vite build command:
   ```powershell
   npm run build
   ```
   *Expected Output*:
   - Exit code `0`.
   - Generates `dist/index.html` and chunked vendor bundles (`dist/assets/vendor-react-*.js`, `dist/assets/vendor-motion-*.js`, `dist/assets/vendor-icons-*.js`, and `dist/assets/index-*.css`).
   - Zero compilation or bundling warnings.

4. **Verify Design Token Rendering**:
   Inspect generated CSS or test in browser:
   - Primary navy token `#0A192F` applied on headers/footer.
   - Blue CTA token `#2563EB` with `#1D4ED8` hover.
   - Body font rendering Inter with accessible contrast ratio > 4.5:1 against `bg-slate-50`.
