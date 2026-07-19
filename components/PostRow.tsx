'use client'

import Link from 'next/link'
import type { Post } from '@/lib/data'

export function fmtDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

export default function PostRow({ post }: { post: Post }) {
  return (
    <Link
      href={`/journal/${post.slug}`}
      style={{
        width: '100%',
        padding: '28px 0',
        textAlign: 'left',
        borderBottom: '1px solid var(--rule-strong)',
        display: 'grid',
        gridTemplateColumns: '120px 1.4fr 1fr 100px 24px',
        gap: 32,
        alignItems: 'baseline',
        transition: 'background 180ms ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(15,20,34,.03)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
      }}
    >
      <div
        style={{
          fontSize: 12,
          color: 'var(--silver-2)',
          letterSpacing: '0.06em',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        }}
      >
        {fmtDate(post.date)}
      </div>
      <div
        style={{
          fontSize: 'clamp(20px, 1.9vw, 26px)',
          fontWeight: 600,
          letterSpacing: '-0.015em',
          lineHeight: 1.2,
          color: 'var(--ink)',
        }}
      >
        {post.title}
      </div>
      <div
        style={{ fontSize: 14.5, color: 'var(--ink-mute)', lineHeight: 1.5 }}
      >
        {post.excerpt}
      </div>
      <div
        style={{
          fontSize: 11,
          color: 'var(--silver-2)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        }}
      >
        {post.tag} · {post.readTime}
      </div>
      <div style={{ justifySelf: 'end', fontSize: 20, color: 'var(--navy)' }}>→</div>
    </Link>
  )
}
