'use client'

import Image from 'next/image'

import { Highlight } from '@/components/ui/hero-highlight'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { MovingBorderButton } from '@/components/ui/moving-border'
import { motion } from 'framer-motion'
import Link from 'next/link'
import MainHeaderNav from './MainHeaderNav'

export default function Hero() {
  // TextGenerateEffect
  const firstLine = '🌎 Wellington, New Zealand'
  const secondLine = '💼 How can i be of service?'
  const thirdLine = '☕ Coffee? On me!'
  const fourthLine = '💡 Lets build something amazing together!'

  return (
    <>
      <main id="home" className="relative">
        <MainHeaderNav />
        <div className="ps-2 sm:ps-6 lg:ps-8 pe-2 smallest:pt-36 smaller:pt-48 to-sm:pt-36 small:pt-44 smallAgain:pt-48 smallerAgain:pt-52 sm:pt-44 md:pt-20 xl:pt-6 4xl:pt-20 5xl:pt-32 6xl:pt-32 pt-36 4xl:space-y-2 5xl:space-y-3 6xl:space-y-3">
          <TextGenerateEffect
            words={firstLine}
            delay={3000}
            className="hover:scale-95"
          />
          <TextGenerateEffect
            words={secondLine}
            delay={3800}
            className="hover:scale-95"
          />
          <TextGenerateEffect
            words={thirdLine}
            delay={4600}
            className="hover:scale-95"
          />
          <TextGenerateEffect
            words={fourthLine}
            delay={5200}
            className="hover:scale-95"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            delay: 0.8,
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
          <div className="absolute p-2 smallest:top-[27%] smallest:left-[20%] smaller:top-[28%] smaller:left-[28%] to-sm:top-[35%] to-sm:left-[36%] small:top-[32%] small:left-[40%] smallAgain:top-[33%] smallAgain:left-[40%] smallerAgain:top-[35%] smallerAgain:left-[45%] sm:top-[38%] sm:left-[40%] md:top-[35%] md:left-[50%] lg:top-[48%] lg:left-[45%] xl:top-[65%] xl:left-[52%] 2xl:top-[63%] 2xl:left-[55%] 3xl:top-[62%] 3xl:left-[55%] 4xl:top-[64%] 4xl:left-[57%] 5xl:top-[58%] 5xl:left-[60%] 6xl:top-[59%] 6xl:left-[55%] top-[32%] left-[23%] space-x-2 rotate-6">
            <Link href="projects">
              <MovingBorderButton>Recent Work!</MovingBorderButton>
            </Link>
            <MovingBorderButton href="#" className="">
              Lets Work Together!
            </MovingBorderButton>
          </div>
        </motion.div>
        <h2 className="smallest:text-[5.1rem] smallest:leading-none text-7xl smaller:text-[5.3rem] smaller:leading-none to-sm:text-[3.4rem] small:text-7xl sm:text-7xl md:text-[5.3rem] lg:text-[7rem] xl:text-[9.5rem] 2xl:text-[11rem] 3xl:text-[13rem] 4xl:text-[14rem] 5xl:text-[17rem] 6xl:text-[18rem] text-left to-sm:text-left sm:text-left ps-4 sm:ps-6 lg:ps-8 pe-4 sm:pe-0 smallest:pt-[4.5rem] pt-24 to-sm:pt-12 small:pt-16 smallAgain:pt-12 smallerAgain:pt-12 sm:pt-20 md:pt-16 lg:pt-12 xl:pt-4 2xl:pt-12 3xl:pt-24 4xl:pt-24 5xl:pt-52 6xl:pt-24 font-bold dark:text-zinc-200 text-stone-900">
          <Highlight>FULL-STACK DEVELOPER</Highlight>
        </h2>
      </main>
    </>
  )
}

// Add links for buttons
