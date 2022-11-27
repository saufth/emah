// Components
import GSearchSchemaScript from '../components/app/GSearchSchemaScript'
// Types
import { LayoutProps } from '../types/layout'
// Styles
import '../styles/globals.css'

export default function RootLayout ({ children }: LayoutProps) {
  return (
    <html>
      <head />
      <body>
        {children}
      </body>
      <GSearchSchemaScript />
    </html>
  )
}
