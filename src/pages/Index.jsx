import React from 'react';
import Presentation from '../components/Presentation';
import EtudesIndex from '../components/EtudesIndex';
import CentreDinterets from '../components/CentreDinterets';
import Contact from '../components/Contact';

function Index() {
  return (
    <div>
      <Presentation />
      <EtudesIndex />
      <CentreDinterets />
      <Contact />
    </div>
  );
}

export default Index;
