import styled from 'styled-components';

export const ShowCard = styled.div`
  perspective: 600px;
  margin: auto 0;
  position: relative;
  width: 250px;
  height: 375px;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateY(-30deg);
    background-image: url(${props => props.poster});
    background-size: cover;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 5px;
    box-shadow: 0 0 30px black;
    z-index: 0;
  }

  ${({ sm }) =>
    sm &&
    `
    transform: scale(0.8);
    `}

  ${({ md }) =>
    md &&
    `
    transform: scale(1.1);
    z-index: 1;
    `}
  
  ${({ lg }) =>
    lg &&
    `
    transform: scale(1.5);
    z-index: 2;

    &::before {
      content: '';
      box-shadow: 0 0 10px blue;
      transform: none;
    }
    `}
  
  ${({ left }) =>
    left &&
    `
    &::before {
      transform: rotateY(30deg);
    }
    `}

  @media screen and (max-width: 768px) {
    height: 500px;
  }
`;
