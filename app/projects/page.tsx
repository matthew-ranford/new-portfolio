'use client'

import Link from 'next/link'
import Image from 'next/image'
import { handlee } from '@/fonts'
import { motion } from 'framer-motion'

// Components
import MainHeaderNav from '../components/MainHeaderNav'
import Footer from '../components/Footer'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

// Main page image
import projectsImage from '../../public/images/projects-image.png'

// Icons
import {
  SiBootstrap,
  SiCss3,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

// DirectionAwareHoverImages
import coverOne from '../../public/images/project-images/cover-one.png'
import coverTwo from '../../public/images/project-images/cover-two.png'
import coverThree from '../../public/images/project-images/cover-three.png'
import coverFour from '../../public/images/project-images/cover-four.png'
import coverFive from '../../public/images/project-images/cover-five.png'
import coverSix from '../../public/images/project-images/cover-six.png'
import coverSeven from '../../public/images/project-images/cover-seven.png'
import coverEight from '../../public/images/project-images/cover-eight.png'

// DirectionAwareHover
const projectsAfterDev = [
  {
    title: 'McLauchlan Electrical',
    secondTitle: '(Click the laptop for a live version)',
    description:
      'Testing out NextJS on a wesbite revamp, using Acernity UI, Tailwind, & Framer-motion - in progress, awaiting further information.',
    tech: [SiNextdotjs, SiTailwindcss, SiFramer, SiTypescript],
    link: 'https://matthew-ranford.github.io/mclauchlan-electrical/',
    linkText:
      'Preview McLauchlan Electrical project live version & source code',
    sourceCode: 'https://github.com/matthew-ranford/mclauchlan-electrical',
    cover: coverOne,
    alt: 'First project cover',
  },
  {
    title: 'Attention To Detail - Painting Services',
    secondTitle: '(Click the laptop for a live version)',
    description:
      'Trying to improve my ReactJS skills on a wesbite revamp, using Bootstrap, Tailwind, & Framer-motion - now live! My first ever live website for a friend.',
    tech: [SiReact, SiBootstrap, SiTailwindcss, SiFramer, SiTypescript],
    link: 'https://atd-decorators.co.nz/',
    linkText:
      'Preview Attention To Detail - Painting Services project live version & source code',
    sourceCode: 'https://github.com/matthew-ranford/attention-to-detail',
    cover: coverTwo,
    alt: 'Second project cover',
  },
  {
    title: 'Fresh & Faded Barbershop',
    secondTitle: '(Click the laptop for a live version)',
    description:
      'Trying to improve my ReactJS skills straight out of Dev Academy on a first-time website, using Bootstrap, & Framer-motion - not complete; never received further information, photos etc.',
    tech: [SiReact, SiBootstrap, SiFramer, SiTypescript],
    link: 'https://matthew-ranford.github.io/fresh-and-faded/',
    linkText:
      'Preview Fresh & Faded Barbershop project live version & source code',
    sourceCode: 'https://github.com/matthew-ranford/fresh-and-faded',
    cover: coverThree,
    alt: 'Third project cover',
  },
  {
    title: 'Item Tracker',
    description:
      "Trying to improve my Full-Stack skills straight out of Dev Academy, an item tracking application to see who you've lent your items to - not complete; need to go back & start again to regain my skills along with using the new skills i've learnt.",
    tech: [
      SiReact,
      SiBootstrap,
      SiTailwindcss,
      SiFramer,
      SiSqlite,
      SiTypescript,
    ],
    link: 'https://github.com/matthew-ranford/item-tracker/tree/date-picker',
    linkText: 'Preview Item Tracker project source code',

    sourceCode:
      'https://github.com/matthew-ranford/item-tracker/tree/date-picker',
    cover: coverFour,
    alt: 'Fourth project cover',
  },
]

const projectsDevAcademy = [
  {
    title: 'Friend Booking',
    description:
      'Final group project at Dev Academy, a friend booking application where you can view when you/your friends are available for a catch up - I spent a big role trying to make the app responsive.',
    tech: [SiReact, SiSqlite, SiCss3, SiTypescript],
    link: 'https://github.com/matthew-ranford/friend-booking',
    linkText: 'Preview Friend Booking project source code',
    sourceCode: 'https://github.com/matthew-ranford/friend-booking',
    cover: coverFive,
    alt: 'Fifth project cover',
  },
  {
    title: 'Foundations Blog',
    secondTitle: '(Click the laptop for a live version)',
    description:
      'Start of my learning Journey at Dev Academy, starting with the basics of HTML, CSS, & JavaScript.',
    tech: [SiHtml5, SiCss3, SiJavascript],
    link: 'https://matthew-ranford.github.io/',
    linkText: 'Preview Foundations Blog project live version & source code',
    sourceCode: 'https://github.com/matthew-ranford/matthew-ranford.github.io',
    cover: coverSix,
    alt: 'Sixth project cover',
  },
]

const projectsBeforeDev = [
  {
    title: 'Complete Building Solutions',
    secondTitle: '(Click the laptop for a live version)',
    description:
      'Trying to improve my skills before study, completing one of my first design concepts for a family members business.',
    tech: [SiHtml5, SiCss3, SiJavascript],
    link: 'https://matthew-ranford.github.io/complete-building-solutions-website-concept/',
    linkText:
      'Preview Complete Building Solutions project live version & source code',
    sourceCode:
      'https://github.com/matthew-ranford/complete-building-solutions-website-concept',
    cover: coverSeven,
    alt: 'Seventh project cover',
  },
  {
    title: 'Free Code Camp Portfolio',
    secondTitle: '(Click the laptop for a live version)',
    description:
      'One of my first ever projects completed through FreeCodeCamp.',
    tech: [SiHtml5, SiCss3],
    link: 'https://matthew-ranford.github.io/freecodecamp-personal-portfolio-webpage/',
    linkText:
      'Preview Free Code Camp Portfolio project live version & source code',
    sourceCode:
      'https://github.com/matthew-ranford/freecodecamp-personal-portfolio-webpage',
    cover: coverEight,
    alt: 'Eighth project cover',
  },
]

export default function page() {
  return (
    <>
      <motion.section
        className="py-10 p-5 sm:p-0"
        initial={{ opacity: 0, y: 5 }}
        transition={{ delay: 0.3, duration: 1, ease: 'easeInOut' }}
        animate={{ opacity: 1, y: 0 }}
      >
        <MainHeaderNav />

        <Image
          src={projectsImage}
          width="2732"
          height="1536"
          alt="Main page image of Matt"
          className="projects-image"
        />
        <h1 className="text-center text-7xl sm:text-8xl md:text-[5.2rem] lg:text-[7.5rem] xl:text-[9.5rem] 2xl:text-[11rem] 3xl:text-[12.8rem] 4xl:text-[14.5rem] 5xl:text-[17.2rem] 6xl:text-[18.2rem] pt-12 lg:pt-20 xl:pt-24 2xl:pt-80 3xl:pt-72 4xl:pt-64 5xl:pt-72 6xl:pt-60 2xl:ps-8 2xl:pe-4 font-bold dark:text-zinc-200 text-stone-900">
          Life after Dev Academy...
        </h1>
        <h2 className="text-center text-3xl lg:text-4xl 2xl:text-6xl pt-12 dark:text-orange-300 text-cyan-700">
          <div className={handlee.className}>
            My self guided learning journey continues..
          </div>
        </h2>
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 px-2 md:px-10 2xl:px-32">
          {projectsAfterDev.map((project, index) => {
            return (
              <Link
                href={project.link}
                key={index}
                target="_blank"
                aria-label={project.linkText}
              >
                <div className="p-1 md:p-5 rounded-2xl">
                  <DirectionAwareHover
                    imageUrl={project.cover}
                    alt={project.alt}
                    className="w-full space-y-5 cursor-pointer"
                  >
                    <div className="space-y-2 md:space-y-5 2xl:space-y-8 dark:bg-stone-900 bg-zinc-200 rounded-2xl max-w-72 md:max-w-sm 2xl:max-w-2xl p-2 2xl:p-8">
                      <h1 className="text-lg md:text-2xl 2xl:text-4xl dark:text-orange-300 text-cyan-700">
                        <div className={handlee.className}>{project.title}</div>
                        <div className="text-xs sm:text-sm ps-2">
                          {project.secondTitle}
                        </div>
                      </h1>
                      <p className="text-sm md:text-lg 2xl:text-2xl">
                        {project.description}
                      </p>
                      <Link href={project.sourceCode} target="_blank">
                        <p className="pt-2 text-sm md:text-lg dark:text-zinc-400 text-zinc-600 dark:hover:text-orange-300 hover:text-cyan-700">
                          Source Code ↗️
                        </p>
                      </Link>
                      <div className="flex items-center gap-5">
                        {project.tech.map((Icon, index) => {
                          return (
                            <Icon
                              key={index}
                              className="w-6 h-6 md:w-8 md:h-8 2xl:w-10 2xl:h-10"
                            />
                          )
                        })}
                      </div>
                    </div>
                  </DirectionAwareHover>
                </div>
              </Link>
            )
          })}
        </div>
        <h1 className="text-center text-7xl sm:text-8xl md:text-[5.2rem] lg:text-[7.5rem] xl:text-[9.5rem] 2xl:text-[11rem] 3xl:text-[12.8rem] 4xl:text-[14.5rem] 5xl:text-[17.2rem] 6xl:text-[18.2rem] pt-12 lg:pt-20 xl:pt-20 2xl:ps-8 2xl:pe-4 font-bold dark:text-zinc-200 text-stone-900">
          Dev Academy...
        </h1>
        <h2 className="text-center text-3xl lg:text-4xl 2xl:text-6xl pt-12 dark:text-orange-300 text-cyan-700">
          <div className={handlee.className}>
            My first time studying starts..
          </div>
        </h2>
        <h3 className="pt-4 text-center text-xs 2xl:text-sm dark:text-orange-500 text-cyan-800">
          (More projects were completed within this time & the source code is
          available on github..)
        </h3>
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-2 gap-7 px-2 md:px-10 2xl:px-32">
          {projectsDevAcademy.map((project, index) => {
            return (
              <Link
                href={project.link}
                key={index}
                target="_blank"
                aria-label={project.linkText}
              >
                <div className="p-1 md:p-5 rounded-2xl">
                  <DirectionAwareHover
                    imageUrl={project.cover}
                    alt={project.alt}
                    className="w-full space-y-5 cursor-pointer"
                  >
                    <div className="space-y-2 md:space-y-5 dark:bg-stone-900 bg-zinc-200 rounded-2xl max-w-72 md:max-w-sm 2xl:max-w-2xl p-2 2xl:p-8">
                      <h1 className="text-lg md:text-2xl 2xl:text-4xl dark:text-orange-300 text-cyan-700">
                        <div className={handlee.className}>{project.title}</div>
                        <div className="text-xs sm:text-sm ps-2">
                          {project.secondTitle}
                        </div>
                      </h1>
                      <p className="text-sm md:text-lg 2xl:text-2xl">
                        {project.description}
                      </p>
                      <Link href={project.sourceCode} target="_blank">
                        <p className="pt-2 text-sm md:text-lg dark:text-zinc-400 text-zinc-600 dark:hover:text-orange-300 hover:text-cyan-700">
                          Source Code ↗️
                        </p>
                      </Link>
                      <div className="flex items-center gap-5">
                        {project.tech.map((Icon, index) => {
                          return (
                            <Icon
                              key={index}
                              className="w-6 h-6 md:w-8 md:h-8 2xl:w-10 2xl:h-10"
                            />
                          )
                        })}
                      </div>
                    </div>
                  </DirectionAwareHover>
                </div>
              </Link>
            )
          })}
        </div>
        <h1 className="text-center text-7xl sm:text-8xl md:text-[5.2rem] lg:text-[7.5rem] xl:text-[9.5rem] 2xl:text-[11rem] 3xl:text-[12.8rem] 4xl:text-[14.5rem] 5xl:text-[17.2rem] 6xl:text-[18.2rem] pt-12 lg:pt-20 xl:pt-20 2xl:ps-8 2xl:pe-4 font-bold dark:text-zinc-200 text-stone-900">
          Life before Dev Academy...
        </h1>
        <h2 className="text-center text-3xl lg:text-4xl 2xl:text-6xl pt-12 dark:text-orange-300 text-cyan-700">
          <div className={handlee.className}>
            My self guided learning journey starts..
          </div>
        </h2>
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-2 gap-7 px-2 md:px-10 2xl:px-32">
          {projectsBeforeDev.map((project, index) => {
            return (
              <Link
                href={project.link}
                key={index}
                target="_blank"
                aria-label={project.linkText}
              >
                <div className="p-1 md:p-5 rounded-2xl">
                  <DirectionAwareHover
                    imageUrl={project.cover}
                    alt={project.alt}
                    className="w-full space-y-5 cursor-pointer"
                  >
                    <div className="space-y-2 md:space-y-5 dark:bg-stone-900 bg-zinc-200 rounded-2xl max-w-72 md:max-w-sm 2xl:max-w-2xl p-2 2xl:p-8">
                      <h1 className="text-lg md:text-2xl 2xl:text-4xl dark:text-orange-300 text-cyan-700">
                        <div className={handlee.className}>{project.title}</div>
                        <div className="text-xs sm:text-sm ps-2">
                          {project.secondTitle}
                        </div>
                      </h1>
                      <p className="text-sm md:text-lg 2xl:text-2xl">
                        {project.description}
                      </p>
                      <Link href={project.sourceCode} target="_blank">
                        <p className="pt-2 text-sm md:text-lg dark:text-zinc-400 text-zinc-600 dark:hover:text-orange-300 hover:text-cyan-700">
                          Source Code ↗️
                        </p>
                      </Link>
                      <div className="flex items-center gap-5">
                        {project.tech.map((Icon, index) => {
                          return (
                            <Icon
                              key={index}
                              className="w-6 h-6 md:w-8 md:h-8 2xl:w-10 2xl:h-10"
                            />
                          )
                        })}
                      </div>
                    </div>
                  </DirectionAwareHover>
                </div>
              </Link>
            )
          })}
        </div>
        <Footer />
        <Link href="/projects">
          <div className="text-center text-5xl pt-4 pb-4">🔝</div>
        </Link>
      </motion.section>
    </>
  )
}
