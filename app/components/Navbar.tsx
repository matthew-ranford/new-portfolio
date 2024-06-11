'use client'

import { useState } from 'react'
import Link from 'next/link'

// Light & Dark mode toggle
import { ModeToggle } from './LightDarkToggle'

// TypeScript
interface NavLink {
  href: string
  text: string
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks: NavLink[] = [
    { href: '#about', text: 'About' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' },
    { href: '#', text: 'Resume' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeNavbarOnThemeChange = () => {
    setIsOpen(false)
  }

  return (
    <>
      <nav
        className={`lg:flex lg:justify-between navbar-container p-0 sm:p-4 text-stone-900 ${
          isOpen
            ? 'navbar-open navbar-full-height animate-slideIn'
            : 'navbar-closed animate-slideOut'
        }`}
      >
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
          className={`lg:flex ps-2 gap-5 text-7xl lg:text-xl lg:pt-0 ${
            isOpen ? 'animate-slideIn' : 'hidden'
          }`}
        >
          {navLinks.map((link, index) => (
            <Link href={link.href} key={index}>
              <li
                style={{ listStyle: 'none' }}
                className="dark:text-white my-6 lg:my-0 nav-link"
              >
                {link.text}
              </li>
            </Link>
          ))}
          <ModeToggle closeNavbar={closeNavbarOnThemeChange} />
        </ul>
      </nav>
    </>
  )
}

// TODO: Put this in a Footer component

// const socials = [
//   {
//     link: 'https://www.linkedin.com/in/matthew-ranford-23b759261/',
//     label: 'LinkedIn',
//     icon: '/linkedin-icon.png',
//   },
//   {
//     link: 'https://github.com/matthew-ranford',
//     label: 'GitHub',
//     icon: '/github-icon.png',
//   },
//   {
//     link: 'https://www.instagram.com/mattranny/',
//     label: 'Instagram',
//     icon: '/instagram-icon.png',
//   },
// ]

/* <div
          className={`md:flex md:flex-row md:items-center pt-10 md:pt-0 md:pe-10 ${
            isOpen ? '' : 'hidden'
          }`}
        >
          <div className={`flex gap-5 ${isOpen ? 'justify-center' : ''}`}>
            {socials.map((social, index) => {
              return (
                <Link href={social.link} key={index} aria-label={social.label}>
                  <Image
                    src={social.icon}
                    className="w-7 h-7 my-4 md:my-0 hover:scale-125"
                    width={48}
                    height={48}
                    alt=""
                  />
                </Link>
              )
            })}
          </div>
        </div> */
