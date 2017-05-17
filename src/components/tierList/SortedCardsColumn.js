import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { connect } from 'react-redux';

import Card from './Card';


class SortedCardsColumn extends Component {
  constructor(props) {
    super(props)

    this.cardUsed = this.cardUsed.bind(this)
  };

  renderCards() {
    const { cards } = this.props;

    if (cards.length < 1) {
      return <Card name={"MysteryCard"} />
    } else {
      return cards.map((name) => {
        return (
          <Card
            name={name}
            used={this.cardUsed(name)}
            key={name}/>
        );
      });
    }
  };

  cardUsed(name) {
    const { tiers } = this.props;

    return tiers.some(tier => tier.cards.includes(name))
  };

  render() {
    const { sections } = this.props;

    return (
      <Col xs="12" md={sections || 3}>
        <h6>{name}</h6>
        <div className="cards-container">
          { this.renderCards() }
        </div>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  return {
    tiers: state.tierList.tiers
  }
}

export default connect(mapStateToProps)(SortedCardsColumn)
