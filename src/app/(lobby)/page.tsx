import { Badge } from '@/components/ui/badge'
import { CallToAction, CallToAbout, CallToServices, CallToPurpose } from '@/components/call-to-action'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Icons } from '@/components/icons'
import { SimpleCard } from '@/components/cards/simple-card'
import { ServiceCard } from '@/components/cards/service-card'
import Meteors from '@/components/meteors'
import Video from '@/components/cards/video-card'
import { cn } from '@/lib/utils'
import { benefist, howWeMake } from '@/config/organization'
import { services } from '@/config/services'

export default function IndexPage () {
  return (
    <>
      <div className='dark:bg-gradient-to-b dark:from-black dark:via-zing-950 dark:to-background relative z-10'>
        <section className='pb-spacing-8 relative z-10'>
          <div className='container-sm mx-auto flex flex-col items-center gap-y-8'>
            <Badge className='mt-spacing-6' variant='secondary'>
              <div className='flex gap-x-1 items-center'>
                <span className='text-emah text-sm lg:text-base lg:font-medium'>
                  <span>-mkt</span>+hacks<span> =</span>
                </span>
                <Icons.Proposal className='w-4 lg:w-5 h-auto fill-emah' />
              </div>
            </Badge>
            <div className='max-w-md sm:max-w-xl lg:max-w-5xl font-cairo text-center'>
              <h1 className='relative f-display-1'>
                <span className='relative'>
                  <Icons.Doodle className='w-auto h-20 sm:h-28 lg:h-32 fill-emah absolute top-1 lg:top-2 my-auto -left-9 sm:-left-16 lg:-left-16 -z-10' />
                  <span className='text-gradient'>
                    No necesitas más marketing
                  </span>
                </span>
              </h1>
              <p className='f-subhead-1 text-muted-foreground text-balanced mt-spacing-4'>
                Impulsamos a emprendedores y empresarios a consolidar su modelo de negocio, ofreciendo <b>productos intangibles de alto valor agregado</b> para sus clientes.
              </p>
            </div>
            <div className='w-full justify-center mt-2 sm:mt-4 flex flex-col sm:flex-row gap-4'>
              <CallToAction />
              <CallToAbout />
            </div>
          </div>
        </section>
        <section className='container-sm pb-spacing-7 relative z-10'>
          <div className='text-center'>
            <h2>
              <span className='f-heading-1 font-bold text-gradient'>
                ¿Cómo lo hacemos?
              </span>
            </h2>
            <p className='max-w-3xl mx-auto f-subhead-2 text-muted-foreground text-balanced mt-spacing-3'>
              Transformamos aquello que te hace único en <b>soluciones concretas</b> y de constante <b>valor agregado para el mercado</b>.
            </p>
          </div>
          <div className='cols-container gap-y-gutter mt-spacing-5'>
            {howWeMake.map((item, key) => {
              const iconStyles = ['[&>#nodes]:hidden [&>#vertex]:hidden', '[&>#vertex]:hidden', '']

              return (
                <Card as='article' className='w-6-cols sm:w-1/3-cols lg:w-4-cols border dark:border-zinc-700 dark:bg-zinc-950 px-0 py-0 sm:p-0' key={key}>
                  <div className='w-full h-full rounded-[9px]'>
                    <CardContent>
                      <div className='w-full p-8 md:p-10 lg:p-12'>
                        <Icons.Proposal className={cn('w-full h-auto fill-emah', iconStyles[key])} />
                      </div>
                    </CardContent>
                    <CardHeader className='p-4'>
                      <h3 className='f-heading-3 font-semibold'>
                        {item.title}
                      </h3>
                      <p className='f-body-1 text-muted-foreground mt-spacing-2'>
                        {item.description}
                      </p>
                    </CardHeader>
                  </div>
                </Card>
              )
            })}
          </div>
          <div className='cols-container gap-y-gutter mt-gutter'>
            {benefist.map((item, key) => (
              <SimpleCard className='w-6-cols sm:w-1/3-cols lg:w-4-cols' card={item} key={key} />
            ))}
            <Card as='article' className='w-6-cols sm:w-2/3-cols lg:w-8-cols border dark:border-zinc-700 dark:bg-zinc-950'>
              <div className='w-full h-full rounded-[9px]'>
                <CardHeader className='h-full flex items-center'>
                  <h3>
                    <span className='f-subhead-2 font-extralight'>
                      Siguiendo nuestra metologia de trabajo, no solo podras <b>definir con claridad tu propuesta de valor</b>,
                      sino que tambien la podras integrar e implementar de forma efectiva y eficiente, logrando asi
                      construir una <b>base solida para el exito</b> de tu empresa o negocio.
                    </span>
                  </h3>
                </CardHeader>
              </div>
            </Card>
          </div>
          <div className='w-full justify-center mt-spacing-5 flex flex-col sm:flex-row gap-4'>
            <CallToAction />
            <CallToPurpose />
          </div>
        </section>
        <div className='w-full h-1/2 absolute top-0 -z-10 overflow-hidden'>
          <Meteors />
        </div>
      </div>
      <section className='pt-spacing-7 border-t'>
        <div className='container-sm'>
          <div className='text-center'>
            <h2 className='text-balanced'>
              <span className='f-heading-1 font-bold text-gradient'>
                Planes a la medida de tus necesidades
              </span>
            </h2>
            <p className='mx-auto f-subhead-2 text-muted-foreground text-balanced mt-spacing-4'>
              El <b>anti-marketing</b> es el marketing que pone al <b>cliente en primer lugar</b>.
              En lugar de gastar dinero en publicidad, se enfoca en crear productos y servicios
              que tus clientes quieran compartir con sus amigos y familiares.
            </p>
          </div>
          <div className='cols-container gap-y-gutter mt-spacing-6'>
            {services.map((item, key) => (
              <ServiceCard className='w-6-cols sm:w-8-cols lg:w-4-cols' card={item} key={key} />
            ))}
          </div>
        </div>
        <div className='container-sm mt-spacing-6'>
          <div className='f-subhead-2 text-muted-foreground text-center text-balanced'>
            Te ayudamos a <b>identificar a tus clientes ideales</b>, crear una solución relevante para tus consumidores,
            estructurar tus precios, diseñamos los materiales impresos o digitales y <b>desarrollamos la marca</b>{' '}
            necesaria para lanzar tu nuevo negocio competitivo y rentable al mundo.
          </div>
          <div className='w-full justify-center mt-spacing-5 flex flex-col sm:flex-row gap-4'>
            <CallToAction />
            <CallToServices />
          </div>
        </div>
      </section>
      <Video />
    </>
  )
}
