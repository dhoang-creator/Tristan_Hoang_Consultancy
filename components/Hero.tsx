interface HeroProps {
  onJump: (id: string) => void
}

export default function Hero({ onJump }: HeroProps) {
  return (
    <section id="top" style={{ padding: '80px 36px 100px', scrollMarginTop: 0 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Location / availability strip */}
        <div
          style={{
            display: 'flex',
            gap: 12,
            fontSize: 11,
            color: 'var(--silver-2)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: 48,
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          }}
        >
          <span>BRISTOL, UK · REMOTE, WORLDWIDE</span>
          <span style={{ color: 'var(--rule-strong)' }}>/</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: 99,
                background: 'oklch(0.7 0.15 145)',
                flexShrink: 0,
              }}
            />
            Open to one engagement from June
          </span>
        </div>

        {/* H1 */}
        <h1
          style={{
            margin: 0,
            fontSize: 'clamp(48px, 7.2vw, 104px)',
            lineHeight: 0.98,
            letterSpacing: '-0.035em',
            fontWeight: 600,
            maxWidth: '18ch',
          }}
        >
          Your team is doing work{' '}
          <span className="serif" style={{ color: 'var(--navy)' }}>
            a system should be doing.
          </span>{' '}
        </h1>

        {/* Lede + CTAs */}
        <div
          style={{
            marginTop: 56,
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: 64,
            alignItems: 'end',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 20,
              lineHeight: 1.45,
              color: 'var(--ink-mute)',
              maxWidth: '52ch',
              letterSpacing: '-0.005em',
            }}
          >
              I’m Tristan Hoang, a senior software engineer who builds the quiet infrastructure that takes repetitive, margin-eating work off your team’s plate. <strong>Eight years of distributed-systems engineering, delivered solo, accountable to you by name.</strong> Not a junior in an agency, not a no-code template that breaks in month three. The result is simple: <strong>your people stop doing admin and start compounding your competitive advantage.</strong>
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              onClick={() => onJump('contact')}
              style={{
                padding: '14px 22px',
                border: 0,
                borderRadius: 999,
                background: 'var(--navy)',
                color: 'var(--paper)',
                fontSize: 15,
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              Find the work that’s costing you →
            </button>
            <button
              onClick={() => onJump('work')}
              style={{
                padding: '14px 22px',
                border: '1px solid var(--rule-strong)',
                borderRadius: 999,
                background: 'transparent',
                color: 'var(--ink)',
                fontSize: 15,
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              See recent results
            </button>
          </div>
        </div>

        {/* Stat strip */}
        <div
          style={{
            marginTop: 96,
            paddingTop: 32,
            borderTop: '1px solid var(--rule)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 32,
          }}
        >
          {(
            [
              ['8 yrs', 'senior engineering depth, not generalist tooling'],
              ['12', 'engagements delivered end-to-end'],
              ['1', 'point of accountability: the person who scopes it is the person who builds it'],
              ['2 wks', 'typical lead time, no agency queue'],
            ] as [string, string][]
          ).map(([n, l], i) => (
            <div key={i}>
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  color: 'var(--navy)',
                }}
              >
                {n}
              </div>
              <div
                style={{
                  marginTop: 10,
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--silver-2)',
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}