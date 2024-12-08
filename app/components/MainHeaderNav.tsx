import Image from 'next/image'
import { useTheme } from 'next-themes'
import mainLogo from '../../public/images/logo-dark.png'
import mainLogoLightMode from '../../public/images/logo-light.png'

export default function MainHeaderNav() {
  const { theme } = useTheme()
  const logoSource = theme === 'light' ? mainLogo : mainLogoLightMode

  return (
    <>
      <div className="ps-2 sm:ps-4 lg:ps-10">
        <Image
          src={logoSource}
          alt="Website Logo"
          width={500}
          height={500}
          className="6xl:w-1/3 6xl:h-1/3 z-index"
        />
      </div>
    </>
  )
}
