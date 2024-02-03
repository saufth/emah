import { type Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { culture } from '@/config/organization'
import { siteConfig, siteNav } from '@/config/site'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Icons } from '@/components/icons'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: `Nosotros – ${siteConfig.slogan}.`,
  description: siteConfig.description
}

const contactLink = siteNav.find(({ href }) => href === '/contacto')!

export default function AboutPage () {
  return (
    <>
      <section>
        <div className='container-sm pt-spacing-6'>
          <div className='text-center'>
            <h1 className='f-display-3 text-balanced'>
              <span className='text-gradient'>
                Un legado de progreso para el mundo y futuras generaciones
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
              {culture.title}
            </span>
          </h2>
          <p className='f-subhead-2 text-muted-foreground text-balanced mt-spacing-3'>
            {culture.description}
          </p>
        </div>
        <div className='cols-container gap-y-gutter mt-spacing-6'>
          {culture.items.map((item, key) => (
            <Card as='article' className='w-6-cols sm:w-8-cols lg:w-4-cols border dark:bg-zinc-950 dark:border-zinc-700 py-1 px-1 sm:p-1' key={key}>
              <div className='w-full h-full rounded-lg dark:bg-gradient-to-t dark:from-zinc-950 dark:to-muted py-6 px-8 sm:p-8'>
                <CardHeader>
                  <h3 className='f-subhead-2 font-semibold'>
                    {item.title}
                  </h3>
                </CardHeader>
                <CardContent className='mt-spacing-2'>
                  {typeof item.description === 'string'
                    ? (
                      <p className='f-body-1 text-muted-foreground'>
                        {item.description}
                      </p>
                      )
                    : item.description && (
                      <>
                        {item.description.map((description, key) => (
                          <p className='f-body-1 text-muted-foreground mt-spacing-2' key={key}>
                            {description}
                          </p>
                        ))}
                      </>
                    )}
                </CardContent>
              </div>
            </Card>
          )
          )}
        </div>
        <div className='container-sm mt-spacing-6'>
          <div className='f-subhead-2 text-muted-foreground text-center text-balanced'>
            <b>Anti-Marketing</b> propone que un producto o servicio que realmente resuelva un problema de raíz y un branding dinámico es suficiente para <b>aportar valor</b> y asegurar la rentabilidad a largo plazo.
          </div>
          <div className='flex justify-center mx-auto mt-spacing-4'>
            <Button size='full' asChild>
              <Link href={contactLink.href} className='font-semibold flex items-center gap-x-0.5'>
                {contactLink.title}
                <Icons.ArrowUpRight className='w-5 h-5 stroke-secondary' />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
