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
