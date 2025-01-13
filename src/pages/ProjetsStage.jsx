import React from 'react';
import ProjetDetail from '../components/ProjetDetail';


function ProjetsStage() {
  return (
      <div id="projets-stage" className='projets-section'>
        <a id='button-remonter' href='#'>
          <img src="../../fleche.png" alt="" />
        </a>
        <h1>Stage</h1>
        <p>J'ai effectué mon stage de deuxième année de BUT au sein de l'entreprise Xankom. Cette entreprise est un fournisseur d'accès à Internet et de téléphonie. Elle rencontre actuellement le besoin de moderniser et d'améliorer son CRM, qui date d'une dizaine d'années. Au cours de ce stage, j'ai été chargé de diverses missions que je détaille ci-dessous.</p>
        <ProjetDetail title="Misson 1" txt="Dans ce projet, j'avais pour but de réaliser un jeu de Puissance 4 en langage C, qui se joue entièrement dans le terminal en utilisant les touches du clavier. Malgré les difficultés rencontrés en cours de route, j'ai réussi à terminer ce projet avec succès, ce qui m'a permis de consolider mes connaissances en C et de développer mes compétences en développement de jeux." media="../../stage/configurateur de fiche tech.png" dlButton="false" langages={['HTML', 'CSS', 'JavaScript', 'Jquery', 'Ajax', 'Sql', 'CakePhp']}/>
        <ProjetDetail title="Misson 2" txt="Dans ce projet, j'avais pour but de réaliser un jeu de Puissance 4 en langage C, qui se joue entièrement dans le terminal en utilisant les touches du clavier. Malgré les difficultés rencontrés en cours de route, j'ai réussi à terminer ce projet avec succès, ce qui m'a permis de consolider mes connaissances en C et de développer mes compétences en développement de jeux." media="../../stage/recherche_avancee.png" dlButton="false" langages={['HTML', 'CSS', 'JavaScript', 'Jquery', 'Ajax', 'Sql', 'CakePhp']}/>
        <ProjetDetail title="Misson 3" txt="Dans ce projet, j'avais pour but de réaliser un jeu de Puissance 4 en langage C, qui se joue entièrement dans le terminal en utilisant les touches du clavier. Malgré les difficultés rencontrés en cours de route, j'ai réussi à terminer ce projet avec succès, ce qui m'a permis de consolider mes connaissances en C et de développer mes compétences en développement de jeux." media="../../stage/ticket.png" dlButton="false" langages={['HTML', 'CSS', 'JavaScript', 'Jquery', 'Ajax', 'Sql', 'CakePhp']}/>
      </div>
  );
}

export default ProjetsStage;
