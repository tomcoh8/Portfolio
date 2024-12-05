import React from 'react';

export default function ProjetDetail({ title, txt, img }) {
  return (
    <div>
      <div id="projet-detail" className="projet-detail">
        <div className="text-container">
          <h3>{title}</h3>
          <p>{txt}</p>
        </div>
        <div className="image-container">
          <img src={img} alt={title} />
          <button><a href="#annee2">2ème année</a></button>
        </div>
      </div>
    </div>
  );
}

