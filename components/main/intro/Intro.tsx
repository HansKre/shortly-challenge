import svgImg from '@images/illustration-working.svg';
import { Layout } from 'components';
import { Button } from 'components';
import { H1 } from './H1';
import { H3 } from './H3';
import { Section } from './Section';
import { PositionedImage } from './PositionedImage';

export default function Intro() {
  return (
    <Layout>
      <Section role='article' aria-label='Intro Section'>
        <H1>More than just shorter links</H1>
        <H3>
          Build your brand`s recognition and get detailed insights on how your
          links are performing.
        </H3>
        <Button>Get Started</Button>
        <PositionedImage src={svgImg.src} alt='illustration-working' />
      </Section>
    </Layout>
  );
}
