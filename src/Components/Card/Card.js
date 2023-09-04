import React, { useState } from 'react';
import './Card.css'; // You should create a CSS file for styling

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="card-inner">
        <div className="card-front">
          <img src={require("./Images/card-front.png")} alt="Card Front" />
        </div>
        <div className="card-back">
          <img src={require("./Images/card-back.png")} alt="Card Back" />
        </div>
      </div>
    </div>
  );
};

export default Card;
