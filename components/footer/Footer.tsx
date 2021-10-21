import { Layout, Logo } from 'components';
import styled from 'styled-components';
import theme from 'styles/theme';

const StyledFooter = styled.footer`
  height: 240px;
`;

export default function Footer() {
  return (
    <Layout bgColor={theme.palette.neutral.veryDarkViolet}>
      <StyledFooter aria-label='Footer'>
        <Logo bright>Shortly</Logo>
      </StyledFooter>
    </Layout>
  );
}
