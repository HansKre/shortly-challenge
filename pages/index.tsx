import Head from 'next/head';
import { Header, Main, Footer } from 'components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Shortly - More than just shorter links</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
