import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col } from 'reactstrap';

import * as actionCreators from '../../state/actions';
import TierListDisplayItem from './TierListDisplayItem';


class TierListsDisplay extends Component {
  render() {
    return (
      <Container className="body">
        <Row>
          <Col xs="12" md={{ size: 8, push: 2, pull: 2}}>
            <TierListDisplayItem />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TierListsDisplay
