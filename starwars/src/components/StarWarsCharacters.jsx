import React from 'react';
import CharacterCard from './CharacterCard';

import './StarWarsCharacters.css';

const StarWarsCharacters = props => {
  // const charName = props.chars.map(char => char.name);
  // console.log(charName);
  return (
    <div className="card-container">
      {props.chars.map(char => {
        return (
          <CharacterCard
            key={char.name}
            name={char.name}
            birthYear={char.birth_year}
          />
        );
      })}
    </div>
  );
  // <CharacterCard />
};

export default StarWarsCharacters;
