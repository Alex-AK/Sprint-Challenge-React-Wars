import React from 'react';

const CharacterCard = props => {
  return (
    <div className="character-card">
      <p>{props.name}</p>
      <button>Display Character Information</button>
    </div>
  );
};

export default CharacterCard;
