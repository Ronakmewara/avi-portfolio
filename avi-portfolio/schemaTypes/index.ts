import { project } from './project'
import { hero } from './hero'
import { imageBlock } from './blocks/imageBlock'
import { imagePairBlock } from './blocks/imagePairBlock'
import { textBlock } from './blocks/textBlock'
import { spacerBlock } from './blocks/spacerBlock'
 import { category } from './category'
import { socialSection } from './socialSection'
import { about } from './about'
import { portfolioItem } from './portfolioItem'
import { portfolioCategory } from './portfolioCategory'


export const schemaTypes = [
  hero,
  project,
  category,
   socialSection,
   about,
   portfolioCategory,
  portfolioItem,
  imageBlock,
  imagePairBlock,
  textBlock,
  spacerBlock,
]
