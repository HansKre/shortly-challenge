import { useState } from 'react';
import { Container } from './Container';
import { CopyButton } from './CopyButton';
import { LeftColumn } from './LeftColumn';
import { Long } from './Long';
import { RightColumn } from './RightColumn';
import { Short } from './Short';

interface Props {
  long: string;
  short: string;
}

export default function ShortenedUrl({ long, short }: Props) {
  const [clicked, setClicked] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(short);
    setClicked(true);
  }

  return (
    <Container>
      <LeftColumn>
        <Long>{long}</Long>
      </LeftColumn>
      <RightColumn>
        <Short>{short}</Short>
        <CopyButton onClick={copyToClipboard} clicked={clicked}>
          {clicked ? 'Copied!' : 'Copy'}
        </CopyButton>
      </RightColumn>
    </Container>
  );
}
