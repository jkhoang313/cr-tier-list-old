import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import * as actionCreators from '../../state/actions';
import Tier from './Tier';


class TierListDisplayItem extends Component {
  constructor(props) {
    super(props)

    this.renderTiers = this.renderTiers.bind(this)
  }

  renderTiers() {
    const { tiers } = this.props.tierList

    return tiers.map((tier, index) =>
      <Tier tier={tier} key={index}/>
    )
  }

  render() {
    const { creator, name, description, date_modified } = this.props.tierList;

    return (
      <Row className="tier-list-item">
        <Col xs="12" md="12">
          <Row className="header">
            <h3>{name}</h3>
            <h3 className="right">{creator}</h3>
            <h3 className="date-modified">
              Date Modified: {date_modified}
            </h3>
          </Row>
          <Row className="description">
            <h6>{description}</h6>
          </Row>
          { this.renderTiers() }
        </Col>
      </Row>
    )
  }
}

export default TierListDisplayItem
