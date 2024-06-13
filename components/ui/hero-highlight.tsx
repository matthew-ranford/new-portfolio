'use client'
import { cn } from '@/lib/utils'
import { useMotionValue, motion, useMotionTemplate } from 'framer-motion'
import React from 'react'

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: '0% 100%',
        opacity: 0,
      }}
      animate={{
        backgroundSize: '100% 100%',
        opacity: 1,
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        delay: 0.8,
      }}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        display: 'inline',
      }}
      className={cn(``, className)}
    >
      {children}
    </motion.span>
  )
}
