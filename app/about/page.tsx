'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { titan } from '@/fonts'
import { motion, animate, stagger, useInView } from 'framer-motion'

import {
  Card,
  CardHeader,
  CardBody,
  Image as NextUIImage,
} from '@nextui-org/react'

// Components
import MainHeaderNav from '../components/MainHeaderNav'
import Footer from '../components/Footer'
import { LayoutGrid } from '@/components/ui/layout-grid'
import { FlipWords } from '@/components/ui/flip-words'
import ContactModal from '../components/ContactModal'

// Main page image
import aboutImage from '../../public/images/about-images/about-image-main.png'
import aboutImagePhone from '../../public/images/about-images/about-image-main-phone.png'
import contactCardImage from '../../public/images/about-images/about-page-contact-card.png'
import aboutCardOneImage from '../../public/images/about-images/about-card-one.png'
import aboutCardTwoImage from '../../public/images/about-images/about-card-two.png'
import aboutCardThreeImage from '../../public/images/about-images/about-card-three.png'
import aboutCardFourImage from '../../public/images/about-images/about-card-four.png'
import aboutCardFiveImage from '../../public/images/about-images/about-card-five.png'

// LayoutGrid
const FrameOne = () => {
  return (
    <div>
      <h1 className="text-4xl dark:text-zinc-300 text-[#004aad]">
        <div className={titan.className}>Invermere, BC, Canada.</div>
      </h1>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-300 ">
        Ice Skating & Ice Hockey on the longest skating trail in the world at
        Lake Windermere.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-zinc-300 ">
        I lived here for about two years.
      </p>
    </div>
  )
}

const FrameTwo = () => {
  return (
    <div>
      <h1 className="text-4xl dark:text-zinc-300 text-[#004aad]">
        <div className={titan.className}>
          Lower Bugaboo Falls, Spillimacheen, Canada.
        </div>
      </h1>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-300">
        Hiking, exploring, sightseeing, & waterfalls.
      </p>
    </div>
  )
}

const FrameThree = () => {
  return (
    <div>
      <p className="text-4xl dark:text-zinc-300 text-[#004aad]">
        <div className={titan.className}>
          Welsh Lakes, East Kootenay, Canada.
        </div>
      </p>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-300 ">
        More hiking, exploring, sightseeing, & unreal views.
      </p>
    </div>
  )
}

const FrameFour = () => {
  return (
    <div>
      <p className="text-4xl dark:text-zinc-300 text-[#004aad]">
        <div className={titan.className}>Lethbridge, AB, Canada.</div>
      </p>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-300 ">
        Worked as a groundskeeper to maintain University grounds & snow-removal
        through winter, -40° was a regular..
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-zinc-300 ">
        Lethbridge University.
      </p>
    </div>
  )
}

const FrameFive = () => {
  return (
    <div>
      <p className="text-4xl dark:text-zinc-300 text-[#004aad]">
        <div className={titan.className}>Chiang Mai, Thailand.</div>
      </p>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-300 ">
        Visting an elephant sanctuary with some friends, where we were able to
        bath and feed the elephants!
      </p>
    </div>
  )
}

const FrameSix = () => {
  return (
    <div>
      <p className="text-4xl dark:text-zinc-300 text-[#004aad]">
        <div className={titan.className}>Wellington, NZ.</div>
      </p>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-300 ">
        I spent about five years at Immigration New Zealand. I finished as a
        Senior Immigration Officer.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-zinc-300 ">
        My last goodbye.
      </p>
    </div>
  )
}

const FrameSeven = () => {
  return (
    <div>
      <p className="text-4xl dark:text-zinc-300 text-[#004aad]">
        <div className={titan.className}>Chiang Mai, Thailand.</div>
      </p>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-300 ">
        Cooking class with some friends.. along with our mentor for the day.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-zinc-300 ">
        Wasn&apos;t sure where the camera was.
      </p>
    </div>
  )
}

