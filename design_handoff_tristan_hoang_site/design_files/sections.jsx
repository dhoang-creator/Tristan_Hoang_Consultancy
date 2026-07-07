// sections.jsx — UI sections for Tristan Hoang site
const { useState, useEffect, useRef, useMemo } = React;

/* ───────────────────────────── Logo ───────────────────────────── */
function LogoMark({ size = 32, color = 'var(--navy)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <path fill={color} fillRule="evenodd"
      d="M5 0 H95 A5 5 0 0 1 100 5 V95 A5 5 0 0 1 95 100 H5 A5 5 0 0 1 0 95 V5 A5 5 0 0 1 5 0 Z M24 25 L76 25 L76 35 L56 35 L56 76 L44 76 L44 35 L24 35 Z" />
    </svg>);

}

function Wordmark({ size = 32 }) {
  return (
    <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <LogoMark size={size} />
      <div style={{ lineHeight: 1.05 }}>
        <div style={{ fontWeight: 600, fontSize: 15, letterSpacing: '-0.005em' }}>Tristan Hoang</div>
        <div style={{ fontSize: 11, letterSpacing: '0.04em', textTransform: 'uppercase', color: "rgb(73, 78, 87)" }}>Automation &amp; Optimisation</div>
      </div>
    </a>);

}

/* ───────────────────────────── Nav ───────────────────────────── */
const NAV_ITEMS = [
{ id: 'about', label: 'About' },
{ id: 'services', label: 'Services' },
{ id: 'work', label: 'Work' },
{ id: 'gallery', label: 'Gallery' },
{ id: 'journal', label: 'Journal' },
{ id: 'contact', label: 'Contact' }];


function Nav({ active, onJump }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f();window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(240,238,233,0.82)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px) saturate(150%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(150%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--rule)' : '1px solid transparent',
      transition: 'background .25s ease, border-color .25s ease, backdrop-filter .25s ease'
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '18px 36px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24
      }}>
        <Wordmark size={34} />
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {NAV_ITEMS.map((n) =>
          <button key={n.id} onClick={() => onJump(n.id)}
          style={{
            appearance: 'none', border: 0, background: 'transparent', cursor: 'pointer',
            padding: '8px 14px', borderRadius: 999,
            fontSize: 13.5, fontWeight: 500, letterSpacing: '-0.005em',
            color: active === n.id ? 'var(--navy)' : 'var(--ink-mute)',
            background: active === n.id ? 'rgba(11,37,69,0.07)' : 'transparent',
            transition: 'all .18s ease'
          }}
          onMouseEnter={(e) => {if (active !== n.id) e.currentTarget.style.color = 'var(--ink)';}}
          onMouseLeave={(e) => {if (active !== n.id) e.currentTarget.style.color = 'var(--ink-mute)';}}>
            
              {n.label}
            </button>
          )}
          <button onClick={() => onJump('contact')}
          style={{
            marginLeft: 10, padding: '9px 16px', border: 0, borderRadius: 999,
            background: 'var(--navy)', color: 'var(--paper)',
            fontSize: 13.5, fontWeight: 500, cursor: 'pointer',
            boxShadow: '0 1px 0 rgba(255,255,255,.15) inset, 0 1px 2px rgba(11,37,69,.25)'
          }}>
            Book a call →
          </button>
        </nav>
      </div>
    </header>);

}

