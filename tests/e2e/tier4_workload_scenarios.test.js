/**
 * Tier 4: Real-World Application Workload Scenarios Test Suite for Pleco Solutions
 * Simulates complete end-to-end user journeys mapping to authentic enterprise personas.
 * Target: >= 8 scenario test cases.
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
  CONSULTING_SERVICES
} from './spec_oracle.js';

describe('Tier 4: Real-World Workload Scenarios Suite', () => {

  it('Scenario 1: Executive Evaluator Journey (High-Tech VP of Supply Chain)', () => {
    const session = createScenarioSession('/');

    // Step 1: Land on homepage, inspect authority and industry verticals
    assert.strictEqual(session.currentRoute, '/');
    assert.ok(HOMEPAGE_SECTIONS.aboutSpotlight.paragraphs[0].includes('Oracle Value Chain Planning'));
    const verticals = HOMEPAGE_SECTIONS.solutionsSpotlight.verticals;
    assert.ok(verticals[0].includes('Hi-Tech'));

    // Step 2: Navigate to Solutions Hub via CTA
    session.navigate('/solutions');
    assert.strictEqual(session.currentRoute, '/solutions');

    // Step 3: Deep dive into Demand Planning
    session.navigate('/demand-planning');
    assert.strictEqual(session.currentRoute, '/demand-planning');
    const dp = SOLUTIONS_PORTFOLIO.find(s => s.id === 'demand-planning');
    assert.ok(dp.coreTechnologies.includes('Oracle Demantra Demand Management (DM)'));

    // Step 4: Verify Qualcomm customer testimonial for Hi-Tech Demantra
    session.navigate('/customers');
    const qualcomm = ENTERPRISE_TESTIMONIALS.find(t => t.id === 'qualcomm');
    assert.ok(qualcomm.quote.includes('A highly valued asset during the implementation phase of Demantra.'));
    assert.strictEqual(qualcomm.clientName, 'Qualcomm, Inc.');

    // Step 5: Contact Pleco for executive consultation
    session.navigate('/contact');
    session.inputFormField('name', 'Marcus Vance, VP Supply Chain');
    session.inputFormField('email', 'mvance@semiconductor-global.com');
    session.inputFormField('subject', 'Demantra to Oracle SCM Cloud Transition');
    session.inputFormField('message', 'We are evaluating consulting partners to lead our Demantra DM migration to SCM Cloud.');
    const result = session.submitForm();

    assert.strictEqual(result.isValid, true);
    assert.strictEqual(session.formState.successNotification, true);
    assert.strictEqual(session.history.length, 5); // / -> /solutions -> /demand-planning -> /customers -> /contact
  });

  it('Scenario 2: PetSafe-Style Rapid Proof-of-Concept Evaluator Journey (Operations Director)', () => {
    const session = createScenarioSession('/about');

    // Step 1: Browse About Us corporate philosophy
    assert.strictEqual(session.currentRoute, '/about');

    // Step 2: Read PetSafe case study on /customers (2-week POC vs 2-month delay)
    session.navigate('/customers');
    const petsafe = ENTERPRISE_TESTIMONIALS.find(t => t.id === 'petsafe');
    assert.ok(petsafe.quote.includes('In just 2 weeks we had fully functional VCP proof-of-the-concept'));
    assert.ok(petsafe.quote.includes('distinguishes prime consultancy from sub-prime!'));

    // Step 3: Inspect Services for Implementation & Upgrades
    session.navigate('/services');
    const implPillar = CONSULTING_SERVICES.find(s => s.id === 'implementation-upgrades');
    assert.ok(implPillar.deliverables.some(d => d.includes('on-time and within-budget delivery')));

    // Step 4: Submit RFP request on /contact
    session.navigate('/contact');
    session.inputFormField('name', 'Elena Rostova, Director of Operations');
    session.inputFormField('email', 'erostova@petsafe-global.com');
    session.inputFormField('subject', 'Urgent VCP Proof-of-Concept Request');
    session.inputFormField('message', 'We need an accelerated proof-of-concept for Oracle VCP Demantra within 3 weeks.');
    const result = session.submitForm();

    assert.strictEqual(result.isValid, true);
    assert.strictEqual(session.formState.successNotification, true);
  });

  it('Scenario 3: Cummins-Style ODP-to-Demantra Migration Planner Journey (BP&A Lead)', () => {
    const session = createScenarioSession('/demand-planning');

    // Step 1: Review legacy ODP migration capabilities
    const dp = SOLUTIONS_PORTFOLIO.find(s => s.id === 'demand-planning');
    assert.ok(dp.coreTechnologies.includes('Legacy ODP-to-Demantra Migration'));

    // Step 2: Review Integrated Business Planning SIMPLE framework
    session.navigate('/integrated-business-planning');
    const ibp = SOLUTIONS_PORTFOLIO.find(s => s.id === 'integrated-business-planning');
    assert.strictEqual(ibp.framework.fullName, 'Smart Integrated Market-driven PLanning & Execution');
    assert.strictEqual(ibp.framework.motto, 'From Plan to Performance to Profit');

    // Step 3: Confirm Cummins case study
    session.navigate('/customers');
    const cummins = ENTERPRISE_TESTIMONIALS.find(t => t.id === 'cummins');
    assert.ok(cummins.quote.includes('ODP migration to Oracle Demantra application'));
    assert.ok(cummins.quote.includes('helped shorten the forecast cycle'));

    // Step 4: Submit migration inquiry
    session.navigate('/contact');
    session.inputFormField('name', 'David Chen, BP&A Lead');
    session.inputFormField('email', 'dchen@powermanufacturing.com');
    session.inputFormField('subject', 'ODP to Demantra Migration Consultation');
    session.inputFormField('message', 'Our business planning team seeks assistance migrating our legacy ODP application to Demantra.');
    const result = session.submitForm();

    assert.strictEqual(result.isValid, true);
    assert.strictEqual(session.formState.successNotification, true);
  });

  it('Scenario 4: Senior Oracle ASCP Consultant Applicant Journey', () => {
    const session = createScenarioSession('/');

    // Step 1: Consultant visits / and navigates to /careers
    session.navigate('/careers');
    assert.strictEqual(session.currentRoute, '/careers');

    // Step 2: Review ASCP Consultant opening
    const ascpJob = CAREER_OPENINGS.find(j => j.id === 'ascp-consultant');
    assert.ok(ascpJob);
    assert.strictEqual(ascpJob.minExperienceYears, 4);
    assert.ok(ascpJob.requiredSkills.includes('Supply-based scheduling'));
    assert.ok(ascpJob.preferredCertifications.includes('Oracle Certified Specialist'));

    // Step 3: Verify email destination for application resume
    assert.strictEqual(ascpJob.applicationEmail, 'Info@plecosolutions.com');
    assert.strictEqual(COMPANY_METADATA.email, 'Info@plecosolutions.com');
  });

  it('Scenario 5: Senior Demantra Implementation Specialist Applicant Journey', () => {
    const session = createScenarioSession('/');

    // Step 1: Consultant navigates to /careers
    session.navigate('/careers');

    // Step 2: Inspect Demantra Consultant requirements
    const demantraJob = CAREER_OPENINGS.find(j => j.id === 'demantra-consultant');
    assert.ok(demantraJob);
    assert.strictEqual(demantraJob.minExperienceYears, 4);
    assert.ok(demantraJob.requiredSkills.some(s => s.includes('Demand Planning and Sales & Operations Planning')));
    assert.ok(demantraJob.preferredCertifications.includes('Oracle Demantra Implementation Specialist'));

    // Step 3: Inspect headquarters location
    const hq = COMPANY_METADATA.headquarters;
    assert.strictEqual(hq.city, 'Carrollton');
    assert.strictEqual(hq.state, 'TX');
    assert.strictEqual(hq.zip, '75007');
  });

  it('Scenario 6: Multi-Device Responsive Enterprise Journey (Mobile -> Tablet -> Desktop)', () => {
    const session = createScenarioSession('/');

    // Step 1: Start on Mobile Viewport (375px)
    session.setViewport(375);
    session.toggleMobileDrawer(true);
    assert.strictEqual(session.mobileDrawerOpen, true);

    // Step 2: Browse Services via Mobile Drawer
    session.navigate('/services');
    assert.strictEqual(session.mobileDrawerOpen, false); // Drawer closes on navigate

    // Step 3: Switch to Tablet Viewport (768px), browse Production Planning
    session.setViewport(768);
    session.navigate('/production-planning');
    const pp = SOLUTIONS_PORTFOLIO.find(s => s.id === 'production-planning');
    assert.ok(pp.keyCapabilities.some(k => k.includes('drag-and-drop')));

    // Step 4: Switch to Desktop Workstation (1280px), submit RFP
    session.setViewport(1280);
    session.navigate('/contact');
    session.inputFormField('name', 'Claire Beaumont');
    session.inputFormField('email', 'cbeaumont@automotive-tier1.com');
    session.inputFormField('subject', 'Production Scheduling Enterprise RFP');
    session.inputFormField('message', 'We are requesting formal proposals for finite capacity scheduling implementation across 6 plant locations.');
    const result = session.submitForm();

    assert.strictEqual(result.isValid, true);
    assert.strictEqual(session.formState.successNotification, true);
    assert.strictEqual(session.viewport.width, 1280);
  });

  it('Scenario 7: Global Order Promising & Real-Time Fulfillment Evaluator Journey', () => {
    const session = createScenarioSession('/order-fulfillment');

    // Step 1: Inspect 24x7 Order Promising capabilities
    const of = SOLUTIONS_PORTFOLIO.find(s => s.id === 'order-fulfillment');
    assert.ok(of.coreTechnologies.includes('Oracle Global Order Promising (GOP)'));
    assert.ok(of.coreTechnologies.includes('Oracle Distributed Order Orchestration (DOO)'));
    assert.ok(of.keyCapabilities.some(k => k.includes('Available to Promise (ATP)')));
    assert.ok(of.keyCapabilities.some(k => k.includes('Capable to Promise (CTP)')));
    assert.ok(of.keyCapabilities.some(k => k.includes('Capable to Deliver (CTD)')));

    // Step 2: Cross-examine Network Planning for Collaborative Planning
    session.navigate('/network-planning');
    const np = SOLUTIONS_PORTFOLIO.find(s => s.id === 'network-planning');
    assert.ok(np.coreTechnologies.includes('Oracle Collaborative Planning (CP)'));

    // Step 3: Submit GOP consulting request
    session.navigate('/contact');
    session.inputFormField('name', 'Arthur Pendelton');
    session.inputFormField('email', 'apendelton@omnichannel-retail.com');
    session.inputFormField('subject', 'GOP ATP/CTP Implementation');
    session.inputFormField('message', 'Seeking Oracle GOP consulting to configure multi-warehouse 24x7 order promising rules.');
    const result = session.submitForm();

    assert.strictEqual(result.isValid, true);
    assert.strictEqual(session.formState.successNotification, true);
  });

  it('Scenario 8: Disaster Recovery & Risk Mitigation Lead Journey', () => {
    const session = createScenarioSession('/services');

    // Step 1: Review Managed Services pillar for risk mitigation
    const ms = CONSULTING_SERVICES.find(s => s.id === 'managed-services');
    assert.ok(ms.deliverables.some(d => d.includes('Post-implementation risk mitigation')));
    assert.ok(ms.focus.includes('24x7'));

    // Step 2: Check Network Planning for contingency modeling
    session.navigate('/network-planning');
    const np = SOLUTIONS_PORTFOLIO.find(s => s.id === 'network-planning');
    assert.ok(np.keyCapabilities.some(k => k.includes('contingency planning against unplanned interruptions and natural disasters')));

    // Step 3: Verify direct phone contact (+1 650 533-6649)
    assert.strictEqual(COMPANY_METADATA.phone, '+1 (650) 533-6649');

    // Step 4: Submit risk mitigation inquiry
    session.navigate('/contact');
    session.inputFormField('name', 'Gregory Stone');
    session.inputFormField('email', 'gstone@resilientsupply.org');
    session.inputFormField('subject', 'Supply Chain Network Risk Assessment');
    session.inputFormField('message', 'Inquiring about Strategic Network Optimization contingency simulation models for geopolitical risks.');
    const result = session.submitForm();

    assert.strictEqual(result.isValid, true);
    assert.strictEqual(session.formState.successNotification, true);
  });

});
