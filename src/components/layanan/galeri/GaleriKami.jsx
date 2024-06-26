import React from 'react'

function GaleriKami() {
  return (
    <div className="flex flex-col bg-[#EEF6FF] max-md:flex-col max-md:gap-0 relative p-20">
            <section className="flex flex-col grow shrink-0 self-start basis-0 w-fit max-md:max-w-full mt-20">
              <div className="flex flex-row text-6xl font-bold text-slate-950 uppercase max-md:max-w-full max-md:text-4xl mb-7 leading-normal relative">
                <div className='z-10'>
                  <p>Jelajahi Galeri</p> 
                  <p className="text-blue-600">reparasi ac kami</p>
                </div>
                <div className="shrink-0 self-end  bg-yellow-400 h-[170px] w-[170px] max-md:mt-10 absolute -top-20 -left-10" />
              </div>
              <div className='flex flex-row relative'>
                <div className="mt-6 text-xl font-light leading-8 text-ellipsis text-slate-700 max-md:max-w-full mb-10 mr-44">
                  Kesuksesan kami tidak terlepas dari tim teknisi dan profesional kami yang sangat terampil yang tidak hanya berpengalaman tetapi juga bersemangat dengan apa yang mereka lakukan. Berkomitmen untuk selalu mengikuti perkembangan industri terbaru, teknisi kami menjalani pelatihan rutin untuk memastikan mereka siap menangani masalah terkait AC secara efisien.
                </div>
                <div className="flex gap-0 absolute items-start self-end max-md:mt-10 -right-[50px] bottom-10">
                  <div className="shrink-0 self-start bg-blue-600 h-[49px] w-[49px]" />
                  <div className="shrink-0 self-end mt-12 bg-yellow-400 h-[98px] w-[98px] max-md:mt-10" />
                </div>
              </div>
            </section>


      {/* <section> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-12  object-center mx-auto mt-16">
          <div className="grid gap-10">
            <div className="relative overflow-hidden rounded-lg">
              <img className="h-full w-full object-cover object-center" src="/galeri/galeri-1.png" alt="Gambar 1" />
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img className="h-full w-full object-cover object-center" src="/galeri/galeri-2.png" alt="Gambar 2" />
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img className="h-full w-full object-cover object-center" src="/galeri/galeri-3.png" alt="Gambar 3" />
            </div>
          </div>
          <div className="grid gap-10">
            <div className="relative overflow-hidden rounded-lg">
              <img className="h-full w-full object-cover object-center" src="/galeri/galeri-4.png" alt="Gambar 4" />
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img className="h-full w-full object-cover object-center" src="/galeri/galeri-5.png" alt="Gambar 5" />
            </div>
            <div className='relative overflow-hidden rounded-lg bg-[#EEF6FF] h-[1200px] '></div>
          </div>
        </div>
      {/* </section> */}
    </div>
  )
}

export default GaleriKami