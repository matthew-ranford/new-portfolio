import Image from 'next/image'

export default function Hero() {
  return (
    <>
      <div className="relative">
        <Image
          src="/portfolio-hero.jpg"
          width={2732}
          height={1536}
          alt="Photo of me in Canada with sunset in the background"
          // className="opacity-90"
        />
        <section className="absolute inset-0 md:max-w-full mx-6 lg:mx-14 2xl:mx-36 pt-10 lg:pt-2 2xl:pt-56 mt-52 2xl:mt-60 ">
          <div className="flex lg:flex-row">
            <div className="space-y-6 2xl:space-y-12 text-left">
              <h1 className="text-4xl lg:text-5xl 2xl:text-7xl font-bold text-white md:text-stone-900">
                Hey there!
                <div className="text-5xl lg:text-7xl 2xl:text-9xl pt-6 2xl:pt-10 sm:text-left px-4 text-yellow-600">
                  {"I'm Matt."}
                </div>
              </h1>
              <h2 className="max-w-7xl md:w-auto px-8 text-4xl lg:text-5xl 2xl:text-7xl font-bold text-white md:text-stone-950">
                Welcome to my portfolio👋🏽
              </h2>
              <p className="max-w-2xl 2xl:max-w-5xl text-lg text-white md:text-stone-950 pb-4">
                {
                  "A full-stack developer hailing from the vibrant city of Wellington, New Zealand. My passion lies in crafting captivating front-end experiences, ensuring that every user interacts seamlessly with the interface. Let's build something amazing together!"
                }
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
