// Components
import CallToAction from './CallToAction'
import NextLink from 'next/link'
// Types
import { LinkProps, NavProps } from '../../types/navigation'
// Styles
import styles from '../../styles/navigation/Nav.module.css'

/** The navigation configuration */
const navConfig: LinkProps[] = [
  {
    children: 'Home',
    href: '/'
  },
  {
    children: 'About us',
    href: '/about'
  },
  {
    children: 'Services',
    href: '/services'
  },
  {
    children: 'Contact',
    href: '/contact'
  }
]

/**
* The main navigation of the application
* @see {@link NavProps} for props definition
* @param {NavProps} NavProps The nav component props
* @returns The Nav component
*/
const Nav = ({ primary }: NavProps) => {
  const navOptions = primary ? navConfig.slice(0, -1) : navConfig

  return (
    <nav aria-label='Directorio emah' className={styles.nav}>
      {navOptions.map((option, key) => {
        return (
          <NextLink href={option.href} key={key}>
            {option.children}
          </NextLink>
        )
      })}
      {primary ? (<CallToAction />) : null}
    </nav>
  )
}

export default Nav
