import React, { useState } from 'react';
import cardImg from '../assets/agregat.png';

function Card({ price, title }) {
  // Početna vrednost cene je broj koji dolazi iz price prop-a
  const [totalPrice, setTotalPrice] = useState(Number(price));  // Ukupna cena

  const increase = () => {
    setTotalPrice(prev => prev + 1);  // Svaki put dodajemo 1 na ukupnu cenu
  };

  const decrease = () => {
    setTotalPrice(prev => (prev > 0 ? prev - 1 : prev));  // Svaki put oduzimamo 1 od ukupne cene
  };

  return (
    <div className="card">
      <h2 className="card_title">{title}</h2>
      <img src={cardImg} alt="card_image" className="card_img" />

      <h3 className="card_price">Cena po komadu: {price = totalPrice}$</h3>
      

      <div className="card_counter">
        <button onClick={decrease} className="card_counter_decrease">-</button>
        <p>{totalPrice}</p>  {/* Prikazujemo ukupnu cenu */}
        <button onClick={increase} className="card_counter_increase">+</button>
      </div>
    </div>
  );
}

export default Card;
