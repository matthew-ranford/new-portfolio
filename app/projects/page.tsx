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
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import Link from 'next/link'

export default function page() {
  const projectsAfterDev = [
    {
      title: 'McLauchlan Electrical',
      description:
        'Testing out NextJS on a wesbite revamp, using Acernity UI, Tailwind, & Framer-motion - in progress, awaiting further information.',
      tech: [SiNextdotjs, SiTailwindcss, SiFramer, SiTypescript],
      link: 'https://matthew-ranford.github.io/mclauchlan-electrical/',
      sourceCode: 'https://github.com/matthew-ranford/mclauchlan-electrical',
      cover: '/cover-one.png',
      // background: 'bg-red-500',
    },
    {
      title: 'Attention To Detail - Painting services',
      description:
        'Trying to improve my ReactJS skills on a wesbite revamp, using Bootstrap, Tailwind, & Framer-motion - now live! My first ever live website for a friend.',
      tech: [SiReact, SiBootstrap, SiTailwindcss, SiFramer, SiTypescript],
      link: 'https://atd-decorators.co.nz/',
      sourceCode: '',
      cover: '/cover-two.png',
      // background: 'bg-indigo-500',
    },
    {
      title: 'Fresh & Faded Barbershop',
      description:
        'Trying to improve my ReactJS skills straight out of Dev Academy on a first-time website, using Bootstrap, & Framer-motion - not complete; never received further information, photos etc.',
      tech: [SiReact, SiBootstrap, SiFramer, SiTypescript],
      link: 'https://matthew-ranford.github.io/fresh-and-faded/',
      sourceCode: '',

      cover: '/cover-three.png',
      // background: 'bg-green-500',
    },
    {
      title: 'Item Tracker',
      description:
        "Trying to improve my Full-Stack skills straight out of Dev Academy, an item tracking application to see who you've lent your items to - not complete; need to go back & start again to regain my skills along with using the new skills i've learnt",
      tech: [
        SiReact,
        SiBootstrap,
        SiTailwindcss,
        SiFramer,
        SiSqlite,
        SiTypescript,
      ],
      link: 'https://github.com/matthew-ranford/item-tracker/tree/date-picker',
      sourceCode: '',
      cover: '/cover-four.png',
      // background: 'bg-fuchsia-500',
    },
  ]

  const projectsDevAcademy = [
    {
      title: 'Friend Booking',
      description:
        'Final group project at Dev Academy, a friend booking application where you can view when you/your friends are available for a catch up - I spent a big role trying to make the app responsive',
      tech: [SiReact, SiSqlite, SiCss3, SiTypescript],
      link: 'https://github.com/matthew-ranford/friend-booking',
      sourceCode: 'https://github.com/matthew-ranford/friend-booking',

      cover: '/cover-five.png',
      // background: 'bg-amber-500',
    },
    {
      title: 'Foundations Blog',
      description:
        'Start of my learning Journey at Dev Academy, starting with the basics of HTML, CSS, & JavaScript',
      tech: [SiHtml5, SiCss3, SiJavascript],
      link: 'https://matthew-ranford.github.io/',
      sourceCode: '',

      cover: '/cover-six.png',
      // background: 'bg-amber-500',
    },
  ]

  const projectsBeforeDev = [
    {
      title: 'Complete Building Solutions',
      description: '',
      tech: [SiHtml5, SiCss3, SiJavascript],
      link: 'https://matthew-ranford.github.io/complete-building-solutions-website-concept/',
      sourceCode: '',
      cover: '/cover-seven.png',
      // background: 'bg-amber-500',
    },
    {
      title: 'Portfolio',
      description: '',
      tech: [SiHtml5, SiCss3],
      link: 'https://matthew-ranford.github.io/freecodecamp-personal-portfolio-webpage/',
      sourceCode: '',
      cover: '/cover-eight.png',
      // background: 'bg-amber-500',
    },
  ]

  return (
    <>
      <div className="py-10 p-5 sm:p-0">
        <h1 className="pt-32 text-center text-7xl">
          Life after Dev Academy...
        </h1>
        <h2 className="pt-4 text-center text-2xl text-amber-600">
          My self guided learning journey continues..
        </h2>
        <div className="pt-6 grid grid-cols-1 lg:grid-cols-2 gap-7 px-10">
          {projectsAfterDev.map((project, index) => {
            return (
              <Link href={project.link} key={index} target="_blank">
                <div className={cn('p-5 rounded-2xl', project.background)}>
                  <DirectionAwareHover
                    imageUrl={project.cover}
                    className="w-full space-y-5 cursor-pointer"
                  >
                    <div className="space-y-5 dark:bg-stone-900 bg-zinc-200 rounded-2xl max-w-sm p-2">
                      <h1 className="text-2xl text-amber-600">
                        {project.title}
                      </h1>
                      <p className="text-lg">{project.description}</p>
                      <Link href={project.sourceCode} target="_blank">
                        <p className="pt-2 pb-2 text-zinc-400 hover:text-amber-600">
                          Source Code ↗️
                        </p>
                      </Link>
                      <div className="flex items-center gap-5">
                        {project.tech.map((Icon, index) => {
                          return <Icon key={index} className="w-8 h-8" />
                        })}
                      </div>
                    </div>
                  </DirectionAwareHover>
                </div>
              </Link>
            )
          })}
        </div>
        <h1 className="pt-20 text-center text-7xl">Dev Academy...</h1>
        <h2 className="pt-4 text-center text-2xl text-amber-600">
          My first time studying starts..
        </h2>
        <h3 className="pt-4 text-center text-sm text-amber-800">
          (More projects were completed within this time & the source code is
          available on github..)
        </h3>
        <div className="pt-6 grid grid-cols-1 lg:grid-cols-2 gap-7 px-10">
          {projectsDevAcademy.map((project, index) => {
            return (
              <Link href={project.link} key={index} target="_blank">
                <div className={cn('p-5 rounded-2xl', project.background)}>
                  <DirectionAwareHover
                    imageUrl={project.cover}
                    className="w-full space-y-5 cursor-pointer"
                  >
                    <div className="space-y-5 dark:bg-stone-900 bg-zinc-200 rounded-2xl max-w-sm p-2">
                      <h1 className="text-2xl text-amber-600">
                        {project.title}
                      </h1>
                      <p className="text-lg">{project.description}</p>
                      <Link href={project.sourceCode} target="_blank">
                        <p className="pt-2 pb-2 text-zinc-400 hover:text-amber-600">
                          Source Code ↗️
                        </p>
                      </Link>
                      <div className="flex items-center gap-5">
                        {project.tech.map((Icon, index) => {
                          return <Icon key={index} className="w-8 h-8" />
                        })}
                      </div>
                    </div>
                  </DirectionAwareHover>
                </div>
              </Link>
            )
          })}
        </div>
        <h1 className="pt-32 text-center text-7xl">
          Life before Dev Academy...
        </h1>
        <h2 className="pt-4 text-center text-2xl text-amber-600">
          My self guided learning journey starts..
        </h2>

        <div className="pt-6 grid grid-cols-1 lg:grid-cols-2 gap-7 px-10">
          {projectsBeforeDev.map((project, index) => {
            return (
              <Link href={project.link} key={index} target="_blank">
                <div className={cn('p-5 rounded-2xl', project.background)}>
                  <DirectionAwareHover
                    imageUrl={project.cover}
                    className="w-full space-y-5 cursor-pointer"
                  >
                    <div className="space-y-5 dark:bg-stone-900 bg-zinc-200 rounded-2xl max-w-sm p-2">
                      <h1 className="text-2xl text-amber-600">
                        {project.title}
                      </h1>
                      <p className="text-lg">{project.description}</p>
                      <Link href={project.sourceCode} target="_blank">
                        <p className="pt-2 pb-2 text-zinc-400 hover:text-amber-600">
                          Source Code ↗️
                        </p>
                      </Link>
                      <div className="flex items-center gap-5">
                        {project.tech.map((Icon, index) => {
                          return <Icon key={index} className="w-8 h-8" />
                        })}
                      </div>
                    </div>
                  </DirectionAwareHover>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
