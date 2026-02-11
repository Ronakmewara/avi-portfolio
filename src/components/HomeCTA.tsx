'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Mail, 
  Instagram, 
  Facebook, 
  Youtube, 
  ExternalLink, 
  Camera, 
  Sparkles,
  ArrowRight 
} from 'lucide-react'

export default function HomeCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <>
      <section 
        ref={ref}
        className="relative py-28 md:py-32 px-6 md:px-12 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #faf8f6 0%, #f5f2ef 100%)'
        }}
      >
        {/* Clean linear backgrounds - NO ROUND CIRCLES */}
        <div className="absolute inset-0">
          {/* Soft diagonal lines */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  #d4af76 0px,
                  #d4af76 1px,
                  transparent 1px,
                  transparent 20px
                )
              `,
            }}
          />
          
          {/* Horizontal gradient lines */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(90deg, transparent 0%, #d4af76 20%, #b38b5d 50%, #d4af76 80%, transparent 100%)
              `,
              backgroundSize: '200% 100%',
              backgroundPosition: '0% 0%',
            }}
          />
          
          {/* Vertical light streaks */}
          <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-transparent via-[#d4af76]/10 to-transparent" />
          <div className="absolute top-0 left-[30%] w-px h-full bg-gradient-to-b from-transparent via-[#b38b5d]/10 to-transparent" />
          <div className="absolute top-0 left-[50%] w-px h-full bg-gradient-to-b from-transparent via-[#d4af76]/10 to-transparent" />
          <div className="absolute top-0 left-[70%] w-px h-full bg-gradient-to-b from-transparent via-[#b38b5d]/10 to-transparent" />
          <div className="absolute top-0 left-[90%] w-px h-full bg-gradient-to-b from-transparent via-[#d4af76]/10 to-transparent" />
          
          {/* Horizontal light streaks */}
          <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af76]/10 to-transparent" />
          <div className="absolute top-[40%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#b38b5d]/10 to-transparent" />
          <div className="absolute top-[60%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af76]/10 to-transparent" />
          <div className="absolute top-[80%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#b38b5d]/10 to-transparent" />
        </div>

        {/* Subtle grid overlay - even softer */}
        <div 
          className="absolute inset-0 opacity-[0.008]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #d4af76 1px, transparent 1px),
              linear-gradient(to bottom, #d4af76 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Main content container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Clean content card - NO glass morphism, just elegant white with subtle border */}
          <div className="relative bg-white/90 rounded-3xl p-8 md:p-12 lg:p-16 border border-[#d4af76]/10 shadow-xl shadow-black/5">
            
            {/* Minimal inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/20 rounded-3xl pointer-events-none" />
            
            {/* Decorative aperture rings - extremely subtle */}
            <div className="absolute top-6 right-6 w-24 h-24 opacity-[0.015]">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 border border-[#d4af76] rounded-full"
                  style={{
                    width: `${100 - i * 30}%`,
                    height: `${100 - i * 30}%`,
                    margin: `${i * 15}%`,
                  }}
                />
              ))}
            </div>

            {/* Minimal badge - unchanged */}
            <motion.div 
              className="flex items-center justify-center gap-2 mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#8b6f47] font-light">
                Let's Create Together
              </span>
              <div className="relative">
                <Sparkles className="w-4 h-4 text-[#d4af76]" strokeWidth={1.5} />
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute inset-0 blur-sm"
                >
                  <Sparkles className="w-4 h-4 text-[#b38b5d]/30" strokeWidth={1.5} />
                </motion.div>
              </div>
            </motion.div>

            {/* Headline - elegant gradient text - unchanged */}
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.1] text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-neutral-900">Available for select</span>
              <span className="block mt-3 relative">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#d4af76] via-[#b38b5d] to-[#8b6f47] bg-clip-text text-transparent font-medium">
                    commissions
                  </span>
                  <motion.div
                    className="absolute -bottom-3 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af76] to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>
              </span>
            </motion.h2>

            {/* Subtext - unchanged */}
            <motion.p 
              className="text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-xl mx-auto text-center mt-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              For collaborations, private commissions, or just to say hello — 
              I'd love to hear from you.
            </motion.p>

            {/* Premium Email Card - KEEP AS IS (you said keep main CTA) */}
            <motion.div 
              className="mt-12 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a
                href="mailto:hello@picturebyavi.com"
                className="group relative inline-flex items-center gap-4 px-8 py-5 backdrop-blur-xl bg-white/70 rounded-full border border-white/80 hover:border-[#d4af76]/50 transition-all duration-500 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-[#d4af76]/20"
              >
                {/* Glass morphism glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4af76]/0 via-[#d4af76]/10 to-[#b38b5d]/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md" />
                
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af76]/20 to-[#b38b5d]/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/60">
                  <Mail className="w-5 h-5 text-[#b38b5d]" strokeWidth={1.5} />
                </div>
                
                <div className="relative flex flex-col items-start">
                  <span className="text-[8px] uppercase tracking-[0.3em] text-neutral-400 font-light">
                    Email
                  </span>
                  <span className="text-base md:text-lg text-neutral-900 font-light tracking-wide">
                    hello@picturebyavi.com
                  </span>
                </div>
                
                <div className="relative w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#d4af76]/10 transition-all duration-300 border border-white/60">
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-[#b38b5d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" strokeWidth={1.5} />
                </div>
              </a>
            </motion.div>

            {/* Elegant divider - subtle linear */}
            <motion.div 
              className="mt-16 mb-10 flex items-center justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#d4af76]/30 to-transparent" />
              <div className="relative">
                <div className="absolute inset-0 bg-white/30 rounded-full blur-md" />
                <Camera className="relative w-4 h-4 text-[#b38b5d]/60" strokeWidth={1.2} />
              </div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-[#d4af76]/30 to-transparent" />
            </motion.div>

            {/* Social Links - clean, minimal */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              {/* Instagram */}
              <a
                href="https://instagram.com/picturebyavi"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 px-6 py-3.5 bg-white rounded-full border border-neutral-200 hover:border-[#E4405F]/30 hover:shadow-md hover:shadow-[#E4405F]/10 transition-all duration-300"
              >
                <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Instagram className="w-4 h-4 text-white" strokeWidth={1.8} />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-700 group-hover:text-neutral-900 transition-colors">
                  Instagram
                </span>
                <ArrowRight className="w-3 h-3 text-neutral-400 group-hover:text-[#E4405F] group-hover:translate-x-1 transition-all duration-300" strokeWidth={1.5} />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/picturebyavi"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 px-6 py-3.5 bg-white rounded-full border border-neutral-200 hover:border-[#1877F2]/30 hover:shadow-md hover:shadow-[#1877F2]/10 transition-all duration-300"
              >
                <div className="relative w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Facebook className="w-4 h-4 text-white" strokeWidth={1.8} fill="white" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-700 group-hover:text-neutral-900 transition-colors">
                  Facebook
                </span>
                <ArrowRight className="w-3 h-3 text-neutral-400 group-hover:text-[#1877F2] group-hover:translate-x-1 transition-all duration-300" strokeWidth={1.5} />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@picturebyavi"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 px-6 py-3.5 bg-white rounded-full border border-neutral-200 hover:border-[#FF0000]/30 hover:shadow-md hover:shadow-[#FF0000]/10 transition-all duration-300"
              >
                <div className="relative w-9 h-9 rounded-full bg-[#FF0000] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Youtube className="w-4 h-4 text-white" strokeWidth={1.8} fill="white" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-700 group-hover:text-neutral-900 transition-colors">
                  YouTube
                </span>
                <ArrowRight className="w-3 h-3 text-neutral-400 group-hover:text-[#FF0000] group-hover:translate-x-1 transition-all duration-300" strokeWidth={1.5} />
              </a>
            </motion.div>

            {/* Bottom signature - clean */}
            <motion.div 
              className="flex items-center justify-center gap-3 mt-12"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#d4af76]/30 to-transparent" />
              <div className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af76]/30" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#b38b5d]/40" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#8b6f47]/30" />
              </div>
              <div className="w-8 h-px bg-gradient-to-l from-transparent via-[#d4af76]/30 to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Minimal Footer - clean */}
      <footer className="relative py-10 px-6 md:px-12 bg-[#f5f2ef] border-t border-[#d4af76]/10">
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Left - Brand */}
            <div className="flex items-center gap-3">
              <Camera className="w-4 h-4 text-[#b38b5d]/60" strokeWidth={1.2} />
              <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-light">
                Picture by Avi
              </span>
            </div>
            
            {/* Center - Copyright */}
            <div className="text-[9px] uppercase tracking-[0.2em] text-neutral-400 font-light">
              © {new Date().getFullYear()} • All rights reserved
            </div>
            
            {/* Right - Quick links */}
            <div className="flex items-center gap-6">
              <a 
                href="/privacy" 
                className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 hover:text-[#b38b5d] transition-colors duration-300 relative group"
              >
                Privacy
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#d4af76] group-hover:w-full transition-all duration-300" />
              </a>
              <span className="text-neutral-300 text-[8px]">✦</span>
              <a 
                href="/terms" 
                className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 hover:text-[#b38b5d] transition-colors duration-300 relative group"
              >
                Terms
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#d4af76] group-hover:w-full transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}