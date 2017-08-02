import React, { Component } from 'react';
import { Row, Col, Button, ButtonGroup } from 'reactstrap';
import { bindAll } from 'lodash';

import SortedCardsColumn from './SortedCardsColumn';
import cardFilter from '../../../helpers/cardFilter';


class CardsRemainingContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sortedBy: "Alphabetical"
    }

    bindAll(this, "handleSorterChange")
  }

  renderSortedColumns() {
    const { sortedBy } = this.state;
    let cards, names;

    if (sortedBy === "Arena") {
      cards = ["arenaZeroToTwo", "arenaThreeToFive", "arenaSixToSeven", "arenaEightToTen"]
      names = ["Training Camp-Arena 2", "Arena 3-5", "Arena 6-7", "Arena 8-10"]
    } else if (sortedBy === "Type") {
      cards = ["troops", "buildingTroops", "buildings", "spells"]
      names = ["Regular Troops", "Building Troops", "Buildings", "Spells"]
    } else if (sortedBy === "Rarity") {
      cards = ["commons", "rares", "epics", "legendaries"]
      names = ["Commons", "Rares", "Epics", "Legendaries"]
    } else {
      // Alphabetical
      cards = ["aToF", "gToI", "jToP", "qToZ"]
      names = ["A to F", "G to I", "J to P", "Q to Z"]
    }

    switch (sortedBy) {
      case "Alphabetical":
      case "Arena":
      case "Type":
      case "Rarity":
      default:
        return [
          <SortedCardsColumn
            cards={cardFilter[cards[0]]}
            name={names[0]}
            key={1}/>,
          <SortedCardsColumn
            cards={cardFilter[cards[1]]}
            name={names[1]}
            key={2}/>,
          <SortedCardsColumn
            cards={cardFilter[cards[2]]}
            name={names[2]}
            key={3}/>,
          <SortedCardsColumn
            cards={cardFilter[cards[3]]}
            name={names[3]}
            key={4}/>
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
        onClick={this.handleSorterChange}
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

export default CardsRemainingContainer;
