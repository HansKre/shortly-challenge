import { Layout, Logo } from 'components';

export default function Header() {
  return (
    <Layout>
      <header role='header' aria-label='Page Header'>
        <Logo>Shortly</Logo>
      </header>
    </Layout>
  );
}
