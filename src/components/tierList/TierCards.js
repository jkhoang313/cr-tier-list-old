import React, { Component } from 'react';

import Card from './Card';


export default class TierCards extends Component {
  renderCards(cards) {
    if (cards.length < 1) {
      return <Card name={"MysteryCard"} />
    } else {
      return cards.map((name) => {
        return (
          <Card
            name={name}
            key={name}/>
        );
      });
    }
  };

  render() {
    const { cards } = this.props;

    return (
      <div className="cards-container">
        { this.renderCards(cards) }
      </div>
    );
  };
};
