import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

// Proyecto 1 - Insure
import insure1 from '../assets/proyectos/proyecto1/insure1.png';
import insure2 from '../assets/proyectos/proyecto1/insure2.png';
import insure3 from '../assets/proyectos/proyecto1/insure3.png';
import insure4 from '../assets/proyectos/proyecto1/insure4.png';
import insure5 from '../assets/proyectos/proyecto1/insure5.png';
import insure6 from '../assets/proyectos/proyecto1/insure6.png';
import insure7 from '../assets/proyectos/proyecto1/insure7.png';
import insure8 from '../assets/proyectos/proyecto1/insure8.png';
import insure9 from '../assets/proyectos/proyecto1/insure9.png';
import insure10 from '../assets/proyectos/proyecto1/insure10.png';

// Proyecto 2 - Licorería
import licoreria1 from '../assets/proyectos/proyecto2/licoreria1.png';
import licoreria2 from '../assets/proyectos/proyecto2/licoreria2.png';
import licoreria3 from '../assets/proyectos/proyecto2/licoreria3.png';
import licoreria4 from '../assets/proyectos/proyecto2/licoreria4.png';
import licoreria5 from '../assets/proyectos/proyecto2/licoreria5.png';
import licoreria6 from '../assets/proyectos/proyecto2/licoreria6.png';

// Proyecto 3 - Motiva
import motiva1 from '../assets/proyectos/proyecto3/motiva1.png';
import motiva2 from '../assets/proyectos/proyecto3/motiva2.png';
import motiva3 from '../assets/proyectos/proyecto3/motiva3.png';
import motiva4 from '../assets/proyectos/proyecto3/motiva4.png';
import motiva5 from '../assets/proyectos/proyecto3/motiva5.png';
import motiva6 from '../assets/proyectos/proyecto3/motiva6.png';
import motiva7 from '../assets/proyectos/proyecto3/motiva7.png';
import motiva8 from '../assets/proyectos/proyecto3/motiva8.png';
import motiva9 from '../assets/proyectos/proyecto3/motiva9.png';
import motiva10 from '../assets/proyectos/proyecto3/motiva10.png';
import motiva11 from '../assets/proyectos/proyecto3/motiva11.png';
import motiva12 from '../assets/proyectos/proyecto3/motiva12.png';
import motiva13 from '../assets/proyectos/proyecto3/motiva13.png';
import motiva14 from '../assets/proyectos/proyecto3/motiva14.png';
import motiva15 from '../assets/proyectos/proyecto3/motiva15.png';
import motiva16 from '../assets/proyectos/proyecto3/motiva16.png';
import motiva17 from '../assets/proyectos/proyecto3/motiva17.png';

// ─────────────────────────────────────────
// Mapa de imágenes por proyecto
// ─────────────────────────────────────────
const imagenesPorProyecto = {
  insure: [
    insure1, insure2, insure3, insure4, insure5,
    insure6, insure7, insure8, insure9, insure10,
  ],
  licoreria: [
    licoreria1, licoreria2, licoreria3,
    licoreria4, licoreria5, licoreria6,
  ],
  motiva: [
    motiva1, motiva2, motiva3, motiva4, motiva5,
    motiva6, motiva7, motiva8, motiva9, motiva10,
    motiva11, motiva12, motiva13, motiva14, motiva15,
    motiva16, motiva17,
  ],
};

