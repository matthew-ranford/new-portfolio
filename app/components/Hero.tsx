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

  TextGenerateEffect
  const words =
    "My passion lies in crafting captivating front-end experiences, ensuring that every user interacts seamlessly with the interface. Let's build something amazing together!"

  return (
    <>
      <main className="relative">
        <h1 className="ps-4 sm:ps-6 lg:ps-8 pt-4 sm:pt-8 md:pt-6 lg:pt-4 xl:pt-3">
          <TypewriterEffect words={mainHeader} />
        </h1>
        <div className="ps-4 sm:ps-6 lg:ps-8">
          <TextGenerateEffect words={words} />
        </div>
        <Image
          src="/hero-image-test.png"
          width="2732"
          height="1536"
          alt=""
          className="hero-image"
        />
        <div className="absolute p-2 top-[65%] left-[71.5%] space-x-2">
          <MovingBorderButton href="#" className="border border-white">
            Recent Work!
          </MovingBorderButton>
          <MovingBorderButton href="#" className="border border-white">
            Lets Work Together!
          </MovingBorderButton>
        </div>

        <h2 className="text-7xl to-sm:text-6xl sm:text-7xl md:text-[5.5rem] lg:text-8xl xl:text-[9.3rem] 2xl:text-[12rem] 3xl:text-[18rem] text-center sm:text-left ps-4 sm:ps-6 lg:ps-8 pt-96 to-sm:pt-96 sm:pt-80 md:pt-72 xl:pt-20 2xl:pt-96 3xl:pt-[38rem] font-bold dark:text-amber-600 text-stone-900">
          FULL-STACK DEVELOPER
        </h2>
      </main>
    </>
  )
}

// Add links for buttons
