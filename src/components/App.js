import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import NavBar from './base/NavBar.js';
import TierListContainer from './tierList/TierListContainer.js';
import CardPoolContainer from './tierList/CardPoolContainer.js';

class App extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <Container>
          <TierListContainer />
          <CardPoolContainer />
        </Container>
      </main>
    );
  };
};

export default App;
