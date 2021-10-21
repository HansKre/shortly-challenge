import { Layout } from 'components';
import styled from 'styled-components';
import theme from 'styles/theme';

const Section = styled.section`
  height: 775px;
`;

export default function Statistics() {
  return (
    <Layout bgColor={theme.palette.neutral.sectionBackground}>
      <Section role='article' aria-label='Advanced Statistics Section'>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </Section>
    </Layout>
  );
}
