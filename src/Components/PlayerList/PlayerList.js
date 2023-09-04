import React, { useState, useEffect } from 'react';
import PlayerModal from './PlayerModal';
import axios from 'axios';
import './PlayerList.css'; // Import the PlayerList-specific CSS

const PlayerList = () => {
  const [playerList, setPlayerList] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    axios.get('/api/players').then(response => {
      const data = response.data
      setPlayerList(data)
    }).catch(error => {
      console.error('Error is:', error);
    })
  }, []);
  

  return (
    <div className="player-list-container">
      <h2>League of Legends Player Stats</h2>
      <ul className={`player-list ${selectedPlayer ? 'blur-background' : ''}`}>
        {playerList.map((player) => (
          <li
            key={player.id}
            onClick={() => {
                setSelectedPlayer(player)
            }}
            className="player-list-item"
          >
            <div className="player-item-content">
                {player.image_url ? (
                    <div className="player-image">
                        <img src={player.image_url} alt={`${player.first_name} ${player.last_name}`} />
                    </div>
                    ) : (
                    <div className="player-image">
                        <div className="player-placeholder">{player.name}</div>
                    </div>
                )}
              <div className="player-info">
                <h3>{player.first_name} "{player.name}" {player.last_name}</h3>
                <p>Nationality: {player.nationality}</p>
                <p>Role: {player.role}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {selectedPlayer && (
        <PlayerModal
          player={selectedPlayer}
          playerDetails={selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
        />
      )}
    </div>
  );
};

export default PlayerList;
