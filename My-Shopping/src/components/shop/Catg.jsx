import React from 'react';

const Catg = () => {
  const data = [
    {
      cateImg: './images/category/cat-1.png',
      cateName: 'Apple',
      link: 'https://www.apple.com/la/',
    },
    {
      cateImg: './images/category/cat-2.png',
      cateName: 'Samasung',
      link: 'https://shop.samsung.com/ar/',
    },
    {
      cateImg: './images/category/cat-1.png',
      cateName: 'Oppo',
      link: 'https://store.oppomobile.es/',
    },
    {
      cateImg: './images/category/cat-2.png',
      cateName: 'Vivo',
      link: 'https://www.vivo.com/en/products',
    },
    {
      cateImg: './images/category/cat-1.png',
      cateName: 'Redmi',
      link: 'https://xiaomistore.com.ar/',
    },
    {
      cateImg: './images/category/cat-2.png',
      cateName: 'Sony',
      link: 'https://store.sony.com.ar/',
    },
  ];
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Marcas </h1>
          <h1>Tiendas </h1>
        </div>
        {/*   Objeto */}
        {data.map((value, index) => {
          return (
            <button className="box f_flex " key={index}>
              <img src={value.cateImg} alt="" />
              <a href={value.link}>
                <span>{value.cateName}</span>
              </a>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Catg;
