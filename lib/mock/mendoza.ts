/**
 * Mock tenant: The Mendoza Family.
 *
 * Every slug in this file maps to a real markdown page under
 * content/mendoza-wiki/. The activity feed, weekly briefing citations,
 * and Q&A sources all deep-link into those pages.
 */

export const ACCOUNT = {
  slug: "mendoza",
  displayName: "The Mendoza Family",
  patrimony: "Third generation · Manila & Singapore",
  installedAt: "2026-04-12",
  repo: "atrium-wiki-mendoza",
};

export const PRINCIPAL = {
  initials: "TM",
  shortName: "Sr. Mendoza",
  fullName: "Don Tomás Mendoza",
  role: "Principal",
};

export const CONCIERGES = [
  {
    initials: "AC",
    name: "Andres Cruz",
    role: "Lead concierge",
    bio: "Founding partner. Sets the engagement, hosts council briefings.",
    based: "Manila",
  },
  {
    initials: "MR",
    name: "Maria Rivera",
    role: "Operating concierge",
    bio: "Tends the wiki day-to-day. Schema lint, ingest, monthly synthesis pass.",
    based: "Manila",
  },
  {
    initials: "RV",
    name: "Rafael Velasco",
    role: "Counsel concierge",
    bio: "Coordinates outside counsel. Regulatory framings, succession documentation.",
    based: "Singapore",
  },
] as const;

export const WEEKLY_BRIEF = {
  asOf: "2026-05-19",
  composedBy: "Maria Rivera",
  paragraphs: [
    [
      {
        text: "Cash and liquid positions across the three holding entities reconciled to yesterday's close.",
        cite: "Finance · 2026-05-18",
        link: "mendoza-holdings",
      },
    ],
    [
      {
        text: "The Singapore single-family-office license is with counsel for a third revision; expect a clean draft Thursday.",
        cite: "Counsel · Open",
        link: "singapore-sfo-licensing",
      },
      {
        text: " The Q2 distribution to the family trust will execute Friday subject to council sign-off.",
        cite: "Trust · Active",
        link: "q2-distribution-mendoza-trust",
      },
      {
        text: " Tomás's signature is the only outstanding piece.",
        cite: "Pending",
        link: "q2-distribution-mendoza-trust",
      },
    ],
    [
      {
        text: "On Wednesday the next-generation council reads the Vietnam holdings exit framing — the first sitting where Isabel is seated and Marco attends.",
        cite: "Council · Wed 10:00",
        link: "next-gen-council-agenda",
      },
      {
        text: " Isabel will read the 1989 textile-exit reasoning before the meeting; the first generation-3 reading of the founding precedent on record.",
        cite: "Reasoning",
        link: "exit-textiles-1989",
      },
    ],
  ],
};

export const OPEN_QUESTIONS = [
  { q: "Has Hong Kong counsel responded on the trust amendment?", asked: "2026-05-17", link: "singapore-sfo-licensing" },
  { q: "What did Lola say in 1989 about exiting textiles?", asked: "2026-05-16", link: "founder-1989-textile-exit" },
  { q: "How is Q2 tracking against the 13-week cash forecast?", asked: "2026-05-14", link: "mendoza-holdings" },
] as const;

export const RECENT_DECISIONS = [
  { title: "Decline Tokyo logistics co-investment", date: "2026-05-15", author: "council", link: "decline-tokyo-logistics" },
  { title: "Ratify Casa Mendoza schema extensions", date: "2026-05-15", author: "council", link: "2026-05-15-council-resolution" },
  { title: "Continue Atrium engagement through Q4", date: "2026-05-15", author: "council", link: "2026-05-15-council-resolution" },
] as const;

export const COUNCIL_CALENDAR = [
  { when: "Wed · May 22 · 10:00", what: "Next-gen council briefing", room: "Manila study", link: "next-gen-council-agenda" },
  { when: "Fri · May 24 · 14:00", what: "Q2 distribution sign-off", room: "Trustee call", link: "q2-distribution-mendoza-trust" },
  { when: "Tue · May 28 · 09:30", what: "Singapore SFO license review", room: "Counsel call", link: "singapore-sfo-licensing" },
] as const;

