import React from 'react';

const CharacterCard = props => {
  const charName = props.chars.map(char => char.name);
  console.log(charName);

  return (
    <div>
      {charName.map(char => (
        <p>Name: {char}</p>
      ))}
    </div>
  );
};

export default CharacterCard;
