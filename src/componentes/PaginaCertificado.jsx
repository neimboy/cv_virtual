import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import certificado1 from '../assets/certificados/certificado7.png';
import certificado2 from '../assets/certificados/certificado6.png';
import certificado3 from '../assets/certificados/certificado5.png';
import certificado4 from '../assets/certificados/certificado4.png';
import certificado5 from '../assets/certificados/certificado2.png';
import certificado6 from '../assets/certificados/certificado1.png';


const PaginaCertificados = () => {
  const navigate = useNavigate();
  const [selectedCert, setSelectedCert] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const certificados = [
    {
      id: 1,
      imagen: certificado1,
      titulo: 'Get Connected',
      entidad: 'Networking Academy',
      fecha: '15/03/2024',
      categoria: 'Redes',
      descripcion: 'Certificado en conceptos fundamentales de redes.',
      skills: ['Redes', 'Conectividad'],
    },
    {
      id: 2,
      imagen: certificado2,
      titulo: 'Introduction to IoT',
      entidad: 'Networking Academy',
      fecha: '16/03/2024',
      categoria: 'IoT',
      descripcion: 'Introduccion al Internet de las Cosas.',
      skills: ['IoT', 'Sensores'],
    },
    {
      id: 3,
      imagen: certificado3,
      titulo: 'Entrepreneurship',
      entidad: 'Networking Academy',
      fecha: '30/03/2024',
      categoria: 'Negocios',
      descripcion: 'Fundamentos de emprendimiento y negocios.',
      skills: ['Emprendimiento', 'Negocios'],
    },
    {
      id: 4,
      imagen: certificado4,
      titulo: 'Introduction to Cybersecurity',
      entidad: 'Networking Academy',
      fecha: '31/03/2024',
      categoria: 'Seguridad',
      descripcion: 'Introduccion a la ciberseguridad.',
      skills: ['Ciberseguridad', 'Redes'],
    },
    {
      id: 5,
      imagen: certificado5,
      titulo: 'Fundamentos de Python 1',
      entidad: 'Networking Academy',
      fecha: '13/08/2024',
      categoria: 'Programacion',
      descripcion: 'Primeros fundamentos de programacion en Python.',
      skills: ['Python', 'Programacion'],
    },
    {
      id: 6,
      imagen: certificado6,
      titulo: 'Fundamentos de Python 2',
      entidad: 'Networking Academy',
      fecha: '31/03/2024',
      categoria: 'Programacion',
      descripcion: 'Fundamentos avanzados de programacion en Python.',
      skills: ['Python', 'Programacion'],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const handleDownloadCert = (cert, e) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = cert.imagen;
    link.download = `${cert.titulo.replace(/\s+/g, '_')}.jpeg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleKeyDown = (e, cert) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedCert(cert);
    }
    if (e.key === 'Escape') {
      setSelectedCert(null);
    }
  };

  if (isLoading) {
    return (
      <div className="pagina-certificados">
        <button className="btn-back" onClick={() => navigate('/')}>
          Volver al CV
        </button>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Cargando certificados...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pagina-certificados">
      <button
        className="btn-back"
        onClick={() => navigate('/')}
        aria-label="Volver al CV principal"
      >
        Volver al CV
      </button>

      <div className="certificados-header">
        <h1>Mis Certificados</h1>
        <p className="certificados-subtitle">
          Certificaciones que avalan mi formacion profesional
        </p>
      </div>

      <div className="certificados-grid">
        {certificados.map((cert) => (
          <div
            key={cert.id}
            className={`certificado-card ${loadedImages[cert.id] ? 'loaded' : ''}`}
            onClick={() => setSelectedCert(cert)}
            onKeyDown={(e) => handleKeyDown(e, cert)}
            tabIndex={0}
            role="button"
            aria-label={`Certificado: ${cert.titulo}`}
          >
            <div className="certificado-image-wrapper">
              <img
                src={cert.imagen}
                alt={cert.titulo}
                onLoad={() => handleImageLoad(cert.id)}
                loading="lazy"
              />
              {!loadedImages[cert.id] && (
                <div className="image-placeholder">
                  <div className="placeholder-spinner"></div>
                </div>
              )}
              <div className="certificado-categoria">{cert.categoria}</div>
            </div>

            <div className="certificado-info">
              <h3>{cert.titulo}</h3>
              <p className="certificado-entidad">
                {cert.entidad} - {cert.fecha}
              </p>

              <div className="certificado-tags">
                {cert.skills.map((skill, idx) => (
                  <span key={idx} className="certificado-tag">
                    {skill}
                  </span>
                ))}
              </div>

              <button
                className="btn-download-cert"
                onClick={(e) => handleDownloadCert(cert, e)}
                aria-label={`Descargar certificado ${cert.titulo}`}
              >
                Descargar
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedCert(null)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setSelectedCert(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`Vista ampliada de ${selectedCert.titulo}`}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedCert(null)}
              aria-label="Cerrar modal"
            >
              X
            </button>

            <img
              src={selectedCert.imagen}
              alt={selectedCert.titulo}
              className="modal-image"
            />

            <div className="modal-info">
              <h2>{selectedCert.titulo}</h2>
              <p className="modal-entidad">
                {selectedCert.entidad} - {selectedCert.fecha}
              </p>
              <p className="modal-descripcion">{selectedCert.descripcion}</p>
            </div>

            <div className="modal-actions">
              <button
                className="btn btn-download-modal"
                onClick={(e) => handleDownloadCert(selectedCert, e)}
              >
                Descargar Certificado
              </button>
              <button
                className="btn btn-close-modal"
                onClick={() => setSelectedCert(null)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaginaCertificados;