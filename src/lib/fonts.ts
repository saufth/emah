import { Cairo as FontCairo } from 'next/font/google'

export const fontCairo = FontCairo({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap'
})
