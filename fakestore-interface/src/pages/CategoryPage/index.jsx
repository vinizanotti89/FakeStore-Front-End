import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BackgroundContainer } from '../../components/BackgroundContainer';
import { ProductCard } from '../../components/ProductCard';
import {
  Container,
  BackButton,
  BackIcon,
  CategoryHeader,
  CategoryTitle,
  CategoryDescription,
  ProductsGrid,
  LoadingMessage,
  ErrorMessage,
  EmptyMessage,
} from './styles.js';

export function CategoryPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCategoryData() {
      try {
        setLoading(true);

        // Busca produtos da categoria
        const productsResponse = await fetch(
          `http://localhost:3001/products/category/${categoryId}`,
        );
        if (!productsResponse.ok) {
          throw new Error('Erro ao carregar produtos da categoria');
        }
        const productsData = await productsResponse.json();

        // Busca informações das categorias para pegar o nome
        const categoriesResponse = await fetch(
          'http://localhost:3001/categories',
        );
        if (categoriesResponse.ok) {
          const categoriesData = await categoriesResponse.json();
          const currentCategory = categoriesData.find(
            (cat) => cat.id === parseInt(categoryId),
          );
          setCategoryInfo(currentCategory);
        }

        setProducts(productsData);
      } catch (err) {
        setError(err.message);
        console.error('Erro:', err);
      } finally {
        setLoading(false);
      }
    }

    if (categoryId) {
      loadCategoryData();
    }
  }, [categoryId]);

  const handleBack = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <BackgroundContainer>
        <LoadingMessage>Carregando produtos da categoria...</LoadingMessage>
      </BackgroundContainer>
    );
  }

  if (error) {
    return (
      <BackgroundContainer>
        <Container>
          <BackButton onClick={handleBack}>
            <BackIcon>←</BackIcon>
            Voltar para Home
          </BackButton>
          <ErrorMessage>{error}</ErrorMessage>
        </Container>
      </BackgroundContainer>
    );
  }

  return (
    <BackgroundContainer $opacity={0.85}>
      <Container>
        <BackButton onClick={handleBack}>
          <BackIcon>←</BackIcon>
          Voltar para Home
        </BackButton>

        <CategoryHeader>
          <CategoryTitle>{categoryInfo?.name || 'Categoria'}</CategoryTitle>
          <CategoryDescription>
            {products.length === 0
              ? 'Nenhum produto encontrado nesta categoria'
              : `${products.length} produto${products.length !== 1 ? 's' : ''} encontrado${products.length !== 1 ? 's' : ''}`}
          </CategoryDescription>
        </CategoryHeader>

        {products.length === 0 ? (
          <EmptyMessage>
            Nenhum produto disponível nesta categoria no momento.
          </EmptyMessage>
        ) : (
          <ProductsGrid>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                fromPath={`/category/${categoryId}`}
                showOfferBadge={true}
              />
            ))}
          </ProductsGrid>
        )}
      </Container>
    </BackgroundContainer>
  );
}
