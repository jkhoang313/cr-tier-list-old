import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

// import { fetchMessages } from '../actions'
import CardIcon from './CardIcon';

class CardsContainer extends Component {
  renderCards() {
    const { cardsRemaining } = this.props.tierList;

    return cardsRemaining.map((cardName) => {
      return <CardIcon name={cardName} key={cardName}/>;
    });
  }

  render() {
    return (
      <div className="cards-container">
        <h1>Cards Container</h1>
        { this.renderCards() }
      </div>
    )
  };
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    tierList: state.tierList
  }
}

export default connect(mapStateToProps)(CardsContainer)
