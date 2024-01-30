import Link from 'next/link'
import { Icons } from '@/components/icons'
import {
  contactEmail,
  siteConfig,
  siteNav
} from '@/config/site'

export default function SiteFooter () {
  return (
    <footer className='mt-spacing-7 border-t '>
      <div className='container py-spacing-4 lg:flex lg:justify-between space-y-4 lg:space-y-0'>
        <nav className='flex items-center gap-x-4'>
          <Link href='/'>
            <Icons.Logomark className='w-auto h-8 fill-primary first:[&>path]:fill-emah' />
            <span className='sr-only'>{siteConfig.name}</span>
          </Link>
          <ul className='flex items-center gap-x-3'>
            {siteNav.map((navItem, key) => (
              <li key={key}>
                <Link className='text-base xl:text-lg' href={navItem.href}>
                  {navItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <Link className='text-base xl:text-lg' href={`mailto:${contactEmail}`}>
            {contactEmail}
          </Link>
        </div>
      </div>
      <div>
        <div className='container mt-spacing-9 pb-spacing-4'>
          <span className='text-muted-foreground pt-spacing-9'>
            {`${siteConfig.name} © ${new Date().getFullYear()}`}
          </span>
        </div>
      </div>
    </footer>
  )
}
