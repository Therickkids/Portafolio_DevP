import React from 'react';
import '../../components/styles/Contact.css';
 // Asegúrate de que Contact.css esté en la misma carpeta que Contact.js

 

function Contact() {

    
    return (
      <footer className="footer" id="Contacto">
        <div className="footerTextContainer">
  
        <img src="./email.gif" alt="Pais Icon" className="footerEmail" />
          <p className="footerText">manrriquejulian163@gmail.com</p>
          <br></br>
          <br></br>
          <img src="./bandera.gif" alt="Pais Icon" className="footerBan" />
          <p className="footerText">Latino América - Colombia (Medellín)</p>
          <br></br>
          <br></br>
          <img src="./contact.png" alt="Contacto Icon" className="footerIcon" />
          <p className="footerText">+57 3148596802</p>
        
          <a href="https://github.com/Therickkids?tab=repositories" target="_blank" rel="noopener noreferrer" className="github-link">
          <img src="./gitHub.png" alt="Git Hub Icon" className="GitHubIcon" />
          <span className="github-text">Visita mi GitHub</span>
          </a>



         
         
        </div>
        
        <video className="marte" muted autoPlay loop playsInline>
          <source src="./contacto4.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      
      </footer>
    );

    
  }

export default Contact;
