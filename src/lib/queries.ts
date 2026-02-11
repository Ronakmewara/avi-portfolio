export const PROJECTS_QUERY = `
  *[_type == "project"] | order(year desc) {
    _id,
    title,
    year,
    slug,
    coverImage
  }
`
export const HERO_QUERY = `
  *[_type == "hero"][0] {
    title,
    subtitle
  }
`
export const PROJECT_BY_SLUG_QUERY = `
  *[_type == "project" && slug.current == $slug][0] {
    title,
    year,
    coverImage,
    description,
    "category": category->title,
    blocks[]{
      _type,
      image,
      left,
      right,
      text,
      size
    }
  }
`


export const ALL_PROJECTS_QUERY = `
  *[_type == "project"] | order(year desc) {
    _id,
    title,
    year,
    slug,
    coverImage,
    "category": category->title
  }
`

export const FEATURED_PROJECTS_QUERY = `
  *[_type == "project" && featured == true] | order(year desc) {
    _id,
    title,
    year,
    slug,
    coverImage,
    category
  }
`
 export const SOCIAL_SECTION_QUERY = `
  *[_type == "socialSection"][0] {
    title,
    subtitle,
    instagramUrl,
    image,
    btsImage
  }
`


