'use client'
import { motion } from 'framer-motion'
import { TextGenerateEffect } from './text-generate-effect'

export const RotatingGlobeEmoji = () => (
  <motion.div
    className="text-4xl md:text-4xl lg:text-6xl xl:text-6xl 6xl:text-7xl inline-block drop-shadow-[2px_2px_0px_black]"
    initial={{
      rotate: 0,
      opacity: 0,
    }}
    animate={{
      rotate: -90,
      opacity: 1,
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'linear',
      delay: 2,
    }}
    style={{
      transformOrigin: 'center',
      perspective: '1000px',
      display: 'inline-block',
    }}
  >
    🌎
  </motion.div>
)

export const TextGenerateEffectWithGlobe = ({
  words,
  delay,
  size,
}: {
  words: string
  delay?: number
  size?: 'small' | 'medium' | 'large' | 'xlarge'
}) => {
  const wordsWithEmoji = `${words} `
  return (
    <div className="flex items-center">
      <TextGenerateEffect words={wordsWithEmoji} delay={delay} size={size} />
      <RotatingGlobeEmoji />
    </div>
  )
}
