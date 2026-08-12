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
    slug: 'cost-to-automate-admin-lettings-agency',
    title: 'What Does It Actually Cost to Automate Admin for a Small Lettings Agency?',
    date: '2026-07-28',
    readTime: '7 mins',
    tag: 'Cost-Savings',
    excerpt:
      'Real price ranges, payback periods and the three factors that actually drive cost when a UK lettings agency automates its admin — plus when it is too early to bother.',
    body: [
      'For a small UK lettings agency, a single well-scoped automation — one workflow, two or three connected systems — typically lands in the low thousands, and a full operational build across tenancy, maintenance and finance runs into the tens of thousands. The more useful question is payback period, and for most agencies doing 30 or more tenancies a month, a first build pays for itself inside twelve to eighteen months. This article breaks down what drives that number in both directions.',
      { type: 'h2', text: 'What are the actual price ranges?' },
      'Three shapes of engagement cover almost everything a 5–40 person agency needs.',
      {
        type: 'ul',
        items: [
          'A diagnostic audit — every manual handoff mapped, timed and priced, with a ranked build sequence — sits at £3,000–£4,000. It is deliberately standalone: you can take the output to any developer.',
          'A custom build of a real operational system, with multiple connected tools, exception handling and monitoring, runs £18,000–£30,000 depending on scope.',
          'Ongoing support and iteration once something is live is typically £750–£2,500 a month, driven by how much changes and how critical the workflow is.',
        ],
      },
      'Those are consulting-grade numbers for systems that run unattended and are expected to keep running. A single connector between two tools that tolerates occasional failure is a much smaller piece of work, and you should not be quoted a build price for one.',
      { type: 'h2', text: 'What actually drives the price up or down?' },
      'Not the number of systems, and not the number of steps. Three things.',
      { type: 'h3', text: '1. Whether your systems have usable APIs' },
      'Reapit, Alto and the mainstream accounting packages expose data properly, and that keeps a build cheap. Older or portal-only tools mean working through scheduled exports, email parsing or browser automation — all viable, all more expensive to build and more expensive to keep running when the vendor changes a page layout. If half your stack is portal-only, expect the higher end of any range.',
      { type: 'h3', text: '2. How much your data disagrees with itself' },
      'The same landlord spelled three ways across two systems is not a cosmetic problem. Before anything can be automated, something has to decide which record is authoritative and what happens when two nearly match. On a messy dataset this reconciliation work can be a third of the project. Agencies that have never merged duplicates are always surprised by this.',
      { type: 'h3', text: '3. What happens when it goes wrong' },
      'Building the path where everything works is fast. Designing what happens when the accounting API times out mid-write, when a tenancy record arrives with a missing deposit figure, or when the same referral comes in twice — that is most of the real engineering. Retries, idempotency, a review queue for ambiguous records, and an alert when something silently stops. It is the unglamorous part, and it is the difference between a system you trust at 2am and one somebody has to check every morning.',
      'If a quote is notably cheap, this is usually what has been left out. Ask directly what happens on failure.',
      { type: 'h2', text: 'What is the cost of not doing it?' },
      'This is the number most agencies never calculate, and it is usually larger than the build.',
      'Take one task: rekeying a new tenancy across the portal, the CRM and the accounting system. Nine minutes, forty tenancies a month, done by someone on £32,000:',
      {
        type: 'ul',
        items: [
          '9 min × 40/month × 12 = 72 hours/year',
          '72 hours × £22/hr fully loaded = £1,584/year',
        ],
      },
      'Fully loaded means salary plus employer National Insurance, pension, holiday cover and overhead — roughly 1.25 to 1.4× gross. A £32k administrator costs you about £22 an hour, not £16.',
      'And that is one task. Most agencies have between four and nine. Add the error correction: manual transcription runs around a 1% error rate, so 480 tenancies a year produces about five mistakes, and a single deposit logged against the wrong property can take two days to trace. Add the delay: enquiries arriving after 4pm get handled the next morning, and in a market where the first credible response usually wins the instruction, that is a revenue cost rather than an admin one.',
      'The thing that makes waiting expensive is the asymmetry. The build costs the same in January as it does in November. The manual work does not — it accrues every month, and it grows with your volume.',
      { type: 'h2', text: 'What does a realistic payback period look like?' },
      'Work it out as annual recovered cost divided by one-off build cost.',
      'An agency recovering 72 hours a year on one task plus one avoided two-day incident is recovering roughly £2,300 a year. Against a small connector build that is under a year. Against a £20,000 operational rebuild it is not, which tells you correctly that one task does not justify that project. Three or four tasks, plus the delay cost on new enquiries, usually does.',
      'The rule I use: under twelve months payback is an obvious yes. Twelve to twenty-four months is a yes if the process will still exist in five years, which lettings admin will. Beyond that, fix the process manually first and revisit.',
      { type: 'h2', text: 'When is it too early to automate?' },
      'Two situations, and I have turned down work in both.',
      'The first is when the process itself is wrong. If your team retypes data because the CRM was configured to hold fields it should never have held, automating the retyping locks a bad design into code and makes it harder to change later. Fix the upstream process, then automate what remains. That conversation usually produces a smaller invoice, not a larger one.',
      'The second is low frequency. A task that happens four times a month and takes six minutes costs under £110 a year. That is a checklist, not a project. Automation earns its keep on frequency, not on how irritating the task feels.',
      { type: 'h2', text: 'Frequently asked questions' },
      { type: 'h3', text: 'Can I just use Zapier or Make instead?' },
      'For two systems, modest volume and a tolerant failure mode, often yes, and you should. They become expensive and fragile once you need conditional routing, retry logic, or an audit trail of what happened and why. The switch point is usually a few thousand operations a month, or the first time a compliance requirement lands.',
      { type: 'h3', text: 'Do we need to replace our CRM?' },
      'Usually not, and I would be wary of anyone whose first answer is that you do. Replacing a system of record is a far larger and riskier project than connecting the one you already have.',
      { type: 'h3', text: 'How long does a build take?' },
      'A single clean integration is days of build once scoping is done. A multi-system operational flow with proper exception handling runs to weeks. Scoping quality determines both.',
      { type: 'h3', text: 'What happens if you are unavailable?' },
      'Everything is built on open, self-hostable tooling and documented so another engineer can pick it up. You own the system and the infrastructure it runs on. That is a deliberate design decision, not an afterthought.',
      { type: 'h2', text: 'Where to start' },
      'Before speaking to anyone, including me: list every task where someone reads data out of one system and types it into another, time the top three honestly with a stopwatch, and multiply by real monthly volume from your system of record rather than from memory. If the total comes in under £1,000 a year you have just saved yourself a project. Over £5,000 and you have a business case that will survive a conversation with your accountant.',
      {
        type: 'cta',
        before: 'A ',
        linkText: 'Tier 1 Audit',
        href: '/services',
        after:
          ' does that work properly across your whole operation and returns a ranked build sequence with expected payback for each item, whether or not I build any of it.',
      },
      {
        type: 'cta',
        before: '',
        linkText: 'Book a 20-minute call →',
        href: 'https://book.tristanhoang.co.uk',
        after: '',
      },
    ],
  },
  {
    slug: 'where-ai-belongs-in-a-business-process',
    title: 'Where AI Actually Belongs in a Business Process (and Where It Will Cost You)',
    date: '2026-07-29',
    readTime: '7 mins',
    tag: 'AI',
    excerpt:
      'A working rule for where language models belong in an automated process, where they must not go, and the five questions to ask any vendor selling you an AI agent.',
    body: [
      'Language models should read, extract, classify and draft. They should not decide, approve, or write to your system of record unsupervised. That single line between interpreting information and acting on it is what separates AI automation that runs reliably for years from the kind that quietly produces wrong answers for six weeks before anyone notices.',
      { type: 'h2', text: 'What are language models genuinely good at?' },
      'Turning unstructured human input into structured data. This is the capability that actually changed what is possible, and it is worth being precise about it.',
      'An enquiry email written by a person in a hurry contains a name, an intent, a property or role reference, an urgency level and sometimes a deadline, none of it labelled. Before, extracting that needed a human to read it. Now a model does it in under a second at a cost measured in fractions of a penny. Same for classifying support tickets, summarising a call transcript into a structured note, matching a free-text job description to a taxonomy, or drafting a first-pass reply for a person to approve.',
      'These tasks share one property: a wrong answer is visible and cheap. If the model misclassifies an enquiry, a human notices at the next step and corrects it. Nothing irreversible happened.',
      { type: 'h2', text: 'What should never be handed to a model?' },
      'Anything where a wrong answer is expensive, invisible, or irreversible. Concretely:',
      {
        type: 'ul',
        items: [
          'Financial actions: issuing a refund, approving an invoice, releasing a deposit, changing a payment amount.',
          "Compliance determinations: whether a candidate's right-to-work documentation is valid, whether a property meets a regulatory requirement.",
          'Writes to the system of record without validation: creating, merging or overwriting a customer, tenancy or candidate record.',
          'Anything a customer sees unreviewed, where a confidently wrong statement becomes a commitment you have to honour.',
        ],
      },
      'The problem is not that models are frequently wrong. It is that they are wrong without signalling it. A model that is uncertain produces output in exactly the same confident register as a model that is correct. Traditional software fails loudly, it throws an error. A language model fails fluently. That is a fundamentally different failure mode, and it needs a different design.',
      { type: 'h2', text: 'What does a safe architecture actually look like?' },
      'Deliberately boring. Three layers, with the model confined to the first.',
      { type: 'h3', text: 'Layer 1: Interpretation (the model)' },
      'Reads the input and produces structured output: fields extracted, a classification, a confidence signal, a draft. It does nothing else. It calls nothing, writes nothing and triggers nothing.',
      { type: 'h3', text: 'Layer 2: Validation and decision (deterministic code)' },
      'Checks the structured output against rules you can read: is the reference format valid, does the amount fall within an expected range, does this record already exist, is the confidence above threshold. Then it decides what happens. This layer is ordinary code, testable, auditable, and identical every time it runs.',
      { type: 'h3', text: 'Layer 3: Action, with proper failure handling' },
      'Writes to the system of record with an idempotency key so a retry cannot create a duplicate. Retries transient failures with backoff. Sends anything that fails repeatedly to a dead-letter queue rather than dropping it silently. Alerts a human when the queue grows.',
      'And running alongside all three: a human review queue. Anything the model flagged as low confidence, anything that failed validation, anything ambiguous. Typically 3–8% of records. The point is not to remove humans; it is to make sure the only things reaching a human are the things that genuinely need judgement.',
      'This is not novel thinking. It is standard distributed-systems practice applied to a new component. What is novel is how often it gets skipped, because the demo works without it.',
      { type: 'h2', text: 'Why do AI automation projects fail?' },
      'Almost never because the model underperformed. Three causes account for most of it.',
      'The first is no line between reading and deciding, the model was handed authority it cannot exercise responsibly, and it exercised it confidently anyway. The second is no exception path: the build handles the case where everything works and has nothing for the 4% of inputs that are malformed, duplicated or unusual, so those records vanish or corrupt something. The third is no observability: nobody can answer "what did it do last Tuesday and why", so when a discrepancy surfaces months later there is no way to trace it, and trust in the whole system collapses at once.',
      'All three are design decisions made at the start, not model limitations discovered later.',
      { type: 'h2', text: 'What should I ask a vendor selling me an AI agent?' },
      'Five questions. The answers tell you more than any demo.',
      {
        type: 'ol',
        items: [
          'Which decisions does the model make, and which are made by deterministic code? A vendor who cannot separate these has not thought about it.',
          '"What happens when the model is uncertain: does it guess, or does it escalate?" "It escalates" should come with a description of the queue and who monitors it.',
          'What happens if the target system is down mid-write? You want to hear the words retry, idempotency, and dead-letter queue, or plain-English equivalents.',
          'How do I see what it did and why, three months from now? An audit log of inputs, model output and actions taken.',
          'Who owns and hosts this if we part ways? Open tooling on infrastructure you control means you keep the system.',
        ],
      },
      { type: 'h2', text: 'Does this make AI automation more expensive?' },
      'The model calls are the cheapest part of any of this, usually a rounding error next to the engineering. The validation, exception handling and observability are most of the build cost, and they are exactly what separates a system running unattended in year three from one abandoned in month four.',
      'It is also why the sequencing matters. Most operations do not need a model at the centre. If the underlying problem is that two systems do not talk to each other, the fix is an integration, and adding a language model to it adds cost and a failure mode for no benefit. The model earns its place specifically where input is unstructured and human. Everywhere else, deterministic code is cheaper, faster and more reliable.',
      { type: 'h2', text: 'Frequently asked questions' },
      { type: 'h3', text: 'Which model should we use?' },
      'Far less important than the architecture around it. For extraction and classification in a well-designed pipeline, mid-tier models are usually sufficient and materially cheaper than frontier ones. Structure your system so the model is a swappable component and this stops being a strategic decision.',
      { type: 'h3', text: 'Is our data safe if we use an LLM?' },
      'It depends entirely on the deployment. Self-hosted or UK/EU-hosted inference with a no-training agreement is achievable and is what I default to for anything touching personal data. Ask where inference runs, what is retained, and for how long — and get it in writing.',
      { type: 'h3', text: 'Can AI replace our admin person?' },
      'It can remove most of the transcription and triage from their week. It cannot take responsibility for a decision, and someone still has to work the exception queue. In practice, the same person handles two to three times the volume rather than being replaced.',
      { type: 'h2', text: 'Where to start' },
      'Take one process you were considering handing to AI and split it on paper into reading, deciding and acting. If the model ends up in the deciding column, that is the piece to redesign before anything gets built.',
      {
        type: 'cta',
        before:
          'If you already have an AI workflow running and cannot answer the five vendor questions above about your own system, an ',
        linkText: 'Advanced AI Agent Systems',
        href: '/services',
        after: ' review is worth doing before it produces a discrepancy you have to explain.',
      },
      {
        type: 'cta',
        before: '',
        linkText: 'Book a 20-minute call →',
        href: 'https://book.tristanhoang.co.uk',
        after: '',
      },
    ],
  },
  {
    slug: 'cost-of-retyping-data-between-crm-and-accounting',
    title: 'The True Cost of Re-Typing Data Between Your CRM and Your Accounting Tool',
    date: '2026-07-30',
    readTime: '7 mins',
    tag: 'Cost-Savings',
    excerpt:
      'A method for pricing manual data re-entry between your CRM and accounting system, with real numbers from UK SMB engagements — and when integration is not the answer.',
    body: [
      'Most UK SMBs are spending between £1,500 and £9,000 a year on manual data re-entry between systems, and almost none of them have it written down anywhere. This article shows you how to work out your own number in about twenty minutes, what it costs to fix, and the two situations where you should not bother.',
      { type: 'h2', text: 'How much does manual data re-entry actually cost?' },
      'Minutes per occurrence, times occurrences per month, times twelve, times the fully-loaded hourly cost of the person doing it. The last part is where most estimates go wrong.',
      'Fully loaded means salary plus employer National Insurance, pension, holiday cover, software seats and the share of overhead that person carries — roughly 1.25 to 1.4 times gross salary for a UK SMB. A £32,000 administrator is not costing you £16.40 an hour on a 37.5-hour week. They are costing you closer to £22.',
      'So for a lettings agency rekeying each new tenancy across a portal, a CRM and an accounting package:',
      {
        type: 'ul',
        items: [
          '9 minutes × 40 tenancies/month = 6 hours/month',
          '6 hours × 12 months = 72 hours/year',
          '72 hours × £22/hr fully loaded = £1,584/year',
        ],
      },
      'That is the visible number. In my experience it is between a third and a half of the true one.',
      { type: 'h2', text: 'What does the visible number miss?' },
      'Three costs that never appear in the time calculation but always appear in the P&L.',
      { type: 'h3', text: '1. Error correction' },
      'Manual transcription between systems runs at roughly a 1% error rate in normal conditions, higher when the person is rushing or the source data is messy. At 480 tenancies a year that is around five errors — a deposit against the wrong property, a mistyped rent figure, a duplicate contact. Each costs far more to find and unwind than it did to create. One reconciliation error I saw took two days to trace and cost more than the annual data-entry time that produced it.',
      { type: 'h3', text: '2. Delay' },
      'Batched manual work happens when someone gets round to it. Work arriving at 4pm gets processed the next morning. If the process touches a customer, a candidate or an applicant, that delay is a conversion cost rather than an admin cost and it is usually the largest number on the page. In recruitment particularly, first credible response time behaves like a leading indicator of placement rate.',
      { type: 'h3', text: '3. Capacity ceiling' },
      'Manual re-entry scales linearly with volume. Grow 30% and you need 30% more of it. That is the point at which owners hire an administrator, and a £32k hire is a £40k+ fully-loaded commitment made to solve a problem that was never a headcount problem. A three-minute task is not small. It is a hire you did not plan.',
      { type: 'h2', text: 'What does it cost to fix?' },
      'For a single well-defined integration between two systems with usable APIs, expect a build in the low thousands. For a multi-system flow with routing, validation and exception handling, expect materially more. Three things drive the cost, and none of them is the number of systems:',
      {
        type: 'ul',
        items: [
          'Whether both systems have a real API. Portal-scraping and email-parsing workarounds are viable but cost more to build and more to maintain.',
          'How much your data disagrees with itself. Two systems that spell the same client three ways need a matching strategy before anything else can happen.',
          'What happens when it goes wrong. Handling the happy path is quick. Designing retries, idempotency and a human review queue for the 4% of records that are ambiguous is most of the real work, and is the difference between an automation you trust and one you check every morning.',
        ],
      },
      'The useful test is payback period, not price. Remove 72 hours a year at £22 fully loaded plus one two-day incident and you are recovering roughly £2,300 annually against a one-off cost. Under two years payback on a process that will still exist in five is a straightforward yes. Under twelve months is an obvious one.',
      { type: 'h2', text: 'When should you not automate this?' },
      'Two situations, and I turn work away for both.',
      'The first is when the process itself is wrong. If your team retypes data because the CRM was set up to hold fields it should never have held, automating the retyping preserves a bad design in code and makes it harder to change later. Fix the upstream process, then automate what is left. I have waived an obvious automation for exactly this reason more than once, and the client ended up with a smaller bill.',
      'The second is low and irregular volume. A task that happens four times a month and takes six minutes costs under £110 a year. That is a checklist, not a project. Automation earns its keep on frequency, not on how annoying the task feels.',
      { type: 'h2', text: 'How do I work out my own number this week?' },
      'Twenty minutes, no tools required.',
      {
        type: 'ol',
        items: [
          'List every task where someone reads data out of one system and types it into another. Most SMBs find between four and nine.',
          'For the top three by gut feel, time them honestly — actually time them, once, with a stopwatch. Self-reported estimates run 30–40% low.',
          'Pull monthly volume from the system of record rather than from memory.',
          'Apply the fully-loaded hourly rate, not the salary-derived one.',
          'Add one line for the worst error the process has caused in the last twelve months, and what it cost to fix.',
        ],
      },
      'The total is your annual bill for doing nothing. It is the only number that makes the build decision obvious in either direction.',
      { type: 'h2', text: 'Frequently asked questions' },
      { type: 'h3', text: 'Is Zapier or Make enough for this?' },
      'Often yes, for two systems, low volume and a tolerant failure mode. They become expensive and fragile when you need conditional routing, retry logic, or an audit trail of what happened and why. The switch point is usually a few thousand operations a month or the first compliance requirement, whichever arrives first.',
      { type: 'h3', text: 'How long does a typical integration take to build?' },
      'A single clean two-system integration is days of build once scoping is done. Multi-system flows with exception handling run to weeks. The scoping determines both — a well-specified build is fast, a vague one is not.',
      { type: 'h3', text: 'What if our systems do not have APIs?' },
      'There is almost always a path — scheduled exports, email parsing, or a headless browser flow. It costs more to build and more to maintain, so it changes the payback maths rather than ruling the project out.',
      { type: 'h3', text: 'Do we need to replace our CRM?' },
      'Usually not, and I would be sceptical of anyone whose first answer is that you do. Replacing a system of record is a much larger, much riskier project than connecting the one you have.',
      { type: 'h2', text: 'Where to start' },
      'Do the twenty-minute calculation above before you speak to anyone, including me. If the number comes back under £1,000 a year, you have saved yourself a project. If it comes back over £5,000, you have a business case that will survive a conversation with your accountant.',
      {
        type: 'cta',
        before: 'A ',
        linkText: 'Tier 1 Audit',
        href: '/services',
        after:
          ' maps every manual handoff in your operation, prices each one, and returns a ranked build sequence with expected payback — whether or not I build any of it.',
      },
      {
        type: 'cta',
        before: '',
        linkText: 'Book a 20-minute call →',
        href: 'https://book.tristanhoang.co.uk',
        after: '',
      },
    ],
  },
  {
    slug: 'business-process-automation-cost-for-uk-smb',
    title: 'How Much Does Business Process Automation Cost for a UK SMB?',
    date: '2026-08-11',
    readTime: '10 mins',
    tag: 'Cost-Savings',
    excerpt: 'Automations are often cheaper than hiring',
    body: [
      "Business process automation for a UK SMB with 5-40 staff typically costs between £3,000 and £25,000 for a single well-defined project, with most engagements I run landing between £5,000 and £12,000. The final number depends on how many systems you're connecting, how messy your data is, and whether you need something built once and left alone or something maintained ongoing. Anyone quoting you a single fixed figure before seeing your systems is guessing. I'll walk through what actually drives the cost, show you the maths on payback, and tell you the two situations where I turn the work down outright.",
      { type: 'h2', text: 'How much does business process automation cost?' },
      'The honest answer is: it depends on scope, but here are the bands I see across engagements in Bristol and the South West.',
      {
        type: 'ul',
        items: [
          'Single-process automation (one trigger, one or two systems, e.g. Xero invoice reminders or a form-to-CRM handoff): £2,500 to £6,000.',
          'Multi-step workflow (three or more systems, conditional logic, some data cleaning): £6,000 to £15,000.',
          'Departmental overhaul (finance, ops, or client onboarding rebuilt across four or more tools with reporting): £15,000 to £30,000+.',
        ],
      },
      "On top of build cost, budget 10-20% of the original build fee per year for maintenance, because APIs change, staff change, and business rules drift. I've had clients skip this and end up with a workflow silently failing for three weeks because a spreadsheet column got renamed.",
      { type: 'h2', text: 'What actually drives the price up or down?' },
      'Five things move the number more than anything else:',
      {
        type: 'ol',
        items: [
          "Data quality. If your customer records in Sage or your property data in Reapit or Alto are inconsistent, someone has to clean that before automation works. I've spent more hours fixing duplicate supplier records than building the actual workflow.",
          'Number of systems involved. Two systems talking to each other is straightforward. Five systems with different authentication methods and rate limits is a different job entirely.',
          'Exception handling. The happy path is cheap. Building for what happens when a payment fails, a field is blank, or an API times out is where most of the hours go.',
          'Compliance and audit requirements. If you need a record of every action for accounting or regulatory reasons (common in property management and finance), that adds build time.',
          "Who maintains it afterwards. A one-off script nobody touches again is cheaper than a workflow your team will edit monthly, because the second needs documentation and a simpler interface.",
        ],
      },
      { type: 'h2', text: "What's a realistic worked example?" },
      'Let me show the arithmetic rather than assert a saving, because most automation pitches skip this part.',
      "Say you employ an administrator on £26,000 gross salary, chasing rent arrears manually using data pulled from Reapit. Using a fully-loaded rate of 1.3x gross salary to account for employer's National Insurance, pension contributions, and overheads:",
      {
        type: 'ul',
        items: [
          'Gross salary: £26,000',
          'Loaded factor: 1.3',
          'Loaded annual cost: £26,000 × 1.3 = £33,800',
          'Working hours per year (after leave, sick days): 1,650',
          'Fully-loaded hourly rate: £33,800 / 1,650 = £20.48',
        ],
      },
      'Now suppose that administrator spends 5 hours a week manually checking arrears reports and sending chase emails, and automation cuts that to 1 hour a week of review because the system flags overdue accounts and drafts the emails automatically.',
      {
        type: 'ul',
        items: [
          'Hours saved per week: 4',
          'Working weeks per year: 46',
          'Total hours saved per year: 4 × 46 = 184',
          'Annual saving: 184 × £20.48 = £3,768',
        ],
      },
      "Against a build cost of £4,500 to £7,000 for that specific workflow, payback lands somewhere between 14 and 22 months. That's a reasonable case for doing it. If the same client wanted five different arrears workflows across five property types with different rules, the build cost would roughly double but the saving wouldn't, because the marginal admin time saved per extra workflow shrinks. That's the calculation I ask every client to do before signing anything.",
      { type: 'h2', text: 'Should I build this myself with Zapier, Make or n8n instead?' },
      "You can, and for simple single-trigger workflows I'd tell you to. If you need to get a Google Form submission into Xero as a draft invoice, or push a new lead from a website form into a CRM, a no-code tool will get you there in an afternoon for the cost of a subscription, typically £15 to £70 a month depending on volume.",
      "Where these tools start costing you more than they save is volume and complexity. Per-task pricing on Zapier and Make gets expensive quickly once you're processing thousands of records a month. n8n is cheaper to run if you're comfortable self-hosting, but then you've taken on server maintenance, which is its own job. I've taken over three client accounts this year where the original no-code workflow cost more in subscription fees than a properly built, purpose-specific script would have cost to run. The trade-off isn't good versus bad, it's speed-to-build versus cost-at-scale. Know which one matters more for your situation before you commit.",
      { type: 'h2', text: 'When would you turn this work down?' },
      "Two situations, both of which I've walked away from in the last year.",
      "First: when the underlying process is broken, not slow. If a client wants me to automate a workflow that exists because of an organisational disagreement about who owns a decision, automating it just makes the argument happen faster and with less human judgement in the loop. I had a client want automated approval routing for purchase orders where the real problem was that two directors disagreed on spending limits. No script fixes that. I told them to sort the policy first and come back.",
      "Second: when the volume doesn't justify it. If a task takes someone 20 minutes a week, and building the automation would take 15 hours at a fully-loaded consulting rate of £75 to £120 an hour, you're looking at a payback period measured in years, if ever. I turned down a hospitality client last spring who wanted booking confirmations automated across three systems for a task that took their receptionist 15 minutes a day. The maths didn't work, and I said so.",
      "If a consultant never turns down work on these grounds, they're optimising for their invoice, not your outcome.",
      { type: 'h2', text: 'What ongoing costs should I budget for after launch?' },
      'Budget 10-20% of build cost per year for maintenance, plus whatever subscription fees the underlying tools carry. Xero, Sage, and Companies House integrations are generally stable because they\'re widely used and well documented. Smaller or niche software, including some property and legal case management systems, changes its API with less notice, and that\'s where maintenance hours actually go. I put a maintenance clause in every contract now specifying response time and monthly review, because "it broke and nobody noticed for a month" is the single most common failure mode I see in automation projects built by someone who then disappeared.',
      { type: 'h2', text: 'Frequently asked questions' },
      { type: 'h3', text: 'Is automation cheaper than hiring another admin person?' },
      'Often yes for repetitive, well-defined tasks, but not always. Compare the annual saving in hours (as shown above) against build plus maintenance cost over three years. If the task changes frequently or needs judgement, a person is usually the better investment.',
      { type: 'h3', text: 'How long does a typical project take to build?' },
      'A single-process automation usually takes one to three weeks from scoping to live. Multi-step workflows with several systems typically take four to eight weeks, mostly because of data cleaning and testing exception cases, not the actual build.',
      { type: 'h3', text: 'Do I need to replace my existing software to automate?' },
      'Almost never. Most of the work I do connects existing systems, such as Xero, your CRM, and your booking software, rather than replacing any of them. Replacing software is a much bigger and separate decision.',
      { type: 'h3', text: 'Can I automate something and then take it in-house later?' },
      "Yes, and I build for that deliberately. I document workflows in plain language, not just code comments, specifically so a client's own staff can take over maintenance once they're confident, if that's what they want.",
      { type: 'h2', text: 'Where to start' },
      "Before you spend anything, pick one recurring task that happens at least weekly, time it honestly for a week using a stopwatch or your phone timer, and run the arithmetic above using your own salary figures and a 1.25 to 1.4x loading factor. If the annual saving is under £1,500, don't automate it yet. If it's over £3,000, you've got a solid business case to bring to whoever you talk to next, whether that's me or someone else.",
      {
        type: 'cta',
        before: 'If you want a second opinion on whether a specific process is worth automating before you spend a penny, ',
        linkText: 'I offer a 20-minute call',
        href: 'https://sign.tristanhoang.co.uk',
        after: ' to talk through the numbers.',
      },
      {
        type: 'cta',
        before: '',
        linkText: 'Book a 20-minute call →',
        href: 'https://book.tristanhoang.co.uk',
        after: '',
      },
    ],
  },
  {
    slug: 'what-a-uk-small-business-should-budget-for-automation',
    title: 'How Much Should a UK Small Business Budget for Automation?',
    date: '2026-08-12',
    readTime: '7 mins',
    tag: 'Automation Budgeting',
    excerpt: 'What do you get out of an automation project?',
    body: [
      "Most UK small businesses with 5-40 staff should budget somewhere between £1,500 and £15,000 for a first automation project, depending on how many systems need connecting and how messy the underlying data is. That's the honest range I quote after eight years doing this work, not a headline figure designed to get you on a call. The real question people are asking when they type \"how much does business automation cost for a small business\" into Google is whether it's worth the money at all, and that depends entirely on what a task currently costs you in staff time. So before you budget anything, you need to know what you're actually paying for the manual version of the work you want to remove.",
      { type: 'h2', text: 'How much does business automation cost for a small business?' },
      "I've quoted projects from £800 to £22,000 over the past three years. The spread isn't random. A single workflow, such as pulling new enquiries from a web form into Xero as draft invoices, sits at the £800 to £2,500 end. A multi-system project, say connecting Reapit, Xero and a mailbox for a lettings agency with approval steps and error handling, runs £6,000 to £15,000. Anything above that usually means you're building something closer to bespoke software, and at that point I tell clients to talk to a proper development shop, not an automation consultant.",
      "The variable that moves price more than anything else is data quality. Clean, consistent inputs (same file format every time, same field names, no manual re-keying halfway through) keep a project cheap. Messy data, three different spreadsheet formats depending on who filled it in, or a legacy system with no proper API, adds weeks and pounds. I've had projects double in scope purely because the client's product codes in Sage didn't match the codes in their e-commerce platform.",
      { type: 'h2', text: 'What does a typical automation project actually include?' },
      "A project quote should cover four things, and if a supplier's quote only covers one, ask why.",
      "First is discovery: mapping the current process, usually a half-day to two days on site or on video calls. Second is build: the actual connections and logic. Third is testing with real data, not sample data, because sample data never breaks and real data always does. Fourth is a handover document and a short training session so your team can make small changes without calling me every time a field name shifts.",
      'What a quote should never include, in my view, is an open-ended "support retainer" sold as mandatory. Some automations need ongoing monitoring because the systems they touch change often (anything involving HMRC-facing software falls into this category). Most don\'t. I build things to run unattended and only charge for maintenance when something in the underlying systems actually changes.',
      { type: 'h2', text: 'How do I work out if automation pays for itself?' },
      "This is the calculation that matters more than any quote you'll receive. You need the fully-loaded cost of the person doing the task now, not their gross salary, because salary alone understates the true cost by 25% to 40% once you add employer's National Insurance, pension contributions, holiday cover, and overheads.",
      'Here\'s a worked example from an actual engagement, figures rounded for clarity.',
      'An office administrator on a gross salary of £26,000 works 37.5 hours a week across 46 working weeks a year (52 weeks minus 5.6 weeks statutory holiday, rounded down).',
      {
        type: 'ul',
        items: [
          'Annual working hours = 37.5 × 46 = 1,725 hours',
          'Gross hourly rate = £26,000 ÷ 1,725 = £15.07',
          'Fully-loaded hourly rate (× 1.3) = £15.07 × 1.3 = £19.59',
        ],
      },
      'That administrator spends 45 minutes a day manually re-entering supplier invoices from email attachments into Sage. Automating the extraction and entry cuts that to 5 minutes a day of checking, saving 40 minutes daily.',
      {
        type: 'ul',
        items: [
          'Weekly time saved = 40 minutes × 5 days = 200 minutes = 3.33 hours',
          'Annual time saved = 3.33 hours × 46 weeks = 153 hours',
          'Annual value of time saved = 153 × £19.59 = £2,997',
        ],
      },
      "Against a build cost of £2,200 for that specific workflow, the project pays for itself in just under nine months and then keeps paying every year after. That's the calculation I run before I quote anything, and I'd encourage you to run it yourself before you call anyone, including me.",
      { type: 'h2', text: 'When should I use off-the-shelf tools like Zapier, Make or n8n instead of a custom build?' },
      "Honestly, more often than most consultants will admit. If your workflow is a single trigger and a single action, new row in a Google Sheet triggers a Slack message, there is no reason to pay someone £2,000 to build that when a £20-a-month Zapier plan does it in twenty minutes. I've turned down work because a client's need was fully solvable with a free Make plan and I said so on the discovery call.",
      "Where these tools start costing you more than they save is volume and complexity. Once you're processing hundreds of records a day, or the logic has more than three or four conditional branches, per-task pricing on these platforms gets expensive fast, and debugging a tangled Zapier setup built by three different people over two years is a job I charge more for than building the same thing properly from scratch. n8n sits in a middle ground, since you can self-host it and avoid per-task fees, but then you've taken on hosting and updates as a technical responsibility, which is fine if someone on your team is comfortable with that and a liability if nobody is.",
      'My rule of thumb: if you can sketch the whole workflow on one side of A4 with fewer than five steps, try the off-the-shelf tool yourself first. If it needs a diagram with branches and exceptions, get a proper quote.',
      { type: 'h2', text: 'When should I not automate at all?' },
      "I turn down roughly one in six enquiries, and it's usually one of two situations.",
      "The first is when the process itself is broken, not just manual. If your quote-to-invoice process involves five people, three of whom don't know what the other two are doing, automating the current mess just makes the mess run faster and produces errors nobody notices until month-end. I had a client last year who wanted their stock reconciliation automated between two warehouses. The reconciliation process itself hadn't been agreed between the two site managers for over a year. I told them to fix the process on paper first and come back once there was one agreed method. They did, six weeks later, and the automation took three days to build once the logic was actually consistent.",
      "The second is low-frequency, low-cost tasks. If a task takes fifteen minutes, happens twice a month, and the person doing it isn't a bottleneck for anything else, the maths rarely works. Fifteen minutes twice a month at a loaded rate of £20 an hour is £10 a month, £120 a year. No automation project pays for itself against £120 a year, and I'd rather tell you that on the phone than take a £1,500 deposit for it.",
      { type: 'h2', text: 'What UK systems do these automations usually connect to?' },
      'Most of my work touches a fairly predictable set of tools. On the finance side, that\'s Xero and Sage, pulling data in from bank feeds, e-commerce platforms or supplier emails. On the property side, Reapit and Alto come up constantly for lettings and estate agency clients, usually connecting tenant enquiries or maintenance requests through to email and calendar systems. Companies House data shows up in due diligence and onboarding workflows, particularly for accountants and legal practices checking new client details automatically rather than manually searching the register.',
      "The common thread is that none of these systems were built to talk to each other by default. The value isn't in any single tool, it's in the glue between them, and that glue is what you're actually paying for when you commission an automation project.",
      { type: 'h2', text: 'Frequently asked questions' },
      { type: 'h3', text: 'How long does a typical project take?' },
      'A single-workflow project usually takes one to two weeks from signed quote to handover. A multi-system project with several conditional steps typically runs four to eight weeks, mostly because testing against real, messy data takes longer than the build itself.',
      { type: 'h3', text: 'Do I need to hire a developer to maintain this?' },
      "Usually not. Well-built automations run without intervention for months. What you do need is one person internally who understands roughly how it works, so that when a system update changes a field name, they know who to call rather than assuming the whole thing is broken.",
      { type: 'h3', text: "What's the cheapest way to start?" },
      "Pick your single most repetitive, most hated manual task, the one everyone complains about in the same meeting every month, and try to solve it yourself with a free trial of Zapier or Make before spending anything. If you can't get it working in a couple of hours, that's useful information, and it tells whoever you hire exactly where the real complexity sits.",
      { type: 'h3', text: 'Will this work with my accounting software?' },
      "Xero and Sage both have reasonably open APIs and I've built against both without major issues. Older desktop-only accounting software, or heavily customised legacy systems, is a different conversation, and I'll usually ask for API documentation before quoting anything involving a system I haven't touched before.",
      { type: 'h2', text: 'Where to start' },
      "This week, without hiring anyone, pick one manual task and run the arithmetic I showed above using your own numbers: gross salary, hours worked, minutes spent on the task daily or weekly. Multiply by 1.25 to 1.4 to get a fully-loaded hourly rate, then work out the annual cost of that task in its current manual form. If the annual figure is comfortably above £1,500, it's worth a proper conversation. If it's below £500, put your energy into something else this quarter.",
      {
        type: 'cta',
        before: 'If you want a second pair of eyes on that number before you spend anything, ',
        linkText: 'book a 20-minute call',
        href: 'https://book.tristanhoang.co.uk',
        after: ' and bring the figures with you.',
      },
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