export const ACTIVITY = [
  { ts: "2026-05-19 · 09:14", actor: "maria", action: "updated", target: "q2-distribution-mendoza-trust", note: "added trustee acknowledgment letter" },
  { ts: "2026-05-19 · 08:42", actor: "rafael", action: "updated", target: "singapore-sfo-licensing", note: "third counsel revision noted; trustee-class point defended" },
  { ts: "2026-05-18 · 22:03", actor: "maria", action: "updated", target: "next-gen-council-agenda", note: "draft circulating; Don Tomás accepted format" },
  { ts: "2026-05-18 · 16:55", actor: "maria", action: "linted", target: "mendoza-family-trust", note: "stale citation: trustee letter superseded 2026-03-14" },
  { ts: "2026-05-18 · 14:10", actor: "atrium-bot", action: "synced", target: "mendoza-holdings", note: "monthly custodian statement ingested" },
  { ts: "2026-05-17 · 17:48", actor: "rafael", action: "appended", target: "founder-on-singapore-vs-hk", note: "second working session captured" },
  { ts: "2026-05-16 · 19:33", actor: "rafael", action: "created", target: "founder-1989-textile-exit", note: "captured from Tomás's working session" },
  { ts: "2026-05-16 · 13:40", actor: "maria", action: "updated", target: "casa-mendoza-consumer", note: "schema extensions documented" },
  { ts: "2026-05-15 · 18:22", actor: "council", action: "resolved", target: "2026-05-15-council-resolution", note: "three motions, all unanimous; decision page signed" },
  { ts: "2026-05-15 · 11:08", actor: "andres", action: "created", target: "decline-tokyo-logistics", note: "council resolution recorded; rationale signed" },
  { ts: "2026-05-14 · 16:30", actor: "maria", action: "updated", target: "isabel-mendoza-reyes", note: "operational shadow of SFO review noted" },
] as const;

/**
 * Pre-baked Q&A library. Each id is a stable identifier so the suggested
 * questions can deep-link via /ask?q=<id>. In Phase 2 these will be replaced
 * by live streaming retrieval composed by the Anthropic SDK.
 */
export type CuratedAnswer = {
  id: string;
  question: string;
  composedAt: string;
  blocks: Array<{
    type: "lede" | "para" | "pull";
    text: string;
    cite?: string;
    link?: string;
  }>;
  sources: Array<{ label: string; link: string }>;
};

