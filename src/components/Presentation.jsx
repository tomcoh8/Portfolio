import React from 'react'

export default function Presentation() {
  return (
    <div className="presentation">
      <div>
        <div id='presentation-image'>
          <img className="oval" src="../../image_moi.jpg" alt="moi" />
          <h3 id='name'>Tom Cohéléach</h3>
          <p>développeur alternant</p>
          <div id='reseaux-sociaux'>
            <img src="../../logo linkedin.png" alt="" width="30vh"/>
            <img src="../../logo-cv.png" alt="" width="30vh"/>
            <img src="../../mail.png" alt="" width="30vh"/>
          </div>
        </div>
        <div className="text-presentation">
          <h3 id='titre-mon-profil'>Mon Profil</h3>
          <p>
            J'ai intégré l'IUT de Lannion en 2022 en tant qu'étudiant en BUT informatique.<br /><br />
            L'informatique et les innovations futuristes sont des sujets qui me passionnent tout comme les mangas et les animés.<br /><br />
            J'aime aussi voyager pour parcourir le monde et découvrir d'autres cultures.<br /><br />
            Je suis actuellement en alternance dans le domaine du développement d'application chez Xankom.
          </p>
        </div>
      </div>

    </div>
  )
}



