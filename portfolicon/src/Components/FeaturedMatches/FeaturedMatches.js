// FeaturedMatches.js

import React, { useEffect, useState } from 'react';

const FeaturedMatches = () => {
  const [featuredGames, setFeaturedGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedGames = async () => {
        try {
          const response = await fetch(
            'https://na1.api.riotgames.com/lol/spectator/v4/featured-games',
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
            throw new Error('Failed to fetch featured games');
          }
  
          const data = await response.json();
          setFeaturedGames(data.gameList);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
      };
  
      fetchFeaturedGames();
  }, []);

  return (
    <div className="featured-matches">
      <h2>Featured Matches</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {featuredGames.map((game) => (
            <li key={game.gameId}>
              <p>Game ID: {game.gameId}</p>
              {/* Add more game information here */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeaturedMatches;