const FrameEight = () => {
  return (
    <div>
      <p className="text-4xl dark:text-zinc-300 text-[#004aad]">
        <div className={titan.className}>Fairmont, BC, Canada.</div>
      </p>
      <p className="font-normal text-base my-4 max-w-xl text-zinc-300 ">
        Dislocated my shoulder the first month living in Canada, working on
        Panorama Mountain Resort.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-zinc-300 ">
        Columbia Lake.
      </p>
    </div>
  )
}

// LayoutGrid Images
import aboutImage1 from '../../public/images/about-images/about-image-1.jpg'
import aboutImage2 from '../../public/images/about-images/about-image-2.jpg'
import aboutImage3 from '../../public/images/about-images/about-image-3.jpg'
import aboutImage4 from '../../public/images/about-images/about-image-4.jpg'
import aboutImage5 from '../../public/images/about-images/about-image-5.jpg'
import aboutImage6 from '../../public/images/about-images/about-image-6.jpg'
import aboutImage7 from '../../public/images/about-images/about-image-7.jpg'
import aboutImage8 from '../../public/images/about-images/about-image-8.jpg'

// LayoutGrid
const cards = [
  {
    id: 1,
    content: <FrameOne />,
    className: 'md:col-span-2',
    thumbnail: aboutImage1,
    alt: 'Image overlooking ice and mountains',
  },
  {
    id: 2,
    content: <FrameTwo />,
    className: 'col-span-1',
    thumbnail: aboutImage2,
    alt: 'Image overlooking a waterfall',
  },
  {
    id: 3,
    content: <FrameThree />,
    className: 'col-span-1',
    thumbnail: aboutImage3,
    alt: 'Image overlooking a lake',
  },
  {
    id: 4,
    content: <FrameFour />,
    className: 'md:col-span-2',
    thumbnail: aboutImage4,
    alt: 'Image with the sunset in the background',
  },
  {
    id: 5,
    content: <FrameFive />,
    className: 'md:col-span-2',
    thumbnail: aboutImage5,
    alt: 'Image with friends with the elephants',
  },
  {
    id: 6,
    content: <FrameSix />,
    className: 'col-span-1',
    thumbnail: aboutImage6,
    alt: 'Image with work mates on my last day',
  },
  {
    id: 7,
    content: <FrameSeven />,
    className: 'md:col-span-1',
    thumbnail: aboutImage7,
    alt: 'Image with friends at a cooking class',
  },
  {
    id: 8,
    content: <FrameEight />,
    className: 'md:col-span-2',
    thumbnail: aboutImage8,
    alt: 'Image overlooking a snow covered lake',
  },
]

// Flip words
const wordsHeader = ['Who am I?', 'Who are you?']
const wordsSubHeader = ['tell', 'show']

