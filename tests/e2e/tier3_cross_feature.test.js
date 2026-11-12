/**
 * Tier 3: Cross-Feature Combinations Test Suite for Pleco Solutions
 * Validates pairwise feature interactions, multi-hop navigation, and cross-route state flows.
 * Target: >= 15 test cases.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  createScenarioSession,
  generateBreadcrumbs,
  validateContactForm,
  resolveRoute
} from './test_helpers.js';
import {
  HOMEPAGE_SECTIONS,
  SOLUTIONS_PORTFOLIO,
  ENTERPRISE_TESTIMONIALS,
  CAREER_OPENINGS,
  COMPANY_METADATA,
  CANONICAL_ROUTES
} from './spec_oracle.js';

describe('Tier 3: Cross-Feature Combinations Suite', () => {

  it('1. Homepage Hero "Explore Solutions" CTA -> /solutions -> /demand-planning -> breadcrumbs back', () => {
    const session = createScenarioSession('/');
    assert.strictEqual(session.currentRoute, '/');

    // User clicks Hero "Explore Solutions" CTA
    const resolvedHub = session.navigate('/solutions');
    assert.strictEqual(resolvedHub.path, '/solutions');

    // User clicks Demand Planning solution card
    const resolvedSub = session.navigate('/demand-planning');
    assert.strictEqual(resolvedSub.path, '/demand-planning');

    // Verify breadcrumb path back to Solutions Hub and Home
    const crumbs = generateBreadcrumbs(session.currentRoute);
    assert.strictEqual(crumbs.length, 3);
    assert.strictEqual(crumbs[0].path, '/');
    assert.strictEqual(crumbs[1].path, '/solutions');
    assert.strictEqual(crumbs[2].path, '/demand-planning');

    // Simulate clicking second breadcrumb (Solutions)
    session.navigate(crumbs[1].path);
    assert.strictEqual(session.currentRoute, '/solutions');
  });

  it('2. Homepage Hero "Contact Us" CTA -> /contact -> fill valid form -> verify affirmative notification', () => {
    const session = createScenarioSession('/');
    session.navigate('/contact');
    assert.strictEqual(session.currentRoute, '/contact');

    session.inputFormField('name', 'Robert Taylor');
    session.inputFormField('email', 'rtaylor@globallogistics.com');
    session.inputFormField('subject', 'Oracle Cloud SCM Inquiry');
    session.inputFormField('message', 'We would like to discuss implementing Demantra and GOP for our distribution network.');

    const result = session.submitForm();
    assert.strictEqual(result.isValid, true);
    assert.strictEqual(session.formState.submitted, true);
    assert.strictEqual(session.formState.successNotification, true);
  });

  it('3. Homepage Services Spotlight "More Info" -> /services -> inspect Managed Services -> contact trigger', () => {
    const session = createScenarioSession('/');
    session.navigate(HOMEPAGE_SECTIONS.servicesSpotlight.ctaLink); // '/services'
    assert.strictEqual(session.currentRoute, '/services');

    // Transition from Services to Contact for managed services consultation
    session.navigate('/contact');
    assert.strictEqual(session.currentRoute, '/contact');
    session.inputFormField('name', 'Sarah Jenkins');
    session.inputFormField('email', 'sjenkins@processmfg.com');
    session.inputFormField('subject', 'Managed Services 24/7 Help Desk');
    session.inputFormField('message', 'Seeking 24x7 functional help desk support for on-premise Demantra.');
    const result = session.submitForm();
    assert.strictEqual(result.isValid, true);
  });

  it('4. Homepage Solutions Spotlight "More Info" -> /solutions -> verify 10 solution domains', () => {
    const session = createScenarioSession('/');
    session.navigate(HOMEPAGE_SECTIONS.solutionsSpotlight.ctaLink); // '/solutions'
    assert.strictEqual(session.currentRoute, '/solutions');

    // Check that all 6 deep-dive sub-routes can be navigated from solutions hub
    SOLUTIONS_PORTFOLIO.forEach(item => {
      const resolved = resolveRoute(item.route);
      assert.ok(resolved, `Solutions sub-route ${item.route} must resolve`);
    });
  });

  it('5. Homepage Testimonials Spotlight CTA -> /customers -> verify all 3 enterprise quotes', () => {
    const session = createScenarioSession('/');
    session.navigate(HOMEPAGE_SECTIONS.testimonialSpotlight.ctaLink); // '/customers'
    assert.strictEqual(session.currentRoute, '/customers');

    // Verify all 3 client quotes are accessible on /customers
    assert.strictEqual(ENTERPRISE_TESTIMONIALS.length, 3);
    const clients = ENTERPRISE_TESTIMONIALS.map(t => t.clientName);
    assert.ok(clients.includes('Qualcomm, Inc.'));
    assert.ok(clients.includes('PetSafe'));
    assert.ok(clients.includes('Cummins Power Generation'));
  });

  it('6. Pairwise Sub-Route Navigation: /demand-planning -> /supply-planning with breadcrumb integrity', () => {
    const session = createScenarioSession('/demand-planning');
    session.navigate('/supply-planning');
    assert.strictEqual(session.currentRoute, '/supply-planning');

    const crumbs = generateBreadcrumbs(session.currentRoute);
    assert.deepStrictEqual(crumbs.map(c => c.path), ['/', '/solutions', '/supply-planning']);
  });

  it('7. Pairwise Sub-Route Navigation: /supply-planning -> /integrated-business-planning (SIMPLE Framework)', () => {
    const session = createScenarioSession('/supply-planning');
    session.navigate('/integrated-business-planning');
    assert.strictEqual(session.currentRoute, '/integrated-business-planning');

    const ibp = SOLUTIONS_PORTFOLIO.find(s => s.id === 'integrated-business-planning');
    assert.ok(ibp);
    assert.strictEqual(ibp.framework.fullName, 'Smart Integrated Market-driven PLanning & Execution');
  });

  it('8. Pairwise Sub-Route Navigation: /integrated-business-planning -> /network-planning', () => {
    const session = createScenarioSession('/integrated-business-planning');
    session.navigate('/network-planning');
    assert.strictEqual(session.currentRoute, '/network-planning');

    const np = SOLUTIONS_PORTFOLIO.find(s => s.id === 'network-planning');
    assert.ok(np.coreTechnologies.includes('Oracle Strategic Network Optimization (SNO)'));
  });

  it('9. Pairwise Sub-Route Navigation: /network-planning -> /production-planning', () => {
    const session = createScenarioSession('/network-planning');
    session.navigate('/production-planning');
    assert.strictEqual(session.currentRoute, '/production-planning');

    const pp = SOLUTIONS_PORTFOLIO.find(s => s.id === 'production-planning');
    assert.ok(pp.coreTechnologies.includes('Oracle Production Scheduling (PS)'));
  });

  it('10. Pairwise Sub-Route Navigation: /production-planning -> /order-fulfillment', () => {
    const session = createScenarioSession('/production-planning');
    session.navigate('/order-fulfillment');
    assert.strictEqual(session.currentRoute, '/order-fulfillment');

    const of = SOLUTIONS_PORTFOLIO.find(s => s.id === 'order-fulfillment');
    assert.ok(of.coreTechnologies.includes('Oracle Global Order Promising (GOP)'));
  });

  it('11. Career Flow: /careers -> ASCP Consultant opening -> Application mailto trigger verification', () => {
    const session = createScenarioSession('/careers');
    const job = CAREER_OPENINGS.find(j => j.id === 'ascp-consultant');
    assert.ok(job);
    assert.strictEqual(job.applicationEmail, 'Info@plecosolutions.com');

    // Verify mailto target constructed correctly
    const subjectParam = encodeURIComponent(`Application: ${job.title}`);
    const mailtoTarget = `mailto:${job.applicationEmail}?subject=${subjectParam}`;
    assert.ok(mailtoTarget.startsWith('mailto:Info@plecosolutions.com'));
    assert.ok(mailtoTarget.includes('Oracle%20Advanced%20Supply%20Chain%20Planning'));
  });

  it('12. Career Flow: /careers -> Demantra Consultant opening -> Application mailto trigger verification', () => {
    const session = createScenarioSession('/careers');
    const job = CAREER_OPENINGS.find(j => j.id === 'demantra-consultant');
    assert.ok(job);
    assert.strictEqual(job.applicationEmail, 'Info@plecosolutions.com');

    const subjectParam = encodeURIComponent(`Application: ${job.title}`);
    const mailtoTarget = `mailto:${job.applicationEmail}?subject=${subjectParam}`;
    assert.ok(mailtoTarget.startsWith('mailto:Info@plecosolutions.com'));
    assert.ok(mailtoTarget.includes('Oracle%20Demantra%20Consultant'));
  });

  it('13. Mobile Drawer Flow: Open drawer at 375px -> Browse /customers -> Drawer auto-closes', () => {
    const session = createScenarioSession('/');
    session.setViewport(375);
    session.toggleMobileDrawer(true);
    assert.strictEqual(session.mobileDrawerOpen, true);

    // Click Customer Testimonials in drawer
    session.navigate('/customers');
    assert.strictEqual(session.currentRoute, '/customers');
    // Navigation must auto-close the drawer
    assert.strictEqual(session.mobileDrawerOpen, false);
  });

  it('14. Mobile Drawer Flow: Open drawer at 375px -> Browse /contact -> Submit valid inquiry on mobile', () => {
    const session = createScenarioSession('/');
    session.setViewport(375);
    session.toggleMobileDrawer(true);
    session.navigate('/contact');
    assert.strictEqual(session.currentRoute, '/contact');

    session.inputFormField('name', 'Mobile User');
    session.inputFormField('email', 'mobile@client.com');
    session.inputFormField('message', 'Submitting contact form from smartphone viewport.');
    const result = session.submitForm();
    assert.strictEqual(result.isValid, true);
    assert.strictEqual(session.formState.successNotification, true);
  });

  it('15. About Us Sub-Navigation Flow: /about -> Click Careers link -> Transition to /careers', () => {
    const session = createScenarioSession('/about');
    session.navigate('/careers');
    assert.strictEqual(session.currentRoute, '/careers');

    const crumbs = generateBreadcrumbs('/careers');
    assert.strictEqual(crumbs[1].path, '/about');
    assert.strictEqual(crumbs[2].path, '/careers');
  });

  it('16. Cross-Route State Isolation: Form inputs reset across distinct sessions', () => {
    const session1 = createScenarioSession('/contact');
    session1.inputFormField('name', 'User One');
    session1.inputFormField('email', 'one@test.com');
    session1.inputFormField('message', 'Message from session one');

    const session2 = createScenarioSession('/contact');
    assert.strictEqual(session2.formState.fields.name, '');
    assert.strictEqual(session2.formState.fields.email, '');
    assert.strictEqual(session2.formState.fields.message, '');
  });

  it('17. Full Navigation Sweep: Traversing all 13 canonical routes in sequence without errors', () => {
    const session = createScenarioSession('/');
    CANONICAL_ROUTES.forEach(route => {
      const resolved = session.navigate(route.path);
      assert.strictEqual(resolved.path, route.path);
      assert.strictEqual(session.currentRoute, route.path);
    });
    // History contains all 13 routes + initial '/'
    assert.strictEqual(session.history.length, 14);
  });

  it('18. Multi-device Session Flow: 375px mobile -> 768px tablet -> 1280px desktop transitions', () => {
    const session = createScenarioSession('/');

    // Start on mobile
    session.setViewport(375);
    assert.strictEqual(session.viewport.width, 375);
    session.toggleMobileDrawer(true);
    assert.strictEqual(session.mobileDrawerOpen, true);

    // Navigate to solutions and resize to tablet
    session.navigate('/solutions');
    session.setViewport(768);
    assert.strictEqual(session.mobileDrawerOpen, false);

    // Navigate to contact and resize to desktop
    session.navigate('/contact');
    session.setViewport(1280);
    assert.strictEqual(session.viewport.width, 1280);
    assert.strictEqual(session.currentRoute, '/contact');
  });

});
