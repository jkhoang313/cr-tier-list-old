import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'reactstrap';
import { bindAll } from 'lodash'

import * as actionCreators from '../../state/actions';
import TierCards from './TierCards';


class Tier extends Component {
  constructor(props) {
    super(props)

    this.state = {
      detailsDisplayed: false
    }

    bindAll(this, ['openTierDetails'])
  }

  openTierDetails() {
    this.setState({
      detailsDisplayed: !this.state.detailsDisplayed
    })
  }

  render() {
    const { tier, displayOnly, index } = this.props;
    const { name, cards } = tier;

    return (
      <Row className="tier">
        <Col xs="1" md="1" className="tier-name">
          <h6>{name}</h6>
        </Col>
        <Col xs="11" md="11" className="tier-cards">
          <TierCards
            index={index}
            cards={cards}
            displayOnly={displayOnly}/>
        </Col>
        {/*<Col xs="12" md="12">
          <Collapse isOpen={this.state.detailsDisplayed}>
            <CardBlock>
              { notes }
            </CardBlock>
          </Collapse>
        </Col>*/}
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
