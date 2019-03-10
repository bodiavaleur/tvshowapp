import styled from 'styled-components';

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
`;

export const ButtonMenu = styled(Button)`
  display: block;
  justify-self: flex-start;
  width: 48px;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
  filter: invert(1);
`;
