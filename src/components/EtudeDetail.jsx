import React from 'react';

export default function Etude({title, txt, date }) {
  return (
    <div className="page-etude-content">
        <div className='etude-title'>
            <h4>{title}</h4>
            <h5>{date}</h5>
        </div>
        <p>{txt}</p>
    </div>
  );
}
