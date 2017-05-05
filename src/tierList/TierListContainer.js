import React, { Component } from 'react';
import { connect } from 'react-redux'

import Tier from './Tier'

class TierListDisplay extends Component {
  renderTiers() {
    const { tiers } = this.props;

    return tiers.map((tier) => {
      return <Tier tier={tier}/>;
    });
  };

  render() {
    return (
      <div className="tier-list-container">
        <h1>Tier List</h1>
        { this.renderTiers() }
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    tiers: state.tierList.tiers
  }
}

export default connect(mapStateToProps)(TierListDisplay)
