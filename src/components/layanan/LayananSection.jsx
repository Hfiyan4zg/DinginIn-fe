import React from 'react'
import HeroSection from './hero-layanan/HeroSection'
import KamiTawarkan from './kami-tawarkan/KamiTawarkan'
import MengapaKami from './mengapa-kami/MengapaKami'
import GaleriKami from './galeri/GaleriKami'

function LayananSection() {
  return (
    <div>
      <HeroSection/>
      <KamiTawarkan/>
      <MengapaKami/>
      <GaleriKami/>
    </div>
  )
}

export default LayananSection