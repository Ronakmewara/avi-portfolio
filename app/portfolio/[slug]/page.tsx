import { sanityClient } from '@/src/lib/sanity.client'
import { PORTFOLIO_ITEMS_BY_CATEGORY } from '@/src/lib/queries'
import PortfolioGallery from '@/src/components/PortfolioGallery'

export default async function PortfolioCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
   
  const { slug } = await params

  if (!slug) {
    throw new Error('Slug is missing in portfolio route')
  }

  const items = await sanityClient.fetch(
    PORTFOLIO_ITEMS_BY_CATEGORY,
    { slug }
  )

  return (
    <main className="bg-[#faf8f4] min-h-screen">
      <PortfolioGallery items={items} />
    </main>
  )
}
