import React from 'react';
import Etude from './Etude';

export default function FriseChronologique({ etudes }) {
  return (
    <div className="timeline">
      {etudes.map((etude, index) => (
        <Etude 
          key={index} 
          txt={etude.txt} 
          date={etude.date} 
        />
      ))}
    </div>
  );
}
