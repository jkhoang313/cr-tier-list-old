import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addCardToTier } from '../../../state/actions.js'
import Card from '../Card';


class SortedCardsColumn extends Component {
  renderCards() {
    const { cards, tierList, addCardToTier, usedCardsHidden } = this.props;
    const { id, tiers, autoSaveOn } = tierList;

    if (cards.length < 1) {
      return (
        <Card name="MysteryCard"/>
      )
    } else {
      return cards.map((name, index) => {
        if (!this.cardDisabled(name)) {
          return (
            <Card
              tiers={tiers}
              tierId={id}
              onClick={addCardToTier}
              name={name}
              key={index}/>
          );
        } else if (!usedCardsHidden) {
          return (
            <Card
              tiers={tiers}
              tierId={id}
              onClick={addCardToTier}
              name={name}
              disabled={true}
              key={index}/>
          )
        }
        return null;
      })
    }
  };

  cardDisabled(name) {
    const { tiers } = this.props.tierList;

    return tiers.some(tier => tier.cards.includes(name));
  };

  render() {
    const { sections, name } = this.props;

    return (
      <Col xs="12" md={sections || 3}>
        <h6>{name}</h6>
        <div className="cards-container">
          { this.renderCards() }
        </div>
      </Col>
    )
  }
};

function mapStateToProps(state) {
  return {
    tierList: state.tierList,
    usedCardsHidden: state.tierList.usedCardsHidden
  }
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addCardToTier
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortedCardsColumn);
