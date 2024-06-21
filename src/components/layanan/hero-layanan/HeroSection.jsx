import React from 'react'

function HeroSection() {
  return (
    <div className="flex flex-col bg-[#EEF6FF] max-md:flex-col max-md:gap-0 relative h-[calc(100vh-6rem)] px-20">
      <div className='flex flex-row justify-center mt-14'>
        <div className='flex flex-row relative items-center justify-center'>
          <div className=' bg-yellow-400 z-10 w-[100px] h-[100px] absolute -left-20 bottom-20' />
          <div className="text-7xl font-bold text-slate-950 uppercase max-md:max-w-full max-md:text-4xl mb-7 text-center items-center w-fit z-10 leading-normal">
            Layanan <span className="text-blue-600">perbaikan</span> <br/>AC kami
          </div>      
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='flex flex-row max-w-[800px] relative'>
          <p className="mt-5 text-2xl font-light leading-8 text-slate-700 max-md:max-w-full text-center">
            Di DinginIn, kami menawarkan berbagai layanan perbaikan AC profesional yang lengkap dan disesuaikan dengan kebutuhan spesifik Anda. Teknisi kami yang berpengalaman siap menangani berbagai masalah AC secara efisien dan efektif. Berikut adalah layanan yang kami sediakan: 
          </p>
        </div>
      </div>
          <div className="flex gap-0 items-start self-end mt-5 max-md:mt-10 absolute right-44 bottom-0">
            <div className="shrink-0 self-end mt-24 bg-blue-600 h-[49px] w-[49px]" />
            <div className="shrink-0 self-start  bg-yellow-400 h-[98px] w-[98px] max-md:mt-10" />
          </div>
    </div>
  )
}

export default HeroSection