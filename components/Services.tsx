'use client'

import { useState } from 'react'
import { SERVICES } from '@/lib/data'

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

interface ServicesProps {
  onJump: (id: string) => void
}

export default function Services({ onJump }: ServicesProps) {
  const [open, setOpen] = useState(0)

  return (
    <section id="services" style={{ padding: '120px 36px', scrollMarginTop: 90 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionEyebrow label="Services · A05" />

        <div
          style={{
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'space-between',
            gap: 48,
            marginBottom: 56,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 'clamp(36px, 4.5vw, 64px)',
              lineHeight: 1.02,
              letterSpacing: '-0.025em',
              fontWeight: 600,
              maxWidth: '14ch',
            }}
          >
            Four ways I {' '}
            <span className="serif">show up.</span>
          </h2>
          <p
            style={{
              margin: 0,
              maxWidth: '34ch',
              fontSize: 15,
              lineHeight: 1.55,
              color: 'var(--ink-mute)',
            }}
          >
            Most engagements blend two of these. I&rsquo;ll tell you in the first call which mix
            actually fits your situation, and when none of them do.
          </p>
        </div>

        <div style={{ borderTop: '1px solid var(--rule-strong)' }}>
          {SERVICES.map((s, i) => {
            const isOpen = open === i
            return (
              <div key={s.no} style={{ borderBottom: '1px solid var(--rule-strong)' }}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    appearance: 'none',
                    border: 0,
                    background: 'transparent',
                    cursor: 'pointer',
                    width: '100%',
                    padding: '28px 0',
                    textAlign: 'left',
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr 1fr 40px',
                    gap: 32,
                    alignItems: 'baseline',
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      color: 'var(--silver-2)',
                      letterSpacing: '0.08em',
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                    }}
                  >
                    {s.no}
                  </div>
                  <div
                    style={{
                      fontSize: 'clamp(22px, 2.4vw, 32px)',
                      fontWeight: 600,
                      letterSpacing: '-0.015em',
                      color: 'var(--ink)',
                    }}
                  >
                    {s.name}
                  </div>
                  <div style={{ fontSize: 15, lineHeight: 1.5 }}>
                    <em className="serif" style={{ display: 'block', color: 'var(--ink)', marginBottom: 6 }}>
                      {s.hook}
                    </em>
                    <span style={{ color: 'var(--ink-mute)' }}>{s.summary}</span>
                  </div>
                  <div
                    style={{
                      justifySelf: 'end',
                      fontSize: 22,
                      color: 'var(--navy)',
                      transition: 'transform 250ms ease',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </div>
                </button>

                {/* Expandable panel */}
                <div
                  style={{
                    maxHeight: isOpen ? 300 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 350ms ease, opacity 250ms ease',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div
                    style={{
                      padding: '4px 0 32px',
                      display: 'grid',
                      gridTemplateColumns: '80px 1fr 1fr 40px',
                      gap: 32,
                    }}
                  >
                    <div />
                    <div>
                      <div
                        style={{
                          fontSize: 11,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          marginBottom: 10,
                          color: 'var(--silver-2)',
                          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                        }}
                      >
                        Deliverables
                      </div>
                      <ul
                        style={{
                          margin: 0,
                          padding: 0,
                          listStyle: 'none',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 8,
                        }}
                      >
                        {s.deliverables.map((d, j) => (
                          <li
                            key={j}
                            style={{
                              fontSize: 14.5,
                              color: 'var(--ink)',
                              display: 'flex',
                              gap: 12,
                            }}
                          >
                            <span
                              style={{
                                color: 'var(--silver-2)',
                                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                              }}
                            >
                              0{j + 1}
                            </span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 11,
                          color: 'var(--silver-2)',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          marginBottom: 10,
                          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                        }}
                      >
                        Typical duration
                      </div>
                      <div style={{ fontSize: 14.5, color: 'var(--ink)' }}>{s.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}