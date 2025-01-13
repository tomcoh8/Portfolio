import React from 'react';
import { Link } from 'react-router-dom';  // Toujours pour les autres liens internes

export default function BoutonHeader({txt, link}) {
  // Vérifie si le `link` commence par "#" pour décider si c'est une ancre
  const id = txt == "A PROPOS" ? "button-apropos" : undefined;
  console.log(txt);
  return (
    <div className="bouton-header">
        <Link to={link}>
          <h3 id={id}>{txt}</h3>
        </Link>
    </div>
  );
}
