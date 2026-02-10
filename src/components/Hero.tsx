'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ArrowDown, Sparkles } from 'lucide-react'

type HeroProps = {
  title: string
  subtitle: string
}

export default function Hero({ title, subtitle }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  // Mouse position with spring physics for smooth movement
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const springConfig = { damping: 25, stiffness: 150 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      mouseX.set(x * 30)
      mouseY.set(y * 30)
      setMousePosition({ x, y })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // Split title into words
  const titleWords = title.split(' ')
  const firstPart = titleWords.slice(0, -1).join(' ')
  const lastWord = titleWords[titleWords.length - 1]

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white"
    >
      {/* Animated Gradient Orbs - matching project grid gold accent */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#b38b5d]/10 via-[#d4af76]/5 to-transparent blur-3xl"
      />
      
      <motion.div
        style={{
          x: useTransform(mouseX, (x) => -x * 0.5),
          y: useTransform(mouseY, (y) => -y * 0.5),
        }}
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-neutral-200/20 via-neutral-100/10 to-transparent blur-3xl"
      />

      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Floating Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          x: useTransform(mouseX, (x) => x * 0.3),
          y: useTransform(mouseY, (y) => y * 0.3),
        }}
        className="absolute top-[20%] right-[15%] w-[300px] h-[300px] border border-neutral-200/40 rounded-full"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          x: useTransform(mouseX, (x) => -x * 0.2),
          y: useTransform(mouseY, (y) => -y * 0.2),
        }}
        className="absolute bottom-[25%] left-[10%] w-[200px] h-[200px] border border-[#b38b5d]/20 rounded-full"
      />

      {/* Small accent dots */}
      <motion.div
        style={{
          x: useTransform(mouseX, (x) => x * 0.5),
          y: useTransform(mouseY, (y) => y * 0.5),
        }}
        className="absolute top-[30%] left-[20%] w-2 h-2 rounded-full bg-gradient-to-br from-[#b38b5d] to-[#d4af76]"
      />
      
      <motion.div
        style={{
          x: useTransform(mouseX, (x) => -x * 0.4),
          y: useTransform(mouseY, (y) => -y * 0.4),
        }}
        className="absolute bottom-[35%] right-[25%] w-3 h-3 rounded-full bg-gradient-to-br from-[#b38b5d] to-[#d4af76]"
      />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative h-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8"
      >
        <div className="max-w-[1400px] w-full mx-auto text-center">
          
          {/* Top Label with Icon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-3 mb-8 md:mb-12"
          >
            <Sparkles className="w-5 h-5 text-[#b38b5d]" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-[#b38b5d]">
              Visual Storyteller
            </span>
            <Sparkles className="w-5 h-5 text-[#b38b5d]" />
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '120px' }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-transparent via-[#b38b5d] to-transparent rounded-full mx-auto mb-12"
          />

          {/* Main Title - Matching project grid style */}
          <div className="mb-8 md:mb-12">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.95]"
            >
              {/* First part of title */}
              <motion.span
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block text-neutral-900"
              >
                {firstPart}
              </motion.span>
              
              {/* Last word with accent color - matching project grid */}
              <motion.span
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block text-neutral-400"
              >
                {lastWord}
              </motion.span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg lg:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-12 md:mb-16"
          >
            {subtitle}
          </motion.p>

          {/* Meta Info Bar - similar to project grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-12"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#b38b5d] to-transparent" />
              <span className="text-xs md:text-sm font-bold text-neutral-500 uppercase tracking-wider">
                Based in India
              </span>
              <div className="w-12 h-px bg-gradient-to-r from-[#b38b5d] via-transparent to-transparent" />
            </div>
            
            <div className="px-4 py-2 bg-neutral-100 rounded-full">
              <span className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                Available for Projects
              </span>
            </div>
          </motion.div>

          {/* CTA Button - matching project grid style */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-2xl font-bold hover:bg-[#b38b5d] transition-all duration-500 hover:shadow-2xl hover:shadow-[#b38b5d]/20"
          >
            <span className="text-sm uppercase tracking-wider">Explore Work</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 md:bottom-12 flex flex-col items-center gap-3"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-16 bg-gradient-to-b from-[#b38b5d] via-neutral-300 to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Mouse Follower Cursor (optional enhancement) */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-[#b38b5d]/40 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x * window.innerWidth / 2 + window.innerWidth / 2 - 12,
          y: mousePosition.y * window.innerHeight / 2 + window.innerHeight / 2 - 12,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />
    </section>
  )
}