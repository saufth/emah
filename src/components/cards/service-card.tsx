import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, type CardDataProps } from '@/components/ui/card'
import { Icons } from '@/components/icons'
import { cn } from '@/lib/utils'

export function ServiceCard ({ card, className, ...props }: CardDataProps) {
  return (
    <Card
      as='article'
      className={cn(
        'border bg-zinc-50 dark:bg-zinc-950 dark:border-zinc-700 py-1 px-1 sm:p-1',
        className
      )}
      {...props}
    >
      <div className='w-full h-full rounded-lg bg-gradient-to-t from-zinc-50 to-card dark:from-zinc-950 dark:to-muted pt-12 pb-16 px-8 sm:px-6 sm:pt-14 sm:pb-20'>
        <CardHeader className='space-y-1.5 sm:space-y-2 lg:space-y-2'>
          {card.label && (
            <Badge className='dark:bg-zinc-900' variant='outline'>
              <span className='text-emah text-xs'>
                {card.label}
              </span>
            </Badge>
          )}
          <h3 className='f-subhead-2 font-semibold'>
            {card.title}
          </h3>
        </CardHeader>
        <CardContent className='mt-spacing-4 px-2.5'>
          {typeof card.description === 'string'
            ? (
              <div className='flex items-center gap-x-2'>
                <Icons.Doodle className='w-5 h-5 fill-emah' />
                <p className='f-subhead-2 font-semibold text-muted-foreground'>
                  {card.description}
                </p>
              </div>
              )
            : card.description && (
              <ul className='space-y-5'>
                {card.description.map((description, key) => (
                  <li className='flex items-center gap-x-2' key={key}>
                    <Icons.Doodle className='w-5 h-5 fill-emah' />
                    <p className='f-subhead-2 font-semibold text-muted-foreground'>
                      {description}
                    </p>
                  </li>
                ))}
              </ul>
            )}
        </CardContent>
      </div>
    </Card>
  )
}
