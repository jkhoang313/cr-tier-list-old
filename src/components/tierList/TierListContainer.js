import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { Container, Row, Col } from 'reactstrap';

import * as actionCreators from '../../state/actions'
import Tier from './Tier'

class TierListContainer extends Component {
  renderTiers() {
    const { tiers } = this.props.tierList;

    return tiers.map((tier, index) => {
      return <Tier tier={tier} key={index}/>;
    });
  };

  render() {
    const { tierList, addTier } = this.props
    const { name } = tierList;

    return (
      <Row className="tier-list-container">
        <Col sm="12" md="12">
          <Row>
            <h1>{name}</h1>
            <Button
              outline
              color="primary"
              onClick={addTier}>Add A Tier</Button>
          </Row>
        { this.renderTiers() }
        </Col>
      </Row>
    );
  };
};

function mapStateToProps(state) {
  return {
    tierList: state.tierList
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TierListContainer)
