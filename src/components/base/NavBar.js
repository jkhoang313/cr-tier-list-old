import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar toggleable>
          <Nav navbar>
            <NavItem>
              <NavLink    href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
