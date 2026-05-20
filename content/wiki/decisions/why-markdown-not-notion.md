---
title: Why Markdown, Not Notion
created: 2026-02-25
updated: 2026-05-19
public: true
tags: [decision, architecture]
links: ["[[four-layers]]", "[[why-the-family-owns-the-repository]]"]
cited_by: 8
---

# Why markdown — and not Notion, not Confluence, not a database.

The wiki is plain `.md` files in a git repository the customer owns. This is a deliberate choice, made early, and worth defending explicitly.

**Why not Notion?** Vendor lock-in. The customer's institutional memory cannot live behind another company's login wall. If Notion changes pricing, gets acquired, or sunsets a feature, the customer's brain is hostage.

**Why not Confluence?** Same problem, plus the format is proprietary enough that migrating off is genuinely painful. Atrium's commitment is that the cost of being wrong about Atrium approaches zero. Confluence's commitment is the opposite.

**Why not a database?** Two reasons. First, schema rigidity — the executive layer's data is over-structured already, and forcing it back into rows is the very mistake [[altitude-inversion]] argues against. Second, ownership — a database lives in a service. Markdown lives in a repository. Repositories are easier to own than services.

**Why git?** Every change becomes a signed commit. The audit trail is automatic. M&A diligence, regulator inquiries, generational handovers, and senior-leader transitions all benefit from an institutional memory whose history is cryptographically intact.

Markdown is the *least flashy* answer to "where should the wiki live." It is also the answer that survives the longest.

Related: [[four-layers]] · [[why-the-family-owns-the-repository]]
