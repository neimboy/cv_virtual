import React, { useState, useEffect } from "react";
import "../style/pagina.css";

// Importa todas las imágenes
import insure1 from '../assets/insure1.png';
import insure2 from '../assets/insure2.png';
import insure3 from '../assets/insure3.png';
import insure4 from '../assets/insure4.png';
import insure5 from '../assets/insure5.png';
import insure6 from '../assets/insure6.png';
import insure7 from '../assets/insure7.png';
import insure8 from '../assets/insure8.png';
import insure9 from '../assets/insure9.png';
import insure10 from '../assets/insure10.png';

const imagenes = [
  insure1, insure2, insure3, insure4, insure5,
  insure6, insure7, insure8, insure9, insure10
];

export default function PaginaInsure() {
  const [seleccion, setSeleccion] = useState(null);

  const siguiente = () => {
    setSeleccion((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setSeleccion((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  // --- Manejo de teclado ---
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

  return (
    <div className="pagina insure">
      
      {/* ANIMACIÓN INICIAL */}
      {seleccion === null && (
        <div className="animacion-circular">
          {imagenes.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Insure screenshot ${i + 1}`}
              className="img-circular"
              onClick={() => setSeleccion(i)}
            />
          ))}
        </div>
      )}

      {/* VENTANA DE IMAGEN AMPLIADA */}
      {seleccion !== null && (
        <div className="ventana">
          <img
            src={imagenes[seleccion]}
            alt="Captura seleccionada"
            className="imagen-activa"
          />

          <button className="flecha izquierda" onClick={anterior}>◀</button>
          <button className="flecha derecha" onClick={siguiente}>▶</button>
          <button className="cerrar" onClick={() => setSeleccion(null)}>✖</button>
        </div>
      )}
    </div>
  );
}