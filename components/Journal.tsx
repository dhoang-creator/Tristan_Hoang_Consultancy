'use client'

import { useState, useMemo, useEffect } from 'react'
import { POSTS, type Post } from '@/lib/data'

const TAGS = ['All', 'Operations', 'Systems', 'AI', 'Tools']

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

function fmtDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

function PostReader({ post, onClose }: { post: Post | null; onClose: () => void }) {
  useEffect(() => {
    if (!post) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [post, onClose])

  if (!post) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(15,20,34,.62)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'fade .2s ease',
      }}
    >
      <article
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(720px, 96vw)',
          height: '100%',
          background: 'var(--paper)',
          overflowY: 'auto',
          padding: '48px 56px 72px',
          boxShadow: '-24px 0 80px rgba(0,0,0,.3)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: 'var(--silver-2)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            }}
          >
            {fmtDate(post.date)} · {post.tag} · {post.readTime}
          </div>
          <button
            onClick={onClose}
            style={{
              width: 36,
              height: 36,
              borderRadius: 999,
              border: '1px solid var(--rule-strong)',
              background: 'transparent',
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

        <h1
          style={{
            margin: '0 0 32px',
            fontSize: 'clamp(32px, 3.6vw, 44px)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            fontWeight: 600,
          }}
        >
          {post.title}
        </h1>

        <div style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-mute)' }}>
          {post.body.map((para, i) => (
            <p key={i} style={{ margin: '0 0 22px' }}>
              {para}
            </p>
          ))}
        </div>

        <div
          style={{
            marginTop: 48,
            paddingTop: 32,
            borderTop: '1px solid var(--rule)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: 'var(--silver-2)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            }}
          >
            Tristan Hoang · Bristol
          </div>
          <button
            onClick={onClose}
            style={{
              padding: '10px 18px',
              border: 0,
              borderRadius: 999,
              background: 'var(--navy)',
              color: 'var(--paper)',
              fontSize: 13.5,
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Back to journal
          </button>
        </div>
      </article>
    </div>
  )
}

export default function Journal() {
  const [tag, setTag] = useState('All')
  const [post, setPost] = useState<Post | null>(null)

  const posts = useMemo(
    () => (tag === 'All' ? POSTS : POSTS.filter((p) => p.tag === tag)),
    [tag]
  )

  return (
    <>
      <section id="journal" style={{ padding: '120px 36px', scrollMarginTop: 90 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionEyebrow label="Journal — A07" />

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
              Notes from the{' '}
              <span className="serif">practice.</span>
            </h2>

            {/* Tag filter */}
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
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
          </div>

          {/* Post list */}
          <div style={{ borderTop: '1px solid var(--rule-strong)' }}>
            {posts.map((p) => (
              <button
                key={p.slug}
                onClick={() => setPost(p)}
                style={{
                  appearance: 'none',
                  border: 0,
                  background: 'transparent',
                  cursor: 'pointer',
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
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(15,20,34,.03)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
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
                  {fmtDate(p.date)}
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
                  {p.title}
                </div>
                <div
                  style={{ fontSize: 14.5, color: 'var(--ink-mute)', lineHeight: 1.5 }}
                >
                  {p.excerpt}
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
                  {p.tag} · {p.readTime}
                </div>
                <div style={{ justifySelf: 'end', fontSize: 20, color: 'var(--navy)' }}>→</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <PostReader post={post} onClose={() => setPost(null)} />
    </>
  )
}
