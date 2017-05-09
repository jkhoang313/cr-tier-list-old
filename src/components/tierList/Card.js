import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'

import { cards } from '../../helpers/cards';

export default class Card extends Component {
  render() {
    const { name } = this.props;
    const card = cards[name];

    return (
      <div className="card-icon" id={name.toLowerCase() + "-card"}>
        <ReactTooltip
          id="card-description"
          type="info"/>
        <img
          src={card.image}
          className="card-image"
          alt={card.name}
          data-for="card-description"
          data-tip="Card Description"/>
      </div>
    );
  };
};
