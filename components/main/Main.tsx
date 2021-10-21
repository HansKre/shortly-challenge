import styled from 'styled-components';
import CallToAction from './call-to-action/CallToAction';
import { Intro } from './intro';
import { Statistics } from './statistics';

const StyledMain = styled.main`
  margin-top: 30px;
`;

export default function Main() {
  return (
    <StyledMain role='main' aria-label='Main Content'>
      <Intro />
      <Statistics />
      <CallToAction />
    </StyledMain>
  );
}
