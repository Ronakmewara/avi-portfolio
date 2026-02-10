import { defineType, defineField } from 'sanity'

export const textBlock = defineType({
  name: 'textBlock',
  title: 'Text',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: Rule => Rule.max(160),
      description: 'Keep it short. 1–2 lines.',
    }),
  ],
})
