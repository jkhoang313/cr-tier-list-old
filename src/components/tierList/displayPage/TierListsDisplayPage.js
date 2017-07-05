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

  componentWillMount() {
    const { fetchTierListsByListType, routeParams } = this.props;
    let list_type

    switch (routeParams.list_type) {
      default:
      case "tournament":
        list_type = 1;
        break;
      case "ladder":
        list_type = 2;
        break;
      case "2v2":
        list_type = 3;
        break;
      case "draft":
        list_type = 4;
        break;
    }

    fetchTierListsByListType(list_type);
  }

  renderTierLists() {
    const { tierLists } = this.props;

    return tierLists.lists.map((tierList, index) =>
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
