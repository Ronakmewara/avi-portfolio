'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ArrowDown, Award, Building2, Star } from 'lucide-react'

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
  
  // Smooth, natural scroll with spring physics - less aggressive
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], ['0%', '30%']),
    { stiffness: 100, damping: 30, mass: 0.5 }
  )
  
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 0.6, 0]),
    { stiffness: 100, damping: 30 }
  )
  
  // Mouse position with spring physics
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const springConfig = { damping: 30, stiffness: 200 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      mouseX.set(x * 40)
      mouseY.set(y * 40)
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
      className="relative h-screen overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-amber-50/30"
    >
      {/* Luxury Gradient Orbs - sophisticated gold/champagne tones */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        className="absolute top-1/3 right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-amber-100/40 via-yellow-50/20 to-transparent blur-3xl"
      />
      
      <motion.div
        style={{
          x: useTransform(mouseX, (x) => -x * 0.6),
          y: useTransform(mouseY, (y) => -y * 0.6),
        }}
        className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-orange-100/30 via-amber-50/15 to-transparent blur-3xl"
      />

      {/* Premium geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(180, 139, 93, 0.4) 35px, rgba(180, 139, 93, 0.4) 36px),
            repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(180, 139, 93, 0.4) 35px, rgba(180, 139, 93, 0.4) 36px)
          `,
        }}
      />

      {/* Elegant architectural frames - hidden on small screens */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          x: useTransform(mouseX, (x) => x * 0.25),
          y: useTransform(mouseY, (y) => y * 0.25),
        }}
        className="hidden md:block absolute top-[18%] right-[12%] w-[280px] lg:w-[400px] h-[280px] lg:h-[400px]"
      >
        <div className="absolute inset-0 border-2 border-[#b38b5d]/20 rounded-sm rotate-12" />
        <div className="absolute inset-4 border border-amber-300/30 rounded-sm rotate-6" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          x: useTransform(mouseX, (x) => -x * 0.2),
          y: useTransform(mouseY, (y) => -y * 0.2),
        }}
        className="hidden md:block absolute bottom-[22%] left-[8%] w-[200px] lg:w-[280px] h-[200px] lg:h-[280px]"
      >
        <div className="absolute inset-0 border-2 border-[#b38b5d]/15 rounded-sm -rotate-6" />
        <div className="absolute inset-3 border border-amber-400/20 rounded-sm -rotate-3" />
      </motion.div>

      {/* Floating luxury accent elements */}
      <motion.div
        style={{
          x: useTransform(mouseX, (x) => x * 0.4),
          y: useTransform(mouseY, (y) => y * 0.4),
        }}
        className="absolute top-[28%] left-[18%]"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="w-3 h-3 rounded-sm bg-gradient-to-br from-[#d4af76] to-[#b38b5d] shadow-lg"
        />
      </motion.div>
      
      <motion.div
        style={{
          x: useTransform(mouseX, (x) => -x * 0.35),
          y: useTransform(mouseY, (y) => -y * 0.35),
        }}
        className="absolute bottom-[38%] right-[22%]"
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="w-4 h-4 rounded-sm bg-gradient-to-br from-amber-300 to-[#d4af76] shadow-xl"
        />
      </motion.div>

      {/* Premium icon accents - hidden on small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 2, delay: 1 }}
        style={{
          x: useTransform(mouseX, (x) => x * 0.12),
          y: useTransform(mouseY, (y) => y * 0.12),
        }}
        className="hidden lg:block absolute top-[12%] left-[10%]"
      >
        <Building2 className="w-16 xl:w-20 h-16 xl:h-20 text-[#b38b5d]" strokeWidth={1} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2, delay: 1.3 }}
        style={{
          x: useTransform(mouseX, (x) => -x * 0.1),
          y: useTransform(mouseY, (y) => -y * 0.1),
        }}
        className="hidden lg:block absolute bottom-[18%] right-[15%]"
      >
        <Award className="w-14 xl:w-16 h-14 xl:h-16 text-amber-400" strokeWidth={1} />
      </motion.div>

      {/* Main Content - Now with smooth natural scroll */}
      <motion.div
        style={{ y, opacity }}
        className="relative h-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8"
      >
        <div className="max-w-[1400px] w-full mx-auto text-center">
          
           
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12"
          >
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#b38b5d] fill-[#b38b5d]" />
            <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] lg:tracking-[0.35em] text-[#b38b5d]">
              WILDLIFE AND NATURE
            </span>
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#b38b5d] fill-[#b38b5d]" />
          </motion.div>

          {/* Decorative accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '140px' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#d4af76] to-transparent mx-auto mb-6 sm:mb-8 md:mb-10 xl:mb-12 shadow-sm"
          />

          {/* Main Title - Premium typography with better laptop scaling */}
          <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl font-bold tracking-tight leading-[0.95]"
            >
              {/* First part of title */}
              <motion.span
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block text-neutral-900"
              >
                {firstPart}
              </motion.span>
              
              {/* Last word with luxury gradient */}
              <motion.span
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block bg-gradient-to-r from-[#d4af76] via-[#b38b5d] to-[#8b6f47] bg-clip-text text-transparent"
                style={{
                  textShadow: '0 0 40px rgba(179, 139, 93, 0.1)',
                }}
              >
                {lastWord}
              </motion.span>
            </motion.h1>
          </div>

          {/* Subtitle with refined spacing */}
          

          {/* Premium credentials bar with better laptop spacing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-8 md:mb-10 xl:mb-12"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 sm:w-12 lg:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4af76] to-transparent" />
              <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-bold text-neutral-500 uppercase tracking-wider">
                {subtitle}
              </span>
              <div className="w-10 sm:w-12 lg:w-16 h-[1px] bg-gradient-to-r from-[#d4af76] via-transparent to-transparent" />
            </div>
            
           
          </motion.div>

          {/* Luxury CTA Button with laptop-friendly sizing */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-2 sm:gap-2.5 lg:gap-3 px-6 sm:px-7 lg:px-8 xl:px-10 py-3 sm:py-3.5 lg:py-4 xl:py-5 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white rounded-xl sm:rounded-2xl font-bold overflow-hidden transition-all duration-500 shadow-xl shadow-neutral-900/20 hover:shadow-2xl hover:shadow-[#b38b5d]/30"
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af76]/20 to-transparent"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            
            <span className="relative text-[11px] sm:text-xs lg:text-sm uppercase tracking-wider">Explore Portfolio</span>
            <motion.div
              className="relative"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
            </motion.div>
            
            {/* Hover border glow */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-[#d4af76]/0 group-hover:border-[#d4af76]/50 transition-all duration-500" />
          </motion.button>
        </div>

        {/* Refined scroll indicator - laptop optimized */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 xl:bottom-12 flex flex-col items-center gap-2 sm:gap-2.5 lg:gap-3"
        >
          <span className="text-[9px] sm:text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-neutral-400">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 bg-gradient-to-b from-[#d4af76] via-[#b38b5d]/50 to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Luxury cursor follower - refined diamond shape */}
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
    </section>
  )
}