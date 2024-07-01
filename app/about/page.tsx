'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { handlee } from '@/fonts'
import { motion, animate, stagger, useInView } from 'framer-motion'

// Components
import MainHeaderNav from '../components/MainHeaderNav'
import Footer from '../components/Footer'
import { LayoutGrid } from '@/components/ui/layout-grid'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

// Main page image
import aboutImage from '../../public/images/about-image.png'

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

// TextGenerateEffect
const firstLine = 'Wellington, New Zealand 🌎 '
const secondLine = 'Coffee? On me! ☕'
const thirdLine = 'Looking for work 💼 '
const fourthLine = 'Contact me 📧 '

// LayoutGrid
const FrameOne = () => {
  return (
    <div>
      <h1 className="text-4xl dark:text-orange-300 text-cyan-300">
        <div className={handlee.className}>Invermere, BC, Canada.</div>
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
      <h1 className="text-4xl dark:text-orange-300 text-cyan-300">
        <div className={handlee.className}>
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
      <p className="text-4xl dark:text-orange-300 text-cyan-300">
        <div className={handlee.className}>
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
      <p className="text-4xl dark:text-orange-300 text-cyan-300">
        <div className={handlee.className}>Lethbridge, AB, Canada.</div>
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
      <p className="text-4xl dark:text-orange-300 text-cyan-300">
        <div className={handlee.className}>Chiang Mai, Thailand.</div>
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
      <p className="text-4xl dark:text-orange-300 text-cyan-300">
        <div className={handlee.className}>Wellington, NZ.</div>
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
      <p className="text-4xl dark:text-orange-300 text-cyan-300">
        <div className={handlee.className}>Chiang Mai, Thailand.</div>
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
      <p className="text-4xl dark:text-orange-300 text-cyan-300">
        <div className={handlee.className}>Fairmont, BC, Canada.</div>
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

  // Hobbies HoverEffect
  const hobbiesText = useRef(null)
  const hobbiesInView = useInView(hobbiesText)

  useEffect(() => {
    if (hobbiesInView) {
      animate(
        '.animate-hobbies',
        { opacity: 1, y: 0 },
        { duration: 1, delay: stagger(1), ease: 'circOut' }
      )
    } else {
      animate('.animate-hobbies', { opacity: 0, y: -50 }, { duration: 0 })
    }
  }, [hobbiesInView])

  return (
    <>
      <motion.section
        className="md:max-w-full"
        initial={{ opacity: 0, y: 5 }}
        transition={{ delay: 0.3, duration: 1, ease: 'easeInOut' }}
        animate={{ opacity: 1, y: 0 }}
      >
        <MainHeaderNav />
        <Image
          src={aboutImage}
          width="2732"
          height="1536"
          alt="Main page image of Matt"
          className="about-image"
        />

        <div className="xl:pe-12 pe-4 sm:pe-8 pt-10 sm:pt-4 lg:pt-20 xl:pt-0 xl:-mt-24 2xl:-mt-28 space-y-2">
          <TextGenerateEffect
            words={firstLine}
            delay={3000}
            className="text-right"
          />
          <TextGenerateEffect
            words={secondLine}
            delay={4200}
            className="text-right"
          />
          <TextGenerateEffect
            words={thirdLine}
            delay={4700}
            className="text-right"
          />
          <Link href="mailto:matt.ranford16@gmail.com" className="relative">
            <TextGenerateEffect
              words={fourthLine}
              delay={5500}
              className="text-right pt-2"
            />
          </Link>
        </div>

        <div className="space-y-4 2xl:space-y-6">
          <h1 className="text-center text-7xl sm:text-8xl md:text-[5.2rem] lg:text-[7.5rem] xl:text-[9.5rem] 2xl:text-[11rem] 3xl:text-[12.8rem] 4xl:text-[14.5rem] 5xl:text-[17.2rem] 6xl:text-[18.2rem] pt-32 sm:pt-20 lg:pt-20 xl:pt-16 2xl:pt-36 3xl:pt-44 4xl:pt-52 5xl:pt-52 6xl:pt-56 font-bold dark:text-zinc-200 text-stone-900">
            Who I Am <span>?</span>
          </h1>
          <h2
            id="about"
            className="text-center text-3xl lg:text-4xl 2xl:text-6xl pt-4 2xl:pt-10 pb-10 6xl:pb-28 dark:text-orange-300 text-cyan-700"
          >
            <div className={handlee.className}>A little bit about me..</div>
          </h2>
          <div
            className="dark:text-zinc-200 text-stone-900 flex items-center justify-center space-y-10 md:space-y-0 flex-wrap pt-4 smaller:pt-6 to-sm:pt-6 sm:pt-6 md:pt-4 lg:pt-6 xl:pt-0 2xl:pt-4 3xl:pt-14 4xl:pt-10 5xl:pt-40 6xl:pt-20 ps-4 sm:ps-6 lg:ps-8 pe-4 small:pe-3 sm:pe-4"
            ref={aboutText}
          >
            <span className="max-w-2xl 2xl:max-w-4xl text-2xl sm:text-2xl lg:text-3xl 2xl:text-4xl first-letter:text-7xl first-letter:float-start text-left md:text-right 2xl:text-left px-0 md:px-4 2xl:px-10 animate-about-text">
              I&apos;m a Full-Stack Developer who recently completed a 17-week
              intensive boot camp learning full-stack software development at
              Dev Academy in December 2023.
              <p className="py-2 mt-4 animate-about-text">
                Although I don&apos;t have a degree in design, I&apos;ve
                realized that I have a passion for Front-End, Accessibility &
                using the WAVE tool to optimize my applications for the best
                practices & performance, while also designing & creating
                anything I want to when starting with a blank canvas.
              </p>
              <p className="py-2 mt-4 animate-about-text">
                It&apos;s exciting, & frustrating, but have found much joy in
                the process of trying to be creative with a lot of
                problem-solving!
              </p>
              <p className="py-2 mt-4 animate-about-text">
                I&apos;ve tried various roles in my life, & none of them have
                stuck, so this was one of the biggest challenges of my life,
                diving into the unknown. I still have a lot to learn, & I&apos;m
                excited to see where a career in tech takes me!
              </p>
            </span>
            <div
              className="max-w-2xl 2xl:max-w-3xl small:pt-4 smallAgain:pt-4 smallerAgain:pt-4 sm:pt-4 md:pt-8 lg:pt-20 xl:pt-0 pb-0 md:pb-10"
              ref={skillsText}
            >
              <h2 className="text-left md:text-center text-3xl lg:text-4xl 2xl:text-6xl dark:text-orange-300 text-cyan-700 ps-2 sm:ps-2 lg:ps-8 pe-4 sm:pe-0 small:pt-8 smallAgain:pt-8 smallerAgain:pt-2 sm:pt-2 md:pt-0 xl:pt-12 animate-skills">
                <div className={handlee.className}>Experience with</div>
              </h2>
              <HoverEffect items={techSkills} className="animate-skills" />
              <h2 className="text-right md:text-center text-3xl  lg:text-4xl 2xl:text-6xl dark:text-orange-300 text-cyan-700 ps-5 sm:ps-6 lg:ps-8 pe-3 sm:pe-0 2xl:pt-4 animate-skills">
                <div className={handlee.className}>Human skills</div>
              </h2>
              <HoverEffect items={humanSkills} className="animate-skills" />
            </div>
          </div>
        </div>
        <div className="h-screen w-full pb-20" ref={imageGrid}>
          <h2 className="text-left md:text-center text-3xl lg:text-4xl 2xl:text-6xl dark:text-orange-300 text-cyan-700 ps-7 sm:ps-6 lg:ps-8 pe-4 sm:pe-0 small:pt-8 smallAgain:pt-8 smallerAgain:pt-8 sm:pt-8 md:pt-0 xl:pt-6 pb-14 animate-image-grid">
            <div className={handlee.className}>A couple of highlights ...</div>
          </h2>
          <LayoutGrid cards={cards} />
        </div>
        <div
          className="max-w-2xl 2xl:max-w-3xl pt-14 small:pt-8 smallAgain:pt-8 smallerAgain:pt-10 sm:pt-8 lg:pt-20 xl:pt-32 pb-0 md:pb-10 mx-auto ps-4 pe-4"
          ref={hobbiesText}
        >
          <h2 className="text-right md:text-center text-3xl lg:text-4xl 2xl:text-6xl dark:text-orange-300 text-cyan-700 ps-5 sm:ps-6 lg:ps-8 pe-3 sm:pe-0 pt-4 sm:pt-14 xl:pt-0 animate-hobbies">
            <div className={handlee.className}>& some of my hobbies ..</div>
          </h2>
          <HoverEffect items={hobbies} className="animate-hobbies" />
        </div>
        <Footer />
        <Link href="/about">
          <div className="text-center text-5xl pt-4 pb-4">🔝</div>
        </Link>
      </motion.section>
    </>
  )
}
