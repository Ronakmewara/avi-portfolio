'use client'

import { motion } from 'framer-motion'
import { urlFor } from '@/src/lib/sanity.image'
import { Instagram, ArrowUpRight, Camera, Sparkles } from 'lucide-react'

export default function SocialSection({ data }: { data: any }) {
  if (!data) return null

  return (
    <section className="relative py-32 md:py-36 lg:py-40 px-6 md:px-12 overflow-hidden bg-[#faf8f6]">
      {/* Elegant background elements - subtle but present */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#d4af76]/10 via-[#b38b5d]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-[#b38b5d]/10 via-[#d4af76]/5 to-transparent rounded-full blur-3xl" />
      
      {/* Decorative film strip line - signature element */}
      <div className="absolute left-1/2 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-[#d4af76]/30 to-transparent hidden lg:block" />
      
      {/* Minimal aperture corner accents */}
      <div className="absolute top-12 left-12 w-16 h-16 opacity-20 hidden lg:block">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border border-[#d4af76]/40 rounded-full" />
          <div className="absolute inset-[25%] border border-[#b38b5d]/40 rounded-full" />
          <div className="absolute inset-[45%] bg-[#d4af76]/40 rounded-full" />
        </div>
      </div>
      
      <div className="absolute bottom-12 right-12 w-20 h-20 opacity-20 hidden lg:block rotate-45">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border border-[#b38b5d]/40" />
          <div className="absolute inset-[30%] border border-[#d4af76]/40" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE - Refined and substantial */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Elegant badge with sparkle */}
              <div className="flex items-center gap-3 mb-5">
                <div className="relative">
                  <Instagram className="w-5 h-5 text-[#b38b5d]" strokeWidth={1.5} />
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 blur-sm"
                  >
                    <Instagram className="w-5 h-5 text-[#d4af76]/30" strokeWidth={1.5} />
                  </motion.div>
                </div>
                <span className="text-xs font-light uppercase tracking-[0.25em] text-[#8b6f47]">
                  @PictureByAvi
                </span>
              </div>
              
              {/* Title with presence */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-neutral-900 leading-[1.1]">
                {data.title?.split(' ').map((word: string, i: number, arr: string[]) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 + i * 0.08 }}
                    className="inline-block mr-3"
                  >
                    {word}
                    {i === arr.length - 1 && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="inline-block ml-2 text-[#d4af76]"
                      >
                        
                      </motion.span>
                    )}
                  </motion.span>
                )) || 'Social Diary'}
              </h2>

              {/* Decorative divider */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 60, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="h-px bg-gradient-to-r from-[#d4af76] to-transparent my-6"
              />

              {/* Subtitle with warmth */}
              <p className="text-neutral-600 text-base md:text-lg font-light leading-relaxed max-w-md">
                {data.subtitle ||
                  "Follow the journey and explore recent visual stories across platforms."}
              </p>
            </motion.div>

            {/* Premium CTA Button - substantial but not overwhelming */}
            {data.instagramUrl && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <a
                  href={data.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-block"
                >
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white text-sm font-medium rounded-full hover:from-[#b38b5d] hover:via-[#a07a52] hover:to-[#8b6f47] transition-all duration-500 shadow-xl shadow-neutral-900/20 hover:shadow-2xl hover:shadow-[#b38b5d]/30 backdrop-blur-sm overflow-hidden group"
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
                      
                      {/* Gold shimmer on hover */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d4af76]/0 via-[#d4af76]/20 to-[#b38b5d]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md" />
                      
                      <Instagram className="w-4 h-4 relative z-10" strokeWidth={1.8} />
                      <span className="relative z-10 uppercase tracking-wider text-xs">
                        Follow the Journey
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
                    </motion.div>
                  </div>
                </a>
              </motion.div>
            )}
            
            {/* Social proof - elegant but present */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-[#d4af76]/20 to-[#b38b5d]/20 backdrop-blur-sm flex items-center justify-center">
                    <Camera className="w-3 h-3 text-[#8b6f47]/70" strokeWidth={1.5} />
                  </div>
                ))}
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-light">
                400K+ followers
              </span>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Statement image with presence */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Main image - substantial but not overwhelming */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-20"
              >
                <div className="relative aspect-[4/5] max-h-[500px] mx-auto overflow-hidden rounded-2xl shadow-2xl shadow-black/10 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                  <img
                    src={urlFor(data.image).width(900).height(1125).fit('crop').quality(90).url()}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Elegant corner decorations */}
                  <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
                  <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
                  
                  {/* Gold accent dot */}
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-5 right-5 w-2 h-2 rounded-full bg-[#d4af76] shadow-lg shadow-[#d4af76]/50 z-20"
                  />
                  
                  {/* Instagram hover indicator */}
                  <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 z-20">
                    <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full">
                      <Instagram className="w-3.5 h-3.5 text-white" strokeWidth={1.8} />
                      <span className="text-[10px] uppercase tracking-wider text-white">View on Instagram</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white" strokeWidth={1.8} />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* DECORATIVE POLAROID - BIGGER, TILTED, WITH ACTUAL IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: -30, rotate: 8 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 6 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.9, 
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  rotate: { duration: 1.2, ease: "easeOut" }
                }}
                whileHover={{ rotate: 8, scale: 1.02, y: -5 }}
                className="absolute -top-8 -right-8 w-56 h-64 bg-white rounded-lg shadow-2xl hidden md:flex flex-col overflow-hidden border-4 border-white"
                style={{
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2), 0 0 0 1px rgba(212,175,118,0.1)',
                }}
              >
                {/* Polaroid image area */}
                <div className="relative w-full h-44 bg-gradient-to-br from-[#f0e9e0] to-[#e5dcd0] overflow-hidden">
                  {/* This is where the BTS image would go */}
               <img
  src={urlFor(data.btsImage).width(600).quality(85).url()}
  className="absolute inset-0 w-full h-full object-cover"
/>
                  {/* Gradient overlay for vintage feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
                  
                  {/* Film grain effect */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 4px)`,
                  }} />
                  
                  {/* Minimal corner accent */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/60" />
                  
                  {/* Polaroid label */}
                  <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
                    <span className="text-[8px] uppercase tracking-wider text-white/90">BTS • 2024</span>
                  </div>
                </div>
                
                {/* Polaroid bottom area */}
                <div className="w-full flex-1 bg-white p-3 flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#d4af76] to-[#b38b5d] flex items-center justify-center">
                      <Camera className="w-3 h-3 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-700 font-medium">
                      Behind the Scenes
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center mt-1">
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-[#d4af76]" />
                      <span className="text-[7px] uppercase tracking-[0.3em] text-neutral-400">
                        INSTANT
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Instagram className="w-2.5 h-2.5 text-[#b38b5d]" strokeWidth={2} />
                      <span className="text-[6px] uppercase tracking-[0.2em] text-neutral-400">
                        @picturebyavi
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative tape effect */}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-[#e6e0d0]/80 blur-sm rotate-3 rounded-sm" />
                <div className="absolute -bottom-1 right-4 w-6 h-2 bg-[#e6e0d0]/80 blur-sm -rotate-6 rounded-sm" />
              </motion.div>
              
              {/* Caption - adjusted spacing for larger polaroid */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-xs text-neutral-400 font-light tracking-wide mt-10 text-right italic relative z-30"
              >
                — Recent from Instagram
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#faf8f6] to-transparent pointer-events-none" />
    </section>
  )
}