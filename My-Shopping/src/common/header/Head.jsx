import React from 'react';

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label>+54 9245 492010</label>
            <i className="fa fa-envelope"></i>
            <label>yoelchinomandelli@gmail.com</label>
          </div>
          <div className="right row RText">
            <label>Preguntas FREQ</label>
            <label>Ayuda</label>
            <span></span>
            <label>EN</label>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
