import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import { BackgroundContainer } from '../../components/BackgroundContainer/index.jsx';
import { CategoriesCarousel } from '../../components/CategoryCarousel/index.jsx';
import { AddToCartButton } from '../../components/AddToCartButton';
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
  ProductCardContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
} from './styles.js';

export function CategoryPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

  useEffect(() => {
    async function loadCategoryData() {
      try {
        setLoading(true);

        // Busca produtos da categoria
        const productsResponse = await fetch(
          `${baseUrl}/products/category/${categoryId}`,
        );
        if (!productsResponse.ok) {
          throw new Error('Erro ao carregar produtos da categoria');
        }
        const productsData = await productsResponse.json();

        // Busca informações das categorias para pegar o nome e montar imageUrl
        const categoriesResponse = await fetch(`${baseUrl}/categories`);
        if (!categoriesResponse.ok) {
          throw new Error('Erro ao carregar categorias');
        }
        const categoriesData = await categoriesResponse.json();

        // Monto URL completa da imagem para cada categoria
        const categoriesWithImageUrl = categoriesData.map((category) => ({
          ...category,
          imageUrl: `${baseUrl}/uploads/${category.path}`,
        }));

        // Encontro a categoria atual (já com imageUrl, caso precise usar)
        const currentCategory = categoriesWithImageUrl.find(
          (cat) => cat.id === parseInt(categoryId),
        );

        setCategoryInfo(currentCategory);
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

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`, {
      state: { from: `/category/${categoryId}` },
    });
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

        <CategoriesCarousel />

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
              <ProductCardContainer key={product.id}>
                <ProductImage
                  src={product.imageUrl}
                  alt={product.name}
                  onClick={() => handleProductClick(product.id)}
                  onError={(e) => {
                    e.target.src = '/placeholder-product.png';
                  }}
                />
                <ProductInfo>
                  <ProductName onClick={() => handleProductClick(product.id)}>
                    {product.name}
                  </ProductName>
                  <ProductPrice>{formatPrice(product.price)}</ProductPrice>

                  {/*BOTÃO DE ADICIONAR AO CARRINHO */}
                  <AddToCartButton product={product} />
                </ProductInfo>
              </ProductCardContainer>
            ))}
          </ProductsGrid>
        )}
      </Container>
    </BackgroundContainer>
  );
}
