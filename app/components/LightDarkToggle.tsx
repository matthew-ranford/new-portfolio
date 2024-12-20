'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

// TypeScript
interface ModeToggleProps {
  closeNavbar: () => void
}

export function ModeToggle({ closeNavbar }: ModeToggleProps) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    closeNavbar()
  }

  return (
    <Button
      variant="link"
      size="icon"
      onClick={toggleTheme}
      aria-label="Light and dark mode toggle button"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 hover:text-amber-600" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-zinc-200 hover:text-stone-950" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
