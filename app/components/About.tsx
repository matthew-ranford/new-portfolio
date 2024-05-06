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

const FrameOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
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
]

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
      <section
        id="about"
        className="md:max-w-full mx-6 lg:mx-14 2xl:mx-36 pt-10 mt-52 2xl:mt-60"
      >
        <div className="space-y-4 2xl:space-y-6">
          <h1 className="text-center text-4xl sm:text-5xl lg:text-7xl 2xl:text-9xl text-yellow-600">
            Who I Am <span>?</span>
          </h1>
          <p className="text-center text-xl sm:text-2xl lg:text-4xl 2xl:text-6xl">
            A little bit about me
          </p>
          <div className="flex items-center justify-center space-y-10 md:space-y-0 flex-wrap pt-10 2xl:pt-32">
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

        <div className="flex lg:flex-row">
          <div className="h-screen py-2 pt-10 w-full">
            <LayoutGrid cards={cards} />
          </div>
        </div>
      </section>
    </>
  )
}
