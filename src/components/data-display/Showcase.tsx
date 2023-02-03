// Components
import CallToAction from '../navigation/CallToAction'
// Types
import { ShowcaseProps } from '../../types/data-display'
// Styles
import styles from '../../styles/data-display/Showcase.module.css'
import Link from '../navigation/Link'

/**
 * Using to show a image with a heading and descriptions
 * @see {@link ShowcaseProps} for props specifications
 * @param {ShowcaseProps} ShowcaseProps The component props
 * @returns The Showcase component
 */
const Showcase = (
  {
    heading,
    descriptions,
    image,
    action,
    link,
    large,
    reverse
  }: ShowcaseProps
) => {
  // Reverse
  const containerStyle = `${styles.container} ${reverse ? styles.containerReverse : ''}`
  const demoStyle = `${styles.demo} ${reverse ? styles.demoReverse : ''} ${large ? styles.demoLarge : ''}`
  const imageContainerStyle = `${styles.imageContainer} ${reverse ? styles.imageContainerReverse : ''}`
  // Image
  const imageStyle = `${styles.image}`
  const backgroundImageStyle = { backgroundImage: `url(/images/sections/${image}.jpg)` }

  return (
    <section className={containerStyle}>

      <div>
        <div className={demoStyle}>
          <div className={styles.header}>
            <h2>
              {heading}
            </h2>
            <div className={styles.descriptions}>
              {descriptions.map((description, key) => (
                <p key={key}>
                  {description}
                </p>
              ))}
            </div>
          </div>
          <div className={styles.action}>
            {action
              ? <CallToAction large />
              : link ? <Link href={link}>Saber más</Link> : null}
          </div>
        </div>
      </div>

      <div>
        <div className={imageContainerStyle}>
          <div className={imageStyle} style={backgroundImageStyle} />
        </div>
      </div>

    </section>
  )
}

export default Showcase
