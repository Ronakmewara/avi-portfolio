import { sanityClient } from '@/src/lib/sanity.client'
import { ABOUT_QUERY } from '@/src/lib/queries'
import AboutPageClient from '@/src/components/AboutPageClient'

export default async function AboutPage() {
  const data = await sanityClient.fetch(ABOUT_QUERY)

  if (!data) return null

  return <AboutPageClient data={data} />
}