import React, { useState } from 'react';
import personaicono from '../../assets/imagenes/personaicono.png';
import trabajoicono from '../../assets/imagenes/trabajoicono.png';
import educacionicono from '../../assets/imagenes/educacionicono.png';
import objetivoicono from '../../assets/imagenes/objetivos.png';

const TABS = [
  { id: 'perfil',      label: 'Perfil',       icono: personaicono,   emoji: '👤' },
  { id: 'experiencia', label: 'Experiencia',  icono: trabajoicono,   emoji: '💼' },
  { id: 'educacion',   label: 'Educación',    icono: educacionicono, emoji: '🎓' },
  { id: 'objetivos',   label: 'Objetivos',    icono: objetivoicono,  emoji: '🎯' },
];

const TabIcon = ({ icono, label, emoji }) => {
  const [imgFailed, setImgFailed] = useState(false);

  if (imgFailed) {
    return <span className="tab-emoji-fallback" aria-hidden="true">{emoji}</span>;
  }

  return (
    <img
      src={icono}
      alt=""
      aria-hidden="true"
      className="tab-icono"
      onError={() => setImgFailed(true)}
    />
  );
};

const TimelineBar = ({ activeSection, onNavigate }) => (
  <nav className="tab-bar no-print" aria-label="Navegación de secciones del CV">
    {TABS.map(tab => (
      <button
        key={tab.id}
        className={`tab-btn ${activeSection === tab.id ? 'tab-btn--active' : ''}`}
        onClick={() => onNavigate(tab.id)}
        aria-label={`Ir a sección ${tab.label}`}
        aria-current={activeSection === tab.id ? 'page' : undefined}
        title={tab.label}
      >
        <TabIcon icono={tab.icono} label={tab.label} emoji={tab.emoji} />
        <span className="tab-label">{tab.label}</span>
      </button>
    ))}
  </nav>
);

export default TimelineBar;