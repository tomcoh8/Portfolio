import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Assurez-vous que le chemin est correct
import Footer from './components/Footer'; // Assurez-vous que le chemin est correct
import Index from './pages/Index'; // Assurez-vous que le chemin est correct
import Etudes from './pages/Etudes';
import Competences from './pages/Competences';
import Projets from './pages/Projets';
import CentreDinteret1 from './pages/CentreDinteret1';
import CentreDinteret2 from './pages/CentreDinteret2';
import CentreDinteret3 from './pages/CentreDinteret3';
import CentreDinteret4 from './pages/CentreDinteret4';
import PageContact from './pages/PageContact'; // Page complète contenant le composant Contact

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Route vers la page d'accueil */}
        <Route path="/" element={<Index />} />
        {/* Route vers une autre page */}
        <Route path="/etudes" element={<Etudes />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/CentreDinteret1" element={<CentreDinteret1 />} />
        <Route path="/CentreDinteret2" element={<CentreDinteret2 />} />
        <Route path="/CentreDinteret3" element={<CentreDinteret3 />} />
        <Route path="/CentreDinteret4" element={<CentreDinteret4 />} />
        <Route path="/Contact" element={<PageContact />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
