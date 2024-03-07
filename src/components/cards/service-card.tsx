import React from 'react'
import { Card, CardContent, CardHeader, type CardProps } from '@/components/ui/card'
import { Icons } from '@/components/icons'
import { cn } from '@/lib/utils'
import { type Article } from '@/types'

interface CardDataProps extends CardProps {
  card: Article
}
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
      <div className='w-full h-full rounded-lg bg-gradient-to-t from-zinc-50 to-card dark:from-zinc-950 dark:to-muted py-12 px-8 sm:px-6 sm:py-14'>
        <div>
          <CardHeader className='space-y-1.5 sm:space-y-2 lg:space-y-2'>
            <h3 className='f-heading-3 font-bold'>
              {card.title}
            </h3>
          </CardHeader>
          <CardContent className='mt-spacing-5'>
            {typeof card.items === 'string'
              ? (
                <div className='flex items-center gap-x-2'>
                  <Icons.Doodle className='w-5 h-5 fill-emah' />
                  <p className='f-subhead-3 font-semibold'>
                    {card.items}
                  </p>
                </div>
                )
              : card.items && (
                <ul className='space-y-5'>
                  {card.items.map((item, key) => (
                    <li className='flex items-center gap-x-2' key={key}>
                      <div className=''>
                        <Icons.Doodle className='w-5 h-5 fill-emah' />
                      </div>
                      <p className='f-subhead-3 font-semibold'>
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
          </CardContent>
        </div>
        <div>
          <p className='f-body-1 text-balanced pt-8 sm:pt-12 text-center'>
            {card.description}
          </p>
        </div>
      </div>
    </Card>
  )
}
