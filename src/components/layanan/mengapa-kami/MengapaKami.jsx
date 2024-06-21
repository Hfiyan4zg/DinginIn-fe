import React from 'react'

function ServiceHighlight({ title, text }) {
  return (
    <div className="flex z-50 flex-col grow self-stretch p-8 w-full border-0 border-sky-300 border-solid backdrop-blur-[5px] bg-white bg-opacity-90 max-md:px-5 max-md:mt-6 ">
      <div className="flex flex-col w-fit justify-center items-start p-5 bg-blue-600 border-0 border-white border-solid rounded-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/14d67e94f9fc608acda4e8ab45c402c4d8001894297afec0fa3c29123617c3c5?apiKey=6aa320d50fc04f13ae8b58abb91612c7&" alt="" className="w-7 aspect-square" />
      </div>
      <div className="mt-6 text-2xl font-medium text-slate-950">{title}</div>
      <div className="mt-6 text-sm leading-6 text-ellipsis text-zinc-700">{text}</div>
    </div>
  );
}
function MengapaKami() {
  return (
    <section className=" bg-white flex flex-col gap-5 self-center  w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full pb-40">
      <div className='flex flex-row gap-10 items-end p-20 mb-10'>
          <div className="flex gap-0 items-start self-end mt-32 max-md:mt-10">
            <div className="shrink-0 self-start bg-blue-600 h-[49px] w-[49px]" />
            <div className="shrink-0 self-end mt-12 bg-yellow-400 h-[98px] w-[98px] max-md:mt-10" />
          </div>
          <div className="flex flex-col grow shrink-0 px-5 basis-0 w-fit max-md:max-w-full">
            <h2 className="text-6xl font-bold text-black uppercase max-md:max-w-full max-md:text-4xl leading-normal">
              Mengapa <span className='text-blue-600'>Harus Memilih Kami</span> untuk Kebutuhan Service AC Anda?
            </h2>
            <p className="mt-5 text-xl font-light leading-8 text-slate-700 max-md:max-w-full">
              Memilih kami berarti mempercayakan kebutuhan servis AC Anda kepada tim yang berdedikasi dan berkomitmen pada kualitas, kepercayaan, dan kepuasan pelanggan. 
            </p>
          </div>
      </div>
          <div className="flex flex-row  self-center mt-5 max-w-full w-[1384px] max-md:pl-5 max-md:mt-10 items-center relative">
            <div className="flex flex-row max-md:flex-col max-md:gap-0 ">
              <div className="flex flex-col w-full max-md:ml-0 max-md:w-full ">
                <div className=" bg-[url('/bgimage-technicianyellow.png')] my-auto max-md:mt-10 max-md:max-w-full p-20 ">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 mr-44 ">
                    <ServiceHighlight title="Teknisi Profesional" text="Teknisi kami yang berpengalaman terlatih untuk menangani berbagai model AC dan mengatasi masalah apa pun secara efektif." />
                    <ServiceHighlight title="Kepuasan Pelanggan" text="Teknisi kami yang berpengalaman terlatih untuk menangani berbagai model AC dan mengatasi masalah apa pun secara efektif." />
                    <ServiceHighlight title="Harga yang Transparan" text="Teknisi kami yang berpengalaman terlatih untuk menangani berbagai model AC dan mengatasi masalah apa pun secara efektif." />
                  </div>
                </div>
              </div>
            </div>
              <div className="flex absolute right-0 w-[30%] max-md:ml-0 max-md:w-full z-10 overflow-hidden ">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb43b13482590a7e16ba08610e604dba51a519698b01b3abb617a5978d94c9a8?apiKey=6aa320d50fc04f13ae8b58abb91612c7&" alt="Side Image" className=" my-auto h-auto w-auto aspect-[0.62] max-md:mt-0 max-md:max-w-full" />
              </div>
          </div>
    </section>
  )
}

export default MengapaKami