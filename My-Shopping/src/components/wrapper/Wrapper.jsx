import React from 'react';
import './style.css';

const Wrapper = () => {
  const data = [
    {
      cover: <i class="fa-solid fa-truck-fast"></i>,
      title: 'Entrega',
      decs: 'Ofrecemos entrega de productos de cualquier rango',
    },
    {
      cover: <i class="fa-solid fa-id-card"></i>,
      title: 'Pago seguro',
      decs: 'Ofrecemos precios competitivos en nuestros  productos ',
    },
    {
      cover: <i class="fa-solid fa-shield"></i>,
      title: 'Compras ',
      decs: 'Productos de cualquier rango',
    },
    {
      cover: <i class="fa-solid fa-headset"></i>,
      title: '24/7 Soporte ',
      decs: 'Ofrecemos soporte de cualquier rango de horario',
    },
  ];
  return (
    <>
      <section className="wrapper background">
        <div className="container grid2">
          {data.map((val, index) => {
            return (
              <div className="product" key={index}>
                <div className="img icon-circle">
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
