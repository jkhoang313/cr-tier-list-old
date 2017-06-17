import React, { Component } from 'react';
import { Container } from 'reactstrap';

import TierListContainer from './TierListContainer.js';
import CardPoolContainer from './CardsRemainingContainer.js';


export default class TierListEditPage extends Component {
  render() {
    return (
      <Container className="body">
        <TierListContainer />
        <CardPoolContainer />
      </Container>
    )
  }
};
