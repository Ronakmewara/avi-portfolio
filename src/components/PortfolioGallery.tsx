import { urlFor } from '@/src/lib/sanity.image'

export default function PortfolioGallery({ items }: { items: any[] }) {
  if (!items || items.length === 0) return null

  return (
    <section className="space-y-32 px-6 md:px-16 py-32">
      {items.map((item, i) => {
        if (!item.media) return null // ✅ guard

        return (
          <figure
            key={item._id}
            className="max-w-6xl mx-auto space-y-6"
          >
            <img
              src={urlFor(item.media).width(2400).quality(95).url()}
              alt={item.caption || ''}
              className="w-full object-cover"
            />

            {item.caption && (
              <figcaption className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                {item.caption}
              </figcaption>
            )}
          </figure>
        )
      })}
    </section>
  )
}
