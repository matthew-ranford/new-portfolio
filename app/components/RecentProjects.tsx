import { titan } from '@/fonts'
import { motion } from 'framer-motion'

import { TextGenerateEffectWhileInView } from '@/components/ui/text-generate-effect-while-in-view'
import projectOne from '../../public/images/project-image-test.png'

const header = 'Recent Projects'

export default function RecentProjects() {
  return (
    <>
      <main className="mt-36">
        <div className={titan.className}>
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
                  className="ps-2 sm:ps-8 xl:ps-6 pe-4 pt-4 sm:pt-6 xl:pt-2 text-center sm:text-left dark:text-zinc-300 text-stone-800 drop-shadow-[6px_6px_0px_black] font-bold z-index"
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
      </main>
    </>
  )
}

// the layout i may use //
{
  /* <main className="h-full border-8 border-black flex flex-col lg:flex-row justify-center items-center flex-wrap gap-4">
          <div className="border-2 border-red-500 mx-2 my-2 lg:my-0 ">
            <div className="my-auto mx-auto">
              <h1 className="pt-4 text-xl lg:text-3xl mx-10">Strictly Paper</h1>
            </div>
          </div>
          <div className="border-2 border-red-500 mx-2 my-2 lg:my-0 basis-9/12 ml-auto">
            <div className="my-auto mx-auto">
              <Image
                src={projectOne}
                width={2500}
                height={1500}
                alt="Photo of Matt"
                className=""
              />
            </div>
          </div>
          <div className="border-2 border-red-500 mx-2 my-2 lg:my-0 basis-5/12">
            <div className="my-auto mx-auto">
              <h1 className="pt-4 text-3xl lg:text-8xl">Image in here!</h1>
            </div>
          </div>
          <div className="border-2 border-red-500 mx-2 my-2 lg:my-0 basis-5/12">
            <div className="my-auto mx-auto">
              <h1 className="pt-4 text-xl lg:text-3xl">Info in here!</h1>
            </div>
          </div>
        </main> */
}
