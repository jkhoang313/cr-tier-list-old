import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { slide as SideMenu } from 'react-burger-menu';

import NavBar from './base/NavBar.js';
import TierListContainer from './tierList/TierListContainer.js';
import CardPoolContainer from './tierList/CardPoolContainer.js';

class App extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <SideMenu />
        <Container className="body">
          <TierListContainer />
          <CardPoolContainer />
        </Container>
      </main>
    );
  };
};

export default App;
