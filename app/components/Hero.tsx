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
      <div className="relative">
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
        <div className="absolute text-xl rounded-md p-2 top-[65%] left-[71.5%] space-x-2">
          <MovingBorderButton className="border border-white">
            Recent Work!
          </MovingBorderButton>
          <MovingBorderButton className="border border-white">
            Lets Work Together!
          </MovingBorderButton>
        </div>

        <h2 className="text-7xl to-sm:text-6xl sm:text-7xl md:text-[5.5rem] lg:text-8xl xl:text-[9.3rem] 2xl:text-[12rem] 3xl:text-[18rem] text-center sm:text-left ps-4 sm:ps-6 lg:ps-8 pt-96 to-sm:pt-96 sm:pt-80 md:pt-72 xl:pt-20 2xl:pt-96 3xl:pt-[38rem] font-bold dark:text-amber-600 text-stone-900">
          FULL-STACK DEVELOPER
        </h2>
      </div>
      {/* <main className="">
        <section className="absolute pt-20 sm:pt-32 md:pt-36 lg:pt-24 2xl:pt-40 px-2 md:px-8 2xl:px-10">
          <div className="space-y-4 2xl:space-y-6 text-left"> */}
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
      {/* //   </section> */}
      {/* // </main> */}
    </>
  )
}

// Might need to look at how the button border is running and the colours
// Add links for buttons
// Maybe add a third button for resume
// Testing h-dvh for container
// Commented out ultra font class for now
