import React from 'react';
import { useNavigate } from 'react-router-dom';
import SeccionCard from '../SeccionCard';

const EducacionSeccion = ({ sectionRef }) => {
  const navigate = useNavigate();

  const certificaciones = [
    {
      titulo: 'Get Connected',
      entidad: 'Networking Academy',
      fecha: '15/03/2024',
      color: '#98FB98'
    },
    {
      titulo: 'Introduction to IoT',
      entidad: 'Networking Academy',
      fecha: '16/03/2024',
      color: '#61DAFB'
    },
    {
      titulo: 'Entrepreneurship',
      entidad: 'Networking Academy',
      fecha: '30/03/2024',
      color: '#F7DF1E'
    },
    {
      titulo: 'Introduction to Cybersecurity',
      entidad: 'Networking Academy',
      fecha: '31/03/2024',
      color: '#f7801e'
    },
    {
      titulo: 'Fundamentos de Python 1',
      entidad: 'Networking Academy',
      fecha: '13/08/2024',
      color: '#871ef7'
    },
    {
      titulo: 'Fundamentos de Python 2',
      entidad: 'Networking Academy',
      fecha: '13/08/2024',
      color: '#951ef7'
    },

  ];

  const eventos = [
    {
      nombre: 'Evento de Innovaciones Tecnologicas',
      fecha: '2024',
      descripcion: 'Innovaciones Tecnologicas en las escuelas de tecnologia de la informacion y administracion',
    },
  ];

  return (
    <div className="column column--educacion" ref={sectionRef}>
      
      {/* FORMACIÓN ACADÉMICA */}
      <SeccionCard>
        <h3>
          <span className="section-icon"></span> 
          Formación Académica
        </h3>

        <div className="edu-card">
          <div className="edu-header">
            <div className="edu-icon"></div>
            <div className="edu-info">
              <h4>SENATI Huancayo</h4>
              <p className="edu-carrera">Estudiante tecnico de Ingeniería de Software con Inteligencia Artificial</p>
              <p className="edu-periodo">2024 — 2026 (En curso)</p>
              <div className="edu-progress">
                <div className="edu-progress-bar" style={{ width: '90%' }}></div>
                <span className="edu-progress-text">90% Completado</span>
              </div>
            </div>
          </div>
          
          <div className="edu-details">
            <h5>Áreas de Estudio:</h5>
            <ul className="edu-list">
              <li>Introduccion a las TI</li>
              <li>algoritmos para desarrolar programas</li>
              <li>java fundamentos(oracle)</li>
              <li>fundamentos de programacion web</li>
              <li>database foundations(oracle)</li>
              <li>red hat system admin linux</li>
              <li>seguridad e higiene industrial</li>
              <li>programacion y desarrollo de software with oracle</li>
              <li>ing. de software y metodos agiles</li>
              <li>backend developer web</li>
              <li>modulo de paquetes machine learn/python</li>
              <li>fundamentos y algoritmos de inteligencia artificial</li>
              <li>machine learning y deep learning</li>
              <li>artificial intelligence whith machine learning java</li>
              <li>Desarrollo humano </li>
              <li>Diseño Desarrollo de app mobil</li>
              <li>Diseño desarrollo de solucione IoT</li>
              <li>Fullstach developer software</li>
              <li>taller de app con machine learning</li>
              <li>calidad total</li>
              <li>Empleabilidad y desarrollo profesional</li>
            </ul>
          </div>
        </div>
      </SeccionCard>

      {/* CERTIFICACIONES */}
      <SeccionCard>
        <h3>
          <span className="section-icon"> - </span> 
          Certificaciones Profesionales
        </h3>

        <div className="cert-list">
          {certificaciones.map((cert, index) => (
            <div 
              key={index} 
              className="cert-item"
              style={{ borderLeftColor: cert.color }}
            >
              <div className="cert-header">
                <span className="cert-icon">{cert.icono}</span>
                <div className="cert-info">
                  <h4>{cert.titulo}</h4>
                  <p>{cert.entidad} • {cert.fecha}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="btn btn-certificados"
          onClick={() => navigate('/certificados')}
        >
           Ver Todos los Certificados
        </button>
      </SeccionCard>

      {/* PARTICIPACIÓN EN EVENTOS */}
      <SeccionCard>
        <h3>
          <span className="section-icon"></span> 
          Participación en Eventos
        </h3>

        <div className="eventos-list">
          {eventos.map((evento, index) => (
            <div key={index} className="evento-item">
              <div className="evento-icon">{evento.icono}</div>
              <div className="evento-info">
                <h4>{evento.nombre}</h4>
                <p className="evento-fecha">{evento.fecha}</p>
                <p className="evento-descripcion">{evento.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button
          className="btn btn-eventos"
          onClick={() => navigate('/eventos')}
        >
           Ver Todos los Eventos
        </button>
      </SeccionCard>
    </div>
  );
};

export default EducacionSeccion;