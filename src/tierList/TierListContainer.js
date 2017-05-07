import React, { Component } from 'react';
import { connect } from 'react-redux'

import Tier from './Tier'

class TierListContainer extends Component {
  renderTiers() {
    const { tiers } = this.props.tierList;

    return tiers.map((tier, index) => {
      return <Tier tier={tier} key={index}/>;
    });
  };

  render() {
    const { name } = this.props.tierList;

    return (
      <div className="tier-list-container">
        <h1>{name}</h1>
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

export default connect(mapStateToProps)(TierListContainer)
