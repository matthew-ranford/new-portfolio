'use client'

import { useState } from 'react'
import { titan } from '@/fonts'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useDisclosure } from '@nextui-org/react'

// Light & Dark mode toggle
import { ModeToggle } from './LightDarkToggle'

// Page title
import MainHeaderNav from './MainHeaderNav'

// Contact modal
import ContactModal from './ContactModal'

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
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure()

  const navLinks: NavLink[] = [
    { href: '/', text: 'Home', ariaLabel: 'Home button' },
    { href: 'about', text: 'About', ariaLabel: 'About page button' },
    { href: 'projects', text: 'Projects', ariaLabel: 'Projects page button' },
    {
      href: '/matt-software-dev-cv.pdf',
      text: 'Résumé',
      target: '_blank',
      ariaLabel: 'View my résumé in pdf format',
    },
    {
      href: 'contact',
      text: 'Contact form',
      isButton: true,
      className:
        'text-4xl sm:text-6xl md:text-7xl lg:text-lg xl:text-xl 6xl:text-2xl border-3 border-stone-800 rounded-xl dark:bg-zinc-300 bg-stone-800 dark:text-[#004aad] text-[#004aad] transition-all duration-1000 hover:bg-zinc-300 dark:hover:bg-[#272727] dark:hover:text-[#004aad] hover:text-[#004aad] drop-shadow-[5px_5px_0px_#1c1917] hover:drop-shadow-none py-3 px-3 sm:px-4 sm:py-4 lg:-mt-5 font-bold',
      ariaLabel: 'Contact form button',
    },
  ]

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMobileMenuOnThemeChange = () => {
    setIsOpen(false)
  }

  const handleNavButtonClick = (link: NavLink) => {
    if (link.isButton) {
      if (link.text === 'Contact form') {
        onModalOpen()
      } else {
        window.location.href = link.href
      }
    }
    setIsOpen(false)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        transition={{ delay: 1, duration: 1.5, ease: 'easeInOut' }}
        animate={{ opacity: 1, y: 0 }}
      >
        <nav
          className={`lg:flex lg:justify-between navbar-container p-0 sm:p-2 mt-0 lg:mt-4 xl:mt-6 6xl:mt-10 xl:pe-10 ${
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
            <span className="lg:hidden pe-2 sm:pe-4 pt-1 z-index">
              <button
                className={`hamburger hamburger--collapse ${
                  isOpen ? 'is-active' : ''
                }`}
                aria-label="button"
                aria-controls="navbar-dropdown-menu"
                aria-expanded={isOpen}
                type="button"
                onClick={toggleMobileMenu}
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
                className={`dark:text-zinc-300 text-stone-800 drop-shadow-[1px_1px_2px_#292524] dark:drop-shadow-[1px_1px_2px_#292524] tracking-wider my-4 lg:my-0 nav-link ${
                  isOpen ? titan.className : ''
                }`}
              >
                {link.isButton ? (
                  <button
                    onClick={() => handleNavButtonClick(link)}
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
                    onClick={() => handleNavButtonClick(link)}
                  >
                    {link.text}
                  </Link>
                )}
              </li>
            ))}
            <div className="-mt-1">
              <ModeToggle closeNavbar={closeMobileMenuOnThemeChange} />
            </div>
          </ul>
        </nav>
      </motion.div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={onModalClose} />
    </>
  )
}
