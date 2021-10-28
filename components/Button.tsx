import styled from 'styled-components';
import theme from 'styles/theme';

export const Button = styled.button`
  font-size: ${theme.typography.p};
  font-weight: 700;
  letter-spacing: 1px;
  color: white;
  background-color: ${theme.palette.primary.cyan};
  padding: 0.9rem 2.1rem;
  border-radius: ${theme.borderRadius};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${theme.palette.primary.cyanActive};
  }
`;
