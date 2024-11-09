// src/pages/home/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../components/styles/Home.css';




const Home = () => {
  const navigate = useNavigate();

  const goToFooter = () => {
    navigate('/footer'); // Redirige a la ruta del Footer

    
  };
  const goToAbout = () =>{
    navigate ('/about');


};

const goToContact = () =>{
    navigate ('/contact');


};

const goToPerfil = () =>{
    navigate ('/perfil');


};

const goToPlanet =() =>{
    navigate ('/calculo');
}

const goToImageGallery =() =>{
  navigate ('/imagegallery');
}

  



/*Astronomy Picture of the Day*/

return (
    <div className='body'>
      <style>
            @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Rubik+Bubbles&family=Saira+Stencil+One&display=swap');
      </style>
      <h1 className='text'>BIENVENIDOS A MI PORTAFOLIO </h1>
      <div className='button-container'>    
        
        <button onClick={goToPerfil}>Perfil</button>
        <button onClick={goToContact}>Contacto</button>
        <button onClick={goToPlanet}>Planets</button>
        <button onClick={goToImageGallery}>Gallery</button>
        <button onClick={goToFooter}>©INC</button>
        <button onClick={goToAbout}>About</button>
        
        
      </div>
          <video className="back" muted autoPlay loop playsInline>
              <source src="./tierra.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
          </video>
    </div>
   
  );
  

};

export default Home;
