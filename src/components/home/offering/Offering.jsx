import React from 'react'

function Offering() {
  return (
    <div >
      <section className="flex flex-col px-20 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-start self-center mt-5 w-full max-w-[1248px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit max-md:max-w-full">
              <div className="text-6xl font-bold text-slate-950 uppercase max-md:max-w-full max-md:text-4xl mb-7">
                Layanan yang kami <span className="text-blue-600">tawarkan</span>
              </div>
              <div className='flex flex-row relative'>
                <div className="mt-6 text-xl font-light leading-8 text-ellipsis text-slate-700 max-md:max-w-full mb-10 mr-28">
                  Jangan biarkan AC yang tidak berfungsi mengganggu kenyamanan Anda. Hubungi kami hari ini untuk menjadwalkan servis dan perawatan AC profesional, memastikan perangkat Anda beroperasi secara efisien dan andal sepanjang tahun.
                </div>
                <div className="flex gap-0 absolute items-start self-end max-md:mt-10 -right-[50px]">
                  <div className="shrink-0 self-start bg-blue-600 h-[49px] w-[49px]" />
                  <div className="shrink-0 self-end mt-12 bg-yellow-400 h-[98px] w-[98px] max-md:mt-10" />
                </div>
              </div>
            </div>
          <div className="grid grid-cols-4 mb-20">
            {/* 1 */}
            <div className="bg-black w-[300px] h-[300px] ">
              <img src="/offer-grid-1.png" alt="offer-pic" className="w-full h-full" />
            </div>
            {/* 2 */}
            <div className="bg-blue-700 w-[300px] h-[300px] flex flex-col p-7">
              <div className='flex items-start w-full'>
                <p className='text-xl font-bold'>01</p>
              </div>
              <div className='flex flex-col w-full mt-10 gap-2' >
                <p className='text-xl font-semibold'>Pemeriksaan dan Penanganan Gangguan AC</p>
                <p className='text-sm'>Teknisi kami yang telah berpengalaman melakukan penilaian menyeluruh terhadap unit AC Anda, memeriksa komponen dan sistem</p>
              </div>
            </div>
            {/* 3 */}
            <div className="bg-white w-[300px] h-[300px] "/>
            {/* 4 */}
            <div className="w-[300px] h-[300px] ">
              <img src="/offer-grid-4.png" className="w-full h-full" alt="offer-pic" />
            </div>
            {/* 5 */}
            <div className="flex w-[300px] h-[300px] relative">
              <img src="/offer-grid-5.png" alt="offer-pic" className="w-full h-full absolute" />
              <div className='bg-yellow-400 z-10 w-[180px] h-[180px] absolute -left-20 -bottom-24' />
            </div>
            {/* 6 */}
            <div className="bg-sky-100 w-[300px] h-[300px] flex flex-col p-7 text-slate-500">
              <div className='flex items-start w-full'>
                <p className='text-xl font-bold'>02</p>
              </div>
              <div className='flex flex-col w-full mt-10 gap-2' >
                <p className='text-xl font-semibold'>Perbaikan AC dan Perawatan</p>
                <p className='text-sm'>Kami menawarkan layanan Perbaikan dan Perawatan AC yang menyeluruh yang dirancang untuk menjaga sistem pendingin udara Anda tetap berjalan secara efisien  </p>
              </div>
            </div>
            {/* 7 */}
            <div className="flex flex-col w-[300px] h-[300px] relative">
              <img src="/offer-grid-7.png" alt="" className="w-full h-full absolute" />
              <div className='flex flex-col z-50 p-7 mt-28 gap-2 '>
                <img src="/airdrop.png" alt="" className='w-[64px] h-[64px]'/>
                <p className="text-xl font-semibold text-white" >Layanan <br />Lainnya</p>
              </div>
            </div>
            {/* 8 */}
            <div className="bg-sky-100 w-[300px] h-[300px] flex flex-col p-7 text-slate-500">
              <div className='flex items-start w-full'>
                <p className='text-xl font-bold'>03</p>
              </div>
              <div className='flex flex-col w-full mt-10 gap-2' >
                <p className='text-xl font-semibold'>Perbaikan dan Pembaharuan Komponen</p>
                <p className='text-sm'>Layanan Perbaikan dan Pembaharuan Komponen dari ahli kami disesuaikan untuk mengatasi masalah spesifik dalam unit AC Anda. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Offering