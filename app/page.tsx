import Hero from './components/Hero'
import About from './components/About'

export default function page() {
  return (
    <>
      {/* Hide bottom scrollbar */}
      <div className="overflow-hidden">
        <Hero />
        <About />
      </div>
    </>
  )
}
