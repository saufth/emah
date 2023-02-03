// Types
import { Actionable } from '../../types/input'
// Styles
import styles from '../../styles/input/MenuButton.module.css'

/**
* The main menu button of the application
* @see {@link Actionable} for props definition
* @param {Actionable} Actionable The basic input component props
* @returns The MenuButton component
*/
const MenuButton = ({ action }: Actionable) => {
  return (
    <button className={styles.button} onClick={action}>
      <span />
      <span />
    </button>
  )
}

export default MenuButton
