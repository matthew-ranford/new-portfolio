'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { titan } from '@/fonts'
import { motion, animate, stagger, useInView } from 'framer-motion'

// Components
import MainHeaderNav from '../components/MainHeaderNav'
import Footer from '../components/Footer'
import { LayoutGrid } from '@/components/ui/layout-grid'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { FlipWords } from '@/components/ui/flip-words'

// Main page image
// import aboutImage from '../../public/images/about-image.png'
import aboutImage from '../../public/images/about-image-new-test.png'

// Icons
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
      <h1 className="text-4xl dark:text-zinc-300 text-[#00dd00]">
        <div className={titan.className}>Invermere, BC, Canada.</div>
      </h1>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-300 ">
        Ice Skating & Ice Hockey on the longest skating trail in the world at
        Lake Windermere.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-zinc-300 ">
        I lived here for about two years.
      </p>
    </div>
  )
}

const FrameTwo = () => {
  return (
    <div>
      <h1 className="text-4xl dark:text-zinc-300 text-[#00dd00]">
        <div className={titan.className}>
          Lower Bugaboo Falls, Spillimacheen, Canada.
        </div>
      </h1>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-300">
        Hiking, exploring, sightseeing, & waterfalls.
      </p>
    </div>
  )
}

const FrameThree = () => {
  return (
    <div>
      <p className="text-4xl dark:text-zinc-300 text-[#00dd00]">
        <div className={titan.className}>
          Welsh Lakes, East Kootenay, Canada.
        </div>
      </p>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-300 ">
        More hiking, exploring, sightseeing, & unreal views.
      </p>
    </div>
  )
}

const FrameFour = () => {
  return (
    <div>
      <p className="text-4xl dark:text-zinc-300 text-[#00dd00]">
        <div className={titan.className}>Lethbridge, AB, Canada.</div>
      </p>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-300 ">
        Worked as a groundskeeper to maintain University grounds & snow-removal
        through winter, -40° was a regular..
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-zinc-300 ">
        Lethbridge University.
      </p>
    </div>
  )
}

const FrameFive = () => {
  return (
    <div>
      <p className="text-4xl dark:text-zinc-300 text-[#00dd00]">
        <div className={titan.className}>Chiang Mai, Thailand.</div>
      </p>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-300 ">
        Visting an elephant sanctuary with some friends, where we were able to
        bath and feed the elephants!
      </p>
    </div>
  )
}

const FrameSix = () => {
  return (
    <div>
      <p className="text-4xl dark:text-zinc-300 text-[#00dd00]">
        <div className={titan.className}>Wellington, NZ.</div>
      </p>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-300 ">
        I spent about five years at Immigration New Zealand. I finished as a
        Senior Immigration Officer.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-zinc-300 ">
        My last goodbye.
      </p>
    </div>
  )
}

const FrameSeven = () => {
  return (
    <div>
      <p className="text-4xl dark:text-zinc-300 text-[#00dd00]">
        <div className={titan.className}>Chiang Mai, Thailand.</div>
      </p>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-300 ">
        Cooking class with some friends.. along with our mentor for the day.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-zinc-300 ">
        Wasn&apos;t sure where the camera was.
      </p>
    </div>
  )
}

const FrameEight = () => {
  return (
    <div>
      <p className="text-4xl dark:text-zinc-300 text-[#00dd00]">
        <div className={titan.className}>Fairmont, BC, Canada.</div>
      </p>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-300 ">
        Dislocated my shoulder the first month living in Canada, working on
        Panorama Mountain Resort.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-zinc-300 ">
        Columbia Lake.
      </p>
    </div>
  )
}

// LayoutGrid Images
import aboutImage1 from '../../public/images/about-images/about-image-1.jpg'
import aboutImage2 from '../../public/images/about-images/about-image-2.jpg'
import aboutImage3 from '../../public/images/about-images/about-image-3.jpg'
import aboutImage4 from '../../public/images/about-images/about-image-4.jpg'
import aboutImage5 from '../../public/images/about-images/about-image-5.jpg'
import aboutImage6 from '../../public/images/about-images/about-image-6.jpg'
import aboutImage7 from '../../public/images/about-images/about-image-7.jpg'
import aboutImage8 from '../../public/images/about-images/about-image-8.jpg'

