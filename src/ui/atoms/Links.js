import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: blue;
  }
`;

export const StyledNavbarLink = styled(StyledNavLink)`
  margin: 0 20px;
  font-size: 1.1rem;
  font-weight: 600;
  width: 60px;
  height: 60px;
  text-align: center;

  .fas {
    font-size: 2rem;
    margin-top: 10px;
  }
`;
