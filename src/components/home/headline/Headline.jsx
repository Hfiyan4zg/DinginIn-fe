import React from 'react'

function Headline() {
  return (
    <div className="flex flex-row bg-[#EEF6FF] max-md:flex-col max-md:gap-0 relative h-[calc(100vh-6rem)]">
        <div className="flex flex-col">
          <section className="self-start mt-0 ml-44 text-7xl font-bold text-black uppercase max-md:mt-5 max-md:max-w-full max-md:text-4xl leading-tight">
            <span className="font-bold ">Tenang </span>
            <span className="font-bold  text-blue-500">Saja</span>.
            <br />
            <span className="font-bold ">Kami Punya </span>
            <span className="font-bold  text-yellow-400">Solusinya</span>
          </section>
          <section className=" ml-44 text-lg leading-8 text-ellipsis text-slate-600 w-[744px] max-md:max-w-full">
            Kami adalah spesialis dalam layanan perbaikan AC terbaik yang membawa kesejukan kembali ke ruangan Anda. 
          </section>
          <section className="flex gap-0 self-start mt-5   ml-44 shadow-lg max-md:ml-2.5">
            <div className="flex justify-center items-center px-5 py-3 text-base text-white uppercase bg-blue-600 max-md:px-5">Perbaiki Sekarang</div>
            <div className="flex justify-center items-center p-5 bg-blue-900 h-[72px] w-[68px]">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/75c1351124bd3a456ef3423efc83ed740215f6bed3f9d267f1f92f5eadb15e35?apiKey=6aa320d50fc04f13ae8b58abb91612c7&" alt="Repair icon" className="w-8 aspect-square" />
            </div>
          </section>
        <section className="flex gap-5 justify-between mt-10 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full absolute bottom-0">
          <div className="flex gap-0 max-md:flex-wrap">
            <div className="shrink-0 self-start bg-blue-100 h-[150px] w-[181px]" />
            <div className="flex flex-col px-8 pt-5 pb-10 text-center bg-white max-md:px-5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/612b3fece34b985390cc4667564a06d996f6561c41e1f69be9c299720687f49e?apiKey=6aa320d50fc04f13ae8b58abb91612c7&" alt="Technician Icon" className="aspect-[1.2] w-[76px]" />
              <div className="mt-7 text-5xl font-bold text-slate-950 max-md:text-3xl">600+</div>
              <div className="mt-2.5 text-2xl font-light text-slate-500">Teknisi Bersertifikat</div>
            </div>
            <div className="flex justify-center items-center self-end px-5 mt-40 bg-slate-200 h-[74px] w-[74px] max-md:px-5 max-md:mt-10">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/079b9c6bc297ca784fd552b177e5c314553b2c43299992b4f71b4d8777d11cfc?apiKey=6aa320d50fc04f13ae8b58abb91612c7&" alt="Icon" className="w-8 aspect-square" />
            </div>
            <div className="flex justify-center items-center px-5 my-auto bg-yellow-400 h-[76px] w-[76px] max-md:px-5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f91ec5333cec968e60705116e214be8b9e8e2391e86215742687695ce1fb74a?apiKey=6aa320d50fc04f13ae8b58abb91612c7&" alt="Icon" className="w-8 aspect-square" />
            </div>
            <div className="shrink-0 self-start bg-blue-100 h-[150px] w-[150px]" />
            <div className="shrink-0 self-end mt-36 max-w-full bg-blue-600 h-[150px] w-[405px] max-md:mt-10" />
          </div>
            {/* <div className="shrink-0 self-start bg-blue-950 h-[150px] w-[150px] ml-20" /> */}
        </section>
        </div>
        <img src="/repairman-home.png" alt="" className='z-10 sticky right-10'/>
    </div>
  )
}

export default Headline