---
title: Four Layers
created: 2026-02-20
updated: 2026-05-19
public: true
tags: [architecture, canonical]
links: ["[[definition]]", "[[composition-not-replacement]]", "[[why-markdown-not-notion]]"]
cited_by: 18
---

# Four layers. Plain text. Agent-tended.

The Atrium architecture has four distinct layers, deployed top to bottom:

**04 · Interface — Conversational.** Plain-language queries. Citations on every claim. No new app to learn.

**03 · Agent — Composition engine.** Reads structured outputs from operational systems, expands them with context drawn from the wiki, drafts the narrative the principal sees.

**02 · Memory — Wiki + Schema.** Markdown pages with frontmatter and `[[wikilinks]]`, governed by a schema the company writes itself, git-versioned in a repository the company owns.

**01 · Operational — Your existing stack.** For a family enterprise this is the family-office system, the custodian, the trust administrator, household operations, counsel. For an operating company it is ERP, CRM, payroll, warehouse, communication. **Unchanged.** Atrium reads from these layers. It does not write into them.

Every change to layer 02 lands as a signed git commit. Every claim composed by layer 03 carries a citation back to its source in layer 02 or 01. Plain text, end-to-end.

The deliberate choice of plain text — over a proprietary database, over a SaaS product the family logs into — is what makes the [[why-the-family-owns-the-repository]] story true. The wiki is yours. The repo is yours. The cost of being wrong about Atrium approaches zero.