/* ───────────────────────────── Section helper ───────────────────────────── */
function Section({ id, eyebrow, children, top = 120, bottom = 120 }) {
  return (
    <section id={id} style={{ padding: `${top}px 36px ${bottom}px`, scrollMarginTop: 90 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {eyebrow &&
        <div className="mono" style={{
          display: 'flex', alignItems: 'center', gap: 10,
          fontSize: 11, letterSpacing: '0.12em',
          textTransform: 'uppercase', marginBottom: 28, color: "rgb(73, 78, 87)"
        }}>
            <span style={{ width: 24, height: 1, background: 'var(--rule-strong)' }}></span>
            {eyebrow}
          </div>
        }
        {children}
      </div>
    </section>);

}

/* ───────────────────────────── Hero ───────────────────────────── */
function Hero({ onJump }) {
  return (
    <section id="top" style={{ padding: '80px 36px 100px', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="mono" style={{
          display: 'flex', gap: 12, fontSize: 11, color: 'var(--silver-2)',
          letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 48
        }}>
          <span style={{ color: "rgb(73, 78, 87)" }}>BRISTOL, UK · REMOTE, WORLDWIDE</span>
          <span style={{ color: 'var(--rule-strong)' }}>/</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: "rgb(73, 78, 87)" }}>
            <span style={{ width: 7, height: 7, borderRadius: 99, background: 'oklch(0.7 0.15 145)' }} />
            Open to one engagement from June
          </span>
        </div>

        <h1 style={{
          margin: 0, fontSize: 'clamp(48px, 7.2vw, 104px)', lineHeight: 0.98,
          letterSpacing: '-0.035em', fontWeight: 600, maxWidth: '18ch'
        }}>
          I streamline your businesses <span className="serif" style={{ color: 'var(--navy)' }}>most repetitive work</span> with the fewest moving parts.
        </h1>

        <div style={{
          marginTop: 56, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64,
          alignItems: 'end'
        }}>
          <p style={{
            margin: 0, fontSize: 20, lineHeight: 1.45, color: 'var(--ink-mute)',
            maxWidth: '52ch', letterSpacing: '-0.005em'
          }}>I'm Tristan Hoang, a Senior Software Engineer who builds the quiet infrastructure that takes repetitive, margin-eating work off your team's plate. Eight years of distributed-systems engineering, delivered solo, accountable to you by name, not a junior in an agency, not a no-code template that breaks in month three. The result is simple: your people stop doing admin and start compounding your competitive advantage.




          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button onClick={() => onJump('services')} style={{
              padding: '14px 22px', border: 0, borderRadius: 999,
              background: 'var(--navy)', color: 'var(--paper)',
              fontSize: 15, fontWeight: 500, cursor: 'pointer'
            }}>How I work →</button>
            <button onClick={() => onJump('work')} style={{
              padding: '14px 22px', border: '1px solid var(--rule-strong)', borderRadius: 999,
              background: 'transparent', color: 'var(--ink)',
              fontSize: 15, fontWeight: 500, cursor: 'pointer'
            }}>See recent work</button>
          </div>
        </div>

        {/* Stat strip */}
        <div style={{
          marginTop: 96, paddingTop: 32, borderTop: '1px solid var(--rule)',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32
        }}>
          {[
          ['11', 'years in operations'],
          ['38', 'engagements completed'],
          ['—', 'employees. Just me.'],
          ['2 wks', 'typical lead time']].
          map(([n, l], i) =>
          <div key={i}>
              <div style={{ fontSize: 48, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1, color: 'var(--navy)' }}>{n}</div>
              <div className="mono" style={{ marginTop: 10, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: "rgb(73, 78, 87)" }}>{l}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ───────────────────────────── About ───────────────────────────── */
function About() {
  return (
    <Section id="about" eyebrow="About — A03">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
        <div>
          {/* Portrait placeholder */}
          <div style={{
            aspectRatio: '4 / 5', borderRadius: 6, overflow: 'hidden',
            background: `repeating-linear-gradient(135deg, var(--paper-2) 0 14px, transparent 14px 28px), var(--silver)`,
            position: 'relative', border: '1px solid var(--rule)'
          }}>
            <div className="mono" style={{
              position: 'absolute', left: 14, bottom: 14, padding: '6px 10px',
              background: 'var(--paper)', color: 'var(--ink-mute)',
              fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
              border: '1px solid var(--rule)'
            }}>Portrait — 4:5</div>
          </div>
          <div className="mono" style={{ marginTop: 16, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: "rgb(73, 78, 87)" }}>AMSTERDAM, NL · EST. 2022

          </div>
        </div>

        <div>
          <h2 style={{
            margin: 0, fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.05,
            letterSpacing: '-0.02em', fontWeight: 600, maxWidth: '18ch'
          }}>Operations as a craft. I treat it like one.

          </h2>

          <div style={{ marginTop: 36, fontSize: 17, lineHeight: 1.6, color: 'var(--ink-mute)', maxWidth: '62ch' }}>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
          </div>

          {/* Practice details */}
          <div style={{
            marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px 56px', borderTop: '1px solid var(--rule)', paddingTop: 36
          }}>
            {[
            ['Practice', 'Independent · solo'],
            ['Working with', 'Teams of 10–80'],
            ['Day rate', 'NZ$1,800 / day'],
            ['Engagement min.', '5 days'],
            ['Languages', 'English'],
            ['Tools I keep on hand', 'Python · n8n · Airtable · Xero · Notion · GAS']].
            map(([k, v], i) =>
            <div key={i}>
                <div className="mono" style={{ fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6, color: "rgb(73, 78, 87)" }}>{k}</div>
                <div style={{ fontSize: 15.5, color: 'var(--ink)' }}>{v}</div>
              </div>
            )}
          </div>

          {/* Now panel */}
          <div style={{
            marginTop: 56, padding: '28px 32px', borderRadius: 6,
            background: 'var(--paper-2)', border: '1px solid var(--rule)'
          }}>
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14, color: "rgb(73, 78, 87)" }}>MAY 2026 — UPDATED MONTHLY

            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {window.NOW.map((n, i) =>
              <li key={i} style={{ display: 'flex', gap: 14, fontSize: 15, color: 'var(--ink-mute)' }}>
                  <span style={{ color: 'var(--silver-2)' }}>—</span>
                  <span>{n}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </Section>);

}

/* ───────────────────────────── Services ───────────────────────────── */
function Services({ onJump }) {
  const [open, setOpen] = useState(0);
  return (
    <Section id="services" eyebrow="Services — A04">
      <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 48, marginBottom: 56 }}>
        <h2 style={{ margin: 0, fontSize: 'clamp(36px, 4.5vw, 64px)', lineHeight: 1.02, letterSpacing: '-0.025em', fontWeight: 600, maxWidth: '14ch' }}>
          Four ways I usually <span className="serif">show up.</span>
        </h2>
        <p style={{ margin: 0, maxWidth: '34ch', fontSize: 15, lineHeight: 1.55, color: 'var(--ink-mute)' }}>
          Most engagements blend two of these. I'll tell you in the first call which mix actually fits your situation — and when none of them do.
        </p>
      </div>

      <div style={{ borderTop: '1px solid var(--rule-strong)' }}>
        {window.SERVICES.map((s, i) => {
          const isOpen = open === i;
          return (
            <div key={s.no} style={{ borderBottom: '1px solid var(--rule-strong)' }}>
              <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                appearance: 'none', border: 0, background: 'transparent', cursor: 'pointer',
                width: '100%', padding: '28px 0', textAlign: 'left',
                display: 'grid', gridTemplateColumns: '80px 1fr 1fr 40px', gap: 32, alignItems: 'baseline'
              }}>
                <div className="mono" style={{ fontSize: 13, color: 'var(--silver-2)', letterSpacing: '0.08em' }}>{s.no}</div>
                <div style={{ fontSize: 'clamp(22px,2.4vw,32px)', fontWeight: 600, letterSpacing: '-0.015em', color: 'var(--ink)' }}>{s.name}</div>
                <div style={{ fontSize: 15, color: 'var(--ink-mute)', lineHeight: 1.5 }}>{s.summary}</div>
                <div style={{ justifySelf: 'end', fontSize: 22, color: 'var(--navy)', transition: 'transform .25s ease', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>+</div>
              </button>
              <div style={{
                maxHeight: isOpen ? 280 : 0, overflow: 'hidden',
                transition: 'max-height .35s ease, opacity .25s ease',
                opacity: isOpen ? 1 : 0
              }}>
                <div style={{ padding: '4px 0 32px', display: 'grid', gridTemplateColumns: '80px 1fr 1fr 40px', gap: 32 }}>
                  <div></div>
                  <div>
                    <div className="mono" style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10, color: "rgb(73, 78, 87)" }}>Deliverables</div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {s.deliverables.map((d, j) =>
                      <li key={j} style={{ fontSize: 14.5, color: 'var(--ink)', display: 'flex', gap: 12 }}>
                          <span className="mono" style={{ color: 'var(--silver-2)' }}>0{j + 1}</span>{d}
                        </li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <div className="mono" style={{ fontSize: 11, color: 'var(--silver-2)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>Typical duration</div>
                    <div style={{ fontSize: 14.5, color: 'var(--ink)' }}>{s.duration}</div>
                  </div>
                </div>
              </div>
            </div>);

        })}
      </div>
    </Section>);

}

/* ───────────────────────────── Work / Cases ───────────────────────────── */
function Work() {
  return (
    <Section id="work" eyebrow="Selected work — A05">
      <h2 style={{ margin: '0 0 56px', fontSize: 'clamp(36px, 4.5vw, 64px)', lineHeight: 1.02, letterSpacing: '-0.025em', fontWeight: 600, maxWidth: '18ch' }}>
        Three engagements from the <span className="serif">last twelve months.</span>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {window.CASES.map((c, i) =>
        <article key={i} style={{
          background: 'var(--paper-2)', border: '1px solid var(--rule)', borderRadius: 8,
          padding: '28px 28px 32px', display: 'flex', flexDirection: 'column', gap: 18,
          minHeight: 380, position: 'relative', overflow: 'hidden'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div className="mono" style={{ fontSize: 10.5, color: 'var(--silver-2)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Case 0{i + 1} / {c.sector}
              </div>
            </div>
            <div style={{ fontSize: 14, color: 'var(--ink-mute)', fontWeight: 500 }}>{c.client}</div>
            <h3 style={{ margin: 0, fontSize: 22, lineHeight: 1.18, letterSpacing: '-0.015em', fontWeight: 600 }}>{c.headline}</h3>
            <p style={{ margin: 0, fontSize: 14.5, color: 'var(--ink-mute)', lineHeight: 1.55 }}>{c.body}</p>
            <div style={{ marginTop: 'auto', paddingTop: 24, borderTop: '1px solid var(--rule)', display: 'flex', alignItems: 'baseline', gap: 14 }}>
              <div style={{ fontSize: 40, fontWeight: 600, letterSpacing: '-0.025em', color: 'var(--navy)', lineHeight: 1 }}>{c.metric}</div>
              <div className="mono" style={{ fontSize: 10.5, color: 'var(--silver-2)', letterSpacing: '0.08em', textTransform: 'uppercase', maxWidth: 140 }}>{c.metricLabel}</div>
            </div>
          </article>
        )}
      </div>
    </Section>);

}

/* ───────────────────────────── Gallery ───────────────────────────── */
function GalleryTile({ item, onOpen }) {
  const aspect = item.aspect === 'tall' ? '3 / 4' : item.aspect === 'wide' ? '16 / 10' : '1 / 1';
  const bg = item.tone === 'navy' ?
  `repeating-linear-gradient(135deg, #0B2545 0 18px, #102e58 18px 36px)` :
  item.tone === 'blue' ?
  `repeating-linear-gradient(135deg, #134074 0 18px, #1a4d87 18px 36px)` :
  `repeating-linear-gradient(135deg, var(--paper-2) 0 18px, var(--silver) 18px 36px)`;
  const fg = item.tone === 'paper' ? 'var(--ink-mute)' : 'var(--paper)';
  return (
    <button onClick={() => onOpen(item)} style={{
      appearance: 'none', border: '1px solid var(--rule)', borderRadius: 6,
      padding: 0, overflow: 'hidden', cursor: 'zoom-in', textAlign: 'left',
      background: 'var(--paper-2)', position: 'relative',
      transition: 'transform .25s ease, box-shadow .25s ease'
    }}
    onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-3px)';e.currentTarget.style.boxShadow = '0 12px 32px rgba(11,37,69,.12)';}}
    onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0)';e.currentTarget.style.boxShadow = 'none';}}>
      
      <div style={{ aspectRatio: aspect, background: bg, position: 'relative' }}>
        <div className="mono" style={{
          position: 'absolute', left: 14, bottom: 14, padding: '5px 9px',
          background: item.tone === 'paper' ? 'var(--paper)' : 'rgba(0,0,0,.3)',
          color: fg, fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
          border: '1px solid ' + (item.tone === 'paper' ? 'var(--rule)' : 'rgba(255,255,255,.18)'),
          backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)'
        }}>{item.tag}</div>
      </div>
      <div style={{ padding: '14px 16px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
        <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink)' }}>{item.title}</div>
        <div className="mono" style={{ fontSize: 10.5, color: 'var(--silver-2)' }}>{item.id.toUpperCase()}</div>
      </div>
    </button>);

}

function Gallery({ onOpen }) {
  return (
    <Section id="gallery" eyebrow="Gallery — A06">
      <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 48, marginBottom: 56 }}>
        <h2 style={{ margin: 0, fontSize: 'clamp(36px, 4.5vw, 64px)', lineHeight: 1.02, letterSpacing: '-0.025em', fontWeight: 600, maxWidth: '16ch' }}>
          Working diagrams, <span className="serif">not pitch decks.</span>
        </h2>
        <p style={{ margin: 0, maxWidth: '34ch', fontSize: 15, lineHeight: 1.55, color: 'var(--ink-mute)' }}>
          A sample of the artefacts I leave behind — workflow maps, system architectures, cadence templates. All anonymised; originals stay with the client.
        </p>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20,
        gridAutoFlow: 'dense'
      }}>
        {window.GALLERY.map((g) => {
          const span = g.aspect === 'wide' ? { gridColumn: 'span 2' } : {};
          return <div key={g.id} style={span}><GalleryTile item={g} onOpen={onOpen} /></div>;
        })}
      </div>
    </Section>);

}

function GalleryLightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e) => {if (e.key === 'Escape') onClose();};
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {window.removeEventListener('keydown', onKey);document.body.style.overflow = '';};
  }, [item, onClose]);

  if (!item) return null;
  const bg = item.tone === 'navy' ?
  `repeating-linear-gradient(135deg, #0B2545 0 24px, #102e58 24px 48px)` :
  item.tone === 'blue' ?
  `repeating-linear-gradient(135deg, #134074 0 24px, #1a4d87 24px 48px)` :
  `repeating-linear-gradient(135deg, var(--paper-2) 0 24px, var(--silver) 24px 48px)`;
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 100,
      background: 'rgba(15,20,34,.78)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40,
      animation: 'fade .2s ease'
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: 'var(--paper)', borderRadius: 8, overflow: 'hidden',
        width: 'min(960px, 96vw)', maxHeight: '92vh', display: 'flex', flexDirection: 'column',
        boxShadow: '0 24px 80px rgba(0,0,0,.4)'
      }}>
        <div style={{ aspectRatio: '16 / 10', background: bg, position: 'relative' }}>
          <div className="mono" style={{
            position: 'absolute', left: 18, bottom: 18, padding: '6px 11px',
            background: item.tone === 'paper' ? 'var(--paper)' : 'rgba(0,0,0,.35)',
            color: item.tone === 'paper' ? 'var(--ink-mute)' : 'var(--paper)',
            fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase',
            border: '1px solid ' + (item.tone === 'paper' ? 'var(--rule)' : 'rgba(255,255,255,.2)')
          }}>{item.tag}</div>
          <button onClick={onClose} style={{
            position: 'absolute', right: 14, top: 14, width: 36, height: 36, borderRadius: 999,
            background: 'rgba(255,255,255,.92)', border: 0, cursor: 'pointer', fontSize: 18
          }}>×</button>
        </div>
        <div style={{ padding: '24px 28px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 24 }}>
          <div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--silver-2)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>{item.id.toUpperCase()} · {item.tag}</div>
            <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.015em' }}>{item.title}</div>
          </div>
          <div style={{ fontSize: 13, color: 'var(--ink-mute)' }}>Anonymised artefact</div>
        </div>
      </div>
    </div>);

}

