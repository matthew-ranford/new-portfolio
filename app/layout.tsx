import type { Metadata } from 'next'
import { anton } from '@/fonts'
import './globals.css'

// Navbar toggle
import '../node_modules/hamburgers/dist/hamburgers.css'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Matthew | Developer Portfolio',
  description:
    "Matthew Ranford's Fullstack Developer Portfolio showcasing skills and recent projects",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={anton.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system" //Can change to dark etc.
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
