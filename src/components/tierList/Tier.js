import React, { Component } from 'react';
import { Row } from 'reactstrap';

import CardsContainer from './CardsContainer'

class Tier extends Component {
  render() {
    const { tier } = this.props;
    const { title, description, notes, cards } = tier;

    return (
      <Row className="tier">
        <h5>{title} - {cards.length} cards</h5>
        <h6>Description: {description}</h6>
        <CardsContainer cards={cards}/>
        <h6>Notes: {notes}</h6>
      </Row>
    )
  };
};

export default Tier
