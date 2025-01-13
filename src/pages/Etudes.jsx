import React from 'react';
import EtudeDetail from '../components/EtudeDetail';

function Etudes() {
  return (
    <div id='page-etude'>
      <a id='button-remonter' href='#'>
        <img src="../../fleche.png" alt="" />
      </a>
      <img id="photo-etudes" src="../../image_moi.jpg" alt="" />
      <h2>A PROPOS DE MOI</h2>
      <EtudeDetail title="Mon profil" txt="J'ai intégré l'IUT de Lannion en 2022 en tant qu'étudiant en BUT informatique. L'informatique et les innovations futuristes sont des sujets qui me passionnent tout comme les mangas et les animés. J'aime aussi voyager pour parcourir le monde et découvrir d'autres cultures." img="../../illustration.webp"/>

      <h2>QUELQUES PRÉCISIONS SUR MES ÉTUDES</h2>
      <EtudeDetail title="BAC général au lycée de Questembert" txt="J'ai obtenu mon BAC avec les spécialités mathématiques et NSI, ce qui m'a permis d'acquérir de solides connaissances dans ces domaines. Au cours de ma scolarité, j'ai également eu l'opportunité d'apprendre plusieurs langages de programmation, notamment Python, HTML et CSS. J'ai par la suite développé des compétences variées qui me permettent de coder et concevoir des sites web. J'ai notamment réaliser plusieurs projets en python. Pour plus de détails sur mes réalisations, vous pouvez consulter ici mes différents projets. Ces apprentissages ont renforcé ma passion pour les sciences informatiques et m'ont ouvert de nombreuses portes dans le domaine de la technologie." date="2019 - 2022" img="../../lycee.png"/>
      <EtudeDetail title="BUT informatique à l'IUT de Lannion " txt="Au cours de mon BUT, j'ai appris plusieurs nouveaux langages tels que C, JAVA et Bash. J'ai également approfondi mes connaissances en langages déjà acquis, tels que Python, HTML et CSS. Grâce à ces compétences renforcées, j'ai été en mesure de réaliser de nombreux projets, aussi bien en travaillant de façon autonome qu'en collaborant avec d'autres étudiants. Pour plus de détails sur mes réalisations, vous pouvez consulter ici mes différents projets. Ces expériences m'ont permis d'acquérir une solide expertise technique et de développer ma créativité dans le domaine du développement logiciel." date="2022 - Aujourd'hui" img="../../iut_lannion.jpg"/>
      <EtudeDetail title="Mon projet après le BUT" txt="L'année prochaine, je souhaite intégrer l'ISEN à Brest, après avoir obtenu mon BUT. Mon parcours actuel en BUT m'a permis de développer de solides bases en développement logiciel, et je suis convaincu que l'ISEN sera un excellent complément pour approfondir mes connaissances et compétences techniques. L'école, reconnue pour sa pédagogie innovante et ses liens avec le monde professionnel, représente pour moi une étape clé dans la poursuite de mes ambitions." date="ISEN Brest" img="../../isen.jpg"/>
    </div>
  );
}

export default Etudes;
