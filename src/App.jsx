// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CVApp from './componentes/CVApp';
import PaginaCertificado from './componentes/PaginaCertificado';
import PaginaProyectos from './componentes/PaginaProyectos';
import PaginaEventos from './componentes/PaginaEventos';
import './style/index.css';
import './style/pagina.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CVApp />} />
        <Route path="/certificados" element={<PaginaCertificado />} />
        <Route path="/proyecto/:proyectoId" element={<PaginaProyectos />} />
        <Route path="/eventos" element={<PaginaEventos />} />
      </Routes>
    </Router>
  );
}

export default App;