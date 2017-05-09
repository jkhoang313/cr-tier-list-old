import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar toggleable>
          <Nav navbar>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">{"Clyde's Tier List"}</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink href="#">Settings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Logout</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
