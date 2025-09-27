import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { BackgroundContainer } from '../../components/BackgroundContainer';
import { formatPrice } from '../../utils/formatPrice';

import {
  Container,
  BackButton,
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductCategory,
  ProductPrice,
  ProductDescription,
  OfferBadge,
  LoadingMessage,
  ErrorMessage,
  ImageContainer,
  InfoSection,
  BackIcon,
} from './styles';

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        const response = await fetch(`${baseUrl}/products/${id}`);

        if (!response.ok) {
          throw new Error('Produto não encontrado');
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
        console.error('Erro ao carregar produto:', err);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadProduct();
    }
  }, [id]);

  const handleBack = () => {
    // Se tem informação de onde veio, volta para lá, senão vai para home
    if (location.state?.from) {
      navigate(-1); // Volta para página anterior
    } else {
      navigate('/');
    }
  };

  if (loading) {
    return (
      <BackgroundContainer>
        <LoadingMessage>Carregando produto...</LoadingMessage>
      </BackgroundContainer>
    );
  }

  if (error || !product) {
    return (
      <BackgroundContainer>
        <Container>
          <BackButton onClick={handleBack}>
            <BackIcon>←</BackIcon>
            Voltar
          </BackButton>
          <ErrorMessage>{error || 'Produto não encontrado'}</ErrorMessage>
        </Container>
      </BackgroundContainer>
    );
  }

  return (
    <BackgroundContainer $opacity={0.85}>
      <Container>
        <BackButton onClick={handleBack}>
          <BackIcon>←</BackIcon>
          Voltar
        </BackButton>

        <ProductContainer>
          <ImageContainer>
            {product.offer && <OfferBadge>OFERTA</OfferBadge>}
            <ProductImage
              src={product.url}
              alt={product.name}
              onError={(e) => {
                e.target.src = '/placeholder-product.png';
              }}
            />
          </ImageContainer>

          <InfoSection>
            <ProductInfo>
              <ProductCategory>
                {product.category?.name || 'Categoria'}
              </ProductCategory>

              <ProductTitle>{product.name}</ProductTitle>

              <ProductPrice>{formatPrice(product.price)}</ProductPrice>

              {product.description && (
                <ProductDescription>{product.description}</ProductDescription>
              )}
              
            </ProductInfo>
          </InfoSection>
        </ProductContainer>
      </Container>
    </BackgroundContainer>
  );
}
