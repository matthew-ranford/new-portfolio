'use client'
import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import { X } from 'lucide-react'

type Card = {
  id: number
  content: JSX.Element | React.ReactNode | string
  className: string
  thumbnail: StaticImageData
  alt: string
}

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null)
  const [lastSelected, setLastSelected] = useState<Card | null>(null)

  const handleClick = (card: Card) => {
    setLastSelected(selected)
    setSelected(card)
  }

  const handleOutsideClick = () => {
    setLastSelected(selected)
    setSelected(null)
  }

  // Maybe look at changing the grid-cols to 2 for mobile

  return (
    <div className="w-full h-full p-2 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 md:max-w-5xl 2xl:max-w-screen-2xl mx-auto px-6 xl:px-0 6xl:pt-10 gap-4 drop-shadow-[6px_6px_2px_black] relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, 'animate-image-grid')}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              'relative overflow-hidden',
              selected?.id === card.id
                ? 'rounded-xl absolute inset-0 w-full h-[87%] md:h-[87%] m-auto my-24 6xl:my-44 z-50 flex justify-center items-center flex-wrap flex-col'
                : lastSelected?.id === card.id
                ? 'z-40 rounded-xl h-full w-full cursor-pointer'
                : 'rounded-xl h-full w-full cursor-pointer'
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          'absolute h-full w-full sm:h-svh left-0 top-0 dark:bg-[#66045f] bg-[#004aad] opacity-0 z-10 rounded-2xl cursor-pointer',
          selected?.id ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        animate={{ opacity: selected?.id ? 0.95 : 0 }}
      >
        <X className="dark:text-stone-800 w-14 h-14 mx-auto mt-4" />
      </motion.div>
    </div>
  )
}

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <Image
      src={card.thumbnail}
      height={768}
      width={1366}
      onLoad={() => setLoaded(true)}
      className={cn(
        'object-cover object-top absolute inset-0 h-full w-full transition duration-200',
        loaded ? 'blur-none' : 'blur-md'
      )}
      alt={card.alt}
      loading="lazy"
    />
  )
}

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.4,
        }}
        className="absolute inset-0 h-full w-full bg-black z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          ease: 'easeInOut',
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  )
}
