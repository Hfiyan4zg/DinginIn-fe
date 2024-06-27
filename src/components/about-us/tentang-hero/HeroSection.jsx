import React from 'react'

function HeroSection() {
  return (
    <div className="flex flex-col bg-blue-50 max-md:flex-col max-md:gap-0 relative h-[calc(100vh-6rem)]">
      <section className="flex gap-5 mt-28 items-start">
          <div className="flex flex-col self-end px-5 mt-44 text-base font-bold leading-6 text-slate-600 max-md:mt-10 relative">
            <div className="ml-20 text-ellipsis mb-20">
              Tentang Kami. <br /> Kisah Kami.
            </div>
            <div className="shrink-0 self-start bg-blue-600 h-[49px] w-[49px] absolute bottom-0 left-24" />
            <div className="shrink-0 self-end mt-12 bg-yellow-400 h-[98px] w-[98px] max-md:mt-10 absolute -bottom-24 left-36 " />
          </div>
          <div className="flex flex-col grow shrink-0 self-start px-5 basis-0 w-fit max-md:max-w-full">
            <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
              <span className="text-6xl font-bold text-black uppercase max-md:max-w-full max-md:text-4xl">
                Tentang <span className="text-blue-500">Kami</span>
              </span>
              <div className="flex gap-0 mr-20 self-start">
                <div className="shrink-0 self-start bg-blue-600 h-[49px] w-[49px]" />
                <div className="shrink-0 bg-yellow-400 h-[98px] w-[98px]" />
              </div>
            </div>
            <p className="mt-6 mr-20 text-xl font-light leading-8 text-ellipsis text-slate-600 max-md:max-w-full">
              Apakah AC Anda tidak bekerja dengan baik? Jangan khawatir! Di
              DinginIn, kami memiliki spesialisasi dalam layanan perbaikan AC
              terbaik yang mengembalikan kesejukan ke dalam ruangan Anda. Dengan
              tim teknisi kami yang terampil dan berpengalaman, kami berkomitmen
              untuk memberikan solusi yang cepat dan efektif untuk membuat Anda
              tetap nyaman sepanjang tahun.
            </p>
          </div>
        </section>
    </div>
  )
}

export default HeroSection