/* ───────────────────────────── Journal ───────────────────────────── */
const TAGS = ['All', 'Operations', 'Systems', 'AI', 'Tools'];

function fmtDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

function Journal({ onOpenPost }) {
  const [tag, setTag] = useState('All');
  const posts = useMemo(() => tag === 'All' ? window.POSTS : window.POSTS.filter((p) => p.tag === tag), [tag]);
  return (
    <Section id="journal" eyebrow="Journal — A07">
      <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 48, marginBottom: 48, flexWrap: 'wrap' }}>
        <h2 style={{ margin: 0, fontSize: 'clamp(36px, 4.5vw, 64px)', lineHeight: 1.02, letterSpacing: '-0.025em', fontWeight: 600, maxWidth: '16ch' }}>
          Notes from the <span className="serif">practice.</span>
        </h2>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {TAGS.map((t) =>
          <button key={t} onClick={() => setTag(t)} style={{
            appearance: 'none', border: '1px solid ' + (tag === t ? 'var(--navy)' : 'var(--rule)'),
            background: tag === t ? 'var(--navy)' : 'transparent',
            color: tag === t ? 'var(--paper)' : 'var(--ink-mute)',
            padding: '7px 14px', borderRadius: 999, fontSize: 13, cursor: 'pointer',
            transition: 'all .18s ease'
          }}>{t}</button>
          )}
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--rule-strong)' }}>
        {posts.map((p, i) =>
        <button key={p.slug} onClick={() => onOpenPost(p)} style={{
          appearance: 'none', border: 0, background: 'transparent', cursor: 'pointer',
          width: '100%', padding: '28px 0', textAlign: 'left',
          borderBottom: '1px solid var(--rule-strong)',
          display: 'grid', gridTemplateColumns: '120px 1.4fr 1fr 100px 24px', gap: 32, alignItems: 'baseline',
          transition: 'background .18s ease'
        }}
        onMouseEnter={(e) => {e.currentTarget.style.background = 'rgba(15,20,34,.03)';}}
        onMouseLeave={(e) => {e.currentTarget.style.background = 'transparent';}}>
          
            <div className="mono" style={{ fontSize: 12, color: 'var(--silver-2)', letterSpacing: '0.06em' }}>{fmtDate(p.date)}</div>
            <div style={{ fontSize: 'clamp(20px,1.9vw,26px)', fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.2, color: 'var(--ink)' }}>{p.title}</div>
            <div style={{ fontSize: 14.5, color: 'var(--ink-mute)', lineHeight: 1.5 }}>{p.excerpt}</div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--silver-2)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{p.tag} · {p.readTime}</div>
            <div style={{ justifySelf: 'end', fontSize: 20, color: 'var(--navy)' }}>→</div>
          </button>
        )}
      </div>
    </Section>);

}

