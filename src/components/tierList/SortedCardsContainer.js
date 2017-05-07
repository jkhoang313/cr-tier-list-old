import React, { Component } from 'react';

import CardsContainer from './CardsContainer';

export default class SortedCardsContainer extends Component {
  renderSortedCards() {
    const { sortedBy, cards } = this.props;

    switch (sortedBy) {
      case "Alphabetical":
      default:
        return <CardsContainer cards={cards} />;
      case "Type":
        return <CardsContainer cards={cards} />;
      case "Rarity":
        return <CardsContainer cards={cards} />;
      case "Elixir":
        return <CardsContainer cards={cards} />;
    }
  }

  render() {
    return (
      <div className="sorted-cards-container">
        { this.renderSortedCards() }
      </div>
    );
  };
};
