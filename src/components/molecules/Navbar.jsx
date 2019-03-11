import React from 'react';
import { StyledNavbarLink } from '../../ui/atoms';
import { NavbarWrapper } from '../../ui/molecules';

export const Navbar = () => (
  <NavbarWrapper>
    <NavbarLink to="/airtoday" label="Today" icon="fa-calendar-day" />
    <NavbarLink to="/air" label="Air" icon="fa-broadcast-tower" />
    <NavbarLink to="/popular" label="Popular" icon="fas fa-fire" />
    <NavbarLink to="/toprated" label="Top" icon="fas fa-star" />
  </NavbarWrapper>
);

const NavbarLink = props => (
  <StyledNavbarLink activeClassName="active" to={props.to}>
    {props.label}
    <i className={`fas ${props.icon}`} />
  </StyledNavbarLink>
);
