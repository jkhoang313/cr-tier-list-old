import React, { Component } from 'react';
import './App.css';

import TierListContainer from './tierList/TierListContainer.js';
import CardPoolContainer from './tierList/CardPoolContainer.js';

class App extends Component {
  render() {
    return (
      <main>
        <TierListContainer />
        <CardPoolContainer />
      </main>
    );
  };
};

export default App;
