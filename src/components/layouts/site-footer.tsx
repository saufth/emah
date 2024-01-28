import NextLink from 'next/link'
import { Icons } from '@/components/icons'
import { Link } from '@/components/ui/link'
import {
  contactEmail,
  siteConfig,
  siteNav
} from '@/config/site'

export default function SiteFooter () {
  return (
    <footer className='pb-spacing-7 mt-spacing-7 border-t '>
      <div className='container pt-spacing-3 lg:flex lg:justify-between space-y-4 lg:space-y-0'>
        <nav className='space-y-1'>
          <div className='flex items-center gap-x-1'>
            <NextLink href='/'>
              <Icons.Logoname className='w-auto h-4 fill-primary' />
              <span className='sr-only'>{siteConfig.name}</span>
            </NextLink>
            <span className='text-lg'>
              {`© ${new Date().getFullYear()}`}
            </span>
          </div>
          <ul className='space-y-0.5'>
            {siteNav.map((navItem, key) => (
              <li key={key}>
                <Link size='xs' className='text-base xl:text-lg' href={navItem.href}>
                  {navItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <div className='text-xs sm:text-sm text-muted-foreground'>
            Correo electrónico
          </div>
          <Link size='xs' className='text-base xl:text-lg' href={`mailto:${contactEmail}`}>
            {contactEmail}
          </Link>
        </div>
      </div>
    </footer>
  )
}
