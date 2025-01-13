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
        <BoutonHeader txt="A PROPOS" link="/apropos"/>
        <BoutonHeader txt="COMPETENCES" link="/competences" />

        <div
          className="menu-item-with-submenu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <BoutonHeader txt="PROJETS" />
          {isSubmenuVisible && (
            <div className="submenu">
              <Link to="/projets/etude" className="submenu-item">
                BUT
              </Link>
              <Link to="/projets/stage" className="submenu-item">
                Stage
              </Link>
            </div>
          )}
        </div>

        <BoutonHeader txt="CONTACT" link="/contact" />
      </nav>
    </header>
  );
}
