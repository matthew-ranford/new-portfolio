'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const socials = [
    {
      link: 'https://www.linkedin.com/in/matthew-ranford-23b759261/',
      label: 'LinkedIn',
      icon: SiLinkedin,
    },
    {
      link: 'https://github.com/matthew-ranford',
      label: 'GitHub',
      icon: SiGithub,
    },
    {
      link: 'https://www.instagram.com/mattranny/',
      label: 'Instagram',
      icon: SiInstagram,
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
      <nav className="flex justify-between items-center py-5">
        <h1>Matthew 👨🏾‍💻</h1>
        <div className="flex gap-5">
          {navLinks.map((link, index) => (
            <Link href={link.href} key={index}>
              <li style={{ listStyle: 'none' }} className="hover:scale-125">
                {link.text}
              </li>
            </Link>
          ))}
        </div>
        <div className="flex gap-5">
          {socials.map((social, index) => {
            const Icon = social.icon
            return (
              <Link href={social.link} key={index} aria-label={social.label}>
                <Icon className="w-5 h-5 hover:scale-125" />
              </Link>
            )
          })}
        </div>
        <button
          className={`hamburger hamburger--emphatic ${
            isOpen ? 'is-active' : ''
          }`}
          type="button"
          onClick={toggleMenu}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </nav>
    </>
  )
}
