import { Anton, Titan_One, Inter } from 'next/font/google'

export const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  adjustFontFallback: false,
})

export const titan = Titan_One({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  adjustFontFallback: false,
})

export const inter = Inter({ subsets: ['latin'], weight: ['400'] })
