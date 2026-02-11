'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectsGrid from '@/src/components/ProjectsGrid'
import ProjectsArchiveGrid from '@/src/components/ProjectsArchiveGrid'
import { Star } from 'lucide-react'

type Project = {
  _id: string
  title: string
  year: string
  slug: { current: string }
  coverImage: any
  category?: string
}

export default function ProjectsPageClient({
  projects,
}: {
  projects: Project[]
}) {
  const categories = [
    'All',
    ...Array.from(
      new Set(
        projects
          .map((p) => p.category)
          .filter((cat): cat is string => Boolean(cat))
      )
    ),
  ]

  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="relative min-h-screen">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-white to-neutral-50/50 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-amber-100/20 via-yellow-50/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-orange-100/15 via-amber-50/8 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        {/* PAGE HEADER - with proper navbar spacing */}
        <header className="pt-24 sm:pt-28 md:pt-36 lg:pt-44 xl:pt-48 pb-12 sm:pb-14 md:pb-20 lg:pb-24">
          <div className="max-w-4xl">
            {/* Breadcrumb / Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10"
            >
              <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#b38b5d] fill-[#b38b5d]" />
              <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#b38b5d] font-bold">
                Portfolio
              </span>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-[#d4af76] to-transparent" />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light tracking-tight text-neutral-900 mb-5 sm:mb-6 md:mb-8 leading-[0.95]"
            >
               
              <span className="block bg-gradient-to-r from-[#d4af76] via-[#b38b5d] to-[#8b6f47] bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h1>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-3 sm:space-y-4"
            >
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-500 font-light leading-relaxed max-w-2xl">
                A curated collection of commissioned work and personal explorations
                in wildlife and nature photography.
              </p>
              
              {/* Stats */}
              <div className="flex items-center gap-4 sm:gap-6 md:gap-8 pt-3 sm:pt-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#d4af76]" />
                  <span className="text-[10px] sm:text-xs md:text-sm text-neutral-400 font-light">
                    <span className="text-neutral-900 font-medium tabular-nums">{projects.length}</span> Projects
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-1 h-1 rounded-full bg-neutral-300" />
                  <span className="text-[10px] sm:text-xs md:text-sm text-neutral-400 font-light">
                    <span className="text-neutral-900 font-medium tabular-nums">{categories.length - 1}</span> Categories
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </header>

        {/* CATEGORIES FILTER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 sm:mb-14 md:mb-16 lg:mb-20 xl:mb-24"
        >
          {/* Filter Label */}
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-neutral-400 font-medium">
              Filter by Category
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-neutral-200 to-transparent" />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            {categories.map((cat, index) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.4 + index * 0.05,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  relative px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full 
                  text-[11px] sm:text-xs md:text-sm font-medium
                  tracking-wide transition-all duration-500 overflow-hidden
                  ${
                    activeCategory === cat
                      ? 'text-white shadow-lg shadow-[#b38b5d]/20'
                      : 'text-neutral-600 hover:text-neutral-900 bg-white/60 backdrop-blur-sm border border-neutral-200/60 hover:border-[#d4af76]/30 shadow-sm'
                  }
                `}
              >
                {/* Active background gradient */}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"
                    transition={{ type: 'spring', duration: 0.6, bounce: 0.2 }}
                  />
                )}
                
                {/* Shimmer effect for active */}
                {activeCategory === cat && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                )}

                {/* Text */}
                <span className="relative z-10">
                  {cat}
                </span>

                {/* Hover accent line */}
                {activeCategory !== cat && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#d4af76] via-[#b38b5d] to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    style={{ transformOrigin: 'left' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Active count indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 sm:mt-5 md:mt-6 flex items-center gap-2"
          >
            <div className="w-6 sm:w-8 h-px bg-[#d4af76]" />
            <span className="text-[10px] sm:text-xs text-neutral-400 font-light">
              Showing{' '}
              <span className="text-neutral-900 font-medium tabular-nums">
                {filteredProjects.length}
              </span>{' '}
              {filteredProjects.length === 1 ? 'project' : 'projects'}
            </span>
          </motion.div>
        </motion.div>

        {/* PROJECT GRID */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ProjectsArchiveGrid projects={filteredProjects} />
        </motion.div>
      </div>
    </section>
  )
}