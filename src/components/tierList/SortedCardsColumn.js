import React, { Component } from 'react';
import { Col } from 'reactstrap';

import CardsContainer from './CardsContainer';

export default class SortedCardsColumn extends Component {
  render() {
    const { cards, sections, name } = this.props;

    return (
      <Col xs="12" md={sections || 3}>
        <h6>{name}</h6>
        <CardsContainer cards={cards} />
      </Col>
    );
  }
}
