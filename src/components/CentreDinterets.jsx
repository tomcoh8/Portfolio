import React from 'react'
import ImageVerticalCentreDinteret from './ImageVerticalCentreDinteret'
import ImageHorizontalCentreDinteret from './ImageHorizontalCentreDinteret'

export default function CentreDinterets({img, txt}) {
  return (
  <div className='centre-dinteret'>
      <h2>CENTRES D'INTERETS</h2>
      <div className='centre-dinteret-images'>
        <a href="/CentreDinteret1"><ImageVerticalCentreDinteret/></a>
        <a href="/CentreDinteret2"><ImageHorizontalCentreDinteret/></a>
        <a href="/CentreDinteret3"><ImageHorizontalCentreDinteret/></a>
        <a href="/CentreDinteret4"><ImageVerticalCentreDinteret/></a>
      </div>
  </div>
  )
}
