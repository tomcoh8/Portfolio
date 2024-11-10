// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Pour les autres liens de navigation
import BoutonHeader from './BoutonHeader';

export default function Header() {
  return (
    <header>
      <div className="title-portfolio">
        <Link to="/">
          <h1>PORTFOLIO</h1>
        </Link>
      </div>

      <nav className="nav-header">
        <BoutonHeader txt="ETUDES" link="/etudes" />
        <BoutonHeader txt="COMPETENCES" link="/competences" />
        <BoutonHeader txt="PROJETS" link="/projets" />
        <BoutonHeader txt="CONTACT" link="#contact" />
      </nav>
    </header>
  );
}
