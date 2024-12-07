'use client'

import Link from 'next/link'
import Image from 'next/image'
import { titan } from '@/fonts'
import { motion, animate, stagger, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import {
  Card,
  CardHeader,
  // CardBody,
  CardFooter,
  Image as NextUIImage,
  Button,
} from '@nextui-org/react'

// Components
import { TextGenerateEffectWhileInView } from '@/components/ui/text-generate-effect-while-in-view'

// Images
import divider from '../../public/images/divider-test-2.png'
import phoneDivider from '../../public/images/hero-image-divider-1-test.png'

// Text Generate Effect
const header = 'Recent Projects'

// TODO: Fix hover scale for medium screens etc
// Put on animation for projects

export default function RecentProjects() {
  // Project Animation
  const projectImages = useRef(null)
  const imagesInView = useInView(projectImages, { once: true })

  useEffect(() => {
    if (imagesInView) {
      animate(
        '.animate-project-card',
        { opacity: 1, x: 0 },
        {
          duration: 0.5,
          delay: stagger(0.35, { startDelay: 0.1 }),
          ease: 'circOut',
        }
      )
    } else {
      animate('.animate-project-card', { opacity: 0, x: -10 }, { duration: 0 })
    }
  }, [imagesInView])

  return (
    <>
      <main className="relative pb-10">
        <Image
          src={divider}
          width={4098}
          height={2304}
          alt="divider and background"
          className="absolute top-0 left-0 w-full h-auto object-cover z-0"
        />

        {/* <Image
          src={phoneDivider}
          width={1080}
          height={1920}
          alt="second mobile divider and background"
          className="absolute top-[35rem] sm:top-[45rem] md:top-[50rem] left-0 w-full h-auto object-cover z-0 lg:hidden"
        /> */}
        <div className={`${titan.className} relative z-10`}>
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{
                x: [0, '-100%'],
                transition: {
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              {[...Array(5)].map((_, index) => (
                <div className="drop-shadow-[3px_3px_0px_black]" key={index}>
                  <h1
                    className="ps-2 sm:ps-8 xl:ps-6 pe-4 pt-4 sm:pt-6 xl:pt-2 pb-4 sm:mb-4 2xl:mb-6 text-center sm:text-left dark:text-zinc-300 text-stone-800 dark:drop-shadow-[6px_6px_0px_#004aad] drop-shadow-[6px_6px_0px_#66045f] font-bold z-index mt-10 xl:mt-24 6xl:mt-56"
                    id="recent-projects"
                  >
                    <TextGenerateEffectWhileInView
                      words={header}
                      delay={500}
                      size="xlarge"
                    />
                  </h1>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <motion.div ref={projectImages}>
          <div className="max-w-[1200px] xl:max-w-screen-2xl 6xl:max-w-[2500px] gap-4 grid grid-cols-12 grid-rows-2 px-6 mx-auto mt-10 xl:mt-14 pb-6">
            <Card className="col-span-12 lg:col-span-7 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[400px] 2xl:h-[500px] 6xl:h-[800px] dark:bg-transparent/80 bg-transparent/70 animate-project-card">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny dark:text-white/60 text-white/80 uppercase dark:font-bold">
                  Web Design & Development
                </p>
                <h1 className="text-zinc-300 font-bold text-large">
                  Strictly Paper
                </h1>
              </CardHeader>
              <NextUIImage
                removeWrapper
                alt="Latest website project"
                className="z-0 w-auto h-auto xl:w-full xl:h-full object-cover mt-14 xl:mt-0"
                src="/images/project-image-test.png"
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col">
                    <p className="text-tiny dark:text-white/60 text-white/100">
                      Wallpapering company
                    </p>
                    <p className="text-tiny dark:text-white/60 text-white/100">
                      Created from scratch with NextJS.
                    </p>
                  </div>
                </div>
                <a
                  href="https://strictly-paper.nz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    radius="full"
                    size="sm"
                    className="dark:bg-zinc-300 dark:text-stone-800 bg-[#66045f] text-zinc-300"
                  >
                    View live
                  </Button>
                </a>
              </CardFooter>
            </Card>
            <Card className="col-span-12 lg:col-span-5 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[400px] 2xl:h-[500px] 6xl:h-[800px] dark:bg-transparent/80 bg-transparent/70 hover:overflow-visible animate-project-card">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny dark:text-white/60 text-white/80 uppercase dark:font-bold">
                  Logo & Business Card Design
                </p>
                <h1 className="text-zinc-300 font-bold text-large">
                  Attention to Detail Decorators
                </h1>
              </CardHeader>
              <NextUIImage
                removeWrapper
                alt="Business card project"
                className="z-0 w-auto h-auto xl:w-full xl:h-full object-cover mt-14 hover:scale-[1.5] hover:z-20 hover:backdrop-blur-sm hover:-translate-x-2/3 hover:transition hover:ease-in hover:duration-1000"
                src="/images/atd-business-card.png"
              />
              <CardFooter className="absolute bg-black/40 bottom-0 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col">
                    <p className="text-tiny dark:text-white/60 text-white/100">
                      Hover for a better look
                    </p>
                    <p className="text-tiny dark:text-white/60 text-white/100">
                      Created in Canva.
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="col-span-12 lg:col-span-6 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[400px] 2xl:h-[500px] 6xl:h-[800px] dark:bg-transparent/80 bg-transparent/70 animate-project-card">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny dark:text-white/60 text-white/80 uppercase dark:font-bold">
                  Web Design & Development
                </p>
                <h1 className="text-zinc-300 font-bold text-large">
                  McLauchlan Electrical
                </h1>
              </CardHeader>
              <NextUIImage
                removeWrapper
                alt="Second website project prototype"
                className="z-0 w-auto h-auto xl:w-full xl:h-full object-cover mt-14 xl:mt-0"
                src="/images/project-image-test-1.png"
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col">
                    <p className="text-tiny dark:text-white/60 text-white/100">
                      Prototype for an electrical company
                    </p>
                    <p className="text-tiny dark:text-white/60 text-white/100">
                      Created from scratch with NextJS.
                    </p>
                  </div>
                </div>
                <a
                  href="https://matthew-ranford.github.io/mclauchlan-electrical/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    radius="full"
                    size="sm"
                    className="dark:bg-zinc-300 dark:text-stone-800 bg-[#66045f] text-zinc-300"
                  >
                    View live
                  </Button>
                </a>
              </CardFooter>
            </Card>
            <Card className="col-span-12 lg:col-span-6 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[400px] 2xl:h-[500px] 6xl:h-[800px] dark:bg-transparent/80 bg-transparent/70 animate-project-card">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny dark:text-white/60 text-white/80 uppercase dark:font-bold">
                  Web Design & Development
                </p>
                <h1 className="text-zinc-300 font-bold text-large">
                  Attention to Detail Decorators
                </h1>
              </CardHeader>
              <NextUIImage
                removeWrapper
                alt="First website project"
                className="z-0 w-auto h-auto xl:w-full xl:h-full object-cover mt-14 xl:mt-0"
                src="/images/project-image-test-2.png"
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col">
                    <p className="text-tiny dark:text-white/60 text-white/100">
                      Painting & decorating company
                    </p>
                    <p className="text-tiny dark:text-white/60 text-white/100">
                      Created from scratch with React.
                    </p>
                  </div>
                </div>
                <a
                  href="https://atd-decorators.co.nz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    radius="full"
                    size="sm"
                    className="dark:bg-zinc-300 dark:text-stone-800 bg-[#66045f] text-zinc-300"
                  >
                    View live
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </motion.div>
        <div className="pt-6 text-center font-normal dark:font-bold 6xl:text-3xl">
          <button className="border-3 border-stone-800 rounded-xl bg-[#66045f] transition-all duration-1000 dark:hover:bg-stone-800 dark:hover:text-[#004aad] hover:bg-zinc-300 dark:text-zinc-300 text-stone-900 hover:text-[#004aad] drop-shadow-[4px_4px_0px_#1c1917] py-3 px-3 sm:px-4 sm:py-4 6xl:px-8 font-bold">
            <Link href="projects">View all projects</Link>
          </button>
        </div>
      </main>
    </>
  )
}

// TODO: Look at below and add in a hover state to the business cards

// import { useState } from 'react'
// import { titan } from '@/fonts'
// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import { X } from 'lucide-react'
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Image as NextUIImage,
//   Button,
// } from '@nextui-org/react'

// import { TextGenerateEffectWhileInView } from '@/components/ui/text-generate-effect-while-in-view'
// import projectOne from '../../public/images/project-image-test.png'
// import divider from '../../public/images/divider.png'

// const header = 'Recent Projects'

// export default function RecentProjects() {
//   const [expandedCard, setExpandedCard] = useState(null)

//   const handleMouseEnter = (cardIndex) => {
//     if (cardIndex === 1) {
//       setExpandedCard(cardIndex)
//     }
//   }

//   const handleMouseLeave = () => {
//     setExpandedCard(null)
//   }

//   const cardDetails = [
//     {
//       category: 'Web Design & Development',
//       title: 'Strictly Paper',
//       image: '/images/project-image-test.png',
//       textColor: 'text-zinc-300',
//       hoverable: false, // Add a flag to disable hover
//     },
//     {
//       category: 'Plant a tree',
//       title: 'Contribute to the planet',
//       image: '/images/atd-business-card.png',
//       textColor: 'text-black',
//       hoverable: true, // Enable hover for this card
//     },
//   ]

//   return (
//     <>
//       <main className="mt-10 relative">
//         <Image
//           src={divider}
//           width={4098}
//           height={2304}
//           alt="Photo of Matt"
//           className="absolute top-0 left-0 w-full z-0"
//         />
//         <div className={`${titan.className} relative z-10`}>
//           <div className="relative w-full overflow-hidden">
//             <motion.div
//               className="flex whitespace-nowrap"
//               animate={{
//                 x: [0, '-100%'],
//                 transition: {
//                   duration: 15,
//                   repeat: Infinity,
//                   ease: 'linear',
//                 },
//               }}
//             >
//               {[...Array(5)].map((_, index) => (
//                 <h1
//                   key={index}
//                   className="ps-2 sm:ps-8 xl:ps-6 pe-4 pt-4 sm:pt-6 xl:pt-2 sm:mb-4 2xl:mb-6 text-center sm:text-left dark:text-zinc-300 text-stone-800 drop-shadow-[6px_6px_0px_black] font-bold z-index mt-10 xl:mt-32"
//                 >
//                   <TextGenerateEffectWhileInView
//                     words={header}
//                     delay={500}
//                     size="xlarge"
//                   />
//                 </h1>
//               ))}
//             </motion.div>
//           </div>
//         </div>

//         <div className="max-w-[1200px] 6xl:max-w-[1500px] gap-4 grid grid-cols-12 grid-rows-2 px-8 mx-auto mt-10">
//           {cardDetails.map((card, index) => (
//             <div
//               key={index}
//               className={`
//             ${
//               index === 0
//                 ? 'col-span-12 sm:col-span-7'
//                 : 'col-span-12 sm:col-span-5'
//             }
//             relative
//           `}
//               // Only add mouse enter/leave for hoverable cards
//               {...(card.hoverable
//                 ? {
//                     onMouseEnter: () => handleMouseEnter(index),
//                     onMouseLeave: handleMouseLeave,
//                   }
//                 : {})}
//             >
//               {/* Background overlay for expanded state */}
//               {expandedCard === index && (
//                 <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-lg">
//                   <div
//                     className="absolute top-4 right-4 z-50 cursor-pointer"
//                     onClick={handleMouseLeave}
//                   >
//                     <X className="text-white w-10 h-10" />
//                   </div>
//                 </div>
//               )}

//               <Card
//                 className={`
//               h-[300px] xl:h-[400px] 6xl:h-[500px] bg-transparent/80 p-4
//               transition-all duration-300 ease-in-out
//               ${
//                 expandedCard === index
//                   ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-4xl h-[90vh]'
//                   : ''
//               }
//             `}
//               >
//                 <CardHeader className="absolute z-10 top-1 flex-col !items-start">
//                   <p className="text-tiny text-white/60 uppercase font-bold">
//                     {card.category}
//                   </p>
//                   <h4 className={`${card.textColor} font-medium text-large`}>
//                     {card.title}
//                   </h4>
//                 </CardHeader>
//                 <NextUIImage
//                   removeWrapper
//                   alt="Card background"
//                   className={`
//                 z-0 w-full h-full object-cover
//                 ${
//                   expandedCard === index
//                     ? 'scale-100'
//                     : card.hoverable
//                     ? 'hover:scale-150'
//                     : ''
//                 }
//                 transition-transform duration-300
//               `}
//                   src={card.image}
//                 />
//               </Card>
//             </div>
//           ))}
//         </div>