// LayoutGrid
const cards = [
  {
    id: 1,
    content: <FrameOne />,
    className: 'md:col-span-2',
    thumbnail: aboutImage1,
    alt: 'Image overlooking ice and mountains',
  },
  {
    id: 2,
    content: <FrameTwo />,
    className: 'col-span-1',
    thumbnail: aboutImage2,
    alt: 'Image overlooking a waterfall',
  },
  {
    id: 3,
    content: <FrameThree />,
    className: 'col-span-1',
    thumbnail: aboutImage3,
    alt: 'Image overlooking a lake',
  },
  {
    id: 4,
    content: <FrameFour />,
    className: 'md:col-span-2',
    thumbnail: aboutImage4,
    alt: 'Image with the sunset in the background',
  },
  {
    id: 5,
    content: <FrameFive />,
    className: 'md:col-span-2',
    thumbnail: aboutImage5,
    alt: 'Image with friends with the elephants',
  },
  {
    id: 6,
    content: <FrameSix />,
    className: 'col-span-1',
    thumbnail: aboutImage6,
    alt: 'Image with work mates on my last day',
  },
  {
    id: 7,
    content: <FrameSeven />,
    className: 'md:col-span-1',
    thumbnail: aboutImage7,
    alt: 'Image with friends at a cooking class',
  },
  {
    id: 8,
    content: <FrameEight />,
    className: 'md:col-span-2',
    thumbnail: aboutImage8,
    alt: 'Image overlooking a snow covered lake',
  },
]

// HoverEffect
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
    text: 'Framer',
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

// Flip words
const wordsHeader = ['Who am I?', 'Who are you?']
const wordsSubHeader = ['tell', 'show']

