import React, { Component } from 'react';
import ToggleButton from 'react-toggle-button'
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { bindAll } from 'lodash'



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
    const { addTier, toggleAutoSave, autoSave,
            toggleHideUsedCards, usedCardsHidden
          } = this.props;

    return (
      <div className="tier-list-edit-option">
        <Modal
          isOpen={this.state.editModalOpen}
          toggle={this.handleModalState}>
          <ModalHeader>
          </ModalHeader>
          <ModalBody>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
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
