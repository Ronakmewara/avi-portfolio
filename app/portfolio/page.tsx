import { sanityClient } from '@/src/lib/sanity.client'
import { PORTFOLIO_CATEGORIES_QUERY } from '@/src/lib/queries'
import PortfolioCategories from '@/src/components/PortfolioCategories'

export default async function PortfolioPage() {
  const categories = await sanityClient.fetch(PORTFOLIO_CATEGORIES_QUERY)

  return (
    <main className="bg-[#faf8f4]">
      <PortfolioCategories categories={categories} />
    </main>
  )
}
