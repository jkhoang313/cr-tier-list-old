import React, { Component } from 'react';
import Switch from 'react-toggle-switch';
import { Button } from 'reactstrap';


export default class TierListEditOptions extends Component {
  render() {
    const { addTier, toggleAutoSave, autoSave,
            toggleHideUsedCards, usedCardsHidden
          } = this.props;

    return (
      <div>
        <Button
          outline
          color="primary"
          onClick={addTier}>Add A Tier</Button>
        <Switch
          onClick={toggleAutoSave}
          on={autoSave}
          />
        <span>Auto-Save</span>
        <Switch
          onClick={toggleHideUsedCards}
          on={usedCardsHidden}
          />
        <span>Hide used cards</span>
      </div>
    )
  }
}
