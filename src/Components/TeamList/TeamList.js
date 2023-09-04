import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeamModal from './TeamModal';
import './TeamList.css'; // Import the TeamList-specific CSS

const TeamList = () => {
  const [teamList, setTeamList] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/'+'https://api.pandascore.co/lol/teams?Page[Size]=100', {
      headers: {
        'Authorization': 'Bearer 0Dal78X-4JNj592dV1BLVtRQLRjohRxVUhWXO2qq2EV4S0VKtWQ',
        'Content-Type': 'application/json'
      }}).then(response => {
      const data = response.data
      setTeamList(data)
    }).catch(error => {
      console.error('Error is:', error);
    })
  }, []);
  

  return (
    <div>
    <div className="team-list-container">
      <h2>League of Legends Team Stats</h2>
      <ul className={`team-list ${selectedTeam ? 'blur-background' : ''}`}>
        {teamList.map((team) => (
          <li
            key={team.id}
            onClick={() => {
                setSelectedTeam(team)
            }}
            className="team-list-item"
          >
            <div className="team-item-content">
                {team.image_url ? (
                    <div className="team-image">
                        <img src={team.image_url} alt={`${team.acronym}`} />
                    </div>
                    ) : (
                    <div className="team-image">
                        <div className="team-placeholder">{team.name}</div>
                    </div>
                )}
              <div className="team-info">
                <h3>{team.name} - {team.acronym}</h3>
                <p>Location: {team.location}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {selectedTeam && (
        <TeamModal
          team={selectedTeam}
          teamDetails={selectedTeam}
          onClose={() => setSelectedTeam(null)}
        />
      )}
    </div>
    </div>
  );
};

export default TeamList;
