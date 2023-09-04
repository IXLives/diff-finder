import React, { useState, useEffect } from 'react';
import TeamModal from './TeamModal';
import './TeamList.css'; // Import the TeamList-specific CSS

const TeamList = () => {
  const [teamList, setTeamList] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [teamSlug, setTeamSlug] = useState(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch(
          'https://cors-anywhere.herokuapp.com/https://api.pandascore.co/lol/teams?Page[Size]=100',
          {
            method: 'GET',
            mode: 'cors',
            headers: {
              Authorization: 'Bearer 0Dal78X-4JNj592dV1BLVtRQLRjohRxVUhWXO2qq2EV4S0VKtWQ',
            },
          }
        );
  
        if (!response.ok) {
          throw new Error('Failed to fetch team data');
        }
  
        const data = await response.json();
        setTeamList(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchTeamData();
  }, []);

  const getTeamInfo = async (slug) => {
    try {
      const response = await fetch(
        `https://api.pandascore.co/lol/teams/${slug}/stats`,
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer 0Dal78X-4JNj592dV1BLVtRQLRjohRxVUhWXO2qq2EV4S0VKtWQ',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch team data');
      }

      const data = await response.json();
      setTeamList(data);
    } catch (error) {
      console.error(error);
    }
  };
  

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
                setTeamSlug(team.slug)
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
          team={getTeamInfo(teamSlug)}
          teamDetails={selectedTeam}
          onClose={() => setSelectedTeam(null)}
        />
      )}
    </div>
    </div>
  );
};

export default TeamList;
