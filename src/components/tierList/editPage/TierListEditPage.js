import React, { Component } from 'react';
import { Container } from 'reactstrap';
import dragula from 'react-dragula';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import * as actionCreators from '../../../state/actions';
import TierListContainer from './TierListContainer.js';
import CardPoolContainer from './CardsRemainingContainer.js';


class TierListEditPage extends Component {
  componentWillMount() {
    const { addCardToTier, moveCardBetweenTiers,
            moveCardWithinTier, fetchTierList, routeParams
          } = this.props;
    const tierId = routeParams.id

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
      console.log(_.findIndex(target.childNodes, (child) => child.id === el.id))

      const oldTierId = parseInt(source.id.substring(5), 10)
      const newTierId = parseInt(target.id.substring(5), 10)

      let position = _.findIndex(target.childNodes, (child) => child.id === el.id)

      if (source.classList.contains('tier')) {
        if (source === target) {
          if (position === -1) {
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
          tierId,
          tierIndex: parseInt(target.id.substring(5), 10),
          cardName: el.id,
          position: position
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
  return state
};

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TierListEditPage);
