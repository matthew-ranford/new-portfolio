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
        />
        <section className="absolute inset-0 md:max-w-2xl 2xl:max-w-4xl mx-20 2xl:mx-52 pt-20 lg:pt-8 2xl:pt-56 mt-52 2xl:mt-60">
          <div className="flex lg:flex-row">
            <div className="space-y-6 2xl:space-y-12 text-left ">
              <h1 className="text-4xl lg:text-5xl 2xl:text-7xl font-bold text-black">
                Hey there! Welcome to my portfolio page!👋🏽 <br />
                <div className="text-5xl lg:text-7xl 2xl:text-9xl pt-6 2xl:pt-10 text-center sm:text-left text-yellow-500">
                  {"I'm Matt."}
                </div>
              </h1>
              <p className="w-96 md:w-auto text-lg text-black pb-4">
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
