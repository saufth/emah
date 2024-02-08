import React from 'react'
import { cn } from '@/lib/utils'
import { type ItemWithOptionalImage } from '@/types'

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    as?: 'div' | 'section' | 'article'
  }
>(({ className, as: Comp = 'div', ...props }, ref) => (
  <Comp
    ref={ref}
    className={cn(
      'rounded-2xl bg-card shadow border space-y-10 sm:space-y-12 py-6 px-8 sm:p-8',
      className
    )}
    {...props}
  />
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('w-full space-y-2', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

type CardProps = React.ComponentProps<typeof Card>
interface CardDataProps extends CardProps {
  card: ItemWithOptionalImage
}

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & { as?: 'h1' | 'h2' | 'h3' }
>(({ className, as: Comp = 'h3', ...props }, ref) => (
  <Comp
    ref={ref}
    className={cn('text-card-foreground', className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

type CardTitleProps = React.ComponentProps<typeof CardTitle>

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-p1 text-card-foreground', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

type CardDescriptionProps = React.ComponentProps<typeof CardDescription>

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('w-full', className)} {...props} />
))
CardContent.displayName = 'CardContent'

type CardContentProps = React.ComponentProps<typeof CardContent>

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

type CardFooterProps = React.ComponentProps<typeof CardFooter>

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  type CardProps,
  type CardTitleProps,
  type CardDescriptionProps,
  type CardContentProps,
  type CardFooterProps,
  type CardDataProps
}
