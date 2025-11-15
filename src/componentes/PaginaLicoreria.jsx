import React, { useState, useEffect } from "react";
import "../style/pagina.css";

// Importa las imágenes
import licoreria1 from '../assets/licoreria1.png';
import licoreria2 from '../assets/licoreria2.png';
import licoreria3 from '../assets/licoreria3.png';
import licoreria4 from '../assets/licoreria4.png';
import licoreria5 from '../assets/licoreria5.png';
import licoreria6 from '../assets/licoreria6.png';

const imagenes = [
  licoreria1, licoreria2, licoreria3,
  licoreria4, licoreria5, licoreria6
];

export default function PaginaLicoreria() {
  const [indice, setIndice] = useState(0);
  const [ventanaAbierta, setVentanaAbierta] = useState(false);
  const [error, setError] = useState(null);

  console.log("🎯 PaginaLicoreria montado - Imagen actual:", imagenes[indice]);

  useEffect(() => {
    console.log("⏰ Slideshow iniciado");
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % imagenes.length);
    }, 4000);

    return () => {
      console.log("🧹 Slideshow limpiado");
      clearInterval(intervalo);
    };
  }, []);

  // Test de carga de imágenes
  useEffect(() => {
    imagenes.forEach((img, i) => {
      const image = new Image();
      image.onload = () => console.log(`✅ Imagen ${i} cargada:`, img);
      image.onerror = () => {
        console.error(`❌ Error cargando imagen ${i}:`, img);
        setError(`Error con imagen ${i}`);
      };
      image.src = img;
    });
  }, []);

  const cambiarImagen = (dir) => {
    setIndice((prev) =>
      dir === "next"
        ? (prev + 1) % imagenes.length
        : (prev - 1 + imagenes.length) % imagenes.length
    );
  };

  if (error) {
    return (
      <div className="pagina">
        <div style={{color: 'red', textAlign: 'center', padding: '20px'}}>
          <h2>Error cargando imágenes</h2>
          <p>{error}</p>
          <p>Verifica que las imágenes existan en: src/assets/</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pagina">
      <div style={{
        position: 'absolute', 
        top: '10px', 
        left: '10px', 
        background: 'rgba(255,0,0,0.8)', 
        color: 'white', 
        padding: '10px',
        borderRadius: '5px',
        zIndex: 100
      }}>
        DEBUG: PaginaLicoreria - Imagen {indice + 1}/6
      </div>

      {!ventanaAbierta ? (
        <div
          className="slideshow"
          onClick={() => {
            console.log("🖱️ Abriendo ventana modal");
            setVentanaAbierta(true);
          }}
          style={{
            backgroundImage: `url(${imagenes[indice]})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '25px',
            fontSize: '16px'
          }}>
            🖱️ Clic para ver galería
          </div>
        </div>
      ) : (
        <div className="ventana">
          <button className="cerrar" onClick={() => setVentanaAbierta(false)}>✖</button>

          <img
            src={imagenes[indice]}
            alt={`Licorería vista ${indice + 1}`}
            className="imagen-activa"
          />

          <button className="flecha izquierda" onClick={() => cambiarImagen("prev")}>◀</button>
          <button className="flecha derecha" onClick={() => cambiarImagen("next")}>▶</button>
        </div>
      )}
    </div>
  );
}