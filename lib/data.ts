export interface Service {
  no: string
  name: string
  hook: string
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

export type BodyBlock =
  | string
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }

export interface Post {
  slug: string
  title: string
  date: string
  readTime: string
  tag: string
  excerpt: string
  body: BodyBlock[]
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
    hook: 'The fastest path to recovered hours.',
    summary:
      'I find the repetitive manual work quietly draining your week and replace it with reliable, auditable workflows: finance ops, onboarding, reporting. You stop paying salaried people to do work a system should do.',
    deliverables: [
      'Process audit',
      'n8n / Make / Zapier builds',
      'Custom Python services',
      'Handover documentation',
    ],
    duration: '2–5 days',
  },
  {
    no: '02',
    name: 'Implementation Strategy',
    hook: 'Stop paying for tools that don’t talk to each other.',
    summary:
      'I reshape your stack so data flows cleanly between CRM, finance and operations. No more re-keying the same number into four systems. The hidden tax of swivel-chair admin disappears.',
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
    hook: 'Practical AI, scoped to pay for itself.',
    summary:
      'Targeted use of LLMs for triage, drafting and classification, wired into the systems you already run, with an evaluation harness so it’s measured, not magical. Capacity you’d otherwise have to hire for, without the headcount.',
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
    hook: 'A senior operator owning your next bottleneck.',
    summary:
      'Ongoing leadership for teams of 10–80: the cadence, the metrics, the roadmap. You get the strategic engineering hire your stage needs, at a fraction of the salaried cost.',
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
    client: 'IKEA (Dutch/European Service Office)',
    sector: 'Retail & Logistics',
    headline: 'Days of repetitive work, gone, reinvested into work that moves the operation.',
    body: 'Internal logistics tools weren’t talking to each other, so people filled the gap by hand. I built a mobile app that aggregated and visualised the data in near real-time.',
    metric: '−70%',
    metricLabel: 'manual labour hours',
  },
  {
    client: 'Swapfiets',
    sector: 'Bike Leasing (European scale)',
    headline: 'No single source of truth for what needed doing now. I built one.',
    body: 'The team stopped reacting late and started getting ahead of demand.',
    metric: '2×',
    metricLabel: 'faster spike-response times',
  },
  {
    client: 'Ace & Tate',
    sector: 'Opticians',
    headline: 'A referral process carrying small, invisible delays at every step.',
    body: 'Trivial once, compounding across every referral, every day, for as long as the system runs.',
    metric: '11 min',
    metricLabel: 'saved per referral',
  },
]

