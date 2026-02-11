'use client'

import { useState, useEffect } from 'react'
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
          .map((p) => p.category)
          .filter((cat): cat is string => Boolean(cat))
      )
    ),
  ]

  const [activeCategory, setActiveCategory] = useState('All')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  // Fixed positions - same on server and client
  const particlePositions = [
    { left: '15%', top: '20%' },
    { left: '25%', top: '65%' },
    { left: '45%', top: '35%' },
    { left: '55%', top: '80%' },
    { left: '70%', top: '15%' },
    { left: '80%', top: '45%' },
    { left: '35%', top: '70%' },
    { left: '65%', top: '25%' },
    { left: '20%', top: '85%' },
    { left: '75%', top: '55%' },
    { left: '40%', top: '10%' },
    { left: '90%', top: '75%' },
  ]

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* CLEAN BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-white" />
      
      {/* 1. SUBTLE APERTURE RINGS - only on client */}
      {isClient && (
        <div className="fixed inset-0 -z-5 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              x: mousePosition.x * 0.5,
              y: mousePosition.y * 0.5,
            }}
            transition={{ type: 'spring', damping: 50, stiffness: 400 }}
            className="absolute top-1/4 -right-20 w-[400px] h-[400px] opacity-[0.03]"
          >
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 border border-[#d4af76] rounded-full"
                style={{
                  width: `${100 - i * 20}%`,
                  height: `${100 - i * 20}%`,
                  margin: `${i * 10}%`,
                  borderWidth: '0.5px',
                }}
              />
            ))}
          </motion.div>
          
          <motion.div
            animate={{
              x: mousePosition.x * -0.3,
              y: mousePosition.y * -0.3,
            }}
            transition={{ type: 'spring', damping: 50, stiffness: 400 }}
            className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] opacity-[0.02]"
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 border border-[#b38b5d] rounded-full"
                style={{
                  width: `${100 - i * 25}%`,
                  height: `${100 - i * 25}%`,
                  margin: `${i * 12.5}%`,
                  borderWidth: '0.5px',
                }}
              />
            ))}
          </motion.div>
        </div>
      )}

      {/* 2. VERTICAL FILM STRIP LINES - static, no randomness */}
      <div className="fixed inset-0 -z-5 pointer-events-none hidden lg:block">
        <div className="absolute left-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#d4af76]/10 to-transparent" />
        <div className="absolute left-[30%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#b38b5d]/10 to-transparent" />
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#d4af76]/10 to-transparent" />
        <div className="absolute left-[70%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#b38b5d]/10 to-transparent" />
        <div className="absolute left-[85%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#d4af76]/10 to-transparent" />
        
        <div className="absolute top-[20%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af76]/10 to-transparent" />
        <div className="absolute top-[40%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b38b5d]/10 to-transparent" />
        <div className="absolute top-[60%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af76]/10 to-transparent" />
        <div className="absolute top-[80%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b38b5d]/10 to-transparent" />
      </div>

      {/* 3. FLOATING PARTICLES - FIXED POSITIONS, no Math.random() */}
      <div className="fixed inset-0 -z-5 pointer-events-none">
        {isClient && particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full bg-[#d4af76]/20"
            style={{
              left: pos.left,
              top: pos.top,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 15 : -15, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + (i % 5),
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* 4. CAMERA LENS CORNER DETAIL */}
      <div className="fixed top-8 left-8 w-12 h-12 opacity-[0.15] hidden xl:block pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border border-[#d4af76] rounded-full" />
          <div className="absolute inset-[25%] border border-[#b38b5d] rounded-full" />
          <div className="absolute inset-[45%] bg-[#d4af76]/20 rounded-full" />
        </div>
      </div>

      {/* 5. EXPOSURE COUNTER */}
      <div className="fixed bottom-8 right-8 opacity-[0.2] hidden lg:block pointer-events-none font-mono text-[10px] tracking-[0.3em] text-neutral-400">
        {String(filteredProjects.length).padStart(3, '0')} / {String(projects.length).padStart(3, '0')}
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* HEADER */}
        <div className="pt-20 md:pt-24 pb-12 md:pb-16 relative">
          <div className="flex items-start justify-between">
            <div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 24 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-[#d4af76]/60 mb-4"
              />
              
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-neutral-900"
              >
                Projects
              </motion.h1>
            </div>
            
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xs text-neutral-300 font-mono hidden sm:block"
            >
              {new Date().getFullYear()}
            </motion.span>
          </div>
        </div>

        {/* MOBILE FILTER */}
        <div className="lg:hidden mb-10 relative">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900 transition-colors group"
          >
            <span className="text-xs uppercase tracking-wider">
              {activeCategory}
            </span>
            <span className={`text-[10px] transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
            <span className="w-1 h-1 rounded-full bg-[#d4af76]/60 ml-1" />
          </button>
          
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute z-50 mt-2 p-2 bg-white/95 backdrop-blur-sm border border-neutral-200/80 rounded-md shadow-xl min-w-[200px]"
              >
                <div className="flex flex-col gap-1">
                  {categories.map((cat) => {
                    const isActive = activeCategory === cat
                    return (
                      <button
                        key={cat}
                        onClick={() => {
                          setActiveCategory(cat)
                          setIsFilterOpen(false)
                        }}
                        className={`
                          flex items-center justify-between px-4 py-2.5 text-left text-sm transition-all rounded
                          ${isActive 
                            ? 'bg-neutral-100 text-neutral-900' 
                            : 'text-neutral-600 hover:bg-neutral-50'
                          }
                        `}
                      >
                        <span className="flex items-center gap-2">
                          {isActive && (
                            <motion.span
                              layoutId="mobileActiveDot"
                              className="w-1 h-1 rounded-full bg-[#d4af76]"
                            />
                          )}
                          {cat}
                        </span>
                        <span className="text-[10px] text-neutral-400">
                          {cat === 'All' 
                            ? projects.length 
                            : projects.filter(p => p.category === cat).length
                          }
                        </span>
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* DESKTOP FILTER */}
        <div className="hidden lg:flex items-end justify-between mb-16">
          <div className="flex items-center gap-8">
            {categories.map((cat, index) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    relative py-1 text-sm transition-all duration-300 group
                    ${isActive 
                      ? 'text-neutral-900' 
                      : 'text-neutral-400 hover:text-neutral-600'
                    }
                  `}
                >
                  <span className="relative">
                    {cat}
                    <span className={`
                      absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full 
                      transition-all duration-300
                      ${isActive 
                        ? 'bg-[#d4af76] opacity-100' 
                        : 'bg-neutral-300 opacity-0 group-hover:opacity-50'
                      }
                    `} />
                  </span>
                </button>
              )
            })}
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1 h-2 bg-[#d4af76]/20 rounded-sm" 
                />
              ))}
            </div>
            <span className="text-xs text-neutral-400 font-mono tracking-wider">
              FRAME {String(filteredProjects.length).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Mobile counter */}
        <div className="lg:hidden flex justify-between items-center mb-6">
          <span className="text-[10px] text-neutral-400 font-mono">
            {String(filteredProjects.length).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
          </span>
        </div>

        {/* PROJECT GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="pb-20 md:pb-24"
          >
            <ProjectsArchiveGrid projects={filteredProjects} />
          </motion.div>
        </AnimatePresence>

        {/* FOOTER */}
        <div className="py-16 text-center relative">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#d4af76]/30" />
            <span className="text-[8px] uppercase tracking-[0.4em] text-neutral-300 font-light">
              PicturebyAvi
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#d4af76]/30" />
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-1 h-1 rounded-full bg-[#d4af76]/20" />
        </div>
      </div>

      {/* Light leak effect */}
      <div className="fixed top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#d4af76]/5 to-transparent pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#b38b5d]/5 to-transparent pointer-events-none" />
    </section>
  )
}