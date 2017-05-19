import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Button, ButtonGroup } from 'reactstrap';

import * as actionCreators from '../../state/actions'
import SortedCardsColumn from './SortedCardsColumn';
import cardFilter from '../../helpers/cardFilter';


class CardsRemainingContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sortedBy: "Alphabetical"
    }

    this.handleSorterChange = this.handleSorterChange.bind(this)
    this.renderSorter = this.renderSorter.bind(this)
  }

  renderSortedColumns() {
    const { sortedBy } = this.state;

    switch (sortedBy) {
      case "Alphabetical":
      default:
        return [
          <SortedCardsColumn
            cards={cardFilter.aToF}
            name={"A to F"}
            key={1}/>,
          <SortedCardsColumn
            cards={cardFilter.gToI}
            name={"G to I"}
            key={2}/>,
          <SortedCardsColumn
            cards={cardFilter.jToP}
            name={"J to P"}
            key={3}/>,
          <SortedCardsColumn
            cards={cardFilter.qToZ}
            name={"Q to Z"}
            key={4}/>
        ];
      case "Arena":
        return [
          <SortedCardsColumn
            cards={cardFilter.arenaZeroToTwo}
            name={"Training Camp-Arena 2"}
            key={1}/>,
          <SortedCardsColumn
            cards={cardFilter.arenaThreeToFive}
            name={"Arena 3-5"}
            key={2}/>,
          <SortedCardsColumn
            cards={cardFilter.arenaSixToSeven}
            name={"Arena 6-7"}
            key={3}/>,
          <SortedCardsColumn
            cards={cardFilter.arenaEightToTen}
            name={"Arena 8-10"}
            key={4}/>
        ];
      case "Type":
        return [
          <SortedCardsColumn
            cards={cardFilter.troops}
            name={"Regular Troops"}
            key={1}/>,
          <SortedCardsColumn
            cards={cardFilter.buildingTroops}
            name={"Building Troops"}
            key={2}/>,
          <SortedCardsColumn
            cards={cardFilter.buildings}
            name={"Buildings"}
            key={3}/>,
          <SortedCardsColumn
            cards={cardFilter.spells}
            name={"Spells"}
            key={4}/>
        ];
      case "Rarity":
        return [
          <SortedCardsColumn
            cards={cardFilter.commons}
            name={"Commons"}
            key={1}/>,
          <SortedCardsColumn
            cards={cardFilter.rares}
            name={"Rares"}
            key={2}/>,
          <SortedCardsColumn
            cards={cardFilter.epics}
            name={"Epics"}
            key={3}/>,
          <SortedCardsColumn
            cards={cardFilter.legendaries} name={"Legendaries"} key={4}/>
        ];
      case "Elixir":
        return [
          <SortedCardsColumn
            cards={cardFilter.elixirOneToTwo}
            name={"1-3 Elixir"}
            sections={4}
            key={1}/>,
          <SortedCardsColumn
            cards={cardFilter.elixirThreeToFive}
            name={"4-5 Elixir"}
            sections={4}
            key={2}/>,
          <SortedCardsColumn
            cards={cardFilter.elixirSixToNine}
            name={"6-9 Elixir"}
            sections={4}
            key={3}/>
        ];
    }
  }

  handleSorterChange(event) {
    this.setState({
      sortedBy: event.target.innerHTML
    })
  }

  renderSorter() {
    const { sortedBy } = this.state;

    const filters = ["Alphabetical", "Arena", "Type", "Rarity" ,"Elixir"];

    return filters.map((sort, index) => (
      <Button
        key={index}
        color="primary" onClick={this.handleSorterChange}
        active={sortedBy === sort}>
        { sort }
      </Button>
    ))
  }

  render() {
    return (
      <Row className='cards-remaining-container'>
        <Col xs="12" md="12" className="panel">
          <Row className="title">
            <h2>Card Pool</h2>
          </Row>
          <ButtonGroup className="card-sorter row">
            <Col xs="12" md="12">
              { this.renderSorter() }
            </Col>
          </ButtonGroup>
          <Row className="sorted-cards-container">
            { this.renderSortedColumns() }
          </Row>
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
)(CardsRemainingContainer);
