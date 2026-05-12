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
          I streamline your businesses{' '}
          <span className="serif" style={{ color: 'var(--navy)' }}>
            most repetitive work
          </span>{' '}
          with the fewest moving parts.
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
            I&rsquo;m Tristan Hoang, an Automation &amp; Optimisation Consultant and Senior Software
            Engineer. I help ambitious Small and Medium Sized Businesses streamline their operations
            and scale without having to scale their overhead. I build the quiet infrastructure and
            durable workflows that let teams focus on what really matters: Competitive Advantage, Not
            Admin.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              onClick={() => onJump('services')}
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
              How I work →
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
              See recent work
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
              ['11', 'years in operations'],
              ['38', 'engagements completed'],
              ['—', 'employees. Just me.'],
              ['2 wks', 'typical lead time'],
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