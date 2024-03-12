import React from 'react';

const Header = () => {
  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logo">Wilgner</a>
        </div>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">Sobre</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link">Habilidades</a></li>
            <li className="nav__item"><a href="#work" className="nav__link">Trabalhos</a></li>
            <li className="nav__item"><a href="#contact" className="nav__link">Contato</a></li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;