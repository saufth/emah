// Components
import Image from 'next/image'
// Types
import { IconProps } from '../../types/data-display'
// Styles
// import styles from '../../styles/data-display/IconProps.module.css'

/**
* Using to display a simple icon
* @see {@link IconProps} for props definition
* @param {IconProps} IconProps The Icon component porps
* @returns The Icon component
*/
const Icon = ({ icon }: IconProps) => {
  const iconPath = `/images/icons/${icon}.svg`

  return (
    <Image
      src={iconPath}
      alt={icon}
      title={icon}
      width={24}
      height={24}
    />
  )
}

export default Icon
