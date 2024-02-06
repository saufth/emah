import React from 'react'
import { Icons } from '@/components/icons'
import { Link, type LinkProps } from '@/components/ui/link'
import { cn } from '@/lib/utils'
import { siteNav } from '@/config/site'

const contactLink = siteNav.find(({ href }) => href === '/contacto')!

const CallToAction = React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'href' | 'children'>>(
  ({ className, variant = 'default', size = 'full', ...props }, ref) => {
    return (
      <Link
        href={contactLink.href}
        className={cn('font-semibold flex items-center gap-x-1.5', className)}
        size={size}
        variant={variant}
        ref={ref}
        {...props}
      >
        {contactLink.title}
        <Icons.ArrowUpRight className='w-5 h-5 stroke-secondary stroke-[2.5]' />
      </Link>
    )
  }
)
CallToAction.displayName = 'CallToAction'

const aboutLink = siteNav.find(({ href }) => href === '/nosotros')!

const CallToAbout = React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'href' | 'children'>>(
  ({ className, variant = 'ghost', size = 'full', ...props }, ref) => {
    return (
      <Link
        href={aboutLink.href}
        className={cn('flex items-center gap-x-1.5', className)}
        size={size}
        variant={variant}
        ref={ref}
        {...props}
      >
        {aboutLink.title}
        <Icons.ArrowUpRight className='w-5 h-5 stroke-[2.5]' />
      </Link>
    )
  }
)
CallToAbout.displayName = 'CallToAbout'

const servicesLink = siteNav.find(({ href }) => href === '/soluciones')!

const CallToServices = React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'href' | 'children'>>(
  ({ className, variant = 'ghost', size = 'full', ...props }, ref) => {
    return (
      <Link
        href={servicesLink.href}
        className={cn('flex items-center gap-x-1.5', className)}
        size={size}
        variant={variant}
        ref={ref}
        {...props}
      >
        {servicesLink.title}
        <Icons.ArrowUpRight className='w-5 h-5 stroke-[2.5]' />
      </Link>
    )
  }
)
CallToServices.displayName = 'CallToServices'

const purposeLink = siteNav.find(({ href }) => href === '/razon-de-ser')!

const CallToPurpose = React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'href' | 'children'>>(
  ({ className, variant = 'ghost', size = 'full', ...props }, ref) => {
    return (
      <Link
        href={purposeLink.href}
        className={cn('flex items-center gap-x-1.5', className)}
        size={size}
        variant={variant}
        ref={ref}
        {...props}
      >
        {purposeLink.title}
        <Icons.ArrowUpRight className='w-5 h-5 stroke-[2.5]' />
      </Link>
    )
  }
)
CallToPurpose.displayName = 'CallToPurpose'

export { CallToAction, CallToAbout, CallToPurpose, CallToServices }
