import styled from 'styled-components';
import theme from 'styles/theme';

export const Input = styled.input`
  background-color: ${theme.palette.neutral.sectionBackground};
  flex-basis: 78%;
  margin-right: 1.4rem;
  border: none;
  border-radius: ${theme.borderRadiusSmall};
  height: 56px;
  font-size: 16px;
  padding-left: 1.9rem;
  padding-top: 0.5rem;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  word-spacing: -1px;
  &:focus,
  &:active,
  &:hover {
    outline: ${theme.palette.secondary.red} groove 2px;
  }
  &:focus-visible {
    background-color: white;
  }
`;
