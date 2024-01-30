import dynamic from 'next/dynamic'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Icons } from '@/components/icons'
import Video from '@/components/cards/card-video'
import { benefist, howWeMake } from '@/config/organization'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import { services } from '@/config/services'

const Meteors = dynamic(() => import('@/components/meteors'), { ssr: false })

const iconStyles = [
  '[&>#nodes]:hidden [&>#vertex]:hidden',
  '[&>#vertex]:hidden',
  ''
]

export default function IndexPage () {
  return (
    <>
      <div className='dark:bg-gradient-to-b dark:from-black dark:via-zing-950 dark:to-background'>
        <section className='container mx-auto mt-spacing-6 relative z-10'>
          <div className='flex flex-col items-center gap-y-8'>
            <Badge className='lg:py-1 rounded-2xl' variant='outline'>
              <div className='flex gap-x-1 items-center'>
                <span className='text-emah text-sm lg:text-base lg:font-medium'><span><span className='text-muted-foreground'>-</span>mkt</span><span className='text-muted-foreground'>+</span>hacks <span className='text-muted-foreground'>=</span></span>
                <Icons.Proposal className='w-3 lg:w-4 h-auto fill-emah' />
              </div>
            </Badge>
            <div className='max-w-md sm:max-w-xl lg:max-w-3xl font-cairo text-center space-y-8'>
              <h1 className='relative f-display-1'>
                <span className='relative'>
                  <Icons.Doodle className='w-auto h-20 sm:h-28 lg:h-32 fill-emah absolute top-1 lg:top-2 my-auto -left-9 sm:-left-16 lg:-left-20 -z-10' />
                  <span className='text-gradient px-px text-balanced'>
                    {siteConfig.slogan}
                  </span>
                </span>
              </h1>
              <p className='f-subhead-1 text-muted-foreground text-balanced'>
                Impulsamos a emprendedores y empresarios a consolidar su modelo de negocio, ofreciendo productos intangibles de alto valor agregado para sus clientes.
              </p>
            </div>
            <Button className='mt-2 sm:mt-4' color='primary' size='full'>
              Contáctanos
            </Button>
          </div>
          <div className='w-full h-full absolute top-0 overflow-hidden'>
            <Meteors />
          </div>
        </section>
        <section className='container mt-spacing-8 pb-spacing-7'>
          <div className='text-center'>
            <h2>
              <span className='f-heading-1 font-bold text-gradient'>
                {howWeMake.title}
              </span>
            </h2>
            <p className='max-w-3xl mx-auto f-subhead-2 text-muted-foreground text-balanced mt-spacing-3'>
              {howWeMake.description}
            </p>
          </div>
          <div className='cols-container gap-y-4 sm:gap-y-5 mt-spacing-5'>
            {howWeMake.items.map((item, key) => (
              <Card as='article' className='w-6-cols sm:w-1/3-cols lg:w-4-cols border dark:border-zinc-700 dark:bg-zinc-950 px-0 py-0 sm:p-0' key={key}>
                <div className='w-full h-full rounded-[9px]'>
                  <CardHeader>
                    <div className='w-full p-8 md:p-10 lg:p-12'>
                      <Icons.Proposal className={cn('w-full h-auto fill-emah', iconStyles[key])} />
                    </div>
                  </CardHeader>
                  <CardContent className='space-y-2 p-4'>
                    <h3 className='f-heading-3 font-semibold'>
                      {item.title}
                    </h3>
                    <p className='f-body-1 text-muted-foreground'>
                      {item.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            )
            )}
          </div>
          <div className='cols-container gap-y-4 sm:gap-y-5 mt-spacing-4'>
            {benefist.items.map((item, key) => (
              <Card as='article' className='w-6-cols sm:w-1/3-cols lg:w-4-cols border dark:border-zinc-700 dark:bg-zinc-900' key={key}>
                <div className='w-full h-full rounded-[9px]'>
                  <CardHeader>
                    <h3 className='f-subhead-2 font-semibold'>
                      {item.title}
                    </h3>
                  </CardHeader>
                  <CardContent className='mt-spacing-2'>
                    <p className='f-body-1 text-muted-foreground'>
                      {item.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            )
            )}
            <Card as='article' className='w-6-cols sm:w-2/3-cols lg:w-8-cols border dark:border-zinc-700 dark:bg-zinc-950'>
              <div className='w-full h-full rounded-[9px]'>
                <CardHeader>
                  <h3>
                    <span className='f-heading-3 font-bold text-gradient'>
                      {benefist.title}
                    </span>
                  </h3>
                </CardHeader>
                <CardContent className='mt-spacing-2'>
                  <p className='f-subhead-3 text-muted-foreground text-balanced'>
                    {benefist.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      </div>
      <section className='pt-spacing-7 border-t'>
        <div className='container'>
          <div className='text-center'>
            <h2>
              <span className='f-heading-1 font-bold text-gradient'>
                {services.title}
              </span>
            </h2>
            <Badge className='mt-spacing-6 border-none' variant='outline'>
              <div className='flex gap-x-1 items-center'>
                <span className='text-emah text-lg lg:text-xl lg:font-medium'><span><span className='text-muted-foreground'>-</span>mkt</span><span className='text-muted-foreground'>+</span>hacks <span className='text-muted-foreground'>=</span></span>
                <Icons.Proposal className='w-5 lg:w-6 h-auto fill-emah' />
              </div>
            </Badge>
          </div>
          <div className='cols-container gap-y-4 sm:gap-y-5 mt-spacing-6'>
            {services.items.map((item, key) => (
              <Card as='article' className='w-6-cols sm:w-8-cols lg:w-4-cols border dark:bg-zinc-950 dark:border-zinc-700 py-1 px-1 sm:p-1' key={key}>
                <div className='w-full h-full rounded-lg dark:bg-gradient-to-t dark:from-zinc-950 dark:to-muted py-6 px-8 sm:p-8'>
                  <CardHeader>
                    <Badge className='bg-zinc-950' variant='outline'>
                      <span className='text-emah text-xs lg:text-sm lg:font-medium'>
                        {item.label}
                      </span>
                    </Badge>
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
        </div>
      </section>
      <div className='container mt-spacing-7'>
        <div className='f-subhead-2 text-muted-foreground text-center text-balanced'>
          Te ayudamos a <b>identificar a tus clientes ideales</b>, crear una solución relevante para tus consumidores,
          estructurar tus precios, diseñamos los materiales impresos o digitales y <b>desarrollamos la marca</b>{' '}
          necesaria para lanzar tu nuevo negocio competitivo y rentable al mundo.
        </div>
        <div className='w-fit mx-auto mt-spacing-4'>
          <Button className='mt-2 sm:mt-4' color='primary' size='full'>
            Contáctanos
          </Button>
        </div>
      </div>
      <Video />
    </>
  )
}
