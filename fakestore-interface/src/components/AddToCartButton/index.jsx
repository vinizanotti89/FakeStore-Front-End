import { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';
import {
  AddToCartContainer,
  AddToCartBtn,
  QuantityContainer,
  QuantityButton,
  QuantityDisplay,
  RemoveButton,
} from './styles';

export function AddToCartButton({ product }) {
  const { addItem, removeItem, getItemQuantity, updateQuantity } = useCart();
  const { isAuthenticated, setPendingAction } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const quantity = getItemQuantity(product.id);

  const handleAddToCart = async () => {
    if (!isAuthenticated()) {
      // salva a intenção de compra
      setPendingAction(
        () => () =>
          addItem(
            {
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.url,
            },
            1,
          ),
      );

      toast.info('Faça login para continuar a compra');
      window.location.href = '/login';
      return;
    }

    setIsLoading(true);
    try {
      addItem(
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.url,
        },
        1,
      );
      toast.success(`${product.name} adicionado ao carrinho!`);
    } catch (error) {
      toast.error('Erro ao adicionar produto ao carrinho');
    } finally {
      setIsLoading(false);
    }
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeItem(product.id);
    }
  };

  const handleRemoveCompletely = () => {
    removeItem(product.id);
    toast.info(`${product.name} removido do carrinho`);
  };

  if (quantity === 0) {
    return (
      <AddToCartContainer>
        <AddToCartBtn
          onClick={handleAddToCart}
          disabled={isLoading}
          $isLoading={isLoading}
        >
          {isLoading ? 'Adicionando...' : 'Comprar 🛒'}
        </AddToCartBtn>
      </AddToCartContainer>
    );
  }

  return (
    <AddToCartContainer>
      <QuantityContainer>
        <QuantityButton onClick={handleDecreaseQuantity}>-</QuantityButton>
        <QuantityDisplay>{quantity} no carrinho</QuantityDisplay>
        <QuantityButton onClick={handleIncreaseQuantity}>+</QuantityButton>
      </QuantityContainer>

      <RemoveButton onClick={handleRemoveCompletely}>
        Remover do carrinho
      </RemoveButton>
    </AddToCartContainer>
  );
}
