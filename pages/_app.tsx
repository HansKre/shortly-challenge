import '@styles/globals.css';
import type { AppProps } from 'next/app';
import styled from 'styled-components';

const Layout = styled.div`
  padding: 15px 11.5vw;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
