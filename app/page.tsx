import React from 'react'
import Navbar from './components/Navbar'

export default function page() {
  return (
    <div className="min-h-screen bg-white text-black p-5">
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
    </div>
  )
}
