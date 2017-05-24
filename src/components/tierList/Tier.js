import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Collapse, CardBlock } from 'reactstrap';

import * as actionCreators from '../../state/actions';
import TierCards from './TierCards'
import InlineEdit from '../helpers/InlineEdit'


class Tier extends Component {
  constructor(props) {
    super(props)

    this.state = {
      detailsDisplayed: false
    }

    this.openTierDetails = this.openTierDetails.bind(this)
    this.updateTierTitle = this.updateTierTitle.bind(this)
  }

  openTierDetails() {
    this.setState({
      detailsDisplayed: !this.state.detailsDisplayed
    })
  }

  updateTierTitle(title) {
    const { updateTier, tier } = this.props;
    const tierId = tier.id;

    updateTier({ tierId, title });
  }

  render() {
    const { tier } = this.props;
    const { title, cards, notes } = tier;

    return (
      <Row className="tier">
        <Col xs="2" md="2" className="tier-name">
          <InlineEdit
            text={title}
            onSubmit={this.updateTierTitle}
            />
        </Col>
        <Col xs="10" md="10" className="tier-cards">
          <TierCards
            tierId={tier.id}
            cards={cards}/>
        </Col>
        <Col xs="12" md="12">
          {/*<Collapse isOpen={this.state.detailsDisplayed}>
            <CardBlock>
              { notes }
            </CardBlock>
          </Collapse>*/}
        </Col>
      </Row>
    )
  }
};

function mapStateToProps(state) {
  return state
};

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tier)
