import React, { Component } from 'react';
import ToggleButton from 'react-toggle-button'
import { bindAll } from 'lodash'
import { Button } from 'reactstrap';


import EditTierListModal from './EditTierListModal'


export default class TierListEditOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editModalOpen: false
    };

    bindAll(this, ['handleModalState'])
  }

  handleModalState() {
    this.setState({
      editModalOpen: !this.state.editModalOpen
    });
  }

  render() {
    const { toggleAutoSave, autoSave,
            toggleHideUsedCards, usedCardsHidden
          } = this.props;

    return (
      <div className="tier-list-edit-option">
        <EditTierListModal
          isOpen={this.state.editModalOpen}
          toggle={this.handleModalState}
          />
        <Button
          onClick={this.handleModalState}
          outline
          color="primary">
          Edit Tier List
        </Button>
        {/* <Button
          outline
          color="primary"
          onClick={addTier}>Add A Tier</Button> */}
        <ToggleButton
          onToggle={toggleHideUsedCards}
          value={usedCardsHidden}
          />
        <span>Hide used cards</span>
        <ToggleButton
          labelRight="Auto-save"
          onToggle={toggleAutoSave}
          value={autoSave}
          />
        <span>Auto-save</span>
      </div>
    )
  }
}
