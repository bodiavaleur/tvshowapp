import React from 'react';
import { NavbarWrapper } from '../../ui/molecules';
import { IconLink } from '../atoms';

export const Navbar = () => (
  <NavbarWrapper>
    <IconLink to="/airtoday" label="Today" icon="fa-calendar-day" />
    <IconLink to="/air" label="Air" icon="fa-broadcast-tower" />
    <IconLink to="/popular" label="Popular" icon="fas fa-fire" />
    <IconLink to="/toprated" label="Top" icon="fas fa-star" />
  </NavbarWrapper>
);
