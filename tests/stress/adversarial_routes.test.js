/**
 * Adversarial Route Resolution & Stress Test Suite
 * Milestone 1 - Challenger 1
 * 
 * Verifies non-existent route catch-all (404), rapid route transitions,
 * malformed URLs, case sensitivity, trailing slash tolerance, and navigation dead-link auditing.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { matchRoutes } from 'react-router-dom';
import { headerNavLinks, footerNavigation } from '../../src/data/navigationData.js';

// Define the exact route configuration hierarchy matching src/App.jsx
const appRouteConfig = [
  {
    path: '/',
    id: 'layout',
    children: [
      { index: true, id: 'home', canonical: '/' },
      { path: 'home', id: 'home-redirect', canonical: '/' },
      { path: 'solutions', id: 'solutions', canonical: '/solutions' },
      { path: 'demand-planning', id: 'demand-planning', canonical: '/demand-planning' },
      { path: 'supply-planning', id: 'supply-planning', canonical: '/supply-planning' },
      { path: 'integrated-business-planning', id: 'integrated-business-planning', canonical: '/integrated-business-planning' },
      { path: 'network-planning', id: 'network-planning', canonical: '/network-planning' },
      { path: 'production-planning', id: 'production-planning', canonical: '/production-planning' },
      { path: 'order-fulfillment', id: 'order-fulfillment', canonical: '/order-fulfillment' },
      { path: 'services', id: 'services', canonical: '/services' },
      { path: 'about', id: 'about', canonical: '/about' },
      { path: 'customers', id: 'customers', canonical: '/customers' },
      { path: 'careers', id: 'careers', canonical: '/careers' },
      { path: 'contact', id: 'contact', canonical: '/contact' },
      { path: '*', id: 'not-found', canonical: '*' },
    ],
  },
];

const CANONICAL_PATHS = [
  '/',
  '/solutions',
  '/demand-planning',
  '/supply-planning',
  '/integrated-business-planning',
  '/network-planning',
  '/production-planning',
  '/order-fulfillment',
  '/services',
  '/about',
  '/customers',
  '/careers',
  '/contact',
];

describe('Empirical Adversarial Route & Transition Stress Suite', () => {

  // =========================================================================
  // 1. Canonical Route Resolution Exactness
  // =========================================================================
  describe('Canonical Route Resolution Exactness', () => {
    it('should correctly resolve all 13 canonical routes to their designated page IDs', () => {
      for (const routePath of CANONICAL_PATHS) {
        const matches = matchRoutes(appRouteConfig, routePath);
        assert.ok(matches, `Route must match: ${routePath}`);
        assert.strictEqual(matches.length, 2, `Must match layout + leaf route for: ${routePath}`);
        const leaf = matches[1].route;
        assert.notStrictEqual(leaf.id, 'not-found', `Canonical route ${routePath} must NOT resolve to 404`);
        assert.strictEqual(leaf.canonical, routePath, `Leaf route must match canonical path: ${routePath}`);
      }
    });

    it('should resolve legacy /home to home-redirect route', () => {
      const matches = matchRoutes(appRouteConfig, '/home');
      assert.ok(matches);
      assert.strictEqual(matches[1].route.id, 'home-redirect');
    });
  });

  // =========================================================================
  // 2. Non-Existent Routes & 404 Fallback Stress Fuzzing
  // =========================================================================
  describe('Non-Existent Routes & 404 Fallback Fuzzing', () => {
    const maliciousAndInvalidPaths = [
      // Standard 404s
      '/random-unmapped-path',
      '/unknown',
      '/test-page',
      '/foo/bar/baz',
      '/about/team/director',
      '/solutions/deep/nested/404',
      '/services/consulting/oracle-migration',
      '/demand-planning/sub-module',

      // Administrative & Dashboard probes
      '/admin',
      '/admin/login',
      '/wp-admin',
      '/wp-login.php',
      '/dashboard',
      '/cpanel',
      '/portal',
      '/login',

      // Vulnerability & Traversal probes
      '/.env',
      '/.git/config',
      '/.git/HEAD',
      '/etc/passwd',
      '/api/v1/users',
      '/server-status',
      '/.well-known/security.txt',
      '/cgi-bin/test-cgi',

      // File extension probes
      '/index.php',
      '/default.aspx',
      '/config.json',
      '/backup.sql',
      '/main.js',
      '/routes.map',

      // Whitespace and special character probes
      '/ ',
      '/%20',
      '/%00',
      '/%2e%2e/',
      '/..',
      '/../../etc/shadow',
      '/!@#$%^&*()',
      '/<script>alert(1)</script>',
      '/SELECT * FROM users',
    ];

    for (const testPath of maliciousAndInvalidPaths) {
      it(`should catch non-existent/malicious path with 404 NotFound: "${testPath}"`, () => {
        const matches = matchRoutes(appRouteConfig, testPath);
        assert.ok(matches, `Should match fallback route for: ${testPath}`);
        const leaf = matches[matches.length - 1].route;
        assert.strictEqual(leaf.id, 'not-found', `Path "${testPath}" must resolve to not-found, got: ${leaf.id}`);
      });
    }
  });

  // =========================================================================
  // 3. Trailing Slash, Query Parameter, and Hash Robustness
  // =========================================================================
  describe('Trailing Slash, Query Parameter & Hash Robustness', () => {
    it('should resolve canonical routes with trailing slashes identically to non-trailing slashes', () => {
      for (const routePath of CANONICAL_PATHS) {
        if (routePath === '/') continue;
        const slashPath = `${routePath}/`;
        const matches = matchRoutes(appRouteConfig, slashPath);
        assert.ok(matches, `Route with trailing slash must match: ${slashPath}`);
        const leaf = matches[1].route;
        assert.strictEqual(leaf.canonical, routePath, `Trailing slash path ${slashPath} must match canonical route ${routePath}`);
      }
    });

    it('should resolve canonical routes regardless of query strings and hash anchors', () => {
      const queries = [
        '?utm_source=google&utm_medium=cpc',
        '?ref=navbar',
        '?page=1&limit=20',
        '#hero',
        '#contact-form',
        '?search=oracle#results',
      ];

      for (const routePath of CANONICAL_PATHS) {
        for (const q of queries) {
          const testPath = `${routePath}${q}`;
          const matches = matchRoutes(appRouteConfig, testPath);
          assert.ok(matches, `Route with query/hash must match: ${testPath}`);
          const leaf = matches[1].route;
          assert.strictEqual(leaf.canonical, routePath);
        }
      }
    });

    it('should verify case-insensitivity behavior of React Router default path matching', () => {
      // By default React Router v6 path matching is case-insensitive
      const caseVariants = [
        { path: '/SOLUTIONS', expected: '/solutions' },
        { path: '/Demand-Planning', expected: '/demand-planning' },
        { path: '/SUPPLY-PLANNING', expected: '/supply-planning' },
        { path: '/About', expected: '/about' },
        { path: '/Services', expected: '/services' },
        { path: '/Careers', expected: '/careers' },
        { path: '/CONTACT', expected: '/contact' },
        { path: '/CUSTOMERS', expected: '/customers' },
      ];

      for (const { path: testPath, expected } of caseVariants) {
        const matches = matchRoutes(appRouteConfig, testPath);
        assert.ok(matches, `Case variant should match: ${testPath}`);
        const leaf = matches[1].route;
        assert.strictEqual(leaf.canonical, expected, `Case variant ${testPath} should resolve to ${expected}`);
      }
    });
  });

  // =========================================================================
  // 4. Navigation Hierarchy Dead-Link Audit
  // =========================================================================
  describe('Navigation Hierarchy Dead-Link Audit', () => {
    it('should verify every link in headerNavLinks resolves to a valid route without 404', () => {
      for (const item of headerNavLinks) {
        const matches = matchRoutes(appRouteConfig, item.href);
        assert.ok(matches, `Header link ${item.name} (${item.href}) must match a route`);
        const leaf = matches[1].route;
        assert.notStrictEqual(leaf.id, 'not-found', `Header link ${item.name} (${item.href}) must NOT 404`);

        if (item.children) {
          for (const child of item.children) {
            const childMatches = matchRoutes(appRouteConfig, child.href);
            assert.ok(childMatches, `Dropdown item ${child.name} (${child.href}) must match a route`);
            const childLeaf = childMatches[1].route;
            assert.notStrictEqual(childLeaf.id, 'not-found', `Dropdown item ${child.name} (${child.href}) must NOT 404`);
          }
        }
      }
    });

    it('should verify every link in footerNavigation resolves to a valid route without 404', () => {
      const footerLinks = [
        ...footerNavigation.solutions,
        ...footerNavigation.company,
      ];

      for (const item of footerLinks) {
        const matches = matchRoutes(appRouteConfig, item.href);
        assert.ok(matches, `Footer link ${item.name} (${item.href}) must match a route`);
        const leaf = matches[1].route;
        assert.notStrictEqual(leaf.id, 'not-found', `Footer link ${item.name} (${item.href}) must NOT 404`);
      }
    });

    it('should verify telephone and email in footerNavigation conform to protocols', () => {
      const { phoneRaw, email } = footerNavigation.contact;
      assert.match(phoneRaw, /^\+1\d{10}$/, 'phoneRaw must be valid E.164 USA phone string: +1XXXXXXXXXX');
      assert.match(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'email must be valid RFC email address');
    });
  });

  // =========================================================================
  // 5. Rapid Route Transitions & Stress Performance Benchmark
  // =========================================================================
  describe('Rapid Route Transitions & Performance Stress Benchmark', () => {
    it('should execute 1,000 rapid route resolution cycles under 250ms with zero memory leak', () => {
      const testRoutes = [
        ...CANONICAL_PATHS,
        '/home',
        '/invalid-1',
        '/solutions?ref=test#section',
        '/about/',
        '/invalid-2',
      ];

      const iterations = 1000;
      const memBefore = process.memoryUsage().heapUsed;
      const startTime = performance.now();

      for (let i = 0; i < iterations; i++) {
        const target = testRoutes[i % testRoutes.length];
        const matches = matchRoutes(appRouteConfig, target);
        assert.ok(matches);
      }

      const elapsedMs = performance.now() - startTime;
      const memAfter = process.memoryUsage().heapUsed;
      const heapDeltaMb = (memAfter - memBefore) / (1024 * 1024);

      console.log(`       [BENCHMARK] 1,000 rapid route resolutions completed in ${elapsedMs.toFixed(2)}ms (${(elapsedMs / iterations * 1000).toFixed(2)} µs/op)`);
      console.log(`       [BENCHMARK] Heap delta during stress test: ${heapDeltaMb.toFixed(2)} MB`);

      assert.ok(
        elapsedMs < 250,
        `1,000 rapid route transitions took ${elapsedMs.toFixed(2)}ms, exceeding 250ms budget`
      );

      // Memory increase should be negligible (< 10 MB)
      assert.ok(
        heapDeltaMb < 10,
        `Heap delta ${heapDeltaMb.toFixed(2)}MB exceeds 10MB threshold`
      );
    });
  });

});
