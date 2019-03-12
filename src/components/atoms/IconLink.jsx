import React from 'react';
import { StyledNavbarLink } from '../../ui/atoms';

export const IconLink = props => (
  <StyledNavbarLink activeClassName="active" to={props.to}>
    {props.label}
    <i className={`fas ${props.icon}`} />
  </StyledNavbarLink>
);
