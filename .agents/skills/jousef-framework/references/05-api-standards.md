# SECTION 05: API DESIGN AND CONTRACT STANDARDS

## 05.1. PROTOCOL SELECTION
- You must default to REST over JSON [DEFAULT].
- You may expose RPC-style action endpoints under the routing conventions of 05.2.
- You must select GraphQL only under explicit user dictation, recorded in the Override Ledger.
- You must select WebSocket only for genuine server push; polling over REST remains the default for client refresh.
- You must justify protocol divergence in the audit with the latency or contract requirement that REST cannot satisfy; aesthetic preference is not a justification.

## 05.2. RESOURCE MODELING AND ROUTING
- You must name resources as plural kebab-case nouns [MANDATORY].
- You must cap resource nesting at two levels (`/accounts/:id/transactions`); deeper access uses direct resource routes with filter parameters.
- You must honor method semantics [MANDATORY]: GET is safe and idempotent; PUT is idempotent full replacement; POST is non-idempotent creation; PATCH is partial update; DELETE is idempotent.
- You must express custom verbs as `POST /resources/:id/actions/<verb>`.
- You must prefix public surfaces with `/v1`.
- You must never place sequential database identifiers in URLs (Section 04.1); external identifiers only.
- You must not encode authorization state in routes: an admin variant of a resource is a permission on the same route, not `/admin/resources` duplicating the surface.

## 05.3. REQUEST VALIDATION AT THE BOUNDARY
- You must validate every route's input with Zod, Fastify JSON Schema, or Pydantic before the handler executes [MANDATORY]; a handler reading unvalidated input is a critical failure.
- You must strip unknown fields on parse.
- You must return a structured `422` on validation failure with per-field machine-readable error paths (Section 05.5).
- You must validate query parameters, path parameters, headers, and body with equal rigor.
- You must bound request body size at the server configuration layer, below the framework default where the domain permits.
- You must normalize validated input exactly once at the boundary (trim, case-fold identifiers); downstream layers consume the normalized form without re-normalization.
- You must reject unknown query parameters on strict surfaces: a silently ignored filter parameter is a client integration trap (fail loud, not quiet).

## 05.4. RESPONSE CONTRACT
- You must define an explicit response DTO per endpoint [MANDATORY]; serializing ORM rows directly is a critical failure.
- You must emit timestamps as ISO 8601 UTC strings.
- You must wrap list responses in the pagination envelope `{ "data": [...], "nextCursor": string | null }` (Section 02.2).
- You must cap `limit` at a configured maximum per endpoint; a client-requested limit above the cap is clamped, never honored (Section 02.2).
- You must apply the status-code matrix [MANDATORY]:
  - `200` — successful retrieval or update.
  - `201` + `Location` header — resource creation.
  - `202` + `Location` header — accepted asynchronous processing.
  - `204` — successful deletion or empty response.
  - `400` — malformed request syntax.
  - `401` — unauthenticated.
  - `403` — authenticated but not permitted (Section 05.6).
  - `404` — resource does not exist or is hidden from the caller.
  - `409` — conflict with current state (duplicate, stale version).
  - `422` — semantic validation failure.
  - `429` — rate limit breach with `Retry-After` (Section 02.7).
  - `500` — unhandled infrastructure failure, no internal detail (Section 08.2).
- You must never return `200` with an error body.
- You must emit `Cache-Control: no-store` on authenticated responses by default; cacheable public resources opt in explicitly.

## 05.5. ERROR RESPONSE CONTRACT
- You must emit the uniform error envelope across the entire API [MANDATORY]: `{ "error": { "code": string, "message": string, "details": object | null } }`.
- You must enumerate error codes as machine-readable constants per domain module; ad-hoc free-text codes are prohibited.
- You must exclude stack traces, SQL fragments, and internal messages from responses (Section 02.3 A05).
- You must map errors centrally through one global error mapper at the framework layer (Fastify `setErrorHandler`, FastAPI exception handlers), defined in the interface layer and consuming the error taxonomy of Section 08.2.
- You must include the correlation identifier in the envelope as `request_id` on `5xx` responses; without it, triage cannot join the response to its logs (Section 08.3).
- You must keep error `message` values stable per code: clients branch on `code`, display `message`; changing a message text is not a breaking change, changing a `code` is.

