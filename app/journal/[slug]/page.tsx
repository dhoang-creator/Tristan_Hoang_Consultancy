import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { POSTS } from '@/lib/data'

function fmtDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = POSTS.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: `${post.title} | Tristan Hoang`,
    description: post.excerpt,
    alternates: { canonical: `/journal/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: ['Tristan Hoang'],
    },
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Tristan Hoang',
      url: 'https://www.tristanhoang.co.uk',
    },
    articleSection: post.tag,
  }

  return (
    <main style={{ padding: '64px 36px 120px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article style={{ maxWidth: 720, margin: '0 auto' }}>
        <Link
          href="/journal"
          className="footer-link"
          style={{
            fontSize: 13.5,
            color: 'var(--ink-mute)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          ← All posts
        </Link>

        <div
          style={{
            marginTop: 48,
            fontSize: 11,
            color: 'var(--silver-2)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          }}
        >
          {fmtDate(post.date)} · {post.tag} · {post.readTime}
        </div>

        <h1
          style={{
            margin: '16px 0 32px',
            fontSize: 'clamp(32px, 3.6vw, 44px)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            fontWeight: 600,
          }}
        >
          {post.title}
        </h1>

        <div style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-mute)' }}>
          {post.body.map((block, i) => {
            if (typeof block === 'string') {
              return (
                <p key={i} style={{ margin: '0 0 22px' }}>
                  {block}
                </p>
              )
            }

            if (block.type === 'h2') {
              return (
                <h2
                  key={i}
                  style={{
                    margin: '40px 0 16px',
                    fontSize: 24,
                    lineHeight: 1.25,
                    fontWeight: 600,
                    letterSpacing: '-0.015em',
                    color: 'var(--ink)',
                  }}
                >
                  {block.text}
                </h2>
              )
            }

            if (block.type === 'h3') {
              return (
                <h3
                  key={i}
                  style={{
                    margin: '32px 0 12px',
                    fontSize: 19,
                    lineHeight: 1.3,
                    fontWeight: 600,
                    color: 'var(--ink)',
                  }}
                >
                  {block.text}
                </h3>
              )
            }

            if (block.type === 'ul') {
              return (
                <ul key={i} style={{ margin: '0 0 22px', paddingLeft: 22 }}>
                  {block.items.map((item, j) => (
                    <li key={j} style={{ marginBottom: 8 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              )
            }

            return (
              <ol key={i} style={{ margin: '0 0 22px', paddingLeft: 22 }}>
                {block.items.map((item, j) => (
                  <li key={j} style={{ marginBottom: 8 }}>
                    {item}
                  </li>
                ))}
              </ol>
            )
          })}
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
          <Link
            href="/journal"
            style={{
              padding: '10px 18px',
              borderRadius: 999,
              background: 'var(--navy)',
              color: 'var(--paper)',
              fontSize: 13.5,
              fontWeight: 500,
            }}
          >
            Back to journal
          </Link>
        </div>
      </article>
    </main>
  )
}
