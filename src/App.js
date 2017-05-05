import React, { Component } from 'react';
import './App.css';

import TierListDisplay from './TierListDisplay.js';
import CardsContainer from './CardsContainer.js';

class App extends Component {
  render() {
    return (
      <main>
        <TierListDisplay />
        <CardsContainer />
      </main>
    );
  };
};

export default App;
