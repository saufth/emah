// Types
import { ShowcaseProps } from './data-display'

/** Header props */
export interface HeaderProps {
  /** Header heading */
  heading?: string
  /** Header description */
  description?: string
}

/** About component props */
export interface AboutProps extends HeaderProps {
  /** Section showcases */
  showcases: ShowcaseProps[]
  /** Set a callToAction on each Showcase */
  action?: boolean
  /** Set a Link on each Showcase */
  link?: string
}
