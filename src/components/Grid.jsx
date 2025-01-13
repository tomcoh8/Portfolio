import React from 'react';

const Grid = ({ items, columns = 3 }) => {
  // Limiter le nombre de colonnes à 4 maximum
  const calculatedColumns = Math.min(columns, 4);

  // Calculer le nombre de lignes pour ne pas dépasser 2 éléments par colonne
  const maxRows = Math.ceil(items.length / calculatedColumns);
  const finalRows = Math.min(maxRows, 2); // Limite les lignes à 2

  // Ajuster le style grid-template-rows
  const gridRows = `repeat(${finalRows}, 1fr)`;

  return (
    <div
      className="grid-container"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${calculatedColumns}, 1fr)`,
        gridTemplateRows: gridRows,
        gap: '10px',
      }}
    >
      {items.slice(0, calculatedColumns * finalRows).map((item) => (
        <div key={item.id} className="grid-item">
          <img src={item.src} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Grid;
