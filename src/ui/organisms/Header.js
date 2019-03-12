import styled from 'styled-components';
import { animated } from 'react-spring';

export const Header = styled(animated.div)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 125px;
  background: rgba(255, 255, 255, 0.7);
`;

export const HeaderWrapper = styled(animated.header)`
  position: relative;
`;
