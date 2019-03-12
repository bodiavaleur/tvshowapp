import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchListItem = styled(Link)`
  max-width: 15%;
  height: 300px;
  flex-grow: 1;
  flex-basis: 15%;
  position: relative;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 15px 2px rgba(35, 35, 35, 0.5);
  background-size: cover;
  background-position: 50% 50%;

  ${({ poster }) =>
    poster &&
    `
    background-image: url(https://image.tmdb.org/t/p/w200/${poster});
  `};
`;
