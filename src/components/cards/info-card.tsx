import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { type CardDataProps } from '@/types'

export function InfoCard ({ card, className, ...props }: CardDataProps) {
  return (
    <Card
      as='article'
      className={cn(
        'border dark:bg-zinc-950 dark:border-zinc-700 py-1 px-1 sm:p-1',
        className
      )}
      {...props}
    >
      <div className='w-full h-full rounded-lg dark:bg-gradient-to-t dark:from-zinc-950 dark:to-muted py-10 px-8 sm:py-12'>
        <CardHeader>
          <h3 className='f-subhead-2 font-semibold'>
            {card.title}
          </h3>
        </CardHeader>
        <CardContent className='mt-spacing-2'>
          {typeof card.description === 'string'
            ? (
              <p className='f-body-1 text-muted-foreground'>
                {card.description}
              </p>
              )
            : card.description && (
              <>
                {card.description.map((description, key) => (
                  <p className='f-body-1 text-muted-foreground mt-spacing-2' key={key}>
                    {description}
                  </p>
                ))}
              </>
            )}
        </CardContent>
      </div>
    </Card>
  )
}
