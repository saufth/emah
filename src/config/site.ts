import { type Author } from 'next/dist/lib/metadata/types/metadata-types'
import { type NavList, type Navigable, type SiteConfig } from '@/types'

export const author: Author = {
  name: 'saufth',
  url: 'https://github.com/saufth'
}

export const siteNav: Navigable = [
  {
    title: 'Nuestras soluciones',
    href: '/soluciones'
  },
  {
    title: 'Acerca de nosotros',
    href: '/nosotros'
  },
  {
    title: 'Razón de ser',
    href: '/razon-de-ser'
  },
  {
    title: 'Consultoría Gratuita',
    href: '/contacto'
  }
]

export const domain = 'emah.mx'

export const contactEmail = `contacto@${domain}`

export const contactPhone = '4461012245'

export const whatsappUrl = `https://wa.me/1${contactPhone}`

export const social: NavList = [
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/emahmx?mibextid=LQQJ4d'
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/emah.mx?igshid=YmMyMTA2M2Y='
  },
  {
    title: 'TikTok',
    href: 'https://www.tiktok.com/@emahmarketing?_t=8ZWM4WdpXB0&_r=1'
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/emah-marketing-b58604264'
  },
  {
    title: 'Whatsapp',
    href: whatsappUrl
  }
]

export const siteConfig: SiteConfig = {
  name: 'Emah',
  description: 'Impulsamos a emprendedores y empresarios a consolidar su modelo de negocio, ofreciendo productos intangibles de alto valor agregado para sus clientes',
  slogan: 'Endless Possibilities',
  url: `https://${domain}`,
  author,
  mainNav: [
    {
      title: 'Inicio',
      href: '/'
    },
    ...siteNav
  ]
}
