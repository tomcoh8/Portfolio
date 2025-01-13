import React from 'react';

const Etude = ({ title, date, txt, img }) => {
  return (
    <div className="page-etude-content">
      <div className="etude-title">
        <h4>{title}</h4>
        <h5>{date}</h5>
      </div>
      <div className="etude-p">
        <p>{txt}</p>
        <img src={img} alt="Illustration" />
      </div>
    </div>
  );
};

export default Etude;
