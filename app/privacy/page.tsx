import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Tristan Hoang',
  description:
    'How Tristan Hoang | Automation Consultancy collects, uses and protects personal data under UK GDPR.',
}

const VERSION = 'Version 1.0'
const EFFECTIVE = '19 July 2026'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginTop: 44 }}>
      <h2
        style={{
          margin: '0 0 14px',
          fontSize: 22,
          letterSpacing: '-0.01em',
          fontWeight: 600,
        }}
      >
        {title}
      </h2>
      <div style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-mute)' }}>{children}</div>
    </section>
  )
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ margin: '22px 0 8px', fontSize: 17, fontWeight: 600, color: 'var(--ink)' }}>
      {children}
    </h3>
  )
}

function Item({ lead, children }: { lead: string; children: React.ReactNode }) {
  return (
    <div style={{ margin: '0 0 16px' }}>
      <p style={{ margin: 0, fontWeight: 600, color: 'var(--ink)' }}>{lead}</p>
      <p style={{ margin: '4px 0 0' }}>{children}</p>
    </div>
  )
}

const linkStyle: React.CSSProperties = { textDecoration: 'underline', textUnderlineOffset: 3 }

export default function PrivacyPage() {
  return (
    <main style={{ padding: '64px 36px 120px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <a
          href="/"
          className="footer-link"
          style={{
            fontSize: 13.5,
            color: 'var(--ink-mute)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          ← Back to site
        </a>

        <div
          style={{
            marginTop: 48,
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--silver-2)',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          }}
        >
          GDPR · {VERSION} · Effective {EFFECTIVE}
        </div>

        <h1
          style={{
            margin: '16px 0 0',
            fontSize: 'clamp(36px, 5vw, 56px)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            fontWeight: 600,
          }}
        >
          Privacy Policy
        </h1>

        <Section title="1. Who we are">
          <p style={{ margin: '0 0 14px' }}>
            This privacy notice explains how Tristan Hoang, trading as Tristan Hoang | Automation
            Consultancy (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses and
            protects personal data. We are a sole trader based in Bristol, United Kingdom,
            providing business process automation consultancy services to UK businesses.
          </p>
          <p style={{ margin: 0 }}>
            <strong>Data controller:</strong> Tristan Hoang, trading as Tristan Hoang | Automation
            Consultancy
            <br />
            <strong>Trading address:</strong> 92 Coniston Road, Patchway, Bristol, BS345JT
            <br />
            <strong>Contact email:</strong>{' '}
            <a href="mailto:trist@tristanhoang.co.uk" style={linkStyle}>
              trist@tristanhoang.co.uk
            </a>
            <br />
            <strong>Website:</strong> www.tristanhoang.co.uk
            <br />
            <strong>ICO registration:</strong> see Section 13
          </p>
        </Section>

        <Section title="2. Scope of this notice">
          <p style={{ margin: '0 0 14px' }}>
            This notice applies to personal data for which we determine the purposes and means of
            processing, in other words, where we act as a data controller. That covers:
          </p>
          <ul style={{ margin: '0 0 14px', paddingLeft: 22 }}>
            <li style={{ marginBottom: 6 }}>Visitors to our website.</li>
            <li style={{ marginBottom: 6 }}>
              Prospective clients we contact, or who contact us.
            </li>
            <li style={{ marginBottom: 6 }}>
              Client contacts, suppliers and other business contacts.
            </li>
            <li>Individuals who subscribe to our communications or attend our events.</li>
          </ul>
          <SubTitle>What this notice does not cover</SubTitle>
          <p style={{ margin: 0 }}>
            Where we build, host or maintain automation workflows for a client, any personal data
            belonging to that client&rsquo;s customers, candidates, tenants, employees or contacts
            is processed on the client&rsquo;s instructions. For that data the client is the
            controller and we act as a processor. That relationship is governed by our Data
            Processing Agreement and the relevant Statement of Work, not by this notice. If you are
            an individual whose data has been processed through one of our clients&rsquo; systems,
            please contact that organisation directly.
          </p>
        </Section>

        <Section title="3. Personal data we collect">
          <Item lead="Website enquiry data">
            <strong>What:</strong> Name, business email address, telephone number, company name,
            job title, and the content of your enquiry.
            <br />
            <strong>Source:</strong> Directly from you via our contact form or by email.
          </Item>
          <Item lead="Prospect and business contact data">
            <strong>What:</strong> Name, job title, business email address, business telephone
            number, company name, company registration number, registered address, and publicly
            stated business activity.
            <br />
            <strong>Source:</strong> Companies House, company websites, professional networking
            sites, and other publicly accessible business sources.
          </Item>
          <Item lead="Client relationship data">
            <strong>What:</strong> Contact details of your staff involved in an engagement,
            correspondence, meeting notes, project records, and billing contact details.
            <br />
            <strong>Source:</strong> Directly from you during onboarding and delivery.
          </Item>
          <Item lead="Communications data">
            <strong>What:</strong> Emails, messages, call and meeting notes, and where enabled,
            whether a marketing email was opened or a link clicked.
            <br />
            <strong>Source:</strong> Directly from you, and from our email and CRM tools.
          </Item>
          <Item lead="Technical and usage data">
            <strong>What:</strong> IP address, browser type and version, device type, operating
            system, referring URL, pages viewed, and time spent on pages.
            <br />
            <strong>Source:</strong> Automatically via our website and cookies (see Section 6).
          </Item>
          <Item lead="Financial and transaction data">
            <strong>What:</strong> Billing name and address, invoice records, payment references,
            and VAT details where applicable.
            <br />
            <strong>Source:</strong> Directly from you, and from our accounting and payment
            providers.
          </Item>
          <p style={{ margin: 0 }}>
            We do not knowingly collect special category data (such as health, biometric, religious
            or political data) or criminal offence data, and we ask that you do not send it to us.
          </p>
        </Section>

        <Section title="4. Why we use your personal data, and our lawful basis">
          <Item lead="Responding to enquiries made through our website or by email.">
            <strong>Lawful basis:</strong> Legitimate interests responding to a request you have
            made. Where the enquiry leads to an engagement: performance of a contract, or steps
            taken at your request prior to entering a contract.
          </Item>
          <Item lead="Business development identifying and contacting businesses that may benefit from our services.">
            <strong>Lawful basis:</strong> Legitimate interests promoting our services to relevant
            business contacts, balanced against your rights. Marketing by electronic means is
            additionally governed by PECR (see Section 7).
          </Item>
          <Item lead="Delivering our consultancy services and managing the client relationship.">
            <strong>Lawful basis:</strong> Performance of a contract.
          </Item>
          <Item lead="Maintaining our CRM and business records.">
            <strong>Lawful basis:</strong> Legitimate interests running and administering our
            business efficiently.
          </Item>
          <Item lead="Invoicing, payment processing, accounting and tax records.">
            <strong>Lawful basis:</strong> Legal obligation (VAT and HMRC record-keeping
            requirements) and performance of a contract.
          </Item>
          <Item lead="Website analytics and improving our website.">
            <strong>Lawful basis:</strong> Consent, where non-essential cookies are used (see
            Section 6).
          </Item>
          <Item lead="Information security, service monitoring, fault diagnosis and fraud prevention.">
            <strong>Lawful basis:</strong> Legitimate interests keeping our systems and our
            clients&rsquo; systems secure and available.
          </Item>
          <Item lead="Establishing, exercising or defending legal claims, and resolving disputes.">
            <strong>Lawful basis:</strong> Legitimate interests protecting our legal position;
            legal obligation where applicable.
          </Item>
          <p style={{ margin: 0 }}>
            Where we rely on legitimate interests, we have carried out a balancing assessment to
            confirm that our interests are not overridden by your rights and freedoms. You may
            request a summary of that assessment using the contact details in Section 15.
          </p>
        </Section>

        <Section title="5. Where we obtain prospect data">
          <p style={{ margin: '0 0 14px' }}>
            Some of the business contact data we hold has not been provided to us directly by you.
            We source it from publicly available business information, principally:
          </p>
          <ul style={{ margin: '0 0 14px', paddingLeft: 22 }}>
            <li style={{ marginBottom: 6 }}>
              The Companies House public register, including director and registered office
              information.
            </li>
            <li style={{ marginBottom: 6 }}>
              Publicly accessible company websites and published business contact pages.
            </li>
            <li>
              Professional and business networking platforms, where the information is published in
              a business capacity.
            </li>
          </ul>
          <p style={{ margin: 0 }}>
            Where we collect your data from these sources, we will tell you within one month of
            collection, or at the point of our first communication with you, whichever is earlier.
            You may object to this processing at any time (see Section 11).
          </p>
        </Section>

        <Section title="6. Cookies and similar technologies">
          <p style={{ margin: '0 0 14px' }}>
            Our website uses cookies and similar technologies. Under the Privacy and Electronic
            Communications Regulations (PECR), we set only strictly necessary cookies without your
            consent. All other cookies are set only where you have given consent through our cookie
            banner. You can withdraw or change your consent at any time using the cookie settings
            link on our website, and you can block or delete cookies through your browser settings.
          </p>
          <Item lead="Strictly necessary">
            Site security, load balancing, form submission, and remembering your cookie
            preferences. <strong>Consent required:</strong> No.
          </Item>
          <Item lead="Analytics and performance">
            Cloudflare Web Analytics. Understanding how visitors use the site so we can improve it.{' '}
            <strong>Consent required:</strong> Yes.
          </Item>
          <Item lead="Functional">
            Remembering preferences such as language or previously entered form details.{' '}
            <strong>Consent required:</strong> Yes.
          </Item>
          <Item lead="Marketing and tracking">
            As of yet, we do not utilise marketing and tracking tooling.{' '}
            <strong>Consent required:</strong> Yes.
          </Item>
          <p style={{ margin: 0 }}>
            A full, current list of the individual cookies we set is available in our cookie banner
            preference centre.
          </p>
        </Section>

        <Section title="7. Marketing communications">
          <p style={{ margin: '0 0 14px' }}>
            We may send marketing emails about our services to business contacts where we are
            permitted to do so under PECR and UK GDPR. Specifically:
          </p>
          <ul style={{ margin: '0 0 14px', paddingLeft: 22 }}>
            <li style={{ marginBottom: 6 }}>
              We send marketing emails to corporate subscribers (limited companies and limited
              liability partnerships) on the basis of our legitimate interests, and always with an
              opt-out.
            </li>
            <li style={{ marginBottom: 6 }}>
              We send marketing emails to individual subscribers, including sole traders and
              unincorporated partnerships, only where you have consented, or where the soft opt-in
              applies because you previously enquired about or purchased our services.
            </li>
            <li style={{ marginBottom: 6 }}>
              Every marketing email contains a working unsubscribe link and identifies us as the
              sender.
            </li>
            <li>
              If you unsubscribe, we add you to a suppression list. We retain the minimum
              information necessary, typically your email address in suppressed form, so that we do
              not contact you again. This is itself a legal requirement.
            </li>
          </ul>
          <p style={{ margin: 0 }}>
            You can opt out at any time by clicking unsubscribe in any email, or by emailing us
            using the details in Section 15. Opting out of marketing does not stop service-related
            communications about a live engagement.
          </p>
        </Section>

        <Section title="8. Who we share your personal data with">
          <p style={{ margin: '0 0 14px' }}>
            We do not sell personal data. We share it only with service providers who process it on
            our behalf under written contracts requiring appropriate security and confidentiality,
            and with professional advisers or authorities where we are legally required to do so.
          </p>
          <Item lead="Hetzner Online GmbH">
            Cloud infrastructure hosting for our self-hosted systems.{' '}
            <strong>Location:</strong> Germany / Finland (EU).
          </Item>
          <Item lead="OpenRouter">
            Routing of prompts to large language model providers where AI tooling is used (see
            Section 9). <strong>Location:</strong> USA.
          </Item>
          <Item lead="Zoho Books">
            Invoicing, bookkeeping and financial records. <strong>Location:</strong> UK / EU.
          </Item>
          <Item lead="Cloudflare">
            Website hosting and contact form processing. <strong>Location:</strong> UK / EU.
          </Item>
          <Item lead="Professional advisers">
            Accountants, insurers and legal advisers, where necessary.{' '}
            <strong>Location:</strong> UK.
          </Item>
          <Item lead="Regulators and authorities">
            Where disclosure is required by law, or to establish or defend legal claims.{' '}
            <strong>Location:</strong> UK.
          </Item>
          <p style={{ margin: 0 }}>
            An up-to-date list of our sub-processors is maintained separately and is available to
            clients on request.
          </p>
        </Section>

        <Section title="9. Use of AI and large language models">
          <p style={{ margin: '0 0 14px' }}>
            We use AI and large language model tooling in parts of our own business operations, for
            example in research, drafting and workflow development. Our controls are as follows:
          </p>
          <ul style={{ margin: '0 0 14px', paddingLeft: 22 }}>
            <li style={{ marginBottom: 6 }}>
              We do not knowingly submit personal data to a large language model provider unless it
              is necessary and a lawful basis applies.
            </li>
            <li style={{ marginBottom: 6 }}>
              We route model requests through providers whose terms exclude use of submitted
              content for model training.
            </li>
            <li>
              We do not use AI systems to make decisions that produce legal or similarly
              significant effects about any individual.
            </li>
          </ul>
          <p style={{ margin: 0 }}>
            Our AI Usage Disclosure and Policy sets this out in more detail and is available on
            request.
          </p>
        </Section>

        <Section title="10. How long we keep your personal data">
          <Item lead="Website enquiries that do not lead to an engagement">
            24 months from last contact, then deleted.
          </Item>
          <Item lead="Prospect and business contact records in our CRM">
            24 months from last meaningful engagement, then reviewed and deleted if no interest is
            shown.
          </Item>
          <Item lead="Suppression and unsubscribe list">
            Indefinitely, in minimised form, in order to honour your opt-out.
          </Item>
          <Item lead="Client records and correspondence">
            6 years from the end of the engagement, aligning with the limitation period for
            contractual claims.
          </Item>
          <Item lead="Invoices, accounting and tax records">
            6 years from the end of the relevant accounting period (HMRC requirement).
          </Item>
          <Item lead="System, security and error logs">30 days, then automatically pruned.</Item>
          <Item lead="Website analytics data">
            14 months, as configured in our analytics tool.
          </Item>
          <p style={{ margin: 0 }}>
            Where we no longer need personal data, we securely delete it or irreversibly anonymise
            it.
          </p>
        </Section>

        <Section title="11. Your rights">
          <p style={{ margin: '0 0 14px' }}>
            Under UK GDPR you have the following rights in relation to your personal data:
          </p>
          <ul style={{ margin: '0 0 14px', paddingLeft: 22 }}>
            <li style={{ marginBottom: 6 }}>
              <strong>Access:</strong> to be told whether we process your data, and to receive a
              copy of it.
            </li>
            <li style={{ marginBottom: 6 }}>
              <strong>Rectification:</strong> to have inaccurate or incomplete data corrected.
            </li>
            <li style={{ marginBottom: 6 }}>
              <strong>Erasure:</strong> to have your data deleted where there is no continuing
              lawful reason for us to hold it.
            </li>
            <li style={{ marginBottom: 6 }}>
              <strong>Restriction:</strong> to limit how we use your data in certain circumstances.
            </li>
            <li style={{ marginBottom: 6 }}>
              <strong>Objection:</strong> to object to processing based on legitimate interests,
              and an absolute right to object to direct marketing.
            </li>
            <li style={{ marginBottom: 6 }}>
              <strong>Portability:</strong> to receive data you provided to us in a structured,
              machine-readable format, where processing is based on consent or contract and is
              automated.
            </li>
            <li>
              <strong>Withdrawal of consent:</strong> where we rely on consent, you may withdraw it
              at any time, without affecting processing carried out beforehand.
            </li>
          </ul>
          <p style={{ margin: 0 }}>
            To exercise any of these rights, contact us using the details in Section 15. We will
            respond within one month. That period may be extended by up to two further months for
            complex or numerous requests, and we will tell you if that applies. We may ask you for
            information to verify your identity. Exercising these rights is free of charge, unless
            a request is manifestly unfounded or excessive.
          </p>
        </Section>

        <Section title="12. Automated decision-making and security">
          <SubTitle>12.1 Automated decision-making</SubTitle>
          <p style={{ margin: 0 }}>
            We do not carry out automated decision-making, including profiling, that produces legal
            effects concerning you or similarly significantly affects you.
          </p>
          <SubTitle>12.2 Security</SubTitle>
          <p style={{ margin: 0 }}>
            We maintain technical and organisational measures appropriate to the risk, including
            full-disk encryption of systems holding personal data, encryption of data in transit
            using TLS 1.2 or above, encrypted backups, access control on a least-privilege basis,
            and automatic pruning of logs. Our Information Security Policy and Incident Response
            Procedure set out these measures in full and are available to clients on request.
          </p>
        </Section>

        <Section title="13. Regulatory registration">
          <p style={{ margin: '0 0 14px' }}>
            Our current processing falls within the exemption from the data protection fee under
            the Data Protection (Charges and Information) Regulations 2018. We will register with
            the Information Commissioner&rsquo;s Office and pay the applicable fee before we begin
            any processing that falls outside that exemption. This notice will be updated with our
            registration number at that time.
          </p>
          <p style={{ margin: 0 }}>
            This does not affect your rights, or our obligations, under UK GDPR, those apply
            regardless of fee registration status.
          </p>
        </Section>

        <Section title="14. International transfers and changes to this notice">
          <SubTitle>14.1 International transfers</SubTitle>
          <p style={{ margin: 0 }}>
            Some of our service providers are located outside the UK. Where personal data is
            transferred outside the UK, we rely on either UK adequacy regulations, or the
            International Data Transfer Agreement (IDTA) or the UK Addendum to the EU Standard
            Contractual Clauses, supported by a transfer risk assessment where required. You may
            request details of the safeguards applied to a specific transfer.
          </p>
          <SubTitle>14.2 Changes to this notice</SubTitle>
          <p style={{ margin: 0 }}>
            We may update this notice from time to time. The version number and effective date at
            the top of this page indicate when it was last changed. Where changes are material, we
            will notify affected individuals directly where practicable. We recommend reviewing
            this notice periodically.
          </p>
        </Section>

        <Section title="15. Contact and complaints">
          <p style={{ margin: '0 0 14px' }}>
            For any question about this notice, or to exercise your rights, contact:
          </p>
          <p style={{ margin: '0 0 14px' }}>
            <strong>Data protection contact:</strong> Tristan Hoang
            <br />
            <strong>Email:</strong>{' '}
            <a href="mailto:trist@tristanhoang.co.uk" style={linkStyle}>
              trist@tristanhoang.co.uk
            </a>
            <br />
            <strong>Postal address:</strong> 92 Coniston Road, Patchway, Bristol, BS345JT
          </p>
          <p style={{ margin: '0 0 14px' }}>
            We have not appointed a Data Protection Officer, as we are not required to do so under
            UK GDPR Article 37.
          </p>
          <p style={{ margin: '0 0 14px' }}>
            If you are unhappy with how we have handled your personal data, please contact us first
            so that we can try to resolve it. You also have the right to complain to the UK
            supervisory authority:
          </p>
          <p style={{ margin: 0 }}>
            Information Commissioner&rsquo;s Office
            <br />
            Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF
            <br />
            Helpline: 0303 123 1113
            <br />
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              ico.org.uk
            </a>
          </p>
        </Section>
      </div>
    </main>
  )
}
