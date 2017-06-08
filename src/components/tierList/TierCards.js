import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import dragula from 'react-dragula';

import * as actionCreators from '../../state/actions';
import Card from './Card';


class TierCards extends Component {
  componentDidMount() {
    const container = ReactDOM.findDOMNode(this);
    this.props.drake.containers.push(container)
    // dragula([container], {
    //   mirrorContainer: container
    // });
  }

  renderCards(cards) {
    const { tierId, removeCardFromTier } = this.props;

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
