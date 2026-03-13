'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { urlFor } from '@/src/lib/sanity.image'

type Category = {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  coverMedia: any
}

export default function PortfolioCategories({
  categories,
}: {
  categories: Category[]
}) {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-amber-50/20 to-neutral-50">
      {/* Magical golden background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Soft golden orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-amber-200/20 via-yellow-100/10 to-transparent blur-3xl"
        />
        
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-orange-200/15 via-amber-100/10 to-transparent blur-3xl"
        />

        {/* Linear gradient grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af7608_1px,transparent_1px),linear-gradient(to_bottom,#d4af7608_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,118,0.03),transparent_50%)]" />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="hidden md:block absolute w-1 h-1 rounded-full bg-[#d4af76]/20"
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Page Title */}
      <div className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-20 lg:pb-24 px-6 md:px-12">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-[#d4af76]" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#b38b5d] font-medium">
              Portfolio
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-neutral-900"
          >
            A curated
            <br />
            <span className="italic bg-gradient-to-r from-[#d4af76] via-[#b38b5d] to-[#8b6f47] bg-clip-text text-transparent">
              visual archive
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 md:mt-8 text-sm md:text-base text-neutral-500 max-w-md font-light leading-relaxed"
          >
            Selected bodies of work across wildlife, travel, hospitality and commissioned storytelling.
          </motion.p>
        </div>
      </div>

      {/* Categories */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {categories.map((cat, index) => (
            <motion.div
              key={cat._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <Link
                href={`/portfolio/${cat.slug.current}`}
                className="group relative block overflow-hidden"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="aspect-[4/5] overflow-hidden bg-neutral-100">
                    <img
                      src={urlFor(cat.coverMedia).width(1200).quality(90).url()}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Soft gradient with golden tint on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/60 transition-colors duration-500" />

                  {/* Golden border on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d4af76]/30 transition-colors duration-500" />

                  {/* Text */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-2xl md:text-3xl font-light tracking-tight mb-2 group-hover:text-[#f4d4a0] transition-colors duration-500">
                      {cat.title}
                    </h3>
                    {cat.description && (
                      <p className="text-white/70 text-sm font-light">
                        {cat.description}
                      </p>
                    )}

                    {/* Animated underline */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      style={{ transformOrigin: 'left' }}
                      transition={{ duration: 0.5 }}
                      className="h-px bg-gradient-to-r from-[#d4af76] to-transparent mt-3"
                    />
                  </div>

                  {/* Index number - top right */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white/60 text-xs tracking-wider tabular-nums bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
