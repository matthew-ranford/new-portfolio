'use client'

import Link from 'next/link'
import Image from 'next/image'
import { titan } from '@/fonts'
import { motion, animate, stagger, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

// Components
import MainHeaderNav from '../components/MainHeaderNav'
import Footer from '../components/Footer'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

// Main page image
import projectsImage from '../../public/images/project-images/projects-main-image.png'
import projectsPhoneImage from '../../public/images/project-images/projects-main-image-phone.png'

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
import coverZero from '../../public/images/project-images/cover-zero.png'
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
    title: 'Strictly Paper',
    secondTitle: '(Click the laptop for a live version)',
    description:
      'Using NextJS on a brand new website, using Acernity UI, Tailwind, & Framer-motion - now live! My second ever live website for a friend.',
    tech: [SiNextdotjs, SiTailwindcss, SiFramer, SiTypescript],
    link: 'https://strictly-paper.nz',
    linkText: 'Preview Strictly Paper project live version & source code',
    sourceCode: 'https://github.com/matthew-ranford/strictly-paper',
    cover: coverZero,
    alt: 'Zero project cover',
  },
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

export default function Projects() {
  // Project section one
  const projectsText = useRef(null)
  const textInView = useInView(projectsText, { once: true })

  useEffect(() => {
    if (textInView) {
      animate(
        '.animate-projects-text',
        { opacity: 1, y: 0 },
        { duration: 0.5, delay: stagger(0.2), ease: 'circOut' }
      )
    } else {
      animate('.animate-projects-text', { opacity: 0, y: -20 }, { duration: 0 })
    }
  }, [textInView])

  const projectImagesAfterDev = useRef(null)
  const imagesInView = useInView(projectImagesAfterDev, { once: true })

  useEffect(() => {
    if (imagesInView) {
      animate(
        '.animate-project-images',
        { opacity: 1, x: 0 },
        {
          duration: 0.5,
          delay: stagger(0.5, { startDelay: 1.5 }),
          ease: 'circOut',
        }
      )
    } else {
      animate(
        '.animate-project-images',
        { opacity: 0, x: -10 },
        { duration: 0 }
      )
    }
  }, [imagesInView])

  // Project section two
  const projectsText0 = useRef(null)
  const textInView0 = useInView(projectsText0, { once: true })

  useEffect(() => {
    if (textInView0) {
      animate(
        '.animate-projects-text-0',
        { opacity: 1, y: 0 },
        {
          duration: 0.5,
          delay: stagger(0.2, { startDelay: 1 }),
          ease: 'circOut',
        }
      )
    } else {
      animate(
        '.animate-projects-text-0',
        { opacity: 0, y: -20 },
        { duration: 0 }
      )
    }
  }, [textInView0])

  const projectImagesDev = useRef(null)
  const imagesInView0 = useInView(projectImagesDev, { once: true })

  useEffect(() => {
    if (imagesInView0) {
      animate(
        '.animate-project-images-0',
        { opacity: 1, x: 0 },
        {
          duration: 0.5,
          delay: stagger(0.35, { startDelay: 1 }),
          ease: 'circOut',
        }
      )
    } else {
      animate(
        '.animate-project-images-0',
        { opacity: 0, x: -10 },
        { duration: 0 }
      )
    }
  }, [imagesInView0])

  // Project section three
  const projectsText1 = useRef(null)
  const textInView1 = useInView(projectsText1, { once: true })

  useEffect(() => {
    if (textInView1) {
      animate(
        '.animate-projects-text-1',
        { opacity: 1, y: 0 },
        {
          duration: 0.5,
          delay: stagger(0.2, { startDelay: 1 }),
          ease: 'circOut',
        }
      )
    } else {
      animate(
        '.animate-projects-text-1',
        { opacity: 0, y: -20 },
        { duration: 0 }
      )
    }
  }, [textInView1])

  const projectImagesBeforeDev = useRef(null)
  const imagesInView1 = useInView(projectImagesBeforeDev, { once: true })

  useEffect(() => {
    if (imagesInView1) {
      animate(
        '.animate-project-images-1',
        { opacity: 1, x: 0 },
        {
          duration: 0.5,
          delay: stagger(0.35, { startDelay: 1 }),
          ease: 'circOut',
        }
      )
    } else {
      animate(
        '.animate-project-images-1',
        { opacity: 0, x: -10 },
        { duration: 0 }
      )
    }
  }, [imagesInView1])

  return (
    <>
      <MainHeaderNav />
      <Image
        src={projectsImage}
        width={4098}
        height={2304}
        alt="Photo of Matt"
        className="projects-image hidden sm:block"
      />
      <Image
        src={projectsPhoneImage}
        width={1080}
        height={1920}
        alt="Photo of Matt"
        className="projects-image sm:hidden"
      />
      <motion.section
        initial={{ opacity: 0, y: 2 }}
        transition={{ delay: 0.3, duration: 1, ease: 'easeInOut' }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div ref={projectsText}>
          <div className={titan.className}>
            <div className="pt-28 sm:pt-16 lg:pt-20 2xl:pt-20 6xl:pt-64 text-center ps-3 sm:ps-7 xl:ps-8 font-bold dark:text-zinc-300 text-stone-800 drop-shadow-[3px_3px_0px_black] z-index">
              <h1 className="text-4xl sm:text-7xl md:text-[5.3rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[10.5rem] 6xl:text-[16rem] dark:drop-shadow-[2px_2px_0px_#004aad] drop-shadow-[2px_2px_0px_#66045f] animate-projects-text">
                Life after Dev Academy ...
              </h1>
            </div>
          </div>
          <h2 className="dark:text-zinc-300 text-stone-800 pt-10 ps-6 pe-6 sm:ps-0 sm:pe-0 text-center text-lg sm:text-xl 2xl:text-2xl animate-projects-text z-index">
            My self guided learning journey continues..
          </h2>
        </div>
        <motion.div ref={projectImagesAfterDev}>
          <div className="pt-6 6xl:pt-20 grid grid-cols-1 lg:grid-cols-2 gap-5 px-2 md:px-10 2xl:px-32">
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
                      className="w-full space-y-5 cursor-pointer animate-project-images"
                    >
                      <div className="space-y-2 md:space-y-5 2xl:space-y-8 dark:bg-stone-900 bg-zinc-300/90 rounded-2xl max-w-72 md:max-w-sm 2xl:max-w-2xl p-2 2xl:p-8">
                        <h1 className="text-sm sm:text-lg md:text-2xl 2xl:text-4xl dark:text-[#004aad] text-[#66045f]">
                          <div className={titan.className}>{project.title}</div>
                          <div className="text-xs sm:text-sm ps-2">
                            {project.secondTitle}
                          </div>
                        </h1>
                        <p className="text-xs sm:text-sm md:text-lg 2xl:text-2xl">
                          {project.description}
                        </p>
                        <Link href={project.sourceCode} target="_blank">
                          <p className="pt-2 text-xs md:text-lg dark:text-zinc-400 text-zinc-600 dark:hover:text-[#004aad] hover:text-[#66045f]">
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
        </motion.div>
        <div ref={projectsText0}>
          <div className={titan.className}>
            <div className="dark:text-zinc-300 text-stone-800 dark:drop-shadow-[6px_6px_0px_black] drop-shadow-[5px_5px_4px_#66045f] xl:pt-10 ps-6 xl:ps-10 pe-10 pb-4">
              <h1 className="text-4xl sm:text-7xl md:text-[5.3rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[10.5rem] 6xl:text-[16rem] animate-projects-text-0">
                Dev Academy ...
              </h1>
            </div>
          </div>
          <h2 className="dark:text-zinc-300 text-stone-800 pt-4 ps-6 pe-6 sm:ps-0 sm:pe-0 text-center text-lg sm:text-xl 2xl:text-2xl animate-projects-text-0">
            My first time studying starts..
          </h2>
          <h3 className="pt-4 ps-6 pe-8 sm:ps-0 sm:pe-0 text-center text-xs 2xl:text-sm dark:text-[#004aad] text-[#66045f] animate-projects-text-0">
            (More projects were completed within this time & the source code is
            available on github..)
          </h3>
        </div>
        <motion.div ref={projectImagesDev}>
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-2 gap-7 px-2 md:px-10 2xl:px-32">
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
                      className="w-full space-y-5 cursor-pointer animate-project-images-0"
                    >
                      <div className="space-y-2 md:space-y-5 2xl:space-y-8 dark:bg-stone-900 bg-zinc-300/90 rounded-2xl max-w-72 md:max-w-sm 2xl:max-w-2xl p-2 2xl:p-8">
                        <h1 className="text-sm sm:text-lg md:text-2xl 2xl:text-4xl dark:text-[#004aad] text-[#66045f]">
                          <div className={titan.className}>{project.title}</div>
                          <div className="text-xs sm:text-sm ps-2">
                            {project.secondTitle}
                          </div>
                        </h1>
                        <p className="text-xs sm:text-sm md:text-lg 2xl:text-2xl">
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
        </motion.div>

        <div ref={projectsText1}>
          <div className={titan.className}>
            <div className="dark:text-zinc-300 text-stone-800 dark:drop-shadow-[6px_6px_0px_black] drop-shadow-[5px_5px_4px_#66045f] xl:pt-10 ps-6 xl:ps-10 pe-10 pb-4">
              <h1 className="text-4xl sm:text-7xl md:text-[5.3rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[10.5rem] 6xl:text-[16rem] animate-projects-text-1">
                Life before Dev Academy ...
              </h1>
            </div>
          </div>
          <h2 className="dark:text-zinc-300 text-stone-800 pt-4 6xl:pt-10 ps-6 pe-6 sm:ps-0 sm:pe-0 text-center text-lg sm:text-xl 2xl:text-2xl  animate-projects-text-1">
            My self guided learning journey starts..
          </h2>
        </div>
        <motion.div ref={projectImagesBeforeDev}>
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-2 gap-7 px-2 md:px-10 2xl:px-32">
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
                      className="w-full space-y-5 cursor-pointer animate-project-images-1"
                    >
                      <div className="space-y-2 md:space-y-5 2xl:space-y-8 dark:bg-stone-900 bg-zinc-300/90 rounded-2xl max-w-72 md:max-w-sm 2xl:max-w-2xl p-2 2xl:p-8">
                        <h1 className="text-sm sm:text-lg md:text-2xl 2xl:text-4xl dark:text-[#004aad] text-[#66045f]">
                          <div className={titan.className}>{project.title}</div>
                          <div className="text-xs sm:text-sm ps-2">
                            {project.secondTitle}
                          </div>
                        </h1>
                        <p className="text-xs sm:text-sm md:text-lg 2xl:text-2xl">
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
        </motion.div>
      </motion.section>
      <Footer />
    </>
  )
}
