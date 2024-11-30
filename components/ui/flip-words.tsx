'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion'
import { cn } from '@/lib/utils'

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[]
  duration?: number
  className?: string
}) => {
  const [currentWord, setCurrentWord] = useState(words[0])
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0]
    setCurrentWord(word)
    setIsAnimating(true)
  }, [currentWord, words])

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation()
      }, duration)
  }, [isAnimating, duration, startAnimation])

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false)
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: 'blur(8px)',
          scale: 1.2,
          position: 'absolute',
        }}
        className={cn(
          'inline-block relative text-left text-stone-800 dark:text-zinc-300',
          className
        )}
        key={currentWord}
      >
        {currentWord.split(' ').map((word, wordIndex, wordArray) => (
          <React.Fragment key={word + wordIndex}>
            {word.split('').map((letter, letterIndex) => (
              <motion.span
                key={word + letterIndex}
                initial={{
                  opacity: 0,
                  y: 50,
                  rotateX: 90,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  delay: wordIndex * 0.2 + letterIndex * 0.05, // More staggered timing
                }}
                className="inline-block origin-bottom"
              >
                {letter}
              </motion.span>
            ))}
            {wordIndex < wordArray.length - 1 && <span> </span>}
          </React.Fragment>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
