import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../components/styles/About.css';

const About = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };
  
  const goToLink = (url) => {
    window.location.href = url;
  };

  return (
    <div className="about-container">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Rubik+Bubbles&family=Saira+Stencil+One&display=swap');
      </style>
      <h1 className="about-title">About Us</h1>
      <p className="about-description">Somos un equipo dedicado a explorar el cosmos y traer lo mejor de la astronomía a tu alcance. Nuestro objetivo es inspirar y educar a través de la maravilla del espacio.</p>
      <div className="about-buttons">
        <button className="btn" onClick={goToHome}>Home</button>
        <button className="btn" onClick={() => navigate('/contact')}>Contacto</button>
        <button className="btn" onClick={() => navigate('/imagegallery')}>Gallery</button>
      </div>
      <div className="about-interactive">
      
        <h2 className="about">Interact with the Cosmos</h2>
        <p>Click the buttons below to learn more about our universe.</p>
        <div className="interactive-buttons">
          <button className="interactive-btn" onClick={() => goToLink('https://www.nationalgeographic.es/espacio/que-sabes-estrellas#:~:text=Las%20estrellas%20son%20motores%20de,materia%20compuesta%20de%20part%C3%ADculas%20subat%C3%B3micas.')}>Stars</button>
          <button className="interactive-btn" onClick={() => navigate('/calculo')}>Planetas</button>
          <button className="interactive-btn" onClick={() => goToLink('https://spaceplace.nasa.gov/galaxy/sp/#:~:text=Una%20galaxia%20es%20un%20conjunto,negro%20supermasivo%20en%20el%20medio.')}>Galaxies</button>
        </div>
      </div>
      <video className='video-background'muted autoPlay loop playsInline>
              <source src="./about.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
          </video>
    </div>
  );
};

export default About;
