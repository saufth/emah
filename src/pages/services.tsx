// Components
import About from '../components/sections/About'
import Footer from '../components/sections/Footer'
import Header from '../components/sections/Header'
import SmoothLayout from '../components/layout/SmoothLayout'
// Types
import { AboutProps } from '../types/sections'

/** About section configuration */
const aboutConfig: AboutProps = {
  action: true,
  showcases: [
    {
      heading: 'Marketing',
      descriptions: [
        'Análisis y estrategia',
        'Campañas eficientes y creativas (Inbound & outbound marketing)',
        'Marketing de contenidos',
        'Social & influencer marketing',
        'Performance marketing (SEO, SEM, SEA, PPC, Email marketing)'
      ],
      image: 'marketing'
    },
    {
      heading: 'Branding',
      descriptions: [
        'Naming',
        'Diseño de logo',
        'Identidad visual',
        'Identidad de marca',
        'Diseño de producto y empaque',
        'Brand culture',
        'Consultoría y capacitación'
      ],
      image: 'branding'
    },
    {
      heading: 'Development',
      descriptions: [
        'Front-end development',
        'Back-end development',
        'Mobile apps',
        'Landing page',
        'Consultoria y asesoria'
      ],
      image: 'development'
    }
  ]
}

/**
 * Services page
 * @returns ServicesPage component
 */
const ServicesPage = () => {
  return (
    <SmoothLayout>
      <main>
        <Header>
          Los mejores resultados se logran cuando la ejecución del branding
          y elmarketing empujan hacia el mismo destino.
        </Header>
        <About {...aboutConfig} />
      </main>
      <Footer />
    </SmoothLayout>
  )
}

export default ServicesPage
