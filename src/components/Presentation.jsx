import React from 'react'

export default function Presentation() {
  return (
    <div className="presentation">
      <div>
        <div id='presentation-image'>
          <img className="oval" src="../../image_moi.jpg" alt="moi" />
          <h3 id='name'>Tom Cohéléach</h3>
          <div id='separateur-bleu'></div>
          <p id='metier'>Développeur alternant</p>
          <div id='reseaux-sociaux'>
            <a href="https://www.linkedin.com/in/tom-coheleach-3284a0264/" target="_blank"><img src="../../logo linkedin.png" alt="" width="30vh"/></a>
            <a href="https://github.com/tomcoh8/Portfolio" target="_blank"><img src="../../github.png" alt="" width="30vh"/></a>
            <a href="/contact"><img src="../../mail.png" alt="" width="30vh"/></a>
          </div>
        </div>
        <div className="text-presentation">
          <h2>Bienvenue sur mon Portfolio</h2>
          <p>
            Passionné par le développement web et toujours curieux d'apprendre, je vous invite à découvrir mes compétences, mes projets, et mon parcours professionnel.
          </p>
          <div class="presentation-buttons">
            <a id='button-cv' href="/CV.pdf" class="btn">CV</a>
            <a id='button-projets' href="/projets/etude" class="btn">Projets</a>
          </div>
        </div>
      </div>

    </div>
  )
}



