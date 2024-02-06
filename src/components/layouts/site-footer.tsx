import NextLink from 'next/link'
import { CallToAction } from '@/components/call-to-action'
import { Icons } from '@/components/icons'
import { Link } from '@/components/ui/link'
import SocialNav from '@/components/social-nav'
import { contactEmail, siteConfig, siteNav } from '@/config/site'

export default function SiteFooter () {
  return (
    <footer className='mt-spacing-7 border-t pb-spacing-8 sm:pb-spacing-9 pt-spacing-4'>
      <div className='container-sm sm:flex sm:justify-between'>
        <nav className='flex flex-col gap-4'>
          <div className='flex gap-x-2'>
            <NextLink href='/'>
              <Icons.Logoname className='w-auto h-6 sm:h-7 fill-primary first:[&>path]:fill-emah' />
              <span className='sr-only'>{siteConfig.name}</span>
            </NextLink>
            <span className='text-lg leading-none sm:text-xl sm:leading-none text-bold'>
              {`© ${new Date().getFullYear()}`}
            </span>
          </div>
          <ul className='flex flex-col gap-y-3 sm:gap-y-4'>
            {siteNav.map((navItem, key) => (
              <li key={key}>
                {key < siteNav.length - 1
                  ? (
                    <Link href={navItem.href} className='text-base lg:text-lg'>
                      {navItem.title}
                    </Link>
                    )
                  : (
                    <CallToAction className='mt-1.5' size='default' />
                    )}
              </li>
            ))}
          </ul>
        </nav>
        <div className='mt-spacing-7 sm:mt-0'>
          <div className='text-sm sm:text-base text-muted-foreground'>
            Correo electrónico
          </div>
          <Link className='text-lg lg:text-xl underline px-0' href={`mailto:${contactEmail}`}>
            {contactEmail}
          </Link>
          <div className='mt-spacing-4'>
            <SocialNav />
          </div>
        </div>
      </div>
    </footer>
  )
}
