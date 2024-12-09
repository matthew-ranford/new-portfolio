import type { Metadata } from 'next'
import { openSans } from '@/fonts'
import './globals.css'

// Navbar toggle
import '../node_modules/hamburgers/dist/hamburgers.css'

// Components
import Navbar from './components/Navbar'

import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Matthew Ranford | Developer Portfolio',
  description:
    "Matthew Ranford's web developer portfolio showcasing skills and recent projects",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="images/logo.png" />
      </head>
      <body className={openSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" //Can change to dark etc.
          enableSystem
          disableTransitionOnChange
        >
          <div className="dark:bg-background bg-background">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

// TODO:
// Look at hover state of recent projects card

// Footer tab not working, going to matthew-ranford.github.io/about - missing the /new-portfolio
