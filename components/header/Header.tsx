import { Logo } from './Logo';
import { Layout } from 'components';

export default function Header() {
  return (
    <Layout>
      <header role='header' aria-label='Page Header'>
        <Logo>Shortly</Logo>
      </header>
    </Layout>
  );
}
