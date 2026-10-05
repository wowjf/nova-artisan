# SECTION 06: FRONTEND ENGINEERING STANDARDS

## 06.1. RENDERING STRATEGY
- Under Next.js App Router you must render React Server Components first [MANDATORY for Matrix A]; the `'use client'` directive is confined to interactive leaf components.
- You must stream slow segments behind Suspense boundaries rather than blocking the route.
- Under Vite+React you must apply the equivalent discipline: data fetching at the route level, interactivity isolated to leaf components.
- You must never place `'use client'` on a layout or page component when only its descendants are interactive.
- You must keep secrets and privileged data out of the server-to-client props payload: props crossing the RSC boundary are visible in the transport; a secret in props is a critical failure (Section 02.4).

## 06.2. COMPONENT ARCHITECTURE
- You must layer components in three tiers [MANDATORY]: UI primitives (shadcn/Radix), feature components (domain composition), route views (page-level assembly).
- You must keep business logic out of components; logic lives in hooks or service modules.
- You must type props from inferred schema types (Section 03.2), never by re-declaring shapes.
- You must use controlled inputs for forms by default; uncontrolled inputs require an Override Ledger entry.
- You must colocate a feature's components, hooks, and queries within its `src/features/<domain>` slice (Section 03.10); shared placement is reserved for genuine cross-feature reuse, and a single consumer is not cross-feature.
- You must cap prop depth: a component receiving more than 8 distinct props is a decomposition signal; either split the component or group cohesive props into a typed object from the schema.

## 06.3. SERVER/CLIENT STATE SEPARATION
- You must own all server data through TanStack Query [MANDATORY]: hierarchical query keys (`['<domain>', '<resource>', params]`), explicit `staleTime` and `gcTime` defaults per resource class, and mutation-driven invalidation.
- You must never call `fetch` in a component body for server data; fetching is expressed through the query client or server components.
- You must restrict Zustand to UI and ephemeral session state; sensitive data must never persist into client stores or browser storage.
- You must define the cache invalidation strategy for every query key in the audit (Section 01.3, cache invalidation row).
- You must colocate URL-shareable state (filters, page cursor, sort) in the URL parameters; duplicating it in client stores breaks shareability and back-button behavior [MANDATORY for list views].
- You must key every list query by its full filter set: a shared key across differing filters returns wrong data from cache and is a critical failure.

## 06.4. FORMS AND VALIDATION
- You must build forms with React Hook Form coupled to Zod schemas shared with the API layer in full-stack TypeScript [MANDATORY for Matrix A/B].
- You must render all three submit states: pending (disabled submit, in-flight indicator), error (mapped server field errors), and success.
- You must treat client validation as UX only; the server re-validates every input at the boundary (Section 05.3).
- You must map server validation errors (`422` details) back onto form fields by path.
- You must guard against double submission: the submit action is disabled from dispatch until the mutation settles, including on slow connections.
- You must preserve user input across a failed submission; clearing a form on error forces re-entry and is a critical failure.

## 06.5. STYLING AND DESIGN TOKENS
- You must style exclusively with Tailwind (Matrix A); global CSS is limited to token definitions and third-party overrides.
- You must define spacing, color, and radius as CSS-variable design tokens; magic numeric values in utilities require extraction to the token layer.
- You must implement dark mode through the class strategy over the token layer.
- You must author breakpoints mobile-first.
- You must restrict inline `style` props to dynamically computed values (e.g., measured dimensions).
- You must never hardcode brand or state colors outside the token layer; component-level literal colors bypass theming and are a critical failure.
- You must reserve `!important` for third-party style overrides exclusively; using it to win specificity against first-party styles is a critical failure.

## 06.6. PERFORMANCE AND DATA-RETRIEVAL UX
- You must render skeleton loading states for every async region (Section 02.2).
- You must debounce user-driven input handlers that trigger requests.
- You must virtualize lists above the threshold established in Section 02.2.
- You must implement optimistic updates with rollback on failure for mutation-driven UI.
- You must serve images through the framework's optimized pipeline with explicit dimensions; layout-shifting media is a critical failure.
- You must dynamically import heavy routes and below-the-fold components.
- You must guard navigation with pending-mutation checks; leaving a route with in-flight writes requires an interception (unsaved-changes guard).

## 06.6.1. CLIENT ERROR BOUNDARIES AND RECOVERY
- You must attach an error boundary at every route segment and every widget boundary whose failure must not take down the page.
- You must render a recovery action (retry, fallback content) inside every boundary; a boundary that renders static text without recovery is incomplete.
- You must log client-side errors with the correlation ID of the failing request when available (Section 08.3).
- You must bound retry actions: automatic retries cap at one with backoff; unbounded auto-retry loops on failing mutations amplify incidents.

## 06.7. VIEW STATE CONTRACT
- You must implement the view state quadruple for every async view [MANDATORY]: loading (skeleton), error (with a retry action), empty (with guidance), success.
- You must place route-level error boundaries around every route segment; an unhandled render error producing a blank surface is a critical failure.
- You must leave no unhandled promise rejections; every async interaction attaches an error path.
- You must select the error surface by scope [DEFAULT]: inline for form-field and bounded-region failures; toast for asynchronous background outcomes; full-page for route-level failures.
- You must render user-actionable error messages: the error surface states what failed and which user action can recover it; raw error codes alone are a critical failure.

## 06.8. ACCESSIBILITY MANDATES
- You must author semantic HTML first; `div`/`span` scaffolding for interactive controls is a critical failure when a semantic element exists.
- You must build complex widgets from Radix primitives (Matrix A) which carry focus and keyboard semantics.
- You must provide complete keyboard paths for every interactive element, including visible focus indicators.
- You must associate every input with a label; placeholders never substitute for labels.
- You must write `alt` text that conveys content, and `alt=""` for purely decorative images.
- You must respect `prefers-reduced-motion` by disabling non-essential animation.
- You must maintain a minimum contrast ratio of 4.5:1 for text against its background [MANDATORY].
- You must manage focus into and out of modals and route transitions; focus left on a removed element is a critical failure.
- You must announce asynchronous state changes (loading completion, error arrival) through live regions.

## 06.9. INTERNATIONALIZATION AND LOCALIZATION
- You must externalize every user-facing string; hardcoded copy in components is a critical failure [CONDITIONAL: user-facing product UI].
- You must format dates, numbers, and currencies through `Intl` formatters driven by the active locale; manual string assembly of formatted values is prohibited.
- You must design layouts to survive 30 percent text expansion; fixed-width containers around text are prohibited.
- You must encode locale and currency as application state, never derived from the user agent.
- You must sort and compare user-visible lists with locale-aware collation.
- You must render the locale's text direction (`dir` attribute) from the active locale; layout mirroring follows the attribute, not per-component conditionals.

## 06.10. MODULE INVARIANTS
- You must keep server data in TanStack Query and never fetch in component bodies (06.3).
- You must implement the loading/error/empty/success quadruple on every async view (06.7).
- You must share validation schemas between client forms and API boundary (06.4).
- You must satisfy the accessibility mandates of 06.8 on every interactive surface.
- You must confine `'use client'` to interactive leaves (06.1).
- You must externalize user-facing strings and format through `Intl` (06.9).
