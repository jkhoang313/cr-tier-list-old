import React, { Component } from 'react';
import { Container } from 'reactstrap';
import dragula from 'react-dragula';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { addCardToTier, moveCardBetweenTiers, fetchTierList,
       } from '../../../state/actions.js';
import TierListContainer from './TierListContainer.js';
import CardsRemainingContainer from './CardsRemainingContainer.js';
import CommentsContainer from './CommentsContainer.js';


class TierListShowPage extends Component {
  componentWillMount() {
    const { addCardToTier, moveCardBetweenTiers,
            fetchTierList, routeParams } = this.props;
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
    const { tierList, user } = this.props;
    const isCreator = user.id && tierList.creator.id === user.id

    return (
      <Container
        className={`body edit-page theme-${tierList.list_type}`}>
        <TierListContainer isCreator={isCreator}/>
        { isCreator ?
          <CardsRemainingContainer/> : <CommentsContainer/> }
      </Container>
    )
  }
};

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    tierList: state.tierList.selectedTierList
  }
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addCardToTier,
    moveCardBetweenTiers,
    fetchTierList
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TierListShowPage);
