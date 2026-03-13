'use client'

import { motion } from 'framer-motion'
import { urlFor } from '@/src/lib/sanity.image'

type Item = {
  _id: string
  media: any
  caption?: string
}

export default function PortfolioGallery({ items }: { items: Item[] }) {
  if (!items || items.length === 0) return null

  return (
    <section className="bg-[#faf8f4]">
      {items.map((item, index) => {
        if (!item.media) return null

        return (
          <motion.section
            key={item._id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: Math.min(index, 4) * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-screen flex items-center justify-center px-6 md:px-16"
          >
            <figure className="w-full max-w-[1400px]">
              
              {/* IMAGE */}
              <img
                src={urlFor(item.media).width(2600).quality(95).url()}
                alt={item.caption || ''}
                className="w-full object-contain"
              />

              {/* CAPTION */}
              {item.caption && (
                <figcaption className="mt-6 md:mt-8 max-w-xl">
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-neutral-500 leading-relaxed">
                    {item.caption}
                  </p>
                </figcaption>
              )}
            </figure>
          </motion.section>
        )
      })}
    </section>
  )
}