function PostReader({ post, onClose }) {
  useEffect(() => {
    if (!post) return;
    const onKey = (e) => {if (e.key === 'Escape') onClose();};
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {window.removeEventListener('keydown', onKey);document.body.style.overflow = '';};
  }, [post, onClose]);
  if (!post) return null;
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 100,
      background: 'rgba(15,20,34,.62)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
      display: 'flex', justifyContent: 'flex-end'
    }}>
      <article onClick={(e) => e.stopPropagation()} style={{
        width: 'min(720px, 96vw)', height: '100%', background: 'var(--paper)',
        overflowY: 'auto', padding: '48px 56px 72px',
        boxShadow: '-24px 0 80px rgba(0,0,0,.3)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
          <div className="mono" style={{ fontSize: 11, color: 'var(--silver-2)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{fmtDate(post.date)} · {post.tag} · {post.readTime}</div>
          <button onClick={onClose} style={{
            width: 36, height: 36, borderRadius: 999, border: '1px solid var(--rule-strong)',
            background: 'transparent', cursor: 'pointer', fontSize: 18
          }}>×</button>
        </div>
        <h1 style={{ margin: '0 0 32px', fontSize: 'clamp(32px, 3.6vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.025em', fontWeight: 600 }}>{post.title}</h1>
        <div style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-mute)' }}>
          {post.body.map((para, i) =>
          <p key={i} style={{ margin: '0 0 22px' }}>{para}</p>
          )}
        </div>
        <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--rule)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="mono" style={{ fontSize: 11, color: 'var(--silver-2)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Tristan Hoang · Auckland</div>
          <button onClick={onClose} style={{
            padding: '10px 18px', border: 0, borderRadius: 999,
            background: 'var(--navy)', color: 'var(--paper)', fontSize: 13.5, fontWeight: 500, cursor: 'pointer'
          }}>Back to journal</button>
        </div>
      </article>
    </div>);

}

/* ───────────────────────────── Contact / Footer ───────────────────────────── */
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', org: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = 'Required';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Valid email needed';
    if (!form.message.trim() || form.message.trim().length < 12) err.message = 'A line or two, please';
    setErrors(err);
    if (Object.keys(err).length === 0) setSent(true);
  };

  const Field = ({ name, label, type = 'text', area = false }) =>
  <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div className="mono" style={{ fontSize: 11, color: 'var(--silver-2)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        {label} {errors[name] && <span style={{ color: 'var(--accent)', textTransform: 'none', letterSpacing: 0, marginLeft: 8 }}>— {errors[name]}</span>}
      </div>
      {area ?
    <textarea rows={4} value={form[name]} onChange={(e) => setForm({ ...form, [name]: e.target.value })}
    style={{
      font: 'inherit', fontSize: 15.5, padding: '14px 16px', borderRadius: 6,
      border: '1px solid ' + (errors[name] ? 'var(--accent)' : 'var(--rule-strong)'),
      background: 'var(--paper)', color: 'var(--ink)', resize: 'vertical', outline: 'none'
    }} /> :

    <input type={type} value={form[name]} onChange={(e) => setForm({ ...form, [name]: e.target.value })}
    style={{
      font: 'inherit', fontSize: 15.5, padding: '13px 16px', borderRadius: 6,
      border: '1px solid ' + (errors[name] ? 'var(--accent)' : 'var(--rule-strong)'),
      background: 'var(--paper)', color: 'var(--ink)', outline: 'none'
    }} />
    }
    </label>;


  return (
    <Section id="contact" eyebrow="Get in touch — A08" bottom={80}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96 }}>
        <div>
          <h2 style={{ margin: 0, fontSize: 'clamp(36px, 4.5vw, 64px)', lineHeight: 1.02, letterSpacing: '-0.025em', fontWeight: 600, maxWidth: '14ch' }}>
            A short note is <span className="serif">enough.</span>
          </h2>
          <p style={{ marginTop: 28, fontSize: 17, lineHeight: 1.55, color: 'var(--ink-mute)', maxWidth: '42ch' }}>
            Tell me a bit about the team, the workflow that's bothering you most, and any constraint I should know about. I read everything personally and reply within two working days.
          </p>

          <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {[
            ['Email', 'tristan@thoang.co'],
            ['Calendar', 'cal.com/tristan-hoang/30min'],
            ['LinkedIn', 'linkedin.com/in/tristanhoang'],
            ['Based in', 'Auckland · NZST (UTC+12)']].
            map(([k, v]) =>
            <div key={k} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24, paddingBottom: 14, borderBottom: '1px solid var(--rule)' }}>
                <div className="mono" style={{ fontSize: 11, color: 'var(--silver-2)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{k}</div>
                <div style={{ fontSize: 15.5 }}>{v}</div>
              </div>
            )}
          </div>
        </div>

        <div>
          {sent ?
          <div style={{
            padding: 48, borderRadius: 8, background: 'var(--paper-2)', border: '1px solid var(--rule)',
            display: 'flex', flexDirection: 'column', gap: 16, minHeight: 480, justifyContent: 'center'
          }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--silver-2)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Sent — A08.OK</div>
              <h3 style={{ margin: 0, fontSize: 32, lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 600 }}>Thanks, {form.name.split(' ')[0]}.</h3>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-mute)', lineHeight: 1.55 }}>
                I'll reply to <strong>{form.email}</strong> within two working days. If it's urgent, feel free to put "urgent" in the subject when you hear back.
              </p>
              <button onClick={() => {setForm({ name: '', email: '', org: '', message: '' });setSent(false);}}
            style={{
              alignSelf: 'flex-start', marginTop: 12, padding: '11px 18px', border: '1px solid var(--rule-strong)',
              borderRadius: 999, background: 'transparent', cursor: 'pointer', fontSize: 13.5
            }}>Send another</button>
            </div> :

          <form onSubmit={submit} style={{
            padding: 32, borderRadius: 8, background: 'var(--paper-2)', border: '1px solid var(--rule)',
            display: 'flex', flexDirection: 'column', gap: 18
          }}>
              <Field name="name" label="Your name" />
              <Field name="email" label="Email" type="email" />
              <Field name="org" label="Organisation (optional)" />
              <Field name="message" label="What would you like to talk about?" area />
              <button type="submit" style={{
              marginTop: 8, padding: '14px 22px', border: 0, borderRadius: 999,
              background: 'var(--navy)', color: 'var(--paper)',
              fontSize: 14.5, fontWeight: 500, cursor: 'pointer',
              alignSelf: 'flex-start'
            }}>Send note →</button>
            </form>
          }
        </div>
      </div>
    </Section>);

}

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--rule)', padding: '48px 36px 56px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, alignItems: 'start' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <LogoMark size={28} />
            <div style={{ fontWeight: 600, fontSize: 15 }}>Tristan Hoang</div>
          </div>
          <p style={{ margin: 0, fontSize: 13.5, color: 'var(--ink-mute)', maxWidth: '40ch', lineHeight: 1.55 }}>
            Independent automation and operations consulting. Trading as Hoang Consulting Limited, NZBN 9429051000000.
          </p>
        </div>
        {[
        ['Site', ['About', 'Services', 'Work', 'Gallery', 'Journal', 'Contact']],
        ['Elsewhere', ['LinkedIn', 'Read.cv', 'GitHub', 'RSS']],
        ['Office', ['Auckland 1010', 'New Zealand', 'tristan@thoang.co']]].
        map(([h, items], i) =>
        <div key={i}>
            <div className="mono" style={{ fontSize: 10.5, color: 'var(--silver-2)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>{h}</div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
              {items.map((x) => <li key={x} style={{ fontSize: 13.5, color: 'var(--ink-mute)' }}>{x}</li>)}
            </ul>
          </div>
        )}
      </div>
      <div style={{ maxWidth: 1280, margin: '56px auto 0', paddingTop: 24, borderTop: '1px solid var(--rule)', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--silver-2)' }}>
        <div className="mono" style={{ letterSpacing: '0.08em' }}>© 2026 Tristan Hoang Automation Consultant</div>
        <div className="mono" style={{ letterSpacing: '0.08em' }}>v1.0 · TH-2026</div>
      </div>
    </footer>);

}

Object.assign(window, {
  Nav, Hero, About, Services, Work, Gallery, GalleryLightbox, Journal, PostReader, Contact, Footer, LogoMark
});