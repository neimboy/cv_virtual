import React from 'react';
import SeccionCard from '../SeccionCard';
import foto from '../../assets/imagenes/foto.png';

const PerfilSeccion = ({ sectionRef }) => {
  return (
    <div className="column column--perfil" ref={sectionRef}>
      
      {/* TARJETA PRINCIPAL DE PERFIL */}
      <SeccionCard className="perfil-top-card">
        <div className="perfil-top">
          <div className="perfil-avatar-wrapper">
            <img
              src={foto}
              alt="Harold James Pariona Gonzales - Frontend Developer"
              className="perfil-foto"
              loading="eager"
            />
            <div className="perfil-status online"></div>
          </div>

          <div className="perfil-info">
            <h2>Harold James Pariona Gonzales</h2>
            <p className="perfil-cargo">
              Estudiante de Ingeniería de Software con IA | Desarrollador Frontend Junior
            </p>
            <p className="perfil-descripcion">
               Desarrollador enfocado en la creación de soluciones tecnológicas
               para optimizar procesos y mejorar la gestión de información.
               Cuento con conocimientos en desarrollo de software, diseño de
               algoritmos y manejo de entornos virtualizados, aplicando un
               enfoque analítico para la resolución de problemas y la mejora
               continua.
               Tengo experiencia en el desarrollo de sistemas backend, 
               diseño de bases de datos relacionales y creación de interfaces modernas
               y adaptables. Además, manejo herramientas de control de versiones y despliegue de 
               aplicaciones en entornos actuales,priorizando la calidad del software, 
               la organización del trabajo y la seguridad de la información.

            </p>

            <div className="perfil-stats">
              <div className="stat-box">
                <h3>4</h3>
                <span>Proyectos Completados</span>
              </div>
              <div className="stat-box">
                <h3> Golang </h3>
                <span>Especialidad Principal</span>
              </div>
            </div>
          </div>
        </div>
      </SeccionCard>

      <SeccionCard>
        <h3>
          <span className="section-icon"></span> 
          Información de Contacto
        </h3>
        <div className="contact-grid">
          <a href="tel:+51964204615" className="contact-item contact-link">
            <span className="contact-icon"></span>
            <div className="contact-details">
              <p className="contact-value"> 904 620 145</p>
              <span className="contact-label"> celular </span>
            </div>
          </a>

          <a href="mailto:harold.pariona@email.com" className="contact-item contact-link">
            <span className="contact-icon"></span>
            <div className="contact-details">
              <p className="contact-value">haroldgonzales987@gmail.com</p>
              <span className="contact-label">Correo Electrónico</span>
            </div>
          </a>

          <div className="contact-item">
            <span className="contact-icon"></span>
            <div className="contact-details">
              <p className="contact-value">Huancayo, Perú</p>
              <span className="contact-label">Ubicación</span>
            </div>
          </div>

          <a href="https://github.com/neimboy" target="_blank" rel="noopener noreferrer" className="contact-item contact-link">
            <span className="contact-icon"></span>
            <div className="contact-details">
              <p className="contact-value">github.com/neimboy</p>
              <span className="contact-label">Portafolio GitHub</span>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/harold-gonzales-162912397" target="_blank" rel="noopener noreferrer" className="contact-item contact-link">
            <span className="contact-icon"></span>
            <div className="contact-details">
              <p className="contact-value">LinkedIn</p>
              <span className="contact-label">Red Profesional</span>
            </div>
          </a>
        </div>
      </SeccionCard>

      {/* TECNOLOGÍAS PRINCIPALES */}
      <SeccionCard>
        <h3>
          <span className="section-icon"></span> 
          Stack Tecnológico Principal
        </h3>
        <div className="tech-stack">
          {[
            { name: 'React ', level: 'principiante' },
            { name: 'JavaScript ', level: 'intermedio' },
            { name: 'Node.js ', level: 'principiante' },
            { name: 'HTML5 ', level: 'intermedio' },
            { name: 'CSS3 ', level: 'intermedio' },
            { name: 'SQL ', level: 'avanzado' },
            { name: 'Git ', level: 'intermedio' },
            { name: 'Golang ', level: 'avanzado' },
            { name: 'Python ', level: 'intermedio' },
            { name: 'java ', level: 'Intermedio' },
            { name: 'Docker ', level: 'intermedio' },
            { name: 'Linux ', level: 'intermedio' }

          ].map((tech) => (
            <span key={tech.name} className="tech-badge" title={`${tech.name} - Nivel ${tech.level}`}>
              {tech.name}
              <small className="tech-level">{tech.level}</small>
            </span>
          ))}
        </div>
      </SeccionCard>

      {/* HABILIDADES BLANDAS */}
      <SeccionCard>
        <h3>
          <span className="section-icon"></span> 
          Habilidades Blandas
        </h3>
        <div className="soft-skills-grid">
          {['Trabajo en Equipo', 'Comunicación Efectiva', 'Resolución de Problemas', 
            'Pensamiento Analítico', 'Adaptabilidad', 'Aprendizaje Continuo',
            'Gestión del Tiempo', 'Liderazgo'
          ].map((skill) => (
            <div key={skill} className="soft-skill-item">
              <span className="soft-skill-dot"></span>
              {skill}
            </div>
          ))}
        </div>
      </SeccionCard>
    </div>
  );
};

export default PerfilSeccion;