import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bindAll } from 'lodash';
import ToggleButton from 'react-toggle-button';
import { Button } from 'reactstrap';

import * as actionCreators from '../../../state/actions';
import EditTierListModal from './EditTierListModal'


class TierListEditOptions extends Component {
  constructor(props) {
    super(props);

    bindAll(this, ['handleModalState'])
  }

  handleModalState() {
    const { handleEditModalState, tierList } = this.props;

    handleEditModalState(!tierList.editModalOpen);
  }

  render() {
    const { handleAutoSaveToggle, handleHideUsedCardsToggle,
            tierList } = this.props;
  const { autoSaveOn, usedCardsHidden} = tierList;

    return (
      <div className="tier-list-edit-option">
        <EditTierListModal
          isOpen={tierList.editModalOpen}
          toggle={this.handleModalState}
          />
        <Button
          onClick={this.handleModalState}
          outline
          color="primary">
          Edit Tier List
        </Button>
        <ToggleButton
          onToggle={handleHideUsedCardsToggle}
          value={usedCardsHidden}
          />
        <span>Hide used cards</span>
        <ToggleButton
          labelRight="Auto-save"
          onToggle={handleAutoSaveToggle}
          value={autoSaveOn}
          />
        <span>Auto-save</span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
};

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TierListEditOptions);