## 05.6. AUTHENTICATION AND AUTHORIZATION INTERFACES
- You must authenticate machine APIs with bearer tokens and browser clients with HTTP-only cookie sessions (Section 02.2).
- You must implement authorization as middleware or framework dependency, never inside individual handlers.
- You must enforce resource ownership in the query layer (Section 02.3 A01) through scoped `WHERE` clauses.
- You must preserve fixed `401`/`403` semantics [MANDATORY]: `401` for missing or invalid credentials; `403` for valid credentials without permission.

## 05.6.1. DEPRECIATION AND VERSION LIFECYCLE
- You must emit `Deprecation` and `Sunset` headers on endpoints scheduled for removal, with the removal date in the `Sunset` value [CONDITIONAL: public versioned API].
- You must maintain additive-only evolution within a major version: new fields optional, new endpoints additive, removals and renames only across major boundaries.
- You must document every breaking change in the version changelog artifact accompanying the release.
- You must never remove a deprecated endpoint while telemetry shows nonzero consumption; the `Sunset` date is a commitment, not a suggestion.

## 05.7. IDEMPOTENCY, CONCURRENCY, AND RETRY SEMANTICS
- You must require the `Idempotency-Key` header on every state-mutating POST exposed to clients or upstream services [MANDATORY] (Section 02.2, Section 04.6).
- You must implement optimistic concurrency on editable resources through `ETag` and `If-Match`; a stale `If-Match` returns `412` or `409` per the status matrix.
- You must emit `Retry-After` on every `429`.
- You must propagate deadlines on internal service-to-service calls.
- You must scope every idempotency key to the account plus endpoint; cross-account key collisions are a critical failure.
- You must return the original response body and status on replay, including the original error status; replay never re-executes side effects (Section 04.6).

## 05.8. CONTRACT DOCUMENTATION ARTIFACT
- You must derive API documentation from typed route schemas [MANDATORY] (Fastify JSON Schema routes, FastAPI auto-generated OpenAPI); hand-written API documentation must never be the source of truth.
- You must emit the schema definitions as part of the Phase 2 deliverables (Section 11.1).
- You must version the contract surface with the URI prefix (Section 05.2); within a version, changes are additive only.
- You must exercise generated contract documents in CI: the OpenAPI artifact parses, and every declared route resolves to an implemented handler; contract drift is a critical failure.

## 05.9. WEBHOOK AND EVENT EMISSION CONTRACTS
- You must sign every outbound webhook with HMAC over the serialized body, include a timestamp header, and document the verification steps for the receiving party [CONDITIONAL: outbound webhooks present].
- You must deliver webhooks through the background job system with retry, backoff, and a dead-letter path (Section 08.6); synchronous emission during a request is a critical failure.
- You must version webhook payloads (`X-Webhook-Version` header) and keep changes additive within a version.
- You must emit domain events with stable names (`account.created`, `payment.settled`) and schema-registered payloads; ad-hoc event names are prohibited.
- You must make event emission transactional with the state change it describes: an event for a rolled-back mutation is a lie, and a committed mutation without its event is a gap; outbox pattern or equivalent is mandatory.

## 05.10. MODULE INVARIANTS
- You must validate every input at the boundary before handler logic (05.3).
- You must emit DTOs, never raw ORM rows, and never `200` with an error body (05.4).
- You must apply the uniform error envelope and the central error mapper (05.5).
- You must enforce ownership in the query layer and fixed 401/403 semantics (05.6).
- You must require idempotency keys on mutating POSTs (05.7).
- You must sign, version, and asynchronously deliver outbound webhooks (05.9).
