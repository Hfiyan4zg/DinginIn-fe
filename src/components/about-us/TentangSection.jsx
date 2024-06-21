import React from 'react'
import HeroSection from '@/components/about-us/tentang-hero/HeroSection'
import GambarSection from '@/components/about-us/gambar-section/GambarSection'
import TeknisiKami from '@/components/about-us/teknisi-kami/TeknisiKami'
import KomitmenKami from '@/components/about-us/komitmen/KomitmenKami'

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