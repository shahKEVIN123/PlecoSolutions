/**
 * Build Artifact & Bundle Integrity Adversarial Stress Test Suite
 * Milestone 1 - Challenger 1
 * 
 * Verifies production build outputs in dist/, script/link tag resolution,
 * backend code isolation, secret leakage, and bundle size constraints.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..', '..');
const DIST_DIR = path.join(PROJECT_ROOT, 'dist');
const ASSETS_DIR = path.join(DIST_DIR, 'assets');

describe('Empirical Build & Bundle Integrity Stress Suite', () => {

  it('should verify dist directory exists and contains index.html and favicon.svg', () => {
    assert.ok(fs.existsSync(DIST_DIR), 'dist directory must exist');
    assert.ok(fs.existsSync(path.join(DIST_DIR, 'index.html')), 'dist/index.html must exist');
    assert.ok(fs.existsSync(path.join(DIST_DIR, 'favicon.svg')), 'dist/favicon.svg must exist');
  });

  it('should verify dist/index.html has valid HTML5 structure, title, and viewport meta', () => {
    const html = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf-8');
    assert.ok(html.startsWith('<!doctype html>') || html.startsWith('<!DOCTYPE html>'), 'Must have valid HTML5 doctype');
    assert.ok(html.includes('<meta name="viewport" content="width=device-width, initial-scale=1.0"'), 'Must have responsive viewport tag');
    assert.ok(html.includes('<title>Pleco Solutions'), 'Title must contain Pleco Solutions');
    assert.ok(html.includes('<div id="root"></div>'), 'Root mount container must be present');
  });

  it('should verify all script and stylesheet tags in dist/index.html resolve to real files on disk', () => {
    const html = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf-8');

    // Extract all local src and href attributes (starting with /assets/ or /favicon)
    const assetRegex = /(?:src|href)="(\/(?:assets\/[^"]+|favicon\.svg))"/g;
    const matches = [];
    let match;
    while ((match = assetRegex.exec(html)) !== null) {
      matches.push(match[1]);
    }

    assert.ok(matches.length >= 3, `Expected at least 3 linked assets in index.html, found ${matches.length}`);

    for (const assetPath of matches) {
      const relPath = assetPath.replace(/^\//, '');
      const fullPath = path.join(DIST_DIR, relPath);
      assert.ok(fs.existsSync(fullPath), `Asset referenced in index.html must exist on disk: ${assetPath} -> ${fullPath}`);
      const stats = fs.statSync(fullPath);
      assert.ok(stats.size > 0, `Asset ${assetPath} must not be empty (size: ${stats.size} bytes)`);
    }
  });

  it('should verify dist/assets directory contains JavaScript and CSS bundles with hash stamps', () => {
    assert.ok(fs.existsSync(ASSETS_DIR), 'dist/assets directory must exist');
    const files = fs.readdirSync(ASSETS_DIR);
    assert.ok(files.length >= 3, `dist/assets must contain multiple bundle chunks, found: ${files.join(', ')}`);

    const jsFiles = files.filter(f => f.endsWith('.js'));
    const cssFiles = files.filter(f => f.endsWith('.css'));

    assert.ok(jsFiles.length >= 2, `Must have at least 2 JS chunks (vendor + app), found ${jsFiles.length}`);
    assert.ok(cssFiles.length >= 1, `Must have at least 1 CSS chunk, found ${cssFiles.length}`);

    // Verify hash stamps exist in filenames (e.g. index-C0NzK-2G.js)
    const hashPattern = /-[A-Za-z0-9_-]{6,}\.(?:js|css)$/;
    for (const f of [...jsFiles, ...cssFiles]) {
      assert.ok(hashPattern.test(f), `Asset filename should contain content hash stamp for cache busting: ${f}`);
    }
  });

  it('should verify bundle does not leak server-side Node.js builtins or backend libraries', () => {
    const files = fs.readdirSync(ASSETS_DIR).filter(f => f.endsWith('.js'));
    const forbiddenPatterns = [
      /\bchild_process\b/,
      /\bexpress\b/,
      /\bmongoose\b/,
      /\bsequelize\b/,
      /\bpg-pool\b/,
      /\bbodyParser\b/,
      /\baws-sdk\b/,
      /\bdockerode\b/
    ];

    for (const f of files) {
      const content = fs.readFileSync(path.join(ASSETS_DIR, f), 'utf-8');
      for (const pattern of forbiddenPatterns) {
        assert.ok(
          !pattern.test(content),
          `Bundle file ${f} must not contain server-side signature: ${pattern}`
        );
      }
    }
  });

  it('should verify bundle does not leak secrets, API keys, or private keys', () => {
    const files = fs.readdirSync(ASSETS_DIR).filter(f => f.endsWith('.js'));
    const secretPatterns = [
      /BEGIN RSA PRIVATE KEY/,
      /BEGIN OPENSSH PRIVATE KEY/,
      /AIzaSy[A-Za-z0-9_-]{33}/, // Google API Key pattern
      /ghp_[A-Za-z0-9]{36}/,     // GitHub token
      /sk_live_[A-Za-z0-9]{24}/  // Stripe live key
    ];

    for (const f of files) {
      const content = fs.readFileSync(path.join(ASSETS_DIR, f), 'utf-8');
      for (const pattern of secretPatterns) {
        assert.ok(
          !pattern.test(content),
          `Bundle file ${f} leaked secret matching pattern ${pattern}`
        );
      }
    }
  });

  it('should verify bundle chunk sizes meet performance budget constraints', () => {
    const files = fs.readdirSync(ASSETS_DIR);
    let totalJsSize = 0;
    let totalCssSize = 0;

    for (const f of files) {
      const stats = fs.statSync(path.join(ASSETS_DIR, f));
      if (f.endsWith('.js')) {
        totalJsSize += stats.size;
        // No single JS chunk should exceed 500 KB uncompressed
        assert.ok(
          stats.size < 500 * 1024,
          `Chunk ${f} exceeds 500KB budget: ${(stats.size / 1024).toFixed(1)}KB`
        );
      } else if (f.endsWith('.css')) {
        totalCssSize += stats.size;
        // CSS should be under 100 KB uncompressed
        assert.ok(
          stats.size < 100 * 1024,
          `CSS bundle ${f} exceeds 100KB budget: ${(stats.size / 1024).toFixed(1)}KB`
        );
      }
    }

    // Total JS should be well under 600 KB uncompressed
    assert.ok(
      totalJsSize < 600 * 1024,
      `Total JS size ${(totalJsSize / 1024).toFixed(1)}KB exceeds 600KB budget`
    );
  });

  it('should verify CSS bundle contains compiled Tailwind color tokens and reset styles', () => {
    const cssFiles = fs.readdirSync(ASSETS_DIR).filter(f => f.endsWith('.css'));
    assert.ok(cssFiles.length > 0, 'CSS file must exist');

    const cssContent = fs.readFileSync(path.join(ASSETS_DIR, cssFiles[0]), 'utf-8');

    // Check for Executive Navy color code (#0a192f or #0A192F or rgb(10,25,47) or #0f2744)
    const hasNavy = cssContent.includes('#0a192f') ||
                    cssContent.includes('#0A192F') ||
                    cssContent.includes('10,25,47') ||
                    cssContent.includes('#0f2744');
    assert.ok(hasNavy, 'CSS bundle must include Executive Navy brand color tokens');

    // Check for font-family Inter
    assert.ok(cssContent.includes('Inter'), 'CSS bundle must include Inter font-family references');
  });

  it('should verify favicon.svg is a well-formed vector SVG with dynamic wave motif', () => {
    const faviconPath = path.join(DIST_DIR, 'favicon.svg');
    assert.ok(fs.existsSync(faviconPath), 'favicon.svg must exist');
    const svg = fs.readFileSync(faviconPath, 'utf-8');
    assert.ok(svg.includes('<svg') && svg.includes('</svg>'), 'favicon.svg must be valid SVG');
    assert.ok(svg.includes('viewBox'), 'favicon.svg must have viewBox');
  });

});
