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

export { CallToAction }
