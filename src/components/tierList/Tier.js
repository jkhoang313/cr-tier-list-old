import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import CardsContainer from './CardsContainer'

class Tier extends Component {
  render() {
    const { tier } = this.props;
    const { title, description, notes, cards } = tier;

    return (
      <Row className="tier">
        <Col xs="2" md="2" className="title">
          <h6>{title}</h6>
        </Col>
        <Col xs="10" md="10" className="tier-cards">
          <CardsContainer cards={cards}/>
        </Col>
      </Row>
    )
  };
};

export default Tier
