# SECTION 03: ARCHITECTURAL AND TECHNOLOGY STANDARDS

## 03.1. THE GOLD STANDARD TECHNOLOGY LOCK
You are prohibited from relying on deprecated, unmaintained, or legacy frameworks. Unless a conflicting legacy system is explicitly dictated by the user, you must construct the solution utilizing the version-locked technology matrices.

Closure clause [MANDATORY]: Matrices A through G are the exhaustive approved set. A capability not covered by any matrix selects the most conservative widely-adopted option, and you must record the selection in the Override Ledger (Section 00.4). Silent substitution is a critical failure.

Legacy containment clause: when the user dictates a conflicting legacy system, you must comply within an isolation boundary — adapters in the infrastructure layer, no legacy types leaking past it (Section 03.9) — and record the boundary in the audit. Compliance with a dictated stack never licenses abandoning the layering, security, or verification sections of this protocol.

## 03.2. MATRIX A: FRONTEND ECOSYSTEM (TYPESCRIPT)
- **Core Framework:** Next.js (App Router paradigm) or Vite with React. You must select Next.js when the objective requires SSR, SEO, or complex routing; you must select Vite for pure client-side applications and internal tools.
- **Styling Layer:** Tailwind CSS natively integrated. You must extract repeated utility clusters into components rather than duplicating class strings.
- **Component Primitives:** Radix UI or strictly typed Headless UI frameworks (a11y compliance is mandatory). Shadcn UI is approved.
- **State Management:** Zustand (for global client state), TanStack Query / React Query (for server state synchronization and caching). You must never place server data in Zustand; TanStack Query owns all server state (Section 06.3).
- **Data Validation:** React Hook Form coupled intimately with Zod schemas. Types must be inferred from the schemas, and in full-stack TypeScript the same schemas must be shared with the API layer (Section 06.4).
- You must enable strict TypeScript: `strict: true`, no implicit `any`, no suppressed null checks.
- You must configure path aliases from the topology root (`@/`); relative imports crossing slice boundaries are a critical failure (Section 03.10).

## 03.3. MATRIX B: BACKEND ECOSYSTEM (TYPESCRIPT / NODE.JS)
- **API Runtime:** Fastify or Hono (prioritizing edge compatibility and execution velocity). You must select Fastify for plugin-heavy Node services; you must select Hono for edge runtimes and workers.
- **Data Persistence (ORM):** Drizzle ORM or Prisma (strictly typed models). You must select Drizzle when SQL control and migration transparency dominate; you must select Prisma when schema-first velocity dominates. You must never include both in one repository.
- **Database Engine:** PostgreSQL (default) or SQLite (for edge/embedded).
- **Security Middleware:** Helmet, CORS allowlists, and rate limiters over Redis.
- **Authentication:** Lucia Auth or Auth.js.
- **Asynchronous Processing:** BullMQ backed by Redis. You must implement idempotent handlers, exponential backoff, and a dead-letter queue (Section 08.6).
- You must define routes schema-first with JSON Schema validation and plugin encapsulation under Fastify.
- You must isolate worker processes from HTTP processes in deployment topology; a process serving both is acceptable only below defined load, recorded in configuration.

## 03.4. MATRIX C: BACKEND ECOSYSTEM (PYTHON — AI/DATA CONTEXTS)
- **API Runtime:** FastAPI (strict ASGI compliance). You must inject auth and configuration through FastAPI dependencies.
- **Data Validation:** Pydantic v2 (strict mode enabled).
- **Data Persistence:** SQLAlchemy 2.0 (async engine required) with explicit transaction boundaries (Section 04.6).
- **Background Task Processing:** Celery or ARQ. Tasks must be idempotent with `acks_late` and an explicit retry policy.
- You must commit lockfiles (uv or poetry) and gate CI on ruff and mypy strict.
- You must separate model inference code from API code into service modules; route handlers orchestrate, they never embed model logic (Section 03.9).

## 03.5. MATRIX D: DEVOPS AND INFRASTRUCTURE
- **Containerization:** Multi-stage Dockerfiles enforcing minimal base images (e.g., Alpine or Distroless) with a `builder` to `runner` stage separation, digest-pinned bases, and non-root runtime users (Section 02.6).
- **Orchestration:** Docker Compose for local environments; every service carries a healthcheck wired to Section 08.4 endpoints.
- **CI/CD:** GitHub Actions with explicit stage gates in fixed order — lint, typecheck, test, build — fail-closed, with artifact upload on success. Every workflow action is pinned by commit SHA (Section 02.3 A08).
- **Local bootstrap:** `docker compose up` plus one seed command must yield a running system; multi-step manual setup procedures are a critical failure.

## 03.5.1. ENVIRONMENT PARITY
- You must keep development, CI, and production configurations derived from the same sources (Section 03.11); environment-specific divergence is limited to values, never structure.
- You must run the same database engine in every environment; a substitute engine in CI invalidates migration and integration test results (Section 04.9).
- You must pin the exact same dependency versions in every environment through committed lockfiles (Section 02.3 A06).

## 03.6. MATRIX E: VERIFICATION TOOLING
- **TypeScript unit and component tests:** Vitest with Testing Library.
- **TypeScript route integration:** Fastify `inject` or `supertest` against real database fixtures (Section 07.2).
- **End-to-end:** Playwright for critical user journeys only.
- **Python:** pytest with pytest-asyncio and httpx ASGI transport.
- **Typecheck gates:** `tsc --noEmit` for TypeScript; mypy strict for Python.
- **Lint gates:** ESLint with typescript-eslint strict profile; ruff for Python. Lint configuration is committed, not inherited from global installs.

