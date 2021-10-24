import { Layout } from 'components';
import theme from 'styles/theme';
import { H2 } from './H2';
import { P } from './P';
import { Section } from './Section';

export default function Statistics() {
  return (
    <Layout id='statistics' bgColor={theme.palette.neutral.sectionBackground}>
      <Section role='article' aria-label='Advanced Statistics Section'>
        <H2>Advanced Statistics</H2>
        <P>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </P>
      </Section>
    </Layout>
  );
}
