import {defineField, defineType} from 'sanity'

export const dynamicLinkType = defineType({
  name: 'dynamicLink',
  title: 'Dynamic Link',
  type: 'document',
  description: 'Links associated with project',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
