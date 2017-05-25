import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col } from 'reactstrap';

import * as actionCreators from '../../state/actions';


class TierListDisplayItem extends Component {
  render() {
    return (
      <Row>
        <Col xs="12" md="12">
          hi
        </Col>
      </Row>
    )
  }
}

export default TierListDisplayItem
