import { sanityClient } from '@/src/lib/sanity.client'
import { PROJECT_BY_SLUG_QUERY } from '@/src/lib/queries'
import { urlFor } from '@/src/lib/sanity.image'
import ProjectBlocks from '@/src/components/ProjectBlocks'
import { notFound } from 'next/navigation'

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const project = await sanityClient.fetch(PROJECT_BY_SLUG_QUERY, { slug })

  if (!project) return notFound()

  return (
    <main className="pt-48 pb-32">

      {/* HERO IMAGE */}
      <section className="max-w-[1700px] mx-auto px-8 md:px-16 mb-40">
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <img
            src={urlFor(project.coverImage)
              .width(2400)
              .quality(95)
              .url()}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* TITLE + META */}
      <section className="max-w-4xl mx-auto px-8 md:px-0 mb-32">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1] text-neutral-900">
          {project.title}
        </h1>

        <div className="flex items-center gap-10 mt-8 text-xs uppercase tracking-[0.25em] text-neutral-400">
          <span>{project.year}</span>
          {project.category && <span>{project.category}</span>}
        </div>

        {project.description && (
          <div className="mt-16 text-xl leading-relaxed text-neutral-600">
            {project.description}
          </div>
        )}
      </section>

      {/* STORY BLOCKS */}
      <ProjectBlocks blocks={project.blocks} />

    </main>
  )
}
