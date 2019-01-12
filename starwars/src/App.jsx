import React, { Component } from 'react';
import './App.css';
import StarWarsCharacters from './components/StarWarsCharacters';
// import CharacterDetailModal from './components/CharacterDetailModal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: '',
      previous: ''
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
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
        this.setState(
          {
            starwarsChars: data.results,
            next: data.next,
            previous: data.previous
          }
          // () => {
          //   console.log(data);
          // }
        );
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handleIncrement = event => {
    event.preventDefault();
    this.getCharacters(this.state.next);
  };

  handleDecrement = event => {
    event.preventDefault();
    this.getCharacters(this.state.previous);
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">Star Wars Character Database</h1>
        <StarWarsCharacters
          chars={this.state.starwarsChars}
          increment={this.handleIncrement}
          decrement={this.handleDecrement}
          next={this.state.next}
          previous={this.state.previous}
        />
      </div>
    );
  }
}

export default App;
