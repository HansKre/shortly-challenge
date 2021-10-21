import styled from 'styled-components';
import { Intro } from './intro';

const StyledMain = styled.main`
  margin-top: 30px;
`;

export default function Main() {
  return (
    <StyledMain role='main' aria-label='Main Content'>
      <Intro />
    </StyledMain>
  );
}
