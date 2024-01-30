import { Cairo as FontCairo } from 'next/font/google'

export const fontSans = FontCairo({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap'
})
