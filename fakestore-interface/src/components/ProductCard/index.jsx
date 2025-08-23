import { useNavigate, useLocation } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import {
  Card,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductCategory,
  OfferBadge,
} from './styles';

export function ProductCard({
  product,
  showOfferBadge = true,
  fromPath, // Para passar de onde veio (ex: '/category/1', '/')
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(`/product/${product.id}`, {
      state: { from: fromPath || location.pathname },
    });
  };

  return (
    <Card onClick={handleClick}>
      {product.offer && showOfferBadge && <OfferBadge>OFERTA</OfferBadge>}

      <ProductImage
        src={product.url}
        alt={product.name}
        onError={(e) => {
          e.target.src = '/placeholder-product.png';
        }}
      />

      <ProductInfo>
        <ProductCategory>
          {product.category?.name || 'Categoria'}
        </ProductCategory>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{formatPrice(product.price)}</ProductPrice>
      </ProductInfo>
    </Card>
  );
}
