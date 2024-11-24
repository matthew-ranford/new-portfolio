'use client'

import { cn } from '@/lib/utils'
import { motion, stagger, useAnimate, useInView } from 'framer-motion'
import { useEffect } from 'react'

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(''),
    }
  })

  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)
  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        {
          display: 'inline-block',
          opacity: 1,
          width: 'fit-content',
        },
        {
          duration: 0.35,
          delay: stagger(0.1),
          ease: 'easeInOut',
        }
      )
    }
  }, [animate, isInView])
  // }, [animate, isInView]) - takes away typescript error

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `opacity-0 hidden dark:text-orange-300 text-cyan-700`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              {idx < wordsArray.length - 1 && <br />}
              {/* &nbsp; - This was causing me spacing issues for the second word*/}
            </div>
          )
        })}
      </motion.div>
    )
  }
  return (
    <div
      className={cn(
        'text-5xl sm:text-7xl md:text-7xl xl:text-8xl 2xl:text-9xl 6xl:text-[10rem] font-bold',
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn('', cursorClassName)}
      ></motion.span>
    </div>
  )
}
