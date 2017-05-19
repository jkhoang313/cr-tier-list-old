import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'

import { cardDescriptions } from '../helpers/cards';

export default class CardIcon extends Component {
  render() {
    const { name } = this.props;
    const card = cardDescriptions[name];

    return (
      <div className="card">
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
