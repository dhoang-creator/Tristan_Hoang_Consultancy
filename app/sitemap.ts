import type { MetadataRoute } from 'next'
import { POSTS } from '@/lib/data'

const BASE = 'https://www.tristanhoang.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/gallery`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/journal`, changeFrequency: 'weekly', priority: 0.8 },
    ...POSTS.map((p) => ({
      url: `${BASE}/journal/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
    { url: `${BASE}/privacy`, changeFrequency: 'yearly', priority: 0.2 },
  ]
}
