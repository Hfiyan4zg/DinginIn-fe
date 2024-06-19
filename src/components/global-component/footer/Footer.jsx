import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col bg-[#020617] p-20 w-full gap-10'>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-col'>
          <div className="flex flex-row gap-3 items-center">
            <img 
            src="/logo-dingin.png"
            alt="logo"
            className="w-7 h-7 "
            />
            <h1 className="font-bold text-[18px] text-[#1E61F2] ">
              DINGIN<span className="text-[#0ACEFF]" >IN</span>
            </h1>
          </div>
          <p className="mt-5 text-lg font-light leading-8 text-white max-md:max-w-full">
            Berlangganan untuk mendapatkan berita <br/>terbaru dari kami 
          </p>
        </div>
        <div className='flex flex-row h-fit '>
          <div className='border border-slate-500 p-4 pr-72'>
            <p className='text-lg font-light leading-normal text-slate-500'>youremail@here</p>
          </div>
          <div className='bg-blue-600 p-4'>
            <p className='text-sm font-light leading-loose text-white tracking-wide'>BERLANGGANAN</p>
          </div>
        </div>
      </div>
        <div className='flex flex-row h-auto text-lg font-medium text-white justify-center gap-10'>
          <h1>HOME</h1>
          <li>TENTANG KAMI</li>
          <li>LAYANAN</li>
          <li>HUBUNGI KAMI</li>
        </div>
    </div>
  )
}

export default Footer