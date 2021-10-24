import theme from 'styles/theme';
import { Layout, Button } from 'components';
import { Section } from './Section';
import { H2 } from './H2';

export default function CallToAction() {
  return (
    <Layout
      id='calltoaction'
      bgColor={theme.palette.primary.darkViolet}
      bgImg={require('@images/bg-boost-desktop.svg').default.src}
      paddingTop={'0px'}
    >
      <Section role='article' aria-label='Call to action'>
        <H2>Boost your links today</H2>
        <Button>Get Started</Button>
      </Section>
    </Layout>
  );
}
