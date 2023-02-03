// Components
import CallToAction from '../navigation/CallToAction'
import NextLink from 'next/link'
// Styles
import styles from '../../styles/sections/Footer.module.css'
import SocialNav from '../navigation/SocialNav'

/**
 * The footer section of application
 * @returns Footer section component
 */
const Footer = () => {
  return (
    <footer className={styles.section}>
      {/* <div id='about' className={styles.philosophy}>
        <div className={styles.philosophyHeader}>
          <div className={styles.philosophyHeading}>
            emah
          </div>
          <div className={styles.philosophyDescription}>
            Endless Posibilities
          </div>
        </div>
      </div> */}
      <div className={styles.foot}>
        <div className={styles.footMail}>
          <NextLink href='mailto:info@emah.mx' target='_blank' rel='noreferrer'>
            info@emah.mx
          </NextLink>
        </div>
        <SocialNav />
        <div className={styles.footAction}>
          <CallToAction large />
        </div>
      </div>
    </footer>
  )
}

export default Footer
