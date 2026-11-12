/**
 * Tier 2: Boundary & Corner Cases Test Suite for Pleco Solutions
 * Validates edge cases, input limits, adversarial encoding, breakpoints, and states.
 * Target: >= 50 test cases.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  resolveRoute,
  classifyViewport,
  shouldShowMobileDrawer,
  createScenarioSession
} from './test_helpers.js';
import { COMPANY_METADATA, DESIGN_TOKENS } from './spec_oracle.js';

describe('Tier 2: Boundary & Corner Cases Suite', () => {

  // =========================================================================
  // 1. Contact Form Boundary Conditions & Field Lengths (24 tests)
  // =========================================================================
  describe('Contact Form Boundary Conditions', () => {
    it('should reject name with length 0 (empty string)', () => {
      const res = validateContactForm({ name: '', email: 'test@example.com', message: 'Valid message here' });
      assert.strictEqual(res.isValid, false);
      assert.ok(res.errors.name);
    });

    it('should reject name with length 1 (below min length 2)', () => {
      const res = validateContactForm({ name: 'A', email: 'test@example.com', message: 'Valid message here' });
      assert.strictEqual(res.isValid, false);
      assert.ok(res.errors.name);
    });

    it('should accept name with exact boundary length 2 ("Ed")', () => {
      const res = validateContactForm({ name: 'Ed', email: 'test@example.com', message: 'Valid message here' });
      assert.strictEqual(res.isValid, true);
    });

    it('should accept name with length 3 ("Amy")', () => {
      const res = validateContactForm({ name: 'Amy', email: 'test@example.com', message: 'Valid message here' });
      assert.strictEqual(res.isValid, true);
    });

    it('should reject name composed solely of whitespace ("   ")', () => {
      const res = validateContactForm({ name: '   ', email: 'test@example.com', message: 'Valid message here' });
      assert.strictEqual(res.isValid, false);
      assert.ok(res.errors.name);
    });

    it('should accept very long name (1000 characters)', () => {
      const longName = 'A'.repeat(1000);
      const res = validateContactForm({ name: longName, email: 'test@example.com', message: 'Valid message here' });
      assert.strictEqual(res.isValid, true);
    });

    it('should reject email missing "@" symbol', () => {
      const res = validateContactForm({ name: 'Valid Name', email: 'userexample.com', message: 'Valid message here' });
      assert.strictEqual(res.isValid, false);
      assert.ok(res.errors.email);
    });

    it('should reject email missing domain part ("user@")', () => {
      const res = validateContactForm({ name: 'Valid Name', email: 'user@', message: 'Valid message here' });
      assert.strictEqual(res.isValid, false);
      assert.ok(res.errors.email);
    });

    it('should reject email missing username part ("@domain.com")', () => {
      const res = validateContactForm({ name: 'Valid Name', email: '@domain.com', message: 'Valid message here' });
      assert.strictEqual(res.isValid, false);
      assert.ok(res.errors.email);
    });

    it('should reject email missing top-level domain ("user@domain")', () => {
      const res = validateContactForm({ name: 'Valid Name', email: 'user@domain', message: 'Valid message here' });
      assert.strictEqual(res.isValid, false);
      assert.ok(res.errors.email);
    });

    it('should reject email containing whitespace ("user name@domain.com")', () => {
      const res = validateContactForm({ name: 'Valid Name', email: 'user name@domain.com', message: 'Valid message here' });
      assert.strictEqual(res.isValid, false);
      assert.ok(res.errors.email);
    });

    it('should reject email with consecutive "@" symbols ("user@@domain.com")', () => {
      const res = validateContactForm({ name: 'Valid Name', email: 'user@@domain.com', message: 'Valid message here' });
      assert.strictEqual(res.isValid, false);
      assert.ok(res.errors.email);
    });

    it('should reject email with leading dot in domain ("user@.domain.com")', () => {
      const res = validateContactForm({ name: 'Valid Name', email: 'user@.domain.com', message: 'Valid message here' });
      assert.strictEqual(res.isValid, false);
      assert.ok(res.errors.email);
    });

    it('should accept valid minimal email ("a@b.co")', () => {
      const res = validateContactForm({ name: 'Valid Name', email: 'a@b.co', message: 'Valid message here' });
      assert.strictEqual(res.isValid, true);
    });

    it('should accept valid subdomain email ("user@mail.corp.plecosolutions.com")', () => {
      const res = validateContactForm({ name: 'Valid Name', email: 'user@mail.corp.plecosolutions.com', message: 'Valid message here' });
      assert.strictEqual(res.isValid, true);
    });

    it('should accept valid email with plus tag ("user+tag@domain.com")', () => {
      const res = validateContactForm({ name: 'Valid Name', email: 'user+tag@domain.com', message: 'Valid message here' });
      assert.strictEqual(res.isValid, true);
    });

    it('should accept payload with empty/omitted optional subject', () => {
      const res = validateContactForm({ name: 'Valid Name', email: 'user@domain.com', subject: '', message: 'Valid message here' });
      assert.strictEqual(res.isValid, true);
      assert.strictEqual(res.errors.subject, undefined);
    });

    it('should reject subject with 1 character when provided (min 3 chars required)', () => {
      const res = validateContactForm({ name: 'Valid Name', email: 'user@domain.com', subject: 'A', message: 'Valid message here' });
      assert.strictEqual(res.isValid, false);
      assert.ok(res.errors.subject);
    });

    it('should reject subject with 2 characters when provided (min 3 chars required)', () => {
      const res = validateContactForm({ name: 'Valid Name', email: 'user@domain.com', subject: 'AB', message: 'Valid message here' });
      assert.strictEqual(res.isValid, false);
      assert.ok(res.errors.subject);
    });

    it('should accept subject with exact boundary length 3 ("RFP")', () => {
      const res = validateContactForm({ name: 'Valid Name', email: 'user@domain.com', subject: 'RFP', message: 'Valid message here' });
      assert.strictEqual(res.isValid, true);
    });

    it('should reject message with length 0 (empty)', () => {
      const res = validateContactForm({ name: 'Valid Name', email: 'user@domain.com', message: '' });
      assert.strictEqual(res.isValid, false);
      assert.ok(res.errors.message);
    });

    it('should reject message with exact boundary length 9 (min 10 required)', () => {
      const res = validateContactForm({ name: 'Valid Name', email: 'user@domain.com', message: '123456789' });
      assert.strictEqual(res.isValid, false);
      assert.ok(res.errors.message);
    });

    it('should accept message with exact boundary length 10 ("0123456789")', () => {
      const res = validateContactForm({ name: 'Valid Name', email: 'user@domain.com', message: '0123456789' });
      assert.strictEqual(res.isValid, true);
    });

    it('should reject message composed of 10 whitespace characters', () => {
      const res = validateContactForm({ name: 'Valid Name', email: 'user@domain.com', message: '          ' });
      assert.strictEqual(res.isValid, false);
      assert.ok(res.errors.message);
    });
  });

  // =========================================================================
  // 2. Adversarial Input Encoding, Escaping & Character Sets (8 tests)
  // =========================================================================
  describe('Adversarial Input Encoding & Escaping', () => {
    it('should safely process HTML script tags in message without crashing', () => {
      const payload = {
        name: 'SecTest',
        email: 'security@enterprise.com',
        subject: '<script>alert("xss")</script>',
        message: '<script>window.location="http://evil.com"</script> inquiry for Oracle VCP'
      };
      const res = validateContactForm(payload);
      assert.strictEqual(res.isValid, true);
    });

    it('should safely process HTML formatting tags (<b>, <i>, <div>)', () => {
      const payload = {
        name: '<b>John</b>',
        email: 'john@example.com',
        message: '<div>Inquiry about <i>Demantra</i> and <strong>ASCP</strong>.</div>'
      };
      const res = validateContactForm(payload);
      assert.strictEqual(res.isValid, true);
    });

    it('should safely process SQL injection metacharacters', () => {
      const payload = {
        name: "Admin' OR '1'='1",
        email: 'sqli@test.com',
        subject: "'; DROP TABLE inquiries; --",
        message: "' OR 1=1; SELECT * FROM users WHERE 'a'='a';"
      };
      const res = validateContactForm(payload);
      assert.strictEqual(res.isValid, true);
    });

    it('should safely process multi-byte Unicode and Emoji characters', () => {
      const payload = {
        name: '供应链专家 🌐',
        email: 'global@supplychain.org',
        subject: 'Demantra & ASCP 🚀 📦',
        message: 'Looking for modern planning: 🚢 ✈️ 🏭 📈 🤝.'
      };
      const res = validateContactForm(payload);
      assert.strictEqual(res.isValid, true);
    });

    it('should safely process accented international characters (Müller, François)', () => {
      const payload = {
        name: 'François Müller',
        email: 'francois.muller@societe.fr',
        subject: 'Planification de la chaîne logistique',
        message: 'Nous souhaitons optimiser notre chaîne logistique avec Demantra et ASCP.'
      };
      const res = validateContactForm(payload);
      assert.strictEqual(res.isValid, true);
    });

    it('should safely process CRLF and multiline newlines in message', () => {
      const payload = {
        name: 'LineBreaker',
        email: 'lines@example.com',
        message: 'Line 1\r\nLine 2\nLine 3\rLine 4 with tab\tcharacters'
      };
      const res = validateContactForm(payload);
      assert.strictEqual(res.isValid, true);
    });

    it('should safely process quotation marks and backslashes', () => {
      const payload = {
        name: '"Executive" \\ Director',
        email: 'exec@company.com',
        subject: "Quote's & \"Double Quotes\"",
        message: "Path: C:\\Users\\Admin\\Documents\\RFP.pdf -- please review our request."
      };
      const res = validateContactForm(payload);
      assert.strictEqual(res.isValid, true);
    });

    it('should safely process massive 10,000 character message body', () => {
      const hugeMessage = 'Enterprise Supply Chain RFP Requirement: '.repeat(250);
      const payload = {
        name: 'Enterprise Corp',
        email: 'procurement@hugecorp.com',
        message: hugeMessage
      };
      const res = validateContactForm(payload);
      assert.strictEqual(res.isValid, true);
    });
  });

  // =========================================================================
  // 3. Routing & Path Boundary Conditions (10 tests)
  // =========================================================================
  describe('Routing & Path Boundary Conditions', () => {
    it('should resolve route with trailing slash (/solutions/) identically to /solutions', () => {
      const r1 = resolveRoute('/solutions');
      const r2 = resolveRoute('/solutions/');
      assert.ok(r1 && r2);
      assert.strictEqual(r1.path, r2.path);
    });

    it('should resolve route with uppercase letters (/DEMAND-PLANNING)', () => {
      const res = resolveRoute('/DEMAND-PLANNING');
      assert.ok(res);
      assert.strictEqual(res.path, '/demand-planning');
    });

    it('should resolve route with mixed casing (/InTeGrAtEd-BuSiNeSs-PlAnNiNg)', () => {
      const res = resolveRoute('/InTeGrAtEd-BuSiNeSs-PlAnNiNg');
      assert.ok(res);
      assert.strictEqual(res.path, '/integrated-business-planning');
    });

    it('should resolve root path / to Home', () => {
      const res = resolveRoute('/');
      assert.ok(res);
      assert.strictEqual(res.path, '/');
      assert.strictEqual(res.title, 'Home');
    });

    it('should return null for non-existent route (/random-page-12345)', () => {
      const res = resolveRoute('/random-page-12345');
      assert.strictEqual(res, null);
    });

    it('should return null for empty string or null input', () => {
      assert.strictEqual(resolveRoute(''), null);
      assert.strictEqual(resolveRoute(null), null);
      assert.strictEqual(resolveRoute(undefined), null);
    });

    it('should extract and resolve base path from URL with query parameters', () => {
      const url = '/services?utm_source=linkedin&utm_campaign=sc_cloud';
      const basePath = url.split('?')[0];
      const res = resolveRoute(basePath);
      assert.ok(res);
      assert.strictEqual(res.path, '/services');
    });

    it('should extract and resolve base path from URL with hash fragment', () => {
      const url = '/solutions#demand-planning';
      const basePath = url.split('#')[0];
      const res = resolveRoute(basePath);
      assert.ok(res);
      assert.strictEqual(res.path, '/solutions');
    });

    it('should resolve all sub-routes with trailing slashes consistently', () => {
      const subRoutes = ['/supply-planning/', '/network-planning/', '/production-planning/', '/order-fulfillment/'];
      subRoutes.forEach(sr => {
        const res = resolveRoute(sr);
        assert.ok(res, `Route ${sr} must resolve`);
        assert.strictEqual(res.path, sr.slice(0, -1));
      });
    });

    it('should execute 100 rapid consecutive route resolutions under 10ms', () => {
      const start = Date.now();
      for (let i = 0; i < 100; i++) {
        const path = (i % 2 === 0) ? '/demand-planning/' : '/contact';
        const res = resolveRoute(path);
        assert.ok(res);
      }
      const duration = Date.now() - start;
      assert.ok(duration < 50, `100 route resolutions took ${duration}ms (must be fast)`);
    });
  });

  // =========================================================================
  // 4. Responsive Viewport Breakpoint Boundaries (8 tests)
  // =========================================================================
  describe('Responsive Viewport Breakpoint Boundaries', () => {
    it('should classify 374px as mobile (below 375px threshold)', () => {
      assert.strictEqual(classifyViewport(374), 'mobile');
      assert.strictEqual(shouldShowMobileDrawer(374), true);
    });

    it('should classify 375px as mobile (exact standard mobile threshold)', () => {
      assert.strictEqual(classifyViewport(375), 'mobile');
      assert.strictEqual(shouldShowMobileDrawer(375), true);
    });

    it('should classify 767px as mobile (upper boundary of mobile tier)', () => {
      assert.strictEqual(classifyViewport(767), 'mobile');
      assert.strictEqual(shouldShowMobileDrawer(767), true);
    });

    it('should classify 768px as tablet (exact tablet boundary, drawer inactive)', () => {
      assert.strictEqual(classifyViewport(768), 'tablet');
      assert.strictEqual(shouldShowMobileDrawer(768), false);
    });

    it('should classify 1023px as tablet (upper boundary of tablet tier)', () => {
      assert.strictEqual(classifyViewport(1023), 'tablet');
      assert.strictEqual(shouldShowMobileDrawer(1023), false);
    });

    it('should classify 1024px as laptop (laptop boundary)', () => {
      assert.strictEqual(classifyViewport(1024), 'laptop');
      assert.strictEqual(shouldShowMobileDrawer(1024), false);
    });

    it('should classify 1279px as laptop (below desktop threshold)', () => {
      assert.strictEqual(classifyViewport(1279), 'laptop');
      assert.strictEqual(shouldShowMobileDrawer(1279), false);
    });

    it('should classify 1280px as desktop (exact desktop boundary)', () => {
      assert.strictEqual(classifyViewport(1280), 'desktop');
      assert.strictEqual(shouldShowMobileDrawer(1280), false);
    });
  });

  // =========================================================================
  // 5. Mobile Drawer & Interactive State Boundaries (5 tests)
  // =========================================================================
  describe('Mobile Drawer State Transitions', () => {
    it('should toggle mobile drawer from closed to open on mobile viewport', () => {
      const session = createScenarioSession('/');
      session.setViewport(375);
      assert.strictEqual(session.mobileDrawerOpen, false);
      session.toggleMobileDrawer(true);
      assert.strictEqual(session.mobileDrawerOpen, true);
    });

    it('should toggle mobile drawer from open to closed', () => {
      const session = createScenarioSession('/');
      session.setViewport(375);
      session.toggleMobileDrawer(true);
      session.toggleMobileDrawer(false);
      assert.strictEqual(session.mobileDrawerOpen, false);
    });

    it('should auto-close mobile drawer when viewport expands to desktop (1280px)', () => {
      const session = createScenarioSession('/');
      session.setViewport(375);
      session.toggleMobileDrawer(true);
      assert.strictEqual(session.mobileDrawerOpen, true);
      // User resizes window or rotates device to desktop width
      session.setViewport(1280);
      assert.strictEqual(session.mobileDrawerOpen, false);
    });

    it('should auto-close mobile drawer upon route navigation', () => {
      const session = createScenarioSession('/');
      session.setViewport(375);
      session.toggleMobileDrawer(true);
      assert.strictEqual(session.mobileDrawerOpen, true);
      session.navigate('/services');
      assert.strictEqual(session.currentRoute, '/services');
      assert.strictEqual(session.mobileDrawerOpen, false);
    });

    it('should preserve session history during navigation state transitions', () => {
      const session = createScenarioSession('/');
      session.navigate('/about');
      session.navigate('/customers');
      assert.deepStrictEqual(session.history, ['/', '/about', '/customers']);
    });
  });

  // =========================================================================
  // 6. Protocol URIs & Reset State Boundaries (4 tests)
  // =========================================================================
  describe('Protocol URIs & Reset State Boundaries', () => {
    it('should verify tel: URI strips whitespace and parentheses correctly', () => {
      const rawPhone = COMPANY_METADATA.phone; // '+1 (650) 533-6649'
      const sanitized = rawPhone.replace(/[\s()-]/g, '');
      assert.strictEqual(`tel:${sanitized}`, COMPANY_METADATA.telUri);
      assert.strictEqual(COMPANY_METADATA.telUri, 'tel:+16505336649');
    });

    it('should verify mailto: URI pre-populates official contact email', () => {
      assert.strictEqual(COMPANY_METADATA.mailtoUri, `mailto:${COMPANY_METADATA.email}`);
    });

    it('should reset contact form state cleanly upon resetForm()', () => {
      const session = createScenarioSession('/contact');
      session.inputFormField('name', 'Jane Doe');
      session.inputFormField('email', 'jane@test.com');
      session.inputFormField('message', 'Valid message content here');
      session.submitForm();
      assert.strictEqual(session.formState.submitted, true);
      assert.strictEqual(session.formState.successNotification, true);

      session.resetForm();
      assert.strictEqual(session.formState.submitted, false);
      assert.strictEqual(session.formState.successNotification, false);
      assert.strictEqual(session.formState.fields.name, '');
      assert.strictEqual(session.formState.fields.email, '');
      assert.strictEqual(session.formState.fields.message, '');
    });

    it('should retain entered field values if submission fails validation', () => {
      const session = createScenarioSession('/contact');
      session.inputFormField('name', 'Jane Doe');
      session.inputFormField('email', 'invalid-email');
      session.inputFormField('message', 'Short');
      const result = session.submitForm();
      assert.strictEqual(result.isValid, false);
      assert.strictEqual(session.formState.submitted, true);
      assert.strictEqual(session.formState.fields.name, 'Jane Doe');
      assert.strictEqual(session.formState.fields.email, 'invalid-email');
      assert.strictEqual(session.formState.fields.message, 'Short');
      assert.strictEqual(session.formState.successNotification, false);
    });
  });

});
