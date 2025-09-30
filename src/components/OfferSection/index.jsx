import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductsOnOffer } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { AddToCartButton } from '../AddToCartButton'; 
import {
  Container,
  Title,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductCategory,
  LoadingMessage,
  ErrorMessage,
  EmptyMessage,
  OfferBadge,
} from './styles';

export function OffersSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadOffers() {
      try {
        setLoading(true);
        const data = await getProductsOnOffer();
        setProducts(data);
      } catch (err) {
        setError('Erro ao carregar produtos em oferta');
        console.error('Erro:', err);
      } finally {
        setLoading(false);
      }
    }

    loadOffers();
  }, []);

  const handleProductClick = (productId) => {
    // Navega para a página de detalhes, passando info de onde veio
    navigate(`/product/${productId}`, {
      state: { from: '/' }, // Indica que veio da home
    });
  };

  if (loading) {
    return <LoadingMessage>Carregando ofertas...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (products.length === 0) {
    return <EmptyMessage>Nenhuma oferta disponível no momento.</EmptyMessage>;
  }

  return (
    <Container>
      <Title>🔥 Produtos em Destaque</Title>
      <ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <OfferBadge>DESTAQUE</OfferBadge>
            <ProductImage
              src={product.imageUrl}
              alt={product.name}
              onClick={() => handleProductClick(product.id)}
              onError={(e) => {
                e.target.src = '/placeholder-product.png'; // Imagem fallback
              }}
            />
            <ProductInfo>
              <ProductCategory>
                {product.category?.name || 'Categoria'}
              </ProductCategory>
              <ProductName onClick={() => handleProductClick(product.id)}>
                {product.name}
              </ProductName>
              <ProductPrice>{formatPrice(product.price)}</ProductPrice>
              
              {/* BOTÃO DE ADICIONAR AO CARRINHO */}
              <AddToCartButton product={product} />
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>
    </Container>
  );
}