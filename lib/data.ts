export interface Service {
  no: string
  name: string
  summary: string
  deliverables: string[]
  duration: string
}

export interface Case {
  client: string
  sector: string
  headline: string
  body: string
  metric: string
  metricLabel: string
}

export interface Post {
  slug: string
  title: string
  date: string
  readTime: string
  tag: string
  excerpt: string
  body: string[]
}

export interface GalleryItem {
  id: string
  title: string
  tag: string
  tone: 'navy' | 'blue' | 'paper'
  aspect: 'tall' | 'wide' | 'square'
}

export const SERVICES: Service[] = [
  {
    no: '01',
    name: 'Process Automation & Workflow Audits',
    summary:
      'Replace repetitive manual work with reliable, auditable workflows — from finance ops to onboarding.',
    deliverables: [
      'Process audit',
      'n8n / Make / Zapier builds',
      'Custom Python services',
      'Handover documentation',
    ],
    duration: '2-5 days',
  },
  {
    no: '02',
    name: 'Implementation Strategy',
    summary:
      'Re-shape the tool stack so data flows cleanly between CRM, finance, and operations — no more swivel-chair updates.',
    deliverables: [
      'Stack mapping',
      'Integration design',
      'Migration plan',
      'Quarterly review',
    ],
    duration: '4–8 weeks',
  },
  {
    no: '03',
    name: 'AI Operations',
    summary:
      'Practical, scoped applications of LLMs for triage, drafting and classification — wired into the systems you already use.',
    deliverables: [
      'Use-case workshop',
      'Prototype',
      'Production rollout',
      'Evaluation harness',
    ],
    duration: '3–6 weeks',
  },
  {
    no: '04',
    name: 'Fractional AI Lead',
    summary:
      'Ongoing leadership for teams of 10–80 — owning the operating cadence, the metrics, and the next bottleneck.',
    deliverables: [
      'Weekly working sessions',
      'Roadmap ownership',
      'Vendor management',
      'Async reporting',
    ],
    duration: 'Ongoing, 1–3 days/wk',
  },
]

export const CASES: Case[] = [
  {
    client: 'Marlow & Finch Accounting',
    sector: 'Professional services',
    headline: 'Closed the books 4 days faster, every month.',
    body: 'Re-platformed the month-end close from spreadsheets onto a Xero + Airtable backbone with automated reconciliations. 38 hours of monthly work eliminated.',
    metric: '−68%',
    metricLabel: 'manual reconciliation hours',
  },
  {
    client: 'Harbourline Logistics',
    sector: 'Freight forwarding',
    headline: 'One source of truth across three warehouses.',
    body: 'Connected legacy WMS, customs broker, and customer portal through a small integration layer. Replaced 11 status emails per shipment with a single tracked record.',
    metric: '3.2×',
    metricLabel: 'faster status response',
  },
  {
    client: 'Verdant Health Co-op',
    sector: 'Healthcare',
    headline: 'Triage assistant for a 12-person clinic.',
    body: 'A scoped LLM workflow drafts referral letters from clinician notes and flags missing fields. Human-in-the-loop; clinician approves every send.',
    metric: '11 min',
    metricLabel: 'saved per referral',
  },
]

