import styled from 'styled-components';
import theme from 'styles/theme';
import bgImg from '@images/bg-shorten-desktop.svg';

export const Controls = styled.div`
  width: 77vw;
  height: 150px;
  position: absolute;
  transform: translate(0, -75px);
  border-radius: ${theme.borderRadiusSmall};
  background-color: ${theme.palette.primary.darkViolet};
  background-image: url(${bgImg.src});
  background-size: cover;
  display: flex;
  flex: 1 auto;
  padding: 1rem 3.35rem;
`;
