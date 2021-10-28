import { LocalStorage } from 'types';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 96px;
`;

interface Props {
  urls: LocalStorage;
}

export default function ShortenedUrls({ urls }: Props) {
  return <Container>Shortened Urls</Container>;
}