export const POSTS: Post[] = [
  {
    slug: 'the-quietest-automations',
    title: 'The quietest automations are the most valuable',
    date: '2026-04-22',
    readTime: '6 min',
    tag: 'Operations',
    excerpt:
      'The flashy demos rarely survive contact with a real ops team. The ones that stick share three boring traits.',
    body: [
      'There is a pattern I keep running into when I audit ops teams. The automations that get the most internal applause — the Slack bots, the demo dashboards, the "AI agent" prototypes — are almost never the ones doing real load-bearing work six months later.',
      'The work that survives is almost always invisible. A nightly script that reconciles two ledgers. A webhook that updates a single field on a single record. A small Python service that sits between a CRM and a billing platform and does nothing more interesting than rename three columns.',
      'Three traits these quiet automations share: they have exactly one owner; they fail loudly when they fail; and the team can describe what they do in a single sentence. When any of those three fall away, the automation becomes a liability — usually within a quarter.',
      'My current rule of thumb: if an automation needs a runbook longer than a Post-it note, it is probably trying to do too much.',
    ],
  },
  {
    slug: 'tool-stacks-and-the-rule-of-seven',
    title: 'Tool stacks and the rule of seven',
    date: '2026-03-30',
    readTime: '4 min',
    tag: 'Systems',
    excerpt:
      'Most teams of 20 are paying for 40+ SaaS tools. Here is how I get that number back under control without a six-month migration.',
    body: [
      'Almost every mid-size team I work with has the same hidden problem: their stack grew faster than their headcount, and nobody has done a tidy-up in two years.',
      'I run a 90-minute exercise I call "the rule of seven". Pull a list of every paid tool from finance. For each one, write down — in fewer than seven words — what would break if you cancelled it tomorrow. If you cannot, that is the answer.',
      'The first pass usually identifies four or five tools that nobody can defend. The second pass, a week later, identifies another three or four whose function has been quietly absorbed by something else.',
    ],
  },
  {
    slug: 'llms-as-junior-analysts',
    title: 'Treat LLMs like junior analysts, not senior engineers',
    date: '2026-03-08',
    readTime: '8 min',
    tag: 'AI',
    excerpt:
      'A small mental model shift fixes most of the failure modes I see when teams try to put language models into production.',
    body: [
      'The mental model that gets teams in trouble is "the model is the product". Once you switch to "the model is a junior analyst on the team", most design decisions get easier.',
      'You would not give a junior analyst write-access to your billing system on day one. You would not let them email a customer without a senior review. You would absolutely give them well-scoped, repetitive work with clear acceptance criteria — exactly the kind of work an LLM is good at.',
      'Build the rails first. Worry about the model second.',
    ],
  },
  {
    slug: 'why-i-stopped-using-zapier-for-everything',
    title: 'Why I stopped using Zapier for everything',
    date: '2026-02-14',
    readTime: '5 min',
    tag: 'Tools',
    excerpt:
      'It is still the right starting point. It is rarely the right finishing point, and I have learned to be honest about that earlier.',
    body: [
      'Zapier is the right tool for the first three months of any automation problem. Past that, the things that made it fast at the start — the opaque connectors, the per-task pricing, the implicit ordering — become the things that slow you down.',
      'My current default: prototype in Zapier or Make, then port anything that runs more than 5,000 times a month onto a small Python service with a proper queue. Boring, observable, owned by one person.',
    ],
  },
  {
    slug: 'a-quarterly-ops-review-template',
    title: 'A quarterly ops review template I actually use',
    date: '2026-01-19',
    readTime: '3 min',
    tag: 'Operations',
    excerpt:
      'Four questions, one page. It is not clever, but it has caught more drift than any dashboard I have built.',
    body: [
      'Every quarter, with every retained client, I run the same one-page review. Four questions: What broke? What got slower? What got faster? What did we stop measuring? That is the whole thing.',
      'The fourth question is the one that earns its keep. Metrics that stop getting reviewed are almost always the canary for a process that has quietly gone sideways.',
    ],
  },
  {
    slug: 'on-saying-no-to-dashboards',
    title: 'On saying no to dashboards',
    date: '2025-12-02',
    readTime: '4 min',
    tag: 'Systems',
    excerpt: 'The request is almost never actually for a dashboard. Find the decision underneath it.',
    body: [
      'When a client asks for "a dashboard", I have learned to ask one question before I write a line of SQL: what decision will this dashboard change?',
      'About half the time, the honest answer is "none — I just want to feel like I am on top of it". That is a real need, but a dashboard is the wrong shape for it. A weekly written summary, or a single number in a Slack channel, is almost always better.',
    ],
  },
]

export const GALLERY: GalleryItem[] = [
  { id: 'g1', title: 'Month-end close — Marlow & Finch', tag: 'Workflow map',   tone: 'navy',  aspect: 'tall'   },
  { id: 'g2', title: 'Customs broker integration',        tag: 'System diagram', tone: 'paper', aspect: 'wide'   },
  { id: 'g3', title: 'Referral triage flow',              tag: 'LLM pipeline',   tone: 'blue',  aspect: 'square' },
  { id: 'g4', title: 'Operating cadence — weekly',        tag: 'Cadence',        tone: 'paper', aspect: 'square' },
  { id: 'g5', title: 'CRM ↔ Billing reconciliation',      tag: 'Architecture',   tone: 'navy',  aspect: 'wide'   },
  { id: 'g6', title: 'Vendor consolidation, before/after', tag: 'Stack audit',   tone: 'paper', aspect: 'tall'   },
  { id: 'g7', title: 'Onboarding automation',             tag: 'Workflow map',   tone: 'blue',  aspect: 'square' },
  { id: 'g8', title: 'Quarterly ops review template',     tag: 'Document',       tone: 'paper', aspect: 'tall'   },
]

export const NOW: string[] = [
  'Working with several brick and mortar businesses in the South West of England Region.',
  'Adding value to the products/services I have on offer.',
  'Building out a small evaluation harness for LLM operations workflows in spare hours.',
  'Open to new In Person or Remote Workflow Audits from June 2026.',
]