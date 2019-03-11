import styled from 'styled-components';
import { animated } from 'react-spring';

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-34609.jpg);
  background-size: cover;
  z-index: -1;
  filter: blur(15px);
  transform: scale(1.2);
`;

export const BackgroundDark = styled(animated.div)`
  position: absolute;
  top: 125px;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;
