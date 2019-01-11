import React from 'react';
import CharacterCard from './CharacterCard';

import './StarWarsCharacters.css';

const StarWarsCharacters = props => {
  const newChars = props.chars.map(char => {
    return (
      <CharacterCard
        key={char.name}
        name={char.name}
        birthYear={char.birth_year}
        hairColor={char.hair_color}
        eyeColor={char.eye_color}
        height={char.height}
      />
    );
  });

  return (
    <div>
      <div className="card-container">{newChars[0]}</div>
      <button type="text" onClick={props.decrement}>
        Previous
      </button>
      <button type="text" onClick={props.increment}>
        Next
      </button>
    </div>
  );
};

export default StarWarsCharacters;
