import { defineType, defineField } from 'sanity'

export const imagePairBlock = defineType({
  name: 'imagePairBlock',
  title: 'Image Pair',
  type: 'object',
  fields: [
    defineField({
      name: 'left',
      title: 'Left Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'right',
      title: 'Right Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
