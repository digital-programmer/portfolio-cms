import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {codeInput} from '@sanity/code-input'
import {colorInput} from '@sanity/color-input'

export default defineConfig({
  name: 'default',
  title: 'portfolio-cms',

  projectId: 'qz844ghj',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), codeInput(), colorInput()],

  schema: {
    types: schemaTypes,
  },
})
