import { sanityClient } from '@/src/lib/sanity.client'
import { ALL_PROJECTS_QUERY } from '@/src/lib/queries'
import ProjectsPageClient from '@/src/components/ProjectsPageClient'

export default async function ProjectsPage() {
  const projects = await sanityClient.fetch(ALL_PROJECTS_QUERY)

  return (
    <main className="pt-40 px-6 md:px-10">
      <ProjectsPageClient projects={projects} />
    </main>
  )
}
