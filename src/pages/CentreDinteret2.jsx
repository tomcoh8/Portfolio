import React from 'react';
import Grid from '../components/Grid';

function CentreDinteret2() {
  const items = [
    { id: 1, src: '../../centre_dinteret2/one piece.jpg', title: 'One piece' },
    { id: 2, src: '../../centre_dinteret2/haikyuu.jpg', title: 'Haikyuu' },
    { id: 3, src: '../../centre_dinteret2/Black-clover.webp', title: 'Black clover' },
    { id: 4, src: '../../centre_dinteret2/berserk.jpg', title: 'Berserk' },
    { id: 5, src: '../../centre_dinteret2/kingdom.jpg', title: 'Kingdom' },
    { id: 6, src: '../../centre_dinteret3/snk.webp', title: 'Snk' },
  ];
  return (
    <div className='page-centre-dinteret'>
      <h1>Mangas / Animés</h1>
      <div className='centre-dinteret-text'>
        <p>​J'adore les mangas et les animes pour plusieurs raisons. Tout d'abord, ces formes d'art japonaises sont incroyablement créatives et innovantes. Les mangas me captivent avec leurs histoires complexes, leurs personnages bien développés et leurs univers imaginatifs. Les animes, quant à eux, donnent vie à ces histoires grâce à leur animation époustouflante, leurs bandes sonores envoûtantes et leur capacité à transmettre des émotions intenses.

          De plus, les mangas et les animes abordent souvent des thèmes profonds et universels tels que l'amitié, l'amour, la lutte contre l'adversité et la quête de soi. Ils peuvent nous faire réfléchir, remettre en question nos convictions et nous pousser à nous interroger sur des sujets importants. Enfin, les mangas et les animes ont une communauté passionnée et dynamique. C'est un plaisir de pouvoir partager mes découvertes, discuter et échanger avec d'autres fans du monde entier. Cette passion commune crée un sentiment d'appartenance et de camaraderie qui est tout simplement merveilleux. 

          En résumé, j'aime les mangas et les animes pour leur créativité, leurs histoires captivantes, leur capacité à transmettre des émotions, leur diversité et la communauté passionnée qui les entoure. Ils occupent une place spéciale dans mon cœur et m'apportent une joie inégalée.
        </p>
      </div>
      <Grid items={items} />

    </div>
  );
}

export default CentreDinteret2;
