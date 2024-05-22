import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterInfo = () => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    // Make API request to get information about a specific character (e.g., Jon Snow)
    const fetchData = async () => {
      try {
        const response = await axios.get('https://anapioficeandfire.com/api/characters/2');
        setCharacter(response.data);
      } catch (error) {
        console.error('Error fetching character data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {character ? (
        <div>
          <h2>{character.name}</h2>
          <p>Gender: {character.gender}</p>
          <p>Culture: {character.culture}</p>
          <p>Titles: {character.titles.join(', ')}</p>
          {/* Add more information as needed */}
        </div>
      ) : (
        <p>Loading character information...</p>
      )}
    </div>
  );
};

export default CharacterInfo;