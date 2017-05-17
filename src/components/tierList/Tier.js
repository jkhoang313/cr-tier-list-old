import React, { Component } from 'react';
import { Row, Col, Collapse, CardBlock } from 'reactstrap';

import TierCards from './TierCards'

class Tier extends Component {
  constructor(props) {
    super(props)

    this.state = {
      detailsDisplayed: false
    }

    this.openTierDetails = this.openTierDetails.bind(this)
  }

  openTierDetails() {
    this.setState({
      detailsDisplayed: !this.state.detailsDisplayed
    })
  }

  render() {
    const { tier } = this.props;
    const { title, cards, notes } = tier;

    return (
      <Row className="tier">
        <Col xs="2" md="2" className="title">
          <h6 onClick={this.openTierDetails}>{title}</h6>
        </Col>
        <Col xs="10" md="10" className="tier-cards">
          <TierCards cards={cards}/>
        </Col>
        <Col xs="12" md="12">
          <Collapse isOpen={this.state.detailsDisplayed}>
            <CardBlock>
              { notes }
            </CardBlock>
          </Collapse>
        </Col>
      </Row>
    )
  };
};

export default Tier
