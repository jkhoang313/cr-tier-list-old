import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Button, ButtonGroup } from 'reactstrap';

import * as actionCreators from '../../state/actions'
import SortedCardsColumn from './SortedCardsColumn';
import { cardDescriptions, cardRoster } from '../../helpers/cards';


class CardsRemainingContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sortedBy: "Alphabetical"
    }

    this.handleSorterChange = this.handleSorterChange.bind(this)
  }

  renderSortedColumns() {
    const { sortedBy } = this.state;

    switch (sortedBy) {
      case "Alphabetical":
      default:
        const aToF = cardRoster.filter((card) => card[0] <= "F")
        const gToI = cardRoster.filter((card) => card[0] >= "G" && card[0] <= "I")
        const jToP = cardRoster.filter((card) => card[0] >= "J" && card[0] <= "P")
        const qToZ = cardRoster.filter((card) => card[0] >= "Q")
        return [
          <SortedCardsColumn
            cards={aToF} name={"A to F"} key={1}/>,
          <SortedCardsColumn
            cards={gToI} name={"G to I"} key={2}/>,
          <SortedCardsColumn
            cards={jToP} name={"J to P"} key={3}/>,
          <SortedCardsColumn
            cards={qToZ} name={"Q to Z"} key={4}/>
        ];
      case "Arena":
        const arenaZeroToTwo = cardRoster.filter((name) => cardDescriptions[name]["arena"] <= 1 ).sort((nameOne, nameTwo) => cardDescriptions[nameOne]["arena"] - cardDescriptions[nameTwo]["arena"])
        const arenaThreeToFive = cardRoster.filter((name) => cardDescriptions[name]["arena"] > 1 && cardDescriptions[name]["arena"] <= 4).sort((nameOne, nameTwo) => cardDescriptions[nameOne]["arena"] - cardDescriptions[nameTwo]["arena"])
        const arenaSixToSeven = cardRoster.filter((name) => cardDescriptions[name]["arena"] > 4 && cardDescriptions[name]["arena"] <= 6).sort((nameOne, nameTwo) => cardDescriptions[nameOne]["arena"] - cardDescriptions[nameTwo]["arena"])
        const arenaEightToTen = cardRoster.filter((name) => cardDescriptions[name]["arena"] > 6).sort((nameOne, nameTwo) => cardDescriptions[nameOne]["arena"] - cardDescriptions[nameTwo]["arena"])
        return [
          <SortedCardsColumn
            cards={arenaZeroToTwo} name={"Training Camp-Arena 2"} key={1}/>,
          <SortedCardsColumn
            cards={arenaThreeToFive} name={"Arena 3-5"} key={2}/>,
          <SortedCardsColumn
            cards={arenaSixToSeven} name={"Arena 6-7"} key={3}/>,
          <SortedCardsColumn
            cards={arenaEightToTen} name={"Arena 8-10"} key={4}/>
        ];
      case "Type":
        const troops = cardRoster.filter((name) => cardDescriptions[name]["type"] === "Troop").sort((nameOne, nameTwo) => cardDescriptions[nameOne]["elixirCost"] - cardDescriptions[nameTwo]["elixirCost"])
        const buildingTroops = cardRoster.filter((name) => cardDescriptions[name]["type"] === "BuildingTroop").sort((nameOne, nameTwo) => cardDescriptions[nameOne]["elixirCost"] - cardDescriptions[nameTwo]["elixirCost"])
        const buildings = cardRoster.filter((name) => cardDescriptions[name]["type"] === "Building").sort((nameOne, nameTwo) => cardDescriptions[nameOne]["elixirCost"] - cardDescriptions[nameTwo]["elixirCost"])
        const spells = cardRoster.filter((name) => cardDescriptions[name]["type"] === "Spell").sort((nameOne, nameTwo) => cardDescriptions[nameOne]["elixirCost"] - cardDescriptions[nameTwo]["elixirCost"])
        return [
          <SortedCardsColumn
            cards={troops} name={"Regular Troops"} key={1}/>,
          <SortedCardsColumn
            cards={buildingTroops} name={"Building Troops"} key={2}/>,
          <SortedCardsColumn
            cards={buildings} name={"Buildings"} key={3}/>,
          <SortedCardsColumn
            cards={spells} name={"Spells"} key={4}/>,
        ];
      case "Rarity":
        const commons = cardRoster.filter((name) => cardDescriptions[name]["rarity"] === "Common").sort((nameOne, nameTwo) => cardDescriptions[nameOne]["elixirCost"] - cardDescriptions[nameTwo]["elixirCost"])
        const rares = cardRoster.filter((name) => cardDescriptions[name]["rarity"] === "Rare").sort((nameOne, nameTwo) => cardDescriptions[nameOne]["elixirCost"] - cardDescriptions[nameTwo]["elixirCost"])
        const epics = cardRoster.filter((name) => cardDescriptions[name]["rarity"] === "Epic").sort((nameOne, nameTwo) => cardDescriptions[nameOne]["elixirCost"] - cardDescriptions[nameTwo]["elixirCost"])
        const legendaries = cardRoster.filter((name) => cardDescriptions[name]["rarity"] === "Legendary").sort((nameOne, nameTwo) => cardDescriptions[nameOne]["elixirCost"] - cardDescriptions[nameTwo]["elixirCost"])
        return [
          <SortedCardsColumn
            cards={commons} name={"Commons"} key={1}/>,
          <SortedCardsColumn
            cards={rares} name={"Rares"} key={2}/>,
          <SortedCardsColumn
            cards={epics} name={"Epics"} key={3}/>,
          <SortedCardsColumn
            cards={legendaries} name={"Legendaries"} key={4}/>,
        ];
      case "Elixir":
        const elixirOneToTwo = cardRoster.filter((name) => cardDescriptions[name]["elixirCost"] <= 3).sort((nameOne, nameTwo) => cardDescriptions[nameOne]["elixirCost"] - cardDescriptions[nameTwo]["elixirCost"])
        const elixirThreeToFive = cardRoster.filter((name) => cardDescriptions[name]["elixirCost"] > 3 && cardDescriptions[name]["elixirCost"] <= 5).sort((nameOne, nameTwo) => cardDescriptions[nameOne]["elixirCost"] - cardDescriptions[nameTwo]["elixirCost"])
        const elixirSixToNine = cardRoster.filter((name) => cardDescriptions[name]["elixirCost"] > 5).sort((nameOne, nameTwo) => cardDescriptions[nameOne]["elixirCost"] - cardDescriptions[nameTwo]["elixirCost"])
        return [
          <SortedCardsColumn
            cards={elixirOneToTwo}
            name={"1-3 Elixir"}
            sections={4}
            key={1}/>,
          <SortedCardsColumn
            cards={elixirThreeToFive}
            name={"4-5 Elixir"}
            sections={4}
            key={2}/>,
          <SortedCardsColumn
            cards={elixirSixToNine}
            name={"6-9 Elixir"}
            sections={4}
            key={3}/>,
        ];
    }
  }

  handleSorterChange(event) {
    this.setState({
      sortedBy: event.target.innerHTML
    })
  }

  render() {
    const { sortedBy } = this.state

    return (
      <Row className='cards-remaining-container'>
        <Col xs="12" md="12" className="panel">
          <Row className="title">
            <h2>Card Pool</h2>
          </Row>
          <ButtonGroup className="card-sorter row">
            <Col xs="12" md="12">
              <Button
                color="primary" onClick={this.handleSorterChange}
                active={sortedBy === "Alphabetical"}>
                Alphabetical
              </Button>
              <Button
                color="primary" onClick={this.handleSorterChange}
                active={sortedBy === "Arena"}>
                Arena
              </Button>
              <Button
                color="primary" onClick={this.handleSorterChange}
                active={sortedBy === "Type"}>
                Type
              </Button>
              <Button
                color="primary" onClick={this.handleSorterChange}
                active={sortedBy === "Rarity"}>
                Rarity
              </Button>
              <Button
                color="primary" onClick={this.handleSorterChange}
                active={sortedBy === "Elixir"}>
                Elixir
              </Button>
            </Col>
          </ButtonGroup>
          <Row className="sorted-cards-container">
            { this.renderSortedColumns() }
          </Row>
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
)(CardsRemainingContainer)
