'use client'

import { useState } from 'react'
import { GALLERY, type GalleryItem } from '@/lib/data'
import { GalleryTile, GalleryLightbox } from './Gallery'

export default function GalleryFull() {
  const [item, setItem] = useState<GalleryItem | null>(null)

  return (
    <>
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
            <GalleryTile item={g} onOpen={setItem} />
          </div>
        ))}
      </div>

      <GalleryLightbox item={item} onClose={() => setItem(null)} />
    </>
  )
}
