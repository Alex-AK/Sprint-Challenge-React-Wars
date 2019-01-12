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
        currentIndex={props.currentIndex}
      />
    );
  });

  return (
    <div>
      <div className="card-container">{newChars}</div>
      <button
        type="text"
        onClick={props.decrement}
        disabled={!props.previous ? true : null}
      >
        Previous
      </button>
      <button
        type="text"
        onClick={props.increment}
        disabled={!props.next ? true : null}
      >
        Next
      </button>
    </div>
  );
};

export default StarWarsCharacters;
