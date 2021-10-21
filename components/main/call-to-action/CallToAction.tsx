import theme from 'styles/theme';
import { Layout, Button } from 'components';
import { Section } from './Section';

export default function CallToAction() {
  return (
    <Layout
      bgColor={theme.palette.primary.darkViolet}
      bgImg={require('@images/bg-boost-desktop.svg').default.src}
    >
      <Section role='article' aria-label='Call to action'>
        <h2>Boost your links today</h2>
        <Button>Get Started</Button>
      </Section>
    </Layout>
  );
}
