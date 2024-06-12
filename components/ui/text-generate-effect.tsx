'use client'
import { useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'
import { cn } from '@/lib/utils'

export const TextGenerateEffect = ({
  words,
  className,
  delay = 0,
}: {
  words: string
  className?: string
  delay?: number
}) => {
  const [scope, animate] = useAnimate()
  let wordsArray = words.split(' ')

  useEffect(() => {
    // Adding a delay before starting the animation
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
                <span className="text-3xl smallest:mr-0 mr-2 sm:mr-4">
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
        <div className="text-lg dark:text-zinc-200 text-stone-900 leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  )
}
