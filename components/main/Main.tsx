import styled from 'styled-components';
import CallToAction from './call-to-action/CallToAction';
import { Intro } from './intro';
import { Statistics } from './statistics';
import { Shortener } from './shortener';

const StyledMain = styled.main`
  margin-top: 30px;
  position: relative;
`;

export default function Main() {
  return (
    <StyledMain role='main' aria-label='Main Content'>
      <Intro />
      <Shortener />
      <Statistics />
      <CallToAction />
    </StyledMain>
  );
}
