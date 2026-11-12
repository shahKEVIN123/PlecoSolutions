/**
 * E2E Testing Helpers & Simulation Utilities for Pleco Solutions
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import {
  CANONICAL_ROUTES,
  CONTACT_FORM_CONTRACT,
  DESIGN_TOKENS,
  COMPANY_METADATA
} from './spec_oracle.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const PROJECT_ROOT = path.resolve(__dirname, '..', '..');

/**
 * Checks if a relative path exists in the project workspace.
 */
export function checkFileExists(relPath) {
  const fullPath = path.join(PROJECT_ROOT, relPath);
  return fs.existsSync(fullPath);
}

/**
 * Reads a file relative to project root. Returns null if missing.
 */
export function readFileContent(relPath) {
  const fullPath = path.join(PROJECT_ROOT, relPath);
  if (!fs.existsSync(fullPath)) return null;
  return fs.readFileSync(fullPath, 'utf-8');
}

/**
 * Validates a Contact Form payload against the specification contract in PROJECT.md.
 * 
 * Contract:
 * - name: string, min 2 chars
 * - email: string, RFC 5322 regex
 * - subject: string, optional, min 3 chars if provided
 * - message: string, min 10 chars
 */
export function validateContactForm(payload = {}) {
  const errors = {};
  const { name, email, subject, message } = payload;

  // Name validation
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    errors.name = 'Name is required.';
  } else if (name.trim().length < CONTACT_FORM_CONTRACT.fields.name.minLength) {
    errors.name = `Name must be at least ${CONTACT_FORM_CONTRACT.fields.name.minLength} characters.`;
  }

  // Email validation
  if (!email || typeof email !== 'string' || email.trim().length === 0) {
    errors.email = 'Email is required.';
  } else if (!CONTACT_FORM_CONTRACT.fields.email.regex.test(email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  // Subject validation (optional, but if present must meet min length)
  if (subject !== undefined && subject !== null && subject !== '') {
    if (typeof subject !== 'string' || subject.trim().length < (CONTACT_FORM_CONTRACT.fields.subject.minLength || 3)) {
      errors.subject = `Subject must be at least ${CONTACT_FORM_CONTRACT.fields.subject.minLength || 3} characters.`;
    }
  }

  // Message validation
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    errors.message = 'Message is required.';
  } else if (message.trim().length < CONTACT_FORM_CONTRACT.fields.message.minLength) {
    errors.message = `Message must be at least ${CONTACT_FORM_CONTRACT.fields.message.minLength} characters.`;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Resolves a route path against the canonical routes table.
 * Normalizes trailing slashes and performs case-insensitive path lookup.
 */
export function resolveRoute(inputPath) {
  if (!inputPath) return null;
  let normalized = inputPath.trim();
  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }
  normalized = normalized.toLowerCase();

  return CANONICAL_ROUTES.find(r => r.path.toLowerCase() === normalized) || null;
}

/**
 * Derives canonical breadcrumbs for any given route.
 */
export function generateBreadcrumbs(inputPath) {
  const route = resolveRoute(inputPath);
  if (!route) return [];

  const crumbs = [{ label: 'Home', path: '/' }];

  if (route.path === '/') {
    return crumbs;
  }

  if (route.parentPath) {
    const parentRoute = resolveRoute(route.parentPath);
    if (parentRoute) {
      crumbs.push({ label: parentRoute.title, path: parentRoute.path });
    }
  }

  crumbs.push({ label: route.title, path: route.path });
  return crumbs;
}

/**
 * Classifies a viewport width in pixels into responsive tiers.
 */
export function classifyViewport(widthPx) {
  if (widthPx < DESIGN_TOKENS.breakpoints.tablet) return 'mobile';
  if (widthPx < DESIGN_TOKENS.breakpoints.laptop) return 'tablet';
  if (widthPx < DESIGN_TOKENS.breakpoints.desktop) return 'laptop';
  return 'desktop';
}

/**
 * Determines whether mobile drawer navigation is active for a given viewport width.
 */
export function shouldShowMobileDrawer(widthPx) {
  return widthPx < DESIGN_TOKENS.breakpoints.tablet; // < 768px
}

/**
 * Creates an in-memory simulated user session for E2E workload scenario execution.
 */
export function createScenarioSession(initialRoute = '/') {
  const session = {
    currentRoute: initialRoute,
    history: [initialRoute],
    viewport: { width: 1280, height: 800 },
    mobileDrawerOpen: false,
    formState: {
      fields: { name: '', email: '', subject: '', message: '' },
      submitted: false,
      validationErrors: {},
      successNotification: false
    },
    interactions: []
  };

  return {
    get currentRoute() {
      return session.currentRoute;
    },
    get history() {
      return [...session.history];
    },
    get viewport() {
      return { ...session.viewport };
    },
    get mobileDrawerOpen() {
      return session.mobileDrawerOpen;
    },
    get formState() {
      return JSON.parse(JSON.stringify(session.formState));
    },
    get interactions() {
      return [...session.interactions];
    },

    setViewport(width, height = 800) {
      session.viewport = { width, height };
      if (!shouldShowMobileDrawer(width)) {
        session.mobileDrawerOpen = false;
      }
      session.interactions.push({ type: 'RESIZE_VIEWPORT', width, height });
    },

    toggleMobileDrawer(forceState) {
      session.mobileDrawerOpen = forceState !== undefined ? forceState : !session.mobileDrawerOpen;
      session.interactions.push({ type: 'TOGGLE_DRAWER', open: session.mobileDrawerOpen });
    },

    navigate(targetPath) {
      const resolved = resolveRoute(targetPath);
      if (!resolved) {
        throw new Error(`Navigation failed: 404 Route Not Found for '${targetPath}'`);
      }
      session.currentRoute = resolved.path;
      session.history.push(resolved.path);
      // Close mobile drawer on navigation
      session.mobileDrawerOpen = false;
      session.interactions.push({ type: 'NAVIGATE', path: resolved.path });
      return resolved;
    },

    inputFormField(field, value) {
      session.formState.fields[field] = value;
      session.interactions.push({ type: 'FORM_INPUT', field, value });
    },

    submitForm() {
      const result = validateContactForm(session.formState.fields);
      session.formState.submitted = true;
      session.formState.validationErrors = result.errors;
      session.formState.successNotification = result.isValid;
      session.interactions.push({
        type: 'FORM_SUBMIT',
        isValid: result.isValid,
        errors: result.errors
      });
      return result;
    },

    resetForm() {
      session.formState = {
        fields: { name: '', email: '', subject: '', message: '' },
        submitted: false,
        validationErrors: {},
        successNotification: false
      };
      session.interactions.push({ type: 'FORM_RESET' });
    }
  };
}
