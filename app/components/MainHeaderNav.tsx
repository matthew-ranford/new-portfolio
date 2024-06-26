import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import { handlee } from '@/fonts'

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
      <div className={handlee.className}>
        <h1 className="ps-4 sm:ps-6 lg:ps-8 pt-4 sm:pt-8 md:pt-6 lg:pt-4 xl:pt-2">
          <TypewriterEffect words={mainHeader} />
        </h1>
      </div>
    </>
  )
}
