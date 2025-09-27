import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackgroundContainer } from '../../components/BackgroundContainer/index.jsx';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import {
  Container,
  Header,
  BackButton,
  BackIcon,
  Title,
  EmptyCartMessage,
  EmptyCartIcon,
  CartContent,
  CartItem,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemPrice,
  QuantityControls,
  QuantityButton,
  QuantityDisplay,
  RemoveButton,
  ItemSubtotal,
  CartSummary,
  SummaryTitle,
  SummaryRow,
  SummaryLabel,
  SummaryValue,
  TotalRow,
  CheckoutButton,
  ConfirmModal,
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalMessage,
  ModalButtons,
  ModalButton,
} from './styles';

export function CartPage() {
  const navigate = useNavigate();
  const {
    items,
    totalItems,
    totalAmount,
    updateQuantity,
    removeItem,
    clearCart,
    formatCurrency,
  } = useCart();
  const { user, isAuthenticated } = useAuth();

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  // Verifica se o usuário está autenticado ao carregar a página
  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
  }, [isAuthenticated, navigate]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleQuantityChange = (itemId, currentQuantity, increment) => {
    const newQuantity = currentQuantity + increment;
    if (newQuantity >= 1) {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleRemoveItem = (item) => {
    setItemToRemove(item);
    setShowConfirmModal(true);
  };

  const confirmRemoveItem = () => {
    if (itemToRemove) {
      removeItem(itemToRemove.id);
      setItemToRemove(null);
    }
    setShowConfirmModal(false);
  };

  const cancelRemoveItem = () => {
    setItemToRemove(null);
    setShowConfirmModal(false);
  };

  const handleCheckout = () => {
    if (items.length > 0) {
      navigate('/checkout');
    }
  };

  const handleClearCart = () => {
    if (
      items.length > 0 &&
      window.confirm('Deseja realmente limpar todo o carrinho?')
    ) {
      clearCart();
    }
  };

  if (!isAuthenticated()) return null;

  if (items.length === 0) {
    return (
      <BackgroundContainer $opacity={0.85}>
        <Container>
          <Header>
            <BackButton onClick={handleBack}>
              <BackIcon>←</BackIcon> Continuar Comprando
            </BackButton>
            <Title>Meu Carrinho</Title>
          </Header>
          <EmptyCartMessage>
            <EmptyCartIcon>🛒</EmptyCartIcon>
            <h2>Seu carrinho está vazio</h2>
            <p>Que tal adicionar alguns produtos incríveis?</p>
            <CheckoutButton onClick={() => navigate('/')}>
              Ver Produtos
            </CheckoutButton>
          </EmptyCartMessage>
        </Container>
      </BackgroundContainer>
    );
  }

  return (
    <BackgroundContainer $opacity={0.85}>
      <Container>
        <Header>
          <BackButton onClick={handleBack}>
            <BackIcon>←</BackIcon> Continuar Comprando
          </BackButton>
          <Title>
            Meu Carrinho ({totalItems} {totalItems === 1 ? 'item' : 'itens'})
          </Title>
        </Header>

        <CartContent>
          <div>
            {items.map((item) => (
              <CartItem key={item.id}>
                <ItemImage
                  src={item.image || '/placeholder-product.png'}
                  alt={item.name}
                  onError={(e) => {
                    e.target.src = '/placeholder-product.png';
                  }}
                />

                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>{formatCurrency(item.price)} cada</ItemPrice>
                </ItemInfo>

                <QuantityControls>
                  <QuantityButton
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity, -1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    −
                  </QuantityButton>
                  <QuantityDisplay>{item.quantity}</QuantityDisplay>
                  <QuantityButton
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity, 1)
                    }
                  >
                    +
                  </QuantityButton>
                </QuantityControls>

                <ItemSubtotal>{formatCurrency(item.subtotal)}</ItemSubtotal>

                <RemoveButton onClick={() => handleRemoveItem(item)}>
                  🗑️
                </RemoveButton>
              </CartItem>
            ))}
          </div>

          <CartSummary>
            <SummaryTitle>Resumo do Pedido</SummaryTitle>

            <SummaryRow>
              <SummaryLabel>
                Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'itens'})
              </SummaryLabel>
              <SummaryValue>{formatCurrency(totalAmount)}</SummaryValue>
            </SummaryRow>

            <SummaryRow>
              <SummaryLabel>Frete</SummaryLabel>
              <SummaryValue>Calculado no checkout</SummaryValue>
            </SummaryRow>

            <TotalRow>
              <SummaryLabel>Total</SummaryLabel>
              <SummaryValue>{formatCurrency(totalAmount)}</SummaryValue>
            </TotalRow>

            <CheckoutButton
              onClick={handleCheckout}
              disabled={items.length === 0}
            >
              Finalizar Compra
            </CheckoutButton>

            <CheckoutButton
              onClick={handleClearCart}
              disabled={items.length === 0}
            >
              Limpar Carrinho
            </CheckoutButton>

            <p
              style={{
                textAlign: 'center',
                fontSize: '0.9rem',
                color: '#667',
                marginTop: '1rem',
              }}
            >
              Conectado como: {user?.name || user?.email}
            </p>
          </CartSummary>
        </CartContent>

        {showConfirmModal && (
          <ConfirmModal>
            <ModalOverlay onClick={cancelRemoveItem} />
            <ModalContent>
              <ModalTitle>Remover item do carrinho?</ModalTitle>
              <ModalMessage>
                Tem certeza que deseja remover "{itemToRemove?.name}" do seu
                carrinho?
              </ModalMessage>
              <ModalButtons>
                <ModalButton variant="cancel" onClick={cancelRemoveItem}>
                  Cancelar
                </ModalButton>
                <ModalButton variant="confirm" onClick={confirmRemoveItem}>
                  Remover
                </ModalButton>
              </ModalButtons>
            </ModalContent>
          </ConfirmModal>
        )}
      </Container>
    </BackgroundContainer>
  );
}
