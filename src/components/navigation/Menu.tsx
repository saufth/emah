// Components
import CallToAction from './CallToAction'
import NextLink from 'next/link'
// Hooks
import useDimensions from '../../modules/sizing/hooks/useDimensions'
// Animation
import { motion } from 'framer-motion'
// Types
import { MenuProps } from '../../types/navigation'
// Styles
import styles from '../../styles/navigation/Menu.module.css'
import SocialNav from './SocialNav'

/** Background animation variants */
const backgroundVariants = {
  open: (width = 1366) => ({
    clipPath: `circle(${width * 2}px at 100% 0px)`,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(0px at 100% 0px)',
    opacity: 1,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

/** Nav animation variants */
const navVariants = {
  open: {
    opacity: 1,
    height: '100vh',
    transition: {
      delay: 0.3
    }
  },
  closed: {
    opacity: 0,
    height: 0
  }
}

/**
 * The main menu of application
 * @returns Menu component
 */
const Menu = ({ isOpen, action }: MenuProps) => {
  // Animation
  const { width } = useDimensions()

  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={width}
    >
      <motion.div
        aria-label='Directorio emah'
        className={styles.nav}
        variants={navVariants}
      >
        <div>
          Menu
        </div>
        <div className={styles.option} onClick={action}>
          <NextLink href='/'>
            Home
          </NextLink>
        </div>
        <div className={styles.option} onClick={action}>
          <NextLink href='/about'>
            About us
          </NextLink>
        </div>
        <div className={styles.option} onClick={action}>
          <NextLink href='/services'>
            Services
          </NextLink>
        </div>
        <div className={styles.option} onClick={action}>
          <SocialNav />
        </div>
        <div className={styles.action} onClick={action}>
          <CallToAction large />
        </div>
      </motion.div>

      <motion.div
        className={styles.background}
        variants={backgroundVariants}
      />
    </motion.div>
  )
}

export default Menu
