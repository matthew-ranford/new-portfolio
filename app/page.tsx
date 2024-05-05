import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

export default function page() {
  return (
    <>
      <Navbar />
      <div className="bg-zinc-950 dark:bg-zinc-900">
        <Hero />
        <About />
      </div>
    </>
  )
}
