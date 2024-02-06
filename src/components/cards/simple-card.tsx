import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { type InfoCardProps } from '@/types'

export function SimpleCard ({ card, className, ...props }: InfoCardProps) {
  return (
    <Card
      as='article'
      className={cn(
        'border dark:border-zinc-700 dark:bg-zinc-900 px-4 py-4 sm:p-4',
        className
      )}
      {...props}
    >
      <div className='w-full h-full rounded-[9px]'>
        <CardHeader>
          <h3 className='f-subhead-2 font-semibold'>
            {card.title}
          </h3>
        </CardHeader>
        <CardContent className='mt-spacing-2'>
          <p className='f-body-1 text-muted-foreground'>
            {card.description}
          </p>
        </CardContent>
      </div>
    </Card>
  )
}
