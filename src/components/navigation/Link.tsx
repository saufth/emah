// Components
import NextLink from 'next/link'
// Hooks
import useRefMagnetic from '../../modules/animation/hooks/useRefMagnetic'
// Types
import { LinkProps } from '../../types/navigation'
// Styles
import styles from '../../styles/navigation/Link.module.css'

/**
 * Used to navigate between pages
 * @returns Link component
 */
const Link = ({ children, href }: LinkProps) => {
  const fieldRef = useRefMagnetic({ transition: 8 })
  const textRef = useRefMagnetic({ fieldRef, transition: 3 })

  return (
    <div className={styles.link} ref={fieldRef}>
      <NextLink href={href}>
        <div className={styles.text} ref={textRef}>
          {children}
        </div>
      </NextLink>
    </div>
  )
}

export default Link
