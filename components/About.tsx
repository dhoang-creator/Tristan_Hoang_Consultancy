import { NOW } from '@/lib/data'

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

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 36px', scrollMarginTop: 90 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionEyebrow label="About — A03" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 80,
            alignItems: 'start',
          }}
        >
          {/* Left — portrait */}
          <div>
            <div
              style={{
                aspectRatio: '4 / 5',
                borderRadius: 6,
                overflow: 'hidden',
                background: `repeating-linear-gradient(135deg, var(--paper-2) 0 14px, transparent 14px 28px), var(--silver)`,
                position: 'relative',
                border: '1px solid var(--rule)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 14,
                  bottom: 14,
                  padding: '6px 10px',
                  background: 'var(--paper)',
                  color: 'var(--ink-mute)',
                  fontSize: 10,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  border: '1px solid var(--rule)',
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                }}
              >
                Portrait — 4:5
              </div>
            </div>
            <div
              style={{
                marginTop: 16,
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--silver-2)',
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              }}
            >
              AMSTERDAM, NL · EST. 2022
            </div>
          </div>

          {/* Right — bio */}
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: 'clamp(32px, 4vw, 56px)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                fontWeight: 600,
                maxWidth: '18ch',
              }}
            >
              Operations stripped down. Performance scaled up.
            </h2>

            <div
              style={{
                marginTop: 36,
                fontSize: 17,
                lineHeight: 1.6,
                color: 'var(--ink-mute)',
                maxWidth: '62ch',
              }}
            >
              <p style={{ margin: '0 0 20px' }}>
                [Bio copy to be added — replace with Tristan&rsquo;s bio before launch.]
              </p>
              <p style={{ margin: 0 }}>
                [Second paragraph.]
              </p>
            </div>

            {/* Practice details grid */}
            <div
              style={{
                marginTop: 56,
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '24px 56px',
                borderTop: '1px solid var(--rule)',
                paddingTop: 36,
              }}
            >
              {(
                [
                  ['Practice', 'Consultancy · Freelance.'],
                  ['Working with', 'Teams upwards of 50.'],
                  ['Day rate', '£500 / day or Project Based (whichever suits you).'],
                  ['Engagement min.', 'Just 1 day.'],
                  ['Languages', 'English'],
                  ['Tools I keep on hand', 'Model Context Protocol & LLMs (MCP & AI) · n8n · Make · Zapier · Airtable · Xero · Notion · GCP · AWS · Java SDK'],
                ] as [string, string][]
              ).map(([k, v], i) => (
                <div key={i}>
                  <div
                    style={{
                      fontSize: 10.5,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: 6,
                      color: 'var(--silver-2)',
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                    }}
                  >
                    {k}
                  </div>
                  <div style={{ fontSize: 15.5, color: 'var(--ink)' }}>{v}</div>
                </div>
              ))}
            </div>

            {/* Now panel */}
            <div
              style={{
                marginTop: 56,
                padding: '28px 32px',
                borderRadius: 6,
                background: 'var(--paper-2)',
                border: '1px solid var(--rule)',
              }}
            >
              <div
                style={{
                  fontSize: 10.5,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: 14,
                  color: 'var(--silver-2)',
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                }}
              >
                MAY 2026 — UPDATED MONTHLY
              </div>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                {NOW.map((item, i) => (
                  <li
                    key={i}
                    style={{ display: 'flex', gap: 14, fontSize: 15, color: 'var(--ink-mute)' }}
                  >
                    <span style={{ color: 'var(--silver-2)', flexShrink: 0 }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}