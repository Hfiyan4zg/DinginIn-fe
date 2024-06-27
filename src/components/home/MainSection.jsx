import React from 'react'
import Headline from '@/components/home/headline/Headline'
import LebihLanjut from '@/components/home/lebih-lanjut/LebihLanjut'
import Penawaran from '@/components/home/penawaran/Penawaran'
import MengapaKami from '@/components/home/mengapa-kami/MengapaKami'

function MainSection() {
  return (
    <div>
      <Headline />
      <LebihLanjut />
      <Penawaran />
      <MengapaKami />
    </div>
  )
}

export default MainSection