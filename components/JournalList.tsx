'use client'

import { useState, useMemo } from 'react'
import { POSTS } from '@/lib/data'
import PostRow from './PostRow'

const TAGS = ['All', 'Operations', 'Systems', 'AI', 'Tools', 'Cost-Savings']

export default function JournalList() {
  const [tag, setTag] = useState('All')

  const posts = useMemo(
    () => (tag === 'All' ? POSTS : POSTS.filter((p) => p.tag === tag)),
    [tag]
  )

  return (
    <>
      {/* Tag filter */}
      <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 48 }}>
        {TAGS.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            style={{
              appearance: 'none',
              border: `1px solid ${tag === t ? 'var(--navy)' : 'var(--rule)'}`,
              background: tag === t ? 'var(--navy)' : 'transparent',
              color: tag === t ? 'var(--paper)' : 'var(--ink-mute)',
              padding: '7px 14px',
              borderRadius: 999,
              fontSize: 13,
              cursor: 'pointer',
              transition: 'all 180ms ease',
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Post list */}
      <div style={{ borderTop: '1px solid var(--rule-strong)' }}>
        {posts.map((p) => (
          <PostRow key={p.slug} post={p} />
        ))}
      </div>
    </>
  )
}
