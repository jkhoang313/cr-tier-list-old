import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../../state/actions.js';
import Card from './Card';


class TierCards extends Component {
  renderCards(cards) {
    const { tierList, removeCardFromTier, displayOnly } = this.props;
    const { id } = tierList;

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
            tierId={id}
            onClick={removeCardFromTier}
            displayOnly={displayOnly}
            position={index}
            key={index}/>
        )
      })
    }
  };

  render() {
    const { cards, index } = this.props;

    return (
      <div
        className="tier cards-container" id={`tier-${index}`}>
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
