import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../../state/actions';
import Card from './Card';


class TierCards extends Component {
  renderCards(cards) {
    const { tierId, removeCardFromTier, displayOnly } = this.props;

    if (cards.length < 1) {
      return (
        <Card
          name={"MysteryCard"}
          disabled={true}/>
      )
    } else {
      return cards.map((name, index) => {
        return (
          <Card
            name={name}
            tierId={tierId}
            onClick={removeCardFromTier}
            displayOnly={displayOnly}
            key={index}/>
        )
      })
    }
  };

  render() {
    const { cards, tierId } = this.props;

    return (
      <div
        className="tier cards-container" id={`tier-${tierId}`}>
        { this.renderCards(cards) }
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    tierList: state.tierList,
  }
};

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TierCards);
