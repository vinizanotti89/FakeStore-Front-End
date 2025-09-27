import { Banner, BannerSection, BannerTitle, Container, Content } from './styles';
import { CategoriesCarousel } from '../../components/CategoryCarousel/index.jsx';

export function Home() {
  return (
    <main>
      <BannerSection>
        <BannerTitle>
          Bem vindo(a) a Loja dos Produtos que Deveriam Existir!
        </BannerTitle>
        <Banner />
      </BannerSection>
      <Container>
        <Content>
          <CategoriesCarousel />
          <div> Carrossel Produtos</div>
        </Content>
      </Container>
    </main>
  );
}
