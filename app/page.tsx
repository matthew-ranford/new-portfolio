import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'

export default function page() {
  return (
    <>
      <Navbar />
      {/* Hide bottom scrollbar */}
      <div className="overflow-hidden">
        <Hero />
        <About />
        <Footer />
      </div>
    </>
  )
}
