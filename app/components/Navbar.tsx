'use client'

import { useState } from 'react'
import { inter, titan } from '@/fonts'
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
  isButton?: boolean
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
      text: 'Contact form',
      isButton: true,
      className:
        'text-4xl sm:text-6xl md:text-7xl lg:text-lg xl:text-xl 6xl:text-2xl border-2 rounded-xl dark:bg-zinc-300 bg-stone-800 dark:text-stone-900 text-[#00dd00] transition-all duration-1000 hover:bg-zinc-300 dark:hover:bg-[#272727] dark:hover:text-[#00dd00] hover:text-stone-900 py-3 px-3 sm:px-4 sm:py-4 lg:-mt-5',
      ariaLabel: 'Contact form button',
    },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeNavbarOnThemeChange = () => {
    setIsOpen(false)
  }

  const handleNavClick = (link: NavLink) => {
    if (link.isButton) {
      window.location.href = link.href
    }
    setIsOpen(false)
  }

  return (
    <>
      <motion.div
        className={inter.className}
        initial={{ opacity: 0, y: 0 }}
        transition={{ delay: 1, duration: 1.5, ease: 'easeInOut' }}
        animate={{ opacity: 1, y: 0 }}
      >
        <nav
          className={`lg:flex lg:justify-between navbar-container p-0 sm:p-2 mt-0 lg:mt-4 2xl:mt-6 6xl:mt-10 text-stone-800 ${
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
            className={`lg:flex ps-4 gap-7 text-5xl sm:text-6xl md:text-7xl lg:text-lg xl:text-xl 6xl:text-2xl pt-20 sm:pt-24 lg:pt-0 ${
              isOpen ? 'animate-slideIn' : 'hidden'
            }`}
          >
            {navLinks.map((link, index) => (
              <li
                key={index}
                style={{ listStyle: 'none' }}
                className={`dark:text-zinc-300 text-stone-800 tracking-wider my-4 lg:my-0 nav-link ${
                  isOpen ? titan.className : ''
                }`}
              >
                {link.isButton ? (
                  <button
                    onClick={() => handleNavClick(link)}
                    className={link.className}
                    aria-label={link.ariaLabel}
                  >
                    {link.text}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    target={link.target}
                    className={link.className}
                    aria-label={link.ariaLabel}
                    onClick={() => handleNavClick(link)}
                  >
                    {link.text}
                  </Link>
                )}
              </li>
            ))}
            <div className="-mt-1">
              <ModeToggle closeNavbar={closeNavbarOnThemeChange} />
            </div>
          </ul>
        </nav>
      </motion.div>
    </>
  )
}
