# SECTION 07: TESTING AND VERIFICATION STANDARDS

## 07.1. VERIFICATION SCOPE MANDATE
An implementation is incomplete until the coverage gates of Section 07.3 exist and pass. You are prohibited from emitting `[SYSTEM_EXECUTION_COMPLETE]` before those gates are satisfied (cross-ref Section 10.3, Section 11.2). Emitting the termination sentinel with failing or missing gates is a critical failure.

Tests are deliverables, not accessories: the test files belong to the Phase 1 deliverable inventory (Section 01.2) and the Phase 3 file sequence (Section 11.1), and tree-to-output parity (Section 10.3) counts them. A deliverable set without its tests is incomplete by construction.

## 07.2. TEST STRATIFICATION
You must stratify tests across four levels [MANDATORY]:
1. **Unit tests (the majority of the suite):** pure domain logic, validation schemas, utility functions. No I/O.
2. **Integration tests:** route handlers plus real database fixtures through Fastify `inject` / `supertest` / httpx ASGI transport (Matrix E).
3. **Component tests:** interactive components through Testing Library against the accessibility tree, not implementation details.
4. **End-to-end tests (Playwright):** critical user journeys only — authentication, payment, and core mutation paths. E2E as primary coverage is prohibited.

Target composition [DEFAULT]: 70 percent unit, 20 percent integration, 10 percent component and E2E combined. A suite inverted toward E2E is a design defect, not a testing thoroughness signal.

## 07.3. MANDATORY COVERAGE GATES
Before termination, tests must exist and pass for each of the following. Each gate is verified in the `<compliance_report>` (Section 10.5).
- **G-1 Authentication and authorization, including negative paths:** `401` unauthenticated and `403` unauthorized on every protected endpoint (Section 05.6).
- **G-2 Validation rejection:** every route's schema rejects invalid payloads with `422` and field-level details (Section 05.3).
- **G-3 Pagination boundaries:** first page, next cursor, final page with `nextCursor: null`, and the empty collection (Section 05.4).
- **G-4 Idempotency replay:** a duplicate `Idempotency-Key` returns the original result without duplicate side effects (Section 05.7).
- **G-5 Transaction rollback:** a mid-operation failure leaves no partial state (Section 04.6).
- **G-6 Concurrent-edit conflict:** a stale version or `If-Match` is rejected (Section 05.7).
- **G-7 Error mapper shapes:** every error class serializes to the uniform envelope (Section 05.5, Section 08.2).
- **G-8 Migration execution:** every migration applies forward, and declared-reversible migrations roll back cleanly (Section 04.3).
- **G-9 Health and readiness:** `/healthz` returns liveness and `/readyz` reflects dependency reachability (Section 08.4).

## 07.4. TEST STRUCTURE
- You must structure every test as Arrange-Act-Assert.
- You must name tests as behavior sentences: `it('returns 422 when the payload omits the email field')`.
- You must never share mutable state between tests; each test builds its world through factories.
- You must generate deterministic data through factories, never ad-hoc literals duplicated across files.
- You must exclude live network from unit tests; external systems appear only in integration tests through the mocking policy of 07.5.
- You must isolate database tests through transactional rollback per test or disposable containers.
- You must assert on observable behavior (status codes, emitted events, persisted state), never on internal call sequences; assertion on mock call order couples tests to implementation and is prohibited.
- You must keep one logical assertion cluster per test: a test verifying creation, validation, and notification in one body is three tests.

## 07.5. MOCKING POLICY
- You must mock only at architectural boundaries [MANDATORY]: external HTTP APIs, provider SDKs, the clock, and randomness sources.
- You must never mock the module under test or its direct domain collaborators.
- You must record contract fixtures for external APIs (schema-validated canned responses) rather than hand-invented shapes.
- You must mock LLM providers in CI unconditionally (Section 09.6).
- You must reset every mock explicitly between tests; implicit carryover is a critical failure.
- You must not use snapshot tests except for generated artifacts (OpenAPI output, compiled assets).
- You must exercise at least one integration test per external dependency against the real service contract (sandbox or recorded replay) per release; mocks alone drift from reality.

## 07.5.1. PROPERTY-BASED TESTS
- You must cover pure domain invariants with property-based tests where the domain defines algebraic properties (round-trip serialization, monetary conservation, ordering totality) [CONDITIONAL: such invariants exist].
- You must bound property iterations deterministically (fixed seed) so failures reproduce byte-exact.
- You must shrink reported counterexamples to the minimal reproducing input before emitting them.
- You must treat a property failure identically to an example failure: it blocks the termination sentinel (Section 07.1) until the invariant is restored or the Override Ledger records the accepted deviation.

## 07.6. RUNNER CONFIGURATION
- You must commit Vitest/pytest configuration with strict defaults (no loose globs, no silent skips).
- You must run identical test commands locally and in GitHub Actions (Matrix D).
- You must quarantine a flaky test only with an explicit justification entry in the test manifest — a skipped test without a linked justification violates Section 00.3's placeholder prohibition.
- You must fail the build on any test failure; red builds never deploy (Section 03.5).
- You must set explicit per-suite timeouts; a test without a timeout inherits the global ceiling, and the global ceiling is finite.
- You must order test execution independently parallelizable: no test's outcome depends on execution order; `--sequence.shuffle` (or equivalent) must pass clean.

## 07.6.1. TEST DATA FACTORIES
- You must build test data through named factory functions per entity, with overridable defaults [MANDATORY].
- You must never duplicate entity literal constructions across test files; a repeated literal is an extraction signal.
- You must derive factory defaults from the schema definitions so schema evolution breaks factories loudly at compile time, not silently at runtime.
- You must expose factories as build-only (no implicit persistence) and persistence-capable variants; tests state explicitly whether they seed the database, keeping unit tests I/O-free (Section 07.4).

## 07.7. EDGE CASE CATALOG
You must cover the following scenarios in the test suite where the domain applies; each applicable row is a compliance-gate child of G-2 through G-7:
- Empty and null inputs at every boundary field.
- Boundary values: minimum, minimum plus one, maximum, maximum minus one, maximum plus one.
- Oversized payloads above the configured request limit.
- Unicode and multi-byte input, including right-to-left text and combining marks.
- Concurrent mutation of the same resource (Section 05.7).
- Timeout and retry paths on external dependencies with mocked boundaries (Section 07.5).
- Timezone boundaries: UTC midnight, DST transitions, offset crossings (Section 04.8).
- Currency rounding at minor-unit edges (Section 04.8).
- Permission denial on every ownership boundary (Section 02.3 A01).
- Idempotent replay of every mutating endpoint (Section 05.7).
- Pagination cursor forgery and expired cursors (Section 04.4).
- Rate-limit breach returning `429` with `Retry-After` (Section 02.7).
- Malformed content types and empty request bodies reaching the parser.

## 07.8. MODULE INVARIANTS
- You must not terminate before every 07.3 gate passes (07.1).
- You must stratify the suite across the four levels with unit tests as the majority (07.2).
- You must mock only at architectural boundaries and never the module under test (07.5).
- You must keep tests deterministic: no live network in unit scope, no shared mutable state (07.4).
- You must fail the build on any test failure (07.6).
- You must cover the edge case catalog rows wherever the domain applies (07.7).
