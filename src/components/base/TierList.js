import React, { Component } from 'react';
import { Container } from 'reactstrap';

import TierListContainer from '../tierList/TierListContainer.js';
import CardPoolContainer from '../tierList/CardsRemainingContainer.js';


export default class TierList extends Component {
  render() {
    return (
      <Container className="body">
        <TierListContainer />
        <CardPoolContainer />
      </Container>
    )
  }
};
