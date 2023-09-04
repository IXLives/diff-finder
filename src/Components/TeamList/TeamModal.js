import React, { useEffect } from 'react';
import './TeamModal.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const TeamModal = ({ team, teamDetails, onClose }) => {
  useEffect(() => {
    // Add an event listener to the modal overlay to close the modal when clicked outside
    const handleOutsideClick = (event) => {
      if (event.target === document.querySelector('.team-modal-overlay')) {
        onClose();
      }
    };

    // Attach the event listener when the modal is mounted
    document.addEventListener('mousedown', handleOutsideClick);

    // Cleanup the event listener when the modal is unmounted
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="team-modal-overlay">
      <div className="team-modal">
        <div className="team-info">
          <h3>{teamDetails.location} "{teamDetails.acronym}" {teamDetails.name}</h3>
            {teamDetails.image_url ? (
                <div className="team-image">
                    <img src={teamDetails.image_url} alt={`${teamDetails.acroynm}`} />
                </div>
                ) : (
                <div className="team-image">
                    <div className="team-placeholder">{teamDetails.acronym}</div>
                </div>
            )}
        </div>
        <div className="team-info">
          <h2>Roster</h2>
          <div className="team-roster">
          {teamDetails.players.map((player, index) => (
              <div key={index} className="player">
                {player.image_url ? (
                  <div className="player-image">
                    <img src={player.image_url} alt={player.name} />
                  </div>
                ) : (
                  <div className="player-image">
                    <div className="player-placeholder">{player.name}</div>
                  </div>
                )}
                <div className="player-details">
                  <p>Name: {player.first_name} {player.last_name}</p>
                  <p>Role: {player.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TeamModal;
