// React
import { useRef } from 'react'
// Hooks
import usePhysics from '../../modules/animation/hooks/usePhysics'
import useDimensions from '../../modules/sizing/hooks/useDimensions'
// Animation
import { useScroll, useTransform, useSpring, motion } from 'framer-motion'
// Types
import { ParentProps } from '../../types/layout'
// Styles
import styles from '../../styles/layout/SmoothLayout.module.css'

/**
 * A scrolleable container with ease effect
 * @see {@link ParentProps} for props definitions
 * @param {ParentProps} ParentProps The child elements
 * @returns The Home page layout component
 */
const SmoothLayout = ({ children }: ParentProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { height } = useDimensions(scrollRef.current)
  // Scroll animation
  const { scrollY } = useScroll()
  const physics = usePhysics()
  const containerTransform = useTransform(scrollY, [0, height], [0, -height])
  const containerSpring = useSpring(containerTransform, physics)

  return (
    <>
      <motion.div
        className={styles.scrollable}
        style={{ y: containerSpring }}
        ref={scrollRef}
      >
        {children}
      </motion.div>

      <div style={{ height }} />
    </>
  )
}

export default SmoothLayout
