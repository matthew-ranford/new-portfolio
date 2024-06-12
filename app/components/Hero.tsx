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
  const fourthLine = '💡 Lets build something mazing together!'

  return (
    <>
      <main className="relative">
        <h1 className="ps-4 sm:ps-6 lg:ps-8 pt-4 sm:pt-8 md:pt-6 lg:pt-4 xl:pt-3">
          <TypewriterEffect words={mainHeader} />
        </h1>
        <div className="ps-2 sm:ps-6 lg:ps-8 smallest:pt-56 smaller:pt-64 pt-48">
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
        <div className="absolute p-2 smallest:top-[40%] smallest:left-[20%] smaller:top-[43%] smaller:left-[25%] top-[40%] left-[23%] md:top-[67.5%] md:left-[71.5%] space-x-2">
          <MovingBorderButton href="#" className="border border-white">
            Recent Work!
          </MovingBorderButton>
          <MovingBorderButton href="#" className="border border-white">
            Lets Work Together!
          </MovingBorderButton>
        </div>
        <h2 className="text-7xl to-sm:text-6xl sm:text-7xl md:text-[5.5rem] lg:text-8xl xl:text-[9.3rem] 2xl:text-[12rem] 3xl:text-[18rem] text-right sm:text-left ps-4 sm:ps-6 lg:ps-8 pe-4 sm:pe-0 pt-12 to-sm:pt-96 sm:pt-80 md:pt-72 xl:pt-6 2xl:pt-96 3xl:pt-[38rem] font-bold dark:text-amber-600 text-stone-900">
          FULL-STACK DEVELOPER
        </h2>
      </main>
    </>
  )
}

// Add links for buttons
