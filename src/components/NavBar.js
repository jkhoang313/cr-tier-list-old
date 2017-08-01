import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../state/actions.js';
import { Nav, NavItem, NavLink } from 'reactstrap';


class NavBar extends Component {
  render() {
    const { loggedIn, logout, handleLoginModal } = this.props;

    return (
      <Nav>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/tier-lists/tournament">Tournament</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/tier-lists/ladder">Ladder</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/tier-lists/2v2">2v2</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/tier-lists/draft">Draft</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/tier-list/1">Edit</NavLink>
        </NavItem>
        { loggedIn ?
          <NavItem className="right">
            <NavLink onClick={logout}>
              Logout
            </NavLink>
          </NavItem>
          :
          [<NavItem className="right" key={1}>
            <NavLink onClick={() => handleLoginModal(true)}>
              Login
            </NavLink>
          </NavItem>,
          <NavItem className="right" key={2}>
            <NavLink>Sign Up</NavLink>
          </NavItem>] }
      </Nav>
    )
  }
};

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
