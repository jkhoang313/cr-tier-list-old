import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import dragula from 'react-dragula';

import * as actionCreators from '../../state/actions';
import Card from './Card';


class TierCards extends Component {
  componentDidMount() {
    if (this.props.drake) {
      const container = ReactDOM.findDOMNode(this);
      this.props.drake.containers.push(container)
    }
  }

  renderCards(cards) {
    const { tierId, removeCardFromTier, displayOnly } = this.props;

    if (cards.length < 1) {
      return (
        <Card
          name={"MysteryCard"}/>
      )
    } else {
      return cards.map((name, index) => {
        return (
          <Card
            name={name}
            tierId={tierId}
            onClick={removeCardFromTier}
            displayOnly={displayOnly}
            key={index}/>
        )
      })
    }
  };

  render() {
    const { cards } = this.props;

    return (
      <div className="cards-container">
        { this.renderCards(cards) }
      </div>
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
)(TierCards);
