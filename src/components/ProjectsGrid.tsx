'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { urlFor } from '@/src/lib/sanity.image'
import { ArrowUpRight, Sparkles, Camera, Eye, Quote } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

type Project = {
  _id: string
  title: string
  year: string
  coverImage: any
  slug: { current: string }
  category?: string
  description?: string
}

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section 
      ref={containerRef}
      className="relative py-20 md:py-28 lg:py-32 px-4 md:px-6 lg:px-8 overflow-hidden bg-[#faf9f7]"
      style={{
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(212, 175, 118, 0.02) 0%, transparent 30%),
          radial-gradient(circle at 90% 70%, rgba(179, 139, 93, 0.02) 0%, transparent 40%),
          radial-gradient(circle at 30% 80%, rgba(139, 111, 71, 0.01) 0%, transparent 35%)
        `
      }}
    >
      {/* Elegant background aperture circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] opacity-[0.015]"
        >
          {[...Array(4)].map((_, i) => (
            <div
              key={`bg-circle-${i}`}
              className="absolute inset-0 border border-[#d4af76] rounded-full"
              style={{
                width: `${100 - i * 20}%`,
                height: `${100 - i * 20}%`,
                margin: `${i * 10}%`,
                borderWidth: '1px',
                opacity: 0.2 - i * 0.05
              }}
            />
          ))}
        </motion.div>
        
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/4 w-[900px] h-[900px] opacity-[0.015]"
        >
          {[...Array(4)].map((_, i) => (
            <div
              key={`bg-circle2-${i}`}
              className="absolute inset-0 border border-[#b38b5d] rounded-full"
              style={{
                width: `${100 - i * 20}%`,
                height: `${100 - i * 20}%`,
                margin: `${i * 10}%`,
                borderWidth: '1px',
                opacity: 0.15 - i * 0.04
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 118, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 118, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* ENHANCED SECTION HEADER - Matching Statement theme */}
        <motion.div 
          className="mb-16 md:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
            <div className="flex-1">
              {/* Decorative header with gold accent */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 80, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-[2px] bg-gradient-to-r from-[#d4af76] to-[#b38b5d] rounded-full mb-6"
              />
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="relative">
                  <Sparkles className="w-4 h-4 text-[#d4af76]" strokeWidth={1.5} />
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 blur-sm"
                  >
                    <Sparkles className="w-4 h-4 text-[#b38b5d]/30" strokeWidth={1.5} />
                  </motion.div>
                </div>
                <span className="text-xs font-light uppercase tracking-[0.3em] text-[#b38b5d]">
                  Featured Work
                </span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-neutral-900 leading-[1.1]">
                Selected
                <br />
                <span className="relative">
                  <span className="bg-gradient-to-r from-[#d4af76] via-[#b38b5d] to-[#8b6f47] bg-clip-text text-transparent font-medium">
                    Projects
                  </span>
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="absolute -right-4 -top-2 w-2 h-2 rounded-full bg-[#d4af76]"
                  />
                </span>
              </h2>
            </div>
            
            <div className="lg:max-w-md relative">
              {/* Decorative camera motif */}
              <motion.div
                initial={{ opacity: 0, rotate: -30 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:block"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border border-[#d4af76]/30 flex items-center justify-center">
                    <Camera className="w-5 h-5 text-[#d4af76]/60" strokeWidth={1.2} />
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2 rounded-full border border-dashed border-[#d4af76]/20"
                  />
                </div>
              </motion.div>
              
              <p className="text-neutral-600 text-sm md:text-base font-light leading-relaxed pl-0 lg:pl-16">
                A curated showcase of my most impactful work, where light meets shadow and moments become eternal.
              </p>
              
              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute bottom-0 left-0 w-12 h-px bg-gradient-to-r from-[#d4af76] to-transparent hidden lg:block"
              />
            </div>
          </div>
        </motion.div>

        {/* PROJECTS GRID - with elegant spacing */}
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project._id} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        {/* VIEW ALL PROJECTS - Premium Black Button matching Let's Talk */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
  className="mt-20 md:mt-24 lg:mt-28 text-center relative"
>
  {/* Decorative aperture rings */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute inset-0 border border-[#d4af76]/40 rounded-full"
        style={{
          width: `${100 - i * 30}%`,
          height: `${100 - i * 30}%`,
          margin: `${i * 15}%`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
      />
    ))}
  </div>

  <Link href="/projects" className="group inline-block">
    <div className="relative">
      {/* Premium CTA Button - Matching Let's Talk style */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center gap-2.5 px-8 py-4 md:px-10 md:py-4.5 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white text-sm font-bold rounded-full hover:from-[#b38b5d] hover:via-[#a07a52] hover:to-[#8b6f47] transition-all duration-500 shadow-xl shadow-neutral-900/20 hover:shadow-2xl hover:shadow-[#b38b5d]/30 backdrop-blur-sm overflow-hidden group"
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{
            x: ['-200%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        {/* Gold shimmer effect on hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d4af76]/0 via-[#d4af76]/20 to-[#b38b5d]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md" />
        
        {/* Gold border accent on hover */}
        <div className="absolute inset-0 rounded-full border border-[#d4af76]/0 group-hover:border-[#d4af76]/30 transition-all duration-700" />
        
        <span className="relative uppercase tracking-wider text-xs md:text-sm">
          View All Projects
        </span>
        
        <motion.div 
          className="relative w-2 h-2 rounded-full bg-white shadow-lg shadow-white/50"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        
        <motion.div
          animate={{ x: [0, 3, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatDelay: 1
          }}
          className="relative"
        >
          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white/90 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
        </motion.div>
      </motion.div>
      
      {/* Subtle glow effect */}
      <motion.div
        className="absolute -inset-2 bg-neutral-900/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  </Link>
  
  {/* Decorative signature element */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: 0.8 }}
    className="mt-8 flex justify-center items-center gap-2"
  >
    <span className="w-1 h-1 rounded-full bg-[#d4af76]/40" />
    <span className="w-1 h-1 rounded-full bg-[#b38b5d]/40" />
    <span className="w-1 h-1 rounded-full bg-[#8b6f47]/40" />
  </motion.div>
</motion.div>
      </div>
    </section>
  )
}

// Individual Project Card Component - Fixed mobile loading issue
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30])

  // Preload image
  useEffect(() => {
    if (project.coverImage) {
      const img = new Image()
      img.src = urlFor(project.coverImage).width(700).height(770).fit('crop').quality(90).url()
      img.onload = () => setImageLoaded(true)
    }
  }, [project.coverImage])

  // Alternating layout pattern
  const isEven = index % 2 === 0
  
  return (
    <Link href={`/projects/${project.slug.current}`} className="block group">
      <motion.article
        ref={cardRef}
        style={{ opacity }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative"
      >
        {/* MOBILE: Fixed image loading - no black space */}
        <div className="lg:hidden px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full"
          >
            {/* Decorative quote mark for mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -top-3 -left-3 z-10"
            >
              <Quote className="w-8 h-8 text-[#d4af76]" strokeWidth={0.5} />
            </motion.div>
            
            {/* Image Container - Fixed height to prevent black space */}
            <div className="relative overflow-hidden rounded-2xl bg-[#f0ede8] w-full aspect-[4/5]">
              
              {/* Loading placeholder - matches background */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#f0ede8] to-[#e8e2da] animate-pulse" />
              )}
              
              {/* Image with fixed positioning */}
              <div className="absolute inset-0">
                <img
                  ref={imageRef}
                  src={urlFor(project.coverImage).width(700).height(875).fit('crop').quality(90).url()}
                  alt={project.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  loading="eager"
                />
              </div>

              {/* Sophisticated gradient overlay - consistent opacity */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              {/* Content overlay - fixed positioning */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-white z-20">
                
                {/* Category badge with gold accent */}
                {project.category && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-4"
                  >
                    <span className="inline-block px-3 py-1.5 bg-black/30 backdrop-blur-md rounded-full text-[10px] font-light uppercase tracking-[0.2em] border border-white/20 text-white/90">
                      {project.category}
                    </span>
                  </motion.div>
                )}

                {/* Project number with gold accent */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="mb-2"
                >
                  <span className="text-5xl font-light text-white/20 leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </motion.div>

                {/* Title with elegant animation */}
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-2xl font-light tracking-tight mb-2 leading-tight text-white"
                >
                  {project.title}
                </motion.h3>

                {/* Description */}
                {project.description && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="text-xs text-white/80 font-light leading-relaxed mb-4 line-clamp-2"
                  >
                    {project.description}
                  </motion.p>
                )}

                {/* Year and CTA row */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center justify-between pt-4 border-t border-white/20"
                >
                  <span className="text-[10px] font-light uppercase tracking-[0.2em] text-white/60">
                    {project.year}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-light tracking-wide text-white/90">View</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/90 transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                </motion.div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/30 z-20" />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#d4af76] z-20"
              />
            </div>
          </motion.div>
        </div>

        {/* DESKTOP: Content (unchanged) */}
        <div className={`hidden lg:block lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:col-start-8 lg:order-2'}`}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {/* Project Number with refined styling */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <span className="text-8xl xl:text-9xl font-light bg-gradient-to-br from-neutral-200/80 to-neutral-100/80 bg-clip-text text-transparent leading-none select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: '80%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute -right-2 top-1/2 -translate-y-1/2 w-0.5 bg-gradient-to-b from-[#d4af76] via-[#b38b5d] to-transparent"
                />
              </div>
              
              {/* Decorative eye motif */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative"
              >
                <div className="w-10 h-10 rounded-full border border-[#d4af76]/30 flex items-center justify-center">
                  <Eye className="w-4 h-4 text-[#d4af76]/60" strokeWidth={1.2} />
                </div>
              </motion.div>
            </div>

            {/* Title with word animation */}
            <div className="space-y-4">
              <h3 className="text-4xl xl:text-5xl font-light tracking-tight text-neutral-900 leading-[1.1]">
                {project.title.split(' ').map((word, i, arr) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                    className="inline-block mr-3"
                  >
                    {word}
                    {i === arr.length - 1 && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 1.2 }}
                        className="inline-block ml-1 text-[#d4af76]"
                      >
                        ✦
                      </motion.span>
                    )}
                  </motion.span>
                ))}
              </h3>
              
              {project.description && (
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 1.1 }}
                  className="text-base text-neutral-600 font-light leading-relaxed max-w-md"
                >
                  {project.description}
                </motion.p>
              )}
            </div>

            {/* Meta Information with elegant styling */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-gradient-to-r from-[#d4af76] to-transparent" />
                <span className="text-sm font-light text-neutral-500 uppercase tracking-[0.15em]">
                  {project.year}
                </span>
              </div>
              
              {project.category && (
                <div className="relative">
                  <span className="text-xs font-light uppercase tracking-[0.2em] text-neutral-400">
                    {project.category}
                  </span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                    className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-[#d4af76]/60 to-transparent"
                  />
                </div>
              )}
            </motion.div>

            {/* Refined CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <button className="group flex items-center gap-3 mt-6 text-sm font-light text-neutral-900 hover:text-[#b38b5d] transition-colors duration-300">
                <span className="relative">
                  <span className="uppercase tracking-[0.2em] text-xs">Explore Series</span>
                  <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#d4af76] group-hover:w-full transition-all duration-700 ease-out" />
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                >
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                </motion.div>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* DESKTOP: Image (unchanged) */}
        <motion.div
          style={{ scale }}
          className={`hidden lg:block lg:col-span-7 relative ${isEven ? 'lg:order-2' : 'lg:col-start-1 lg:order-1'}`}
        >
          <div className="relative overflow-hidden rounded-2xl bg-neutral-100 shadow-2xl shadow-black/5 group">
            
            {/* Decorative aperture overlay */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none z-10"
            >
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 border border-white/60 rounded-full"
                  style={{
                    width: `${80 - i * 20}%`,
                    height: `${80 - i * 20}%`,
                    margin: `${10 + i * 5}%`,
                  }}
                />
              ))}
            </motion.div>
            
            <div className="relative w-full" style={{ paddingBottom: '60%' }}>
              
              <div className="absolute inset-0 overflow-hidden">
                <motion.img
                  src={urlFor(project.coverImage).width(1200).height(720).fit('crop').quality(90).url()}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Refined gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              {/* Elegant corner decorations */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-white/80" />
                <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-white/80" />
              </div>

              {/* Gold accent dot */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#d4af76] shadow-lg shadow-[#d4af76]/50"
              />

              {/* Floating CTA button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 z-20"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-full blur-lg opacity-60" />
                  <div className="relative w-12 h-12 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-xl">
                    <ArrowUpRight className="w-5 h-5 text-neutral-900 transition-transform duration-300 group-hover:rotate-45" strokeWidth={1.5} />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Category badge with refined styling */}
            {project.category && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute top-6 left-6 z-20"
              >
                <span className="px-5 py-2.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-light uppercase tracking-[0.2em] text-neutral-800 shadow-lg border border-white/50">
                  {project.category}
                </span>
              </motion.div>
            )}
          </div>
          
          {/* Decorative quote mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`absolute ${isEven ? '-left-12 -top-8' : '-right-12 -bottom-8'} hidden lg:block`}
          >
            <Quote className="w-16 h-16 text-[#d4af76]" strokeWidth={0.5} />
          </motion.div>
        </motion.div>
      </motion.article>
    </Link>
  )
}