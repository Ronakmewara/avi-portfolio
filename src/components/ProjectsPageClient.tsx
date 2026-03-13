'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectsArchiveGrid from '@/src/components/ProjectsArchiveGrid'

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
          .map((project) => project.category)
          .filter((category): category is string => Boolean(category))
      )
    ),
  ]

  const [activeCategory, setActiveCategory] = useState('All')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-white" />
      <div className="pointer-events-none fixed inset-0 -z-10 hidden lg:block">
        <div className="absolute left-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#d4af76]/10 to-transparent" />
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#b38b5d]/10 to-transparent" />
        <div className="absolute left-[85%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#d4af76]/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="relative pb-12 pt-20 md:pb-16 md:pt-24">
          <div className="flex items-start justify-between">
            <div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 24 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-4 h-px bg-[#d4af76]/60"
              />

              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-light tracking-tight text-neutral-900 sm:text-5xl md:text-6xl"
              >
                Projects
              </motion.h1>
            </div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden text-xs font-mono text-neutral-300 sm:block"
            >
              {new Date().getFullYear()}
            </motion.span>
          </div>
        </div>

        <div className="relative mb-10 lg:hidden">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="group flex items-center gap-2 text-sm text-neutral-700 transition-colors hover:text-neutral-900"
          >
            <span className="text-xs uppercase tracking-wider">{activeCategory}</span>
            <span className={`text-[10px] transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
            <span className="ml-1 h-1 w-1 rounded-full bg-[#d4af76]/60" />
          </button>

          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute z-50 mt-2 min-w-[200px] rounded-md border border-neutral-200/80 bg-white/95 p-2 shadow-xl"
              >
                <div className="flex flex-col gap-1">
                  {categories.map((category) => {
                    const isActive = activeCategory === category

                    return (
                      <button
                        key={category}
                        onClick={() => {
                          setActiveCategory(category)
                          setIsFilterOpen(false)
                        }}
                        className={`flex items-center justify-between rounded px-4 py-2.5 text-left text-sm transition-all ${
                          isActive ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-600 hover:bg-neutral-50'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {isActive && <span className="h-1 w-1 rounded-full bg-[#d4af76]" />}
                          {category}
                        </span>
                        <span className="text-[10px] text-neutral-400">
                          {category === 'All'
                            ? projects.length
                            : projects.filter((project) => project.category === category).length}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mb-16 hidden items-end justify-between lg:flex">
          <div className="flex items-center gap-8">
            {categories.map((category) => {
              const isActive = activeCategory === category

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`group relative py-1 text-sm transition-all duration-300 ${
                    isActive ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-600'
                  }`}
                >
                  <span className="relative">
                    {category}
                    <span
                      className={`absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'bg-[#d4af76] opacity-100'
                          : 'bg-neutral-300 opacity-0 group-hover:opacity-50'
                      }`}
                    />
                  </span>
                </button>
              )
            })}
          </div>

          <span className="text-xs font-mono tracking-wider text-neutral-400">
            FRAME {String(filteredProjects.length).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
          </span>
        </div>

        <div className="mb-6 flex items-center justify-between lg:hidden">
          <span className="text-[10px] font-mono text-neutral-400">
            {String(filteredProjects.length).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="pb-20 md:pb-24"
          >
            <ProjectsArchiveGrid projects={filteredProjects} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
