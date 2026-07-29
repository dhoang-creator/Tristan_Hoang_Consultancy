'use client'

import Link from 'next/link'
import { POSTS } from '@/lib/data'
import PostRow from './PostRow'

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

export default function Journal() {
  const preview = POSTS.slice(-3)

  return (
    <section id="journal" style={{ padding: '120px 36px', scrollMarginTop: 90 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionEyebrow label="Journal · A08" />

        <div
          style={{
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'space-between',
            gap: 48,
            marginBottom: 48,
            flexWrap: 'wrap',
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
            Notes and thoughts from the{' '}
            <span className="serif">work.</span>
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
            The three most recent entries. The full journal holds every post, filterable
            by topic.
          </p>
        </div>

        {/* Latest posts */}
        <div style={{ borderTop: '1px solid var(--rule-strong)' }}>
          {preview.map((p) => (
            <PostRow key={p.slug} post={p} />
          ))}
        </div>

        <div style={{ marginTop: 40 }}>
          <Link
            href="/journal"
            className="footer-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '11px 20px',
              border: '1px solid var(--rule-strong)',
              borderRadius: 999,
              fontSize: 13.5,
              fontWeight: 500,
              color: 'var(--ink-mute)',
            }}
          >
            Read all posts →
          </Link>
        </div>
      </div>
    </section>
  )
}
