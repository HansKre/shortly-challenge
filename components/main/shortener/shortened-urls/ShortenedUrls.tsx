import { LocalStorage } from 'types';
import { ShortenedUrl } from './shortened-url';
import { Container } from './Container';

interface Props {
  urls: LocalStorage;
}

export default function ShortenedUrls({ urls }: Props) {
  return (
    <Container>
      {Object.keys(urls).map((url) => {
        return <ShortenedUrl key={url} long={url} short={urls[url].short} />;
      })}
    </Container>
  );
}
