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
        className="about-image pt-28 xl:pt-48"
        // pt-20
      />

      <section id="about" className="md:max-w-full pt-4">
        {/* mx-6 lg:mx-14 2xl:mx-36 pt-20 mt-44 2xl:mt-60 */}
        <div className="space-y-4 2xl:space-y-6">
          <h1 className="text-left text-7xl to-sm:text-[3.3rem] sm:text-7xl md:text-[5.5rem] lg:text-8xl xl:text-[9.3rem] 2xl:text-[11rem] 3xl:text-[13rem] 4xl:text-[14rem] 5xl:text-[17.5rem] to-sm:text-center sm:text-right lg:text-center ps-4 sm:ps-6 lg:ps-20 pe-4 sm:pe-2  pt-12 to-sm:pt-16 small:pt-16 smallAgain:pt-16 smallerAgain:pt-16 sm:pt-24 md:pt-24 lg:pt-36 xl:pt-44 2xl:pt-12 3xl:pt-24 4xl:pt-24 5xl:pt-56 font-bold dark:text-amber-600 text-stone-900">
            Who I Am <span>?</span>
          </h1>
          <p className="dark:text-orange-300 text-cyan-700 text-right smallerAgain:text-center  sm:text-right lg:text-center ps-5 sm:ps-6 lg:ps-20 pe-12 smaller:pe-4 small:pe-4 smallAgain:pe-4 smallerAgain:pe-40 sm:pe-4 xl:ml-10 text-2xl sm:text-2xl lg:text-4xl 2xl:text-6xl">
            A little bit about me
          </p>

          <div className="dark:text-zinc-200 text-stone-900 flex items-center justify-center space-y-10 md:space-y-0 flex-wrap pt-24 smaller:pt-32 to-sm:pt-36 small:pt-36 smallAgain:pt-40 smallerAgain:pt-48 sm:pt-48 md:pt-20 lg:pt-28 xl:pt-44 2xl:pt-32 ps-4 sm:ps-6 lg:ps-8 pe-4 small:pe-3 sm:pe-2">
            <p className="max-w-2xl 2xl:max-w-4xl text-xl sm:text-2xl lg:text-3xl first-letter:text-7xl first-letter:float-start text-left md:text-right 2xl:text-left px-0 md:px-4 2xl:px-10">
              I&apos;m a Full-Stack Developer who recently completed a 17-week
              intensive boot camp learning full-stack software development at
              Dev Academy in December 2023.
              <p className="py-2 mt-4">
                Although I don&apos;t have a degree in design, I&apos;ve
                realized that I have a passion for Front-End, Accessibility &
                using the WAVE tool to optimize my applications for the best
                practices & performance, while also designing & creating
                anything I want to when starting with a blank canvas.
              </p>
              <p className="py-2 mt-4">
                It&apos;s exciting, and frustrating, and have found a much joy
                in the process of trying to be creative with a lot of
                problem-solving!
              </p>
              <p className="py-2 mt-4">
                I&apos;ve tried various roles in my life, none of them have
                stuck so this was one of the biggest challenges of my life,
                diving into the unknown. I still have a lot to learn, & I&apos;m
                excited to see where a career in tech takes me!
              </p>
            </p>
            <div className="max-w-2xl 2xl:max-w-3xl small:pt-4 smallAgain:pt-4 smallerAgain:pt-4 sm:pt-4 md:pt-8 lg:pt-20 pb-0 md:pb-10">
              <h2 className="text-right md:text-center text-2xl sm:text-2xl lg:text-4xl 2xl:text-6xl dark:text-orange-300 text-cyan-700 ps-5 sm:ps-6 lg:ps-8 pe-3 sm:pe-0 xl:-mt-[23rem]">
                Some of my other hobbies
              </h2>
              <HoverEffect items={skills} />
            </div>
          </div>
        </div>
        <div className="h-screen w-full pb-20">
          <h2 className="text-left md:text-center text-2xl sm:text-2xl lg:text-4xl 2xl:text-6xl dark:text-orange-300 text-cyan-700 ps-7 sm:ps-6 lg:ps-8 pe-4 sm:pe-0 small:pt-8 smallAgain:pt-8 smallerAgain:pt-8 sm:pt-8 md:pt-0 xl:pt-12">
            A couple of highlights
          </h2>
          <LayoutGrid cards={cards} />
        </div>
      </section>
    </>
  )
}

// Hydration error due to p tag being nested within p tag - need to fix
// Put all images into sub-folders for categories
