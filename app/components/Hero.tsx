'use client'

import Image from 'next/image'

import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from '@/components/ui/typewriter-effect'

import { Highlight, HeroHighlight } from '@/components/ui/hero-highlight'

export default function Hero() {
  const firstHeader = [
    {
      text: 'Hey',
    },
    {
      text: 'there!',
    },
  ]

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
    // Doesn't like the emoji and won't render
    // {
    //   text: '👋🏽',
    // },
  ]

  return (
    <>
      <div className="relative">
        <Image
          src="/portfolio-hero.jpg"
          width={2732}
          height={1536}
          alt="Photo of me in Canada with sunset in the background"
          // className="opacity-90"
        />
        <section className="absolute inset-0 md:max-w-full mx-6 lg:mx-14 2xl:mx-36 pt-14 lg:pt-0 2xl:pt-56 mt-52 2xl:mt-60 ">
          <div className="flex lg:flex-row">
            <div className="space-y-4 2xl:space-y-6 text-left">
              <h1>
                <TypewriterEffectSmooth words={firstHeader} />

                <div className="text-5xl lg:text-7xl 2xl:text-9xl pt-2 2xl:pt-6 sm:text-left px-4 font-bold text-yellow-600">
                  <Highlight>{"I'm Matt."}</Highlight>
                </div>
              </h1>
              <h2>
                <TypewriterEffect words={secondHeader} />
              </h2>
              <p className="max-w-2xl 2xl:max-w-5xl text-lg text-white md:text-stone-950 pb-4">
                {
                  "A full-stack developer hailing from the vibrant city of Wellington, New Zealand. My passion lies in crafting captivating front-end experiences, ensuring that every user interacts seamlessly with the interface. Let's build something amazing together!"
                }
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
