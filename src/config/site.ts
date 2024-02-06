import { type Author } from 'next/dist/lib/metadata/types/metadata-types'
import { type Navigable, type SiteConfig } from '@/types'

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
