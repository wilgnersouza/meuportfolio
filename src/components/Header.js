/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logo">Wilgner</a>
        </div>
        <div className={`nav__menu ${isMenuOpen ? 'show' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">Sobre</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link">Habilidades</a></li>
            <li className="nav__item"><a href="#work" className="nav__link">Trabalhos</a></li>
            <li className="nav__item"><a href="#contact" className="nav__link">Contato</a></li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
