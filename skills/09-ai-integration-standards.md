# SECTION 09: AI/LLM INTEGRATION STANDARDS

## 09.1. PROBABILISTIC COMPONENT CONTAINMENT
- You must place every LLM invocation behind a deterministic typed service interface [MANDATORY] (Section 01.4): typed request, typed response, explicit failure mode.
- You must never invoke an LLM inside an open database transaction.
- You must exclude LLM calls from the synchronous critical path unless a deadline and fallback are defined [DEFAULT: enqueue the task and complete asynchronously].
- Probabilistic output must never flow into schema design, transaction boundaries, or authorization decisions.
- You must define the typed interface's failure semantics as part of its signature: the caller can always distinguish `ok`, `invalid-output`, and `provider-unavailable` without inspecting provider-specific errors.
- You must version the interface contract itself: input and output schema changes are additive within a version, and every consuming feature compiles against the versioned types.

## 09.2. PROVIDER INVOCATION DISCIPLINE
- You must construct provider clients through environment-configured factories (Section 02.4); inline keys or hardcoded endpoints are a critical failure.
- You must pin the model identifier in validated configuration; floating aliases (`latest`, `-preview`) are prohibited.
- You must set `timeout` and `max_tokens` explicitly on every call.
- You must set temperature to 0 for classification and extraction tasks [DEFAULT]; every deviation is recorded in the Override Ledger.
- You must validate structured outputs with Zod or Pydantic and handle parse failures explicitly (Section 09.4); trusting raw provider output is a critical failure.
- You must implement a bounded repair-retry loop on parse failure: re-prompt with the validation error, maximum two retries, then fall back (Section 09.5); an unbounded repair loop is a critical failure.
- You must log provider, model, latency, and token counts on every invocation through the structured logger (Section 08.1); an unlogged invocation is unauditable spend.

## 09.3. PROMPT CONSTRUCTION AND INJECTION DEFENSE
- You must store prompts as versioned repository artifacts [MANDATORY]; inline string concatenation of prompts inside business logic is a critical failure.
- You must place user-supplied content exclusively in the user role, never concatenated into the system or developer role.
- You must treat model output and tool results as untrusted input: validated before use, and never passed to shell execution, SQL, file system writes, or eval.
- You must delimit untrusted content with explicit boundaries and instruct the model to treat delimited content as data, not instructions.
- You must add every prompt artifact to the evaluation baseline (Section 09.6).
- You must escape or randomize the delimiters themselves per request when the untrusted content can plausibly contain the delimiter string; static delimiters are a critical failure for user-facing chat surfaces.

## 09.4. CONTEXT AND TOKEN ECONOMY
- You must account a per-call token budget: input tokens, output tokens, and cost estimate.
- You must define the truncation priority explicitly when input can exceed the context window: which content class is dropped first, and what the floor is.
- You must record embedding chunk size and overlap as configuration, not magic numbers.
- You must add a cost line to `<system_audit>` whenever a probabilistic component is in scope (Matrix G).
- You must cache responses for deterministic prompts and repeated inputs; identical request plus identical model plus identical version must not re-bill.
- You must enforce a per-user and per-tenant spend ceiling in configuration; exceeding it degrades to the deterministic fallback (Section 09.5) rather than erroring the user flow.

## 09.4.1. STREAMING RESPONSE CONTRACT
- You must stream only when the consumer renders incrementally; buffered callers receive the complete response [CONDITIONAL: streaming UI present].
- You must handle mid-stream failure explicitly: emit the error to the consumer, log the partial state, never silently truncate.
- You must enforce the overall deadline across the stream, not per chunk.
- You must validate the aggregated streamed output against the structured schema before persistence, identical to non-streaming paths (Section 09.2).
- You must not persist partial content on failure: persistence happens after successful aggregation and validation, in one atomic step.

## 09.5. RETRY, FALLBACK, AND DETERMINISM
- You must retry only idempotent or incomplete-generation failures, with exponential backoff and jitter (Section 08.6); retrying a completed side effect is a critical failure.
- You must define the fallback chain [DEFAULT]: primary provider, fallback model, deterministic default response.
- You must never allow model output to execute destructive mutations directly [MANDATORY]. The pattern is generate, validate, confirm — where confirmation is a human gate or a deterministic rule-based gate. An LLM path that drops rows, deletes resources, sends messages to external systems, or moves money without the confirmation gate is a critical failure.
- You must surface probabilistic-origin data in the interface as such (generated-content labeling); presenting model output as verified fact is a critical failure.

## 09.6. EVALUATION BASELINE
- You must ship every probabilistic feature with a minimal evaluation set: representative inputs and expected-shape assertions, runnable in CI against mocked providers [MANDATORY].
- You must assert prompt artifacts against golden files; a prompt change without an eval update is a critical failure.
- You must surface evaluation results in the pipeline output (Section 11.1, Phase 4).
- You must include adversarial cases in every evaluation set: injection attempts in user content, malformed structured output, and refusal-triggering inputs.
- You must pin evaluation thresholds numerically (minimum pass rate) and fail CI below the threshold; advisory evaluation output without a gate is prohibited.
- You must version evaluation sets alongside the prompts they gate; an eval set and prompt from different versions produce meaningless verdicts.

## 09.7. VECTOR STORE STANDARDS
- You must store embeddings in pgvector on PostgreSQL (Matrix G) [DEFAULT].
- Every embedding row must record `model_id` and dimension.
- You must never query across mixed models or mixed dimensions; a migration between embedding models re-embeds the full corpus.
- You must keep the index type (HNSW) and distance metric consistent with the embedding model's training objective.
- You must record the source reference of every embedded chunk (table, row ID, byte range) so retrieval results cite their origin.
- You must filter by tenant and access class inside the vector query predicate, never after retrieval; post-filtering embeddings leaks cross-tenant counts.
- You must version embeddings by corpus revision: a source document update invalidates its chunks transactionally, not lazily on next read.

## 09.8. AGENT AND TOOL-USE SAFETY
- You must type and validate every tool/function-call schema at the boundary; a tool invocation with unvalidated arguments is a critical failure [CONDITIONAL: tool-calling present].
- You must cap the agent loop step count in configuration; an unbounded agentic loop is a critical failure.
- You must classify tools by destructiveness at definition time, and route destructive tools through the confirmation gate of Section 09.5.
- You must record an audit trail entry for every model invocation: input hash, output hash, latency, token counts, and cost (Section 08.1, Section 09.4).
- You must sandbox tool execution environments to the least privilege satisfying the tool's purpose.
- You must make every tool idempotent or explicitly tagged non-idempotent; the loop's retry policy consumes the tag (Section 08.6).

## 09.9. MODULE INVARIANTS
- You must contain every LLM call behind a typed deterministic interface, never inside a transaction (09.1).
- You must treat prompts as versioned artifacts and model output as untrusted input (09.3).
- You must enforce the generate-validate-confirm gate before any destructive mutation (09.5).
- You must ship evaluation sets with every probabilistic feature (09.6).
- You must pin models, timeouts, and token budgets in validated configuration (09.2, 09.4).
- You must cap agent loops, validate tool arguments, and audit every invocation (09.8).
