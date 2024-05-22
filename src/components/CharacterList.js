// src/components/CharacterList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://anapioficeandfire.com/api/characters?pageSize=100'); // Adjust the pageSize as needed
        setCharacters(response.data);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchData();
  }, []);

  // Function to select random characters
  const getRandomCharacters = (count) => {
    const randomIndexes = [];
    while (randomIndexes.length < count && randomIndexes.length < characters.length) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    return randomIndexes.map((index) => characters[index]);
  };

  // Select the first 50 random characters from the fetched subset
  const randomCharacters = getRandomCharacters(50);

  return (
    <div>
      <h2>Random Characters (First 50)</h2>
      <ul>
        {randomCharacters.map((character) => (
          <li key={character.url}>
            <Link to={`/characters/${character.url.split('/').pop()}`}>
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
