import React from 'react';
import CharacterCard from './CharacterCard';

import './StarWarsCharacters.css';

const StarWarsCharacters = props => {
  return (
    <div className="card-container">
      <CharacterCard chars={props.chars} />
    </div>
  );
};

export default StarWarsCharacters;
