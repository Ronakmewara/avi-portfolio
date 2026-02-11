'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function StatementSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      ref={ref}
      className="relative py-24 md:py-32 px-4 bg-white overflow-hidden"
    >
      {/* Linear geometric background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <div className="w-full max-w-6xl aspect-square relative">
          {/* Concentric squares */}
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute border border-neutral-900"
              style={{
                inset: `${i * 12}%`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
          
          {/* Diagonal lines */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <div className="absolute top-0 left-0 w-full h-px bg-neutral-900 origin-left transform rotate-45 translate-y-[50%]" />
            <div className="absolute top-0 right-0 w-full h-px bg-neutral-900 origin-right transform -rotate-45 translate-y-[50%]" />
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-3xl mx-auto">
        
        {/* Top decorative line */}
        <motion.div 
          className="flex items-center gap-4 mb-12 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="h-px bg-neutral-900"
            initial={{ width: 0 }}
            animate={isInView ? { width: 60 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-[#b38b5d] rotate-45" />
            <span className="text-[8px] uppercase tracking-[0.4em] text-neutral-500 font-mono">
              Statement
            </span>
            <div className="w-1 h-1 bg-[#b38b5d] rotate-45" />
          </div>
          <motion.div 
            className="h-px bg-neutral-900"
            initial={{ width: 0 }}
            animate={isInView ? { width: 60 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Statement text */}
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none">
              <span className="block font-light text-neutral-400 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                Photography is not
              </span>
              <span className="block font-extralight text-neutral-900" style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '-0.02em' }}>
                documentation
              </span>
            </h2>
          </motion.div>

          {/* Center divider */}
          <motion.div 
            className="flex items-center justify-center gap-3 py-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 border border-[#b38b5d]" />
              <div className="w-8 h-px bg-[#b38b5d]" />
            </div>
            <div className="text-[10px] font-mono text-neutral-400 tracking-widest">///</div>
            <div className="flex items-center gap-1.5">
              <div className="w-8 h-px bg-[#b38b5d]" />
              <div className="w-1.5 h-1.5 border border-[#b38b5d]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none">
              <span className="block font-light text-neutral-400 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                It is
              </span>
              <span className="relative inline-block">
                <span 
                  className="block font-semibold text-[#b38b5d]" 
                  style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '-0.01em' }}
                >
                  interpretation
                </span>
                {/* Underline accent */}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#b38b5d]"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
                {/* Corner brackets */}
                <motion.div
                  className="absolute -left-4 top-0 w-3 h-3 border-l-2 border-t-2 border-[#b38b5d]/40"
                  initial={{ opacity: 0, x: 10, y: 10 }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 10, y: 10 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                />
                <motion.div
                  className="absolute -right-4 bottom-0 w-3 h-3 border-r-2 border-b-2 border-[#b38b5d]/40"
                  initial={{ opacity: 0, x: -10, y: -10 }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -10, y: -10 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                />
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Bottom signature */}
        <motion.div 
          className="mt-12 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-neutral-300 to-transparent" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-px bg-neutral-300" />
            <span className="text-[9px] font-mono tracking-[0.3em] text-neutral-400 uppercase">
              Avi
            </span>
            <div className="w-5 h-px bg-neutral-300" />
          </div>
        </motion.div>
      </div>

      {/* Corner accents */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-neutral-200"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-neutral-200"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />
    </section>
  )
}