export const ASK_LIBRARY: Record<string, CuratedAnswer> = {
  "cash-position": {
    id: "cash-position",
    question: "What is the current position across the family's holdings, and what requires the principal's attention this week?",
    composedAt: "2026-05-19 · 09:18",
    blocks: [
      {
        type: "lede",
        text: "Cash and liquid positions across the three holding entities reconciled to yesterday's close.",
        cite: "Custodian · 2026-05-18",
        link: "mendoza-holdings",
      },
      {
        type: "para",
        text: "Three executive moves require the principal this week. The Singapore SFO license needs counsel sign-off on the third revision (Rafael expects a clean draft Thursday). The Q2 distribution to the family trust will execute Friday — Don Tomás's signature is the only outstanding piece. The next-generation council briefing sits Wednesday morning, with Isabel seated and Marco attending.",
        cite: "Council · Pending",
        link: "next-gen-council-agenda",
      },
      {
        type: "pull",
        text: "Nothing else this week requires the principal's hand. The household and operating units are running clean.",
      },
    ],
    sources: [
      { label: "mendoza-holdings", link: "mendoza-holdings" },
      { label: "singapore-sfo-licensing", link: "singapore-sfo-licensing" },
      { label: "q2-distribution-mendoza-trust", link: "q2-distribution-mendoza-trust" },
      { label: "next-gen-council-agenda", link: "next-gen-council-agenda" },
    ],
  },
  "textile-exit-1989": {
    id: "textile-exit-1989",
    question: "Why did Lola exit textiles in 1989?",
    composedAt: "2026-05-19 · 11:04",
    blocks: [
      {
        type: "lede",
        text: "The 1989 textile exit was decided over 18 months under three load-bearing reasons preserved verbatim from Lolo Salvador.",
        cite: "Reasoning",
        link: "founder-1989-textile-exit",
      },
      {
        type: "pull",
        text: "Three generations of cotton. Three generations is enough.",
      },
      {
        type: "para",
        text: "First: the cost structure could not bend. The family's advantages were fixed by 1985 and degrading every year against new Korean and Taiwanese mills. Second: Don Tomás would not run a textile mill against the Koreans; the next generation deserved to inherit something they had chosen. Third — and the decisive one — what the family wanted to keep was the family, not the trade. The trade was a vehicle. The family would survive the trade; it might not survive a slow decline ten years past obviousness.",
        cite: "Decision",
        link: "exit-textiles-1989",
      },
      {
        type: "para",
        text: "A quiet 1987 assessment from a Hong Kong consultancy gave Lolo Salvador the numerical case: cost-per-yard advantage closing at ~3% per year, modernization capex roughly twice annual free cash flow, capital-positive horizon 6–9 years, exit-premium horizon 3–5 years. The family had a 2–4 year window. They used it.",
        cite: "Decision · context",
        link: "exit-textiles-1989",
      },
    ],
    sources: [
      { label: "founder-1989-textile-exit", link: "founder-1989-textile-exit" },
      { label: "exit-textiles-1989", link: "exit-textiles-1989" },
      { label: "mendoza-holdings", link: "mendoza-holdings" },
    ],
  },
  "singapore-vs-hk": {
    id: "singapore-vs-hk",
    question: "What's the rationale for the Singapore SFO over Hong Kong?",
    composedAt: "2026-05-19 · 11:32",
    blocks: [
      {
        type: "lede",
        text: "Don Tomás chose Singapore for four reasons, captured in two working sessions in early May 2026.",
        cite: "Reasoning",
        link: "founder-on-singapore-vs-hk",
      },
      {
        type: "para",
        text: "Hong Kong's center of gravity is China; the family's businesses, relationships, and next-generation operating muscle are not Chinese. Putting the family-office shell in Hong Kong would put it in a city the next generation does not yet read.",
        cite: "Reasoning · 1",
        link: "founder-on-singapore-vs-hk",
      },
      {
        type: "para",
        text: "Singapore is a market the family already speaks: the Watanabe relationship transits Singapore, the 1991 trust amendments were drafted with Singapore counsel review, and Isabel's residence is Singapore. The relationships are real.",
        cite: "Reasoning · 2",
        link: "founder-on-singapore-vs-hk",
      },
      {
        type: "para",
        text: "Singapore's regulatory frame for family offices is mature; Hong Kong's framework is younger and more politically sensitive in 2026 than at any point in the last twenty years. And Singapore is operationally closer: Manila to Singapore is 3.5 hours of operating life Don Tomás already knows.",
        cite: "Reasoning · 3-4",
        link: "founder-on-singapore-vs-hk",
      },
      {
        type: "pull",
        text: "We are a Filipino family. The seat is Manila. The seat does not move.",
      },
    ],
    sources: [
      { label: "founder-on-singapore-vs-hk", link: "founder-on-singapore-vs-hk" },
      { label: "singapore-sfo-licensing", link: "singapore-sfo-licensing" },
      { label: "isabel-mendoza-reyes", link: "isabel-mendoza-reyes" },
    ],
  },
  "revisited-decisions": {
    id: "revisited-decisions",
    question: "Show me every decision the council has revisited more than once.",
    composedAt: "2026-05-19 · 12:11",
    blocks: [
      {
        type: "lede",
        text: "Two decisions in the recorded history of this council have been revisited more than once. Both turn on the same precedent.",
        cite: "Decisions",
        link: "exit-textiles-1989",
      },
      {
        type: "para",
        text: "First: the standing decision not to sell Mendoza Holdings. The council has fielded three serious offers since the 1989 textile exit, most recently in 2024. Each time the reasoning has been the same — the trust outlives the businesses; the family outlives the trade. Each time the council has cited the 1989 framing.",
        cite: "Holdings",
        link: "mendoza-holdings",
      },
      {
        type: "para",
        text: "Second: whether the family-office shell should live in Hong Kong or Singapore. Don Tomás has held the Singapore position quietly since 2008. The 2024 trust amendments brought it back into council discussion; the 2026 SFO licensing returned it again. The reasoning is preserved at the founder-reasoning page.",
        cite: "Reasoning",
        link: "founder-on-singapore-vs-hk",
      },
      {
        type: "pull",
        text: "Both decisions are children of the same precedent: 1989. The family does not exit the family.",
      },
    ],
    sources: [
      { label: "exit-textiles-1989", link: "exit-textiles-1989" },
      { label: "mendoza-holdings", link: "mendoza-holdings" },
      { label: "founder-on-singapore-vs-hk", link: "founder-on-singapore-vs-hk" },
    ],
  },
  "vietnam-readers": {
    id: "vietnam-readers",
    question: "Who else has read the founder's notes on the Vietnam exit?",
    composedAt: "2026-05-19 · 12:45",
    blocks: [
      {
        type: "lede",
        text: "Three people have read the working notes on the Vietnam holdings exit framing. The fourth reading is Wednesday.",
        cite: "Audit",
        link: "next-gen-council-agenda",
      },
      {
        type: "para",
        text: "Don Tomás dictated the framing across two sessions in late April 2026. Maria captured both. Rafael read for counsel context the following Monday. Isabel began reading on 2026-05-17 in preparation for Wednesday's council sitting. Marco has not yet been given access; the working notes will be added to his readable scope after Wednesday.",
        cite: "Council · Wed",
        link: "next-gen-council-agenda",
      },
      {
        type: "para",
        text: "If the Watanabe family reaches out about a related conversation before Wednesday — possible, given the relationship's openness — the principal has Doña Carmen's drafted response in counsel.",
        cite: "Decline · context",
        link: "decline-tokyo-logistics",
      },
    ],
    sources: [
      { label: "next-gen-council-agenda", link: "next-gen-council-agenda" },
      { label: "decline-tokyo-logistics", link: "decline-tokyo-logistics" },
      { label: "isabel-mendoza-reyes", link: "isabel-mendoza-reyes" },
    ],
  },
};

