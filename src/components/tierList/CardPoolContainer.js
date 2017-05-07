import React, { Component } from 'react';
import { connect } from 'react-redux'
import Select from 'react-select'
import { bindActionCreators } from 'redux'

// import { fetchMessages } from '../actions'
import * as actionCreators from '../../state/actions'
import 'react-select/dist/react-select.css';
import CardsContainer from './CardsContainer';

class CardPoolContainer extends Component {
  constructor(props) {
    super(props)

    this.handleSorterChange = this.handleSorterChange.bind(this)
  }

  handleSorterChange(sort) {
    this.props.sortCardsRemaining(sort.value)
  }

  render() {
    const { cardsRemaining } = this.props;
    const { sortedBy, cards } = cardsRemaining
    const selectOptions = [
      { value: 'Alphabetical', label: 'Alphabetical' },
      { value: 'Arena', label: 'Arena' },
      { value: 'Type', label: 'Type' },
      { value: 'Rarity', label: 'Rarity' },
      { value: 'Elixir', label: 'Elixir' }
    ]

    return (
      <div className='cards-remaining-container'>
        <h2>Card Pool</h2>
        <Select
          name="card-pool-sorter"
          value={sortedBy}
          onChange={this.handleSorterChange}
          options={selectOptions}
          clearable={false}/>
        <CardsContainer
          sortedBy={sortedBy}
          cards={cards}/>
      </div>
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
