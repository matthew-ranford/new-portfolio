'use client'
import { useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'
import { cn } from '@/lib/utils'

export const TextGenerateEffect = ({
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
  let wordsArray = words.split(' ')

  const sizeClasses = {
    small: 'text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl',
    medium: 'text-md sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl',
    large:
      'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl',
    xlarge:
      'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl',
  }

  useEffect(() => {
    const delayStart = setTimeout(() => {
      animate(
        'span',
        {
          opacity: 1,
        },
        {
          duration: 1,
          delay: stagger(0.2),
        }
      )
    }, delay)

    return () => clearTimeout(delayStart)
  }, [scope.current, delay])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const isEmoji = /\p{Emoji}/u.test(word)
          return (
            <motion.span key={word + idx} className="opacity-0">
              {isEmoji ? (
                <span className="text-2xl md:text-3xl 4xl:text-5xl 5xl:text-7xl 6xl:text-7xl mr-0 smallest:mr-0 sm:mr-4">
                  {word}
                </span>
              ) : (
                word
              )}{' '}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn('', className)}>
      <div className="">
        <div
          className={cn(
            sizeClasses[size],
            'dark:text-zinc-300 text-stone-900 leading-snug tracking-wide'
          )}
        >
          {renderWords()}
        </div>
      </div>
    </div>
  )
}
