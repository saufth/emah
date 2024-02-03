import { type Author } from 'next/dist/lib/metadata/types/metadata-types'
import { type MainNavItem } from '@/types'

interface SiteConfig {
  name: string,
  description: string,
  slogan?: string,
  url: URL | string,
  author: Author,
  mainNav: MainNavItem[]
}

export const author: Author = {
  name: 'saufth',
  url: 'https://github.com/saufth'
}

export const siteNav = [
  {
    title: 'Soluciones',
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

export const siteConfig: SiteConfig = {
  name: 'Emah',
  description: 'Impulsamos a emprendedores y empresarios a consolidar su modelo de negocio, ofreciendo productos intangibles de alto valor agregado para sus clientes',
  slogan: 'No necesitas más marketing',
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
