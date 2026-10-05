# SECTION 08: OBSERVABILITY AND ERROR HANDLING STANDARDS

## 08.1. STRUCTURED LOGGING MANDATE
- You must emit logs as structured JSON through pino (TypeScript) or structlog (Python) per Matrix F [MANDATORY].
- You must never deliver code containing `console.log` or bare `print` for operational logging; debuggers aside, the structured logger is the only output channel.
- Every log line must carry: `timestamp` (ISO 8601 UTC), `level`, `message`, `request_id` or `job_id`, and `module`.
- You must exclude PII, tokens, and secrets from log lines [MANDATORY] (Section 02.3 A09).
- You must sanitize free-text user input before it enters a log line to prevent log forging (Section 02.3 A09).
- You must define the logger once per process at the infrastructure layer and inject it; per-module ad-hoc logger construction with divergent configuration is a critical failure (Section 03.9).
- You must bound logged free-text fields (truncation at a configured byte ceiling); unbounded user-derived content in logs is both a cost and a forging vector.

## 08.2. ERROR TAXONOMY AND PROPAGATION
You must classify every error into exactly one of three classes [MANDATORY]:
1. **Domain errors:** expected business-rule violations (insufficient funds, duplicate resource). Mapped to `4xx` through the error contract of Section 05.5.
2. **Validation errors:** boundary schema rejections. Mapped to `422` with field-level details.
3. **Infrastructure errors:** unexpected failures (database, network, provider). Mapped to `5xx`, alert-worthy, and free of internal detail in responses.

- You must define typed error classes per domain module carrying machine-readable codes consumed by the central error mapper (Section 05.5).
- You must wrap-and-annotate at layer boundaries: an error crossing a layer gains the layer's context, never replaces the original.
- You must never emit an empty catch block [MANDATORY]; every caught error is handled, logged, or re-annotated and rethrown. Silently swallowed errors are a critical failure.
- You must apply one error style per codebase [DEFAULT]: exceptions under Fastify/FastAPI conventions; Result types only when the governing matrix dictates.
- You must distinguish expected domain errors from infrastructure errors in logs by level: domain at `INFO`, infrastructure at `ERROR` (Section 08.8); logging an expected `4xx` at `ERROR` level pollutes the alerting signal.

## 08.3. CORRELATION AND TRACING
- You must generate a request ID at the edge when absent, propagate it through every layer and log line [MANDATORY].
- You must propagate W3C trace context across service-to-service calls and job payloads through the OpenTelemetry SDK (Matrix F).
- You must log job context (job ID, queue, attempt count) from BullMQ/Celery workers on start, completion, and failure.
- You must attach the correlation identifier to error responses for support triage (Section 05.5).
- You must propagate the request ID into background jobs enqueued during the request, preserving the causal chain from HTTP entry to asynchronous completion.

## 08.4. HEALTH ENDPOINTS
- You must expose `/healthz` (liveness: process is up) and `/readyz` (readiness: dependencies reachable — database, Redis) on every server [MANDATORY].
- You must wire Docker Compose healthchecks to the readiness endpoint (Section 03.5).
- You must keep health endpoints unauthenticated and free of dependency detail beyond reachability booleans.
- You must cache readiness probe results for a bounded interval; dependency hammering through probe traffic is a critical failure.
- You must exclude health endpoints from request metrics cardinality; a dedicated counter per endpoint class replaces per-route labels (Section 08.5).

## 08.5. METRICS BASELINE
- You must instrument every endpoint with the RED method [MANDATORY]: request rate, error rate, and duration histogram.
- You must expose queue depth and job age for background workers.
- You must track database pool saturation (active/idle/waiting).
- You must count business-level events (signups, payments) as explicit counters, not derived from logs.
- You must label metrics with bounded cardinality dimensions (route template, status class); unbounded labels (user ID, full URL) are a critical failure.
- You must report histogram buckets, not averages: p50 and p99 from cumulative histograms; an averaged latency metric hides the tail and is a critical failure on user-facing endpoints.

## 08.6. BACKGROUND JOB RELIABILITY
- You must implement job handlers idempotently [MANDATORY]; a retried job must never duplicate side effects (Section 04.6).
- You must configure exponential backoff with jitter and a maximum attempt count on every queue.
- You must route exhausted jobs to a dead-letter queue and isolate poison messages for inspection.
- You must bound every job with a runtime deadline.
- You must record job lifecycle events (enqueued, started, succeeded, failed, dead-lettered) as structured logs with the job ID (Section 08.3).
- You must make enqueue transactional with its triggering write (outbox pattern) or explicitly document the at-least-once contract and its duplicate handling (Section 05.9).

## 08.7. GRACEFUL DEGRADATION AND SHUTDOWN
- You must implement the SIGTERM sequence [MANDATORY]: stop intake, drain in-flight requests and jobs, close database pools, exit.
- You must set explicit timeouts on every outbound call; an unbounded external call is a critical failure.
- You must apply a circuit breaker with a deterministic fallback on every external dependency call path (Section 09.5).
- You must degrade non-critical features independently; a failed auxiliary dependency must never fail the core request path.
- You must define the fallback content for every degradable feature at design time; runtime improvisation of fallbacks is prohibited.
- You must bound the drain window in configuration and force-exit after it; an unbounded drain turns every deploy into an outage.

## 08.7.1. ALERTING BASELINES
- You must define alert conditions on: error rate threshold breach, p99 latency threshold breach, queue depth sustained above ceiling, dead-letter queue population above zero, and health readiness flapping [CONDITIONAL: operated system].
- You must state every threshold as a numeric value with a time window (e.g., 5 percent error rate over 5 minutes).
- You must route alerts to the on-call channel defined in the runbook artifact; alerts without a documented recipient are prohibited.
- You must pair every alert with a runbook entry: the alert's meaning, its likely causes, and its first diagnostic step; an alert requiring interpretation is noise.

## 08.8. LOG LEVEL AND SAMPLING POLICY
- You must assign every log statement a level by this taxonomy [MANDATORY]: `ERROR` for user-visible failures requiring action; `WARN` for degraded or retried operations; `INFO` for state transitions and request completion; `DEBUG` for development diagnostics stripped from production output.
- You must never log at `ERROR` for expected domain rejections; an expected `4xx` outcome logs at `INFO` with its error code (Section 08.2).
- You must sample high-frequency `INFO` events when volume degrades the pipeline, with the sampling rate in configuration.
- You must log one completion line per request: method, route, status, duration, request ID. One line, not a scatter of fragments.
- You must never sample `ERROR` and `WARN` lines; sampling applies to volume-driven `INFO` and `DEBUG` only.

## 08.9. MODULE INVARIANTS
- You must log structured JSON with correlation IDs and zero secrets (08.1, 08.3).
- You must classify every error into the three-class taxonomy and route it through the central mapper (08.2).
- You must expose `/healthz` and `/readyz` on every server (08.4).
- You must never emit an empty catch block or an unbounded external call (08.2, 08.7).
- You must make job handlers idempotent with backoff and a dead-letter path (08.6).
- You must apply the log level taxonomy and one completion line per request (08.8).
