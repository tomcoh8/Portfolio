import React from 'react';
import Grid from '../components/Grid';

function CentreDinteret3() {
  const items = [
    { id: 1, src: '../../centre_dinteret3/caimen.jpg', title: 'Les marais de Kaw' },
    { id: 2, src: '../../centre_dinteret3/sagrada.jpg', title: 'Sagrada familia' },
    { id: 3, src: '../../centre_dinteret3/serpent.jpg', title: 'Serpent de Guyane' },
    { id: 4, src: '../../centre_dinteret3/toucant.jpg', title: 'Toucant du Costa Rica' },
    { id: 5, src: '../../centre_dinteret3/costa.jpg', title: 'Costa Rica' },
    { id: 6, src: '../../centre_dinteret3/japon.png', title: 'Fushimi inari-Taisha' },
  ];
  return (
    <div className='page-centre-dinteret'>
      <h1>Voyages et découverte de nouvelle culture</h1>
      <div className='centre-dinteret-text'>
        <p>​Les voyages et la découverte de nouvelles cultures ont toujours été une passion profonde pour moi. Ils représentent une opportunité inestimable d'élargir mes horizons, de sortir de ma zone de confort et de nourrir ma curiosité sans fin. Chaque nouvelle destination que j'explore est une porte ouverte vers un monde unique et fascinant, offrant un mélange captivant de traditions, de coutumes et de modes de vie différents. J'aime me plonger dans l'atmosphère vibrante des marchés locaux, goûter des saveurs exotiques, entendre les langues étrangères et rencontrer des personnes inspirantes de tous horizons. Chaque interaction avec une nouvelle culture m'enrichit en tant qu'individu, en me faisant prendre conscience de la diversité qui existe dans le monde et en me permettant de remettre en question mes propres croyances et perspectives. Les voyages et la découverte de nouvelles cultures me permettent de grandir en tant qu'être humain. C'est une expérience qui nourrit mon âme et m'inspire à continuer à explorer, à apprendre et à partager ces découvertes avec les autres.

          Aujourd'hui je suis déjà aller en Guyane, au Brésil, en Espagne, au Costa Rica et j'aimerais pour mes 25 ans voyager au Japon.
        </p>

        
      </div>
      <Grid items={items} />

    </div>
  );
}

export default CentreDinteret3;