export const SUGGESTED_QUESTIONS = [
  { id: "textile-exit-1989", q: "Why did Lola exit textiles in 1989?" },
  { id: "singapore-vs-hk", q: "What's the rationale for the Singapore SFO over Hong Kong?" },
  { id: "revisited-decisions", q: "Show me every decision the council has revisited more than once." },
  { id: "vietnam-readers", q: "Who else has read the founder's notes on the Vietnam exit?" },
] as const;

/** The principal's own ask history — for the sidebar. */
export const ASK_RECENT = [
  { id: "cash-position", when: "2026-05-19 · 09:18", q: "What is the current position across the family's holdings, and what requires the principal's attention this week?" },
  { id: "textile-exit-1989", when: "2026-05-19 · 11:04", q: "Why did Lola exit textiles in 1989?" },
  { id: "singapore-vs-hk", when: "2026-05-19 · 11:32", q: "What's the rationale for the Singapore SFO over Hong Kong?" },
  { id: "revisited-decisions", when: "2026-05-19 · 12:11", q: "Show me every decision the council has revisited more than once." },
  { id: "vietnam-readers", when: "2026-05-19 · 12:45", q: "Who else has read the founder's notes on the Vietnam exit?" },
] as const;

export const FILES = [
  {
    id: "trustee-letter-q2-2026",
    name: "Trustee Letter — Q2 2026.pdf",
    size: "412 KB",
    uploaded: "2026-05-17",
    citedBy: 2,
    preview: "Bank of the Philippine Islands · Trust & Asset Management · 17 May 2026 — Re: Q2 2026 distribution to Class A and Class B beneficiaries, Mendoza Family Trust. The trustees confirm receipt of standing distribution authorization dated 1 April 2026 and acknowledge the class allocation table attached as Schedule A. Wire authorization is held pending the principal's countersignature on the form sent under separate cover.",
    cites: ["q2-distribution-mendoza-trust", "mendoza-family-trust"],
  },
  {
    id: "counsel-memo-singapore-sfo",
    name: "Counsel Memo — Singapore SFO (draft 3).pdf",
    size: "1.8 MB",
    uploaded: "2026-05-19",
    citedBy: 1,
    preview: "Drew & Napier LLP · Singapore · 19 May 2026 — Re: Single-Family-Office licensing under the VCC framework. Third revision following the principal's instruction of 2026-05-18 that the trustee-class language be defended rather than conceded against the regulator's standard form. Substantive changes are limited to Section 4 (trustee classes) and Section 7 (beneficial-owner attestation).",
    cites: ["singapore-sfo-licensing"],
  },
  {
    id: "custodian-statement-may-2026",
    name: "Custodian Statement — May 2026.pdf",
    size: "3.1 MB",
    uploaded: "2026-05-18",
    citedBy: 4,
    preview: "Bank of the Philippine Islands · Custodian Statement · Period: 1–18 May 2026. Holdings rollup across the three Mendoza Holdings entities, with cash and liquid positions reconciled to 18 May close. Atrium ingested this statement automatically; the wiki rollup at mendoza-holdings reflects this period's figures.",
    cites: ["mendoza-holdings", "mendoza-family-trust"],
  },
  {
    id: "founders-notes-scan",
    name: "Founder's Notes — 1989-2003 (scan).pdf",
    size: "47 MB",
    uploaded: "2026-04-22",
    citedBy: 11,
    preview: "Scanned facsimile · Lolo Salvador Mendoza's working notebooks, 1989 through 2003. Atrium concierges are working through this archive page by page; the textile-exit framing was extracted to founder-1989-textile-exit and the Singapore-versus-Hong-Kong reasoning to founder-on-singapore-vs-hk. Remaining pages cover 1991 trust settlement deliberation, 1994 logistics entry, and the 1998 foundation charter.",
    cites: ["founder-1989-textile-exit", "founder-on-singapore-vs-hk"],
  },
  {
    id: "council-minutes-2026-05-15",
    name: "Council Minutes — 2026-05-15.md",
    size: "8 KB",
    uploaded: "2026-05-15",
    citedBy: 3,
    preview: "Council resolution · 15 May 2026 · three motions resolved, all unanimous: decline Watanabe Tokyo logistics co-investment; ratify Casa Mendoza Consumer schema extensions; continue Atrium engagement through Q4. Tabled: Singapore SFO licensing question, pending Rafael's third revision.",
    cites: ["2026-05-15-council-resolution", "decline-tokyo-logistics"],
  },
];

