'use client'

import Image from 'next/image'
import Link from 'next/link'
import { titan } from '@/fonts'
import { motion } from 'framer-motion'

// Main page image
import heroImage from '../../public/images/hero-image-new-test-1.png'

// Components
import MainHeaderNav from './MainHeaderNav'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { MovingBorderButton } from '@/components/ui/moving-border'

// TextGenerateEffect
const firstLine = 'Based in Wellington, New Zealand 🌎 '
const secondLine =
  "I'm a passionate Developer, with an interest in Front-End, Accessibility, & trying to optimize applications for the best practices & performance."

export default function Hero() {
  return (
    <>
      <main id="home" className="absolute overflow-hidden">
        <MainHeaderNav />
        <div className="ps-5 sm:ps-7 space-y-3 2xl:space-y-4 pt-10 max-w-sm sm:max-w-md md:max-w-lg xl:max-w-xl 2xl:max-w-2xl  6xl:max-w-screen-lg">
          <TextGenerateEffect words={firstLine} delay={1500} />
          <TextGenerateEffect words={secondLine} delay={2400} />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{
            duration: 1.5,
            delay: 4,
            ease: 'easeInOut',
          }}
          animate={{ opacity: 1 }}
        >
          <Image
            src={heroImage}
            width="2732"
            height="1536"
            alt="Hero image of Matt on lake with hockey stick"
            className="hero-image"
          />
          {/* 
          <div className="absolute p-2 top-[22%] sm:top-[27%] md:top-[35%] lg:top-[58%] xl:top-[63%] 2xl:top-[55%] 3xl:top-[59%] 4xl:top-[60.8%] 5xl:top-[65%] 6xl:top-[55%] left-[5%] smallest:left-[2%] sm:left-[3%] md:left-[3%] lg:left-[60%] xl:left-[70%] 5xl:left-[70%] 6xl:left-[68%] space-x-2 md:space-x-4 xl:space-x-6 2xl:space-x-10 6xl:space-x-210 lg:rotate-6">
            <Link href="projects">
              <MovingBorderButton className="font-bold">
                Recent Work!
              </MovingBorderButton>
            </Link>
            <Link href="mailto:matt.ranford16@gmail.com">
              <MovingBorderButton className="font-bold">
                How Can I Help You?
              </MovingBorderButton>
            </Link>
          </div> */}
        </motion.div>

        <div className={titan.className}>
          <h2 className="ps-2 sm:ps-8 xl:ps-6 pe-2 pt-14 xl:pt-8 2xl:pt-28 4xl:pt-16 5xl:pt-40 6xl:pt-44 text-7xl sm:text-8xl md:text-[5.2rem] lg:text-[7.5rem] xl:text-9xl 2xl:text-[11rem] 3xl:text-[12.8rem] 4xl:text-[14.5rem] 5xl:text-[17.2rem] 6xl:text-[18.2rem] text-center sm:text-left dark:text-orange-300 text-cyan-700 font-bold">
            <motion.span
              initial={{ opacity: 0 }}
              transition={{
                delay: 3,
                duration: 2.5,
                ease: 'easeInOut',
              }}
              animate={{ opacity: 1 }}
            >
              FULL-STACK
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0 }}
              transition={{
                delay: 3.5,
                duration: 2.5,
                ease: 'easeInOut',
              }}
              animate={{ opacity: 1 }}
            >
              DEVELOPER
            </motion.span>
          </h2>
        </div>
      </main>
    </>
  )
}
