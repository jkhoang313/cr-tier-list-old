import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ToggleButton from 'react-toggle-button';
import { Button } from 'reactstrap';

import { handleAutoSaveToggle, handleHideUsedCardsToggle, handleEditModalState
       } from '../../../state/actions.js';
import { listTypes } from '../../../helpers/listTypes';
import EditTierListModal from './EditTierListModal';


class TierListEditOptions extends Component {
  render() {
    const { handleAutoSaveToggle, handleHideUsedCardsToggle,
            handleEditModalState, tierList } = this.props;
    const { list_type, autoSaveOn, usedCardsHidden } = tierList;

    return (
      <div className="tier-list-edit-option">
        <EditTierListModal/>
        <Button
          onClick={handleEditModalState}
          outline>
          Edit Tier List
        </Button>
        <h6>List Type: {listTypes[list_type].name}</h6>
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
        { autoSaveOn ? null : <Button outline>Save</Button> }
        <span>Auto-save</span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tierList: state.tierList
  }
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    handleAutoSaveToggle,
    handleHideUsedCardsToggle, 
    handleEditModalState
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TierListEditOptions);
