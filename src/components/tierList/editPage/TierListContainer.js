import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'reactstrap';

import * as actionCreators from '../../../state/actions';
import TierListEditOptions from './TierListEditOptions';
import Tier from '../Tier';
import InlineEdit from '../helpers/InlineEdit';


class TierListContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      autoSave: true,
      usedCardsHidden: false
    }

    this.toggleAutoSave = this.toggleAutoSave.bind(this)
    this.toggleHideUsedCards = this.toggleHideUsedCards.bind(this)
    this.updateTierListName = this.updateTierListName.bind(this)
  }

  renderTiers() {
    const { tierList } = this.props;
    const { tiers } = tierList;

    return tiers.map((tier, index) => {
      return (
        <Tier
          tier={tier}
          index={index}
          key={index}/>
      )
    })
  }

  toggleAutoSave() {
    this.setState({
      autoSave: !this.state.autoSave
    })
  }

  toggleHideUsedCards() {
    this.props.handleHideUsedCardsToggle();
  }

  updateTierListName(name) {
    const { updateTierList } = this.props;

    updateTierList({ name })
  }

  render() {
    const { tierList, addTier } = this.props
    const { name, usedCardsHidden } = tierList;

    return (
      <Row className="tier-list-container">
        <Col sm="12" md="10" className="panel">
          <Row className="tier-list-header">
            <InlineEdit
              text={name}
              onSubmit={this.updateTierListName}
              />
          </Row>
        { this.renderTiers() }
        </Col>
        <Col xs="12" md="2" className="panel">
          <TierListEditOptions
            addTier={addTier}
            toggleAutoSave={this.toggleAutoSave}
            autoSave={this.state.autoSave}
            toggleHideUsedCards={this.toggleHideUsedCards}
            usedCardsHidden={usedCardsHidden}
            />
        </Col>
      </Row>
    )
  }
};

function mapStateToProps(state) {
  return {
    tierList: state.tierList
  }
};

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TierListContainer);
