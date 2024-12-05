import React from 'react';

export default function Etude({title, txt, date }) {
  return (
    <div className="etude-content">
        <div>
            <h4>{title}</h4>
            <h5>{date}</h5>
        </div>
        <p>{txt}</p>
    </div>
  );
}
