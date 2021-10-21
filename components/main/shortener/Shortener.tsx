import styled from 'styled-components';
import theme from 'styles/theme';
import bgImg from '@images/bg-shorten-desktop.svg';

const Box = styled.div`
  width: 77vw;
  height: 150px;
  position: absolute;
  transform: translate(11.5vw, -75px);
  border-radius: 10px;
  background-color: ${theme.palette.primary.darkViolet};
  background-image: url(${bgImg.src});
  background-size: cover;
`;

export default function Shortener() {
  return <Box>Shorten me!!!</Box>;
}
