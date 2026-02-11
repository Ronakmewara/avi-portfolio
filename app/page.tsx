import Hero from '@/src/components/Hero'
import ProjectsGrid from '@/src/components/ProjectsGrid'
import { sanityClient } from '@/src/lib/sanity.client'
import { HERO_QUERY, PROJECTS_QUERY } from '@/src/lib/queries'
import StatementSection from '@/src/components/StatementSection'
import HomeCTA from '@/src/components/HomeCTA'
import { SOCIAL_SECTION_QUERY } from '@/src/lib/queries'
import SocialSection from '@/src/components/SocialSection'

export default async function Home() {
  const hero = await sanityClient.fetch(HERO_QUERY)
  const projects = await sanityClient.fetch(PROJECTS_QUERY)
const social = await sanityClient.fetch(SOCIAL_SECTION_QUERY)

  return (
    <main>
      <Hero title={hero.title} subtitle={hero.subtitle} />
      <ProjectsGrid projects={projects} />
      <StatementSection />
      <SocialSection data={social} />

      <HomeCTA />

    </main>
  )
}
