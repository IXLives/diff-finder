import React, { useState } from 'react';
import './Card.css'; // Your CSS file for styling

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="card-inner">
        <div className="card-front">
          <img
            src={window.innerWidth > 768 ? require('./Images/card-front.png') : require('./Images/card-front-vert.png')}
            alt="Card Front"
          />
        </div>
        <div className="card-back">
          <img
            src={window.innerWidth > 768 ? require('./Images/card-back.png') : require('./Images/card-back-vert.png')}
            alt="Card Back"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
