import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Footer.css'; // Asegúrate de que Footer.css esté en la misma carpeta que Footer.js




const Footer  = () => {
    const navigate = useNavigate();

const goToHome = () =>{
    navigate ('/');

    
};


  return (
    <footer className='body'>
            <h1>Julian Manrique Cuervo </h1>
        <p>© 2023 My React App</p>
        <button className="btn" onClick={goToHome}>Home</button>
        
        </footer>
    );


    }


export default Footer;
