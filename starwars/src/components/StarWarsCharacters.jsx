import React from 'react';
import CharacterCard from './CharacterCard';

import './StarWarsCharacters.css';

const StarWarsCharacters = props => {
  const currentIndex = props.currentIndex;
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
      <div className="card-container">{newChars[currentIndex]}</div>
      <button type="text" length={newChars.length} onClick={props.decrement}>
        Previous
      </button>
      <button type="text" onClick={props.increment}>
        Next
      </button>
      {/* {console.log(newChars.length)} */}
    </div>
  );
};

export default StarWarsCharacters;
