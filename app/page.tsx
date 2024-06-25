import Hero from './components/Hero'

export default function page() {
  return (
    <>
      {/* Hide bottom scrollbar */}
      <div className="overflow-hidden">
        <Hero />
      </div>
    </>
  )
}

// bg-zinc-300 dark:bg-stone-800
