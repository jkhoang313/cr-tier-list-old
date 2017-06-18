import React, { Component } from 'react';
// import SwitchButton from 'react-switch-button';
import ToggleButton from 'react-toggle-button'
import { Button } from 'reactstrap';


export default class TierListEditOptions extends Component {
  render() {
    const { addTier, toggleAutoSave, autoSave,
            toggleHideUsedCards, usedCardsHidden
          } = this.props;

    return (
      <div className="tier-list-edit-option">
        <Button
          outline
          color="primary"
          onClick={addTier}>Add A Tier</Button>
        <ToggleButton
          labelRight="Auto-save"
          onToggle={toggleAutoSave}
          value={autoSave}
          />
        <span>Auto-save</span>
        <ToggleButton
          onToggle={toggleHideUsedCards}
          value={usedCardsHidden}
          />
        <span>Hide used cards</span>
      </div>
    )
  }
}
