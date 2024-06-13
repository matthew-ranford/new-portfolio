'use client'
import { useState, useRef, useEffect } from 'react'
import { LayoutGrid } from '@/components/ui/layout-grid'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import {
  FcReading,
  FcGlobe,
  FcSportsMode,
  FcFilmReel,
  FcIdea,
  FcLandscape,
} from 'react-icons/fc'

import Image from 'next/image'

// LayoutGrid
const FrameOne = () => {
  // Might put link in here from the canada site on was on for my photo

  return (
    <div>
      <p className=" text-4xl text-white">Invermere BC, Canada.</p>
      <p className="font-normal text-base my-4 max-w-xl text-neutral-400">
        Ice Skating & Ice Hockey on the longest skating trail in the world at
        Lake Windermere.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-400">
        I lived here for about two years.
      </p>
    </div>
  )
}

const FrameTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  )
}

const FrameThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  )
}

const FrameFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  )
}

const FrameFive = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  )
}

const FrameSix = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  )
}

const FrameSeven = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  )
}

const FrameEight = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  )
}

// LayoutGrid
const cards = [
  {
    id: 1,
    content: <FrameOne />,
    className: 'md:col-span-2',
    thumbnail: '/about-image-1.jpg',
  },
  {
    id: 2,
    content: <FrameTwo />,
    className: 'col-span-1',
    thumbnail: '/about-image-2.jpg',
  },
  {
    id: 3,
    content: <FrameThree />,
    className: 'col-span-1',
    thumbnail: '/about-image-3.jpg',
  },
  {
    id: 4,
    content: <FrameFour />,
    className: 'md:col-span-2',
    thumbnail: '/about-image-4.jpg',
  },
  {
    id: 5,
    content: <FrameFive />,
    className: 'md:col-span-2',
    thumbnail: '/about-image-5.jpg',
  },
  {
    id: 6,
    content: <FrameSix />,
    className: 'col-span-1',
    thumbnail: '/about-image-6.jpg',
  },
  {
    id: 7,
    content: <FrameSeven />,
    className: 'md:col-span-2',
    thumbnail: '/about-image-7.jpg',
  },
  {
    id: 8,
    content: <FrameEight />,
    className: 'col-span-1',
    thumbnail: '/about-image-8.jpg',
  },
]

// HoverEffect
const skills = [
  {
    text: 'Reading',
    icon: FcReading,
  },
  {
    text: 'Travel',
    icon: FcGlobe,
  },
  {
    text: 'Sport',
    icon: FcSportsMode,
  },
  {
    text: 'Marvel',
    icon: FcFilmReel,
  },
  {
    text: 'Greenhouse',
    icon: FcLandscape,
  },
  {
    text: 'Mindfulness',
    icon: FcIdea,
  },
]

export default function About() {
  return (
    <>
      <Image
        src="/divider.png"
        width="2732"
        height="1536"
        alt=""
        className="divider"
      />

      <Image
        src="/about-image-test.png"
        width="2732"
        height="1536"
        alt=""
        className="about-image pt-20 xl:pt-48"
      />

      <section
        id="about"
        className="md:max-w-full mx-6 lg:mx-14 2xl:mx-36 pt-10 mt-44 2xl:mt-60"
      >
        <div className="space-y-4 2xl:space-y-6">
          <h1 className="text-center text-7xl to-sm:text-[3.3rem] sm:text-7xl md:text-[5.5rem] lg:text-8xl xl:text-[9.3rem] 2xl:text-[11rem] 3xl:text-[13rem] 4xl:text-[14rem] 5xl:text-[17.5rem] to-sm:text-left sm:text-right ps-4 sm:ps-6 lg:ps-8 pe-4 sm:pe-0 pt-12 to-sm:pt-10 sm:pt-20 md:pt-20 xl:pt-6 2xl:pt-12 3xl:pt-24 4xl:pt-24 5xl:pt-56 font-bold dark:text-amber-600 text-stone-900">
            Who I Am <span>?</span>
          </h1>
          <p className="text-center ml-96 pl-72 text-xl sm:text-2xl lg:text-4xl 2xl:text-6xl">
            A little bit about me
          </p>
          <div className="flex items-center justify-center space-y-10 md:space-y-0 flex-wrap pt-20 2xl:pt-32">
            <p className="max-w-2xl 2xl:max-w-4xl text-xl sm:text-2xl lg:text-3xl first-letter:text-7xl first-letter:float-start text-left md:text-right 2xl:text-left px-0 md:px-4 2xl:px-10">
              I&apos;m a Full-Stack Developer who recently completed a 17-week
              intensive boot camp learning full-stack software development at
              Dev Academy.
              <p className="py-2 mt-4">
                I&apos;ve tried various roles in my life, none of them have
                stuck so this was one of the biggest challenges of my life,
                diving into the unknown. I still have a lot to learn, & I&apos;m
                excited to see where a career in tech takes me!
              </p>
            </p>
            <div className="max-w-2xl 2xl:max-w-3xl pb-0 md:pb-10">
              <h2 className="text-center text-2xl text-yellow-600">
                Some of my other Hobbies
              </h2>
              <HoverEffect items={skills} />
            </div>
          </div>
        </div>
        <div className="h-screen  w-full">
          <LayoutGrid cards={cards} />
        </div>
      </section>
    </>
  )
}

// Hydration error due to p tag being nested within p tag - need to fix
// Put all images into sub-folders for categories
