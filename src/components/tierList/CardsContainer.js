import React, { Component } from 'react';

import Card from './Card';
// import { cards } from '../../helpers/cards';


export default class CardsContainer extends Component {
  renderCards(cards) {
    if (cards.length < 1) {
      return <Card name={"MysteryCard"} />
    } else {
      return cards.map((cardName) => {
        return <Card name={cardName} key={cardName}/>;
      });
    }
  };

  // renderSortedCards() {
  //   const { sortedBy } = this.props;
  //   let remainingCards = this.props.cards;
  //
  //   switch (sortedBy) {
  //     case "Alphabetical":
  //     default:
  //       remainingCards.sort()
  //       break;
  //     case "Arena":
  //     remainingCards.sort((nameOne, nameTwo) => cards[nameOne]["arena"] - cards[nameTwo]["arena"])
  //       break;
  //     case "Type":
  //       const troops = remainingCards.filter((name) => cards[name]["type"] === "Troop" )
  //       const buildings = remainingCards.filter((name) => cards[name]["type"] === "Building" )
  //       const spells = remainingCards.filter((name) => cards[name]["type"] === "Spell" )
  //       remainingCards = troops.concat(buildings).concat(spells)
  //       break;
  //     case "Rarity":
  //       const commons = remainingCards.filter((name) => cards[name]["rarity"] === "Common")
  //       const rares = remainingCards.filter((name) => cards[name]["rarity"] === "Rare")
  //       const epics = remainingCards.filter((name) => cards[name]["rarity"] === "Epic")
  //       const legendaries = remainingCards.filter((name) => cards[name]["rarity"] === "Legendary")
  //       remainingCards = commons.concat(rares).concat(epics).concat(legendaries)
  //       break;
  //     case "Elixir":
  //       remainingCards.sort((nameOne, nameTwo) => cards[nameOne]["elixirCost"] - cards[nameTwo]["elixirCost"])
  //       break;
  //   }
  //   return this.renderCards(remainingCards)
  // }

  render() {
    const { cards } = this.props;

    return (
      <div className="cards-container">
        { this.renderCards(cards) }
      </div>
    );
  };
};

// { sortedBy ? this.renderSortedCards() : this.renderCards(cards) }
