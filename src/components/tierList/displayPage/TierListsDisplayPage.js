import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink
       } from 'reactstrap';
import _, { bindAll } from 'lodash';

import { fetchTierListsByListType } from '../../../state/actions.js';
import TierListsDisplayItem from './TierListsDisplayItem';


class TierListsDisplayPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list_type: this.getListType(props),
      activeSection: 1
    }

    bindAll(this, "renderTierLists")
  }

  componentWillMount() {
    this.props.fetchTierListsByListType(this.state.list_type);
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

  renderTierLists() {
    const { tierLists } = this.props;
    const listStart = (this.state.activeSection - 1) * 8

    const displayedLists = tierLists.lists.slice(listStart, listStart + 8)

    return displayedLists.map((tierList, index) =>
      <TierListsDisplayItem
        tierList={tierList}
        key={index}/>
    )}

  render() {
    const { activeSection } = this.state;
    const totalSections = Math.ceil(this.props.tierLists.lists.length / 8)

    return (
      <Container
        className={`body display-page theme-${this.state.list_type}`}>
        <Row className="banner">
          <h3>{ this.props.routeParams.list_type } Tier Lists</h3>
        </Row>
        <Row>
          <Col xs="12" md={{ size: 10, push: 1, pull: 1}} className="text-center">
            <Pagination size="md">
              <PaginationItem>
                <PaginationLink
                  previous
                  onClick={() => (
                    activeSection > 1 ? this.setState({activeSection: activeSection - 1}) : null
                  )}/>
              </PaginationItem>
                { _.range(1, totalSections + 1).map((number) => (
                  <PaginationItem
                    key={number}
                    active={number === activeSection}>
                    <PaginationLink
                      onClick={() => this.setState({activeSection: number})}>
                      { number }
                    </PaginationLink>
                  </PaginationItem>
                ))}
              <PaginationItem>
                <PaginationLink
                  next
                  onClick={() => (
                    activeSection < totalSections ? this.setState({activeSection: activeSection + 1}) : null
                  )}/>
              </PaginationItem>
            </Pagination>
          </Col>
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
  return bindActionCreators({
    fetchTierListsByListType
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TierListsDisplayPage);