export const POSTS: Post[] = [
  {
    slug: 'three-minute-task-hidden-cost',
    title: 'How Much Time Can Automation Save a 20-Person Team? (Worked Example)',
    date: '2026-07-21',
    readTime: '10 mins',
    tag: 'Cost-Savings',
    excerpt:
      'A three-minute task repeated twelve times a day costs a UK SMB roughly £3,000 a year per person. Here is the arithmetic, and how to find yours.',
    body: [
      { type: 'h2', text: 'How much does a three-minute task actually cost per year?' },
      'About £3,000 a year, per person, for a single task repeated twelve times a day. That is not a rounding error — it is a meaningful fraction of a junior salary, and it does not appear anywhere in your accounts.',
      'Here is the arithmetic in full, because the number only lands when you can check it:',
      {
        type: 'ul',
        items: [
          '3 minutes per instance, 12 instances a day = 36 minutes daily',
          '36 minutes × 5 days = 3 hours a week',
          '3 hours × 46 working weeks (after holiday and bank holidays) = 138 hours a year',
          '138 hours is roughly 3.5 working weeks — from one person, on one task',
          'At a £32,000 salary plus ~20% employer NI and overhead, the loaded cost is about £22 an hour',
          '138 × £22 = £3,036 a year',
        ],
      },
      'Now scale it. If three people in a 20-person business each carry that same task, you are spending roughly £9,100 a year and losing 414 hours — about a quarter of a full-time role — on work no one chose to do.',
      { type: 'h2', text: "Why doesn't this cost show up in your P&L?" },
      'Because it is already inside a salary you have decided to pay. Accounting recognises the wage; it does not recognise what the wage was spent doing.',
      'This is the structural reason small repetitive work survives so long. A £9,000 software subscription gets a procurement conversation, a renewal review and a line item someone defends every year. A £9,100 pattern of re-typing addresses between two systems gets nothing, because no invoice ever arrives for it. It is paid in headcount, and headcount is a fixed cost you have stopped questioning.',
      'The consequence is predictable. Volume grows, the three-minute tasks multiply, and the business hires — not because the work became more valuable, but because the friction consumed the capacity you already had. That is the hire you did not plan.',
      { type: 'h2', text: 'Which small tasks are worth automating first?' },
      'Rank them by annual minutes, not by how irritating they are. The tasks people complain about loudest are rarely the most expensive ones.',
      'Run this over one week — it takes about twenty minutes of attention, spread out:',
      {
        type: 'ol',
        items: [
          'Monday, 5 minutes. Open a spreadsheet with four columns: Task, Minutes per instance, Instances per day, People who do it.',
          'Tuesday to Thursday, 2 minutes a day. Each person adds any task they did more than twice that day which involved moving information between two places. That last clause matters — it filters out judgement work and leaves the mechanical work.',
          'Friday, 10 minutes. Multiply: minutes × instances × people × 230 working days ÷ 60 = annual hours. Sort descending.',
        ],
      },
      'Look only at the top three. Everything below them is noise until the top three are gone.',
      'The pattern that almost always tops the list is re-entry: the same fact typed into a second system because the first system cannot talk to it. Tenancy details from an enquiry form into the property manager. Candidate details from a job board into the ATS and then into payroll. A new client from the CRM into the accounting tool. Nobody designed this work. It accumulated.',
      { type: 'h2', text: 'What does it cost to fix?' },
      'For a single well-defined re-entry task, usually far less than the annual cost it removes — which is the only ratio worth arguing about.',
      'Two honest caveats, because the ratio is not always favourable:',
      {
        type: 'ul',
        items: [
          'Automation does not recover 100% of the time. Exceptions still need a human. A realistic target is 70–85% of the mechanical portion, and you should plan around the remainder rather than pretend it does not exist.',
          'If the underlying process is wrong, automating it makes the wrong thing faster. Sometimes the correct answer is to remove a step entirely, or fix the upstream form that is producing bad data — no automation required. I have recommended exactly that more than once, and it is a cheaper outcome for the business.',
        ],
      },
      "The test I apply before building anything: does this permanently remove the task, or does it just make a person's version of the task quicker? Only the first one compounds.",
      { type: 'h2', text: 'Frequently asked questions' },
      { type: 'h3', text: 'How much time can automation realistically save a 20-person team?' },
      'In UK SMBs with typical tooling, mechanical data-transfer work commonly runs at 2–5 hours per person per week. Removing 70–85% of that across a 20-person team recovers the equivalent of one to two full-time roles a year. The variance depends almost entirely on how many systems your data crosses.',
      { type: 'h3', text: 'Is it worth automating a task that only takes three minutes?' },
      'Yes, if it repeats. Frequency, not duration, determines cost. A three-minute task done twelve times daily costs more per year than a two-hour task done monthly.',
      { type: 'h3', text: 'How do I calculate the cost of a manual task?' },
      'Minutes per instance × instances per day × people doing it × 230 working days ÷ 60 = annual hours. Multiply by loaded hourly cost (salary + roughly 20% for employer NI, pension and overhead, divided by about 1,700 productive hours).',
    ],
  },
  {
    slug: 'the-quietest-automations',
    title: 'The quietest automations are the most valuable',
    date: '2026-04-22',
    readTime: '6 min',
    tag: 'Operations',
    excerpt:
      'The flashy demos rarely survive contact with a real ops team. The ones that stick share three boring traits.',
    body: [
      'There is a pattern I keep running into when I audit ops teams. The automations that get the most internal applause (the Slack bots, the demo dashboards, the "AI agent" prototypes) are almost never the ones doing real load-bearing work six months later.',
      'The work that survives is almost always invisible. A nightly script that reconciles two ledgers. A webhook that updates a single field on a single record. A small Python service that sits between a CRM and a billing platform and does nothing more interesting than rename three columns.',
      'Three traits these quiet automations share: they have exactly one owner; they fail loudly when they fail; and the team can describe what they do in a single sentence. When any of those three fall away, the automation becomes a liability, usually within a quarter.',
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
      'I run a 90-minute exercise I call "the rule of seven". Pull a list of every paid tool from finance. For each one, write down, in fewer than seven words, what would break if you cancelled it tomorrow. If you cannot, that is the answer.',
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
      'You would not give a junior analyst write-access to your billing system on day one. You would not let them email a customer without a senior review. You would absolutely give them well-scoped, repetitive work with clear acceptance criteria: exactly the kind of work an LLM is good at.',
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
      'Zapier is the right tool for the first three months of any automation problem. Past that, the things that made it fast at the start (the opaque connectors, the per-task pricing, the implicit ordering) become the things that slow you down.',
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
      'About half the time, the honest answer is "none, I just want to feel like I am on top of it". That is a real need, but a dashboard is the wrong shape for it. A weekly written summary, or a single number in a Slack channel, is almost always better.',
    ],
  },
]

export const GALLERY: GalleryItem[] = [
  { id: 'g1', title: 'Month-end close · Marlow & Finch', tag: 'Workflow map',   tone: 'navy',  aspect: 'tall'   },
  { id: 'g2', title: 'Customs broker integration',        tag: 'System diagram', tone: 'paper', aspect: 'wide'   },
  { id: 'g3', title: 'Referral triage flow',              tag: 'LLM pipeline',   tone: 'blue',  aspect: 'square' },
  { id: 'g4', title: 'Operating cadence · weekly',        tag: 'Cadence',        tone: 'paper', aspect: 'square' },
  { id: 'g5', title: 'CRM ↔ Billing reconciliation',      tag: 'Architecture',   tone: 'navy',  aspect: 'wide'   },
  { id: 'g6', title: 'Vendor consolidation, before/after', tag: 'Stack audit',   tone: 'paper', aspect: 'tall'   },
  { id: 'g7', title: 'Onboarding automation',             tag: 'Workflow map',   tone: 'blue',  aspect: 'square' },
  { id: 'g8', title: 'Quarterly ops review template',     tag: 'Document',       tone: 'paper', aspect: 'tall'   },
]

export const NOW: string[] = [
  'Adding value to the products/services I have on offer.',
  'Building out a small evaluation harness for LLM operations workflows in spare hours.',
  'Open to new In Person or Remote Workflow Audits from Q2 2026.',
]