import styled from 'styled-components';
import { animated } from 'react-spring';

export const InputSearch = styled(animated.input)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
  width: 300px;
  height: 50px;
  text-align: center;
  font-size: 1.5rem;
  color: black;
  background: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 7px;
  outline: none;

  &::placeholder {
    color: rgba(0, 0, 0, 0.7);
  }
`;
