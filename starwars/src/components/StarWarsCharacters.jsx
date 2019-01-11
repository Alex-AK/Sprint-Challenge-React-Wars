import React from 'react';
import CharacterCard from './CharacterCard';

import './StarWarsCharacters.css';

const StarWarsCharacters = props => {
  return (
    <div className="card-container">
      {props.chars.map(char => {
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
      })}
    </div>
  );
  // <CharacterCard />
};

export default StarWarsCharacters;
