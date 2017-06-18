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
    dragula({
      isContainer: (el) => {
        return el.classList.contains('cards-container');
      },
      accepts: (el, target, source, sibling) => {
        return target.classList.contains('tier')
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
