import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import cn from 'classnames';

import { cardDescriptions } from '../../helpers/cards';


export default class Card extends Component {
  renderMenu() {
    const { name, used, tiers, addCardToTier } = this.props;

    return tiers.map((tier, index) => {
      return (
        <li key={index}>
          <a onClick={
            () => used ? null : addCardToTier({ tierId: tier.id, name })
          }>{tier.title}</a>
        </li>
      )
    })
  }

  render() {
    const { name, used, tiers } = this.props;
    const card = cardDescriptions[name];
    const divId = name.toLowerCase().replace(/\s+/g, '-') + "-card";
    const active = used ? false : null

    return (
      <div className="card-icon" id={divId}>
        <ReactTooltip
          id="card-description"
          type="info"/>
        <Dropdown active={active}>
          <DropdownTrigger>
            <img
              src={card.image}
              className={cn("card-image", { used })}
              alt={card.name}
              data-for="card-description"
              data-tip={name}
              onClick={this.togglePopover}/>
          </DropdownTrigger>
          <DropdownContent>
            <ul>
              { tiers ? this.renderMenu() : null }
            </ul>
          </DropdownContent>
        </Dropdown>
      </div>
    );
  };
};
