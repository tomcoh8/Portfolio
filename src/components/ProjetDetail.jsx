import React from 'react';
import Carrousel from './Carrousel';

export default function ProjetDetail({id, title, txt, media, dlButton, dlDossier, langages, lienCompetence}) {
  // Vérifie si le fichier est un MP4
  const isMp4 = (file) => file.endsWith('.mp4');

  return (
    <div className='all-projet-detail'>
      <div id={id} className="projet-detail">
        <div className="text-container">
          <h2>{title}</h2>
          <div className='projet-langages'>
            {langages.map((element, index) => (
              <div key={index} className="language-item">
                {element}
              </div>
            ))}
          </div>
          <p>{txt} <a className='link-competences' href="/competences">{lienCompetence}</a></p>
          {dlButton != "false" && (
            <button className="dl-button">
              <a href={dlDossier} download>
                Télécharger
              </a>
            </button>
          )}
        </div>
        <div className="media-container">
          {isMp4(media) ? (
            <video className='projet-video' controls width="600">
              <source src={media} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          ) : (
            <img src={media} alt="Aucun visuel" />
          )}        
        </div>

      </div>
    </div>
  );
}
