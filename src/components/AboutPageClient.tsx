'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { urlFor } from '@/src/lib/sanity.image'
import { PortableText } from '@portabletext/react'
import { useRef, useState, useEffect } from 'react'

type AboutData = {
  headline?: string
  portrait: any
  bio: any
  philosophy?: string
  clients?: any[]
  gallery?: any[]
}

const easeOutExpo: [number, number, number, number] = [0.19, 1, 0.22, 1]

export default function AboutPageClient({ data }: { data: AboutData }) {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15])

  // Magical cursor effect
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

  const headlineWords = data.headline?.split(' ') || []

  return (
    <main 
      ref={containerRef}
      className="relative bg-[#faf8f4] text-[#2c2c2c] overflow-hidden selection:bg-[#d4af76] selection:text-white"
    >
      {/* Magical cursor follower */}
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

      {/* Subtle texture */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-40 mix-blend-multiply">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise"/>
            <feDiffuseLighting in="noise" lightingColor="#faf8f4" surfaceScale="1">
              <feDistantLight azimuth="45" elevation="60"/>
            </feDiffuseLighting>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"/>
        </svg>
      </div>

      {/* Soft ambient glow */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#d4af76]/10 via-[#e8d5b5]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#b38b5d]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* HERO SECTION - Compact */}
      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
        {/* Background image - subtle */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity, scale: imageScale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f4] via-[#faf8f4]/80 to-[#faf8f4] z-10" />
          <img
            src={urlFor(data.portrait).width(2400).quality(90).url()}
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
        </motion.div>

        <div className="relative z-20 max-w-[1400px] mx-auto w-full">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-6 md:mb-8"
          >
            <div className="w-8 h-px bg-[#d4af76]" />
            <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#b38b5d] font-medium">
              Photographer & Visual Storyteller
            </span>
          </motion.div>

          {/* Headline - compact */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.1] text-[#1a1a1a] max-w-4xl">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + i * 0.1,
                  ease: easeOutExpo
                }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1, ease: easeOutExpo }}
            className="w-24 h-[2px] bg-gradient-to-r from-[#d4af76] to-[#b38b5d] origin-left mt-6 md:mt-8"
          />

          {/* Subtitle - smaller */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-sm md:text-base lg:text-lg text-[#5c5c5c] font-light max-w-lg mt-6 leading-relaxed"
          >
            Crafting visual narratives that transcend the ordinary
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#b38b5d]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#d4af76] to-transparent" />
        </motion.div>
      </section>

      {/* CONTENT SECTION */}
      <section className="relative py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left: Portrait */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: easeOutExpo }}
                className="relative"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#f0ebe3]">
                  <motion.img
                    src={urlFor(data.portrait).width(1000).quality(95).url()}
                    alt="Portrait"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: easeOutExpo }}
                  />
                  <div className="absolute inset-4 border border-[#d4af76]/30 pointer-events-none" />
                </div>

                <motion.div 
                  className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-[#faf8f4] shadow-lg border border-[#d4af76]/20 px-6 py-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[#b38b5d] mb-1">Experience</p>
                  <p className="text-xl font-light text-[#2c2c2c]">8+ Years</p>
                </motion.div>
              </motion.div>
            </div>

            {/* Right: Bio */}
            <div className="lg:col-span-6 lg:col-start-7 pt-8 lg:pt-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight text-[#1a1a1a] mb-8">
                  Behind the <span className="italic text-[#b38b5d]">lens</span>
                </h2>
              </motion.div>

              <motion.div 
                className="prose prose-base md:prose-lg max-w-none
                  prose-p:text-[#4a4a4a] prose-p:leading-[1.8] prose-p:font-light prose-p:mb-6
                  prose-strong:text-[#b38b5d] prose-strong:font-normal
                  prose-em:italic prose-em:text-[#2c2c2c]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <PortableText value={data.bio} />
              </motion.div>

              <motion.div 
                className="mt-12 pt-8 border-t border-[#d4af76]/20 flex items-center gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="w-2 h-2 rounded-full bg-[#d4af76]" />
                <p className="text-xs tracking-[0.15em] uppercase text-[#b38b5d]">
                  Based in India • Available Worldwide
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      {data.philosophy && (
        <section className="relative py-24 md:py-40 px-6 md:px-12 bg-[#f5f0e8]/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl text-[#d4af76]/20 font-serif leading-none block mb-8"
            >
              "
            </motion.span>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-xl md:text-3xl lg:text-4xl font-light leading-[1.4] text-[#2c2c2c] tracking-tight"
            >
              {data.philosophy}
            </motion.p>

            <motion.div 
              className="flex justify-center gap-2 mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af76]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af76]/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af76]/30" />
            </motion.div>
          </div>
        </section>
      )}

      {/* CLIENTS */}
     {data.clients && data.clients.length > 0 && (
  <section className="relative py-32 bg-white border-t border-[#d4af76]/15">
    <div className="max-w-6xl mx-auto px-6 md:px-16">

      {/* Section label */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-[10px] uppercase tracking-[0.35em] text-[#b38b5d] mb-20 text-center"
      >
        Selected Collaborations
      </motion.p>

      {/* Logo field */}
      <div className="flex flex-wrap justify-center gap-x-20 gap-y-16">
        {data.clients.map((logo: any, i: number) => {
          const imageUrl = logo?.asset
            ? urlFor(logo).width(300).quality(90).url()
            : null

          if (!imageUrl) return null

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative group"
            >
              {/* Gold hover aura */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#d4af76]/0 via-[#d4af76]/15 to-[#b38b5d]/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />

              <img
                src={imageUrl}
                alt="Client logo"
                className="relative max-h-10 md:max-h-12 object-contain opacity-40 grayscale group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  </section>
)}



     <section className="relative py-28 bg-[#faf8f4] border-t border-[#d4af76]/10">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    className="max-w-xl mx-auto px-6"
  >
    <div className="relative rounded-2xl bg-[#fffdf9] border border-[#d4af76]/25 px-8 py-10 text-center shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">

      {/* subtle gold glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#d4af76]/10 via-transparent to-transparent opacity-40 pointer-events-none" />

      {/* label */}
      <p className="text-[10px] uppercase tracking-[0.35em] text-[#b38b5d] mb-4">
        Private Commissions
      </p>

      {/* email */}
      <a
        href="mailto:hello@picturebyavi.com"
        className="block text-2xl md:text-3xl font-serif text-neutral-900 hover:text-[#b38b5d] transition-colors duration-300"
      >
        hello@picturebyavi.com
      </a>

      {/* divider */}
      <div className="flex justify-center mt-6">
        <span className="w-12 h-px bg-gradient-to-r from-transparent via-[#d4af76] to-transparent" />
      </div>

      {/* subline */}
      <p className="mt-4 text-xs tracking-wide text-neutral-500 font-light">
        Available worldwide • Select collaborations only
      </p>
    </div>
  </motion.div>
</section>



      {/* FOOTER */}
      <footer className="px-6 md:px-12 py-12 border-t border-[#d4af76]/10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-2xl font-light tracking-tight text-[#2c2c2c]">
            Avi.
          </span>
          
          <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase text-[#8a8a8a]">
            <a href="#" className="hover:text-[#b38b5d] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#b38b5d] transition-colors">Behance</a>
            <a href="#" className="hover:text-[#b38b5d] transition-colors">Contact</a>
          </div>

          <span className="text-xs text-[#aaa]">
            © {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </main>
  )
}