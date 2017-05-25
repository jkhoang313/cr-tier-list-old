import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Container, Row, Col } from 'reactstrap';

import * as actionCreators from '../../state/actions';


class TierListDisplayItem extends Component {
  render() {
    const { creator, name, description, date_created, tiers } = this.props.tierList;

    return (
      <Row className="tier-list-item">
        <Col xs="12" md="12">
          <Row className="tier-list-item-header">
            <h3>{name}</h3>
            <h3 className="right">{creator}</h3>
            <h5>{description}</h5>
          </Row>
          <Row>
            tiers
          </Row>
        </Col>
      </Row>
    )
  }
}

export default TierListDisplayItem
