// BoutonHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Toujours pour les autres liens internes

export default function BoutonHeader({txt, link}) {
  // Vérifie si le `link` commence par "#" pour décider si c'est une ancre
  const isAnchor = link.startsWith("#");

  return (
    <div className="bouton-header">
      {/* Si c'est une ancre, utiliser <a> classique */}
      {isAnchor ? (
        <a href={link}>
          <h3>{txt}</h3>
        </a>
      ) : (
        <Link to={link}>
          <h3>{txt}</h3>
        </Link>
      )}
    </div>
  );
}
