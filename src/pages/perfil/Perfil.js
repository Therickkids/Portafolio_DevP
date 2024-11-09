import React from 'react';
import '../../components/styles/Perfil.css';

const Perfil = () => (
  <div className="perfil-wrapper">
    <video className="back" muted autoPlay loop playsInline>
      <source src="./perfilImg.mp4" type="video/mp4" />
      Tu navegador no soporta el video.
    </video>
    <div className="perfil-container">
       <style>
            @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Rubik+Bubbles&family=Saira+Stencil+One&display=swap');
       </style>
       <style>
       @import url('https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&family=Funnel+Display:wght@300..800&family=Poiret+One&display=swap');
      </style>
      <section className="skills-section">
        <h2 className='txtH'>Mis Habilidades</h2>
        <ul className="skills-list">
          <li>Java</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML & CSS</li>
          <li>Php</li>
          <li>C# (.NET)</li>
          <li>Arduino</li>
          <li>Base De Datos Mysql</li>
          {/* Añade más habilidades o conocimientos aquí */}
        </ul>
      </section>
    </div>
  </div>
);

export default Perfil;
