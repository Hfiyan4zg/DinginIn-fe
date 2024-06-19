import React from 'react'

function ContactUs() {
  return (
    <div className='bg-[#EEF6FF] p-20 w-full'>
      <div className='bg-blue-600 flex flex-row w-full relative'>
        <div className='flex flex-col gap-10 m-20 z-50'>
          <h2 className="text-6xl font-bold text-white uppercase max-md:max-w-full max-md:text-4xl leading-normal tracking-tight">
            Hubungi kami <br/> Jika Anda ingin tetap dingin
          </h2>
          <h2 className="text-6xl font-bold text-white uppercase max-md:max-w-full max-md:text-4xl">
            +62 123-456-789
          </h2>
          <div className="flex gap-0 self-start shadow-lg max-md:ml-2.5">
            <div className="justify-center px-8 py-6 text-base text-black uppercase bg-yellow-400 max-md:px-5">Hubungi Kami</div>
            <div className="flex justify-center items-center p-5 bg-yellow-500 h-[72px] w-[68px]">
              <img loading="lazy" src="/call.png" alt="Repair icon" className="w-8 aspect-square" />
            </div>
          </div>
          <div className='flex flex-row gap-10'>
            <div className='w-fit h-fit p-5 border border-white'>
              <img src="/facebook.png" alt="" className='w-10 h-10'/>
            </div>
            <div className='w-fit h-fit p-5 border border-white'>
              <img src="/youtube.png" alt="" className='w-10 h-10'/>
            </div>
            <div className='w-fit h-fit p-5 border border-white'>
              <img src="/instagram.png" alt="" className='w-10 h-10'/>
            </div>
            <div className='w-fit h-fit p-5 border border-white'>
              <img src="/whatsapp.png" alt="" className='w-10 h-10'/>
            </div>
          </div>
        </div>
        <img src="/technician-contact.png" alt="" className='w-auto h-auto absolute -right-20 -top-10'/>
      </div>
    </div>
  )
}

export default ContactUs