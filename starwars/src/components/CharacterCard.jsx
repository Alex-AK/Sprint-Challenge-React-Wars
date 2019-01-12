import React from 'react';

const CharacterCard = props => {
  return (
    <div className="character-card">
      <h4>{props.name}</h4>
      <p>Birth Year: {props.birthYear}</p>
      {/* <p>Hair Color: {props.hairColor}</p>
      <p>Eye Color: {props.eyeColor}</p>
      <p>Height: {props.height} cm</p> */}
    </div>
  );
};

export default CharacterCard;
