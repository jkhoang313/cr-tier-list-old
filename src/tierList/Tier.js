import React, { Component } from 'react';

import CardsContainer from './CardsContainer'
import './Tier.css';

class Tier extends Component {
  render() {
    const { tier } = this.props;
    const { title, description, notes, cards } = tier;

    return (
      <div className="tier">
        <h2>{title}</h2>
      </div>
    )
  };
};

export default Tier
