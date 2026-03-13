import { defineType, defineField } from 'sanity'

export const portfolioItem = defineType({
  name: 'portfolioItem',
  title: 'Portfolio Item',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image / Video',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'portfolioCategory' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
  name: 'orientation',
  title: 'Orientation',
  type: 'string',
  options: {
    list: [
      { title: 'Vertical', value: 'vertical' },
      { title: 'Horizontal', value: 'horizontal' },
      { title: 'Square', value: 'square' },
    ],
    layout: 'radio',
  },
}),
 defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
