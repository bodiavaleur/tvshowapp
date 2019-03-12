import styled from 'styled-components';

export const SearchList = styled.ul`
  margin-top: 100px;
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
