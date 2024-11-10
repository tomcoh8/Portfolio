import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Assurez-vous que le chemin est correct
import Footer from './components/Footer'; // Assurez-vous que le chemin est correct
import Index from './pages/Index'; // Assurez-vous que le chemin est correct
import Etudes from './pages/Etudes';
import Competences from './pages/Competences';
import Projets from './pages/Projets';

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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
