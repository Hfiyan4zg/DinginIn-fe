import React from 'react'

function TeknisiKami() {
  const technicians = [
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab51412348d243ad08d4c8ae13578c6e2b0028c2f9aa03b01b1e8bb8ac13aff9?apiKey=6aa320d50fc04f13ae8b58abb91612c7&",
      count: "600+",
      description: "Teknisi Terverifikasi",
    },
  ]
  return (
    <div>
      <section className="px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col ml-20 self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <span className="text-5xl font-bold text-black uppercase max-md:max-w-full max-md:text-4xl">
                  Teknisi Kami yang{" "}
                  <span className="text-blue-600">Terlatih</span> dan{" "}
                  <span className="text-blue-600">Berpengalaman</span>
                </span>
                <p className="mt-6 text-xl font-light leading-8 text-ellipsis text-slate-600 max-md:max-w-full">
                  Kesuksesan kami tidak terlepas dari tim teknisi dan profesional
                  kami yang sangat terampil yang tidak hanya berpengalaman tetapi
                  juga bersemangat dengan apa yang mereka lakukan. Berkomitmen
                  untuk selalu mengikuti perkembangan industri terbaru, teknisi
                  kami menjalani pelatihan rutin untuk memastikan mereka siap
                  menangani masalah terkait AC secara efisien.
                </p>
                <div className="flex gap-5 justify-center mt-12 max-w-full text-center w-[362px] max-md:mt-10">
                  {technicians.map((tech, index) => (
                    <div key={index} className="flex gap-10 ml-0">
                      <img
                        src={tech.imgSrc}
                        className="shrink-0 max-w-full aspect-[1.2] w-[119px]"
                        alt="Verified technician"
                      />
                      <div className="flex flex-col justify-center my-auto">
                        <p className="text-4xl font-bold text-slate-950">
                          {tech.count}
                        </p>
                        <div className="mt-2.5 text-xl font-light text-slate-500">
                          {tech.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>


            <div className="flex flex-col ml-5 w-1/2 max-md:ml-0 max-md:w-full ">
              <div className="mt-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex  max-md:flex-col max-md:gap-0 relative">
                  <div className="flex flex-col w-[120%] max-md:ml-0 max-md:w-full relative ">
                    <div className="flex flex-col mt-12 max-md:mt-10 relative">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fac64e350939187563338c366f8811b099020ebb2d52c22ad0f36c65168e3ce5?apiKey=6aa320d50fc04f13ae8b58abb91612c7&"
                          className="object-cover self-end inset-0 w-[295px] z-10"
                          alt="Technician training"
                        />
                      <div className="absolute z-10 shrink-0 mt-0  bg-blue-600 h-[98px] w-[98px] max-md:mb-10 left-4 -top-12" />
                      <div className="absolute mt-0 bg-blue-600 h-[98px] w-[219px] max-md:mb-10 left-0 -bottom-12" />
                    </div>
                  </div>

                  {/* gambar kedua */}
                  <div className="flex flex-col w-[120%] max-md:ml-0 max-md:w-full mt-32">
                    <div className="flex flex-col grow">
                      <div className="flex gap-5 items-start relative">
                        <div className="shrink-0 self-start bg-yellow-400 h-[98px] w-[98px] absolute right-0 -top-32" />
                        <div className="shrink-0 self-start bg-yellow-400 h-[80px] w-[191px] absolute -left-20 z-20 -top-20" />
                      </div>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e1e7c38aa30a8e7dfb6cbed4261e145eb786c44ccfab820c7cde826767d26a5?apiKey=6aa320d50fc04f13ae8b58abb91612c7&"
                        className=" mt-7 self-end w-[315px] "
                        alt="Technician with customer"
                      />
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

export default TeknisiKami