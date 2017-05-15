import React, { Component } from 'react';
import { Col } from 'reactstrap';

import CardsContainer from './CardsContainer';

export default class SortedCardsColumn extends Component {
  render() {
    const { cards } = this.props;

    return (
      <Col xs="12" md="4">
        <CardsContainer cards={cards} />
      </Col>
    );
  }
}
