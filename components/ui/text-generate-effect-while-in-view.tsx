'use client'
import { useEffect, useState } from 'react'
import { motion, stagger, useAnimate, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

export const TextGenerateEffectWhileInView = ({
  words,
  className,
  delay = 0,
  size = 'medium',
}: {
  words: string
  className?: string
  delay?: number
  size?: 'small' | 'medium' | 'large' | 'xlarge'
}) => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })
  let wordsArray = words.split(' ')

  const sizeClasses = {
    small: 'text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl',
    medium: 'text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl',
    large:
      'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl',
    xlarge:
      'text-6xl sm:text-7xl md:text-[5.3rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[10.5rem] 6xl:text-[16rem]',
  }

  useEffect(() => {
    if (isInView) {
      const delayStart = setTimeout(() => {
        animate(
          'span',
          {
            opacity: 1,
          },
          {
            duration: 2,
            delay: stagger(0.2),
          }
        )
      }, delay)

      return () => clearTimeout(delayStart)
    }
  }, [isInView, scope.current, delay, animate])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span key={word + idx} className="opacity-0">
            {word}{' '}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  return (
    <div className={cn('', className)}>
      <div className="">
        <div
          className={cn(
            sizeClasses[size],
            'dark:text-zinc-300 text-stone-800 leading-snug tracking-wide'
          )}
        >
          {renderWords()}
        </div>
      </div>
    </div>
  )
}
