import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/tier-lists">Tournament</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/tier-lists">Ladder</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/tier-lists">2v2</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/tier-lists">Special Challenge</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/tier-list/1">Edit</NavLink>
          </NavItem>
          <NavItem className="right">
            <NavLink href="/logout">Logout</NavLink>
          </NavItem>
        </Nav>
      </div>
    )
  }
};
