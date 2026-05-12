import React from 'react';
import cvFile from '../../assets/cvparadescargar/CV pariona gonzale harold-2.pdf';

const CVHeader = () => {
  const handleDescargar = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'CV_Harold_Pariona_Gonzales.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImprimir = () => {
    window.print();
  };

  return (
    <header className="cv-header no-print">
      <div className="cv-header__info">
        <h1>Harold James Pariona Gonzales</h1>
        <p className="cv-header__rol">
          Tecnico en Ingeniero de Software
        </p>
      </div>

      <div className="cv-header__acciones">
        {/* <button className="btn btn-print" onClick={handleImprimir}>
           Imprimir CV
        </button> */}
        <button className="btn btn-download" onClick={handleDescargar}>
           Descargar CV
        </button>
      </div>
    </header>
  );
};

export default CVHeader;