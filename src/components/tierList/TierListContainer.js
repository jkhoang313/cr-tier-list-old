import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'reactstrap';
import Switch from 'react-toggle-switch';

import * as actionCreators from '../../state/actions'
import Tier from './Tier'


class TierListContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      autoSave: true
    }

    this.toggleAutoSave = this.toggleAutoSave.bind(this)
  };

  renderTiers() {
    const { tiers } = this.props.tierList;

    return tiers.map((tier, index) => {
      return <Tier tier={tier} key={index}/>;
    });
  };

  toggleAutoSave() {
    this.setState({
      autoSave: !this.state.autoSave
    })
  }

  render() {
    const { tierList, addTier } = this.props
    const { name } = tierList;

    return (
      <Row className="tier-list-container">
        <Col sm="12" md="12" className="panel">
          <Row className="tier-list-header">
            <h4>{name}</h4>
          </Row>
        { this.renderTiers() }
        <Button
          outline
          color="primary"
          onClick={addTier}>Add A Tier</Button>
        <span>save</span>
        <Switch
          onClick={this.toggleAutoSave}
          on={this.state.autoSave}
          />
        </Col>
      </Row>
    );
  };
};

function mapStateToProps(state) {
  return {
    tierList: state.tierList
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TierListContainer)
