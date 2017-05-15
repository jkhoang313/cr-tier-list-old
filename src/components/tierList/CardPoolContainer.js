import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'reactstrap';

import * as actionCreators from '../../state/actions'
import SortedCardsColumn from './SortedCardsColumn';
// import CardsContainer from './CardsContainer';
import { cards } from '../../helpers/cards';


class CardPoolContainer extends Component {
  constructor(props) {
    super(props)

    this.handleSorterChange = this.handleSorterChange.bind(this)
  }

  handleSorterChange(sort) {
    this.props.sortCardsRemaining(sort.value)
  }

  renderSortedColumns() {
    const { cardsRemaining } = this.props;
    const { sortedBy } = cardsRemaining;
    const names = cardsRemaining.cards;

    switch (sortedBy) {
      case "Alphabetical":
      default:
        const colOne = names.filter((card) => card[0] <= "F")
        const colTwo = names.filter((card) => card[0] >= "G" && card[0] <= "O")
        const colThree = names.filter((card) => card[0] >= "P")
        return [
          <SortedCardsColumn cards={colOne} key={1}/>,
          <SortedCardsColumn cards={colTwo} key={2}/>,
          <SortedCardsColumn cards={colThree} key={3}/>
        ]
        break;
      case "Arena":
        const colArenaOne = names.filter((name) => cards[name]["arena"] <= 3 )
        const colArenaTwo = names.filter((name) => cards[name]["arena"] > 3 && cards[name]["arena"] <= 6)
        const colArenaThree = names.filter((name) => cards[name]["arena"] > 6)
        return [
          <SortedCardsColumn cards={troops} key={1}/>,
          <SortedCardsColumn cards={buildings} key={2}/>,
          <SortedCardsColumn cards={spells} key={3}/>,
        ]
        break;
      case "Type":
        const troops = names.filter((name) => cards[name]["type"] === "Troop" )
        const buildings = names.filter((name) => cards[name]["type"] === "Building" )
        const spells = names.filter((name) => cards[name]["type"] === "Spell" )
        return [
          <SortedCardsColumn cards={troops} key={1}/>,
          <SortedCardsColumn cards={buildings} key={2}/>,
          <SortedCardsColumn cards={spells} key={3}/>,
        ]
        break;
      case "Rarity":
        const commons = names.filter((name) => cards[name]["rarity"] === "Common")
        const rares = names.filter((name) => cards[name]["rarity"] === "Rare")
        const epics = names.filter((name) => cards[name]["rarity"] === "Epic")
        const legendaries = names.filter((name) => cards[name]["rarity"] === "Legendary")
        return [
          <SortedCardsColumn cards={commons} key={1}/>,
          <SortedCardsColumn cards={rares} key={2}/>,
          <SortedCardsColumn cards={epics} key={3}/>,
          <SortedCardsColumn cards={legendaries} key={4}/>,
        ]
        break;
      // case "Elixir":
      //   remainingCards.sort((nameOne, nameTwo) => cards[nameOne]["elixirCost"] - cards[nameTwo]["elixirCost"])
      //   break;
    }
  }

  render() {
    const { cardsRemaining } = this.props;
    const { sortedBy } = cardsRemaining
    const selectOptions = [
      { value: 'Alphabetical', label: 'Alphabetical' },
      { value: 'Arena', label: 'Arena' },
      { value: 'Type', label: 'Type' },
      { value: 'Rarity', label: 'Rarity' },
      { value: 'Elixir', label: 'Elixir' }
    ]

    return (
      <Row className='cards-remaining-container'>
        <Col xs="12" md="12" className="panel">
          <Row>
            <h2>Card Pool</h2>
          </Row>
          <Row>
            <Col xs="12" md="12">
              <Select
                name="card-pool-sorter"
                value={sortedBy}
                onChange={this.handleSorterChange}
                options={selectOptions}
                clearable={false}/>
            </Col>
          </Row>
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
    cardsRemaining: state.tierList.cardsRemaining
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CardPoolContainer)
