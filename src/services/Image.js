import React, { useEffect, useState } from "react";
import '../services/styles/Image.css';


function Image() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getImage() {
      try {
        const response = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        );
        const data = await response.json();
        setImage(data.url); // URL de la imagen
        setTitle(data.title); // Título de la imagen
        setExplanation(data.explanation); // Explicación de la imagen
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getImage();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
       <style>
            @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Rubik+Bubbles&family=Saira+Stencil+One&display=swap');
      </style>
      <h1 className="title">{title}</h1>
      {image && <img src={image} alt={title} style={{ width: "100%", maxWidth: "600px" }} />}
      <p className="txtExp">{explanation}</p>
      <video className="back" muted autoPlay loop playsInline>
            <source src="./backimage.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
        </video>
    </div>
  );
}

export default Image;
