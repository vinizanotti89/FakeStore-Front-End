import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import {
  Card,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductCategory,
  OfferBadge,
  CartSection,
  AddToCartButton,
  QuantityControls,
  QuantityButton,
  QuantityDisplay,
  CartFeedback,
} from './styles';

export function ProductCard({
  product,
  showOfferBadge = true,
  fromPath, // Para passar de onde veio (ex: '/category/1', '/')
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const { addItem, updateQuantity, getItemQuantity } = useCart();
  const { isAuthenticated } = useAuth();
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const currentQuantity = getItemQuantity(product.id);

  // Função original para navegar para detalhes do produto
  const handleCardClick = (e) => {
    // Se clicou nos botões do carrinho, não navega
    if (e.target.closest('.cart-section')) {
      return;
    }

    navigate(`/product/${product.id}`, {
      state: { from: fromPath || location.pathname },
    });
  };

  const showCartFeedback = (message) => {
    setFeedbackMessage(message);
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
    }, 2000);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Evita navegar para a página do produto

    if (!isAuthenticated()) {
      navigate('/login?redirect=' + encodeURIComponent(location.pathname));
      return;
    }

    // Preparar produto no formato esperado pelo carrinho
    const cartProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.url, // Usar 'url' que é o campo da sua API
    };

    addItem(cartProduct, 1);
    showCartFeedback('Adicionado ao carrinho!');
  };

  const handleQuantityChange = (e, increment) => {
    e.stopPropagation(); // Evita navegar para a página do produto

    if (!isAuthenticated()) {
      navigate('/login?redirect=' + encodeURIComponent(location.pathname));
      return;
    }

    const newQuantity = currentQuantity + increment;

    if (newQuantity <= 0) {
      updateQuantity(product.id, 0);
      showCartFeedback('Removido do carrinho');
    } else {
      updateQuantity(product.id, newQuantity);
      showCartFeedback(`Quantidade: ${newQuantity}`);
    }
  };

  return (
    <Card onClick={handleCardClick}>
      {product.offer && showOfferBadge && <OfferBadge>OFERTA</OfferBadge>}

      {showFeedback && <CartFeedback>{feedbackMessage}</CartFeedback>}

      <ProductImage
        src={product.imageUrl}
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

        {/* Nova seção do carrinho */}
        <CartSection className="cart-section">
          {currentQuantity === 0 ? (
            <AddToCartButton onClick={handleAddToCart}>
              🛒 Adicionar
            </AddToCartButton>
          ) : (
            <QuantityControls>
              <QuantityButton onClick={(e) => handleQuantityChange(e, -1)}>
                −
              </QuantityButton>
              <QuantityDisplay>{currentQuantity}</QuantityDisplay>
              <QuantityButton onClick={(e) => handleQuantityChange(e, 1)}>
                +
              </QuantityButton>
            </QuantityControls>
          )}
        </CartSection>
      </ProductInfo>
    </Card>
  );
}
