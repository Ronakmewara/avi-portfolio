'use client'

import { motion } from 'framer-motion'
import { urlFor } from '@/src/lib/sanity.image'

type Item = {
  _id: string
  image: any
  caption?: string
  orientation?: 'vertical' | 'horizontal' | 'square'
}

export default function PortfolioMuseumGrid({
  items,
  onSelect,
}: {
  items: Item[]
  onSelect: (id: string) => void
}) {
  const getColumns = (numCols: number) => {
    const columns: Item[][] = Array.from({ length: numCols }, () => [])
    items.forEach((item, index) => {
      columns[index % numCols].push(item)
    })
    return columns
  }

  return (
    <section className="relative bg-gradient-to-b from-white via-amber-50/20 to-neutral-50 px-6 py-16 sm:px-12 sm:py-24 md:px-16 md:py-32 lg:px-24 xl:px-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af7608_1px,transparent_1px),linear-gradient(to_bottom,#d4af7608_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,118,0.03),transparent_50%)]" />
      </div>

      <div className="relative mx-auto mb-12 max-w-[1600px] text-center sm:mb-16 md:mb-20 lg:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-3 flex items-center justify-center gap-3 sm:mb-4 sm:gap-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#d4af76] sm:w-12" />
            <div className="h-1 w-1 rounded-full bg-[#d4af76] sm:h-1.5 sm:w-1.5" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#d4af76] sm:w-12" />
          </div>

          <h2 className="text-xs font-light uppercase tracking-[0.25em] text-[#b38b5d] sm:text-sm md:text-base sm:tracking-[0.3em]">
            Adventure Photography
          </h2>
        </motion.div>
      </div>

      <div className="mx-auto block max-w-[600px] md:hidden">
        <div className="flex flex-col gap-6">
          {items.map((item, index) => (
            <GridItem key={item._id} item={item} index={index} onSelect={onSelect} isMobile />
          ))}
        </div>
      </div>

      <div className="mx-auto hidden max-w-[1200px] md:block lg:hidden">
        <div className="flex gap-6 md:gap-8">
          {getColumns(2).map((column, colIndex) => (
            <div key={colIndex} className="flex flex-1 flex-col gap-6 md:gap-8">
              {column.map((item, index) => (
                <GridItem
                  key={item._id}
                  item={item}
                  index={colIndex + index * 2}
                  onSelect={onSelect}
                  colIndex={colIndex}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto hidden max-w-[1600px] lg:block">
        <div className="flex gap-8 lg:gap-10 xl:gap-12">
          {getColumns(3).map((column, colIndex) => (
            <div key={colIndex} className="flex flex-1 flex-col gap-8 lg:gap-10 xl:gap-12">
              {column.map((item, index) => (
                <GridItem
                  key={item._id}
                  item={item}
                  index={colIndex + index * 3}
                  onSelect={onSelect}
                  colIndex={colIndex}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GridItem({
  item,
  index,
  onSelect,
  colIndex = 0,
  isMobile = false,
}: {
  item: Item
  index: number
  onSelect: (id: string) => void
  colIndex?: number
  isMobile?: boolean
}) {
  const getAspectRatio = () => {
    if (item.orientation === 'vertical') return 'aspect-[3/4]'
    if (item.orientation === 'horizontal') return 'aspect-[4/3]'
    if (item.orientation === 'square') return 'aspect-square'
    return index % 3 === 0 ? 'aspect-[3/4]' : index % 3 === 1 ? 'aspect-[4/5]' : 'aspect-[3/5]'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: isMobile ? Math.min(index, 5) * 0.04 : colIndex * 0.05 + index * 0.015,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onSelect(item._id)}
      className="group relative cursor-pointer"
    >
      <div className="relative transition-transform duration-300 group-hover:-translate-y-0.5">
        <div className={`relative w-full overflow-hidden bg-neutral-100 ${getAspectRatio()}`}>
          <img
            src={urlFor(item.image).width(1200).quality(90).url()}
            alt={item.caption || ''}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          />

          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />

          {item.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-6">
              <p className="text-xs font-light tracking-wide text-white">{item.caption}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
