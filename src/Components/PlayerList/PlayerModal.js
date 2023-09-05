import React, { useEffect } from 'react';
import './PlayerModal.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

useEffect(() => {
  // Add an event listener to the modal overlay to close the modal when clicked outside
  const handleOutsideClick = (event) => {
    if (event.target === document.querySelector('.player-modal-overlay')) {
      onClose();
    }
  };

  // Add an event listener to the modal content to close the modal when clicked inside
  const handleModalClick = (event) => {
    if (event.target === document.querySelector('.player-modal')) {
      onClose();
    }
  };

  // Attach the event listeners when the modal is mounted
  document.addEventListener('mousedown', handleOutsideClick);
  document.addEventListener('mousedown', handleModalClick);

  // Cleanup the event listeners when the modal is unmounted
  return () => {
    document.removeEventListener('mousedown', handleOutsideClick);
    document.removeEventListener('mousedown', handleModalClick);
  };
}, [onClose]);


  return (
    <div className="player-modal-overlay">
      <div className="player-modal">
        <div className="player-info">
          <h3>{playerDetails.first_name} "{playerDetails.name}" {playerDetails.last_name}</h3>
            {playerDetails.image_url ? (
                <div className="player-image">
                    <img src={playerDetails.image_url} alt={`${playerDetails.first_name} ${playerDetails.last_name}`} />
                </div>
                ) : (
                <div className="player-image">
                    <div className="player-placeholder">{playerDetails.name}</div>
                </div>
            )}
          <p>Role: {playerDetails.role}</p>
        </div>
        <div className="player-info">
          <p>Team: {playerDetails.current_team.name}</p>
          <img src={playerDetails.current_team.image_url} alt={`${playerDetails.current_team.name} Logo`} />
        </div>
        <div className="player-stats-modal">
          <h4>Stats</h4>
          <p>Kills: {getRandomInt(20)}</p>
          <p>Assists: {getRandomInt(40)}</p>
          <p>CS diff @ 14: {getRandomInt(10000)}</p>
          <p>Deaths: {getRandomInt(20)}</p>
          {/* You can add more stats here */}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PlayerModal;
