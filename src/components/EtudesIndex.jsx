import React from 'react'
import Etude from './Etude'

export default function EtudesIndex() {
  return (
    <div className="etudes-index">
      <div>
        <h2>ETUDES</h2>
          <Etude img="../../education.png" txt="BAC général au lycée" date="2019 - 2022"/>
          <Etude img="../../education.png" txt="BUT inormatique à l'IUT de Lannion" date="2022 - Aujourd'hui"/>
          <Etude img="../../education.png" txt="ISEN à Brest" date="Mon projet apres le BUT"/>
      </div>
    </div>
  )
}
