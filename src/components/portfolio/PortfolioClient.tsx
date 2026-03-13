'use client'

import { useState } from 'react'
import PortfolioMuseumGrid from './PortfolioMuseumGrid'
import MuseumViewer from './MuseumViewer'

type Item = {
  _id: string
  image: any
  caption?: string
  orientation?: 'vertical' | 'horizontal' | 'square'
}

export default function PortfolioClient({ items }: { items: Item[] }) {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <>
      {/* GRID */}
      <PortfolioMuseumGrid
        items={items}
        onSelect={setActiveId}
      />

      {/* VIEWER */}
      {activeId && (
        <MuseumViewer
          items={items}
          activeId={activeId}
          onClose={() => setActiveId(null)}
        />
      )}
    </>
  )
}
