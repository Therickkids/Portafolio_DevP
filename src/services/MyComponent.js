import React, { useEffect, useState } from "react";

function MyComponent() {
  const [astronauts, setAstronauts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getAstronauts() {
      try {
        const response = await fetch("http://api.open-notify.org/astros.json");
        const data = await response.json();
        setAstronauts(data.people); // 'people' contiene la lista de astronautas
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getAstronauts();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Astronautas en el Espacio</h1>
      <p>Total de astronautas en el espacio: {astronauts.length}</p>
      <ul>
        {astronauts.map((astronaut, index) => (
          <li key={index}>{astronaut.name} - {astronaut.craft}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;
