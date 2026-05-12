import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import evento1 from '../assets/eventos/evento1.png';
import evento2 from '../assets/eventos/evento2.png';

const PaginaEventos = () => {
  const navigate = useNavigate();
  const [selectedEvento, setSelectedEvento] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const eventos = [
    {
      id: 1,
      imagenes: [evento1, evento2],
      titulo: 'Evento de Innovaciones Tecnologicas',
      fecha: '29/10/2024 - 30/10/2024',
      ubicacion: 'Huancayo, Peru',
      descripcion:
        'Innovaciones Tecnologicas en las escuelas de tecnologia de la informacion y administracion',
      tipo: 'Conferencia',
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = (evento) => {
    setSelectedEvento(evento);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedEvento(null);
    setCurrentImageIndex(0);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedEvento.imagenes.length - 1 : prev - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === selectedEvento.imagenes.length - 1 ? 0 : prev + 1
    );
  };

  if (isLoading) {
    return (
      <div className="pagina-eventos">
        <button className="btn-back" onClick={() => navigate('/')}>
          Volver al CV
        </button>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Cargando eventos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pagina-eventos">
      <button
        className="btn-back"
        onClick={() => navigate('/')}
        aria-label="Volver al CV principal"
      >
        Volver al CV
      </button>

      <div className="eventos-header">
        <h1>Eventos y Conferencias</h1>
        <p className="eventos-subtitle">
          Participaciones destacadas en eventos tecnologicos
        </p>
      </div>

      <div className="eventos-grid">
        {eventos.map((evento) => (
          <div
            key={evento.id}
            className="evento-card"
            onClick={() => handleOpenModal(evento)}
            tabIndex={0}
            role="button"
            aria-label={`Evento: ${evento.titulo}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenModal(evento);
              }
            }}
          >
            <div className="evento-image-wrapper">
              <img src={evento.imagenes[0]} alt={evento.titulo} loading="lazy" />
              {evento.imagenes.length > 1 && (
                <div className="evento-image-count">
                  {evento.imagenes.length} fotos
                </div>
              )}
              <div className="evento-tipo">{evento.tipo}</div>
            </div>
            <div className="evento-info">
              <h3>{evento.titulo}</h3>
              <p className="evento-fecha">{evento.fecha}</p>
              <p className="evento-ubicacion">{evento.ubicacion}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedEvento && (
        <div
          className="modal-overlay"
          onClick={handleCloseModal}
          onKeyDown={(e) => {
            if (e.key === 'Escape') handleCloseModal();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`Detalles del evento ${selectedEvento.titulo}`}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={handleCloseModal}
              aria-label="Cerrar modal"
            >
              X
            </button>

            <div className="modal-gallery">
              <img
                src={selectedEvento.imagenes[currentImageIndex]}
                alt={`${selectedEvento.titulo} - imagen ${currentImageIndex + 1}`}
                className="modal-image"
              />
              {selectedEvento.imagenes.length > 1 && (
                <>
                  <button
                    className="gallery-btn gallery-prev"
                    onClick={handlePrev}
                    aria-label="Imagen anterior"
                  >
                    &lt;
                  </button>
                  <button
                    className="gallery-btn gallery-next"
                    onClick={handleNext}
                    aria-label="Imagen siguiente"
                  >
                    &gt;
                  </button>
                  <div className="gallery-dots">
                    {selectedEvento.imagenes.map((_, idx) => (
                      <span
                        key={idx}
                        className={`gallery-dot ${idx === currentImageIndex ? 'active' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="modal-info">
              <span className="evento-modal-tipo">{selectedEvento.tipo}</span>
              <h2>{selectedEvento.titulo}</h2>
              <p className="modal-fecha">{selectedEvento.fecha}</p>
              <p className="modal-ubicacion">{selectedEvento.ubicacion}</p>
              <p className="modal-descripcion">{selectedEvento.descripcion}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaginaEventos;