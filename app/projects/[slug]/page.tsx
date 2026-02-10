import { sanityClient } from '@/src/lib/sanity.client'
import { PROJECT_BY_SLUG_QUERY } from '@/src/lib/queries'
import { urlFor } from '@/src/lib/sanity.image'
import ProjectBlocks from '@/src/components/ProjectBlocks'

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const project = await sanityClient.fetch(PROJECT_BY_SLUG_QUERY, { slug })

  if (!project) {
    return (
      <main style={{ padding: '4rem' }}>
        <p>Project not found.</p>
      </main>
    )
  }

  return (
    <main>
      {/* HERO IMAGE */}
      <section>
        <img
          src={urlFor(project.coverImage).width(2400).quality(90).url()}
          alt={project.title}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </section>

      {/* META */}
      <section
        style={{
          padding: '6rem 2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            marginBottom: '1rem',
          }}
        >
          {project.title}
        </h1>

        <p style={{ color: '#666' }}>{project.year}</p>

        {project.description && (
          <p style={{ marginTop: '2rem', maxWidth: '600px' }}>
            {project.description}
          </p>
        )}
      </section>

     <ProjectBlocks blocks={project.blocks} />

    </main>
  )
}
