import type { Metadata } from 'next'
import Link from 'next/link'
import JournalList from '@/components/JournalList'

export const metadata: Metadata = {
  title: 'Journal | Tristan Hoang',
  description:
    'Notes and thoughts from the work — essays on process automation, operations, tool stacks and practical AI from an independent automation consultant in Bristol.',
  alternates: { canonical: '/journal' },
}

export default function JournalPage() {
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
          Journal · All posts
        </div>

        <h1
          style={{
            margin: '16px 0 48px',
            fontSize: 'clamp(36px, 4.5vw, 64px)',
            lineHeight: 1.02,
            letterSpacing: '-0.025em',
            fontWeight: 600,
            maxWidth: '16ch',
          }}
        >
          Notes and thoughts from the{' '}
          <span className="serif">work.</span>
        </h1>

        <JournalList />
      </div>
    </main>
  )
}
