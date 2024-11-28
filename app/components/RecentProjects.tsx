import { titan } from '@/fonts'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Card,
  CardHeader,
  // CardBody,
  CardFooter,
  Image as NextUIImage,
  Button,
} from '@nextui-org/react'

import { TextGenerateEffectWhileInView } from '@/components/ui/text-generate-effect-while-in-view'
import divider from '../../public/images/divider.png'

const header = 'Recent Projects'

// TODO: - Divider between hero and recent projects, take green out of project images and just have a background, business cards in projects (possibly mclauchlan eletrical)

export default function RecentProjects() {
  return (
    <>
      <main className="mt-10 relative">
        <Image
          src={divider}
          width={4098}
          height={2304}
          alt="Photo of Matt"
          className="absolute top-0 left-0 w-full z-0"
        />
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
                <h1
                  key={index}
                  className="ps-2 sm:ps-8 xl:ps-6 pe-4 pt-4 sm:pt-6 xl:pt-2 sm:mb-4 2xl:mb-6 text-center sm:text-left dark:text-zinc-300 text-stone-800 drop-shadow-[6px_6px_0px_black] font-bold z-index mt-10 xl:mt-32"
                >
                  <TextGenerateEffectWhileInView
                    words={header}
                    delay={500}
                    size="xlarge"
                  />
                </h1>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1200px] 6xl:max-w-[1500px] gap-4 grid grid-cols-12 grid-rows-2 px-8 mx-auto mt-10">
          <Card className="col-span-12 sm:col-span-7 h-[300px] xl:h-[400px] 6xl:h-[500px] dark:bg-transparent/80 bg-transparent/20">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny dark:text-white/60 text-white/100 uppercase dark:font-bold">
                Web Design & Development
              </p>
              <h4 className="dark:text-zinc-300 text-stone-800 dark:font-bold text-large">
                Strictly Paper
              </h4>
            </CardHeader>
            <NextUIImage
              removeWrapper
              alt="Project one card background"
              className="z-0 w-auto h-auto xl:w-full xl:h-full object-cover mt-14 xl:mt-0"
              src="/images/project-image-test.png"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny dark:text-white/60 text-white/100">
                    Wallpapering Website
                  </p>
                  <p className="text-tiny dark:text-white/60 text-white/100">
                    Created from scratch with NextJS.
                  </p>
                </div>
              </div>
              <a href="https://strictly-paper.nz/" target="_blank">
                <Button
                  radius="full"
                  size="sm"
                  className="dark:bg-zinc-300 dark:text-stone-800 bg-stone-800 text-zinc-300"
                >
                  View live
                </Button>
              </a>
            </CardFooter>
          </Card>
          <Card className="col-span-12 sm:col-span-5 h-[300px] xl:h-[350px] 6xl:h-[450px] dark:bg-transparent/80 bg-transparent/20 hover:overflow-visible">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny dark:text-white/60 text-white/100 uppercase dark:font-bold">
                Logo & Business Card Design
              </p>
              <h4 className="dark:text-zinc-300 text-stone-800 dark:font-bold text-large">
                Attention to Detail Decorators
              </h4>
            </CardHeader>
            <NextUIImage
              removeWrapper
              alt="Card background"
              className="z-0 w-auto h-auto xl:w-full xl:h-full object-cover mt-14 xl:mt-6 hover:scale-[2] hover:z-10 hover:backdrop-blur-sm hover:-translate-x-2/3 hover:transition hover:ease-in hover:duration-1000"
              src="/images/atd-business-card.png"
            />
            <CardFooter className=" bg-black/40 bottom-0 border-t-1 border-default-600 dark:border-default-100">
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
          {/* <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Supercharged
              </p>
              <h4 className="text-white font-medium text-large">
                Creates beauty like a beast
              </h4>
            </CardHeader>
            <NextUIImage
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-2.jpeg"
            />
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-5"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">New</p>
              <h4 className="text-black font-medium text-2xl">Acme camera</h4>
            </CardHeader>
            <NextUIImage
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="https://nextui.org/images/card-example-6.jpeg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                <p className="text-black text-tiny">Get notified.</p>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Notify Me
              </Button>
            </CardFooter>
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-7"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Your day your way
              </p>
              <h4 className="text-white/90 font-medium text-xl">
                Your checklist for better sleep
              </h4>
            </CardHeader>
            <NextUIImage
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-5.jpeg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <NextUIImage
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="https://nextui.org/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Breathing App</p>
                  <p className="text-tiny text-white/60">
                    Get a good night's sleep.
                  </p>
                </div>
              </div>
              <Button radius="full" size="sm">
                Get App
              </Button>
            </CardFooter>
          </Card> */}
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
