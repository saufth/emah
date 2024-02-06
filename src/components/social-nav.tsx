import NextLink from 'next/link'
import { Icons } from '@/components/icons'
import { social } from '@/config/site'

export const socialIcons = [
  () => <Icons.Facebook className='w-7 h-7' />,
  () => <Icons.Instagram className='w-7 h-7' />,
  () => <Icons.TikTok className='w-7 h-7' />,
  () => <Icons.Linkedin className='w-7 h-7' />,
  () => <Icons.Whatsapp className='w-[22px] h-[22px]' />
]

const socialConfig = social.map((item, index) => ({
  ...item,
  Icon: socialIcons[index]!
}))

const SocialNav = () => {
  return (
    <ul className='flex gap-x-3 items-center'>
      {socialConfig.map((socialItem, key) => {
        return (
          <li key={key}>
            <NextLink
              href={socialItem.href}
              aria-label={socialItem.title}
              target='_blank'
              rel='nooponer noreferrer'
            >
              <socialItem.Icon />
              <span className='sr-only'>{socialItem.title}</span>
            </NextLink>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialNav
