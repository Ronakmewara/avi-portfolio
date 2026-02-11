'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main className="pt-56 pb-40 px-8 md:px-16 bg-white">

      {/* HERO HEADLINE */}
      <section className="max-w-5xl mx-auto mb-40">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-light tracking-tight leading-[1.1] text-neutral-900"
        >
          Photography is how I interpret silence.
        </motion.h1>
      </section>

      {/* IMAGE + INTRO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center mb-40">
        
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl"
        >
          <img
            src="/your-portrait.jpg"
            alt="Photographer Portrait"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8 text-neutral-700 text-lg leading-relaxed"
        >
          <p>
            I am a visual storyteller drawn to light, texture, and the quiet
            tension between presence and absence.
          </p>

          <p>
            My work explores the relationship between subject and atmosphere —
            capturing moments that feel timeless rather than timely.
          </p>

          <p>
            Based in India, working worldwide.
          </p>
        </motion.div>
      </section>

      {/* PHILOSOPHY BLOCK */}
      <section className="max-w-4xl mx-auto text-center mb-40">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-light tracking-tight leading-[1.3] text-neutral-900"
        >
          Every frame is a conversation between light and memory.
        </motion.p>
      </section>

      {/* EXPERIENCE / CREDENTIALS */}
      <section className="max-w-3xl mx-auto space-y-6 text-neutral-600 text-sm uppercase tracking-[0.2em]">
        <div className="flex justify-between border-b border-neutral-200 pb-4">
          <span>Exhibitions</span>
          <span>2022 — 2024</span>
        </div>

        <div className="flex justify-between border-b border-neutral-200 pb-4">
          <span>Selected Clients</span>
          <span>Editorial & Private</span>
        </div>

        <div className="flex justify-between">
          <span>Awards</span>
          <span>International Recognition</span>
        </div>
      </section>

    </main>
  )
}
