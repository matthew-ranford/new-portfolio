'use client'

import { useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const DirectionAwareHover = ({
  imageUrl,
  alt,
  children,
  childrenClassName,
  imageClassName,
  className,
}: {
  imageUrl: StaticImageData
  alt: string
  children: React.ReactNode | string
  childrenClassName?: string
  imageClassName?: string
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const [direction, setDirection] = useState<
    'top' | 'bottom' | 'left' | 'right' | string
  >('left')

  const [isHovered, setIsHovered] = useState(false)

  const getDirection = (clientX: number, clientY: number, obj: HTMLElement) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect()
    const x = clientX - left - (w / 2) * (w > h ? h / w : 1)
    const y = clientY - top - (h / 2) * (h > w ? w / h : 1)
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4
    return d
  }

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!ref.current) return

    const direction = getDirection(event.clientX, event.clientY, ref.current)
    setDirectionState(direction)
    setIsHovered(true)
  }

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const touch = event.touches[0]
    const direction = getDirection(touch.clientX, touch.clientY, ref.current)
    setDirectionState(direction)
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const setDirectionState = (directionIndex: number) => {
    switch (directionIndex) {
      case 3:
        setDirection('left')
        break
      default:
        setDirection('left')
        break
    }
  }

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleMouseLeave}
      ref={ref}
      className={cn(
        'bg-transparent rounded-2xl overflow-hidden group/card relative touch-none',
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-full w-full"
          initial="initial"
          whileHover={isHovered ? direction : undefined}
          animate={isHovered ? direction : 'initial'}
          exit="exit"
        >
          <motion.div
            className={cn(
              'group-hover/card:block hidden absolute inset-0 w-full h-full z-10 transition duration-500',
              isHovered ? 'block' : 'hidden'
            )}
          />
          <motion.div
            variants={variants}
            className="h-full w-full relative"
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
          >
            <Image
              alt={alt}
              className={cn(
                'h-full w-full object-cover scale-[1.15]',
                imageClassName
              )}
              width={1500}
              height={1500}
              src={imageUrl}
            />
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{
              duration: 1,
              ease: 'easeOut',
            }}
            className={cn(
              'dark:text-zinc-200 text-stone-900 absolute bottom-0 left-10 md:bottom-4 md:left-4 z-40',
              childrenClassName
            )}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

const variants = {
  initial: {
    x: 0,
  },
  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 20,
  },
  bottom: {
    y: -20,
  },
  left: {
    x: 20,
  },
  right: {
    x: -20,
  },
}

const textVariants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  top: {
    y: -20,
    opacity: 1,
  },
  bottom: {
    y: 2,
    opacity: 1,
  },
  left: {
    x: -2,
    opacity: 1,
  },
  right: {
    x: 20,
    opacity: 1,
  },
}
