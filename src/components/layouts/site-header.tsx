'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import {
  useMotionValueEvent,
  useScroll
} from 'framer-motion'
import { cn } from '@/lib/utils'
import { contactEmail, siteConfig, siteNav } from '@/config/site'

const contactLink = siteNav.find(({ title }) => title === 'Contáctanos')!

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
          'w-full sticky top-0 left-0 z-40 transition-colors duration-300',
          isOnTop ? 'bg-transparent' : 'bg-black/90 backdrop-filter backdrop-blur-sm',
          isMenuOpen && 'bg-black/80 backdrop-filter backdrop-blur-sm'
        )}
      >
        <nav
          className='relative'
          aria-label='Emah Directory'
        >
          <div className='container'>
            <div
              className='w-full h-[68px] lg:h-[84px] flex justify-between items-center'
            >
              <div className='h-5 lg:h-7'>
                <Link href='/' onClick={closeMenu}>
                  <Icons.Logoname className='w-auto h-full fill-white' />
                  <span className='sr-only'>{siteConfig.name} home</span>
                </Link>
              </div>
              <div className='flex items-center gap-x-5 lg:gap-x-3'>
                {siteNav.map((navItem, key) => (
                  key < siteNav.length - 1
                    ? (
                      <Button className='hidden lg:flex' variant='link' size='lg' asChild key={key}>
                        <Link className='flex items-center gap-x-1 text-white' href={navItem.href}>
                          {navItem.title}
                        </Link>
                      </Button>
                      )
                    : (
                      <Button
                        className='hidden lg:flex border-white hover:bg-white text-white hover:text-black'
                        size='lg'
                        asChild
                        key={key}
                      >
                        <Link
                          className='group flex items-center gap-x-1'
                          href={contactLink.href}
                        >
                          {contactLink.title}
                        </Link>
                      </Button>
                      )
                ))}
                <div className='block lg:hidden'>
                  <div className='block lg:hidden w-6 h-4 relative [&>span]:transition-all' onClick={toggleMenu}>
                    <span className={cn('w-full h-[2px] bg-white absolute top-0 left-0', isMenuOpen && 'inset-0 m-auto rotate-45')} />
                    <span className={cn('w-full h-[2px] bg-white absolute top-0 bottom-0 my-auto', isMenuOpen && 'opacity-0')} />
                    <span className={cn('w-full h-[2px] bg-white absolute bottom-0 left-0', isMenuOpen && 'inset-0 m-auto -rotate-45')} />
                    <span className='sr-only'>Toggle menu</span>
                  </div>
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
        <nav className='container mt-spacing-9'>
          {siteNav.map((navItem, key) => (
            <Button className='rounded-none w-full px-0 border-b first:border-t' variant='link' size='lg' asChild key={key}>
              <Link className='flex justify-between' href={navItem.href} onClick={() => setIsMenuOpen(false)}>
                {navItem.title}
              </Link>
            </Button>
          ))}
        </nav>
        <div className='container pb-8'>
          <div className='text-sm sm:text-base text-muted-foreground'>
            Correo electrónico
          </div>
          <Link className='text-base xl:text-lg' href={`mailto:${contactEmail}`} onClick={() => setIsMenuOpen(false)}>
            {contactEmail}
          </Link>
        </div>
      </div>
    </>
  )
}
