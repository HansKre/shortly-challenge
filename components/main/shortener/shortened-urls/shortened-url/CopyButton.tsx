import { ButtonSecondary } from '@componentsButtonSecondary';
import theme from '@root/styles/theme';
import styled from 'styled-components';

export const CopyButton = styled(ButtonSecondary)<{ clicked: boolean }>`
  background-color: ${({ clicked }) =>
    clicked ? theme.palette.primary.darkViolet : undefined};
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 100;
  flex: initial;
  height: 36px;
  letter-spacing: normal;
  margin-left: 1rem;
  padding: 0rem 0rem;
  width: 95px;
`;
