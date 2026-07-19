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
            Independent automation and operations consulting. Trading as Tristan Hoang Automation Consultancy.
          </p>
        </div>

        {/* Link columns */}
        {(
          [
            ['Site', [
              ['About',    '#about'],
              ['Services', '#services'],
              ['Work',     '#work'],
              ['Gallery',  '#gallery'],
              ['Journal',  '#journal'],
              ['Contact',  '#contact'],
            ]],
            ['Elsewhere', [
              ['LinkedIn', 'https://www.linkedin.com/in/dhoang-creator'],
              ['GitHub',   'https://github.com/dhoang-creator'],
            ]],
            ['GDPR', [
              ['Privacy Policy', '/privacy'],
            ]],
          ] as [string, [string, string | null][]][]
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
              {items.map(([label, href]) => (
                <li key={label} style={{ fontSize: 13.5, color: 'var(--ink-mute)' }}>
                  {href ? (
                    <a
                      className="footer-link"
                      href={href}
                      {...(href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {label}
                    </a>
                  ) : (
                    label
                  )}
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
          © 2026 Tristan Hoang Automation Consultancy Sole Prop
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
