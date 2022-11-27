// Types
import { ContainerProps, AligmentConfig } from '../../../types/layout'
// Styles
import styles from '../../../styles/layout/Container.module.css'

/**
 * Container styles
 */
const {
  layoutStyle,
  fullHeightStyle,
  gapYStyle,
  flexCenterStartStyle,
  flexCenterStyle,
  flexCenterEndStyle,
  flexRowCenterStartStyle,
  flexRowCenterStyle,
  flexRowCenterEndStyle,
  relativeStyle
} = styles

const alignmentConfig: AligmentConfig = {
  start: flexCenterStartStyle,
  center: flexCenterStyle,
  end: flexCenterEndStyle,
  'row-start': flexRowCenterStartStyle,
  'row-center': flexRowCenterStyle,
  'row-end': flexRowCenterEndStyle
}

const Container = (
  {
    children,
    auto,
    fullHeight,
    alignment,
    gapY,
    relative
  }: ContainerProps
) => {
  const autoStyle = auto ? layoutStyle : ''
  const heightStyle = fullHeight ? fullHeightStyle : ''
  const spacingStyle = gapY ? gapYStyle : ''
  const alignmentStyle = alignment ? alignmentConfig[alignment] : ''
  const relativeLayoutStyle = relative ? relativeStyle : ''
  const containerStyle = `
    ${autoStyle} 
    ${heightStyle} 
    ${spacingStyle} 
    ${alignmentStyle} 
    ${relativeLayoutStyle}
  `

  return (
    <div className={containerStyle}>
      {children}
    </div>
  )
}

export default Container
