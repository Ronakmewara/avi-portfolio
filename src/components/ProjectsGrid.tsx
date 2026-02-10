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
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white via-neutral-50 to-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* ENHANCED SECTION HEADER */}
        <motion.div 
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="flex-1">
              {/* Decorative Element */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '80px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1.5 bg-gradient-to-r from-[#b38b5d] to-[#d4af76] rounded-full mb-6"
              />
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-3 mb-4"
              >
                <Sparkles className="w-5 h-5 text-[#b38b5d]" />
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-[#b38b5d]">
                  Featured Work
                </span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-neutral-900 leading-[0.95]">
                Selected
                <br />
                <span className="text-neutral-400">Projects</span>
              </h2>
            </div>
            
            <div className="lg:max-w-md">
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
                A curated showcase of my most impactful work, blending creativity with technical excellence to deliver exceptional results.
              </p>
            </div>
          </div>
        </motion.div>

        {/* PROJECTS GRID */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
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
          className="mt-24 text-center"
        >
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-2xl font-bold hover:bg-[#b38b5d] transition-all duration-500 hover:shadow-2xl hover:shadow-[#b38b5d]/20 hover:scale-105">
            <span className="text-sm uppercase tracking-wider">View All Projects</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
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

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  // Alternating layout pattern
  const isEven = index % 2 === 0
  
  return (
    <motion.article
      ref={cardRef}
      style={{ opacity }}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
        isEven ? '' : 'lg:grid-flow-dense'
      }`}
    >
      {/* IMAGE CONTAINER - FIXED ASPECT RATIO */}
      <motion.div
        style={{ scale }}
        className={`lg:col-span-7 group cursor-pointer ${
          isEven ? '' : 'lg:col-start-6'
        }`}
      >
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-neutral-100 shadow-2xl shadow-black/10 hover:shadow-[#b38b5d]/20 transition-shadow duration-700">
          
          {/* Fixed aspect ratio container */}
          <div className="relative w-full" style={{ paddingBottom: '66.67%' }}> {/* 3:2 aspect ratio - more compact */}
            
            {/* Image with proper object-fit - NO PARALLAX */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.img
                src={urlFor(project.coverImage).width(1200).height(800).fit('crop').quality(90).url()}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Enhanced Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Decorative Corner Frame */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-white/60" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-white/60" />
            </div>

            {/* Hover Button */}
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-xl backdrop-blur-sm">
                <ArrowUpRight className="w-5 h-5 text-neutral-900 transition-transform duration-300 group-hover:rotate-45" />
              </div>
            </div>
          </div>

          {/* Category Badge */}
          {project.category && (
            <div className="absolute top-6 left-6 z-10">
              <span className="px-4 py-2 bg-white/95 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-neutral-900 shadow-lg">
                {project.category}
              </span>
            </div>
          )}
        </div>
      </motion.div>

      {/* TEXT CONTENT - ENHANCED */}
      <div className={`lg:col-span-5 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 lg:space-y-8"
        >
          {/* Project Number with Gradient */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <span className="text-[80px] md:text-[100px] lg:text-[120px] font-bold bg-gradient-to-br from-neutral-200 to-neutral-100 bg-clip-text text-transparent leading-none select-none">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-[#b38b5d] to-transparent" />
            </div>
          </div>

          {/* Title with better spacing */}
          <div className="space-y-3">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
              {project.title}
            </h3>
            
            {/* Description if available */}
            {project.description && (
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-lg">
                {project.description}
              </p>
            )}
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-px bg-gradient-to-r from-[#b38b5d] to-transparent" />
              <span className="text-sm md:text-base font-bold text-neutral-500 uppercase tracking-wider">
                {project.year}
              </span>
            </div>
            
            {project.category && (
              <div className="px-4 py-2 bg-neutral-100 rounded-full">
                <span className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
            )}
          </div>

          {/* Enhanced CTA Button */}
          <motion.button
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-3 mt-6 text-sm md:text-base font-bold text-neutral-900 hover:text-[#b38b5d] transition-colors duration-300"
          >
            <span className="relative">
              <span className="uppercase tracking-wider">Explore Project</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b38b5d] group-hover:w-full transition-all duration-500" />
            </span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
          </motion.button>
        </motion.div>
      </div>
    </motion.article>
  )
}