export default function About() {
  // Contact modal
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  // Main text
  const aboutText = useRef(null)
  const textInView = useInView(aboutText, { once: true })

  useEffect(() => {
    if (textInView) {
      animate(
        '.animate-about-text',
        { opacity: 1, x: 0 },
        { duration: 1, delay: stagger(0.3), ease: 'circOut' }
      )
    } else {
      animate('.animate-about-text', { opacity: 0, x: -30 }, { duration: 0 })
    }
  }, [textInView])

  // LayoutGrid
  const imageGrid = useRef(null)
  const imageGridInView = useInView(imageGrid, { once: true })

  useEffect(() => {
    if (imageGridInView) {
      animate(
        '.animate-image-grid',
        { opacity: 1, y: 0 },
        { duration: 1, delay: stagger(0.2), ease: 'circOut' }
      )
    } else {
      animate('.animate-image-grid', { opacity: 0, y: -30 }, { duration: 0 })
    }
  }, [imageGridInView])

  // What I can do for you cards
  const cardGrid = useRef(null)
  const cardGridInView = useInView(cardGrid, { once: true })

  useEffect(() => {
    if (cardGridInView) {
      animate(
        '.animate-card-grid',
        { opacity: 1, x: 0 },
        { duration: 1, delay: stagger(0.4), ease: 'circOut' }
      )
    } else {
      animate('.animate-card-grid', { opacity: 0, x: -30 }, { duration: 0 })
    }
  }, [cardGridInView])

  // Contact card
  const contactCard = useRef(null)
  const contactCardInView = useInView(contactCard, { once: true })

  useEffect(() => {
    if (contactCardInView) {
      animate(
        '.contact-card',
        { opacity: 1, y: 0 },
        { duration: 1, delay: stagger(0.3), ease: 'circOut' }
      )
    } else {
      animate('.contact-card', { opacity: 0, y: -50 }, { duration: 0 })
    }
  }, [contactCardInView])

  return (
    <>
      <MainHeaderNav />
      <Image
        src={aboutImage}
        width={4098}
        height={2304}
        alt="Photo of Matt"
        className="about-image hidden sm:block"
      />
      <Image
        src={aboutImagePhone}
        width={1080}
        height={1920}
        alt="Photo of Matt"
        className="about-image sm:hidden"
      />
      <motion.section
        className=""
        initial={{ opacity: 0, y: 2 }}
        transition={{ delay: 0.3, duration: 1, ease: 'easeInOut' }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className={titan.className} id="about">
          <div className="pt-28 sm:pt-16 lg:pt-20 2xl:pt-20 6xl:pt-64 text-center ps-3 sm:ps-7 xl:ps-8 space-y-3 2xl:space-y-4 font-bold dark:text-zinc-300 text-stone-800 drop-shadow-[3px_3px_0px_black] z-index">
            <h1 className="text-4xl sm:text-7xl md:text-[5.3rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[10.5rem] 6xl:text-[16rem] dark:drop-shadow-[2px_2px_0px_#004aad] drop-shadow-[2px_2px_0px_#66045f]">
              <FlipWords words={wordsHeader} />
            </h1>
            <h2 className="sm:ps-4 xl:ps-8 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl 6xl:text-7xl dark:drop-shadow-[2px_2px_0px_#004aad] drop-shadow-[2px_2px_0px_#66045f]">
              Let me <FlipWords words={wordsSubHeader} /> you ..
            </h2>
          </div>
        </div>
        <div
          className="dark:text-zinc-300 text-stone-800 flex flex-col items-center justify-center md:space-y-0 md:space-x-10 pt-6 lg:pt-14 xl:pt-36 2xl:pt-44 pb-10"
          ref={aboutText}
        >
          <div className="ps-6 pe-6 sm:ps-0 sm:pe-0 max-w-md md:max-w-xl 2xl:max-w-3xl text-lg sm:text-xl 2xl:text-2xl text-left animate-about-text z-index">
            <div className={titan.className}>
              <p className="first-letter:text-4xl xl:text-2xl 2xl:text-3xl animate-about-text">
                I&apos;m passionate about helping individuals and small
                businesses take their first steps online.
              </p>
            </div>
            <p className="mt-4 animate-about-text">
              Building a website can be overwhelming, especially for those just
              starting out.
            </p>
            <p className="mt-4 animate-about-text">
              What truly excites me is starting with a blank canvas —
              transforming ideas into engaging, user-friendly websites.
            </p>
            <p className="mt-4 animate-about-text">
              Whether it&apos;s crafting intuitive user experiences, fine-tuning
              responsive layouts, or ensuring seamless accessibility.
            </p>
            <p className="mt-4 animate-about-text">
              By keeping your identity at the heart of my approach, my goal is
              to find the simplest solution to meet your needs.
            </p>
          </div>
        </div>
        <div ref={cardGrid}>
          <div className={titan.className}>
            <div className="dark:text-zinc-300 text-stone-800 dark:drop-shadow-[6px_6px_0px_black] drop-shadow-[5px_5px_4px_#66045f] xl:pt-10 ps-6 xl:ps-10 pe-10 pb-10">
              <h1 className="text-4xl sm:text-7xl md:text-[5.3rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[10.5rem] 6xl:text-[16rem] animate-card-grid">
                What I can do for you:
              </h1>
            </div>
          </div>
          <div className="max-w-[1200px] xl:max-w-screen-2xl 6xl:max-w-[4500px] gap-5 6xl:gap-10 grid grid-cols-12 grid-rows-2 place-items-center lg:place-items-start 2xl:place-items-center xl:pt-10 px-10 6xl:px-[35rem] pb-10">
            <Card className="place-self-center lg:place-self-start 2xl:place-self-center ps-2 max-w-[420px] 2xl:max-w-2xl 6xl:max-w-xl col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-6 6xl:col-span-6 drop-shadow-[3px_3px_4px_#004aad] hover:scale-[0.95] hover:bg-[#004aad] hover:transition-all hover:duration-1000 hover:ease-in-out animate-card-grid">
              <CardHeader className="flex gap-3">
                <NextUIImage
                  alt="logo icon one"
                  height={40}
                  radius="sm"
                  src={aboutCardOneImage.src}
                  width={40}
                />
              </CardHeader>
              <CardBody>
                <div className={titan.className}>
                  <h2 className="text-3xl 6xl:text-5xl">
                    Build a tailored & responsive website
                  </h2>
                </div>
                <p className="text-lg 6xl:text-xl pt-4">
                  Built from the ground up using React/NextJS to create a unique
                  single or multi page website personalised for you.
                </p>
              </CardBody>
            </Card>
            <Card className="place-self-center lg:place-self-start 2xl:place-self-center ps-2 max-w-[420px] 2xl:max-w-2xl 6xl:max-w-xl  col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-6 6xl:col-span-6 drop-shadow-[3px_3px_4px_#66045f] hover:scale-[0.95] hover:bg-[#66045f] hover:transition-all hover:duration-1000 hover:ease-in-out animate-card-grid">
              <CardHeader className="flex gap-3">
                <NextUIImage
                  alt="logo icon two"
                  height={40}
                  radius="sm"
                  src={aboutCardFiveImage.src}
                  width={40}
                />
              </CardHeader>
              <CardBody>
                <div className={titan.className}>
                  <h2 className="text-3xl 6xl:text-5xl">
                    SEO & Performance optimization
                  </h2>
                </div>
                <p className="text-lg 6xl:text-xl pt-4">
                  I will optimize your website for search engines while
                  maintaining perfomance to ensure fast load times.
                </p>
              </CardBody>
            </Card>
            <Card className="place-self-center lg:place-self-start 2xl:place-self-center ps-2 max-w-[420px] 2xl:max-w-2xl 6xl:max-w-xl col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-6 6xl:col-span-4 drop-shadow-[3px_3px_4px_#004aad] hover:scale-[0.95] hover:bg-[#004aad] hover:transition-all hover:duration-1000 hover:ease-in-out animate-card-grid">
              <CardHeader className="flex gap-3">
                <NextUIImage
                  alt="logo icon three"
                  height={40}
                  radius="sm"
                  src={aboutCardTwoImage.src}
                  width={40}
                />
              </CardHeader>
              <CardBody>
                <div className={titan.className}>
                  <h2 className="text-3xl 6xl:text-5xl">Design in Canva</h2>
                </div>
                <p className="text-lg 6xl:text-xl pt-4 xl:pt-12">
                  From website images to business cards or a logo, I will work
                  with you to make sure you have a product you can be proud to
                  share.
                </p>
              </CardBody>
            </Card>
            <Card className="place-self-center lg:place-self-start 2xl:place-self-center ps-2 max-w-[420px] 2xl:max-w-2xl 6xl:max-w-xl col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-6 6xl:col-span-4 drop-shadow-[3px_3px_4px_#66045f] hover:scale-[0.95] hover:bg-[#66045f] hover:transition-all hover:duration-1000 hover:ease-in-out animate-card-grid">
              <CardHeader className="flex gap-3">
                <NextUIImage
                  alt="logo icon four"
                  height={40}
                  radius="sm"
                  src={aboutCardThreeImage.src}
                  width={40}
                />
              </CardHeader>
              <CardBody>
                <div className={titan.className}>
                  <h2 className="text-3xl 6xl:text-5xl">Communication</h2>
                </div>
                <p className="text-lg 6xl:text-xl pt-4 xl:pt-12">
                  I pride myself on communication and responding in a timely
                  manner so you won&apos;t have to wonder what is happening.
                </p>
              </CardBody>
            </Card>
            <Card className="place-self-center lg:place-self-start 2xl:place-self-center ps-2 max-w-[420px] 2xl:max-w-2xl 6xl:max-w-xl col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-6 6xl:col-span-4 drop-shadow-[3px_3px_4px_#004aad] hover:scale-[0.95] hover:bg-[#004aad] hover:transition-all hover:duration-1000 hover:ease-in-out animate-card-grid">
              <CardHeader className="flex gap-3">
                <NextUIImage
                  alt="logo icon five"
                  height={40}
                  radius="sm"
                  src={aboutCardFourImage.src}
                  width={40}
                />
              </CardHeader>
              <CardBody>
                <div className={titan.className}>
                  <h2 className="text-3xl 6xl:text-5xl">Updates</h2>
                </div>
                <p className="text-lg 6xl:text-xl pt-4 xl:pt-12">
                  I will send you a link where you can view changes as if the
                  website is live, so you can see how it&apos;s progressing.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="h-screen w-full" ref={imageGrid}>
          <h2 className="dark:text-zinc-300 text-stone-800 text-left text-4xl sm:text-7xl md:text-[5.3rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[10.5rem] 6xl:text-[16rem] dark:drop-shadow-[6px_6px_0px_black] drop-shadow-[5px_5px_4px_#66045f] xl:pt-10 ps-6 xl:ps-10 pe-10 pb-10 animate-image-grid">
            <div className={titan.className}>
              A couple of personal highlights ...
            </div>
          </h2>
          <LayoutGrid cards={cards} />
        </div>

        <div
          className="mt-48 sm:mt-72 md:mt-[22rem] lg:mt-[27rem] xl:mt-[37rem] 2xl:mt-[42rem] 6xl:mt-[60rem] xl:pt-10 px-10 pb-10 flex justify-center items-center"
          ref={contactCard}
        >
          <Card className="max-w-7xl 2xl:max-w-full max-h-screen drop-shadow-[5px_5px_4px_black] contact-card">
            <CardBody className="absolute z-10 md:top-[15%] lg:top-[20%] flex-col items-start w-full xl:ps-10">
              <div className={titan.className}>
                <h1 className="text-4xl sm:text-7xl md:text-[5.3rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[10.5rem] 6xl:text-[18rem] dark:text-zinc-300 text-stone-800 drop-shadow-[6px_6px_4px_black] uppercase contact-card">
                  Let&apos;s talk!
                </h1>
              </div>
              <div className="text-stone-800 max-w-xs sm:max-w-md ps-2 pt-4 md:pt-10 sm:text-xl 2xl:text-2xl hidden sm:inline-flex contact-card">
                <p>
                  Get in touch, and we can discuss your project, your issues and
                  how to solve them.
                </p>
              </div>
              <div className="pt-4 sm:pt-6 text-left md:text-center 6xl:text-3xl sm:space-y-6 contact-card">
                <button className="border-3 border-stone-800 rounded-xl bg-[#66045f] transition-all duration-1000 dark:hover:bg-stone-800 dark:hover:text-[#004aad] hover:bg-zinc-300 dark:text-zinc-300 text-stone-900 hover:text-[#004aad] drop-shadow-[4px_4px_0px_#1c1917] py-3 px-3 sm:px-4 sm:py-4 6xl:px-8 6xl:py-6 font-bold">
                  <Link href="mailto:matt.ranford16@gmail.com">
                    Direct email message
                  </Link>
                </button>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="border-3 border-stone-800 rounded-xl dark:bg-zinc-300 bg-stone-800 dark:text-[#004aad] text-[#004aad] transition-all duration-1000 hover:bg-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-[#004aad] hover:text-[#004aad] drop-shadow-[5px_5px_0px_#1c1917] py-3 px-3 sm:px-4 sm:py-4 6xl:px-8 6xl:py-6 md:mx-4 my-4 sm:my-0 font-bold hidden sm:block md:inline-flex"
                >
                  Contact form
                </button>
              </div>
            </CardBody>
            <NextUIImage
              removeWrapper
              alt="Photo of Matt"
              className="z-0 w-auto h-auto xl:w-full xl:h-full object-cover"
              src={contactCardImage.src}
              loading="lazy"
            />
          </Card>
        </div>
      </motion.section>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <Footer />
    </>
  )
}
