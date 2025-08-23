import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ADICIONADO
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import api from '../../services/api';
import { Container, Title, ContainerItems } from './styles';

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate(); // ADICIONADO

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');
      setCategories(data);
      console.log(data);
    }
    loadCategories();
  }, []);

  // ADICIONADO - Função para navegar para a página da categoria
  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 2,
    },
  };

  return (
    <Container>
      <Title>C A T E G O R I A S</Title>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        partialVisible={false}
        itemClass="carousel-item"
      >
        {categories.map((category) => (
          <ContainerItems 
            key={category.id} 
            imageUrl={category.url}
            onClick={() => handleCategoryClick(category.id)} // ADICIONADO
          >
          </ContainerItems>
        ))}
      </Carousel>
    </Container>
  );
}