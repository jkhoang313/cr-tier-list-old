import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col } from 'reactstrap';

import * as actionCreators from '../../../state/actions';
import TierListsDisplayItem from './TierListsDisplayItem';


class TierListsDisplayPage extends Component {
  constructor(props) {
    super(props)

    this.renderTierLists = this.renderTierLists.bind(this)
  }

  renderTierLists() {
    const { tierLists } = this.props;

    return tierLists.map((tierList, index) =>
      <TierListsDisplayItem
        tierList={tierList}
        key={index}
        />
    )}

  render() {
    return (
      <Container className="body">
        <Row>
          <Col xs="12" md={{ size: 10, push: 1, pull: 1}}>
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
)(TierListsDisplayPage);
