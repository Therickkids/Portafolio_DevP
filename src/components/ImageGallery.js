import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import Modal from './Modal';
import './ImageGallery.css';

const images = [
  {
    id: 1,
    src: 'https://www.mdscc.nasa.gov/wp-content/uploads/2022/06/1706_2rockyplanets1280.jpeg',
    alt: 'HD 260655 b RECIENTEMENTE DESCUBIERTO A 33 AÑOS DE LUZ',
  },
  {
    id: 2,
    src: 'https://wallpapers.com/images/featured/solar-5ipgdvokzr41z689.jpg',
    alt: 'SISTEMA SOLAR',
  },
  {
    id: 3,
    src: 'https://airandspace.si.edu/sites/default/files/styles/body_large/public/images/callouts/GPN-2001-000013h.jpg?itok=nkuoonww',
    alt: 'APOLO 11 LA PRIMERA MISION QUE LLEGO A LA LUNA',
  },
  {
    id: 4,
    src: 'https://futuroelectrico.com/wp-content/uploads/2020/09/1-Mision-a-Marte-Principal.jpg',
    alt: 'MISION A MARTE',
  },
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate(); // Define useNavigate

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToHome = () => {
    navigate('/image'); // Redirige a api
  };

  
  const goToAstronauta = () => {
    navigate('/mycomponent'); // Redirige a api
  };

  return (
    <div>
      <h2 className='txt'>Gallery</h2>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Rubik+Bubbles&family=Saira+Stencil+One&display=swap');
      </style>
      <div className="gallery-grid">
        {images.map((image) => (
          <figure key={image.id} className="gallery-item" onClick={() => openModal(image)}>
            <img src={image.src} alt={image.alt} />
          </figure>
        ))}
        <footer className='ind'>PRESIONA LAS IMAGENES</footer>
      </div>
      {selectedImage && (
        <Modal image={selectedImage} onClose={closeModal} />
      )}
      <button className='btnA' onClick={goToHome}>ASTRONOMY </button> {/* Botón para navegar a la Api Astronomia*/}
         <button className='btnN' onClick={goToAstronauta}>ASTRONAUTAS </button> {/* Botón para navegar a la Api Astronautas*/}
      <video className="back" muted autoPlay loop playsInline>
              <source src="./sisSolar.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
          </video>
    </div>
  );
};

export default ImageGallery;
