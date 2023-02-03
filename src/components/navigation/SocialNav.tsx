// Components
import Icon from '../data-display/Icon'
import NextLink from 'next/link'

/**
 * The main social network navigation of application
 * @returns SocialNav component
 */
const SocialNav = () => {
  return (
    <div className='flex gap-x-5 md:gap-x-3 justify-center'>
      <NextLink
        href='https://www.facebook.com/emahmx?mibextid=LQQJ4d'
        target='_blank'
      >
        <Icon icon='facebook' />
      </NextLink>
      <NextLink
        href='https://instagram.com/emah.mx?igshid=YmMyMTA2M2Y='
        target='_blank'
      >
        <Icon icon='instagram' />
      </NextLink>
      <NextLink
        href='https://www.tiktok.com/@emahmarketing?_t=8ZWM4WdpXB0&_r=1'
        target='_blank'
      >
        <Icon icon='tiktok' />
      </NextLink>
      <NextLink
        href='https://www.linkedin.com/in/emah-marketing-b58604264'
        target='_blank'
      >
        <Icon icon='linkedin' />
      </NextLink>
    </div>
  )
}

export default SocialNav
