import { project } from './project'
import { hero } from './hero'
import { imageBlock } from './blocks/imageBlock'
import { imagePairBlock } from './blocks/imagePairBlock'
import { textBlock } from './blocks/textBlock'
import { spacerBlock } from './blocks/spacerBlock'
 import { category } from './category'
import { socialSection } from './socialSection'
import { about } from './about'


export const schemaTypes = [
  hero,
  project,
  category,
   socialSection,
   about,
  imageBlock,
  imagePairBlock,
  textBlock,
  spacerBlock,
]
