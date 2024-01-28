import { type Metadata } from 'next'
import Image from 'next/image'
import { history } from '@/config/organization'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: `Conócenos – ${siteConfig.slogan}.`,
  description: siteConfig.description
}

export default function HistoriaPage () {
  return (
    <>
      <div className='w-full h-[68px] lg:h-[84px] fixed top-0 left-0 bg-black z-20' />
      <section>
        <div className='container pt-spacing-7'>
          <div className='cols-container pt-spacing-3'>
            <div className='w-6-cols md:w-4-cols lg:w-6-cols'>
              <h1 className='f-display-2 md:pr-9 lg:pr-11'>
                {history.title}
              </h1>
            </div>
          </div>
        </div>
        <div className='full-bleed-container mt-spacing-7'>
          <Image
            src='/images/history-hero.webp'
            alt='Camión blanco conduciendo por la carretera serpenteando a través de un paisaje boscoso en colores otoñales al atardecer'
            width={3200}
            height={2400}
            sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
            loading='lazy'
            className='w-full'
          />
        </div>
        <div className='container mt-spacing-7'>
          {history.items.map((historyItem, key) => (
            <p className='f-subhead-2 mt-spacing-3' key={key}>
              {historyItem}
            </p>
          ))}
        </div>
      </section>
    </>
  )
}
