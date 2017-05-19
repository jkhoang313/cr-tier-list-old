import React, { Component } from 'react';
// import { slide as SideMenu } from 'react-burger-menu';

import NavBar from './base/NavBar.js';


export default class App extends Component {
  render() {
    return (
      <main>
        <NavBar />
        { this.props.children }
      </main>
    )
  }
};

// <SideMenu />
