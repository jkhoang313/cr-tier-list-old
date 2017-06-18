import React, { Component } from 'react';
import { Container } from 'reactstrap';
import dragula from 'react-dragula';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../../../state/actions';
import TierListContainer from './TierListContainer.js';
import CardPoolContainer from './CardsRemainingContainer.js';


class TierListEditPage extends Component {
  componentWillMount() {
    const { addCardToTier, removeCardFromTier } = this.props;
    let drake = dragula({
      isContainer: (el) => {
        return el.classList.contains('cards-container');
      },
      accepts: (el, target, source, sibling) => {
        return target.classList.contains('tier')
      },
      copy: (el, source, t) => {
        return !source.classList.contains('tier')
      },
      moves: (el, source, handle, sibling) => {
        return !el.classList.contains('disabled')
      },
      revertOnSpill: true
    })

    drake.on("drop", (el, target, source, sibling) => {
      drake.cancel();
      if (source.classList.contains('tier')) {
        removeCardFromTier({
          tierId: parseInt(source.id.substring(5), 10),
          name: el.id
        })
      };
      addCardToTier({
        tierId: parseInt(target.id.substring(5), 10),
        name: el.id
      });
    })
  }

  render() {
    return (
      <Container className="body">
        <TierListContainer/>
        <CardPoolContainer/>
      </Container>
    )
  }
};

function mapStateToProps(state) {
  return {
  }
};

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TierListEditPage);
