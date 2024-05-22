// src/pages/CharacterDetailsPage.js
import React from 'react';
import CharacterDetails from '../components/CharacterDetails';
import { useParams } from 'react-router-dom';  // Import useParams

const CharacterDetailsPage = () => {
  // Use useParams to get the route parameters
  const { id } = useParams();

  return (
    <div>
      <h2>Character Details</h2>
      <CharacterDetails characterId={id} /> {/* Pass characterId as a prop */}
    </div>
  );
};

export default CharacterDetailsPage;
