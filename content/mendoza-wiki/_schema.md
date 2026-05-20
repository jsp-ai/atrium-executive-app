---
title: The Mendoza family schema
created: 2026-04-12
updated: 2026-05-15
tags: [schema, canonical]
links: ["[[don-tomas-mendoza]]"]
cited_by: 24
---

# The Mendoza family schema

The structure under which the Mendoza family's institutional memory is organized. Written collaboratively with Don Tomás during the Install weeks and ratified by the council on 2026-05-15.

## Entity types currently in use

### Family Member
Pages: `family-members/` · examples [[don-tomas-mendoza]], [[isabel-mendoza-reyes]]
Required frontmatter: `entity: Family Member`, generation tag, council seat status.

### Holding Entity
Pages: `holdings/` · examples [[mendoza-holdings]], [[casa-mendoza-consumer]]
Required frontmatter: jurisdiction, parent (where applicable), status.

### Trust
Pages: `trusts/` · examples [[mendoza-family-trust]]
Required frontmatter: settlor, trustees, governing law, beneficiary classes.

### Decision
Pages: `decisions/` · examples [[exit-textiles-1989]], [[decline-tokyo-logistics]]
Required frontmatter: decision-maker, date, status.

### Distribution
Pages: `distributions/` · examples [[q2-distribution-mendoza-trust]]
Required frontmatter: scheduled execution, amount aggregate, authorizing decision.

### Council Resolution
Pages: `council/` · examples [[2026-05-15-council-resolution]], [[next-gen-council-agenda]]
Required frontmatter: date, members present, motions resolved.

### Counsel Engagement
Pages: `counsel/` · examples [[singapore-sfo-licensing]]
Required frontmatter: lead counsel firm, status, family lead.

### Succession Marker
Pages: `council/` (filed alongside resolutions) · examples [[isabel-council-appointment-2026]]
Required frontmatter: type, outgoing, incoming, effective date.

### Philanthropic Commitment
Pages: `philanthropy/` · examples [[mendoza-foundation]]
Required frontmatter: established date, lead, annual cadence.

### Founder Reasoning
Pages: `reasoning/` · examples [[founder-1989-textile-exit]], [[founder-on-singapore-vs-hk]]
Required frontmatter: captured from, session dates, concierge present.

## Conditional schema extensions

The following entity types are scoped to a single operating unit and do not propagate to the rest of the family wiki. Ratified at [[2026-05-15-council-resolution]].

- **Product** (Casa Mendoza Consumer only)
- **Supplier** (Casa Mendoza Consumer only)
- **Distributor** (Casa Mendoza Consumer only)

## Schema co-evolution policy

The schema is allowed to evolve. New entity types are proposed by Atrium concierges, reviewed by Don Tomás, and ratified at the next council. Schema changes are themselves recorded as council resolutions and live in the same git history as every other change to the wiki.
