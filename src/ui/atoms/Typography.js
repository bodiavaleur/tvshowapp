import styled from 'styled-components';

export const PageHeading = styled.h1`
  font-size: 3rem;
  color: white;
  opacity: 0.7;
`;

export const SectionTitle = styled.h3`
  font-size: 2rem;
  color: white;
  opacity: 0.9;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: white;
  opacity: 0.9;
`;

export const TitleSmall = styled(Title)`
  margin-top: 10px;
  align-self: flex-start;
  color: black;
  font-size: 1.75rem;
`;

export const Info = styled.span`
  display: inline-block;
  line-height: 40px;
  font-size: 1.25rem;
  color: white;
  opacity: 0.9;
  word-spacing: 20px;
  margin: 30px 0;

  .far {
    margin-right: 10px;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: white;
  opacity: 0.9;
  max-width: 65ch;
  line-height: 1.6rem;
`;
