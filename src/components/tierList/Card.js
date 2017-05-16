import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import { Popover, PopoverTitle, PopoverContent } from 'reactstrap';

import { cardDescriptions } from '../../helpers/cards';


export default class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cardPopoverOpen: false
    }

    this.togglePopover = this.togglePopover.bind(this)
  }

  togglePopover() {
    this.setState({
      cardPopoverOpen: !this.state.cardPopoverOpen
    });
  }

  render() {
    const { name } = this.props;
    const card = cardDescriptions[name];
    const divId = name.toLowerCase().replace(/\s+/g, '-') + "-card";

    return (
      <div className="card-icon" id={divId}>
        <ReactTooltip
          id="card-description"
          type="info"/>
        <img
          src={card.image}
          className="card-image"
          alt={card.name}
          data-for="card-description"
          data-tip={name}
          onClick={this.togglePopover}/>
        <Popover
          placement="top"
          isOpen={this.state.cardPopoverOpen}
          target={divId}
          toggle={this.toggle}>
          <PopoverTitle>Popover Title</PopoverTitle>
          <PopoverContent>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverContent>
        </Popover>
      </div>
    );
  };
};
