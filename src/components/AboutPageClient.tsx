'use client'

import { motion } from 'framer-motion'
import { urlFor } from '@/src/lib/sanity.image'
import { useRef } from 'react'

type AboutData = {
  portrait: any
  clients?: any[]
}

export default function AboutPageClient({ data }: { data: AboutData }) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <main
      ref={containerRef}
      className="relative bg-gradient-to-b from-[#faf8f4] via-white to-[#faf8f4] text-neutral-900 overflow-hidden"
    >

      {/* Subtle golden glow background */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-[#d4af76]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-tr from-[#b38b5d]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* HERO */}
      <section className="relative pt-44 pb-28 px-6 md:px-16 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-light tracking-tight leading-[1.1]"
        >
          Built on relationships.
          <br />
          <span className="bg-gradient-to-r from-[#d4af76] via-[#b38b5d] to-[#8b6f47] bg-clip-text text-transparent">
            Shaped by light.
          </span>
        </motion.h1>
      </section>

      {/* PORTRAIT + BIO */}
      <section className="relative px-6 md:px-16 pb-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-2xl shadow-black/10 group"
        >
          <img
            src={urlFor(data.portrait).width(1200).quality(95).url()}
            alt="Avi"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          {/* Subtle gold frame */}
          <div className="absolute inset-0 border border-[#d4af76]/30 rounded-xl pointer-events-none" />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8 text-neutral-700 text-lg leading-relaxed font-light"
        >
          <p>
             What started as understanding devices
            slowly evolved into understanding perspective, visual communication,
            and the emotional weight of imagery.
          </p>

          <p>
            Photography shifted from passion to profession through consistency,
            discipline, and curiosity for light. Over the years, I’ve collaborated
            with brands such as Samsung, Vivo, and MI, along with distinguished
            luxury properties like Sujan Jawai.
          </p>

          <p>
            Each collaboration reinforced one belief — photography is not only
            about aesthetics. It is about trust. When people feel comfortable,
            understood, and respected, the images naturally carry authenticity.
          </p>

          <p>
            Today, my work explores atmosphere, texture, and quiet presence —
            creating imagery that feels timeless rather than temporary.
          </p>

          <p className="text-sm uppercase tracking-[0.3em] text-[#b38b5d] pt-6">
            Based in India • Working Across Destinations
          </p>
        </motion.div>
      </section>

      {/* CLIENT LOGOS */}
      {data.clients && (
        <section className="relative px-6 md:px-16 py-28 border-t border-[#d4af76]/20">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xs uppercase tracking-[0.3em] text-[#b38b5d] mb-16">
              Selected Collaborations
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-16 items-center">
              {data.clients.map((logo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex justify-center"
                >
                  <img
                    src={urlFor(logo).width(400).quality(90).url()}
                    alt="Client Logo"
                    className="max-h-12 object-contain opacity-70 hover:opacity-100 transition-opacity duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PHILOSOPHY */}
      <section className="relative px-6 md:px-16 py-32 border-t border-[#d4af76]/20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-3xl md:text-5xl font-light leading-[1.3]"
        >
          <span className="bg-gradient-to-r from-[#d4af76] via-[#b38b5d] to-[#8b6f47] bg-clip-text text-transparent">
            Great photographs are not taken.
          </span>
          <br />
          They are built on trust.
        </motion.p>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-16 py-16 border-t border-[#d4af76]/20 text-sm text-neutral-500 flex justify-between">
        <span>Picture by Avi</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>

    </main>
  )
}
