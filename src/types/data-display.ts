export type SVGIcon = 'facebook'
  | 'instagram'
  | 'tiktok'
  | 'linkedin'

/** The icon component props */
export interface IconProps {
  /** Icon to display */
  icon: SVGIcon
}

/** Images used in showcase component */
export type ShowcaseImage = 'marketing'
| 'branding'
| 'development'
| 'design'
| 'team'
| 'innovate'
| 'oportunity'
| 'assume'
| 'strategy'
| 'prevent'
| 'progress'

/** Showcase component props */
export interface ShowcaseProps {
  /** Heading of the showcase */
  heading: string
  /** Description of the showcase */
  descriptions: string[]
  /** Image to use on the showcase */
  image: ShowcaseImage
  /** Set the demo width to large */
  large?: boolean
  /** Set a CallToAction button */
  action?: boolean
  /** Set a Link from the specific route */
  link?: string
  /** Invert the order of content */
  reverse?: boolean
}
