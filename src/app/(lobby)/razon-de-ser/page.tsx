import { type Metadata } from 'next'
import Image from 'next/image'
import { CallToAction } from '@/components/call-to-action'
import { history } from '@/config/organization'

export const metadata: Metadata = {
  metadataBase: new URL(String(process.env.NEXT_PUBLIC_APP_URL)),
  title: 'Razón de ser',
  description: 'Generamos estrategias 100% enfocadas en las necesidades reales del cliente'
}

export default function ReazonPage () {
  return (
    <>
      <section>
        <div className='container-sm pt-spacing-6'>
          <div className='text-center'>
            <h1 className='f-display-3 text-balanced'>
              <span className='text-gradient'>
                Generamos estrategias 100% enfocadas en las necesidades reales del cliente
              </span>
            </h1>
          </div>
        </div>
        <div className='full-bleed-container mt-spacing-7'>
          <Image
            src='/images/reazon-hero.webp'
            alt='Camión blanco conduciendo por la carretera serpenteando a través de un paisaje boscoso en colores otoñales al atardecer'
            width={1920}
            height={1080}
            sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
            loading='lazy'
            className='w-full 3xl:rounded-3xl'
          />
        </div>
      </section>
      {/* <section className='container-sm mt-spacing-7'>
        <div className='text-center'>
          <h2>
            <span className='f-heading-1 font-bold text-gradient'>
              ¿Qué nos diferencia?
            </span>
          </h2>
          <p className='f-subhead-2 text-muted-foreground text-balanced mt-spacing-3'>
            Un buen producto se define por una serie de características y cualidades que lo hacen
            deseable, útil y valioso para los consumidores. Aquí están algunos de los
            elementos clave que definen un buen producto.
          </p>
        </div>
        <div className='cols-container gap-y-gutter mt-spacing-6'>
          {filosophy.map((item, key) => (
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
      </section> */}
      <section className='container-sm mt-spacing-7 space-y-8'>
        <div className='space-y-5'>
          <h2 className='f-heading-1'>
            {history.title}
          </h2>
          <div className='space-y-4'>
            {typeof history.description === 'string'
              ? (
                <p className='f-subhead-2 text-muted-foreground'>
                  {history.description}
                </p>
                )
              : (
                  history.description && history.description.map((item, key) => (
                    <div className='space-y-4' key={key}>
                      <p className='f-subhead-2 text-muted-foreground'>
                        {item}
                      </p>
                    </div>
                  ))
                )}
          </div>
        </div>
        {history.items.map((historyItem, key) => (
          <div className='space-y-5' key={key}>
            <p className='f-heading-2'>
              {historyItem.title}
            </p>
            <div className='space-y-4'>
              {typeof historyItem.description === 'string'
                ? (
                  <p className='f-subhead-2 text-muted-foreground'>
                    {historyItem.description}
                  </p>
                  )
                : (
                    historyItem.description && historyItem.description.map((item, key) => (
                      <div className='space-y-4' key={key}>
                        <p className='f-subhead-2 text-muted-foreground' key={key}>
                          {item}
                        </p>
                      </div>
                    ))
                  )}
            </div>
          </div>
        ))}
        <div className='w-full justify-center mt-spacing-5 flex flex-col sm:flex-row gap-4'>
          <CallToAction />
          {/* <CallToServices /> */}
        </div>
      </section>
    </>
  )
}
