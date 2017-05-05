import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

// import { fetchMessages } from '../actions'
import CardsContainer from './CardsContainer';

class CardPool extends Component {
  render() {
    const { cardsRemaining } = this.props;

    return (
      <div className='cards-remaining-container'>
        <h2>Card Pool</h2>
        <CardsContainer cards={cardsRemaining}/>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    cardsRemaining: state.tierList.cardsRemaining
  }
}

export default connect(mapStateToProps)(CardPool)
