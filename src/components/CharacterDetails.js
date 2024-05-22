// src/components/CharacterDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetails = ({ characterId }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://anapioficeandfire.com/api/characters/${characterId}`);
        setCharacter(response.data);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    fetchData();
  }, [characterId]);

  return (
    <div>
      {character ? (
        <div>
          <h3>{character.name}</h3>
          <p>Gender: {character.gender}</p>
          <p>Culture: {character.culture}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading character details...</p>
      )}
    </div>
  );
};

export default CharacterDetails;
