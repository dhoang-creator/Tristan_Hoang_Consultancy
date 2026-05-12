import LogoMark from './LogoMark'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--rule)', padding: '48px 36px 56px' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 48,
          alignItems: 'start',
        }}
      >
        {/* Brand column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <LogoMark size={28} />
            <div style={{ fontWeight: 600, fontSize: 15 }}>Tristan Hoang</div>
          </div>
          <p
            style={{
              margin: 0,
              fontSize: 13.5,
              color: 'var(--ink-mute)',
              maxWidth: '40ch',
              lineHeight: 1.55,
            }}
          >
            Independent automation and operations consulting. Trading as Hoang Consulting Limited.
          </p>
        </div>

        {/* Link columns */}
        {(
          [
            ['Site',       ['About', 'Services', 'Work', 'Gallery', 'Journal', 'Contact']],
            ['Elsewhere',  ['LinkedIn', 'Read.cv', 'GitHub', 'RSS']],
            ['Office',     ['Bristol, UK', 'tristan@thoang.co']],
          ] as [string, string[]][]
        ).map(([heading, items]) => (
          <div key={heading}>
            <div
              style={{
                fontSize: 10.5,
                color: 'var(--silver-2)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 16,
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              }}
            >
              {heading}
            </div>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 9,
              }}
            >
              {items.map((x) => (
                <li key={x} style={{ fontSize: 13.5, color: 'var(--ink-mute)' }}>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom strip */}
      <div
        style={{
          maxWidth: 1280,
          margin: '56px auto 0',
          paddingTop: 24,
          borderTop: '1px solid var(--rule)',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 12,
          color: 'var(--silver-2)',
        }}
      >
        <div
          style={{
            letterSpacing: '0.08em',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          }}
        >
          © 2026 Hoang Consulting Limited
        </div>
        <div
          style={{
            letterSpacing: '0.08em',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          }}
        >
          v1.0 · TH-2026
        </div>
      </div>
    </footer>
  )
}
