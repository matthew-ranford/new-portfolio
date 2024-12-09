import { Titan_One, Inter, Open_Sans } from 'next/font/google'

export const titan = Titan_One({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  adjustFontFallback: false,
})

export const openSans = Open_Sans({ subsets: ['latin'], weight: ['300'] })

// export const inter = Inter({ subsets: ['latin'], weight: ['300'] })
