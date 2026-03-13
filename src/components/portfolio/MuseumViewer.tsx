'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { urlFor } from '@/src/lib/sanity.image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

type Item = {
  _id: string
  image: any
  caption?: string
  orientation?: 'vertical' | 'horizontal' | 'square'
}

export default function MuseumViewer({
  items,
  activeId,
  onClose,
}: {
  items: Item[]
  activeId: string
  onClose: () => void
}) {
  const startIndex = items.findIndex(i => i._id === activeId)
  const [index, setIndex] = useState(startIndex)

  const item = items[index]

  // Navigation functions
  const goNext = () => setIndex(i => Math.min(i + 1, items.length - 1))
  const goPrev = () => setIndex(i => Math.max(i - 1, 0))

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [items.length, onClose])

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  if (!item) return null

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close Button - Top Right */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          className="fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white border border-[#d4af76]/20 hover:border-[#d4af76]/40 hover:bg-amber-50/50 transition-all duration-300 shadow-lg"
        >
          <X className="w-5 h-5 text-neutral-700" strokeWidth={1.5} />
        </motion.button>

        {/* Previous Button - Left */}
        {index > 0 && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
            className="fixed left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white border border-[#d4af76]/20 hover:border-[#d4af76]/40 hover:bg-amber-50/50 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 text-neutral-700" strokeWidth={1.5} />
          </motion.button>
        )}

        {/* Next Button - Right */}
        {index < items.length - 1 && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
            className="fixed right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white border border-[#d4af76]/20 hover:border-[#d4af76]/40 hover:bg-amber-50/50 transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-5 h-5 text-neutral-700" strokeWidth={1.5} />
          </motion.button>
        )}

        {/* Content */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[1400px] px-6 sm:px-12 md:px-16"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <motion.img
              key={item._id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={urlFor(item.image).width(2400).quality(95).url()}
              alt={item.caption || ''}
              className="w-full max-h-[60vh] sm:max-h-[70vh] object-contain"
            />
          </div>

          {/* Caption & Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            {/* Caption */}
            {item.caption && (
              <figcaption className="max-w-xl">
                <p className="text-sm md:text-base text-neutral-600 font-light">
                  {item.caption}
                </p>
              </figcaption>
            )}

            {/* Index Counter */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#d4af76]/30" />
              <span className="text-xs text-neutral-400 tabular-nums tracking-wider">
                {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
              </span>
            </div>
          </motion.div>
        </motion.figure>

        {/* Keyboard Hints */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="hidden sm:flex fixed bottom-6 left-1/2 -translate-x-1/2 items-center gap-6 text-[10px] text-neutral-400 tracking-wider uppercase"
        >
          <span>← →  Navigate</span>
          <span>•</span>
          <span>ESC  Close</span>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  )
}