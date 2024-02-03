import NextLink from 'next/link'
import { Icons } from '@/components/icons'

export const contactPhone = '4461012245'
export const whatsappUrl = `https://wa.me/1${contactPhone}`

export const socialIcons = [
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/emahmx?mibextid=LQQJ4d',
    Icon: () => <Icons.Facebook className='w-7 h-7' />
  },
  {
    title: 'Instagram',
    url: 'https://instagram.com/emah.mx?igshid=YmMyMTA2M2Y=',
    Icon: () => <Icons.Instagram className='w-7 h-7' />
  },
  {
    title: 'TikTok',
    url: 'https://www.tiktok.com/@emahmarketing?_t=8ZWM4WdpXB0&_r=1',
    Icon: () => <Icons.TikTok className='w-7 h-7' />
  },
  {
    title: 'Linkedin',
    url: 'https://www.linkedin.com/in/emah-marketing-b58604264',
    Icon: () => <Icons.Linkedin className='w-7 h-7' />
  },
  {
    title: 'Whatsapp',
    url: whatsappUrl,
    Icon: () => <Icons.Whatsapp className='w-[22px] h-[22px]' />
  }
]

const SocialNav = () => {
  return (
    <ul className='flex gap-x-3 items-center'>
      {socialIcons.map((social, key) => {
        return (
          <li key={key}>
            <NextLink
              href={social.url}
              aria-label={social.title}
              target='_blank'
              rel='nooponer noreferrer'
            >
              <social.Icon />
              <span className='sr-only'>{social.title}</span>
            </NextLink>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialNav
