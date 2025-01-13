import React from 'react';

function Competences() {
  return (
    <div id='page-competences'>
      <h1>Mes Compétences</h1>
      <div className="competences">
        <div className="competence-groupe-1">
          <h3>Compétence 1</h3>
          <p>Développer des applications informatiques simples</p>
          <p>
            Développé avec le <a href="/projets/etude#projet-detail-1">projet 1.01</a> et <a href="/projets/etude#projet-detail-7">projet 2.01</a>
          </p>
        </div>
        <div className="competence-groupe-2">
          <h3>Compétence 2</h3>
          <p>Appréhender et construire des algorithmes</p>
          <p>
            Développé avec le <a href="/projets/etude#projet-detail-2">projet 1.02</a> et <a href="/projets/etude#projet-detail-8">projet 2.02</a>
          </p>
        </div>
        <div className="competence-groupe-2">
          <h3>Compétence 3</h3>
          <p>Installer et configurer un poste de travail</p>
          <p>
            Développé avec le <a href="/projets/etude#projet-detail-3">projet 1.03</a> et <a href="/projets/etude#projet-detail-9">projet 2.03</a>
          </p>
        </div>
        <div className="competence-groupe-1">
          <h3>Compétence 4</h3>
          <p>Concevoir et mettre en place une base de données à partir d’un cahier des charges client</p>
          <p>
            Développé avec le <a href="/projets/etude#projet-detail-4">projet 1.04</a> et <a href="/projets/etude#projet-detail-10">projet 2.04</a>
          </p>
        </div>
        <div className="competence-groupe-1">
          <h3>Compétence 5</h3>
          <p>Identifier les besoins métiers des clients et des utilisateurs</p>
          <p>
            Développé avec le <a href="/projets/etude#projet-detail-5">projet 1.05</a> et <a href="/projets/etude#projet-detail-11">projet 2.05</a>
          </p>
        </div>
        <div className="competence-groupe-2">
          <h3>Compétence 6</h3>
          <p>Identifier ses aptitudes pour travailler dans une équipe</p>
          <p>
            Développé principalement avec le projet <a href="/projets/etude#projet-detail-6">projet 1.06</a>, le <a href="/projets/etude#projet-detail-12">projet 2.06</a>, ainsi que tous les projets réalisés en groupe et la vie de tous les jours.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Competences;
