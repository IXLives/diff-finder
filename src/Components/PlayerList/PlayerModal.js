import React, { useEffect } from 'react';
import './PlayerModal.css';

const PlayerModal = ({ player, playerDetails, onClose }) => {
  useEffect(() => {
    // Add an event listener to the modal overlay to close the modal when clicked outside
    const handleOutsideClick = (event) => {
      if (event.target === document.querySelector('.player-modal-overlay')) {
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
        <div className="team-info">
          <p>Team: {playerDetails.current_team.name}</p>
          <img src={playerDetails.current_team.image_url} alt={`${playerDetails.current_team.name} Logo`} />
        </div>
        <div className="player-stats">
          <h4>Stats</h4>
          <p>Kills: {player.averages.kill_counters.players}</p>
          <p>Assists: {player.averages.assists}</p>
          <p>CS diff @ 14: {player.averages.cs_diff_at_14}</p>
          <p>Deaths: {player.averages.deaths}</p>
          {/* You can add more stats here */}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PlayerModal;
