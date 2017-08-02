import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import TierListEditOptions from './TierListEditOptions';
import Tier from '../Tier';


class TierListContainer extends Component {
  renderTiers() {
    const { tierList } = this.props;
    const { tiers } = tierList;

    return tiers.map((tier, index) => {
      return (
        <Tier
          tier={tier}
          index={index}
          key={index}/>
      )
    })
  }

  render() {
    const { title } = this.props.tierList

    return (
      <Row className="tier-list-container">
        <Col sm="12" md="10" className="panel">
          <Row className="tier-list-header">
            <h3>{ title }</h3>
          </Row>
        { this.renderTiers() }
        </Col>
        <Col xs="12" md="2" className="panel">
          <TierListEditOptions/>
        </Col>
      </Row>
    )
  }
};

function mapStateToProps(state) {
  return {
    tierList: state.tierList.selectedTierList
  }
};

export default connect(mapStateToProps)(TierListContainer);
