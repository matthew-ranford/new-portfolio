import Image from 'next/image'
import Link from 'next/link'

//TypeScript
interface Socials {
  link: string
  label: string
  icon: string
}

export default function Footer() {
  const socials: Socials[] = [
    {
      link: 'mailto:matt.ranford16@gmail.com',
      label: 'Email',
      icon: '/gmail-icon.png',
    },
    {
      link: 'https://www.linkedin.com/in/matthew-ranford-23b759261/',
      label: 'LinkedIn',
      icon: '/linkedin-icon.png',
    },
    {
      link: 'https://github.com/matthew-ranford',
      label: 'GitHub',
      icon: '/github-icon.png',
    },
    {
      link: 'https://www.instagram.com/mattranny/',
      label: 'Instagram',
      icon: '/instagram-icon.png',
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
                alt=""
              />
            </Link>
          )
        })}
      </div>
    </>
  )
}
