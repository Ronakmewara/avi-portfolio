import { sanityClient } from '@/src/lib/sanity.client'
import { PORTFOLIO_ITEMS_BY_CATEGORY } from '@/src/lib/queries'
import PortfolioClient from '@/src/components/portfolio/PortfolioClient'

export default async function PortfolioCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const items = await sanityClient.fetch(
    PORTFOLIO_ITEMS_BY_CATEGORY,
    { slug } // ⬅️ THIS WAS MISSING BEFORE
  )

  return <PortfolioClient items={items} />
}
