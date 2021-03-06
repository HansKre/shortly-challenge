import styled from 'styled-components';
import theme from 'styles/theme';

export const Logo = styled.h2<{ bright?: boolean }>`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: ${theme.typography.logo};
  font-weight: 600;
  color: ${({ bright }) =>
    bright ? 'white' : theme.palette.neutral.veryDarkBlue};
`;
