import {
  SiBootstrap,
  SiFramer,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import Link from 'next/link'

export default function page() {
  const projects = [
    {
      title: 'McLauchlan Electrical',
      description:
        'Testing out NextJS on a wesbite revamp, using Acernity UI, Tailwind & Framer-motion',
      tech: [SiNextdotjs, SiTailwindcss, SiFramer],
      link: 'https://matthew-ranford.github.io/mclauchlan-electrical/',
      cover: '/cover-one.png',
      // background: 'bg-red-500',
    },
    {
      title: 'ATD',
      tech: [SiReact, SiBootstrap, SiTailwindcss, SiFramer],
      link: '',
      cover: '/hero-image-test.png',
      // background: 'bg-indigo-500',
    },
    {
      title: 'Fresh & Faded',
      tech: [SiReact, SiBootstrap, SiFramer],
      link: '',
      cover: '/hero-image-test.png',
      // background: 'bg-green-500',
    },
    {
      title: 'Item Tracker',
      tech: [SiReact, SiBootstrap, SiTailwindcss, SiFramer],
      link: '',
      cover: '/hero-image-test.png',
      // background: 'bg-fuchsia-500',
    },
    {
      title: 'Friend Booking',
      tech: [SiReact, SiBootstrap, SiTailwindcss, SiFramer],
      link: '',
      cover: '/hero-image-test.png',
      // background: 'bg-amber-500',
    },
  ]

  return (
    <>
      <div className="py-10 p-5 sm:p-0">
        <div className="pt-32 grid grid-cols-1 lg:grid-cols-2 gap-7 px-10">
          {projects.map((project, index) => {
            return (
              <Link href={project.link} key={index} target="_blank">
                <div className={cn('p-5 rounded-2xl', project.background)}>
                  <DirectionAwareHover
                    imageUrl={project.cover}
                    className="w-full space-y-5 cursor-pointer"
                  >
                    <div className="space-y-5 dark:bg-stone-900 bg-zinc-200 rounded-2xl max-w-sm p-2">
                      <h1 className="text-2xl">{project.title}</h1>
                      <p className="text-lg">{project.description}</p>
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
