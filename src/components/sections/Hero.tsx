// Components
import Container from '../../core/components/layout/Container'
import Image from 'next/image'
// Media import imageHero from '../../../public/images/sections/hero.jpg'
// Styles
import styles from '../../styles/sections/Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container alignment='center' fullHeight>

        <Image
          alt='emah'
          src='/images/logotype/logotype.svg'
          width={360}
          height={106}
          className={styles.logotype}
          priority
        />

        <div className={styles.message}>
          <span className='text-emah-blue'>dev@emah</span>
          <span className='text-emah-orange'>{'> '}</span>
          <span className='text-emah-blue-dark'>building...</span>
        </div>

      </Container>
    </section>
  )
}

export default Hero
