import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import { titan } from '@/fonts'

export default function MainHeaderNav() {
  // TypeWriterEffect
  const mainHeader = [
    {
      text: 'Matthew',
    },
    { text: 'Ranford' },
  ]

  return (
    <>
      <div className={titan.className}>
        <h1 className="ps-4 sm:ps-6 pt-2 sm:pt-4 md:pt-2">
          <TypewriterEffect words={mainHeader} />
        </h1>
      </div>
    </>
  )
}
