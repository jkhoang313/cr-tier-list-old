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
    const { addCardToTier, moveCardBetweenTiers,
            moveCardWithinTier, fetchTierList, location
          } = this.props;
    const tierId = location.pathname.split('/')[2]

    fetchTierList(tierId)

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
      const currentPosition = parseInt(el.classList[1].substring(9), 10)
      const oldTierId = parseInt(source.id.substring(5), 10)
      const newTierId = parseInt(target.id.substring(5), 10)

      let position = sibling ? parseInt(sibling.classList[1].substring(9), 10) : -1;

      if (source.classList.contains('tier')) {
        if (source === target) {
          if (currentPosition > 1 || position === -1) {
            moveCardWithinTier({
              tierId: newTierId,
              cardName: el.id,
              position: position
            })
          } else {
            moveCardWithinTier({
              tierId: newTierId,
              cardName: el.id,
              position: position - 1
            })
          }
        } else {
          moveCardBetweenTiers({
            oldTierId: oldTierId,
            newTierId: newTierId,
            cardName: el.id,
            position: position
          })
        }
      } else {
        addCardToTier({
          tierId: parseInt(target.id.substring(5), 10),
          cardName: el.id,
          position: parseInt(position, 10)
        })
      }
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
