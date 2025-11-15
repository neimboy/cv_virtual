import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CVApp from './componentes/CVApp';
import PaginaInsure from './componentes/PaginaInsure';
import PaginaLicoreria from './componentes/PaginaLicoreria';
import PaginaMotiva from './componentes/PaginaMotiva';
import PaginaCertificado from './componentes/PaginaCertificado'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<CVApp />} />
          <Route path="/insure" element={<PaginaInsure />} />
          <Route path="/licoreria" element={<PaginaLicoreria />} />
          <Route path="/motiva" element={<PaginaMotiva />} />
          <Route path='/certificado' element={<PaginaCertificado />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;