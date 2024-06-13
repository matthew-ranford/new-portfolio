'use client'

import Image from 'next/image'

import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import { Highlight } from '@/components/ui/hero-highlight'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { MovingBorderButton } from '@/components/ui/moving-border'

export default function Hero() {
  // TypeWriterEffect
  const mainHeader = [
    {
      text: 'MATTHEW',
    },
    { text: 'RANFORD' },
  ]

  // TextGenerateEffect
  // const words =
  //   "My passion lies in crafting captivating front-end experiences, ensuring that every user interacts seamlessly with the interface. Let's build something amazing together!"

  const firstLine = '🌎 Wellington, New Zealand'
  const secondLine = '💼 How can i be of service?'
  const thirdLine = '☕ Coffee? On me!'
  const fourthLine = '💡 Lets build something amazing together!'

  return (
    <>
      <main className="relative">
        <h1 className="ps-4 sm:ps-6 lg:ps-8 pt-4 sm:pt-8 md:pt-6 lg:pt-4 xl:pt-3">
          <TypewriterEffect words={mainHeader} />
        </h1>
        <div className="ps-2 sm:ps-6 lg:ps-8 smallest:pt-48 smaller:pt-56 to-sm:pt-48 small:pt-64 smallAgain:pt-64 smallerAgain:pt-72 sm:pt-80 md:pt-20 xl:pt-6 4xl:pt-20 5xl:pt-32 pt-44 4xl:space-y-2 5xl:space-y-3">
          <TextGenerateEffect words={firstLine} delay={3000} />
          <TextGenerateEffect words={secondLine} delay={3800} />
          <TextGenerateEffect words={thirdLine} delay={4400} />
          <TextGenerateEffect words={fourthLine} delay={5000} />
        </div>
        <Image
          src="/hero-image-test.png"
          width="2732"
          height="1536"
          alt=""
          className="hero-image"
        />
        <div className="absolute p-2 smallest:top-[35%] smallest:left-[20%] smaller:top-[38%] smaller:left-[28%] to-sm:top-[50%] to-sm:left-[36%] small:top-[45%] small:left-[40%] smallAgain:top-[48%] smallAgain:left-[45%] smallerAgain:top-[50%] smallerAgain:left-[49%] sm:top-[48%] sm:left-[40%] md:top-[45%] md:left-[50%] lg:top-[60%] lg:left-[60%] xl:top-[68%] xl:left-[72%] 2xl:top-[70%] 2xl:left-[76%] 3xl:top-[74%] 3xl:left-[63%] 4xl:top-[75%] 4xl:left-[63%] 5xl:top-[70%] 5xl:left-[63%] top-[35%] left-[23%] space-x-2 rotate-6">
          <MovingBorderButton href="#" className="">
            Recent Work!
          </MovingBorderButton>
          <MovingBorderButton href="#" className="">
            Lets Work Together!
          </MovingBorderButton>
        </div>
        <h2 className="text-7xl to-sm:text-[3.3rem] sm:text-7xl md:text-[5.5rem] lg:text-8xl xl:text-[9.3rem] 2xl:text-[11rem] 3xl:text-[13rem] 4xl:text-[14rem] 5xl:text-[17.5rem] text-right to-sm:text-left sm:text-left ps-4 sm:ps-6 lg:ps-8 pe-4 sm:pe-0 pt-12 to-sm:pt-10 sm:pt-20 md:pt-20 xl:pt-6 2xl:pt-12 3xl:pt-24 4xl:pt-24 5xl:pt-56 font-bold dark:text-amber-600 text-stone-900">
          FULL-STACK DEVELOPER
        </h2>
      </main>
    </>
  )
}

// Add links for buttons
