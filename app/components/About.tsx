'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
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
import {
  SiBootstrap,
  SiCanva,
  SiCrowdsource,
  // SiCss3,
  SiExpress,
  SiFramer,
  SiJabber,
  SiKakaotalk,
  // SiGit,
  // SiGithub,
  // SiHtml5,
  // SiJavascript,
  // SiKnexdotjs,
  SiNextdotjs,
  SiPayhip,
  // SiNodedotjs,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTeamspeak,
  SiTypescript,
  SiVeepee,
} from 'react-icons/si'

// LayoutGrid
const FrameOne = () => {
  return (
    <div>
      <p className="text-4xl dark:text-orange-300 text-cyan-700">
        Invermere, BC, Canada.
      </p>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-200">
        Ice Skating & Ice Hockey on the longest skating trail in the world at
        Lake Windermere.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-zinc-200">
        I lived here for about two years.
      </p>
    </div>
  )
}

const FrameTwo = () => {
  return (
    <div>
      <p className="text-4xl dark:text-orange-300 text-cyan-700">
        Lower Bugaboo Falls, Spillimacheen, Canada.
      </p>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-200">
        Hiking, exploring, sightseeing, & waterfalls.
      </p>
    </div>
  )
}

const FrameThree = () => {
  return (
    <div>
      <p className="text-4xl dark:text-orange-300 text-cyan-700">
        Welsh Lakes, East Kootenay, Canada.
      </p>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-200">
        More hiking, exploring, sightseeing, & unreal views.
      </p>
    </div>
  )
}

const FrameFour = () => {
  return (
    <div>
      <p className="text-4xl dark:text-orange-300 text-cyan-700">
        Lethbridge, AB, Canada.
      </p>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-200">
        Worked as a groundskeeper to maintain University grounds & snow-removal
        through winter, -40° was a regular..
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-zinc-200">
        Lethbridge University.
      </p>
    </div>
  )
}

const FrameFive = () => {
  return (
    <div>
      <p className="text-4xl dark:text-orange-300 text-cyan-700">
        Chiang Mai, Thailand.
      </p>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-200">
        Visting an elephant sanctuary with some friends, where we were able to
        bath and feed the elephants!
      </p>
    </div>
  )
}

const FrameSix = () => {
  return (
    <div>
      <p className="text-4xl dark:text-orange-300 text-cyan-700">
        Wellington, NZ.
      </p>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-200">
        I spent about five years at Immigration New Zealand. I finished as a
        Senior Immigration Officer.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-zinc-200">
        My last goodbye.
      </p>
    </div>
  )
}

const FrameSeven = () => {
  return (
    <div>
      <p className="text-4xl dark:text-orange-300 text-cyan-700">
        Chiang Mai, Thailand.
      </p>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-200">
        Cooking class with some friends.. along with our mentor for the day.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-zinc-200">
        Wasn&apos;t sure where the camera was.
      </p>
    </div>
  )
}

const FrameEight = () => {
  return (
    <div>
      <p className="text-4xl dark:text-orange-300 text-cyan-700">
        Fairmont, BC, Canada.
      </p>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-200">
        Dislocated my shoulder the first month living in Canada, working on
        Panorama Mountain Resort.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-zinc-200">
        Columbia Lake.
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
    className: 'md:col-span-1',
    thumbnail: '/about-image-7.jpg',
  },
  {
    id: 8,
    content: <FrameEight />,
    className: 'md:col-span-2',
    thumbnail: '/about-image-8.jpg',
  },
]

