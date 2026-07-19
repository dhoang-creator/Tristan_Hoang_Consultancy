import type { Metadata } from 'next'
import Link from 'next/link'
import GalleryFull from '@/components/GalleryFull'

export const metadata: Metadata = {
  title: 'Gallery | Tristan Hoang',
  description:
    'Workflow maps, system architectures and cadence templates — anonymised artefacts from automation and operations engagements with UK and European businesses.',
  alternates: { canonical: '/gallery' },
}

export default function GalleryPage() {
  return (
    <main style={{ padding: '64px 36px 120px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Link
          href="/"
          className="footer-link"
          style={{
            fontSize: 13.5,
            color: 'var(--ink-mute)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          ← Back to site
        </Link>

        <div
          style={{
            marginTop: 48,
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--silver-2)',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          }}
        >
          Gallery · Anonymised artefacts
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'space-between',
            gap: 48,
            margin: '16px 0 56px',
            flexWrap: 'wrap',
          }}
        >
          <h1
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
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: '34ch',
              fontSize: 15,
              lineHeight: 1.55,
              color: 'var(--ink-mute)',
            }}
          >
            The artefacts I leave behind: workflow maps, system architectures, cadence
            templates. All anonymised; originals stay with the client.
          </p>
        </div>

        <GalleryFull />
      </div>
    </main>
  )
}
