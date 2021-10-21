import styled from 'styled-components';

export const Layout = styled.div<{ bgColor?: string; bgImg?: string }>`
  padding: 15px 11.5vw 0 11.5vw;
  overflow-x: hidden;
  background-color: ${({ bgColor }) => bgColor};
  background-image: ${({ bgImg }) => `url(${bgImg})`};
  background-size: cover;
`;
