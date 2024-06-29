import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

// Images
import gmail from '../../public/images/footer-icons/gmail-icon.png'
import linkedIn from '../../public/images/footer-icons/linkedin-icon.png'
import github from '../../public/images/footer-icons/github-icon.png'
import instagram from '../../public/images/footer-icons/instagram-icon.png'

// TypeScript
interface Socials {
  link: string
  label: string
  icon: StaticImageData
}

export default function Footer() {
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
  return (
    <>
      <div className="flex place-content-center gap-10 pt-20 pb-4">
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
    </>
  )
}
