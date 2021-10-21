import Head from 'next/head';
import { Header, Footer } from 'components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Shortly - More than just shorter links</title>
      </Head>
      <Header />
      <Footer />
    </>
  );
}
