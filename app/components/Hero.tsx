'use client'

import Image from 'next/image'
import Link from 'next/link'
import { titan } from '@/fonts'
import { motion } from 'framer-motion'

// Main page image
import heroImage from '../../public/images/hero-image-new-test-11.png'
import heroPhoneImage from '../../public/images/hero-image-phone-test.png'

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
        {/* TODO: might put on font bold to div */}
        <div className="pt-40 sm:pt-16 lg:pt-10 xl:pt-14 2xl:pt-20 6xl:pt-44 text-center sm:text-left ps-3 sm:ps-7 xl:ps-8 space-y-3 2xl:space-y-4 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl 6xl:max-w-screen-xl z-index">
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
            className="pt-4 text-center sm:text-left 6xl:text-3xl"
          >
            <button className="border-2 rounded-xl bg-[#00dd00] transition-all duration-1000 dark:hover:bg-zinc-800 dark:hover:text-[#00dd00] hover:bg-zinc-200 text-zinc-950 hover:text-zinc-950 py-3 px-3 sm:px-4 sm:py-4 6xl:px-8">
              <Link href="projects">Projects</Link>
            </button>
            <button className="border-2 rounded-xl dark:bg-zinc-300 bg-zinc-950 dark:text-stone-900 text-[#00dd00] transition-all duration-1000 hover:bg-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-[#00dd00] hover:text-zinc-900 py-3 px-3 sm:px-4 sm:py-4 6xl:px-8 mx-2 lg:mx-4">
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
            className="hero-image hidden lg:block"
          />
          <Image
            src={heroPhoneImage}
            width={1080}
            height={1920}
            alt="Photo of Matt"
            className="hero-image lg:hidden"
          />
        </motion.div>

        <div className={titan.className}>
          <h2 className="ps-2 sm:ps-8 xl:ps-6 pe-4 pt-4 sm:pt-6 text-6xl sm:text-7xl md:text-[5.3rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[10.5rem] 6xl:text-[16rem] text-center sm:text-left dark:text-zinc-300 text-stone-800 font-bold z-index">
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
