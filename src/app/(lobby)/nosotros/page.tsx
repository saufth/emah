import { type Metadata } from 'next'
import Image from 'next/image'
import { CallToAction, CallToPurpose } from '@/components/call-to-action'
import { InfoCard } from '@/components/cards/info-card'
import { culture } from '@/config/organization'

const aboutHeading = 'Un legado de progreso para el mundo y futuras generaciones'

export const metadata: Metadata = {
  metadataBase: new URL(String(process.env.NEXT_PUBLIC_APP_URL)),
  title: 'Nosotros',
  description: aboutHeading
}

export default function AboutPage () {
  return (
    <>
      <section>
        <div className='container-sm pt-spacing-6'>
          <div className='text-center'>
            <h1 className='f-display-3 text-balanced'>
              <span className='text-gradient'>
                {aboutHeading}
              </span>
            </h1>
          </div>
        </div>
        <div className='full-bleed-container mt-spacing-7'>
          <Image
            src='/images/about-hero.webp'
            alt='Camión blanco conduciendo por la carretera serpenteando a través de un paisaje boscoso en colores otoñales al atardecer'
            width={1920}
            height={1080}
            sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
            loading='lazy'
            className='w-full 3xl:rounded-3xl'
          />
        </div>
      </section>
      <section className='container-sm mt-spacing-7'>
        <div className='text-center'>
          <h2>
            <span className='f-heading-1 font-bold text-gradient'>
              Nuestra cultura
            </span>
          </h2>
          <p className='f-subhead-2 text-muted-foreground text-balanced mt-spacing-3'>
            El <b>éxito a corto, mediano y largo plazo</b> de cualquier empresa, no depende de un solo aspecto, sino de la
            sincronización de muchos. Aquí te presentamos los más importantes para nosotros, mismos que forman parte
            de nuestro <b>ADN</b> y que son la clave en la generación de <b>soluciones de valor para nuestros clientes</b>.
          </p>
        </div>
        <div className='cols-container gap-y-gutter mt-spacing-6'>
          {culture.map((item, key) => (
            <InfoCard className='w-6-cols sm:w-8-cols lg:w-4-cols' card={item} key={key} />
          )
          )}
        </div>
        <div className='container-sm mt-spacing-6'>
          <div className='f-subhead-2 text-muted-foreground text-center text-balanced'>
            Nos apasiona crear <b>posibilidades infinitas</b> que <b>generen valor a sus modelos de negocio</b> para que,
            día con día, se vuelvan más competitivos y evolutivos al transcurso de las generaciones.
          </div>
          <div className='w-full justify-center mt-spacing-5 flex flex-col sm:flex-row gap-4'>
            <CallToAction />
            <CallToPurpose />
          </div>
        </div>
      </section>
    </>
  )
}
