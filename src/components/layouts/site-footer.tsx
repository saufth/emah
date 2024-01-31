import Link from 'next/link'
import { Icons } from '@/components/icons'
import {
  contactEmail,
  siteConfig,
  siteNav
} from '@/config/site'

export default function SiteFooter () {
  return (
    <footer className='mt-spacing-7 border-t pb-spacing-8 sm:pb-spacing-9 pt-spacing-3'>
      <div className='container-sm sm:flex sm:justify-between'>
        <nav className='flex flex-col gap-4'>
          <div className='flex gap-x-2'>
            <Link href='/'>
              <Icons.Logoname className='w-auto h-6 sm:h-7 fill-primary first:[&>path]:fill-emah' />
              <span className='sr-only'>{siteConfig.name}</span>
            </Link>
            <span className='text-lg leading-none sm:text-xl sm:leading-none text-bold'>
              {`© ${new Date().getFullYear()}`}
            </span>
          </div>
          <ul className='flex flex-col gap-3'>
            {siteNav.map((navItem, key) => (
              <li key={key}>
                <Link className='text-base xl:text-lg' href={navItem.href}>
                  {navItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='mt-spacing-7 sm:mt-0'>
          <Link className='text-base xl:text-lg underline' href={`mailto:${contactEmail}`}>
            {contactEmail}
          </Link>
        </div>
      </div>
    </footer>
  )
}
