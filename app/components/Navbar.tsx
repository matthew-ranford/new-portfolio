'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { animate, stagger } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const sequence = [
    ['li', { opacity: [0, 1], y: [-50, 0] }, { delay: stagger(0.1) }],
    [
      {
        duration: () => {
          setIsOpen(!isOpen)
        },
      },
    ],
  ]

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
      <nav className="md:flex md:justify-between md:items-center navbar-container p-0 sm:p-4 text-black bg-transparent backdrop-filter backdrop-blur-lg">
        <div className="flex justify-between items-center">
          <span className="text-xl flex items-center">
            <Image
              src="/portfolio-logo.png"
              className="h-20 w-auto"
              width={500}
              height={500}
              alt=""
            />
            Matthew 👨🏾‍💻
          </span>
          <span className="md:hidden justify-between items-center">
            <button
              className={`hamburger hamburger--emphatic ${
                isOpen ? 'is-active' : ''
              }`}
              type="button"
              onClick={() => setIsOpen(toggleMenu, animate(sequence))}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </span>
        </div>
        <ul
          className={`md:flex md:items-center text-center gap-5 text-xl pt-5 md:pt-0 ${
            isOpen ? '' : 'hidden'
          }`}
        >
          {navLinks.map((link, index) => (
            <Link href={link.href} key={index}>
              <li
                style={{ listStyle: 'none' }}
                className="my-4 md:my-0 hover:text-yellow-500 hover:scale-105"
              >
                {link.text}
              </li>
            </Link>
          ))}
        </ul>
        <div
          className={`md:flex md:flex-row md:items-center pt-5 md:pt-0 ${
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
