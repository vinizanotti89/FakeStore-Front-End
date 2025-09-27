import { Header } from '../Header';
import { LayoutContainer, MainContent } from './styles';

export function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>{children}</MainContent>
    </LayoutContainer>
  );
}
