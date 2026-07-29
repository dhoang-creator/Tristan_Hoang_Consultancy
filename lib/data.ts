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
  | { type: 'cta'; before: string; linkText: string; href: string; after: string }

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
    slug: 'dashboard-request-is-not-the-requirement',
    title: 'The request is almost never for a dashboard',
    date: '2026-07-22',
    readTime: '10 mins',
    tag: 'Right Tooling',
    excerpt:
        'Most dashboard requests are really requests for a decision to be made without you. Here is how to tell the difference before you pay for the wrong build.',
    body: [
      { type: 'h2', text: 'Why does nobody use the dashboard you paid for?' },
      'Because a dashboard answers a question, and what you actually wanted was for something to happen without you. Those are different products, and only one of them gets used on a Tuesday afternoon when everyone is busy.',
      'Nearly every dashboard request I have received, in-house and since, decomposed into something else once I asked what the person would do with the number. Not because the requester was wrong about their problem — they were describing the symptom accurately. They were just proposing the first solution that came to mind, which is the one they had seen before.',
      { type: 'h2', text: 'What are people actually asking for when they ask for a dashboard?' },
      'Almost always one of four things. Each has a cheaper and more effective answer than a dashboard',
      {
        type: 'ul',
        items: [
          '"I want to know when something goes wrong." That is an alert, not a dashboard. A dashboard requires someone to remember to look; an alert finds them. If the value of the number depends on noticing it quickly, a chart is the wrong container.',
          '"I want to stop asking three people for an update." That is a status field that updates itself. The pain is the chasing, not the absence of a graph — and chasing is solved by making the system record state as work happens, not by displaying state after the fact.',
          '"I want to trust the number." That is a data quality problem, and a dashboard will faithfully render bad data in an expensive typeface. Fix the source, or you have bought a more confident version of the same doubt.',
          '"I need to show the board / the client something." That is a reporting deliverable on a fixed cadence — a generated document, monthly, in their inbox. Nobody needs live tiles for a number they will look at twelve times a year.',
        ],
      },
      'Only the fifth case is a genuine dashboard: someone whose actual job is to explore data, looking for patterns they cannot specify in advance. That person exists in some businesses. In a 20-person SMB, usually they do not.',
      { type: 'h2', text: 'How do you tell the difference before you commit budget?'},
      'Ask one question, and keep asking it until the answer stops being a number: "What will you do differently the moment you see it?"',
      'Follow that thread and it terminates in one of three places, each pointing at a different build:',
      {
        type: 'ol',
        items: [
          'I\'d chase someone. Build the chase. The system should be issuing the reminder, not you reading a tile and then typing an email.',
          '"I\'d move the work to someone else." Build the routing rule. The condition you are watching for is a trigger, and triggers belong in code, not in a human\'s morning routine.',
          '"Nothing — I\'d just know." That is real, and it is fine, but it is a monthly report, not a dashboard. Price it accordingly.',
        ],
      },
      'This costs nothing to run and routinely removes the most expensive item from a scope. I would rather lose the line item than build something that gets opened enthusiastically for two weeks and then never again.',
      { type: 'h2', text: 'Isn\'t a dashboard still useful for visibility?'},
      'Visibility is only valuable if it changes a decision, and most SMB dashboards are consulted after the decision has already been forced by events.',
      'The honest test is whether anyone opened it last week without being reminded to. If a dashboard is not part of a routine that already exists — a Monday meeting, a weekly review someone genuinely runs — it will not create that routine by existing. Software does not manufacture discipline.',
      'The exception worth respecting: dashboards are good at revealing problems you could not have named in advance. If you are in a genuinely unfamiliar situation — new market, new service line, unexplained churn — exploration has real value. That is a specific, temporary need, not a default.',
      { type: 'h2', text: 'Frequently asked questions' },
      { type: 'h3', text: 'Should a small business build a dashboard?' },
      'Usually not first. If the underlying need is to know when something goes wrong, or to stop chasing colleagues for updates, an alert or an automated status field delivers the outcome faster and cheaper. Build the dashboard once you have a named person whose job includes exploring the data.',
      { type: 'h3', text: 'What is the difference between reporting and automation?' },
      'Reporting tells a person that something happened so they can act. Automation performs the action. Reporting leaves the work with you; automation removes it. Most requests framed as reporting are really requests for automation with the last step missing.',
      { type: 'h3', text: 'How do I know if a proposed build will actually get used?' },
      'Ask what the user will do differently within five minutes of seeing the output. If the answer is a concrete action, build the action. If the answer is vague, the build will be too.',
    ],
  },
  {
    slug: 'cutting-manual-logistics-work-teardown',
    title: 'What cutting 70% of manual logistics work actually involved',
    date: '2026-07-23',
    readTime: '10 mins',
    tag: 'Optimising for Manual Data Entry',
    excerpt:
      'A step-by-step breakdown of removing 70% of manual logistics coordination: what changed, what it saved, and the 30% that stayed manual on purpose.',
    body: [
      { type: 'h2', text: 'What was the process before?' },
      'A coordination loop that ran on people copying information between systems that had no connection to each other, roughly [VERIFY: N] times a day.',
      'The specifics, so this is a teardown rather than a claim — [VERIFY EVERY LINE]:',
      {
        type: 'ul',
        items: [
          'Context: in-house engineering at [EMPLOYER NAME — or: a European subscription business operating across multiple cities].',
          'The loop: [VERIFY: describe the actual sequence — e.g. order/booking lands in system A → someone reads it → re-keys the relevant fields into system B → checks a third source for availability → emails or messages a confirmation → updates a spreadsheet someone else depends on].',
          'Who did it: [VERIFY: how many people, what proportion of their week].',
          'Time per instance: [VERIFY: minutes].',
          'Failure mode: [VERIFY: what went wrong when it went wrong — missed handoffs, stale data, duplicate records, customers chased twice].',
        ],
      },
      'None of this was anyone\'s fault. It is what happens when tools are adopted one at a time to solve one problem each, and the joins between them are left to humans by default.',
      { type: 'h2', text: 'Where did the time actually go?' },
      'Not where the team assumed. The visible task — the re-keying — was a minority of the cost. The majority was in reconciliation: checking whether the two systems agreed, and repairing them when they did not.',
      'This is the part most automation proposals miss, and it is why "just connect the two tools" underdelivers. The measured split was roughly [VERIFY]:',
      {
        type: 'ul',
        items: [
          'Re-keying the data: the obvious cost, and the smaller one.',
          'Verifying it landed correctly: opening the second system to confirm, because past failures had taught people not to trust it.',
          'Repairing mismatches: finding the record that diverged, working out which version was right, fixing it — the single most expensive category, and entirely invisible in any job description.',
          'Chasing humans: asking a colleague whether they had done their step yet.',
        ],
      },
      'The reconciliation work exists because the loop had no source of truth. When two systems both hold a version of the same fact and neither is authoritative, every disagreement becomes an investigation.',
      { type: 'h2', text: 'What changed?' },
      'Three things, in order — and the order mattered more than any individual piece.',
      {
        type: 'ol',
        items: [
          'Established one authoritative record per entity. Before automating any transfer, we decided which system owned each fact. Everything else became a downstream copy that could be regenerated. This alone eliminated most reconciliation work, because disagreements stopped being ambiguous — one side was simply stale, and could be refreshed.',
          'Replaced the transfer with an event-driven flow. Instead of a person noticing something and copying it, the originating system emitted an event and the downstream systems consumed it. [VERIFY: name the actual mechanism — webhook, queue, scheduled reconciliation job, whichever it was].',
          'Made failures loud instead of silent. Every automated step that could fail reported when it did, to a named person, with the record ID attached. This is the step teams skip, and it is why some automation quietly makes things worse — silent failure is more expensive than manual work, because you find out weeks later.',
        ],
      },
      'The engineering judgement worth naming: step one is not automation at all. It is a modelling decision. Skipping straight to step two — which is what most no-code implementations do — automates the transfer while leaving the reconciliation cost fully intact, and the measured saving comes in far below what was promised.',
      { type: 'h2', text: 'What did the 70% not include?' },
      'The exceptions — and they were left manual deliberately, not as a failure of scope.',
      'Roughly [VERIFY: 30%] of instances involved a judgement no rule could safely encode: [VERIFY: e.g. an unusual request, a customer needing a decision made in their favour, a supplier failure requiring improvisation]. Attempting to automate those would have meant either a rule set too complex to maintain, or a system making decisions that ought to have a person\'s name attached.',
      'So the design routed them out. Exceptions were detected early, flagged clearly, and handed to a human with the context already assembled — which is a real saving too, just not one that shows up as automation. The people handling the hard 30% stopped spending their time on the easy 70% first.',
      'Any consultant promising to automate 100% of a coordination process is either scoping something simpler than they realise, or intending to hand you a rule engine you will be unable to change after they leave.',
      { type: 'h2', text: 'How does this map to a lettings or recruitment agency?' },
      'Directly — the structure is identical, only the nouns change. The same three steps apply wherever a business runs a coordination loop across systems that do not share a source of truth.',
      {
        type: 'ul',
        items: [
          'Lettings: an enquiry arrives, gets re-keyed into the property management system, checked against availability held somewhere else, confirmed by email, then recorded in a spreadsheet the lettings negotiator maintains privately. Same loop, same reconciliation cost.',
          'Recruitment: a candidate lands from a job board, is re-entered into the ATS, cross-checked against roles held in a different tool, submitted to the client by email, then tracked in a personal pipeline sheet. Same loop.',
          'Marketing agencies: a new client is set up in the CRM, then again in the project tool, then again in the accounting system, with the retainer scope living in a document none of them can see.',
        ],
      },
      'In all three, the expensive part is not the typing. It is the fact that four places hold a version of the truth and none of them is authoritative.',
      { type: 'h2', text: 'Frequently asked questions' },
      { type: 'h3', text: 'How long does a project like this take?' },
      '[VERIFY against your own scoping.] The modelling decision — establishing which system owns which fact — is typically the shortest phase in calendar time and the most consequential. The build is the predictable part; the mapping is where the value is decided.',
      { type: 'h3', text: 'Can this be done with Zapier or Make?' },
      'The transfer, often yes. The reconciliation and failure handling, rarely well. Those tools are excellent at moving a record from A to B and weak at answering "which of these two records is correct, and who needs to know it wasn\'t?" — which is where most of the cost sits.',
      { type: 'h3', text: 'What is the first thing to fix?' },
      'Decide which system is authoritative for each fact you care about. That decision costs nothing, requires no software, and determines whether everything built afterwards actually saves time.',
      {
        type: 'cta',
        before: 'If your business runs a version of this loop — and most businesses with more than three tools do — a ',
        linkText: 'Process Audit',
        href: '/services',
        after: ' maps it and puts a number on it before anything gets built.',
      },
      'Written by Tristan Hoang — automation and AI operations consultant, Bristol. Eight years building distributed systems and internal tooling for European retail and subscription businesses.',
      'Last updated: 23/07/2026',
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