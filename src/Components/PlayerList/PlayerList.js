import React, { useState, useEffect } from 'react';
import PlayerModal from './PlayerModal';
import './PlayerList.css'; // Import the PlayerList-specific CSS

const PlayerList = () => {
  const [playerList, setPlayerList] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [playerSlug, setPlayerSlug] = useState(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await fetch(
          'https://api.pandascore.co/lol/players?Page[Size]=100',
          {
            method: 'GET',
            headers: {
              Authorization: 'Bearer 0Dal78X-4JNj592dV1BLVtRQLRjohRxVUhWXO2qq2EV4S0VKtWQ',
            },
          }
        );
  
        if (!response.ok) {
          throw new Error('Failed to fetch player data');
        }
  
        const data = await response.json();
        setPlayerList(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchPlayerData();
  }, []);

  const getPlayerInfo = async (slug) => {
    try {
      const response = await fetch(
        `https://api.pandascore.co/lol/players/${slug}/stats`,
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer 0Dal78X-4JNj592dV1BLVtRQLRjohRxVUhWXO2qq2EV4S0VKtWQ',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch player data');
      }

      const data = await response.json();
      setPlayerList(data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="player-list-container">
      <h2>League of Legends Player Stats</h2>
      <ul className={`player-list ${selectedPlayer ? 'blur-background' : ''}`}>
        {playerList.map((player) => (
          <li
            key={player.id}
            onClick={() => {
                setSelectedPlayer(player)
                setPlayerSlug(player.slug)
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
          player={getPlayerInfo(playerSlug)}
          playerDetails={selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
        />
      )}
    </div>
  );
};

export default PlayerList;
