import React, { useState, useEffect } from 'react';

const FreeChampionRotation = () => {
  const [freeChampionRotation, setFreeChampionRotation] = useState([]);

  useEffect(() => {
    const fetchFreeChampionRotation = async () => {
      try {
        const response = await fetch(
          'https://na1.api.riotgames.com/lol/platform/v3/champion-rotations',
          {
            method: 'GET',
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
                "Accept-Language": "en-US,en;q=0.9",
                "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                "Origin": "https://developer.riotgames.com",
                'X-Riot-Token': 'RGAPI-d90a8d01-6bf6-4165-ba04-d435ff7aaf64',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch free champion rotation data');
        }

        const data = await response.json();
        setFreeChampionRotation(data.freeChampionIds);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFreeChampionRotation();
  }, []);

  return (
    <div className="free-champion-rotation">
      <h2>Free Champion Rotation</h2>
      <ul>
        {freeChampionRotation.map((championId) => (
          <li key={championId}>{championId}</li>
        ))}
      </ul>
    </div>
  );
};

export default FreeChampionRotation;
