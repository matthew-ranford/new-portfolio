'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Image
import logo from '../../public/portfolio-logo.png'

// Light & Dark mode toggle
import { ModeToggle } from './LightDarkToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const socials = [
    {
      link: 'https://www.linkedin.com/in/matthew-ranford-23b759261/',
      label: 'LinkedIn',
      icon: '/linkedin-icon.png',
    },
    {
      link: 'https://github.com/matthew-ranford',
      label: 'GitHub',
      icon: '/github-icon.png',
    },
    {
      link: 'https://www.instagram.com/mattranny/',
      label: 'Instagram',
      icon: '/instagram-icon.png',
    },
  ]

  const navLinks = [
    { href: '#about', text: 'About' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' },
    { href: '#', text: 'Resume' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav
        className={`md:flex md:justify-between md:items-center navbar-container p-0 sm:p-4 text-black  ${
          isOpen
            ? 'navbar-open navbar-full-height animate-slideIn'
            : 'navbar-closed animate-slideOut'
        }`}
      >
        <div className="flex justify-between items-center ps-4 md:ps-10">
          <Link href="/">
            <span className="text-xl flex items-center">
              <Image
                src={logo}
                className="h-20 w-auto"
                width={500}
                height={500}
                alt="Logo"
              />
              Matthew 👨🏾‍💻
            </span>
          </Link>
          <span className="md:hidden justify-between items-center pe-4">
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
          className={`md:flex md:items-center text-center gap-5 text-3xl md:text-xl pt-10 md:pt-0 ${
            isOpen ? 'animate-slideIn' : 'hidden'
          }`}
        >
          {navLinks.map((link, index) => (
            <Link href={link.href} key={index}>
              <li
                style={{ listStyle: 'none' }}
                className="my-8 md:my-0 hover:text-yellow-500 hover:scale-105 nav-link"
              >
                {link.text}
              </li>
            </Link>
          ))}
          <ModeToggle />
        </ul>
        <div
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
        </div>
      </nav>
    </>
  )
}
