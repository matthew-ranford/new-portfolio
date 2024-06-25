import { TypewriterEffect } from '@/components/ui/typewriter-effect'

export default function MainHeaderNav() {
  // TypeWriterEffect
  const mainHeader = [
    {
      text: 'MATTHEW',
    },
    { text: 'RANFORD' },
  ]

  return (
    <>
      <h1 className="ps-4 sm:ps-6 lg:ps-8 pt-4 sm:pt-8 md:pt-6 lg:pt-4 xl:pt-3">
        <TypewriterEffect words={mainHeader} />
      </h1>
    </>
  )
}
