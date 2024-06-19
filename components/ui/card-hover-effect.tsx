import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { IconType } from 'react-icons'

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    text: string
    icon: IconType
  }[]
  className?: string
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn('grid grid-cols-2 lg:grid-cols-3 py-6', className)}>
      {items.map((item, idx) => {
        const Icons = item.icon

        return (
          <div
            key={idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full dark:bg-orange-300 bg-cyan-700 block rounded-lg"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="rounded-md w-full p-4 overflow-hidden  group-hover:ring-2 dark:ring-stone-900 ring-zinc-200 dark:hover:text-stone-900 hover:text-zinc-200 relative z-20 transition-all duration-500">
              <div className="py-4 z-50 relative space-y-5">
                <Icons className="w-8 h-8 mx-auto" />
                <p className="text-2xl text-center dark:text-zinc-200 dark:group-hover:text-stone-900 group-hover:text-zinc-200 text-stone-900">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
