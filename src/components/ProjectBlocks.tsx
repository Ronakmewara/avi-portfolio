'use client'

import { motion } from 'framer-motion'
import { urlFor } from '@/src/lib/sanity.image'

export default function ProjectBlocks({ blocks }: { blocks: any[] | null }) {
  if (!blocks || blocks.length === 0) {
    return null
  }

  return (
    <section style={{ paddingBottom: '10rem' }}>
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
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        maxWidth: '1600px',
        margin: '10rem auto',
        padding: '0 2rem',
      }}
    >
      <img
        src={urlFor(block.image).width(2000).quality(90).url()}
        alt=""
        style={{ width: '100%', display: 'block' }}
      />
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
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        maxWidth: '1400px',
        margin: '8rem auto',
        padding: '0 2rem',
      }}
    >
      <img
        src={urlFor(block.left).width(1200).quality(90).url()}
        alt=""
        style={{ width: '100%', display: 'block' }}
      />
      <img
        src={urlFor(block.right).width(1200).quality(90).url()}
        alt=""
        style={{ width: '100%', display: 'block' }}
      />
    </motion.div>
  )
}

function TextBlock({ block }: { block: any }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        maxWidth: '600px',
        margin: '6rem auto',
        padding: '0 2rem',
        fontSize: '1.1rem',
        lineHeight: 1.7,
        color: '#444',
      }}
    >
      {block.text}
    </motion.div>
  )
}

function SpacerBlock({ block }: { block: any }) {
  const sizes: Record<string, string> = {
    sm: '4rem',
    md: '8rem',
    lg: '14rem',
  }

  return <div style={{ height: sizes[block.size || 'md'] }} />
}

