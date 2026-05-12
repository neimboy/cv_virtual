import React from 'react';
import SeccionCard from '../SeccionCard';

const ObjetivosSeccion = ({ sectionRef }) => {
  const objetivos = [
    {
      titulo: 'Desarrollo Frontend',
      descripcion: 'Especializarme en React y arquitecturas frontend modernas'
    },
    {
      titulo: 'Arquitectura de Software',
      descripcion: 'Diseñar sistemas escalables y mantenibles'
    },
    {
      titulo: 'Liderazgo Técnico',
      descripcion: 'Liderar equipos de desarrollo en proyectos innovadores'
    },
    {
      titulo: 'Desarrollar segun normas ISO',
      descripcion: 'estandarizar procesos, garantizando la calidad, seguridad y eficiencia de productos y servicios'
    },
     {
      titulo: 'Cloud Engineer',
      descripcion: 'profesional de TI encargado de diseñar, implementar, gestionar y mantener sistemas de computación en la nube '
    }
    
  ];

  const areasInteres = [
    { icono: '⚛️', nombre: 'React & Frontend', descripcion: 'Interfaces modernas' },
    { icono: '☁️', nombre: 'Cloud Computing', descripcion: 'AWS & Azure' },
    { icono: '🤖', nombre: 'IA & Machine Learning', descripcion: 'TensorFlow' },
    { icono: '📱', nombre: 'Apps Móviles', descripcion: 'React Native' },
    { icono: '🔒', nombre: 'Ciberseguridad', descripcion: 'Seguridad web' },
    { icono: '📊', nombre: 'Data Science', descripcion: 'Análisis de datos' }
  ];

  const idiomas = [
    { idioma: 'Español', nivel: 'Nativo', porcentaje: 100 },
    { idioma: 'Inglés ', nivel: 'básico', porcentaje: 20 }
  ];

  return (
    <div className="column column--objetivos" ref={sectionRef}>
      
      {/* OBJETIVO PROFESIONAL */}
      <SeccionCard>
        <h3>
          <span className="section-icon"></span> 
          Objetivo Profesional
        </h3>
        <p className="objetivo-text">
          Convertirme en un ingeniero de software especializado en desarrollo frontend, 
          arquitectura web moderna y computación en la nube, participando en proyectos innovadores de 
          alto impacto que mejoren la experiencia digital de los usuarios. Mi meta es diseñar soluciones 
          tecnológicas escalables, seguras y mantenibles, aplicando estándares de calidad basados en normas ISO, 
          mientras continúo fortaleciendo mis habilidades en liderazgo técnico, tecnologías cloud, inteligencia artificial 
          y desarrollo de aplicaciones modernas dentro de entornos colaborativos y desafiantes.
        </p>
      </SeccionCard>

      {/* OBJETIVOS A CORTO Y LARGO PLAZO */}
      <SeccionCard>
        <h3>
          <span className="section-icon"></span> 
          Metas Profesionales
        </h3>
        <div className="objetivos-grid">
          {objetivos.map((obj, index) => (
            <div key={index} className="objetivo-card">
              <div className="objetivo-icon">{obj.icono}</div>
              <h4>{obj.titulo}</h4>
              <p>{obj.descripcion}</p>
            </div>
          ))}
        </div>
      </SeccionCard>

      {/* ÁREAS DE INTERÉS */}
      <SeccionCard>
        <h3>
          <span className="section-icon"></span> 
          Áreas de Interés Tecnológico
        </h3>
        <div className="intereses-grid">
          {areasInteres.map((area, index) => (
            <div key={index} className="interes-item">
              <span className="interes-icon">{area.icono}</span>
              <div className="interes-content">
                <h4>{area.nombre}</h4>
                <p>{area.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </SeccionCard>

      {/* SOBRE MÍ */}
      <SeccionCard>
        <h3>
          <span className="section-icon"></span> 
          Sobre Mí
        </h3>
        <div className="sobre-mi-content">
        <p>
        Disfruto dedicar mi tiempo libre a actividades que me permitan relajarme y 
        mantener un equilibrio entre la tecnología y mi vida personal. Me gusta jugar 
        videojuegos, compartir momentos con mi familia y explorar historias de terror 
        a través de libros y relatos que despierten mi imaginación y curiosidad.
        </p>
        <p>
          También encuentro tranquilidad en las pequeñas cosas del día a día, como 
          cocinar nuevas recetas y pasar tiempo acariciando a mi gata. Estas actividades 
          me ayudan a mantener la creatividad, la paciencia y una mentalidad positiva 
          que también aplico en mi desarrollo profesional y personal.
        </p>
        </div>
      </SeccionCard>

      {/* IDIOMAS */}
      <SeccionCard>
        <h3>
          <span className="section-icon"></span> 
          Idiomas
        </h3>
        <div className="idiomas-list">
          {idiomas.map((idioma, index) => (
            <div key={index} className="idioma-item">
              <div className="idioma-header">
                <span className="idioma-nombre">{idioma.idioma}</span>
                <span className="idioma-nivel">{idioma.nivel}</span>
              </div>
              <div className="idioma-barra">
                <div 
                  className="idioma-progreso" 
                  style={{ width: `${idioma.porcentaje}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </SeccionCard>
    </div>
  );
};

export default ObjetivosSeccion;