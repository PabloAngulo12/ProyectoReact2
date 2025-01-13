import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Seccion1 from './components/Seccion1';
import Seccion2 from './components/Seccion2';
import Seccion3 from './components/Seccion3';
import Seccion4 from './components/Seccion4'; // Importa la nueva sección
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  console.log('App is rendering');
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Seccion1 />} />
          <Route path="/seccion1" element={<Seccion1 />} />
          <Route path="/seccion2" element={<Seccion2 />} />
          <Route path="/seccion3" element={<Seccion3 />} />
          <Route path="/seccion4" element={<Seccion4 />} /> {/* Añade la ruta de la nueva sección */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
