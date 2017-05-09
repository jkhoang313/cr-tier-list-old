import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux'

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
      <div className="tier-list-container">
        <h1>{name}</h1>
        <Button
          outline
          color="primary"
          onClick={addTier}>Add A Tier</Button>
        { this.renderTiers() }
      </div>
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
