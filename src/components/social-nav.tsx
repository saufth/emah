import NextLink from 'next/link'
import { Icons } from '@/components/icons'
import { capitalize } from '@/lib/utils'
import { type Nav } from '@/types'

export const socialIcons = [
  {
    title: 'facebook',
    Icon: () => <Icons.Facebook className='w-7 h-7' />
  },
  {
    title: 'instagram',
    Icon: () => <Icons.Instagram className='w-7 h-7' />
  },
  {
    title: 'tiktok',
    Icon: () => <Icons.TikTok className='w-7 h-7' />
  },
  {
    title: 'linkedin',
    Icon: () => <Icons.Linkedin className='w-7 h-7' />
  },
  {
    title: 'whatsapp',
    Icon: () => <Icons.Whatsapp className='w-[22px] h-[22px]' />
  }
]

const SocialNav = ({ items }: Nav) => {
  return (
    <ul className='flex gap-x-3 items-center'>
      {items.map((socialItem, key) => {
        const socialIcon = socialIcons.find((socialIcon) => socialIcon.title === socialItem.title)
        const socialTitle = capitalize(socialItem.title)

        return (
          <li key={key}>
            <NextLink
              href={socialItem.href}
              aria-label={socialTitle}
              target='_blank'
              rel='nooponer noreferrer'
            >
              {socialIcon
                ? <socialIcon.Icon />
                : <Icons.ArrowUpRight className='w-7 h-7' />}
              <span className='sr-only'>{socialTitle}</span>
            </NextLink>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialNav
