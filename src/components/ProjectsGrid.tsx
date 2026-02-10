'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { urlFor } from '@/src/lib/sanity.image'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { useRef } from 'react'

type Project = {
  _id: string
  title: string
  year: string
  coverImage: any
  category?: string
  description?: string
}

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white via-neutral-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* ENHANCED SECTION HEADER */}
        <motion.div 
          className="mb-10 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
            <div className="flex-1">
              {/* Decorative Element */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '60px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-[#b38b5d] to-[#d4af76] rounded-full mb-4 md:mb-6"
              />
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-2 mb-3"
              >
                <Sparkles className="w-4 h-4 text-[#b38b5d]" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#b38b5d]">
                  Featured Work
                </span>
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-neutral-900 leading-[0.95]">
                Selected
                <br />
                <span className="text-neutral-400">Projects</span>
              </h2>
            </div>
            
            <div className="lg:max-w-md">
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                A curated showcase of my most impactful work, blending creativity with technical excellence.
              </p>
            </div>
          </div>
        </motion.div>

        {/* PROJECTS GRID */}
        <div className="space-y-8 md:space-y-14 lg:space-y-16">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project._id} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 md:mt-20 text-center"
        >
          <button className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-neutral-900 text-white rounded-2xl font-bold hover:bg-[#b38b5d] transition-all duration-500 hover:shadow-2xl hover:shadow-[#b38b5d]/20 hover:scale-105">
            <span className="text-xs md:text-sm uppercase tracking-wider">View All Projects</span>
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:rotate-45" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

// Individual Project Card Component
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.92, 1, 1, 0.92])

  // Alternating layout pattern (desktop only)
  const isEven = index % 2 === 0
  
  return (
    <motion.article
      ref={cardRef}
      style={{ opacity }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center"
    >
      {/* MOBILE: Image-first card layout with side padding */}
      <div className="lg:hidden px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="group cursor-pointer"
        >
          {/* Image Container with overlay content */}
          <div className="relative overflow-hidden rounded-2xl bg-neutral-900 shadow-xl shadow-black/10">
            
            {/* More compact aspect ratio for mobile */}
            <div className="relative w-full" style={{ paddingBottom: '110%' }}> {/* Changed from 125% to 110% - slightly shorter */}
              
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={urlFor(project.coverImage).width(700).height(770).fit('crop').quality(90).url()}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Strong gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content overlay - positioned at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                
                {/* Category badge at top */}
                {project.category && (
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/30">
                      {project.category}
                    </span>
                  </div>
                )}

                {/* Project number */}
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white/40 leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight mb-2 leading-tight">
                  {project.title}
                </h3>

                {/* Description - limited lines */}
                {project.description && (
                  <p className="text-xs text-white/80 leading-relaxed mb-3 line-clamp-2">
                    {project.description}
                  </p>
                )}

                {/* Year and CTA row */}
                <div className="flex items-center justify-between pt-3 border-t border-white/20">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                    {project.year}
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-xs font-bold">
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Corner decorations - subtle and smaller */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-white/30" />
              <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#b38b5d]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* DESKTOP: Original layout */}
      <div className={`hidden lg:block lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:col-start-8 lg:order-2'}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          {/* Project Number */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="text-7xl xl:text-8xl font-bold bg-gradient-to-br from-neutral-200 to-neutral-100 bg-clip-text text-transparent leading-none select-none">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-0.5 h-12 bg-gradient-to-b from-[#b38b5d] to-transparent" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-3">
            <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
              {project.title}
            </h3>
            
            {project.description && (
              <p className="text-base text-neutral-600 leading-relaxed">
                {project.description}
              </p>
            )}
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="flex items-center gap-2">
              <div className="w-12 h-px bg-gradient-to-r from-[#b38b5d] to-transparent" />
              <span className="text-sm font-bold text-neutral-500 uppercase tracking-wider">
                {project.year}
              </span>
            </div>
            
            {project.category && (
              <div className="px-3 py-1.5 bg-neutral-100 rounded-full">
                <span className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 mt-4 text-sm font-bold text-neutral-900 hover:text-[#b38b5d] transition-colors duration-300"
          >
            <span className="relative">
              <span className="uppercase tracking-wider">Explore Project</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b38b5d] group-hover:w-full transition-all duration-500" />
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
          </motion.button>
        </motion.div>
      </div>

      {/* DESKTOP: Image */}
      <motion.div
        style={{ scale }}
        className={`hidden lg:block lg:col-span-7 group cursor-pointer ${isEven ? 'lg:order-2' : 'lg:col-start-1 lg:order-1'}`}
      >
        <div className="relative overflow-hidden rounded-2xl bg-neutral-100 shadow-xl shadow-black/5 hover:shadow-[#b38b5d]/20 transition-shadow duration-700">
          
          <div className="relative w-full" style={{ paddingBottom: '60%' }}>
            
            <div className="absolute inset-0 overflow-hidden">
              <motion.img
                src={urlFor(project.coverImage).width(1000).height(600).fit('crop').quality(85).url()}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/60" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/60" />
            </div>

            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-xl backdrop-blur-sm">
                <ArrowUpRight className="w-5 h-5 text-neutral-900 transition-transform duration-300 group-hover:rotate-45" />
              </div>
            </div>
          </div>

          {project.category && (
            <div className="absolute top-4 left-4 z-10">
              <span className="px-4 py-2 bg-white/95 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-neutral-900 shadow-lg">
                {project.category}
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </motion.article>
  )
}