export const MEMBERS = [
  { name: "Don Tomás Mendoza", role: "Principal", lastSeen: "today", link: "don-tomas-mendoza" },
  { name: "Doña Carmen Mendoza", role: "Member", lastSeen: "yesterday", link: "dona-carmen-mendoza" },
  { name: "Isabel Mendoza-Reyes", role: "Heir · Council seat", lastSeen: "2 days ago", link: "isabel-mendoza-reyes" },
  { name: "Marco Mendoza", role: "Heir", lastSeen: "today", link: "marco-mendoza" },
  { name: "Atty. Antonio Salazar", role: "Advisor · expires 2026-08-31", lastSeen: "last week", link: null as string | null },
];

export const MESSAGES = [
  {
    from: "maria",
    when: "2026-05-19 · 09:18",
    body: "Composed the weekly brief for you. Two items need a decision before Friday — flagged at the top. Take your time.",
  },
  {
    from: "principal",
    when: "2026-05-18 · 17:42",
    body: "Tell Rafael I want the Singapore counsel to defend the revision on the trustee-class language, not concede it.",
  },
  {
    from: "rafael",
    when: "2026-05-18 · 22:01",
    body: "Heard. I'll get the revision back to them tomorrow morning with the trustee-class point footnoted and the alternate framing preserved. We don't need to give that one up.",
  },
];
