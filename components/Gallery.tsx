'use client'

import { useState, useEffect } from 'react'
import { GALLERY, type GalleryItem } from '@/lib/data'

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

function tileBg(tone: GalleryItem['tone']) {
  if (tone === 'navy') return 'repeating-linear-gradient(135deg, #0B2545 0 18px, #102e58 18px 36px)'
  if (tone === 'blue') return 'repeating-linear-gradient(135deg, #134074 0 18px, #1a4d87 18px 36px)'
  return 'repeating-linear-gradient(135deg, var(--paper-2) 0 18px, var(--silver) 18px 36px)'
}

function lightboxBg(tone: GalleryItem['tone']) {
  if (tone === 'navy') return 'repeating-linear-gradient(135deg, #0B2545 0 24px, #102e58 24px 48px)'
  if (tone === 'blue') return 'repeating-linear-gradient(135deg, #134074 0 24px, #1a4d87 24px 48px)'
  return 'repeating-linear-gradient(135deg, var(--paper-2) 0 24px, var(--silver) 24px 48px)'
}

function GalleryTile({ item, onOpen }: { item: GalleryItem; onOpen: (item: GalleryItem) => void }) {
  const aspect = item.aspect === 'tall' ? '3 / 4' : item.aspect === 'wide' ? '16 / 10' : '1 / 1'
  const isDark = item.tone !== 'paper'

  return (
    <button
      onClick={() => onOpen(item)}
      style={{
        appearance: 'none',
        border: '1px solid var(--rule)',
        borderRadius: 6,
        padding: 0,
        overflow: 'hidden',
        cursor: 'zoom-in',
        textAlign: 'left',
        background: 'var(--paper-2)',
        width: '100%',
        transition: 'transform 250ms ease, box-shadow 250ms ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLButtonElement
        el.style.transform = 'translateY(-3px)'
        el.style.boxShadow = '0 12px 32px rgba(11,37,69,.12)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLButtonElement
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
      }}
    >
      <div style={{ aspectRatio: aspect, background: tileBg(item.tone), position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            left: 14,
            bottom: 14,
            padding: '5px 9px',
            background: isDark ? 'rgba(0,0,0,.3)' : 'var(--paper)',
            color: isDark ? 'var(--paper)' : 'var(--ink-mute)',
            fontSize: 10,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            border: `1px solid ${isDark ? 'rgba(255,255,255,.18)' : 'var(--rule)'}`,
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          }}
        >
          {item.tag}
        </div>
      </div>
      <div
        style={{
          padding: '14px 16px 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: 12,
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink)' }}>{item.title}</div>
        <div
          style={{
            fontSize: 10.5,
            color: 'var(--silver-2)',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            flexShrink: 0,
          }}
        >
          {item.id.toUpperCase()}
        </div>
      </div>
    </button>
  )
}

function GalleryLightbox({
  item,
  onClose,
}: {
  item: GalleryItem | null
  onClose: () => void
}) {
  useEffect(() => {
    if (!item) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [item, onClose])

  if (!item) return null
  const isDark = item.tone !== 'paper'

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(15,20,34,.78)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        animation: 'fade .2s ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--paper)',
          borderRadius: 8,
          overflow: 'hidden',
          width: 'min(960px, 96vw)',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 24px 80px rgba(0,0,0,.4)',
        }}
      >
        <div
          style={{
            aspectRatio: '16 / 10',
            background: lightboxBg(item.tone),
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 18,
              bottom: 18,
              padding: '6px 11px',
              background: isDark ? 'rgba(0,0,0,.35)' : 'var(--paper)',
              color: isDark ? 'var(--paper)' : 'var(--ink-mute)',
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              border: `1px solid ${isDark ? 'rgba(255,255,255,.2)' : 'var(--rule)'}`,
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            }}
          >
            {item.tag}
          </div>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              right: 14,
              top: 14,
              width: 36,
              height: 36,
              borderRadius: 999,
              background: 'rgba(255,255,255,.92)',
              border: 0,
              cursor: 'pointer',
              fontSize: 18,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ×
          </button>
        </div>
        <div
          style={{
            padding: '24px 28px 28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            gap: 24,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                color: 'var(--silver-2)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 8,
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              }}
            >
              {item.id.toUpperCase()} · {item.tag}
            </div>
            <div
              style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.015em' }}
            >
              {item.title}
            </div>
          </div>
          <div style={{ fontSize: 13, color: 'var(--ink-mute)', flexShrink: 0 }}>
            Anonymised artefact
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [galleryItem, setGalleryItem] = useState<GalleryItem | null>(null)

  return (
    <>
      <section id="gallery" style={{ padding: '120px 36px', scrollMarginTop: 90 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionEyebrow label="Gallery — A07" />

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
                maxWidth: '16ch',
              }}
            >
              Working diagrams,{' '}
              <span className="serif">not pitch decks.</span>
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
              A sample of the artefacts I leave behind — workflow maps, system architectures,
              cadence templates. All anonymised; originals stay with the client.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 20,
              gridAutoFlow: 'dense',
            }}
          >
            {GALLERY.map((g) => (
              <div key={g.id} style={g.aspect === 'wide' ? { gridColumn: 'span 2' } : {}}>
                <GalleryTile item={g} onOpen={setGalleryItem} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <GalleryLightbox item={galleryItem} onClose={() => setGalleryItem(null)} />
    </>
  )
}