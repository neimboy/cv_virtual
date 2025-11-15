import React, { useState, useEffect } from "react";
import "../style/pagina.css";

// Importa las imágenes
import motiva1 from '../assets/motiva1.png';
import motiva2 from '../assets/motiva2.png';
import motiva3 from '../assets/motiva3.png';
import motiva4 from '../assets/motiva4.png';
import motiva5 from '../assets/motiva5.png';
import motiva6 from '../assets/motiva6.png';
import motiva7 from '../assets/motiva7.png';
import motiva8 from '../assets/motiva8.png';
import motiva9 from '../assets/motiva9.png';
import motiva10 from '../assets/motiva10.png';
import motiva11 from '../assets/motiva11.png';
import motiva12 from '../assets/motiva12.png';
import motiva13 from '../assets/motiva13.png';
import motiva14 from '../assets/motiva14.png';
import motiva15 from '../assets/motiva15.png';
import motiva16 from '../assets/motiva16.png';
import motiva17 from '../assets/motiva17.png';

const imagenes = [
  motiva1, motiva2, motiva3, motiva4, motiva5, motiva6, motiva7, motiva8,
  motiva9, motiva10, motiva11, motiva12, motiva13, motiva14, motiva15, motiva16, motiva17
];

export default function PaginaMotiva() {
  const [seleccion, setSeleccion] = useState(null);
  const [anguloRotacion, setAnguloRotacion] = useState(0);

  // Animación de rotación continua
  useEffect(() => {
    if (seleccion === null) {
      const intervalo = setInterval(() => {
        setAnguloRotacion(prev => (prev + 0.5) % 360);
      }, 50);
      return () => clearInterval(intervalo);
    }
  }, [seleccion]);

  const siguiente = () => {
    setSeleccion((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setSeleccion((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  // Manejo de teclado para mejor experiencia
  useEffect(() => {
    if (seleccion === null) return;

    const manejarTeclas = (e) => {
      if (e.key === "ArrowRight") siguiente();
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "Escape") setSeleccion(null);
    };

    window.addEventListener("keydown", manejarTeclas);
    return () => window.removeEventListener("keydown", manejarTeclas);
  }, [seleccion]);

  // Calcular posición circular para cada imagen
  const calcularPosicionCircular = (index, total, radio = 200) => {
    const angulo = (index / total) * 2 * Math.PI;
    const x = Math.cos(angulo) * radio;
    const y = Math.sin(angulo) * radio;
    return { x, y };
  };

  return (
    <div className="pagina motiva">
      {seleccion === null && (
        <div 
          className="contenedor-circular-motiva"
          style={{ transform: `rotate(${anguloRotacion}deg)` }}
        >
          {imagenes.map((img, i) => {
            const posicion = calcularPosicionCircular(i, imagenes.length, 180);
            return (
              <img
                key={i}
                src={img}
                alt={`Motiva screenshot ${i + 1}`}
                className="img-circular-motiva"
                onClick={() => setSeleccion(i)}
                style={{
                  transform: `translate(${posicion.x}px, ${posicion.y}px) rotate(-${anguloRotacion}deg)`
                }}
              />
            );
          })}
          <div className="centro-circular">
            <span>MOTIVA+</span>
            <small>Click en cualquier imagen</small>
          </div>
        </div>
      )}
      
      {seleccion !== null && (
        <div className="ventana">
          <img src={imagenes[seleccion]} alt="Captura seleccionada" className="imagen-activa" />
          <button className="flecha izquierda" onClick={anterior}>◀</button>
          <button className="flecha derecha" onClick={siguiente}>▶</button>
          <button className="cerrar" onClick={() => setSeleccion(null)}>✖</button>
          <div className="contador-imagenes">
            {seleccion + 1} / {imagenes.length}
          </div>
        </div>
      )}
    </div>
  );
}