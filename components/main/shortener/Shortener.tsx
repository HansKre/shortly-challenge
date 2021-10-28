import { Box } from './Box';
import { Container } from './Container';
import { Input } from './Input';
import { ButtonSecondary } from 'components';

export default function Shortener() {
  return (
    <Box id='shortener'>
      <Container>
        <Input placeholder='Shorten a link here...' />
        <ButtonSecondary>Shorten It!</ButtonSecondary>
      </Container>
    </Box>
  );
}
