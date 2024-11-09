import React, { useState } from 'react';
import axios from 'axios';
import ItemCard from '../../components/ItemCard';
import '../../components/styles/Items.css';

const Items = () => {
  const [items, setItems] = useState([]);

  const fetchItems = () => {
    axios.get('https://catfact.ninja/fact')
      .then(response => setItems([response.data]))
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div>
      <h1>Items</h1>
      <button onClick={fetchItems}>Cargar Items</button>
      <div className="items-container">
        {items.map((item, index) => (
          <ItemCard key={index} item={item.fact} />
        ))}
      </div>
    </div>
  );
};

export default Items;
