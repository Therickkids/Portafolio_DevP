// src/components/ItemCard.js
import React from 'react';
import '../components/styles/Items.css'; // Cambiar a esta ruta correcta

const ItemCard = ({ item }) => (
  <div className="item-card">
    <h2>{item.name}</h2>
    <p>{item.description}</p>
  </div>
);

export default ItemCard;
