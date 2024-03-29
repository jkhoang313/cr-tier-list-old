import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import cn from 'classnames';

import { cardDescriptions } from '../../helpers/cards';


export default class Card extends Component {
  renderMenu() {
    const { name, disabled, tiers, tierId, onClick } = this.props;

    if (tiers) {
      return tiers.map((tier, index) => {
        return (
          <li key={index}>
            <a onClick={
              () => disabled ? null : onClick({ tierId: tier.id, name })
            }>{tier.title}</a>
          </li>
        )
      })
    } else {
      if (onClick) {
        return (
          <li>
            <a onClick={() => onClick({ tierId, name })}>
              Remove
            </a>
          </li>
        )
      }
    }
  }

  render() {
    const { name, disabled } = this.props;
    const card = cardDescriptions[name];
    const divId = name.toLowerCase().replace(/\s+/g, '-') + "-card";
    const active = disabled ? false : null;

    return (
      <div className="card-icon" id={divId}>
        <ReactTooltip
          id="card-description"
          type="info"/>
        <Dropdown active={active}>
          <DropdownTrigger>
            <img
              src={card.image}
              className={cn("card-image", { disabled })}
              alt={card.name}
              data-for="card-description"
              data-tip={name}
              onClick={this.togglePopover}/>
          </DropdownTrigger>
          <DropdownContent>
            <ul>
              { this.renderMenu() }
            </ul>
          </DropdownContent>
        </Dropdown>
      </div>
    )
  }
};
