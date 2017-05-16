import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
          <Nav>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Tools</NavLink>
            </NavItem>
            <NavItem className="ml-auto">
              <NavLink href="#">Logout</NavLink>
            </NavItem>
          </Nav>
      </div>
    );
  }
}
