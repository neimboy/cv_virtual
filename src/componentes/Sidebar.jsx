import React, { useState, useEffect } from 'react';
import '../style/Sidebar.css';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [expanded, setExpanded] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { id: 'sobre-mi', icon: '👤', label: 'Sobre Mí' },
    { id: 'experiencia', icon: '💼', label: 'Experiencia' },
    { id: 'proyectos', icon: '🚀', label: 'Proyectos' },
    { id: 'habilidades', icon: '⚡', label: 'Habilidades' },
    { id: 'certificaciones', icon: '🏆', label: 'Certificaciones' },
    { id: 'educacion', icon: '🎓', label: 'Educación' },
  ];

  const handleItemClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  // Auto-colapsar en móviles
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setExpanded(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Ejecutar al cargar
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`sidebar ${expanded ? 'expand' : ''}`}>
      <button 
        className="sidebar-toggle" 
        onClick={toggleSidebar}
        aria-label={expanded ? "Contraer menú" : "Expandir menú"}
      >
        {expanded ? '←' : '☰'}
      </button>

      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`sidebar-item ${activeSection === item.id ? 'active' : ''}`}
          onClick={() => handleItemClick(item.id)}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="sidebar-icon">{item.icon}</div>
          <div className="sidebar-label">{item.label}</div>
          
          {!expanded && hoveredItem === item.id && (
            <div className="sidebar-tooltip">
              {item.label}
            </div>
          )}
        </div>
      ))}

      <div className="sidebar-footer">
        <div className="sidebar-theme-toggle" onClick={toggleSidebar}>
          {expanded ? '↪️' : '↩️'}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;