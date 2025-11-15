import React, { useState } from "react";
import "../style/pagina.css";

// Importa todas las imágenes
import certificado1 from '../assets/certificado1.jpeg';
import certificado2 from '../assets/certificado2.jpeg';

const imagenes = [
  certificado1, certificado2
];

export default function PaginaCertificado() {
  const [seleccion, setSeleccion] = useState(null);

  const siguiente = () => {
    setSeleccion((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setSeleccion((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div className="pagina certificado">
      {seleccion === null && (
        <div className="rebotantes">
          {imagenes.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Certificado ${i + 1}`}
              className="img-rebote"
              onClick={() => setSeleccion(i)}
            />
          ))}
        </div>
      )}
      {seleccion !== null && (
        <div className="ventana">
          <img src={imagenes[seleccion]} alt="Certificado seleccionado" className="imagen-activa" />
          <button className="flecha izquierda" onClick={anterior}>◀</button>
          <button className="flecha derecha" onClick={siguiente}>▶</button>
          <button className="cerrar" onClick={() => setSeleccion(null)}>✖</button>
        </div>
      )}
    </div>
  );
}