import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './../style/index.css';
import perfil from '../assets/perfil.png';

export default function CVApp() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('sobre-mi');

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const Navbar = () => (
    <nav className="cv-navbar">
      {['sobre-mi', 'experiencia', 'proyectos', 'habilidades', 'certificaciones', 'educacion'].map((section) => (
        <button
          key={section}
          className={`nav-item ${activeSection === section ? 'active' : ''}`}
          onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
        >
          {section.replace('-', ' ')}
        </button>
      ))}
    </nav>
  );

  const personalInfo = {
    nombre: "Harold James Pariona Gonzales",
    titulo: "Estudiante de Ingeniería de Software con IA",
    email: "haroldgonzales987@gmail.com",
    telefono: "+51 904 620 145",
    ubicacion: "Huancayo, Perú",
    sobreMi: "Soy un apasionado estudiante de Ingeniería de Software con especial interés en Inteligencia Artificial. Me encanta crear soluciones innovadoras y aprender nuevas tecnologías. Actualmente me enfoco en desarrollar aplicaciones web modernas y eficientes.",
    github: "https://github.com/neimboy",
    linkedin: "https://www.linkedin.com/in/harold-gonzales-162912397"
  };

  const experiencia = [
    {
      puesto: "Practicante Desarrollador de Software",
      empresa: "Licorería Huasca YML",
      periodo: "enero 2025 - junio 2025",
      descripcion: "Desarrollo de aplicación web para ventas con gestión de inventario, roles de usuario y análisis predictivo usando machine learning."
    },
    {
      puesto: "Practicante Desarrollador Backend",
      empresa: "Insure Perú SAC",
      periodo: "julio 2025 - setiembre 2025",
      descripcion: "Desarrollo de sistema de producción con control de insumos, gestión de stock y fechas de vencimiento para empresa de insumos."
    },
    {
      puesto: "Practicante Desarrollador de Software",
      empresa: "Motiva+",
      periodo: "octubre 2025 - noviembre 2025",
      descripcion: "Desarrollo de aplicación web para red local con sistema de motivación para estudiantes, roles diferenciados y tienda de canje de puntos."
    }
  ];

  const habilidades = [
    { categoria: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS"] },
    { categoria: "Backend", items: ["Go (Intermedio)", "Python (Intermedio)", "Java (Intermedio)"] },
    { categoria: "Bases de Datos", items: ["MySQL", "SqlServer", "SqlLive"] },
    { categoria: "Herramientas & DevOps", items: ["Git", "Docker", "Linux", "VSCode"] },
    { categoria: "Plataformas de Práctica", items: ["HackerRank", "LeetCode", "CodeWars"] }
  ];

  const educacion = [
    {
      titulo: "Estudiante técnico en Ingeniería de Software con IA",
      institucion: "SENATI",
      periodo: "2024 - 2026",
      logros: ["1mer semestre (completado)","2do semestre (completado)","3er semestre (completado)","4to semestre (completado)","5to semestre (actualmente)"]
    }
  ];

  const proyectos = [
    {
      nombre: "Sistema Licorería Huasca",
      descripcion: "Plataforma web completa para gestión de ventas con control de inventario, roles de usuario y sistema de machine learning para predicción de tendencias de consumo.",
      tecnologias: ["Python", "React", "MySQL", "Scikit-learn", "Docker"],
      enlace: "/licoreria",
      estado: "Completado"
    },
    {
      nombre: "Insure Perú SAC",
      descripcion: "Sistema integral de producción con control de calidad, gestión de insumos, cálculo de gramaje y sistema de alertas para fechas de vencimiento.",
      tecnologias: ["Go", "React", "MySQL", "Docker", "REST API"],
      enlace: "/insure",
      estado: "Completado"
    },
    {
      nombre: "Motiva+",
      descripcion: "Plataforma educativa con gamificación, sistema de recompensas, roles de estudiante/coach y tienda virtual para canje de puntos por beneficios.",
      tecnologias: ["Go", "React", "MySQL", "WebSockets", "Docker"],
      enlace: "/motiva",
      estado: "Completado"
    }
  ];

  const certificados = [
    {
      nombre: "Participación en Evento de Innovaciones Tecnológicas",
      institucion: "Centro de Formación Profesional Huancayo",
      fecha: "Octubre 2024",
      imagen: "",
      enlace: "/certificado"
    }
  ];

  const logros = ["Aprendizaje"];

  return (
    <div className={`cv-container ${darkMode ? 'dark-mode' : ''}`}>
      <header className="cv-header">
        <div className="header-content">
          <div className="header-top">
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Cambiar tema"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <button
              className="print-btn"
              onClick={() => window.print()}
              aria-label="Imprimir CV"
            >
              🖨️
            </button>
          </div>

          <div className="profile-section">
            <div className="profile-image-container">
              <img
                src={perfil}
                alt="Harold Gonzales - Desarrollador de Software"
                className="profile-image"
              />
            </div>
            <div className="profile-info">
              <h1>{personalInfo.nombre}</h1>
              <h2>{personalInfo.titulo}</h2>
              <div className="contact-info">
                <span>📧 {personalInfo.email}</span>
                <span>📱 {personalInfo.telefono}</span>
                <span>📍 {personalInfo.ubicacion}</span>
              </div>
              <div className="social-links">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">💻</span> GitHub
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">💼</span> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Navbar />

      <section id="sobre-mi" className="section">
        <h3>Sobre Mí</h3>
        <p className="sobre-mi-text">{personalInfo.sobreMi}</p>
        <div className="logros-grid">
          {logros.map((logro, index) => (
            <div key={index} className="logro-item">
              {logro}
            </div>
          ))}
        </div>
      </section>

      <section id="experiencia" className="section">
        <h3>Experiencia Profesional</h3>
        <div className="experiencia-list">
          {experiencia.map((exp, index) => (
            <div key={index} className="experiencia-item">
              <div className="experiencia-header">
                <h4>{exp.puesto}</h4>
                <span className="periodo">{exp.periodo}</span>
              </div>
              <h5>{exp.empresa}</h5>
              <p>{exp.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="proyectos" className="section">
        <h3>Proyectos Destacados</h3>
        <div className="proyectos-grid">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="proyecto-card">
              <div className="proyecto-content">
                <div className="proyecto-header">
                  <h4>{proyecto.nombre}</h4>
                  <span className={`estado ${proyecto.estado.toLowerCase().replace(' ', '-')}`}>
                    {proyecto.estado}
                  </span>
                </div>
                <p>{proyecto.descripcion}</p>
                <div className="tecnologias">
                  {proyecto.tecnologias.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <button 
                  onClick={() => navigate(proyecto.enlace)}
                  className="proyecto-link"
                >
                  Ver Detalles →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="habilidades" className="section">
        <h3>Habilidades Técnicas</h3>
        <div className="habilidades-grid">
          {habilidades.map((grupo, index) => (
            <div key={index} className="habilidad-grupo">
              <h4>{grupo.categoria}</h4>
              <div className="habilidades-list">
                {grupo.items.map((habilidad, idx) => (
                  <span key={idx} className="habilidad-tag">
                    {habilidad}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="certificaciones" className="section">
        <h3>Certificaciones</h3>
        <div className="certificados-grid">
          {certificados.map((cert, index) => (
            <div key={index} className="certificado-card">
              <h4>{cert.nombre}</h4>
              <p className="institucion">{cert.institucion}</p>
              <span className="fecha">{cert.fecha}</span>
              <button 
                onClick={() => navigate(cert.enlace)}
                className="certificado-link"
              >
                Ver Certificado ↗
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="educacion" className="section">
        <h3>Educación</h3>
        {educacion.map((edu, index) => (
          <div key={index} className="educacion-item">
            <h4>{edu.titulo}</h4>
            <h5>{edu.institucion}</h5>
            <span className="periodo">{edu.periodo}</span>
            {edu.logros && (
              <ul className="logros-list">
                {edu.logros.map((logro, idx) => (
                  <li key={idx}>{logro}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <footer className="cv-footer">
        <p>© 2025 {personalInfo.nombre}. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}