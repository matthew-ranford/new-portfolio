'use client'

import Image from 'next/image'
import Link from 'next/link'
import { titan } from '@/fonts'
import { motion } from 'framer-motion'

// Main page image
import heroImage from '../../public/images/hero-image-new-test-14.png'
import heroPhoneImage from '../../public/images/hero-image-phone-test.png'

// Components
import MainHeaderNav from './MainHeaderNav'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { TextGenerateEffectWithWave } from '@/components/ui/text-generate-effect-with-wave'
import { TextGenerateEffectWithGlobe } from '@/components/ui/text-generate-effect-with-globe'
import { FlipWords } from '@/components/ui/flip-words'
import RecentProjects from './RecentProjects'

// TextGenerateEffect
const firstLine = "Hi! I'm Matthew Ranford"
const secondLine = 'Based in Wellington, New Zealand'
const thirdLine = 'Need a website? - Let me help you!'

// Flip words
const words = ['Designer', 'Developer']

export default function Hero() {
  return (
    <>
      <main id="home" className="">
        <MainHeaderNav />
        {/* TODO: 
                  - Fix wave emoji on large and 6xl screens
                  - Maybe do a contact form modal
                  - Recent Projects on Hero Screen/change "projects" to recent projects button - view all projects button in Recent projects component
                  - Make flip words a little smaller for mobile screens
                  - look at putting in a breadcrumb for the navbar at the bottom of the hero page
         */}
        <div className="pt-20 sm:pt-16 lg:pt-20 2xl:pt-20 6xl:pt-44 xl:max-w-6xl 2xl:max-w-full space-y-3 2xl:space-y-4 flex flex-col items-center justify-center font-normal dark:font-bold z-index">
          <div className={titan.className}>
            <TextGenerateEffectWithWave
              words={firstLine}
              delay={1200}
              size="xlarge"
            />
          </div>
          <TextGenerateEffectWithGlobe
            words={secondLine}
            delay={1800}
            size="medium"
          />
          <TextGenerateEffect words={thirdLine} delay={2400} size="medium" />
          <motion.div
            initial={{ opacity: 0 }}
            transition={{
              delay: 2.5,
              duration: 2.5,
              ease: 'easeInOut',
            }}
            animate={{ opacity: 1 }}
            className="pt-4 text-center sm:text-left 6xl:text-3xl"
          >
            <button className="border-3 border-stone-800 rounded-xl bg-[#66045f] transition-all duration-1000 dark:hover:bg-stone-800 dark:hover:text-[#004aad] hover:bg-zinc-300 dark:text-zinc-300 text-stone-900 hover:text-[#004aad] drop-shadow-[4px_4px_0px_#1c1917] py-3 px-3 sm:px-4 sm:py-4 6xl:px-8 font-bold">
              <Link href="#recent-projects">Check recent projects</Link>
            </button>
            <button className="border-3 border-stone-800 rounded-xl dark:bg-zinc-300 bg-stone-800 dark:text-[#004aad] text-[#004aad] transition-all duration-1000 hover:bg-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-[#004aad] hover:text-[#004aad] drop-shadow-[5px_5px_0px_#1c1917] py-3 px-3 sm:px-4 sm:py-4 6xl:px-8 mx-2 lg:mx-4 font-bold">
              <Link href="mailto:matt.ranford16@gmail.com">
                Direct email message
              </Link>
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
            className="hero-image hidden sm:block"
          />
          <Image
            src={heroPhoneImage}
            width={1080}
            height={1920}
            alt="Photo of Matt"
            className="hero-image sm:hidden"
          />
        </motion.div>

        <div className={titan.className}>
          <h2 className="ps-2 sm:ps-8 xl:ps-14 pe-4 pt-4 sm:pt-6 xl:pt-2 text-6xl sm:text-7xl md:text-[5.3rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[10.5rem] 6xl:text-[16rem] text-center sm:text-left dark:text-zinc-300 text-stone-800 dark:drop-shadow-[6px_6px_0px_#004aad] drop-shadow-[6px_6px_0px_#66045f] font-bold z-index">
            <motion.span
              initial={{ opacity: 0 }}
              transition={{
                delay: 2.5,
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
                delay: 2.7,
                duration: 2.5,
                ease: 'easeInOut',
              }}
              animate={{ opacity: 1 }}
            >
              <FlipWords words={words} />
            </motion.span>
          </h2>
        </div>
      </main>
      <RecentProjects />
    </>
  )
}
