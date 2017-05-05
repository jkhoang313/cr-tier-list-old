import React, { Component } from 'react';

import CardIcon from './CardIcon';

export default class CardsContainer extends Component {
  renderCards() {
    const { cards } = this.props;

    return cards.map((cardName) => {
      return <CardIcon name={cardName} key={cardName}/>;
    });
  };

  render() {
    return (
      <div className="cards-container">
        { this.renderCards() }
      </div>
    );
  };
};
