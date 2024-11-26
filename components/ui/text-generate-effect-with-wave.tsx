'use client'
import { motion } from 'framer-motion'
import { TextGenerateEffect } from './text-generate-effect'

export const WavingEmoji = () => (
  <motion.span
    className="text-4xl md:text-4xl lg:text-6xl xl:text-6xl 6xl:text-7xl"
    initial={{ opacity: 0 }}
    animate={{
      rotate: [0, 14, -8, 14, -4, 10, 0],
      opacity: 1,
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
      delay: 2,
    }}
    style={{
      originX: 0.7,
      originY: 0.7,
    }}
  >
    👋
  </motion.span>
)

export const TextGenerateEffectWithWave = ({
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
      <WavingEmoji />
    </div>
  )
}
