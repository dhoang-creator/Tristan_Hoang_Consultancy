import { CASES } from '@/lib/data'

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

export default function Work() {
  return (
    <section id="work" style={{ padding: '120px 36px', scrollMarginTop: 90 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionEyebrow label="Selected work — A06" />

        <h2
          style={{
            margin: '0 0 56px',
            fontSize: 'clamp(36px, 4.5vw, 64px)',
            lineHeight: 1.02,
            letterSpacing: '-0.025em',
            fontWeight: 600,
            maxWidth: '18ch',
          }}
        >
          Three engagements from the{' '}
          <span className="serif">last twenty-four months.</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {CASES.map((c, i) => (
            <article
              key={i}
              style={{
                background: 'var(--paper-2)',
                border: '1px solid var(--rule)',
                borderRadius: 8,
                padding: '28px 28px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
                minHeight: 380,
              }}
            >
              <div
                style={{
                  fontSize: 10.5,
                  color: 'var(--silver-2)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                }}
              >
                Case 0{i + 1} / {c.sector}
              </div>
              <div style={{ fontSize: 14, color: 'var(--ink-mute)', fontWeight: 500 }}>
                {c.client}
              </div>
              <h3
                style={{
                  margin: 0,
                  fontSize: 22,
                  lineHeight: 1.18,
                  letterSpacing: '-0.015em',
                  fontWeight: 600,
                }}
              >
                {c.headline}
              </h3>
              <p style={{ margin: 0, fontSize: 14.5, color: 'var(--ink-mute)', lineHeight: 1.55 }}>
                {c.body}
              </p>
              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: 24,
                  borderTop: '1px solid var(--rule)',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 14,
                }}
              >
                <div
                  style={{
                    fontSize: 40,
                    fontWeight: 600,
                    letterSpacing: '-0.025em',
                    color: 'var(--navy)',
                    lineHeight: 1,
                  }}
                >
                  {c.metric}
                </div>
                <div
                  style={{
                    fontSize: 10.5,
                    color: 'var(--silver-2)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    maxWidth: 140,
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                  }}
                >
                  {c.metricLabel}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}