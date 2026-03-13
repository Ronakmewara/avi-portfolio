'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { urlFor } from '@/src/lib/sanity.image'

type Project = {
  _id: string
  title: string
  year: string
  slug: { current: string }
  coverImage: any
  category?: string
}

export default function ProjectsArchiveGrid({
  projects,
}: {
  projects: Project[]
}) {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24 lg:px-16 lg:py-32 xl:py-40">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:gap-x-8 sm:gap-y-20 md:grid-cols-2 md:gap-x-12 md:gap-y-24 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: Math.min(index, 5) * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href={`/projects/${project.slug.current}`} className="group block">
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="relative overflow-hidden bg-neutral-100">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={urlFor(project.coverImage)
                          .width(800)
                          .height(1067)
                          .fit('crop')
                          .quality(90)
                          .url()}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      />

                      <div className="absolute inset-0 bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/5" />

                      <div className="absolute left-3 top-3 sm:left-4 sm:top-4 md:left-6 md:top-6">
                        <span className="rounded bg-black/20 px-1.5 py-0.5 text-[10px] font-light tabular-nums text-white/80 sm:px-2 sm:py-1 sm:text-xs">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="flex items-center gap-2 text-[10px] text-neutral-400 sm:gap-3 sm:text-xs">
                      <span className="font-light tabular-nums tracking-wide">{project.year}</span>
                      {project.category && (
                        <>
                          <span className="text-neutral-300">-</span>
                          <span className="text-[9px] font-light uppercase tracking-wider sm:text-[10px]">
                            {project.category}
                          </span>
                        </>
                      )}
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      <h3 className="text-lg font-light leading-tight tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-[#b38b5d] sm:text-xl md:text-2xl">
                        {project.title}
                      </h3>

                      <div className="h-px w-0 bg-neutral-900 transition-all duration-500 group-hover:w-full" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
