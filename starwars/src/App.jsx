import React, { Component } from 'react';
import './App.css';
import StarWarsCharacters from './components/StarWarsCharacters';
import CharacterDetailModal from './components/CharacterDetailModal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentIndex: 0
    };
  }

  handleIncrement = event => {
    event.preventDefault();
    this.setState(previousState => {
      if (this.state.currentIndex === 9) {
        // set currentIndex back to 0
        // then ad 1 from the new index.
        console.log('index is maxed');
      } else {
        return { currentIndex: previousState.currentIndex + 1 };
      }
    });
  };

  handleDecrement = event => {
    event.preventDefault();
    this.setState(previousState => {
      if (this.state.currentIndex === 0) {
        // set currentIndex to array's length - 1
        // then subtract 1 from the new index.
        console.log('index is 0');
      } else {
        return { currentIndex: previousState.currentIndex - 1 };
      }
    });
  };

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">Star Wars Character Database</h1>
        <StarWarsCharacters
          chars={this.state.starwarsChars}
          currentIndex={this.state.currentIndex}
          increment={this.handleIncrement}
          decrement={this.handleDecrement}
        />
        {/* Character modal not properly receiving data from API */}
        {/* <CharacterDetailModal chars={this.state.starwarsChars} /> */}
      </div>
    );
  }
}

export default App;
