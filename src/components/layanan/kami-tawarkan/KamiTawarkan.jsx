import React from 'react'

function KamiTawarkan() {
  return (
    <div className="flex flex-row px-20 py-32 w-full bg-white max-md:px-5 max-md:max-w-full">
      <section className='flex flex-row gap-5'>
        <div className='flex flex-1 flex-row relative items-center'>
          <div className='bg-yellow-400 relative w-[70%] h-[600px] -top-9 ml-20'>
            <div className="justify-center items-center bg-blue-600 p-12 py-20 text-2xl font-bold text-white uppercase absolute top-10 -left-10 w-3/5 h-[60%]"><p>Layanan yang kami</p> <p className='text-yellow-400'>tawarkan</p></div>
            <img src="/tawarkan-lb.png" alt="" className='absolute w-3/5 -left-10 bottom-10 h-[40%] object-cover'/>
            <img src="/tawarkan-tr.png" alt="" className='w-3/5 h-1/2 absolute top-20 -right-12'/>
            <img src="/tawarkan-rb.png" alt="" className='w-2/3 h-1/2 absolute object-cover -bottom-20  left-56'/>
          </div>
        </div>

        <div className='flex flex-1 flex-col p-10 gap-10'>
          <div className='flex flex-row gap-5'>
            <div className="shrink-0 self-start bg-blue-600 h-[24px] w-[24px] mt-1" />
            <div className='flex flex-col gap-3 items-start'>
              <h1 className='text-3xl font-bold text-slate-700'>Pemeriksaan dan Penanganan Gangguan AC</h1>
              <p className='text-slate-700 text-lg font-normal'>Teknisi terampil kami mengkhususkan diri dalam menganalisa dan memperbaiki berbagai masalah AC. Baik itu masalah kecil seperti termostat yang tidak berfungsi atau kegagalan komponen utama, kami siap membantu Anda.</p>
            </div>
          </div>
          <div className='flex flex-row gap-5'>
            <div className="shrink-0 self-start bg-blue-600 h-[24px] w-[24px] mt-1" />
            <div className='flex flex-col gap-3 items-start'>
              <h1 className='text-3xl font-bold text-slate-700'>Perbaikan AC dan Perawatan</h1>
              <p className='text-slate-700 text-lg font-normal'>Teknisi kami yang berpengalaman melakukan pemeriksaan menyeluruh terhadap unit AC Anda, memeriksa komponen dan sistem.</p>
            </div>
          </div>
          <div className='flex flex-row gap-5'>
            <div className="shrink-0 self-start bg-blue-600 h-[24px] w-[24px] mt-1" />
            <div className='flex flex-col gap-3 items-start'>
              <h1 className='text-3xl font-bold text-slate-700'>Perbaikan dan Pembaharuan Komponen</h1>
              <p className='text-slate-700 text-lg font-normal'>Layanan Perbaikan dan Pembaharuan Komponen ahli kami disesuaikan untuk mengatasi masalah spesifik dalam unit AC Anda.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default KamiTawarkan