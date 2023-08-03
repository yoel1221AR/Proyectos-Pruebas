import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <h1>My Shopping</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
            <div className="icon d_flex">
              <div className="img d_flex">
                <i class="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <i class="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="box">
            <h2>Nosotros</h2>
            <ul>
              <li>Tiendas</li>
              <li>Atención</li>
              <li>Term. y Condiciones</li>
              <li>Política de privacidad</li>
            </ul>
          </div>
          <div className="box">
            <h2>Atención al cliente</h2>
            <ul>
              <li>Centro de Ayuda </li>
              <li>Como comprar? </li>
              <li>Seguimientos</li>
              <li>Compras mayoristas </li>
              <li>Devoluciones y Reembolsos </li>
            </ul>
          </div>
          <div className="box">
            <h2>Contactos</h2>
            <ul>
              <li>70 CABA, Buenos aires,Argentina</li>
              <li>Email: yoelchinomandelli@gmail.com</li>
              <li>Phone: +54 9 2475 492010</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
