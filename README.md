# Atrium

> Where your company remembers.

Atrium is the executive-layer operating system for family enterprises &mdash; a structured wiki of a family's reasoning, relationships, decisions, and institutional memory, kept current by a small concierge team and an AI assistant, queryable in plain language with citations on every claim.

This repository contains the marketing site and the principal-facing portal, built as a Next.js 16 application. The portal currently runs on rich mock data (the fictional "Mendoza family") so the entire experience is exercisable end-to-end without a database, auth provider, or live LLM.

## What is in this repo

```
app/
  (marketing)/        Public site — landing, diagnosis, architecture, practice,
                      concierge, manual, inquiry
  (portal)/           Authenticated principal-facing portal (mock auth)
    portal/login/     Magic-link sign-in mock
    portal/welcome/   First-login onboarding tour (six steps)
    portal/mendoza/   Demo tenant: dashboard, ask, memory, activity, files,
                      concierge thread, settings
components/           Header / Footer for marketing; portal-scoped components
content/
  wiki/               Atrium's own internal wiki (architecture, philosophy,
                      product, decisions, anti, pilot)
  mendoza-wiki/       The demo family's wiki — 14 pages across the schema
lib/
  wiki.ts             Tenant-aware markdown wiki engine (gray-matter + walkers)
  mendoza-wiki.ts     Facade scoped to the Mendoza tenant
  mock/mendoza.ts     Mock data for the demo tenant (people, activity,
                      ask library, files, members, messages)
```

## Running locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

- `/` &mdash; the landing page
- `/portal/login` &mdash; principal sign-in mock (the `View demo` button enters the demo without sending an email)
- `/portal/welcome` &mdash; first-login onboarding tour
- `/portal/mendoza` &mdash; the Mendoza family dashboard
- `/architecture` &mdash; the architecture dossier (renders Atrium's own public-flagged wiki pages)
- `/concierge` &mdash; what we handle on the family's behalf, vs. what the principal does

## The Phase 2 substrate (not in this repo yet)

Per the approved implementation plan, the production deployment swaps the mocks for:

- **Auth** &mdash; WorkOS AuthKit (magic-link + WebAuthn passkey)
- **Database** &mdash; Supabase Postgres (Singapore region) + pgvector for retrieval
- **ORM** &mdash; Drizzle
- **Wiki substrate** &mdash; one private GitHub repository per family; the portal reads from a Postgres index synced on every push
- **Agent** &mdash; Anthropic SDK (already wired) for streaming composed answers with citations
- **Files** &mdash; Cloudflare R2 with 15-minute signed URLs
- **Email** &mdash; Resend for inquiry intake + transactional
- **Hosting** &mdash; Vercel (`sin1` region primary)

The pieces are surfaced honestly in the demo &mdash; each portal module that's mock-backed has a small `Demo &middot;` footer line noting what production swaps it for.

## Brand voice

The marketing copy was calibrated for two audiences: family principals (non-technical, AI-fluent, decision is emotional + architectural) and their technical advisors (counsel, family-office directors, CPAs reviewing the buy). The deep-link pages (`/diagnosis`, `/architecture`, `/practice`, `/manual`) preserve the pitch-deck's intellectual rigor; the landing softens the body copy without abandoning the brand H2 cadence.

Banned vocabulary (zero tolerance throughout): platform, solution, leverage, synergy, empower, unlock, transform, seamless, world-class, AI-powered, supercharge, disrupt.
