import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Tabs, Tab } from '@nextui-org/react'

// Images
import gmail from '../../public/images/footer-icons/gmail-icon.png'
import linkedIn from '../../public/images/footer-icons/linkedin-icon.png'
import github from '../../public/images/footer-icons/github-icon.png'
import instagram from '../../public/images/footer-icons/instagram-icon.png'
import MainHeaderNav from './MainHeaderNav'

// TypeScript
interface Socials {
  link: string
  label: string
  icon: StaticImageData
}

export default function Footer() {
  const pathname = usePathname()

  const socials: Socials[] = [
    {
      link: 'mailto:matt.ranford16@gmail.com',
      label: 'Email',
      icon: gmail,
    },
    {
      link: 'https://www.linkedin.com/in/matthew-ranford-23b759261/',
      label: 'LinkedIn',
      icon: linkedIn,
    },
    {
      link: 'https://github.com/matthew-ranford',
      label: 'GitHub',
      icon: github,
    },
    {
      link: 'https://www.instagram.com/mattranny/',
      label: 'Instagram',
      icon: instagram,
    },
  ]

  const tabsToShow = [
    ...(pathname !== '/' ? [{ key: 'home', title: '⬅️ Home', href: '/' }] : []),
    ...(pathname !== '/about'
      ? [{ key: 'about', title: 'About ➡️', href: '/about' }]
      : []),
    ...(pathname !== '/projects'
      ? [{ key: 'projects', title: 'Projects ➡️', href: '/projects' }]
      : []),
  ]

  return (
    <>
      <main className="mt-10 md:mt-24">
        <div className="flex place-content-center">
          <Tabs
            aria-label="Options"
            radius="sm"
            classNames={{
              tabList: 'dark:bg-stone-900/40 bg-zinc-400/40 ps-4 pe-4',
              tab: 'hover:scale-[1.1] hover:dark:text-[#004aad] hover:text-[#66045f] md:text-lg 6xl:text-xl',
            }}
            selectedKey={pathname}
          >
            {tabsToShow.map((tab) => (
              <Tab key={tab.key} title={tab.title} href={tab.href} />
            ))}
          </Tabs>
        </div>
        <div className="flex place-content-center gap-10 pt-10">
          {socials.map((social, index) => {
            return (
              <Link href={social.link} key={index} aria-label={social.label}>
                <Image
                  src={social.icon}
                  className="w-8 h-8 my-4 md:my-0 hover:scale-125"
                  width={48}
                  height={48}
                  alt={social.label}
                />
              </Link>
            )
          })}
        </div>
        <MainHeaderNav />
      </main>
    </>
  )
}
