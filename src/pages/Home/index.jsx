import {
  Banner,
  BannerSection,
  BannerTitle,
  Content,
} from './styles.js';
import { CategoriesCarousel } from '../../components/CategoryCarousel/index.jsx';
import { OffersSection } from '../../components/OfferSection/index.jsx';
import { BackgroundContainer } from '../../components/BackgroundContainer/index.jsx';
import { HomeNavigation } from '../../components/HomeNavigation/index.jsx'; 

export function Home() {
  return (
    <main>
      <BannerSection>
        <BannerTitle>
          Bem vindo(a) a Loja dos Produtos que Deveriam Existir!
        </BannerTitle>
        <Banner />
      </BannerSection>

      <BackgroundContainer $opacity={0.85}>
        <Content>
          <CategoriesCarousel />
          <OffersSection />
        </Content>
      </BackgroundContainer>

      <HomeNavigation />
    </main>
  );
}
