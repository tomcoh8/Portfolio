// Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Pour les autres liens de navigation
import BoutonHeader from './BoutonHeader';

export default function Header() {
  const [isSubmenuVisible, setSubmenuVisible] = useState(false);

  const handleMouseEnter = () => setSubmenuVisible(true);
  const handleMouseLeave = () => setSubmenuVisible(false);

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

        <div
          className="menu-item-with-submenu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <BoutonHeader txt="PROJETS" link="/projets" />
          {isSubmenuVisible && (
            <div className="submenu">
              <Link to="/projets/etude" className="submenu-item">
                Projet 1
              </Link>
              <Link to="/projets/projet2" className="submenu-item">
                Projet 2
              </Link>
            </div>
          )}
        </div>

        <BoutonHeader txt="CONTACT" link="/contact" />
      </nav>
    </header>
  );
}
