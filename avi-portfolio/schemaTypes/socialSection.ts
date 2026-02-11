import { defineType, defineField } from 'sanity'

export const socialSection = defineType({
  name: 'socialSection',
  title: 'Social Section',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'subtitle', type: 'text' }),
    defineField({ name: 'instagramUrl', type: 'url' }),
    defineField({ name: 'image', type: 'image' }),
    defineField({
  name: 'btsImage',
  title: 'Behind the Scenes Image',
  type: 'image',
})

  ],
})
