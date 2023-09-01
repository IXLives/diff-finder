// SummonerLookup.js

import React, { useState } from 'react';

const SummonerLookup = () => {
  const [summonerName, setSummonerName] = useState('');
  const [summonerInfo, setSummonerInfo] = useState(null);
  const [error, setError] = useState(null);

  const fetchSummonerData = async () => {
    try {
      const response = await fetch(
        `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,
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
        throw new Error('Summoner not found'); // Handle error responses
      }
  
      const data = await response.json();
      setSummonerInfo(data);
      setError(null);
    } catch (error) {
      setSummonerInfo(null);
      setError('Summoner not found. Please check the summoner name and try again.');
    }
  };
  

  return (
    <div className="section-container">
      <h2 className="section-header">Summoner ID Lookup</h2>
      <div>
        <input
          type="text"
          placeholder="Summoner Name"
          value={summonerName}
          onChange={(e) => setSummonerName(e.target.value)}
        />
        <button onClick={fetchSummonerData}>Lookup</button>
      </div>
      {summonerInfo && (
      <div className="summoner-info">
        <p>Summoner ID: {summonerInfo.id}</p>
        <p>Summoner Level: {summonerInfo.summonerLevel}</p>
        {/* Display other summoner information as needed */}
      </div>
    )}
    </div>
  );
};

export default SummonerLookup;
