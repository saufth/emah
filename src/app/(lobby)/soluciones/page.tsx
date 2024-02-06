import { type Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: 'Soluciones',
  description: siteConfig.description
}

export default function SolucionesPage () {
  return (
    <section className='container'>
      <h1>En construción..</h1>
    </section>
  )
}
