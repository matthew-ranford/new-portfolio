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
  //   const firstLine = '🌎 Wellington, New Zealand'
  //   const secondLine = '💼 How can i be of service?'
  //   const thirdLine = '☕ Coffee? On me!'
  //   const fourthLine = '💡 Lets build something amazing together!'

  const firstLine = 'A Full-Stack Developer, who has found he is'

  const secondLine =
    'Extremely passionate about Front-End, Accessibility, & trying to optimize his applications for the best practices & performance.'

  //   <TextGenerateEffect
  //   words={firstLine}
  //   delay={3000}
  //   className="hover:scale-95"
  // />
  // <TextGenerateEffect
  //   words={secondLine}
  //   delay={3800}
  //   className="hover:scale-95"
  // />
  // <TextGenerateEffect
  //   words={thirdLine}
  //   delay={4600}
  //   className="hover:scale-95"
  // />
  // <TextGenerateEffect
  //   words={fourthLine}
  //   delay={5200}
  //   className="hover:scale-95"
  // />

  // ps-2 sm:ps-6 lg:ps-8 pe-2 smallest:pt-36 smaller:pt-48 to-sm:pt-36 small:pt-44 smallAgain:pt-48 smallerAgain:pt-52 sm:pt-44 md:pt-20 xl:pt-6 4xl:pt-10 5xl:pt-32 6xl:pt-32 pt-36 xl:space-y-4 4xl:space-y-2 5xl:space-y-3 6xl:space-y-3 text-4xl max-w-3xl

  return (
    <>
      <main id="home" className="relative">
        <MainHeaderNav />
        <div className="ps-6 xl:ps-8 pe-4 space-y-4 2xl:space-y-8 5xl:space-y-24 6xl:space-y-28 pt-28 sm:pt-44 md:pt-56 lg:pt-20 xl:pt-12 2xl:pt-24 3xl:pt-36 4xl:pt-48 5xl:pt-40 6xl:pt-24 max-w-3xl lg:max-w-2xl xl:max-w-3xl 5xl:max-w-4xl 6xl:max-w-7xl">
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
          <div className="absolute p-2 top-[22%] sm:top-[30%] md:top-[40%] lg:top-[58%] xl:top-[62%] 2xl:top-[55%] 3xl:top-[59%] 4xl:top-[60.8%] 5xl:top-[65%] 6xl:top-[58%] left-[5%] smallest:left-[2%] sm:left-[2%] md:left-[10%] lg:left-[60%] xl:left-[65%] 5xl:left-[70%] space-x-2 sm:rotate-6">
            <Link href="projects">
              <MovingBorderButton>Recent Work!</MovingBorderButton>
            </Link>
            <MovingBorderButton href="#" className="">
              Lets Work Together!
            </MovingBorderButton>
          </div>
        </motion.div>
        <h2 className="ps-2 md:ps-6 pe-2 pt-10 2xl:pt-28 4xl:pt-16 5xl:pt-40 6xl:pt-40 text-7xl sm:text-8xl md:text-[5.2rem] lg:text-[7.5rem] xl:text-[9.5rem] 2xl:text-[11rem] 3xl:text-[12.8rem] 4xl:text-[14.5rem] 5xl:text-[17.2rem] 6xl:text-[18.2rem] text-center md:text-left dark:text-zinc-200 text-stone-900 font-bold">
          <Highlight>FULL-STACK DEVELOPER</Highlight>
        </h2>
      </main>
    </>
  )
}

// Add links for buttons

// button div //
// smallest:top-[27%] smallest:left-[20%] smaller:top-[28%] smaller:left-[28%] to-sm:top-[35%] to-sm:left-[36%] small:top-[32%] small:left-[40%] smallAgain:top-[33%] smallAgain:left-[40%] smallerAgain:top-[35%] smallerAgain:left-[45%] sm:top-[38%] sm:left-[40%] md:top-[35%] md:left-[50%] lg:top-[48%] lg:left-[45%] xl:top-[64%] xl:left-[62%] 2xl:top-[63%] 2xl:left-[55%] 3xl:top-[62%] 3xl:left-[55%] 4xl:top-[64%] 4xl:left-[57%] 5xl:top-[58%] 5xl:left-[60%] 6xl:top-[59%] 6xl:left-[55%] top-[32%] left-[23%] space-x-2 rotate-6

// h2 div //
// smallest:text-[5.1rem] smallest:leading-none text-7xl smaller:text-[5.3rem] smaller:leading-none to-sm:text-[3.4rem] small:text-7xl sm:text-7xl md:text-[5.3rem] lg:text-[7rem] xl:text-[9.5rem] 2xl:text-[11rem] 3xl:text-[13rem] 4xl:text-[14rem] 5xl:text-[17rem] 6xl:text-[18rem] text-left to-sm:text-left sm:text-left ps-4 sm:ps-6 lg:ps-8 pe-4 sm:pe-0 smallest:pt-[4.5rem] pt-24 to-sm:pt-12 small:pt-16 smallAgain:pt-12 smallerAgain:pt-12 sm:pt-20 md:pt-16 lg:pt-12 xl:pt-12 2xl:pt-12 3xl:pt-24 4xl:pt-24 5xl:pt-52 6xl:pt-24 font-bold dark:text-zinc-200 text-stone-900
