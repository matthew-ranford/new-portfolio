import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import { ultra } from '@/fonts'

export default function page() {
  return (
    <>
      <Navbar />
      <div className={ultra.className}>
        <Hero />
      </div>
    </>
  )
}
