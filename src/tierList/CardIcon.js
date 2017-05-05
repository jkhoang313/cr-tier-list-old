import React, { Component } from 'react';

import { cards } from '../helpers/cards';
import './CardIcon.css';

export default class CardIcon extends Component {
  render() {
    const { name } = this.props;
    const card = cards[name];

    return (
      <div className="card">
        <h2>{card.elixirCost}</h2>
        <img src={card.image} className="card-image" alt={card.name}/>
      </div>
    );
  };
};
