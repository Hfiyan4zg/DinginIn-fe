import React from 'react'
import HeroSection from './tentang-hero/HeroSection'
import GambarSection from './gambar-section/GambarSection'
import TeknisiKami from './teknisi-kami/TeknisiKami'
import KomitmenKami from './komitmen/KomitmenKami'

function TentangSection() {
  return (
    <div>
      <HeroSection/>
      <GambarSection/>
      <TeknisiKami/>
      <KomitmenKami/>
    </div>
  )
}

export default TentangSection