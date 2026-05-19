import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SeccionCard from '../SeccionCard';

const ExperienciaSeccion = ({ sectionRef }) => {
  const navigate = useNavigate();
  const [expandedProject, setExpandedProject] = useState(null);

  const proyectos = [
      
    {
      id: 1,
      nombre: 'Farmacia SamaLice',
      descripcion: 'Sistemade gestion para Farmacia que se encarga de realizar el control de ventas, inventario y entrega comprobantes de pago fisicos mediante una impresora Termica.',
      tecnologias: ['Go', 'SQLite', 'React','vite', 'pawerbi'],
      detalles: [
        'control de Usurios con autenticacion y autorizacion',
        'reporten mediante graficos de ventas y stock',
        'Generación de reportes PDF',
        'entrega de comprobantes de pago fisicos mediante una impresora Termica',
        'Control de inventario en tiempo real',
        'control de fechas de vencimiento de productos',
        'sitema que tambien compruba egresos y ganancias para el negocio'
      ],
      color: '#a0b910'
    },
    {
      id: 2,
      nombre: 'Motiva +',
      descripcion: 'Sistema para alumnos de motivacion y seguimiento academico con reportes graficos y prediccion de ventas futuras.',
      tecnologias: ['Go', 'PostgreSQL', 'React'],
      detalles: [
        'control de Usurios con autenticacion y autorizacion',
        'tienda de recompensas con puntaje y canje de premios por completar tareas y objetivos que plantea un coach',
        'Generación de reportes PDF',
        'Espacio donde los alumnos pueden compartir sus logros y motivarse entre ellos y poner alguna situacion que les aqueja o ideas',
        'Crud la parte de coach para elimianr editar y crear publicaciones'
      ],
      color: '#a0b910'
    },
    {
      id: 3,
      nombre: 'Licoreria huasca YML',
      descripcion: 'Sistema completo de gestión de ventas e inventario con generación de reportes.',
      tecnologias: ['python', 'SQLite', 'React'],
      detalles: [
        'control de Usurios con autenticacion y autorizacion',
        'reporten mediante graficos de ventas y stock',
        'Generación de reportes PDF',
        'Control de inventario en tiempo real',
        'implementacion de machine learning para predecir ventas futuras'
      ],
      color: '#10b981'
    },
    {
      id: 4,
      nombre: 'Insure Peru SAC',
      descripcion: 'Aplicación web para gestión de compras y stock en empresa de insumos comestibles.',
      tecnologias: ['Go', 'MySql', 'React'],
      detalles: [
        'Arquitectura monolitica con modulos',
        'Diseño responsive avanzado',
        'Optimización de rendimiento',
        'CI/CD con Docker',
        'Desarrollo de API REST'
      ],
      color: '#6366f1'
    }
  ];

  return (
    <div className="column column--experiencia" ref={sectionRef}>
      
      {/* EXPERIENCIA PROFESIONAL */}
      <SeccionCard className="experience-card">
        <div className="experience-header">
          <h3>
            <span className="section-icon"></span> 
            Experiencia Laboral
          </h3>
          <span className="experience-tag">Actual</span>
        </div>
        
         <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h4>  freelancer </h4>
              <span className="timeline-date"> marzo del 2026 - actualidad </span>
            </div>
            <p className="empresa"> variadas </p>
            <ul className="achievement-list">
              <li> creacion de API (Interfaz de Programación de Aplicaciones) para sistemas diversos  </li>
              <li> creacion de arquitecturas </li>
              <li> desarrollo de software para clientes diversos </li>
              <li> desarrollo de base de datos para sistemas diversos </li>
              <li> estudio de sistema para realizar documentacion y seguimiento</li>

            </ul>
          </div>
        </div>
        
         <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h4>Empresa cats mae </h4>
              <span className="timeline-date"> junio del 2023 - febrero del 2025 </span>
            </div>
            <p className="empresa"> Ventas y taller  </p>
            <ul className="achievement-list">
              <li> ventas de productos comerciales y atención al cliente</li>
              <li> confeccion de prendas vestir y trabajo </li>
              <li><p>informacion de contacto: 994 646 241 </p></li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              

              <h4>Tienda Stefy </h4>
              <span className="timeline-date"> enero del 2022 - julio del 2022</span>
            </div>
            <p className="empresa"> Ventas </p>
            <ul className="achievement-list">
              <li> ventas de productos comerciales y atención al cliente</li>

              <li><p>informacion de contacto: 901 439 366</p></li>
         
            </ul>
          </div>
        </div>
      </SeccionCard>

      

      {/* EXPERIENCIA PRE-PROFESIONAL */}
      <SeccionCard>
        <h3>
          <span className="section-icon"></span> 
          Experiencia Pre-Profesional
        </h3>
        
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h4>Desarrollador Web </h4>
              <span className="timeline-date"> febrero 2026 - actualidad </span>
            </div>
            <p className="empresa"> ERP - node </p>
            <ul className="achievement-list">
              <li><p>Desarrollo de un sistema ERP (Enterprise Resource Planning o 
                Planificación de Recursos Empresariales).</p> </li>
              <li><p>Integra y centraliza los procesos clave de una empresa—como finanzas, 
                inventario, ventas y recursos humanos—en una sola plataforma.</p></li>
              <li>Tecnologias utilizadas: mysql, laravel, docker y windows</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h4> Desarrollar de aplicacion web</h4>
              <span className="timeline-date">julio 2025 - diciembre 2025 </span>
            </div>
            <p className="empresa"> Insure Peru SAC </p>
            <ul className="achievement-list">
              <li><p>Desarrollo de aplicacion web para la empresa que se dedica
                a la venta de productos para realizar insumos comestibles</p></li>
              <li><p>Aplicacion web desepeña el rol de la compra de insumos para poder realizar productos que
                 saldran a la venta, control de ususarios, control de stock, vista para publico general 
                  este pueda pedir en linea los productos como en tienda local.</p></li>
              <li><p>Tecnologias que se utilizaron: Go, mysql, react , docker , linux y protocolo norma ISO/IEC 27001:2022 que garantisa: confidencialidad, integridad y disponibilidad, 
                exigiendo controles técnicos, organizativos y físicos en todo el ciclo de vida del software</p></li>
            </ul>
          </div>
        </div>

      </SeccionCard>

      {/* PROYECTOS DESTACADOS */}
      <SeccionCard>
        <h3>
          <span className="section-icon">🧩</span> 
          Proyectos Destacados
        </h3>

        {proyectos.map((proyecto) => (
          <div 
            key={proyecto.id} 
            className="project-card"
            style={{ borderLeftColor: proyecto.color }}
          >
            <div className="project-header">
              <h4>{proyecto.nombre}</h4>
              <button 
                className="btn-expand"
                onClick={() => setExpandedProject(expandedProject === proyecto.id ? null : proyecto.id)}
                aria-label={expandedProject === proyecto.id ? 'Colapsar detalles' : 'Expandir detalles'}
              >
                {expandedProject === proyecto.id ? '▲' : '▼'}
              </button>
            </div>
            <p>{proyecto.descripcion}</p>
            
            <div className="project-tags">
              {proyecto.tecnologias.map((tech) => (
                <span key={tech} className="project-tag">{tech}</span>
              ))}
            </div>

            {expandedProject === proyecto.id && (
              <div className="project-details">
                <h5>Características principales:</h5>
                <ul className="project-features">
                  {proyecto.detalles.map((detalle, idx) => (
                    <li key={idx}>{detalle}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        <button
          className="btn btn-projects"
          onClick={() => navigate('/proyecto/insure')}
        >
           Ver Galería Completa de Proyectos
        </button>
      </SeccionCard>
    </div>
  );
};

export default ExperienciaSeccion;