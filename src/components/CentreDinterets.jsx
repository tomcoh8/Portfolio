import React from 'react'
import ImageVerticalCentreDinteret from './ImageVerticalCentreDinteret'

export default function CentreDinterets() {
  return (
  <div className='centre-dinteret'>
      <h2>MES CENTRES D'INTERETS</h2>
      <div className='centre-dinteret-images'>
        <a href="/CentreDinteret1"><ImageVerticalCentreDinteret img="../../poulet2.webp" txt="Programmation"/></a>
        <a href="/CentreDinteret2"><ImageVerticalCentreDinteret img="../../poulet2.webp" txt="Mangas"/></a>
        <a href="/CentreDinteret3"><ImageVerticalCentreDinteret img="../../poulet2.webp" txt="Voyages"/></a>
        <a href="/CentreDinteret4"><ImageVerticalCentreDinteret img="../../poulet2.webp" txt="Jeux vidéo"/></a>
      </div>
  </div>
  )
}
