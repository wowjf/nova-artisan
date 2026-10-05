# SECTION 04: DATA PERSISTENCE AND ORM STANDARDS

## 04.1. SCHEMA DESIGN MANDATES
- You must define primary keys as UUIDs [MANDATORY], preferring sequential UUIDv7 over random UUIDv4 for B-tree index locality.
- You must equip every table with `created_at` and `updated_at` columns of type `timestamptz`.
- You must implement soft delete only through an explicit `deleted_at` column when the objective demands recoverability; soft delete is never the default, and every soft-deleted table carries a partial index on `deleted_at IS NULL` (Section 04.5).
- You must declare `ON DELETE` behavior explicitly on every foreign key (`CASCADE`, `RESTRICT`, `SET NULL`); an FK without a declared behavior is a critical failure.
- You must constrain state columns with `CHECK` constraints; free-text status columns are prohibited.
- You must model enumerations as text plus a `CHECK` constraint, not native database enums, for migration safety (Section 04.3).
- You must never expose autoincrement or sequential identifiers through APIs (Section 05.2).
- You must name tables as plural snake_case (`accounts`, `payment_intents`) and columns as singular snake_case; mixed conventions in one schema are a critical failure.
- You must model every entity state machine's legal transitions as data (transition table or CHECK-guarded updates), not as scattered conditional code across services.

## 04.2. NORMALIZATION AND DENORMALIZATION POLICY
- You must normalize to third normal form (3NF) by default [MANDATORY].
- You may denormalize only when you record an Override Ledger entry (Section 00.4), define the anomaly mitigation mechanism, and specify the invalidation path for every denormalized column.
- You must re-verify every denormalization decision in the Chain of Verification (Section 01.6).
- You must never denormalize authority data (roles, permissions, ownership): authorization reads join the source of truth at query time; denormalized authorization data drifts into privilege escalation.

## 04.3. MIGRATION DISCIPLINE
- You must express every schema change as a timestamp-prefixed, forward-only migration through the matrix tool (drizzle-kit, Prisma Migrate, or Alembic) [MANDATORY]. Schema drift outside migrations is a critical failure.
- You must treat merged migrations as immutable; corrections ship as new migrations.
- You must pair every migration with a tested reversal path or an explicit `IRREVERSIBLE: DATA-LOSS` marker.
- You must apply the expand/contract (parallel-change) pattern for column renames and type changes: add the new column, backfill in batches, switch readers, drop the old column in a later migration.
- You must never ship destructive operations (drops, type narrows) in the same release as additive changes.
- You must keep seed data in dedicated scripts, never inside migrations.
- You must batch every backfill: bounded rows per statement or per job run, with progress tracking; unbounded one-shot backfills are a critical failure.
- You must acquire the migration advisory lock and fail loudly on contention; concurrent migrators never proceed in parallel.
- You must verify migration ordering determinism: the timestamp prefix guarantees sequence, and a reordered history (rebase, squash) after merge is a critical failure.

## 04.4. QUERY STANDARDS — N+1 PROHIBITION
- You must never emit per-row queries inside loops or request handlers [MANDATORY]. Batch access uses joins or `IN` clauses.
- You must never emit `SELECT *` in application code; select lists are explicit.
- You must bound every potentially unbounded query with an explicit `LIMIT`; an unbounded query is a critical failure.
- You must paginate every list query with cursor-based pagination (Section 02.2, Section 05.6).
- You must configure statement timeouts on every connection pool (Section 04.7).
- You must never filter large result sets in application memory; filtering belongs in the query.
- You must derive every write from a keyed predicate (`WHERE id = $1`), never from an offset or a position; positional writes race.
- You must parameterize cursor values: an opaque, signed or validated cursor token; client-crafted raw cursors are an injection surface (Section 02.3 A03).

## 04.5. INDEXING STRATEGY
- You must index every foreign key used in joins [MANDATORY].
- You must cover every endpoint filter and sort combination with a composite index, equality columns leading and the cursor or sort column last.
- You must use partial indexes for soft-delete and state predicates.
- You must not create redundant indexes that duplicate an existing leading prefix.
- You must justify every index by a concrete query; speculative indexing is prohibited.
- You must state the expected access pattern beside every index in the migration comment (the endpoint or job that exercises it).
- You must index every uniqueness constraint from Section 04.8 as a database constraint, not a standalone index; the constraint is the guarantee, the index is its implementation.

