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
            fetchTierList, routeParams, tierList } = this.props;
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
      drake.cancel();

      const tierIndex = parseInt(target.id.substring(5), 10);
      const cardName = el.id;
      let position = sibling ? _.findIndex(target.childNodes, sibling) : -1;

      if (source.classList.contains('tier')) {
        const currentPosition = parseInt(el.classList[1].substring(9), 10)

        moveCardBetweenTiers({
          tierId,
          tierIndex,
          cardName,
          position: currentPosition > 1 || position === -1 ? position : position - 1
        })
      } else {
        addCardToTier({
          tierId,
          tierIndex,
          cardName,
          position
        })
      }
    })
  }

  render() {
    return (
      <Container className={`body edit-page theme-${this.props.tierList.list_type}`}>
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
