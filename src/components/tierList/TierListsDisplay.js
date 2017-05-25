import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col } from 'reactstrap';

import * as actionCreators from '../../state/actions';
import TierListDisplayItem from './TierListDisplayItem';


class TierListsDisplay extends Component {
  constructor(props) {
    super(props)

    this.renderTierLists = this.renderTierLists.bind(this)
  }

  renderTierLists() {
    const { tierLists } = this.props;

    return tierLists.map((tierList) =>
      <TierListDisplayItem
        tierList={tierList}
        />
    )}

  render() {
    return (
      <Container className="body">
        <Row>
          <Col xs="12" md={{ size: 8, push: 2, pull: 2}}>
            { this.renderTierLists() }
          </Col>
        </Row>
      </Container>
    )
  }
};

function mapStateToProps(state) {
  return {
    tierLists: state.tierLists
  }
};

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TierListsDisplay);
