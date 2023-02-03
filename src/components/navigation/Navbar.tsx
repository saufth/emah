// Components
import CallToAction from './CallToAction'
import Image from 'next/image'
import NextLink from 'next/link'
import Menu from './Menu'
import MenuButton from '../input/MenuButton'
import Nav from './Nav'
// Animation
import { useCycle } from 'framer-motion'
// Styles
import styles from '../../styles/navigation/Navbar.module.css'

/**
 * The main navbar of application
 * @returns Navbar component
 */
const Navbar = () => {
  // Animation
  const [isOpen, toggle] = useCycle(false, true)
  /** Handle the Menu state */
  const handleToggle = () => { toggle() }
  /** Close the Menu but not open */
  const closeToggle = () => { isOpen && toggle() }

  return (
    <>
      <header className={styles.navbar}>
        <div>
          <NextLink href='/' onClick={closeToggle}>
            <div className={styles.logo}>
              <Image
                alt='emah logomark'
                src='/images/logotype/logomark.svg'
                width={64}
                height={48}
                priority
                className={styles.logomark}
              />
              <span className={styles.slogan}>
                Endless Posibilities
              </span>
            </div>
          </NextLink>
        </div>

        <div className={styles.options}>
          <div className={styles.nav}>
            {isOpen
              ? <CallToAction />
              : <Nav primary />}
          </div>
          {isOpen
            ? <div className={styles.close} onClick={handleToggle}>X</div>
            : <MenuButton action={handleToggle} />}
        </div>
      </header>
      <Menu isOpen={isOpen} action={handleToggle} />
    </>
  )
}

export default Navbar
