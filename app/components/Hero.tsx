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
  //   "A full-stack developer hailing from the vibrant city of Wellington, New Zealand. My passion lies in crafting captivating front-end experiences, ensuring that every user interacts seamlessly with the interface. Let's build something amazing together!"

  return (
    <>
      <h1 className="ps-4 sm:ps-6 lg:ps-8 pt-4 sm:pt-8 md:pt-6 lg:pt-4 xl:pt-3">
        <TypewriterEffect words={mainHeader} />
      </h1>

      <h2 className="text-7xl to-sm:text-6xl sm:text-7xl md:text-[5.5rem] lg:text-8xl xl:text-[9rem] 2xl:text-[12rem] 3xl:text-[18rem] text-center sm:text-left ps-4 sm:ps-6 lg:ps-8 pt-96 to-sm:pt-96 sm:pt-80 md:pt-72 xl:pt-48 2xl:pt-96 3xl:pt-[35rem] font-bold dark:text-amber-600 text-stone-900">
        FULL-STACK DEVELOPER
      </h2>

      {/* <main className="relative h-screen w-screen">
        <Image
          src="/test-hero.jpg"
          width="2732"
          height="1536"
          priority={true}
          alt="Photo of me in Canada with sunset in the background"
          className="hero-image"
        />

        <section className="absolute pt-20 sm:pt-32 md:pt-36 lg:pt-24 2xl:pt-40 px-2 md:px-8 2xl:px-10">
          <div className="space-y-4 2xl:space-y-6 text-left"> */}
      {/* <h1 className="ps-4 sm:ps-6 lg:ps-8">
              <TypewriterEffectSmooth words={firstHeader} />
            </h1> */}

      {/* <div className="text-4xl sm:text-5xl lg:text-7xl 2xl:text-9xl pt-2 2xl:pt-6 sm:text-left px-2 font-bold text-yellow-600">
              <Highlight>{"I'm Matt."}</Highlight>
            </div> */}
      {/* <h2>
              <TypewriterEffect words={secondHeader} />
            </h2> */}
      {/* <div>
              <TextGenerateEffect words={words} />
            </div> */}
      {/* <div className="text-center lg:text-left mx-0 sm:mx-10">
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
            </div> */}
      {/* </div> */}
      {/* </section> */}
      {/* </main> */}
    </>
  )
}

// Might need to look at how the button border is running and the colours
// Add links for buttons
// Maybe add a third button for resume
// Testing h-dvh for container
// Commented out ultra font class for now
