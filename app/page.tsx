import Hero from '@/src/components/Hero'
import ProjectsGrid from '@/src/components/ProjectsGrid'
import { sanityClient } from '@/src/lib/sanity.client'
import { HERO_QUERY, PROJECTS_QUERY } from '@/src/lib/queries'

export default async function Home() {
  const hero = await sanityClient.fetch(HERO_QUERY)
  const projects = await sanityClient.fetch(PROJECTS_QUERY)

  return (
    <main>
      <Hero title={hero.title} subtitle={hero.subtitle} />
      <ProjectsGrid projects={projects} />
    </main>
  )
}