## 03.7. MATRIX F: OBSERVABILITY TOOLING
- **Structured logging:** pino (TypeScript) or structlog (Python) emitting JSON lines (Section 08.1).
- **Tracing:** OpenTelemetry SDK with W3C trace context propagation across services and job payloads (Section 08.3).
- **Health endpoints:** framework-native `/healthz` and `/readyz` implementations per Section 08.4.
- **Metrics transport:** OpenTelemetry metrics pipeline or provider-native exporters; direct-to-vendor SDK calls inside business code are prohibited.

## 03.8. MATRIX G: AI/LLM INTEGRATION TOOLING
- **Invocation layer:** official provider SDKs or the Vercel AI SDK as the unified abstraction (Section 09.2).
- **Vector storage:** pgvector extension on PostgreSQL for embedding storage and retrieval (Section 09.7).
- **Accounting:** provider token-usage APIs surfaced into the cost line of `<system_audit>` (Section 09.4).
- **Guardrails layer:** schema-validated structured output at the service boundary (Section 09.2); no separate guardrail vendor is introduced when the typed-interface discipline of Section 09.1 is enforced.

## 03.9. LAYERED ARCHITECTURE AND DEPENDENCY DIRECTION
You must organize every generated system into four layers [MANDATORY]:
1. **Interface layer:** HTTP controllers, route handlers, UI components.
2. **Application layer:** service logic, transaction script, job handlers.
3. **Domain layer:** entities, value objects, domain validation. The domain layer must remain free of framework imports.
4. **Infrastructure layer:** database connections, external SDK clients, mailers, message brokers.

- Dependencies must point strictly inward: Interface may depend on Application and Domain; Application may depend on Domain and Infrastructure through typed ports; Domain depends on nothing.
- Upward and cross-slice imports are prohibited; a violation is a critical failure.
- Frontend feature organization must mirror server module boundaries (one feature directory per domain slice).
- You must verify layer direction as part of the defect scan (Section 10.4): an import from a lower layer to a higher layer is a structural defect.
- Cross-slice data access goes through the owning slice's application service, never by reaching into another slice's repository; shared reads use a query defined in the owning slice.

## 03.10. DIRECTORY TOPOLOGY MANDATE
You must conform the Phase 1 directory tree (Section 11.1) to the canonical skeletons:

- **Matrix A / B full-stack:** `src/app` (routes), `src/components` (shared UI), `src/features/<domain>` (vertical slices), `src/server/modules/<domain>` (server logic per slice), `src/server/infrastructure/database/connection.ts` (the canonical connection module of Section 04.7), `src/lib` (cross-cutting utilities), `src/db` (migrations and schema).
- **Matrix C services:** `app/api` (routers), `app/domain` (entities and logic), `app/infra` (SQLAlchemy models, clients), `app/jobs` (Celery/ARQ tasks), `alembic/` (migrations), `tests/` mirroring `app/`.

You must not invent divergent topologies for standard systems; deviations require an Override Ledger entry.

## 03.10.1. MONOREPO TOPOLOGY
- When a single repository contains both a Matrix A frontend and a Matrix B/C backend, you must structure it as `apps/web`, `apps/api`, and `packages/shared` [CONDITIONAL: full-stack monorepo].
- You must place shared validation schemas and types in `packages/shared`, imported by both applications; schema duplication across apps is a critical failure.
- You must keep one lockfile at the repository root and one CI pipeline whose stage gates cover every app.
- You must never share server-only modules into the web app's import graph; the shared package is isomorphic by construction.

## 03.11. CONFIGURATION AND ENVIRONMENT CONTRACT
- You must define one typed configuration module per service as the single consumer of environment variables [MANDATORY] (Section 02.4, Section 04.7); scattered `process.env` reads outside this module are a critical failure.
- You must validate the configuration schema at process start and fail fast on missing or malformed keys; discovery of a missing key at first use is a critical failure.
- You must mirror every configuration key into `.env.example` with a dummy value and a format comment (Section 11, Phase 2).
- You must separate environments by configuration source only; environment-specific code branches (`if (env === 'production')` logic forks) are prohibited beyond logging verbosity and feature flags.
- You must default every optional key to an explicit value in the schema; implicit `undefined` defaults are prohibited.
- You must namespace keys by service prefix (`WEB_`, `API_`, `WORKER_`) in multi-process systems; unprefixed shared names invite cross-wiring in the deployment environment.

## 03.12. ERROR AND EXCEPTION ARCHITECTURE
- You must define the error class hierarchy per domain module in the domain layer, with infrastructure errors defined in the infrastructure layer (Section 08.2) [MANDATORY].
- You must translate, never leak: infrastructure exceptions crossing into the application layer are wrapped into typed application errors carrying the original as cause.
- You must map every error class to its HTTP status exactly once, in the central error mapper (Section 05.5).
- You must reserve a single panic-equivalent path per runtime for unrecoverable startup failures; mid-request panics are prohibited.
- You must never surface raw provider or driver error codes to callers: every external error is translated into the taxonomy at its boundary crossing (Section 08.2); pass-through codes couple the API contract to vendor internals.

## 03.13. MODULE INVARIANTS
- You must select exclusively from Matrices A through G or log the deviation (03.1).
- You must enforce inward-only dependency direction across the four layers (03.9).
- You must never mix two ORMs in one repository (03.3).
- You must conform directory trees to the canonical skeletons (03.10).
- You must pin exact versions in every manifest (cross-ref 02.3 A06).
- You must centralize configuration in one validated module per service (03.11).
- You must define errors per the layer-owned hierarchy and map them exactly once (03.12).
