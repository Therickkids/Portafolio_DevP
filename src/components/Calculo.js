import React, { useState } from 'react';
import './styles/Calculo.css';


const Calculo = () => {
  const [planet, setPlanet] = useState('earth');
  const [videoSrc, setVideoSrc] = useState('/tierra2.mp4'); // Ruta directa en 'public'

  const planetData = {
    mercury: {
      name: 'Mercurio',
      distance: '57.91 millones de km',
      temperature: '167°C a -173°C',
      diameter: '4,879 km',
      dayDuration: '58.6 días terrestres',
      composition: 'Rocoso, sin atmósfera significativa',
      video: '/mercurio.mp4',
    },
    venus: {
      name: 'Venus',
      distance: '108.2 millones de km',
      temperature: '462°C',
      diameter: '12,104 km',
      dayDuration: '116.75 días terrestres',
      composition: 'Rocoso, atmósfera densa de CO2',
      video: '/venus.mp4',
    },
    earth: {
      name: 'Tierra',
      distance: '149.6 millones de km',
      temperature: '15°C (promedio)',
      diameter: '12,742 km',
      dayDuration: '24 horas',
      composition: 'Rocoso, atmósfera rica en oxígeno',
      video: '/tierra2.mp4',
    },
    mars: {
      name: 'Marte',
      distance: '227.9 millones de km',
      temperature: '-60°C (promedio)',
      diameter: '6,779 km',
      dayDuration: '24.6 horas',
      composition: 'Rocoso, atmósfera fina de CO2',
      video: '/marte.mp4',
    },
    jupiter: {
      name: 'Júpiter',
      distance: '778.5 millones de km',
      temperature: '-145°C',
      diameter: '139,820 km',
      dayDuration: '9.9 horas',
      composition: 'Gigante gaseoso, atmósfera de hidrógeno y helio',
      video: '/jupiter.mp4',
    },
    saturn: {
      name: 'Saturno',
      distance: '1,429 millones de km',
      temperature: '-178°C',
      diameter: '116,460 km',
      dayDuration: '10.7 horas',
      composition: 'Gigante gaseoso, atmósfera de hidrógeno y helio',
      video: '/saturno.mp4',
    },
    uranus: {
      name: 'Urano',
      distance: '2,871 millones de km',
      temperature: '-224°C',
      diameter: '50,724 km',
      dayDuration: '17.2 horas',
      composition: 'Gigante gaseoso, atmósfera de hidrógeno y helio',
      video: '/urano.mp4',
    },
    neptune: {
      name: 'Neptuno',
      distance: '4,495 millones de km',
      temperature: '-218°C',
      diameter: '49,244 km',
      dayDuration: '16.1 horas',
      composition: 'Gigante gaseoso, atmósfera de hidrógeno y helio',
      video: '/neptuno.mp4',
    },
  };

  const handlePlanetChange = (event) => {
    const selectedPlanet = event.target.value;
    setPlanet(selectedPlanet);
    setVideoSrc(planetData[selectedPlanet].video); // Cambia la URL del video de fondo
  };

  const data = planetData[planet];

  return (
    <div className="body">
      {/* Reproductor de video */}
      <div className="video-player">
        <video  className="back"  src={videoSrc}  muted autoPlay loop playsInline type="video/mp4">
          Tu navegador no soporta el video.
        </video>
        
      </div>

      {/* Contenido de la página */}
      <div className="content">
        <h1 className='txtP'>Planetas</h1>
        <style>
       @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Bungee+Spice&family=Diphylleia&family=Rubik+Bubbles&family=Saira+Stencil+One&display=swap');
      </style>

        <div className="planet-selector">
          <label htmlFor="planet">Selecciona un planeta:</label>
          <select id="planet" value={planet} onChange={handlePlanetChange}>
            {Object.keys(planetData).map((planetKey) => (
              <option key={planetKey} value={planetKey}>
                {planetData[planetKey].name}
              </option>
            ))}
          </select>
        </div>

        <div className="planet-info">
          <h2>{data.name}</h2>
          <p><strong>Distancia al Sol:</strong> {data.distance}</p>
          <p><strong>Temperatura promedio:</strong> {data.temperature}</p>
          <p><strong>Diámetro:</strong> {data.diameter}</p>
          <p><strong>Duración del día:</strong> {data.dayDuration}</p>
          <p><strong>Composición:</strong> {data.composition}</p>
          <br></br>
          
          <p className='acce'> DEZLIZA HORIZONTALMENTE EL TOUCHPAD PARA SALIR </p>
        </div>
      </div>
    </div>
  );
};

export default Calculo;
