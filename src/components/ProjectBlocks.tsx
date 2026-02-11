'use client'

import { motion } from 'framer-motion'
import { urlFor } from '@/src/lib/sanity.image'

export default function ProjectBlocks({ blocks }: { blocks: any[] }) {
  if (!blocks || blocks.length === 0) return null

  return (
    <section className="pb-32">
      {blocks.map((block, index) => {
        switch (block._type) {
          case 'imageBlock':
            return <ImageBlock key={index} block={block} />

          case 'imagePairBlock':
            return <ImagePairBlock key={index} block={block} />

          case 'textBlock':
            return <TextBlock key={index} block={block} />

          case 'spacerBlock':
            return <SpacerBlock key={index} block={block} />

          default:
            return null
        }
      })}
    </section>
  )
}



function ImageBlock({ block }: { block: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="max-w-[1600px] mx-auto px-8 md:px-16 my-32"
    >
      <div className="relative w-full aspect-[16/9]">
        <img
          src={urlFor(block.image).width(2000).quality(95).url()}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </motion.div>
  )
}


function ImagePairBlock({ block }: { block: any }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="max-w-[1400px] mx-auto px-8 md:px-16 my-32 grid grid-cols-1 md:grid-cols-2 gap-10"
    >
      {[block.left, block.right].map((img: any, i: number) => (
        <div key={i} className="relative aspect-[4/5]">
          <img
            src={urlFor(img).width(1200).quality(90).url()}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}
    </motion.div>
  )
}


function TextBlock({ block }: { block: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto px-8 md:px-0 my-32"
    >
      <div className="text-lg leading-relaxed text-neutral-700 space-y-6">
        <p>{block.text}</p>
      </div>
    </motion.div>
  )
}

function SpacerBlock({ block }: { block: any }) {
  return <div style={{ height: `${block.size || 120}px` }} />
}


