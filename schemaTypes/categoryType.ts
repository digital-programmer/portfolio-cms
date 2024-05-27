import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  description: 'Category of the blog',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'meta_description',
      title: 'Meta Description',
      type: 'text',
    }),
    defineField({
      name: 'blogs',
      title: 'Blogs',
      type: 'array',
      of: [{type: 'reference', to: {type: 'blog'}}],
    }),
  ],
})
