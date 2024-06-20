import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const socials = [
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
                className="w-7 h-7 my-4 md:my-0 hover:scale-125"
                width={48}
                height={48}
                alt=""
              />
            </Link>
          )
        })}
      </div>
      <h2 className="text-center text-2xl pt-4 pb-4">Back to top</h2>
    </>
  )
}
