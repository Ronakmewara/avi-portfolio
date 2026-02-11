'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { urlFor } from '@/src/lib/sanity.image'
import { useRef, useState, useEffect } from 'react'

type Project = {
  _id: string
  title: string
  year: string
  slug: { current: string }
  coverImage: any
  category?: string
}

export default function ProjectsArchiveGrid({
  projects,
}: {
  projects: Project[]
}) {
  // Cursor follower state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMousePosition({ x, y })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative bg-gradient-to-b from-neutral-50 via-white to-neutral-50 min-h-screen">
      {/* Luxury cursor follower - same as hero */}
      <motion.div
        className="hidden lg:block fixed top-0 left-0 pointer-events-none z-50"
        animate={{
          x: mousePosition.x * (typeof window !== 'undefined' ? window.innerWidth : 0) / 2 + (typeof window !== 'undefined' ? window.innerWidth : 0) / 2 - 16,
          y: mousePosition.y * (typeof window !== 'undefined' ? window.innerHeight : 0) / 2 + (typeof window !== 'undefined' ? window.innerHeight : 0) / 2 - 16,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      >
        <motion.div
          className="w-8 h-8 border-2 border-[#d4af76]/50 rotate-45 backdrop-blur-sm"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 4, repeat: Infinity, ease: 'linear' },
            scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
        <div className="absolute inset-2 bg-gradient-to-br from-[#d4af76]/20 to-[#b38b5d]/10 rotate-45 blur-sm" />
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-16 sm:gap-y-20 md:gap-y-24 lg:gap-y-32">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project._id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ 
  project, 
  index,
}: { 
  project: Project
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  // Minimal parallax
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.7,
        delay: (index % 3) * 0.1,
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      <Link
        href={`/projects/${project.slug.current}`}
        className="group block"
      >
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {/* Image Container */}
          <div className="relative overflow-hidden bg-neutral-100">
            <div className="relative aspect-[3/4] overflow-hidden">
              {/* Image with subtle parallax */}
              <motion.div
                style={{ y }}
                className="absolute inset-0 w-full h-[115%] -top-[7.5%]"
              >
                <img
                  src={urlFor(project.coverImage)
                    .width(800)
                    .height(1067)
                    .fit('crop')
                    .quality(90)
                    .url()}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]"
                />
              </motion.div>

              {/* Minimal overlay */}
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 transition-colors duration-500" />

              {/* Index number - minimal */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6">
                <span className="text-[10px] sm:text-xs font-light text-white/80 backdrop-blur-sm bg-black/20 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Subtle corner accent */}
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[#d4af76]/30 opacity-0 group-hover:opacity-100"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-2.5 sm:space-y-3">
            {/* Metadata */}
            <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-neutral-400">
              <span className="font-light tabular-nums tracking-wide">
                {project.year}
              </span>
              {project.category && (
                <>
                  <span className="text-neutral-300">—</span>
                  <span className="font-light tracking-wider uppercase text-[9px] sm:text-[10px]">
                    {project.category}
                  </span>
                </>
              )}
            </div>

            {/* Title */}
            <div className="space-y-1.5 sm:space-y-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-light tracking-tight text-neutral-900 leading-tight group-hover:text-[#b38b5d] transition-colors duration-500">
                {project.title}
              </h3>
              
              {/* Minimal animated underline */}
              <motion.div
                className="h-px bg-neutral-900"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                style={{ transformOrigin: 'left' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            {/* View link - appears on hover */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="opacity-0 group-hover:opacity-100 transition-all duration-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-4 sm:w-6 h-px bg-[#b38b5d]" />
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#b38b5d] font-medium">
                  View
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}