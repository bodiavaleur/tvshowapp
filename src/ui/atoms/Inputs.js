import styled from 'styled-components';
import { animated } from 'react-spring';

export const InputSearch = styled(animated.input)`
  width: 100%;
  height: 50px;
  font-size: 1.5rem;
  text-align: center;
  color: black;
  background: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 7px;
  outline: none;

  &::placeholder {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const InputSearchWrapper = styled(animated.div)`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 40%;
  max-width: 500px;
  height: 100px;
  text-align: center;
`;

export const InputLabel = styled(animated.span)`
  display: block;
  height: 30px;
  margin-top: 10px;
  color: rgb(240, 240, 240);
  opacity: 0.7;
  font-size: 1rem;
  overflow: hidden;
  white-space: nowrap;
`;
