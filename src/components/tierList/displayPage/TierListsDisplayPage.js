import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col } from 'reactstrap';

import * as actionCreators from '../../../state/actions.js';
import TierListsDisplayItem from './TierListsDisplayItem';


class TierListsDisplayPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list_type: this.getListType(props)
    }

    this.renderTierLists = this.renderTierLists.bind(this)
  }

  getListType(props) {
    const { routeParams } = this.props;

    switch (routeParams.list_type) {
      default:
      case "tournament":
        return 1;
      case "ladder":
        return 2;
      case "2v2":
        return 3;
      case "draft":
        return 4;
    }
  }

  componentWillMount() {
    this.props.fetchTierListsByListType(this.state.list_type);
  }

  renderTierLists() {
    const { tierLists } = this.props;

    return tierLists.lists.map((tierList, index) =>
      <TierListsDisplayItem
        tierList={tierList}
        key={index}/>
    )}

  render() {
    return (
      <Container className={`body display-page theme-${this.state.list_type}`}>
        <Row className="banner">
        </Row>
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
