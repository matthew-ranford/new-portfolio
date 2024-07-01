'use client'

import Image from 'next/image'
import Link from 'next/link'
import { handlee } from '@/fonts'
import { motion } from 'framer-motion'

// Main page image
import heroImage from '../../public/images/hero-image.png'

// Components
import MainHeaderNav from './MainHeaderNav'
import { Highlight } from '@/components/ui/hero-highlight'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { MovingBorderButton } from '@/components/ui/moving-border'

// TextGenerateEffect
const firstLine = 'Based in Wellington, New Zealand'
const secondLine =
  "I'm an extremely passionate Developer, with a strong interest in Front-End, Accessibility, & trying to optimize applications for the best practices & performance."

export default function Hero() {
  return (
    <>
      <main id="home" className="relative overflow-hidden">
        <MainHeaderNav />
        <div className="ps-10 xl:ps-8 pe-4 space-y-4 xl:space-y-10 2xl:space-y-8 5xl:space-y-24 6xl:space-y-32 pt-36 sm:pt-44 md:pt-56 lg:pt-20 xl:pt-8 2xl:pt-24 3xl:pt-36 4xl:pt-48 5xl:pt-40 6xl:pt-24 max-w-3xl lg:max-w-2xl xl:max-w-3xl 5xl:max-w-4xl 6xl:max-w-screen-2xl">
          <TextGenerateEffect words={firstLine} delay={4000} />
          <TextGenerateEffect words={secondLine} delay={5400} />
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
            src="/images/hero-image-test-0.png"
            width="2732"
            height="1536"
            alt="Hero image of Matt on lake with hockey stick"
            className="hero-image"
          />
          <div className={handlee.className}>
            <div className="absolute p-2 top-[22%] sm:top-[30%] md:top-[40%] lg:top-[58%] xl:top-[63%] 2xl:top-[55%] 3xl:top-[59%] 4xl:top-[60.8%] 5xl:top-[65%] 6xl:top-[58%] left-[5%] smallest:left-[2%] sm:left-[2%] md:left-[10%] lg:left-[60%] xl:left-[70%] 5xl:left-[70%] 6xl:left-[68%] space-x-2 xl:space-x-6 2xl:space-x-10 6xl:space-x-210 sm:rotate-6">
              <Link href="projects">
                <MovingBorderButton className="font-bold">
                  Recent Work!
                </MovingBorderButton>
              </Link>
              <Link href="mailto:matt.ranford16@gmail.com">
                <MovingBorderButton className="font-bold">
                  Lets Work Together!
                </MovingBorderButton>
              </Link>
            </div>
          </div>
        </motion.div>

        <h2 className="ps-2 md:ps-6 pe-2 pt-10 2xl:pt-28 4xl:pt-16 5xl:pt-40 6xl:pt-44 text-7xl sm:text-8xl md:text-[5.2rem] lg:text-[7.5rem] xl:text-[9.5rem] 2xl:text-[11rem] 3xl:text-[12.8rem] 4xl:text-[14.5rem] 5xl:text-[17.2rem] 6xl:text-[18.2rem] text-center md:text-left dark:text-orange-300 text-cyan-700 font-bold">
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
      </main>
    </>
  )
}
