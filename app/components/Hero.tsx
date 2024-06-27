'use client'

import Image from 'next/image'

import { Highlight } from '@/components/ui/hero-highlight'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { MovingBorderButton } from '@/components/ui/moving-border'
import { motion } from 'framer-motion'
import Link from 'next/link'
import MainHeaderNav from './MainHeaderNav'
import { handlee } from '@/fonts'

export default function Hero() {
  // TextGenerateEffect
  const firstLine = "Based in Wellington, New Zealand, I'm an"
  const secondLine =
    'Extremely passionate Developer, with a strong interest in Front-End, Accessibility, & trying to optimize applications for the best practices & performance.'

  return (
    <>
      <main id="home" className="relative">
        <MainHeaderNav />
        <div className="ps-6 xl:ps-8 pe-4 space-y-4 xl:space-y-10 2xl:space-y-8 5xl:space-y-24 6xl:space-y-32 pt-28 sm:pt-44 md:pt-56 lg:pt-20 xl:pt-8 2xl:pt-24 3xl:pt-36 4xl:pt-48 5xl:pt-40 6xl:pt-24 max-w-3xl lg:max-w-2xl xl:max-w-3xl 5xl:max-w-4xl 6xl:max-w-7xl">
          <TextGenerateEffect words={firstLine} delay={3000} />
          <TextGenerateEffect words={secondLine} delay={4400} />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          animate={{ opacity: 1 }}
        >
          <Image
            src="/hero-image-test.png"
            width="2732"
            height="1536"
            alt=""
            className="hero-image"
          />
          <div className={handlee.className}>
            <div className="absolute p-2 top-[22%] sm:top-[30%] md:top-[40%] lg:top-[58%] xl:top-[63%] 2xl:top-[55%] 3xl:top-[59%] 4xl:top-[60.8%] 5xl:top-[65%] 6xl:top-[58%] left-[5%] smallest:left-[2%] sm:left-[2%] md:left-[10%] lg:left-[60%] xl:left-[65%] 5xl:left-[70%] space-x-2 xl:space-x-6 2xl:space-x-10 6xl:space-x-20 sm:rotate-6">
              <Link href="projects">
                <MovingBorderButton className="font-bold">
                  Recent Work!
                </MovingBorderButton>
              </Link>
              <MovingBorderButton className="font-bold">
                Lets Work Together!
              </MovingBorderButton>
            </div>
          </div>
        </motion.div>
        <h2 className="ps-2 md:ps-6 pe-2 pt-10 2xl:pt-28 4xl:pt-16 5xl:pt-40 6xl:pt-36 text-7xl sm:text-8xl md:text-[5.2rem] lg:text-[7.5rem] xl:text-[9.5rem] 2xl:text-[11rem] 3xl:text-[12.8rem] 4xl:text-[14.5rem] 5xl:text-[17.2rem] 6xl:text-[18.2rem] text-center md:text-left dark:text-zinc-200 text-stone-900 font-bold">
          <Highlight>FULL-STACK DEVELOPER</Highlight>
        </h2>
      </main>
    </>
  )
}

// Add links for buttons
