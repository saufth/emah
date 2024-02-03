'use client'
import React from 'react'
import NextLink from 'next/link'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { ModeToggle } from './mode-toggle'
import SocialNav, { whatsappUrl } from '@/components/social-nav'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { cn } from '@/lib/utils'
import { contactEmail, siteConfig, siteNav } from '@/config/site'
import { CallToAction } from '../call-to-action'
import { Link } from '../ui/link'

export default function SiteHeader () {
  const { scrollY } = useScroll()
  const [isOnTop, setIsOnTop] = React.useState(true)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useMotionValueEvent(scrollY, 'change', (latestScrollY) => {
    setIsOnTop(latestScrollY < 1)
  })

  return (
    <>
      <header
        className={cn(
          'w-full sticky top-0 left-0 z-40 border-b transition-colors duration-300 bg-background/0 backdrop-filter backdrop-saturate-150 backdrop-blur-lg transition-color',
          (isOnTop || isMenuOpen) && 'border-transparent'
        )}
      >
        <nav className='relative' aria-label='Emah Directory'>
          <div className='container'>
            <div
              className='w-full h-16 lg:h-[70px] flex justify-between items-center'
            >
              <div className='h-7 lg:h-8'>
                <NextLink href='/' onClick={closeMenu}>
                  <Icons.Logoname className='w-auto h-full fill-primary first:[&>path]:fill-emah' />
                  <span className='sr-only'>{siteConfig.name} home</span>
                </NextLink>
              </div>
              <div className='flex items-center gap-x-3'>
                <div className='hidden lg:flex items-center gap-x-3'>
                  <ul className='flex items-center gap-x-3'>
                    {siteNav.map((navItem, key) => (
                      <li key={key} className='last:hidden'>
                        <Link href={navItem.href} className='hidden lg:flex px-1 font-semibold' variant='link'>
                          {navItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href={whatsappUrl} target='_blank' rel='nooponer noreferrer'>
                    <Icons.WhatsappOutlined className='w-7 h-7' />
                    <span className='sr-only'>Whatsapp</span>
                  </Link>
                  <CallToAction className='hidden lg:flex' size='default' />
                </div>
                <div className='block lg:hidden'>
                  <div className='block lg:hidden w-8 h-2.5 relative [&>span]:transition-all [&>span]:duration-300' onClick={toggleMenu}>
                    <span className={cn('w-4/5 h-0.5 bg-primary absolute top-0 left-0', isMenuOpen && 'bg-emah inset-0 m-auto rotate-45')} />
                    <span className={cn('w-4/5 h-0.5 bg-primary absolute bottom-0 right-0', isMenuOpen && 'bg-emah inset-0 m-auto -rotate-45')} />
                    <span className='sr-only'>Toggle menu</span>
                  </div>
                </div>
                <div className='hidden lg:block'>
                  <ModeToggle />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div
        className={cn(
          'w-full h-0 bg-background fixed flex flex-col justify-between top-0 left-0 z-30 overflow-hidden transition-[height] duration-300',
          isMenuOpen && 'h-[100dvh]'
        )}
      >
        <nav className='container mt-spacing-8'>
          {siteNav.map((navItem, key) => (
            <Button className='rounded-none w-full px-0 border-b first:border-t' variant='link' size='lg' asChild key={key}>
              <NextLink className='flex justify-between text-lg' href={navItem.href} onClick={() => setIsMenuOpen(false)}>
                {navItem.title}
                <Icons.ArrowRight className='w-4 h-4' />
              </NextLink>
            </Button>
          ))}
        </nav>
        <div className='container pb-8 flex justify-between items-end'>
          <div>
            <div className='text-sm sm:text-base text-muted-foreground'>
              Correo electrónico
            </div>
            <NextLink className='text-lg underline' href={`mailto:${contactEmail}`} onClick={() => setIsMenuOpen(false)}>
              {contactEmail}
            </NextLink>
            <div className='mt-spacing-5'>
              <SocialNav />
            </div>
          </div>
          <ModeToggle />
        </div>
      </div>
    </>
  )
}
