import Head from 'next/head';
import { Header } from 'components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Shortly - More than just shorter links</title>
      </Head>
      <Header />
    </>
  );
}