## 04.6. TRANSACTION AND ISOLATION STANDARDS
- You must wrap every multi-statement invariant in an explicit transaction block with `COMMIT`/`ROLLBACK` semantics [MANDATORY].
- You must implement optimistic concurrency (version column checked in the update predicate) on concurrent-edit surfaces.
- You must hold row locks only inside short critical sections; lock acquisition across user interaction is a critical failure.
- You must use Read Committed by default [DEFAULT]. You may select Serializable only together with a serialization-failure retry loop; Serializable without retry is a critical failure.
- You must never call external APIs, send messages, or perform file I/O inside an open transaction.
- You must persist idempotency keys in a dedicated table with a unique constraint, storing the original response reference for replay (Section 05.7).
- You must implement distributed locks (Redis SET NX with TTL) only where cross-process mutual exclusion is unavoidable, and you must hold them with a bounded lease plus renewal; lock-without-lease is a critical failure.
- You must never nest transactions where the engine lacks savepoint semantics; nested writes compose into one transaction with explicit savepoints, and unsupported nesting is a design defect caught in the audit.

## 04.7. CONNECTION AND CONFIGURATION MANAGEMENT
- You must export a singleton pooled client from exactly one connection module per service, at the canonical path of the File Path Declaration example: `// File: src/infrastructure/database/connection.ts` [MANDATORY for Matrix A/B].
- You must size pools from schema-validated configuration (Section 02.4), with explicit minimum, maximum, and idle timeout values.
- You must never instantiate a client per request; client creation cost is amortized by the pool.
- You must expose a pool health-check query consumed by `/readyz` (Section 08.4).
- You must configure graceful pool drain on shutdown (Section 08.7).
- You must apply per-role credentials per environment class: migration runs use the DDL-capable role; the application role owns no DDL rights (Section 02.3 A03).
- You must set `statement_timeout` and `idle_in_transaction_session_timeout` on every pool connection at acquisition time, not only in server configuration; ad-hoc sessions inherit the same ceilings.

## 04.8. DATA INTEGRITY GUARANTEES
- You must represent monetary values as integer minor units or `NUMERIC` [MANDATORY]; floating-point money is a critical failure.
- You must store every timestamp as `timestamptz` in UTC.
- You must define explicit length bounds on every text column.
- You must use JSONB only for genuinely schemaless payloads, validated at the boundary on read and write (Section 05.3).
- You must mark PII columns in the schema definition and encrypt them per Section 02.3 A02 where classification requires.
- You must define retention and erasure hooks for PII tables (deletion or anonymization path).
- You must define uniqueness as database constraints for every business-unique key (email, external reference); application-level uniqueness checks alone are a critical failure.
- You must constrain every foreign key with a `CHECK` on nullable-unique pairs where partial uniqueness applies (for example one active record per parent) via partial unique indexes, not application discipline.

## 04.9. EMBEDDED AND EDGE DATABASE PROFILES
- You may select SQLite only for edge and embedded deployments [CONDITIONAL: edge/embedded runtime]; PostgreSQL remains the default (Section 03.3).
- Under SQLite you must enable `PRAGMA foreign_keys = ON` in the connection module; FK enforcement is never optional regardless of engine [MANDATORY].
- Under SQLite you must enable WAL journal mode for concurrent read access.
- You must avoid engine-exclusive features when a PostgreSQL migration path is plausible; ORMs abstract, engine-specific SQL defeats the abstraction.
- You must adapt the concurrency model to the engine [DEFAULT]: optimistic locking and short transactions under SQLite; pool-backed concurrency under PostgreSQL (Section 04.7).
- You must record the engine selection and its justification in the audit; an engine switch after Phase 3 started is a re-architecture, not a modification.

## 04.10. DATA ACCESS LAYER CONVENTIONS
- You must colocate data access per domain slice: queries for a domain live in that slice's repository module, never in a global query bag [MANDATORY].
- You must name repository functions after the operation and constraint: `getActiveSubscriptionsForAccount`, not `getSubscriptions2`.
- You must keep every SQL or query-builder expression inside repository modules; SQL fragments in controllers or components are a critical failure (Section 03.9).
- You must return domain entities or typed DTOs from repositories, never raw driver rows.
- You must define transaction scripts in the application layer; repositories participate in transactions through the passed session or client handle.
- You must scope every repository read by tenant or owner at the query predicate when the domain is multi-tenant; repository-level scoping is the IDOR backstop (Section 02.3 A01).

## 04.11. MODULE INVARIANTS
- You must never emit unbounded, unpaginated, or N+1 query patterns (04.4).
- You must never ship a migration without a reversal path or an explicit irreversibility marker (04.3).
- You must never represent money in floating point or timestamps without timezone (04.8).
- You must enforce explicit transaction boundaries around multi-statement invariants (04.6).
- You must centralize connections in one pooled module per service (04.7).
- You must colocate queries in domain slice repositories and return typed entities (04.10).
- You must enforce FK constraints and engine-appropriate concurrency under SQLite profiles (04.9).
