import { defineType, defineField } from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'portrait',
      title: 'Portrait Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'philosophy',
      title: 'Philosophy Line',
      type: 'string',
    }),
    defineField({
  name: 'clients',
  title: 'Client Logos',
  type: 'array',
  of: [
    {
      type: 'image',
      options: { hotspot: true },
    },
  ],
}),

  ],
})
