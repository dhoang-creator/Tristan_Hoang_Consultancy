function SectionEyebrow({ label }: { label: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontSize: 11,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginBottom: 28,
        color: 'var(--silver-2)',
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
      }}
    >
      <span style={{ width: 24, height: 1, background: 'var(--rule-strong)', flexShrink: 0 }} />
      {label}
    </div>
  )
}

const POINTS: [string, string][] = [
  [
    'Senior engineering depth',
    '8+ years in distributed systems and algorithms. The hard, durable problems are the ones I’m built for, not the ones I avoid.',
  ],
  [
    'One named point of accountability',
    'The person who scopes your work is the person who builds it and the person you call. No handoff, no offshore leverage, no “let me check with the team.”',
  ],
  [
    'Low overhead, passed to you',
    'No agency floor to feed, so your spend goes into the work, not the building it’s done in.',
  ],
  [
    'Delivered like a grown-up business',
    'Clear contracts, a Data Processing Agreement, and monitoring after launch so what I build keeps working when I’m not looking at it.',
  ],
]

export default function WhyMe() {
  return (
    <section id="why-me" style={{ padding: '120px 36px', scrollMarginTop: 90 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionEyebrow label="Why me — A04" />

        <h2
          style={{
            margin: 0,
            fontSize: 'clamp(36px, 4.5vw, 64px)',
            lineHeight: 1.02,
            letterSpacing: '-0.025em',
            fontWeight: 600,
            maxWidth: '20ch',
          }}
        >
          You&rsquo;re not hiring a freelancer.{' '}
          <span className="serif">You&rsquo;re hiring the engineer who&rsquo;ll own it.</span>
        </h2>

        <p
          style={{
            marginTop: 36,
            marginBottom: 0,
            fontSize: 17,
            lineHeight: 1.6,
            color: 'var(--ink-mute)',
            maxWidth: '62ch',
          }}
        >
          Most automation help falls into two camps: agencies that bill you for overhead and hand
          the work to a junior, or no-code generalists who wire up a template that breaks the first
          time reality doesn&rsquo;t match the demo. I&rsquo;m neither.
        </p>

        <div
          style={{
            marginTop: 56,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '36px 56px',
            borderTop: '1px solid var(--rule)',
            paddingTop: 36,
          }}
        >
          {POINTS.map(([title, body], i) => (
            <div key={i}>
              <div
                style={{
                  fontSize: 10.5,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 10,
                  color: 'var(--silver-2)',
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                }}
              >
                0{i + 1}
              </div>
              <div style={{ fontSize: 19, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 8 }}>
                {title}
              </div>
              <div style={{ fontSize: 15.5, lineHeight: 1.55, color: 'var(--ink-mute)' }}>{body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
