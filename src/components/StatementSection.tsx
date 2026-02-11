'use client'

import { motion } from 'framer-motion'

export default function StatementSection() {
  return (
    <section className="py-40 px-8 md:px-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-3xl md:text-5xl font-light leading-[1.2] tracking-tight text-neutral-900">
          Photography is not documentation.
          <br />
          It is interpretation.
        </p>

        <p className="mt-10 text-xs uppercase tracking-[0.3em] text-neutral-400">
          Picture by Avi
        </p>
      </motion.div>
    </section>
  )
}
