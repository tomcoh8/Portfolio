import React from 'react'
import ImageVerticalCentreDinteret from './ImageVerticalCentreDinteret'
import ImageHorizontalCentreDinteret from './ImageHorizontalCentreDinteret'

export default function CentreDinterets({img, txt}) {
  return (
  <div className='centre-dinteret'>
      <h2>MES CENTRES D'INTERETS</h2>
      <div className='centre-dinteret-images'>
        <ImageVerticalCentreDinteret/>
        <ImageHorizontalCentreDinteret/>
        <ImageHorizontalCentreDinteret/>
        <ImageVerticalCentreDinteret/>
      </div>
  </div>
  )
}
