import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <nav>
    <Link to="/airtoday">airingtoday</Link>
    <Link to="/air">on the air</Link>
    <Link to="/popular">popular</Link>
    <Link to="/toprated">top rated</Link>
  </nav>
);
