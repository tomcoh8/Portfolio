import React from 'react';

export default function Etude({ txt, date }) {
  return (
    <div className="etude-content">
      <p className="formation-txt">{txt}</p>
      <div className="timeline-marker"></div> {/* Le rond au centre */}
      <p className="formation-date">{date}</p>
    </div>
  );
}
