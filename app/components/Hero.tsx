'use client'

import Image from 'next/image'

import { ultra, anton } from '@/fonts'

import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from '@/components/ui/typewriter-effect'
import { Highlight } from '@/components/ui/hero-highlight'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { MovingBorderButton } from '@/components/ui/moving-border'

export default function Hero() {
  // TypeWriterEffectSmooth
  const firstHeader = [
    {
      text: 'Hey',
    },
    {
      text: 'there!',
    },
  ]

  // TypeWriterEffect
  const secondHeader = [
    {
      text: 'Welcome',
    },
    {
      text: 'to',
    },
    {
      text: 'my',
    },
    {
      text: 'portfolio',
    },
  ]

  // TextGenerateEffect
  const words =
    "A full-stack developer hailing from the vibrant city of Wellington, New Zealand. My passion lies in crafting captivating front-end experiences, ensuring that every user interacts seamlessly with the interface. Let's build something amazing together!"

  return (
    <>
      <div className="relative h-dvh">
        <Image
          src="/test-hero.jpg"
          width="2732"
          height="1536"
          priority={true}
          alt="Photo of me in Canada with sunset in the background"
          // className="opacity-90"
        />
        {/* <div className={ultra.className}> */}
        <section className="absolute inset-0 md:max-w-full mx-6 lg:mx-14 2xl:mx-36 pt-16 lg:pt-0 2xl:pt-56 mt-52 2xl:mt-60">
          <div className="flex lg:flex-row">
            <div className="space-y-4 2xl:space-y-6 text-left">
              <h1>
                <TypewriterEffectSmooth words={firstHeader} />

                <div className="text-4xl sm:text-5xl lg:text-7xl 2xl:text-9xl pt-2 2xl:pt-6 sm:text-left px-2 font-bold text-yellow-600">
                  <Highlight>{"I'm Matt."}</Highlight>
                </div>
              </h1>
              <h2>
                <TypewriterEffect words={secondHeader} />
              </h2>
              <div>
                <TextGenerateEffect words={words} />
              </div>
              <div className="text-center lg:text-left mx-0 sm:mx-10">
                <div className={anton.className}>
                  <div className="flex space-x-4 justify-center md:justify-normal sm:space-x-8">
                    <MovingBorderButton
                      href="#"
                      borderRadius="0.5rem"
                      className="text-lg sm:text-xl text-black relative flex h-[50px] w-40 items-center justify-center overflow-hidden shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-pink-500 before:duration-1000 before:ease-out hover:from-pink-500 hover:to-fuchsia-800 hover:before:h-56 hover:before:w-56"
                    >
                      <span className="relative z-10">My Projects ⬇️</span>
                    </MovingBorderButton>
                    <MovingBorderButton
                      href="#"
                      borderRadius="0.5rem"
                      className="text-lg sm:text-xl text-black relative flex h-[50px] w-40 items-center justify-center overflow-hidden shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-fuchsia-800 before:duration-1000 before:ease-out hover:from-pink-500 hover:to-fuchsia-800 hover:before:h-56 hover:before:w-56"
                    >
                      <span className="relative z-10">Contact Me ⬇️</span>
                    </MovingBorderButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* </div> */}
    </>
  )
}

// Might need to look at how the button border is running and the colours
// Add links for buttons
// Maybe add a third button for resume
// Testing h-dvh for container
// Commented out ultra font class for now
