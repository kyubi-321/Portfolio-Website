import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 10rem;
  background-color: #333;
  color: #ffffff;
`;

const NavLogo = styled(Link)`
  font-size: 2.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #ffffff;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: #ffffff;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavLogo to="/">My Portfolio</NavLogo>
      <NavLinks>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/services">Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/profile">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact</NavLink>
        </NavItem>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
