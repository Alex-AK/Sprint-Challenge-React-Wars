import React, { Component } from 'react';

import ModalInformation from './ModalInformation';

class CharacterDetailModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.chars[0]);
    // console.log(this.props.open);
    return (
      <div className="detail-modal">
        {/* {props.chars.map(char => {
          return <ModalInformation key={char.name} name={char.name} />;
        })} */}
        {/* <h1>{this.props.chars.name}</h1> */}
      </div>
    );
  }
}

export default CharacterDetailModal;
