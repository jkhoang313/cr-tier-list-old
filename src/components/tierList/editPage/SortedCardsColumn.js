import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../../../state/actions'
import Card from '../Card';


class SortedCardsColumn extends Component {
  constructor(props) {
    super(props)

    this.cardDisabled = this.cardDisabled.bind(this)
  }

  renderCards() {
    const { cards, tiers, addCardToTier, usedCardsHidden } = this.props;

    if (cards.length < 1) {
      return (
        <Card name={"MysteryCard"} />
      )
    } else {
      return cards.map((name, index) => {
        if (!this.cardDisabled(name)) {
          return (
            <Card
              tiers={tiers}
              onClick={addCardToTier}
              name={name}
              key={index}/>
          );
        } else if (!usedCardsHidden) {
          return (
            <Card
              tiers={tiers}
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
    const { tiers } = this.props;

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
    tiers: state.tierList.tiers,
    usedCardsHidden: state.tierList.usedCardsHidden
  }
};

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortedCardsColumn);
