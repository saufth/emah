import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'w-max inline-flex items-center justify-center rounded-2xl focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-primary/95 text-primary-foreground hover:bg-primary',
        destructive: 'bg-destructive/90 text-destructive-foreground hover:bg-destructive',
        outline: 'border border-primary text-primary hover:bg-muted text-primary hover:text-primary-foreground',
        secondary: 'bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground',
        ghost: 'bg-muted/90 hover:bg-muted border border-primary/20',
        link: 'hover:underline'
      },
      size: {
        default: 'h-8 lg:h-9 px-3.5 text-sm lg:text-base',
        xs: 'text-xs lg:text-sm',
        sm: 'px-1 text-sm lg:text-base',
        lg: 'w-fit h-11 lg:h-12 px-2 lg:px-3 lg:text-lg',
        full: 'w-full sm:w-fit h-11 lg:h-12 px-4 lg:px-6 lg:text-lg',
        icon: 'h-7 lg:h-[33px] w-7 lg:w-[33px]'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export type ButtonVariantProps = VariantProps<typeof buttonVariants>

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
