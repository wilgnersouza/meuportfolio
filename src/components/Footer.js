import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__title">Wilgner</p>
      <div className="footer__social">
        <a href="https://www.facebook.com/wilgner.souza.stw" target="_blank" className="footer__icon" rel="noreferrer"><i className='bx bxl-facebook'></i></a>
        <a href="https://www.instagram.com/showtimewill97/" target="_blank" className="footer__icon" rel="noreferrer"><i className='bx bxl-instagram'></i></a>
      </div>
      <p className="footer__copy">&#169; 2022 . Todos os direitos reservados</p>
    </footer>
  );
}

export default Footer;
