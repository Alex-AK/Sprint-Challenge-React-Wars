import React, { Component } from 'react';

import ModalInformation from './ModalInformation';

class CharacterDetailModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    console.log(props.chars);
  }

  render() {
    return (
      <div className="detail-modal">
        {/* {props.chars.map(char => {
          return <ModalInformation key={char.name} name={char.name} />;
        })} */}
      </div>
    );
  }
}

export default CharacterDetailModal;
