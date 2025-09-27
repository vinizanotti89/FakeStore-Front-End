import { Container } from './styles';

export function BackgroundContainer({ 
  children, 
  minHeight = "100vh", 
  opacity = 0.8 
}) {
  return (
    <Container minHeight={minHeight} opacity={opacity}>
      {children}
    </Container>
  );
}