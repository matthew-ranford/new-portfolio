import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import { titan } from '@/fonts'

export default function MainHeaderNav() {
  // TypeWriterEffect
  const mainHeader = [
    {
      text: 'M.R',
    },
  ]

  return (
    <>
      <div className={titan.className}>
        <h1 className="ps-4 sm:ps-6 pt-2 sm:pt-4 md:pt-0 z-index">
          <TypewriterEffect words={mainHeader} />
        </h1>
      </div>
    </>
  )
}
