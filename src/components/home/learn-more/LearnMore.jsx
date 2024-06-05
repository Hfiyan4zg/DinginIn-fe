import React from 'react'

function LearnMore() {
  return (
    <div>
        <section className="pb-10 mt-72 w-full bg-blue-950 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b93d363a31b7b0a523da40ad244f6581b399c06cdefef5ce59f4aaa88821aaa?apiKey=6aa320d50fc04f13ae8b58abb91612c7&" alt="Service Image" className="grow mt-3.5 w-full aspect-[0.85] max-md:mt-10 max-md:max-w-full" />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow px-5 mt-20 max-md:mt-10 max-md:max-w-full">
                      <div className="text-6xl font-medium text-white uppercase max-md:max-w-full max-md:text-4xl">
                        <span className="text-cyan-400">Dinginin</span> is Your <span className="text-yellow-400">Solution</span> for AC Needs
                      </div>
                      <div className="mt-6 text-xl font-light leading-8 text-ellipsis text-slate-300 max-md:max-w-full">
                        Is your air conditioner not performing at its best? Don't sweat it! At DinginIn, we specialize in top-notch air conditioning
                        repair services that bring the cool back into your space. With our team of skilled and experienced technicians, we're committed
                        to providing swift and effective solutions to keep you comfortable year-round.
                      </div>
                      <div className="justify-center self-start px-8 py-6 mt-6 text-base text-yellow-400 uppercase border border-yellow-400 border-solid bg-blue-950 max-md:px-5">
                        Learn More
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col max-md:mt-2">
                      <div className="shrink-0 bg-blue-900 h-[148px]" />
                      <div className="shrink-0 mt-60 bg-blue-900 h-[111px] max-md:mt-10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default LearnMore