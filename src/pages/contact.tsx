// Components
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'
import SmoothLayout from '../components/layout/SmoothLayout'
// Styles
import styles from '../styles/pages/ContactPage.module.css'

/**
* Contact page
* @returns The Contact page component
*/
const ContactPage = () => {
  return (
    <SmoothLayout>
      <main>
        <div className={styles.header}>
          <h1 className={styles.heading}>
            ¿Tienes algun proyecto en mente?
          </h1>
          <p className={styles.description}>
            Pongamonos en contacto
          </p>
        </div>
        <Contact />
      </main>
      <Footer />
    </SmoothLayout>
  )
}

export default ContactPage
