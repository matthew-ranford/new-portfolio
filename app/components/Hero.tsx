'use client'

import Image from 'next/image'
import Link from 'next/link'
import { titan } from '@/fonts'
import { motion } from 'framer-motion'

// Main page image
import heroImage from '../../public/images/hero-image-new-test-11.png'

// Components
import MainHeaderNav from './MainHeaderNav'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

// TextGenerateEffect
const firstLine = "Hi! I'm Matthew Ranford 👋"
const secondLine = 'Based in Wellington, New Zealand 🌎'
const thirdLine =
  "I'm a passionate Developer, with an interest in Front-End, Accessibility, & trying to optimize applications for the best practices & performance."

export default function Hero() {
  return (
    <>
      <main id="home" className="">
        <MainHeaderNav />
        <div className="pt-10 ps-5 sm:ps-7 xl:ps-6 space-y-3 2xl:space-y-4 max-w-sm sm:max-w-md md:max-w-lg xl:max-w-4xl 2xl:max-w-2xl 6xl:max-w-screen-lg z-index">
          <div className={titan.className}>
            <TextGenerateEffect words={firstLine} delay={500} size="xlarge" />
          </div>
          <TextGenerateEffect words={secondLine} delay={1000} size="medium" />
          <TextGenerateEffect words={thirdLine} delay={1200} size="medium" />
          <motion.div
            initial={{ opacity: 0 }}
            transition={{
              delay: 1.2,
              duration: 2.5,
              ease: 'easeInOut',
            }}
            animate={{ opacity: 1 }}
            className="pt-4"
          >
            <button className="border-2 rounded-xl bg-amber-500 transition-all duration-1000 dark:hover:bg-zinc-900 dark:hover:text-amber-500 hover:bg-zinc-200 text-zinc-950 hover:text-zinc-950 py-3 px-3 sm:px-4 sm:py-4">
              <Link href="projects">Projects</Link>
            </button>
            <button className="border-2 rounded-xl dark:bg-zinc-300 bg-zinc-950 dark:text-stone-900 text-amber-500 transition-all duration-1000 hover:bg-zinc-200 dark:hover:bg-zinc-900 dark:hover:text-amber-500 hover:text-zinc-900 py-3 px-3 sm:px-4 sm:py-4 mx-2 lg:mx-4">
              <Link href="mailto:matt.ranford16@gmail.com">Get in touch</Link>
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{
            duration: 1.5,
            delay: 2,
            ease: 'easeInOut',
          }}
          animate={{ opacity: 1 }}
        >
          <Image
            src={heroImage}
            width={4098}
            height={2304}
            alt="Photo of Matt"
            className="hero-image"
          />
        </motion.div>

        <div className={titan.className}>
          <h2 className="ps-2 sm:ps-8 xl:ps-6 pe-2 pt-14 xl:pt-4 2xl:pt-28 4xl:pt-16 5xl:pt-40 6xl:pt-44 text-7xl sm:text-8xl md:text-[5.2rem] lg:text-[7.5rem] xl:text-[9.9rem] 2xl:text-[11rem] 3xl:text-[12.8rem] 4xl:text-[14.5rem] 5xl:text-[17.2rem] 6xl:text-[18.2rem] text-center sm:text-left dark:text-zinc-300 text-stone-900 font-bold z-index">
            <motion.span
              initial={{ opacity: 0 }}
              transition={{
                delay: 1.2,
                duration: 2.5,
                ease: 'easeInOut',
              }}
              animate={{ opacity: 1 }}
            >
              Web
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0 }}
              transition={{
                delay: 1.5,
                duration: 2.5,
                ease: 'easeInOut',
              }}
              animate={{ opacity: 1 }}
            >
              Developer
            </motion.span>
          </h2>
        </div>
      </main>
    </>
  )
}
