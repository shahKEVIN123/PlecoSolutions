# E2E Test Infra: Pleco Solutions Website Redesign

## Test Philosophy
- Opaque-box, requirement-driven derived strictly from `ORIGINAL_REQUEST.md` and live site specifications (`https://www.plecosolutions.com/`).
- Zero dependency on internal implementation details.
- Progressive testability: Verification operates from clean CLI / headless testing scripts inspecting built artifacts, routes, rendered DOM, links, text content, and responsiveness.
- Strict requirement verification: Zero missing text, zero hallucinated claims, zero broken links, perfect route matching across all 13 canonical routes.

## Test Architecture
- Test Runner: Node.js based E2E & component validation test runner using Vitest / standard assertions with JSDOM / headless DOM checks.
- Pass/Fail Semantics: Exit code 0 on all tests passing, non-zero on any failure.
- Directory Layout: `tests/e2e/`
  - `tier1_feature_coverage.test.js`
  - `tier2_boundary_corner.test.js`
  - `tier3_cross_feature.test.js`
  - `tier4_workload_scenarios.test.js`

## Feature Inventory Coverage Map
| # | Feature | Requirement Source | Tier 1 (>=5) | Tier 2 (>=5) | Tier 3 (Pairwise) | Tier 4 (Workload) |
|---|---------|-------------------|:------------:|:------------:|:-----------------:|:-----------------:|
| 1 | Navigation & Route Matching (13 routes) | R1, R4 | 13 | 5 | ✓ | ✓ |
| 2 | Verbatim Copy & Heading Fidelity | R1 | 15 | 5 | ✓ | ✓ |
| 3 | Core Consulting Services (4 pillars) | R1 | 5 | 5 | ✓ | ✓ |
| 4 | Solutions Portfolio (10 areas + 6 routes) | R1 | 10 | 5 | ✓ | ✓ |
| 5 | Enterprise Testimonials (3 quotes) | R1 | 5 | 5 | ✓ | ✓ |
| 6 | Career Profiles & Application (2 jobs) | R1 | 5 | 5 | ✓ | ✓ |
| 7 | Contact Info & Form Validation | R1, R2, R4 | 8 | 8 | ✓ | ✓ |
| 8 | Responsive Layout & Viewports | R2, R5 | 5 | 5 | ✓ | ✓ |
| 9 | Brand Identity, Logo & Visuals | R2, R3 | 5 | 5 | ✓ | ✓ |
| 10 | Performance & Build Integrity | R4, R5 | 5 | 5 | ✓ | ✓ |

## Coverage Goals
- Tier 1: ≥ 65 test cases covering all 10 feature areas in isolation.
- Tier 2: ≥ 50 test cases covering boundary values, empty inputs, edge cases, mobile drawer, email formats, long strings.
- Tier 3: ≥ 15 tests covering cross-feature interactions (routing -> contact navigation, solutions -> deep-dive anchor, testimonial -> customers route).
- Tier 4: ≥ 8 end-to-end user workload scenarios (Executive Evaluator flow, Prospective ASCP Hire flow, RFP Inquiry submission flow, Multi-device navigation flow).
