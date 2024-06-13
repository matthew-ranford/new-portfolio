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
        <div className="ps-2 sm:ps-6 lg:ps-8 smallest:pt-48 smaller:pt-56 to-sm:pt-48 pt-44">
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
        <div className="absolute p-2 smallest:top-[35%] smallest:left-[20%] smaller:top-[38%] smaller:left-[28%] to-sm:top-[50%] to-sm:left-[36%] small:top-[48%] small:left-[40%] smallAgain:top-[51%] smallAgain:left-[45%] smallerAgain:top-[55%] smallerAgain:left-[49%] sm:top-[42%] sm:left-[40%] md:top-[30%] md:left-[50%] lg:top-[45%] lg:left-[65%] xl:top-[65%] xl:left-[70%] top-[35%] left-[23%] space-x-2 rotate-6">
          <MovingBorderButton href="#" className="border border-white">
            Recent Work!
          </MovingBorderButton>
          <MovingBorderButton href="#" className="border border-white">
            Lets Work Together!
          </MovingBorderButton>
        </div>
        <h2 className="text-7xl to-sm:text-[3.3rem] sm:text-7xl md:text-[5.5rem] lg:text-8xl xl:text-[9.3rem] 2xl:text-[12rem] 3xl:text-[18rem] text-right to-sm:text-left sm:text-left ps-4 sm:ps-6 lg:ps-8 pe-4 sm:pe-0 pt-12 to-sm:pt-10 sm:pt-80 md:pt-72 xl:pt-6 2xl:pt-96 3xl:pt-[38rem] font-bold dark:text-amber-600 text-stone-900">
          FULL-STACK DEVELOPER
        </h2>
      </main>
    </>
  )
}

// Add links for buttons
