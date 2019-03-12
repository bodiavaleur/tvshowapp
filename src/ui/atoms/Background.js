import styled from 'styled-components';
import { animated } from 'react-spring';

export const Background = styled.div`
  position: absolute;
  width: 105%;
  height: 105%;
  top: -2.5%;
  left: -2.5%;
  background-image: url(${props =>
    props.bg
      ? props.bg
      : 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-34609.jpg'});
  background-size: cover;
  background-position: 50% 50%;
  z-index: -1;
  filter: blur(15px);
`;

export const BackgroundDark = styled(animated.div)`
  position: absolute;
  top: 125px;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 3;

  ${({ full }) =>
    full &&
    `
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`}
`;
