'use client'

import { useState, useEffect } from 'react'
import LogoMark from './LogoMark'

const NAV_ITEMS = [
  { id: 'about',    label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work',     label: 'Work' },
  { id: 'gallery',  label: 'Gallery' },
  { id: 'journal',  label: 'Journal' },
  { id: 'contact',  label: 'Contact' },
]

interface NavProps {
  active: string
  onJump: (id: string) => void
}

export default function Nav({ active, onJump }: NavProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(240,238,233,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px) saturate(150%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(150%)' : 'none',
        borderBottom: scrolled ? '1px solid var(--rule)' : '1px solid transparent',
        transition: 'background 250ms ease, border-color 250ms ease, backdrop-filter 250ms ease',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '18px 36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        {/* Wordmark */}
        <button
          onClick={() => onJump('top')}
          style={{
            appearance: 'none',
            border: 0,
            background: 'transparent',
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <LogoMark size={34} />
          <div style={{ lineHeight: 1.05, textAlign: 'left' }}>
            <div style={{ fontWeight: 600, fontSize: 15, letterSpacing: '-0.005em', color: 'var(--ink)' }}>
              Tristan Hoang
            </div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'var(--silver-2)',
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              }}
            >
              Automation &amp; Optimisation
            </div>
          </div>
        </button>

        {/* Nav items */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {NAV_ITEMS.map((n) => (
            <NavItem key={n.id} id={n.id} label={n.label} active={active} onJump={onJump} />
          ))}
          <button
            onClick={() => onJump('contact')}
            style={{
              marginLeft: 10,
              padding: '9px 16px',
              border: 0,
              borderRadius: 999,
              background: 'var(--navy)',
              color: 'var(--paper)',
              fontSize: 13.5,
              fontWeight: 500,
              cursor: 'pointer',
              boxShadow: '0 1px 0 rgba(255,255,255,.15) inset, 0 1px 2px rgba(11,37,69,.25)',
            }}
          >
            Book a call →
          </button>
        </nav>
      </div>
    </header>
  )
}

function NavItem({
  id,
  label,
  active,
  onJump,
}: {
  id: string
  label: string
  active: string
  onJump: (id: string) => void
}) {
  const isActive = active === id
  return (
    <button
      onClick={() => onJump(id)}
      style={{
        appearance: 'none',
        border: 0,
        background: isActive ? 'rgba(11,37,69,0.07)' : 'transparent',
        cursor: 'pointer',
        padding: '8px 14px',
        borderRadius: 999,
        fontSize: 13.5,
        fontWeight: 500,
        letterSpacing: '-0.005em',
        color: isActive ? 'var(--navy)' : 'var(--ink-mute)',
        transition: 'color 180ms ease, background 180ms ease',
      }}
      onMouseEnter={(e) => {
        if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = 'var(--ink)'
      }}
      onMouseLeave={(e) => {
        if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = 'var(--ink-mute)'
      }}
    >
      {label}
    </button>
  )
}