'use client'

import { useState } from 'react'
import { handlee } from '@/fonts'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Light & Dark mode toggle
import { ModeToggle } from './LightDarkToggle'

// Page title
import MainHeaderNav from './MainHeaderNav'

// TypeScript
interface NavLink {
  href: string
  text: string
  target?: string
  className?: string
  ariaLabel?: string
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks: NavLink[] = [
    { href: '/', text: 'Home' },
    { href: 'about', text: 'About' },
    { href: 'projects', text: 'Projects' },
    {
      href: '/matt-software-dev-cv.pdf',
      text: 'Résumé',
      target: '_blank',
      ariaLabel: 'View my résumé in pdf format',
    },
    {
      href: 'mailto:matt.ranford16@gmail.com',
      text: 'Contact',
      className:
        'lg:border-4 dark:border-orange-300 border-cyan-700 lg:px-3 lg:py-1',
    },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeNavbarOnThemeChange = () => {
    setIsOpen(false)
  }

  return (
    <>
      <motion.div
        className={handlee.className}
        initial={{ opacity: 0, y: 5 }}
        transition={{ delay: 4, duration: 1.5, ease: 'easeInOut' }}
        animate={{ opacity: 1, y: 0 }}
      >
        <nav
          className={`lg:flex lg:justify-between navbar-container p-0 sm:p-4 lg:pe-10 text-stone-900 ${
            isOpen
              ? 'navbar-open navbar-full-height animate-slideIn'
              : 'navbar-closed animate-slideOut'
          }`}
        >
          <div
            className={`lg:hidden absolute top-0 left-0 ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            <MainHeaderNav />
          </div>
          <div className="flex justify-end">
            <span className="lg:hidden pt-2 md:pt-0 pe-2 sm:pe-4">
              <button
                className={`hamburger hamburger--collapse ${
                  isOpen ? 'is-active' : ''
                }`}
                aria-label="button"
                aria-controls="navbar-dropdown-menu"
                aria-expanded={isOpen}
                type="button"
                onClick={toggleMenu}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </span>
          </div>

          <ul
            id="navbar-dropdown-menu"
            className={`lg:flex ps-2 gap-5 text-6xl lg:text-2xl xl:text-3xl 6xl:text-5xl pt-24 sm:pt-44 lg:pt-0 ${
              isOpen ? 'animate-slideIn' : 'hidden'
            }`}
          >
            {navLinks.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                target={link.target ? link.target : undefined}
                className={link.className || ''}
                aria-label={link.ariaLabel || undefined}
                onClick={() => setIsOpen(!isOpen)}
              >
                <li
                  style={{ listStyle: 'none' }}
                  className="dark:text-zinc-200 text-stone-900 my-6 lg:my-0 nav-link"
                >
                  {link.text}
                </li>
              </Link>
            ))}
            <div className="py-1">
              <ModeToggle closeNavbar={closeNavbarOnThemeChange} />
            </div>
          </ul>
        </nav>
      </motion.div>
    </>
  )
}
