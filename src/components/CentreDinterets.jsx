import React from 'react'
import ImageVerticalCentreDinteret from './ImageVerticalCentreDinteret'

export default function CentreDinterets() {
  return (
  <div className='centre-dinteret'>
      <h2>MES CENTRES D'INTERETS</h2>
      <div className='centre-dinteret-images'>
        <a href="/CentreDinteret1"><ImageVerticalCentreDinteret/></a>
        <a href="/CentreDinteret2"><ImageVerticalCentreDinteret/></a>
        <a href="/CentreDinteret3"><ImageVerticalCentreDinteret/></a>
        <a href="/CentreDinteret4"><ImageVerticalCentreDinteret/></a>
      </div>
  </div>
  )
}
