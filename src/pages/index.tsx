// Components
import About from '../components/sections/About'
import Footer from '../components/sections/Footer'
import SmoothLayout from '../components/layout/SmoothLayout'
import CallToAction from '../components/navigation/CallToAction'
import Link from '../components/navigation/Link'
import Image from 'next/image'
// Types
import { AboutProps } from '../types/sections'
// Styles
import styles from '../styles/pages/HomePage.module.css'

/** About section configuration */
const aboutConfig: AboutProps = {
  link: '/services',
  description: '"Impulsamos empresas con visión, a fin de crear un legado de progreso y verdad."',
  showcases: [
    {
      heading: 'Marketing',
      descriptions: ['Impulsamos a las marcas a la dirección adecuada. Creamos lazos de alianza con negocios que buscan crecimiento. Los que buscan un cambio para progresar. Ayudamos a recuperar atención en los medios, lograr sus metas y asegurar un crecimiento exponencial. Y solo es el comienzo...'],
      image: 'marketing'
    },
    {
      heading: 'Branding',
      descriptions: ['Construimos marcas sobresalientes, creamos el ADN de marca y desarrollamos sistemas funcionales de comunicación visual. Le damos forma al carácter de tu marca, una imagen atractiva y una identidad única. Ademas, renovamos marcas existentes.'],
      image: 'branding'
    },
    {
      heading: 'Development',
      descriptions: ['Creemos que una página web le da cuerpo a la identidad de tu marca. Es por eso que desarrollamos sistemas responsivos con un propósito mas grande que solo informar. Buscamos crear sitios web que sean reactivos al cambio, generen una experiencia positiva y mueva tus emociones.'],
      image: 'development'
    },
    {
      heading: 'Design',
      descriptions: ['No es tan simple con solo tener un logo. Para ser distinguido, es necesario establecer algunos parámetros que se usen siempre, un concepto de diseño. Definimos elementos visuales, colores y tipografía. Creamos presentaciones visuales únicas y consistentes para marcas sobresalientes.'],
      image: 'design'
    }
  ]
}

/**
 * The main page of the application
 * @returns HomePage component
 */
const HomePage = () => {
  return (
    <SmoothLayout>
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <header className={styles.heroHeader}>
              <h1>
                <span className={styles.textHighlighted}>Hacemos</span> marketing estratégico
              </h1>
              <p className={styles.heroDescription}>
                Great branding + Great apps + Great code = Explosive Results.
              </p>
            </header>
            <div className={styles.heroOptions}>
              <CallToAction large />
              <div className={styles.heroLink}>
                <Link href='/about'>
                  About us
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.heroImageWrap}>
            <Image
              alt='emah marketing solutions'
              src='/images/sections/hero/home.png'
              width={640}
              height={640}
              className={styles.heroImage}
            />
          </div>
        </section>
        <About {...aboutConfig} />
      </main>
      <Footer />
    </SmoothLayout>
  )
}

export default HomePage
