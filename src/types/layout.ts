// Types
import { ReactNode } from 'react'

/**
 * Layout props
 */
export interface LayoutProps {
  /**
   * The children of the layout
   */
  children: ReactNode
}

/**
 * Alignment configuration for Conatiner component
 */
export interface AligmentConfig {
  /**
   * Set the content in a column and align the items to strat
   */
  start: string
  /**
   * Set the content in a column and align the items to center
   */
  center: string
  /**
   * Set the content in a column and align the items to end
   */
  end: string
  /**
   * Set the content in a row and align the items to start
   */
  'row-start': string
  /**
   * Set the content in a row and align the items to center
   */
  'row-center': string
  /**
   * Set the content in a row and align the items to end
   */
  'row-end': string
}

/**
 * Container component props
 */
export interface ContainerProps extends LayoutProps {
  /**
   * Set max width defined on styles and margin X auto
   */
  auto?: boolean
  /**
   * Set height to 100%
   */
  fullHeight?: boolean
  /**
   * Define content alignment
   */
  alignment?: 'start' | 'center' | 'end' | 'row-start' | 'row-center' | 'row-end'
  /**
   * Set a padding to Y axis defined on styles
   */
  gapY?: boolean
  /**
   * Set the container position on relative
   */
  relative?: boolean
}
