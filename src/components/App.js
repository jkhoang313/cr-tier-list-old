import React, { Component } from 'react';

import NavBar from './base/NavBar.js';
import TierListContainer from './tierList/TierListContainer.js';
import CardPoolContainer from './tierList/CardPoolContainer.js';

class App extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <TierListContainer />
        <CardPoolContainer />
      </main>
    );
  };
};

export default App;
