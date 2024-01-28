import Image from 'next/image'
import Link from 'next/link'
import BackgroundVideo from '@/components/background-video'
import { Button } from '@/components/ui/button'
import { services } from '@/config/services'
import { siteConfig, siteNav } from '@/config/site'
import { culture, filosophy } from '@/config/organization'

const contactLink = siteNav.find(({ title }) => title === 'Contáctanos')!

export default function IndexPage () {
  return (
    <>
      <section>
        <div className='w-full h-[100dvh] min-h-[500xp] lg:min-h-[600px] max-h-[1000px] relative z-10 -mt-[68px] lg:-mt-[84px] flex flex-col justify-center'>
          <div className='container relative z-10'>
            <div className='w-6-cols md:w-8-cols'>
              <h1 className='f-display-2 max-w-[322px] xs:max-w-none text-white'>
                {siteConfig.slogan}
              </h1>
              <p className='f-subhead-1 mt-spacing-4 text-white'>
                {siteConfig.description}.
              </p>
              <Button
                className='mt-spacing-6 border-white hover:bg-white text-white hover:text-black'
                size='lg'
                asChild
              >
                <Link href={contactLink.href}>
                  {contactLink.title}
                </Link>
              </Button>
            </div>
          </div>
          <BackgroundVideo src='/video/home-hero.mp4' />
        </div>
      </section>
      <section id='soluciones' className='mt-spacing-7'>
        <div className='container'>
          <div>
            <h2 className='f-heading-1 md:pr-9 lg:pr-11'>
              {services.title}
            </h2>
            {services.description && (
              <p className='f-subhead-1 mt-spacing-4 max-w-6xl'>
                {services.description}
              </p>
            )}
            {services.image && (
              <div className='full-bleed-container mt-spacing-7'>
                <Image
                  src={services.image.src}
                  alt={services.image.alt}
                  width={1024}
                  height={1024}
                  sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                  loading='lazy'
                  className='w-full'
                />
              </div>
            )}
          </div>
          <div className='cols-container mt-spacing-4'>
            {services.items.map((serviceItem, key) => (
              <article className='w-8-cols md:w-4-cols lg:w-6-cols xl:w-4-cols mt-spacing-6' key={key}>
                <div>
                  <Image
                    src={serviceItem.image.src}
                    alt={serviceItem.image.alt}
                    width={1260}
                    height={840}
                    sizes='(max-width: 744px) 100vw, (max-width: 1280px) 50vw, 500px'
                    loading='lazy'
                  />
                </div>
                <div className='mt-2'>
                  <h3 className='f-subhead-1 font-medium'>
                    {serviceItem.title}
                  </h3>
                  {serviceItem.description && (
                    <div className='mt-2'>
                      <p className='f-body-1 text-muted-foreground'>
                        {serviceItem.description}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className='mt-spacing-9'>
        <div className='container'>
          <div>
            <h2 className='f-heading-1 md:pr-9 lg:pr-11'>
              {filosophy.title}
            </h2>
            {filosophy.description && (
              <p className='f-subhead-1 mt-spacing-4 max-w-6xl'>
                {filosophy.description}
              </p>
            )}
            {filosophy.image && (
              <div className='full-bleed-container mt-spacing-7'>
                <Image
                  src={filosophy.image.src}
                  alt={filosophy.image.alt}
                  width={1024}
                  height={1024}
                  sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                  loading='lazy'
                  className='w-full'
                />
              </div>
            )}
          </div>
          <div className='space-y-40 mt-spacing-7'>
            {filosophy.items.map((filosophyItem, key) => (
              <div className='cols-container items-center mt-spacing-3 even:flex-row-reverse' key={key}>
                <div className='w-6-cols sm:w-4-cols lg:w-6-cols relative'>
                  <div className='max-w-lg'>
                    <h3 className='f-subhead-1'>
                      {filosophyItem.title}
                    </h3>
                    {filosophyItem.description && (
                      <p className='mt-4 text-p3'>
                        {filosophyItem.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className='w-6-cols sm:w-4-cols lg:w-6-cols mt-10 sm:mt-0'>
                  <Image
                    src={filosophyItem.image.src}
                    alt={filosophyItem.image.alt}
                    width={filosophyItem.image.width}
                    height={filosophyItem.image.height}
                    sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                    loading='lazy'
                    className='w-full'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id='soluciones' className='mt-spacing-9'>
        <div className='container'>
          <div>
            <h2 className='f-heading-1 md:pr-9 lg:pr-11'>
              {culture.title}
            </h2>
            {culture.description && (
              <p className='f-subhead-1 mt-spacing-4 max-w-6xl'>
                {culture.description}
              </p>
            )}
            {culture.image && (
              <div className='full-bleed-container mt-spacing-7'>
                <Image
                  src={culture.image.src}
                  alt={culture.image.alt}
                  width={1024}
                  height={1024}
                  sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                  loading='lazy'
                  className='w-full'
                />
              </div>
            )}
          </div>
          <div className='cols-container mt-spacing-4'>
            {culture.items.map((cultureItem, key) => (
              <article className='w-8-cols md:w-4-cols lg:w-6-cols xl:w-4-cols mt-spacing-6' key={key}>
                <div className='w-24'>
                  <Image
                    src={cultureItem.image.src}
                    alt={cultureItem.image.alt}
                    width={cultureItem.image.width}
                    height={cultureItem.image.height}
                    loading='lazy'
                  />
                </div>
                <div className='mt-2'>
                  <h3 className='f-subhead-1 font-medium'>
                    {cultureItem.title}
                  </h3>
                  {cultureItem.description && (
                    <div className='mt-2'>
                      <p className='f-body-1 text-muted-foreground'>
                        {cultureItem.description}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
