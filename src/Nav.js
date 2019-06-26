import React from "react";
import {Navbar,Nav, NavItem, NavLink} from "reactstrap";

const NavBar = () => {
  return (
    <Navbar color="light" light expand="md">
    <Nav className="ml-auto" navbar>
    <NavItem>
    <NavLink href="/">Home</NavLink>
    </NavItem>
    <NavItem>
    <NavLink href="/login">Login</NavLink>
    </NavItem>    
    <NavItem>
    <NavLink href="/vehicles">Vehicles</NavLink>
    </NavItem>

    </Nav>
    </Navbar>

  );
};

export default NavBar;
