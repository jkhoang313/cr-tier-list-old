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

    return tiers.map(tier =>
      <Tier tier={tier} />
    )
  }

  render() {
    const { creator, name, description, date_created } = this.props.tierList;

    return (
      <Row className="tier-list-item">
        <Col xs="12" md="12">
          <Row className="tier-list-item-header">
            <h3>{name}</h3>
            <h3 className="right">{creator}</h3>
            <h5>{description}</h5>
          </Row>
          { this.renderTiers() }
        </Col>
      </Row>
    )
  }
}

export default TierListDisplayItem