// ─────────────────────────────────────────
// Componente CarruselImagenes
// ─────────────────────────────────────────
const CarruselImagenes = ({ images, color }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Reset al cambiar de proyecto
  useEffect(() => {
    setCurrentIndex(0);
    setIsAutoPlaying(true);
  }, [images]);

  const goToSlide = useCallback((index) => setCurrentIndex(index), []);

  const goToPrev = useCallback(
    () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)),
    [images.length]
  );

  const goToNext = useCallback(
    () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)),
    [images.length]
  );

  // Autoplay
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext, images.length]);

  if (images.length === 0) {
    return <p className="no-images">No hay imágenes disponibles</p>;
  }

  return (
    <div
      className="carrusel-container"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Imagen principal con botones de navegación */}
      <div className="carrusel-main">
        <button
          className="carrusel-btn carrusel-prev"
          onClick={goToPrev}
          aria-label="Imagen anterior"
        >
          ‹
        </button>

        <div className="carrusel-slide">
          {/* key fuerza re-render limpio al cambiar slide */}
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Captura ${currentIndex + 1} de ${images.length}`}
            className="carrusel-imagen"
          />
          <div className="carrusel-counter" aria-live="polite">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        <button
          className="carrusel-btn carrusel-next"
          onClick={goToNext}
          aria-label="Imagen siguiente"
        >
          ›
        </button>
      </div>

      {/* Dots para ≤8 imágenes, thumbnails para más */}
      {images.length <= 8 ? (
        <div className="carrusel-dots" role="tablist" aria-label="Navegación por puntos">
          {images.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === currentIndex}
              className={`carrusel-dot ${index === currentIndex ? 'carrusel-dot--active' : ''}`}
              onClick={() => goToSlide(index)}
              style={index === currentIndex ? { background: color, borderColor: color } : {}}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      ) : (
        <div className="carrusel-thumbnails" role="tablist" aria-label="Miniaturas de navegación">
          {images.map((img, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === currentIndex}
              className={`carrusel-thumb ${index === currentIndex ? 'carrusel-thumb--active' : ''}`}
              onClick={() => goToSlide(index)}
              style={index === currentIndex ? { borderColor: color } : {}}
              aria-label={`Ir a imagen ${index + 1}`}
            >
              <img src={img} alt="" aria-hidden="true" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────
// Componente PaginaProyectos
// ─────────────────────────────────────────
const PaginaProyectos = () => {
  const navigate = useNavigate();
  const { proyectoId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const proyectos = useMemo(() => ({
    insure: {
      titulo: 'Proyecto Insure',
      descripcion:
        'aplicacion web que permite la gestion de insumos, productos y ventas ',
      categoria: 'sistema Empresarial comercial',
      color: '#6366f1',
    },
    licoreria: {
      titulo: 'Proyecto Licorería',
      descripcion:
        'Sistema de punto de venta para licorería con control de inventario, gestión de clientes y reportes de ventas.',
      categoria: 'Sistema de Ventas',
      color: '#10b981',
    },
    motiva: {
      titulo: 'Proyecto Motiva',
      descripcion:
        'Aplicación de motivación personal con frases diarias, seguimiento de metas y comunidad de apoyo.',
      categoria: 'app web de motivación',
      color: '#f59e0b',
    },
  }), []);

  const proyectoActual = proyectos[proyectoId];
  const images = imagenesPorProyecto[proyectoId] ?? [];

  // Reset de estado al cambiar de proyecto
  useEffect(() => {
    setIsLoading(true);
    setSelectedImage(null);
    setSelectedIndex(0);
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, [proyectoId]);

  // Abrir modal por índice (más robusto que buscar por src)
  const openModal = useCallback((index) => {
    setSelectedIndex(index);
    setSelectedImage(images[index]);
  }, [images]);

  const closeModal = useCallback(() => setSelectedImage(null), []);

  const handlePrevImage = useCallback((e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => {
      const next = prev === 0 ? images.length - 1 : prev - 1;
      setSelectedImage(images[next]);
      return next;
    });
  }, [images]);

  const handleNextImage = useCallback((e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => {
      const next = prev === images.length - 1 ? 0 : prev + 1;
      setSelectedImage(images[next]);
      return next;
    });
  }, [images]);

  // ─── Estado de error ───
  if (!proyectoActual) {
    return (
      <div className="pagina-proyecto-error">
        <div className="error-icon">🔍</div>
        <h2>Proyecto no encontrado</h2>
        <p>El proyecto que buscas no existe o ha sido movido.</p>
        <div className="error-actions">
          <button className="btn-back" onClick={() => navigate('/')}>
            ← Volver al CV
          </button>
          <button className="btn-back" onClick={() => navigate('/proyecto/insure')}>
            Ver Proyecto Insure
          </button>
        </div>
      </div>
    );
  }

  // ─── Estado de carga ───
  if (isLoading) {
    return (
      <div className="pagina-proyecto">
        <button className="btn-back" onClick={() => navigate('/')}>
          ← Volver al CV
        </button>
        <div className="loading-container">
          <div
            className="loading-spinner"
            style={{ borderTopColor: proyectoActual.color }}
          />
          <p>Cargando {proyectoActual.titulo}…</p>
        </div>
      </div>
    );
  }

  // ─── Vista principal ───
  return (
    <div className="pagina-proyecto">
      <button className="btn-back" onClick={() => navigate('/')}>
        ← Volver al CV
      </button>

      {/* Encabezado del proyecto */}
      <div className="proyecto-header">
        <h1>{proyectoActual.titulo}</h1>
        <div className="proyecto-meta">
          <span
            className="proyecto-categoria"
            style={{
              background: proyectoActual.color + '20',
              color: proyectoActual.color,
              borderColor: proyectoActual.color + '40',
            }}
          >
            {proyectoActual.categoria}
          </span>
        </div>
      </div>

      {/* Navegación entre proyectos */}
      <nav className="proyectos-nav" aria-label="Proyectos disponibles">
        {Object.entries(proyectos).map(([key, proy]) => (
          <Link
            key={key}
            to={`/proyecto/${key}`}
            className={`proyecto-nav-link ${proyectoId === key ? 'active' : ''}`}
            style={proyectoId === key ? { borderBottomColor: proy.color } : {}}
            aria-current={proyectoId === key ? 'page' : undefined}
          >
            {proy.titulo.replace('Proyecto ', '')}
          </Link>
        ))}
      </nav>

      {/* Carrusel principal */}
      <CarruselImagenes images={images} color={proyectoActual.color} />

      {/* Galería completa */}
      <section aria-label="Galería de capturas">
        <h3 className="galeria-titulo"> Todas las capturas</h3>
        <div className="proyecto-galeria">
          {images.map((img, index) => (
            <div
              key={index}
              className="proyecto-imagen"
              onClick={() => openModal(index)}
              tabIndex={0}
              role="button"
              aria-label={`Ampliar captura ${index + 1} de ${images.length}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openModal(index);
                }
              }}
            >
              <img src={img} alt={`Captura ${index + 1}`} loading="lazy" />
              <div className="imagen-overlay">
                <span>🔍 Ampliar</span>
              </div>
              <div className="imagen-number">{index + 1}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal de imagen ampliada */}
      {selectedImage && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          onKeyDown={(e) => {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') handlePrevImage();
            if (e.key === 'ArrowRight') handleNextImage();
          }}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ${selectedIndex + 1} de ${images.length} — ${proyectoActual.titulo}`}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Cerrar"
            >
              ✕
            </button>
            <button
              className="modal-nav modal-prev"
              onClick={handlePrevImage}
              aria-label="Imagen anterior"
            >
              ‹
            </button>
            {/* key fuerza re-render limpio al navegar en el modal */}
            <img
              key={selectedIndex}
              src={selectedImage}
              alt={`Captura ${selectedIndex + 1} de ${images.length}`}
              className="modal-image"
            />
            <button
              className="modal-nav modal-next"
              onClick={handleNextImage}
              aria-label="Imagen siguiente"
            >
              ›
            </button>
            <div className="modal-image-counter" aria-live="polite">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaginaProyectos;