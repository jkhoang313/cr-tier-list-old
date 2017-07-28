import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { slide as SideMenu } from 'react-burger-menu';

import * as actionCreators from '../state/actions.js';
import NavBar from './NavBar.js';


class App extends Component {
  componentWillMount() {
    this.props.login({email: "clyde@crapp.com", password: "123456"})
  }

  render() {
    return (
      <main>
        <NavBar />
        { this.props.children }
      </main>
    )
  }
};

function mapStateToProps(state) {
  return { ...state }
};

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

// <SideMenu />