export default function About() {
  // Main text
  const aboutText = useRef(null)
  const textInView = useInView(aboutText)

  useEffect(() => {
    if (textInView) {
      animate(
        '.animate-about-text',
        { opacity: 1, x: 0 },
        { duration: 1, delay: stagger(0.4), ease: 'circOut' }
      )
    } else {
      animate('.animate-about-text', { opacity: 0, x: -50 }, { duration: 0 })
    }
  }, [textInView])

  // Main skills/human skills
  const skillsText = useRef(null)
  const skillsInView = useInView(skillsText)

  useEffect(() => {
    if (skillsInView) {
      animate(
        '.animate-skills',
        { opacity: 1, x: 0 },
        { duration: 1, delay: stagger(0.5), ease: 'circOut' }
      )
    } else {
      animate('.animate-skills', { opacity: 0, x: 20 }, { duration: 0 })
    }
  }, [skillsInView])

  // LayoutGrid
  const imageGrid = useRef(null)
  const imageGridInView = useInView(imageGrid)

  useEffect(() => {
    if (imageGridInView) {
      animate(
        '.animate-image-grid',
        { opacity: 1, y: 0 },
        { duration: 1, delay: stagger(0.3), ease: 'circOut' }
      )
    } else {
      animate('.animate-image-grid', { opacity: 0, y: -50 }, { duration: 0 })
    }
  }, [imageGridInView])

  return (
    <>
      <MainHeaderNav />
      <motion.section
        className="md:max-w-full"
        initial={{ opacity: 0, y: 5 }}
        transition={{ delay: 0.3, duration: 1, ease: 'easeInOut' }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Image
          src={aboutImage}
          width={4098}
          height={2304}
          alt="Photo of Matt"
          className="hero-image hidden sm:block"
        />
        <div className={titan.className} id="about">
          <div className="pt-20 sm:pt-16 lg:pt-10 2xl:pt-20 6xl:pt-44 text-left ps-3 sm:ps-7 xl:ps-8 space-y-3 2xl:space-y-4 font-bold dark:text-zinc-300 text-stone-800 drop-shadow-[6px_6px_0px_black] z-index">
            <h1 className="text-6xl sm:text-7xl md:text-[5.3rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[10.5rem] 6xl:text-[16rem] text-center sm:text-left">
              <FlipWords words={wordsHeader} />
            </h1>
            <h2 className="ps-8 text-4xl md:text-4xl lg:text-6xl xl:text-6xl 6xl:text-7xl">
              Let me <FlipWords words={wordsSubHeader} /> you..
            </h2>
          </div>
        </div>
        <div
          className="dark:text-zinc-300 text-stone-800 flex flex-col md:flex-row items-start md:space-y-0 md:space-x-10 pt-10"
          ref={aboutText}
        >
          <div className="max-w-3xl text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl first-letter:text-4xl text-left ps-8 animate-about-text z-index">
            I&apos;m a Full-Stack Developer who recently completed a 17-week
            intensive boot camp learning full-stack software development at Dev
            Academy in December 2023.
            <p className="py-2 mt-4 animate-about-text">
              Although I don&apos;t have a degree in design, I&apos;ve realized
              that I have a passion for Front-End, Accessibility & using the
              WAVE tool to optimize my applications for the best practices &
              performance, while also designing & creating anything I want to
              when starting with a blank canvas.
            </p>
            <p className="py-2 mt-4 animate-about-text">
              It&apos;s exciting, & frustrating, but have found much joy in the
              process of trying to be creative with a lot of problem-solving!
            </p>
            {/* <p className="py-2 mt-4 animate-about-text">
              I&apos;ve tried various roles in my life, & none of them have
              stuck, so this was one of the biggest challenges of my life,
              diving into the unknown. I still have a lot to learn, & I&apos;m
              excited to see where a career in tech takes me!
            </p> */}
            <div className="h-screen w-full" ref={imageGrid}>
              <h2 className="text-left md:text-center text-4xl md:text-4xl lg:text-6xl xl:text-6xl 6xl:text-7xl drop-shadow-[2px_2px_0px_black] md:drop-shadow-[3px_3px_0px_black] dark:drop-shadow-[6px_6px_0px_black] xl:pt-2 animate-image-grid">
                <div className={titan.className}>
                  A couple of highlights ...
                </div>
              </h2>
              <LayoutGrid cards={cards} />
            </div>
          </div>
        </div>
        <div
          className="-mt-[37rem] flex flex-col items-end dark:text-zinc-300 text-stone-800 pe-6"
          ref={skillsText}
        >
          <h2 className="text-center text-4xl md:text-4xl lg:text-6xl xl:text-6xl 6xl:text-7xl drop-shadow-[2px_2px_0px_black] md:drop-shadow-[3px_3px_0px_black] dark:drop-shadow-[6px_6px_0px_black] animate-skills">
            <div className={titan.className}>Experience with</div>
          </h2>
          <HoverEffect items={techSkills} className="animate-skills" />
          <h2 className="mt-12 text-center text-4xl md:text-4xl lg:text-6xl xl:text-6xl 6xl:text-7xl drop-shadow-[2px_2px_0px_black] md:drop-shadow-[3px_3px_0px_black] dark:drop-shadow-[6px_6px_0px_black] animate-skills">
            <div className={titan.className}>Human skills</div>
          </h2>
          <HoverEffect items={humanSkills} className="animate-skills" />
        </div>

        {/* <div className="h-screen w-1/2 pb-20" ref={imageGrid}>
          <h2 className="text-left md:text-center text-3xl lg:text-4xl 2xl:text-6xl dark:text-zinc-300 text-cyan-700 ps-7 sm:ps-6 lg:ps-8 pe-4 sm:pe-0 small:pt-8 smallAgain:pt-8 smallerAgain:pt-8 sm:pt-8 md:pt-0 xl:pt-6 pb-14 animate-image-grid">
            <div className={titan.className}>A couple of highlights ...</div>
          </h2>
          <LayoutGrid cards={cards} />
        </div> */}
        <Footer />
        <Link href="/about">
          <div className="text-center text-5xl pt-4 pb-4">🔝</div>
        </Link>
      </motion.section>
    </>
  )
}
