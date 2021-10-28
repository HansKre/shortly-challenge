import theme from '@root/styles/theme';
import styled from 'styled-components';
import { Long } from './Long';

export const Short = styled(Long)`
  color: ${theme.palette.primary.cyan};
`;
