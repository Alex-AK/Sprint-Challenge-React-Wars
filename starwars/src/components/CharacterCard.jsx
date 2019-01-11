import React from 'react';

const CharacterCard = props => {
  return (
    <div className="character-card">
      <p>{props.name}</p>
      <p>Birth Year: {props.birthYear}</p>
    </div>
  );
};

export default CharacterCard;
