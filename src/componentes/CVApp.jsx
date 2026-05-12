import React, { useState, useRef, useEffect, useCallback } from 'react';
import TimelineBar from './layout/TimelineBar';
import CVHeader from './layout/CVHeader';
import PerfilSeccion from './secciones/PerfilSeccion';
import ExperienciaSeccion from './secciones/ExperienciaSeccion';
import EducacionSeccion from './secciones/EducacionSeccion';
import ObjetivosSeccion from './secciones/ObjetivosSeccion';

const SECCIONES = {
  perfil:      PerfilSeccion,
  experiencia: ExperienciaSeccion,
  educacion:   EducacionSeccion,
  objetivos:   ObjetivosSeccion,
};

const CVApp = () => {
  const [activeSection, setActiveSection] = useState('perfil');
  const mainRef = useRef(null);

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const handleNavigate = useCallback((sectionId) => {
    setActiveSection(sectionId);
  }, []);

  const ActiveComponent = SECCIONES[activeSection] ?? null;

  return (
    <div className="cv-wrapper">
      <CVHeader />

      <main className="cv-main" ref={mainRef}>
        {ActiveComponent && <ActiveComponent />}
      </main>

      <TimelineBar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default CVApp;