// HoverEffect
const hobbies = [
  {
    text: 'Reading',
    icon: FcReading,
  },
  {
    text: 'Travel',
    icon: FcGlobe,
  },
  {
    text: 'Exercise',
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

const techSkills = [
  // {
  //   text: 'HTML',
  //   icon: SiHtml5,
  // },
  // {
  //   text: 'CSS',
  //   icon: SiCss3,
  // },
  // {
  //   text: 'JavaScript',
  //   icon: SiJavascript,
  // },
  {
    text: 'React',
    icon: SiReact,
  },
  {
    text: 'Next.js',
    icon: SiNextdotjs,
  },
  {
    text: 'Tailwind',
    icon: SiTailwindcss,
  },
  {
    text: 'TypeScript',
    icon: SiTypescript,
  },
  // {
  //   text: 'Node',
  //   icon: SiNodedotjs,
  // },
  // {
  //   text: 'Git',
  //   icon: SiGit,
  // },
  // {
  //   text: 'GitHub',
  //   icon: SiGithub,
  // },
  {
    text: 'Express',
    icon: SiExpress,
  },
  // {
  //   text: 'Knex',
  //   icon: SiKnexdotjs,
  // },
  {
    text: 'SQLite3',
    icon: SiSqlite,
  },
  {
    text: 'Framer-motion',
    icon: SiFramer,
  },
  {
    text: 'Bootstrap',
    icon: SiBootstrap,
  },
  {
    text: 'Canva',
    icon: SiCanva,
  },
]

const humanSkills = [
  { text: 'Empathy', icon: SiPayhip },
  { text: 'Well-being', icon: SiVeepee },
  { text: 'Teamwork', icon: SiCrowdsource },
  { text: 'Communication', icon: SiKakaotalk },
  { text: 'Collaboration', icon: SiJabber },
  { text: 'Feedback', icon: SiTeamspeak },
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
        className="about-image pt-28 xl:pt-72"
        // pt-20
      />
      <section className="md:max-w-full pt-4">
        <div className="space-y-4 2xl:space-y-6">
          <h1 className="text-left text-7xl to-sm:text-[3.3rem] sm:text-7xl md:text-[5.5rem] lg:text-8xl xl:text-[9.3rem] 2xl:text-[11rem] 3xl:text-[13rem] 4xl:text-[14rem] 5xl:text-[17.5rem] 6xl:text-[18rem] to-sm:text-center sm:text-center lg:text-center ps-4 sm:ps-24 lg:ps-20 pe-4 sm:pe-2 pt-12 to-sm:pt-16 small:pt-16 smallAgain:pt-16 smallerAgain:pt-16 sm:pt-24 md:pt-24 lg:pt-36 xl:pt-44 2xl:pt-52 3xl:pt-60 4xl:pt-72 5xl:pt-80 6xl:pt-80 font-bold dark:text-zinc-200 text-stone-900">
            Who I Am <span>?</span>
          </h1>
          <p
            id="about"
            className="dark:text-orange-300 text-cyan-700 text-right smallerAgain:text-right sm:text-right md:text-center lg:text-center ps-5 sm:ps-6 md:ps-0 lg:ps-20 pe-12 smaller:pe-4 small:pe-4 smallAgain:pe-4 smallerAgain:pe-4 sm:pe-16 md:pe-0 xl:ml-10 text-2xl sm:text-2xl lg:text-4xl 2xl:text-6xl pt-4 pb-16 xl:pb-32 2xl:pb-16"
          >
            A little bit about me
          </p>
          <div className="dark:text-zinc-200 text-stone-900 flex items-center justify-center space-y-10 md:space-y-0 flex-wrap pt-0 smaller:pt-6 to-sm:pt-14 small:pt-14 smallAgain:pt-16 smallerAgain:pt-24 sm:pt-20 md:pt-4 lg:pt-6 xl:pt-0 2xl:pt-0 ps-4 sm:ps-6 lg:ps-8 pe-4 small:pe-3 sm:pe-4">
            <span className="max-w-2xl 2xl:max-w-4xl text-xl sm:text-2xl lg:text-3xl first-letter:text-7xl first-letter:float-start text-left md:text-right 2xl:text-left px-0 md:px-4 2xl:px-10">
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
            </span>

            <div className="max-w-2xl 2xl:max-w-3xl small:pt-4 smallAgain:pt-4 smallerAgain:pt-4 sm:pt-4 md:pt-8 lg:pt-20 xl:pt-0 pb-0 md:pb-10">
              <h2 className="text-left md:text-center text-2xl sm:text-2xl lg:text-4xl 2xl:text-6xl dark:text-orange-300 text-cyan-700 ps-2 sm:ps-2 lg:ps-8 pe-4 sm:pe-0 small:pt-8 smallAgain:pt-8 smallerAgain:pt-8 sm:pt-8 md:pt-0 xl:pt-12">
                Experience with
              </h2>
              <HoverEffect items={techSkills} />
              <h2 className="text-right md:text-center text-2xl sm:text-2xl lg:text-4xl 2xl:text-6xl dark:text-orange-300 text-cyan-700 ps-5 sm:ps-6 lg:ps-8 pe-3 sm:pe-0">
                Human skills
              </h2>
              <HoverEffect items={humanSkills} />
            </div>
          </div>
        </div>
        <div className="h-screen w-full pb-20">
          <h2 className="text-left md:text-center text-2xl sm:text-2xl lg:text-4xl 2xl:text-6xl dark:text-orange-300 text-cyan-700 ps-7 sm:ps-6 lg:ps-8 pe-4 sm:pe-0 small:pt-8 smallAgain:pt-8 smallerAgain:pt-8 sm:pt-8 md:pt-0 xl:pt-6 pb-8">
            A couple of highlights ...
          </h2>
          <LayoutGrid cards={cards} />
        </div>
        <div className="max-w-2xl 2xl:max-w-3xl small:pt-4 smallAgain:pt-4 smallerAgain:pt-4 sm:pt-4 md:pt-8 lg:pt-20 xl:pt-32 pb-0 md:pb-10 mx-auto ps-4 pe-4">
          <h2 className="text-right md:text-center text-2xl sm:text-2xl lg:text-4xl 2xl:text-6xl dark:text-orange-300 text-cyan-700 ps-5 sm:ps-6 lg:ps-8 pe-3 sm:pe-0">
            & some of my hobbies ..
          </h2>
          <HoverEffect items={hobbies} />
        </div>
      </section>
    </>
  )
}

// Put all images into sub-folders for categories
