// Types
import { ParentProps } from '../../types/layout'
// Styles
import styles from '../../styles/sections/Header.module.css'

/**
 * Header section component
 * @see {@link ParentProps} for props definitions
 * @param {ParentProps} ParentProps The header component props
 * @returns Header section component
 */
const Hero = (
  {
    children
  }: ParentProps
) => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1 className={styles.heading}>
          {children}
        </h1>
      </header>
    </section>
  )
}

export default Hero
