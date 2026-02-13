'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { urlFor } from '@/src/lib/sanity.image'

type Category = {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  coverMedia: any
}

export default function PortfolioCategories({
  categories,
}: {
  categories: Category[]
}) {
  return (
    <section className="px-6 md:px-16 py-32 max-w-7xl mx-auto">
      
      {/* Page Title */}
      <section className="pt-40 pb-24 px-6 md:px-12">
  <div className="max-w-5xl">
    <p className="text-[10px] uppercase tracking-[0.3em] text-[#b38b5d] mb-6">
      Portfolio
    </p>

    <h1 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight">
      A curated
      <br />
      <span className="italic text-[#b38b5d]">visual archive</span>
    </h1>

    <p className="mt-8 text-neutral-500 max-w-md font-light">
      Selected bodies of work across wildlife, travel, hospitality and commissioned storytelling.
    </p>
  </div>
</section>


      {/* Categories */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 pb-32">
  {categories.map((cat) => (
    <a
      key={cat._id}
      href={`/portfolio/${cat.slug.current}`}
      className="group relative overflow-hidden"
    >
      <div className="aspect-[4/5] overflow-hidden bg-neutral-100">
        <img
          src={urlFor(cat.coverMedia).width(1200).quality(90).url()}
          alt={cat.title}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
      </div>

      {/* Soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Text */}
      <div className="absolute bottom-6 left-6">
        <h3 className="text-white text-2xl font-light tracking-tight">
          {cat.title}
        </h3>
        {cat.description && (
          <p className="text-white/70 text-sm mt-1 font-light">
            {cat.description}
          </p>
        )}
      </div>
    </a>
  ))}
</div>

    </section>
  )
}
